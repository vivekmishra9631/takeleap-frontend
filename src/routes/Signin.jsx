import { SignIn } from "@clerk/clerk-react";

export default function SignInPage() {
  return (
    <div className="flex h-screen justify-center items-center">
      <SignIn />
    </div>
  );
}