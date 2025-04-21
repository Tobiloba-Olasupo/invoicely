"use server"

import {db} from "@/db";
import { customers, invoices, Status } from "@/db/schema";
import { auth } from "@clerk/nextjs/server";
import { redirect } from 'next/navigation';
import { eq, and } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import Stripe from "stripe";
import { headers } from "next/headers";

const stripe = new Stripe(process.env.STRIPE_API_SECRET!)

export async function verifyPaymentWithStripe(invoiceId: number, sessionId: string) {
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status === "paid") {
        await db.update(invoices)
        .set({status: "paid"})
        .where(eq(invoices.id, invoiceId))
        return{success: true}
    } else {
        return{success: false}
    }
}

export async function createAction(formData: FormData) {
    const { userId } = await auth();
    const value = Math.floor(parseFloat(String(formData.get("value"))) * 100);
    const description = formData.get("description") as string;
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;

    if (!userId) {
        return;
    }

    const [customer] = await db.insert(customers)
    .values({
        name,
        email,
        userId,
    })
    .returning({
        id: customers.id
    })
    
    const results = await db.insert(invoices)
    .values({
        value,
        description,
        userId,
        customerId: customer.id,
        status: "open"
    })
    .returning({
        id: invoices.id
    })
    redirect(`/invoices/${results[0].id}`)
}


export async function createUpdateAction(formData: FormData) {
    const { userId } = await auth();
    if (!userId) {
        return;
    }

    const id = formData.get("id") as string;
    const status = formData.get("status") as Status;

    await db
    .update(invoices)
    .set({
        status
    })
    .where(
        and(
            eq(invoices.id, parseInt(id)),
            eq(invoices.userId, userId)
        )
    )
    revalidatePath(`/invoices/${id}`, "page");

}


export async function deleteInvoiceAction(formData: FormData) {
    const {userId} = await auth();
    if (!userId) {
        return;
    }

    const id = formData.get("id") as string;

    await db
    .delete(invoices)
    .where(and(
        eq(invoices.id, parseInt(id)),
        eq(invoices.userId, userId)
    ))

    redirect(`/dashboard`)
}


export async function createPayment(formData: FormData) {
    const headersList = await headers();
    const origin = headersList.get("origin");
    const id = parseInt(formData.get("id") as string);

    const [result] = await db.select({
        status: invoices.status,
        value: invoices.value
    })
    .from(invoices)
    .where(eq(invoices.id, id))
    .limit(1);

    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                price_data: {
                    currency: "usd",
                    product: "prod_SAl6tgl0pGRijy",
                    unit_amount: result.value,
                },
                quantity: 1
            }
        ],
        mode: 'payment',
        success_url: `${origin}/invoices/${id}/payment?status=success&session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${origin}/invoices/${id}/payment?status=canceled&session_id={CHECKOUT_SESSION_ID}`,
    });
    
    if (!session.url) {
        throw new Error("Invalid Session");
    }
    
    redirect(session.url);
}