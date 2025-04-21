import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
    return (
        <div className="flex flex-col items-center h-screen max-w-7xl mx-auto text-center py-20 px-5">
            <SignUp/>
        </div>
    )
}