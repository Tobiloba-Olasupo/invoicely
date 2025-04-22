"use client"
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { SyntheticEvent, useState } from 'react'
import {createAction} from "@/app/actions";
import SubmitButton from '@/components/SubmitButton';
import Form from "next/form";

function AddInvoice() {
    const [state, setState] = useState("ready");

    async function handleOnSubmit(event: SyntheticEvent) {
        if (state === "pending") {
            event.preventDefault();
            return;
        }
        setState("pending")
    }

  return (
    <div className="flex flex-col gap-12 pt-[8em] max-w-7xl h-screen mx-auto py-20 px-5">
        <div className='flex justify-between items-center w-full'>
            <h1 className="font-bold text-3xl">
                Create Invoice
            </h1>
        </div>

        <div className='w-full sm:w-[40%]'>
            <Form action={createAction} onSubmit={handleOnSubmit} className='flex flex-col gap-6'>
                <div className='flex flex-col gap-2'>
                    <Label htmlFor='name'>Billing Name</Label>
                    <Input id="name" name="name" className='h-[45px]' type='text'/>
                </div>
                <div className='flex flex-col gap-2'>
                    <Label htmlFor='email'>Billing Email</Label>
                    <Input id="email" name="email" className='h-[45px]' type='email'/>
                </div>
                <div className='flex flex-col gap-2'>
                    <Label htmlFor='value'>Value</Label>
                    <Input id="value" name="value" className='h-[45px]' type='text'/>
                </div>
                <div className='flex flex-col gap-2'>
                    <Label htmlFor='description'>Description</Label>
                    <Textarea id="description" name="description"/>
                </div>
                <div>
                    <SubmitButton classname='h-[45px]'/>
                </div>
            </Form>
        </div>
    </div>
  )
}

export default AddInvoice;