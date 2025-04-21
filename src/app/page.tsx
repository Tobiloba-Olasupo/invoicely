import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function Home() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center h-screen max-w-7xl mx-auto text-center py-20 px-5">
      <h1 className="font-bold text-8xl">
        Invoicely
      </h1>

      <Button asChild className="cursor-pointer text-[18px] py-[25px] px-[40px]">
        <Link href="/dashboard">Sign In</Link>
      </Button>
    </div>
  );
}
