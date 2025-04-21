import React from 'react'
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import {deleteInvoiceAction} from "@/app/actions";
  import { invoices } from "@/db/schema";
import { Button } from '@/components/ui/button';
import SubmitButton from '@/components/SubmitButton';

  interface InvoiceProps {
    invoice: typeof invoices.$inferInsert
  }

function DeleteAlert({invoice}: InvoiceProps) {
 

  return (
    <div>
        <AlertDialog>
        <AlertDialogTrigger asChild>
            <Button className='w-full rounded-sm px-2 py-1.5 justify-start font-normal cursor-pointer' variant="ghost">Delete Invoice</Button>
        </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete your account
                    and remove your data from our servers.
                </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                <AlertDialogCancel className='cursor-pointer'>Cancel</AlertDialogCancel>
                    <form action={deleteInvoiceAction}>
                        <input type='hidden' name='id' value={invoice.id}/>
                        <SubmitButton classname={"bg-red-600 hover:bg-red-700"}>Confirm</SubmitButton>
                    </form>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>

    </div>
  )
}

export default DeleteAlert