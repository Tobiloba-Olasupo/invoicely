// import Stripe from "stripe";
// import { db } from "@/db";
// import { invoices } from "@/db/schema";
// import { eq } from "drizzle-orm";

// export async function verifyPaymentWithStripe(invoiceId: number, sessionId: string) {
//     const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
//     const session = await stripe.checkout.sessions.retrieve(sessionId);

//     if (session.payment_status === "paid") {
//         await db.update(invoices)
//             .set({ status: "paid" })
//             .where(eq(invoices.id, invoiceId));
//         return { success: true };
//     } else {
//         return { success: false };
//     }
// }