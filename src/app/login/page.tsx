"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [error, setError] = useState("");
  const router = useRouter();
  async function onSubmit(formData: FormData) {
    const email = String(formData.get("email") || "");
    const password = String(formData.get("password") || "");
    const res = await signIn("credentials", { email, password, redirect: false });
    if (res?.ok) router.push("/dashboard");
    else setError("Invalid credentials");
  }
  return (
    <main className="mx-auto w-full max-w-md flex-1 px-4 py-12">
      <h1 className="text-3xl font-bold text-[#0B1F3A]">Login</h1>
      <form action={onSubmit} className="mt-6 space-y-4 rounded-2xl bg-white p-6 shadow-lg">
        <input name="email" type="email" required placeholder="Email" className="w-full rounded-xl border p-3" />
        <input name="password" type="password" required placeholder="Password" className="w-full rounded-xl border p-3" />
        <button className="w-full rounded-2xl bg-[#0B1F3A] px-5 py-3 font-semibold text-white">Sign In</button>
      </form>
      {error ? <p className="mt-3 text-red-600">{error}</p> : null}
    </main>
  );
}
