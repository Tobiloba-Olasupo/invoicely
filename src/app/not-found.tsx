import { Button } from '@/components/ui/button'
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="flex flex-col items-center gap-3 max-w-7xl h-screen mx-auto py-30 px-5">
      <h2 className='font-semibold text-2xl'>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">
        <Button variant="outline" className='cursor-pointer'>
          Return Home
        </Button>
      </Link>
    </div>
  )
}