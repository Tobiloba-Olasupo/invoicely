// import { NextResponse } from "next/server";
// import { verifyPaymentWithStripe } from "@/lib/verify-payment";

// export async function POST(req: Request) {
//     try {
//         const { invoiceId, sessionId } = await req.json();
        
//         // Validate inputs
//         if (!invoiceId || !sessionId) {
//             return NextResponse.json(
//                 { success: false, error: "Missing required parameters" }, 
//                 { status: 400 }
//             );
//         }
        
//         // Make sure invoiceId is a number
//         const numericInvoiceId = Number(invoiceId);
//         if (isNaN(numericInvoiceId)) {
//             return NextResponse.json(
//                 { success: false, error: "Invalid invoice ID format" }, 
//                 { status: 400 }
//             );
//         }
        
//         const result = await verifyPaymentWithStripe(numericInvoiceId, sessionId);
//         return NextResponse.json(result);
//     } catch (error) {
//         console.error("Payment verification error:", error);
//         return NextResponse.json(
//             { success: false, error: "Payment verification failed" }, 
//             { status: 500 }
//         );
//     }
// }