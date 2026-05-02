import { SignIn } from "@clerk/nextjs"

export const metadata = {
  title: "Sign In",
}

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-cyan-950/40 to-indigo-950/60 px-4 py-16">
      <SignIn />
    </div>
  )
}
