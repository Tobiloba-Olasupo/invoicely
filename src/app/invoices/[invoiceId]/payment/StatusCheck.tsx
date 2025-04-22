// "use client";
// import { useEffect } from "react";
// import { useSearchParams, useRouter } from "next/navigation";
// import { verifyPaymentWithStripe } from "@/app/actions";

// export default function StatusHandler({ invoiceId }: { invoiceId: number }) {
//   const searchParams = useSearchParams();
//   const paymentStatus = searchParams.get("status");
//   const sessionId = searchParams.get("session_id");
//   const router = useRouter();

//     useEffect(()=>{
//       async function verifyPayment() {
//         if (paymentStatus === "success" && sessionId) {
//           verifyPaymentWithStripe(invoiceId, sessionId)
//           } else if(paymentStatus === "canceled"){
//             console.log("no")
//         }
//       }
//       verifyPayment();
//     }, [sessionId, paymentStatus, invoiceId, router])

    

//   return null;
// }
