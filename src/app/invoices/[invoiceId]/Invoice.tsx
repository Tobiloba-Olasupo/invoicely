"use client";
import { startTransition, useOptimistic } from 'react';
import { Badge } from "@/components/ui/badge";
import { customers, invoices } from "@/db/schema";
import { cn } from "@/lib/utils";
import {createUpdateAction} from "@/app/actions";
import { ChevronDown } from 'lucide-react';
import { Ellipsis } from 'lucide-react';

import {
  AlertDialog,
} from "@/components/ui/alert-dialog"
import DeleteAlert from './DeleteAlert';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Button } from "@/components/ui/button";
import {AVAILABLE_STATUSES} from "@/data/invoices"
import Link from 'next/link';

interface InvoiceProps{
    invoice: typeof invoices.$inferSelect & {
      customer: typeof customers.$inferSelect
    }
}

function Invoice({invoice}: InvoiceProps) {
    const [currentStatus, setCurrentStatus] = useOptimistic(
        invoice.status,
        (state, newStatus) => {
            return String(newStatus);
        }
    )

    const handleOnUpdateStatus = async (formData: FormData) => {
      const newUpdateStatus = formData.get("status");
      setCurrentStatus(newUpdateStatus);
      startTransition(() => {
        createUpdateAction(formData);
      });
    };

  return (
    <div className="flex flex-col gap-12 max-w-7xl h-screen mx-auto py-20 px-5">

      <div className='flex flex-col gap-5 sm:flex-row sm:items-center justify-between w-full'>
        <div className='flex gap-5 items-center'>
          <h1 className="text-4xl font-semibold">
              Invoice {invoice.id}
          </h1>
          <Badge className={cn(
            "rounded-full py-[4px] px-[10px] capitalize",
            currentStatus === "open" && "bg-blue-600",
            currentStatus === "paid" && "bg-green-600",
            currentStatus === "void" && "bg-zinc-600",
            currentStatus === "uncollectible" && "bg-red-600"
          )}>
            {currentStatus}
          </Badge>
        </div>
        
        <div className='flex gap-4'>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="cursor-pointer flex items-center gap-2">
                Change Status
                <ChevronDown className="w-4 h-auto"/>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {
                AVAILABLE_STATUSES.map(status => {
                  return (
                    <form key={status.id} action={handleOnUpdateStatus} className='w-full'>
                      <input type="hidden" name="id" value={invoice.id}/>
                      <input type="hidden" name="status" value={status.id}/>
                      <DropdownMenuItem asChild>
                        <button type="submit" className='w-full'>
                          {status.label}
                        </button>
                      </DropdownMenuItem>
                    </form>
                  )
                })
              }
            </DropdownMenuContent>
          </DropdownMenu>


          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="cursor-pointer flex items-center gap-2">
                <span className='sr-only'>More Options</span>
                <Ellipsis className='w-4 h-auto'/>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <form>
                <input type='hidden'/>
                <DropdownMenuItem asChild>
                  <Link className='w-full cursor-pointer' href={`/invoices/${invoice.id}/payment`}>
                    Payment
                  </Link>
                </DropdownMenuItem>
              </form>
              <AlertDialog>
                <DeleteAlert invoice={invoice}/>
              </AlertDialog>
            </DropdownMenuContent>
          </DropdownMenu>
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
              <div className="w-full flex justify-between text-[18px] border-t py-4">
                <p>Billing Name:</p>
                <p>{invoice.customer.name}</p>
              </div>
              <div className="w-full flex justify-between text-[18px] border-y py-4">
                <p>Billing Email:</p>
                <p>{invoice.customer.email}</p>
              </div>
            </div>
          </div>
           
      </div>
    </div>
  )
}

export default Invoice;