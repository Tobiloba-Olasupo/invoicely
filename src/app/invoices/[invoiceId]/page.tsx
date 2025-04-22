import { db } from "@/db";
import { customers, invoices } from "@/db/schema";
import { eq, and } from "drizzle-orm";
import { notFound } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import Invoice from "./Invoice";

export default async function InvoicePage({ 
  params 
}: { 
  params: { invoiceId: number } 
}) {
  const invoiceId = params.invoiceId;
  const { userId } = await auth();

  if (isNaN(invoiceId)) {
    throw new Error("Invalid Invoice Id");
  }

  if (!userId) {
    notFound();
  }
  
  const [invoice] = await db.select()
    .from(invoices)
    .innerJoin(customers, eq(invoices.customerId, customers.id))
    .where(
      and(
        eq(invoices.id, invoiceId),
        eq(invoices.userId, userId)
      )
    )
    .limit(1);

  console.log("results", invoice);

  if (!invoice) {
    notFound();
  }

  const result = {
    ...invoice.invoices,
    customer: invoice.customers
  };
  
  return (
    <Invoice invoice={result} />
  );
}