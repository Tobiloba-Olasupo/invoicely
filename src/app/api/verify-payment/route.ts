import { NextResponse } from "next/server";
import { verifyPaymentWithStripe } from "@/lib/verify-payment";

export async function POST(req: Request) {
    const { invoiceId, sessionId } = await req.json();
    const result = await verifyPaymentWithStripe(invoiceId, sessionId);
    return NextResponse.json(result);
}