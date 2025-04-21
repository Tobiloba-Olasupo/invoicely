
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { db } from "@/db";
import { customers, invoices } from "@/db/schema";
import { cn } from "@/lib/utils";
import { eq } from "drizzle-orm";
import { notFound } from "next/navigation";
import { Check, CreditCard } from 'lucide-react';
import { createPayment } from "@/app/actions";
import StatusHandler from "./StatusCheck";



async function PaymentPage({params}: {params: {invoiceId: string}}) {

    const invoiceId = parseInt(params.invoiceId);

    if (!invoiceId) {
      notFound();
    }

    const [result] = await db.select()
    .from(invoices)
    .innerJoin(customers, eq(invoices.customerId, customers.id))
    .where (eq (invoices.id, invoiceId))
    .limit(1);

    const invoice = {
        ...result.invoices,
        customer: result.customers
    }

  return (
    <div className="flex flex-col gap-12 max-w-7xl h-screen mx-auto py-20 px-5">

      <div className='flex flex-col gap-5 sm:flex-row sm:items-center justify-between w-full'>
        <div className='flex gap-5 items-center'>
          <h1 className="text-4xl font-semibold">
              Invoice {invoice.id}
          </h1>
          <Badge className={cn(
            "rounded-full py-[4px] px-[10px] capitalize",
            invoice.status === "open" && "bg-blue-600",
            invoice.status === "paid" && "bg-green-600",
            invoice.status === "void" && "bg-zinc-600",
            invoice.status === "uncollectible" && "bg-red-600"
          )}>
            {invoice.status}
          </Badge>
        </div>
        
        <div className='flex gap-4'>
          {
            invoice.status === "open" && (
              <form action={createPayment}>
                <input type="hidden" name="id" value={invoice.id}/>
                <Button type="submit"  className="bg-green-700 hover:bg-green-900 text-white font-semibold cursor-pointer py-5 px-5 flex items-center">
                  <CreditCard className="w-6 h-auto"/>
                  Make Payment
                </Button>
              </form>
            )
          }

          {
            invoice.status === "paid" && (
              <p className="flex items-center gap-2 text-2xl font-semibold text-green-700">
                <Check className="text-5xl text-white bg-green-700 p-1 rounded-full w-8 h-auto"/>
                Invoice Paid
              </p>
            )
          }

          <StatusHandler invoiceId={invoiceId} />
        </div>
      </div>

      <div className="flex flex-col gap-12">
        <div>
          <div className="flex flex-col gap-4">
            <p className="font-semibold text-3xl">
              ${(invoice.value / 100).toFixed(2)}
            </p>
            <p className="text-2xl">
              {invoice.description}
            </p>
          </div>
        </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-3xl font-semibold">
              Billing Details
            </h3>
            <div>
              <div className="w-full flex justify-between text-[18px] border-t py-4">
                <p>Invoice Id:</p>
                <p>#{invoice.id}</p>
              </div>
              <div className="w-full flex justify-between text-[18px] border-t py-4">
                <p>Invoice Date:</p>
                <p>{(invoice.createTs as Date).toLocaleDateString()}</p>
              </div>
              <div className="w-full flex justify-between text-[18px] border-y py-4">
                <p>Billing Name:</p>
                <p>{invoice.customer.name}</p>
              </div>
            </div>
          </div>
           
      </div>
    </div>
  )
}

export default PaymentPage;