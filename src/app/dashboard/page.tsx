import React from 'react';
import { CirclePlus } from 'lucide-react';
import Link from 'next/link';
import {db} from "@/db";
import { customers, invoices } from '@/db/schema';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { eq } from 'drizzle-orm';
import { auth } from '@clerk/nextjs/server';

async function dashboard() {

    const {userId} = await auth();
    if (!userId) {
        return;
    }

    const results = await db.select()
    .from(invoices)
    .innerJoin(customers, eq(invoices.customerId, customers.id))
    .where(eq(invoices.userId, userId));

    

    if (!results) {
        return (
            <div className="flex flex-col gap-5 items-center justify-center h-screen text-center">
                <h1 className="text-2xl font-semibold text-red-500">Failed to load invoices.</h1>
                <p className="text-gray-500">Please check your internet connection or try again later.</p>
            </div>
        )
    }
    
  return (
    <div className="flex flex-col gap-12 items-center pt-[8em] max-w-7xl h-screen mx-auto text-center py-20 px-5">
        <div className='flex justify-between items-center w-full'>
            <h1 className="font-bold text-3xl">
                Dashboard
            </h1>
            <div>
                <Button variant='outline' className='cursor-pointer inline-flex gap-2' asChild>
                    <Link href="/invoices/new">
                        <CirclePlus className='w-4 h-4'/>
                        <span>Create Invoice</span>
                    </Link>
                    
                </Button>
            </div>
        </div>

        <div className='w-full'>
        <Table className='align-left'>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>

                {
                    results.map(invoice => {
                        const invoiceResult = {
                            ...invoice.invoices,
                            customers: invoice.customers
                        }
                        return (
                            <TableRow key={invoiceResult.id} className='cursor-pointer'>
                                <TableCell className="py-0 text-left font-semibold">
                                    <Link href={`/invoices/${invoiceResult.id}`} className='block py-5 w-full'>
                                        {new Date(invoiceResult.createTs).toLocaleDateString()}
                                    </Link>
                                </TableCell>
                                <TableCell className='py-0 text-left font-semibold '>
                                    <Link href={`/invoices/${invoiceResult.id}`} className='block py-5 w-full'>
                                        {invoiceResult.customers.name}
                                    </Link>
                                </TableCell>
                                <TableCell className='py-0 text-left'>
                                    <Link href={`/invoices/${invoiceResult.id}`} className='block py-5 w-full'>
                                        {invoiceResult.customers.email}
                                    </Link>
                                </TableCell>
                                <TableCell className='py-0 text-left'>
                                    <Link href={`/invoices/${invoiceResult.id}`} className='block py-5 w-full'>
                                        <Badge className={cn(
                                                "rounded-full py-[4px] px-[10px] capitalize",
                                                invoiceResult.status === "open" && "bg-blue-600",
                                                invoiceResult.status === "paid" && "bg-green-600",
                                                invoiceResult.status === "void" && "bg-zinc-600",
                                                invoiceResult.status === "uncollectible" && "bg-red-600"
                                            )}>
                                            {invoiceResult.status}
                                        </Badge>
                                    </Link>
                                </TableCell>
                                <TableCell className="py-0 text-right font-semibold">
                                    <Link href={`/invoices/${invoiceResult.id}`} className='block py-5 w-full'>
                                        ${(invoiceResult.value / 100).toFixed(2)}
                                    </Link>
                                </TableCell>
                            </TableRow>
                                
                        )
                    })
                }

            </TableBody>
        </Table>


        </div>
    </div>
  )
}

export default dashboard