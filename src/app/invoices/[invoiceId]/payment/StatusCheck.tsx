"use client";
import { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function StatusHandler({ invoiceId }: { invoiceId: number }) {
  const searchParams = useSearchParams();
  const paymentStatus = searchParams.get("status");
  const sessionId = searchParams.get("session_id");
  const router = useRouter();

  useEffect(() => {
    async function verifyPayment() {
      if (paymentStatus === "success" && sessionId) {
        const res = await fetch("/api/verify-payment", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ invoiceId, sessionId }),
        });

        const data = await res.json();
        if (data.success) {
          router.refresh();
        }
      }
    }
    verifyPayment();
  }, [sessionId, paymentStatus, invoiceId, router]);

  return null;
}
