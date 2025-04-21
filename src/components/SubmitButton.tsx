"use client"
import { useFormStatus } from 'react-dom';
import { Button } from './ui/button'
import { LoaderCircle } from 'lucide-react';

interface SubmitButtonProps {
    children?: React.ReactNode; 
    classname?: string;
    variant?: "default" | "destructive" | "outline" | "ghost" | "link";
}

function SubmitButton({children = "submit", classname = "", variant = "default"}: SubmitButtonProps) {

    const {pending} = useFormStatus();
    
    return (
        <Button
            type="submit"
            className={`w-full cursor-pointer ${classname}`}
            variant={variant}
            disabled={pending}
        >
            <span className={pending ? "text-transparent" : ""} >{children}</span>
            {pending && (
                <span className='absolute flex w-full h-full justify-center items-center text-grey-400'>
                    <LoaderCircle className='relative animate-spin'/>
                </span>
            )}
        </Button>
    )
}

export default SubmitButton;