import React from 'react'
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import Link from 'next/link'
import { Button } from './ui/button'

function Header() {
  return (
    <div className="flex w-full h-[80px] border-y">
      <div className='flex items-center gap-5 justify-between w-7xl h-full mx-auto px-5'>

        <div>
          <Link href="/">
            <p className='text-3xl font-bold'>Invoicely</p>
          </Link>   
        </div>
        
        <div className='flex gap-2'>

            <SignedOut>
              <Button asChild className="bg-black text-white px-4 py-2 rounded cursor-pointer" >
                <SignInButton/>
              </Button>
            </SignedOut>
      
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </div>
  )
}

export default Header