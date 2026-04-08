"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterPage() {
  const router = useRouter();
  const [msg, setMsg] = useState("");
  async function onSubmit(formData: FormData) {
    const payload = Object.fromEntries(formData.entries());
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (res.ok) router.push("/login");
    else setMsg("Registration failed");
  }
  return (
    <main className="mx-auto w-full max-w-md flex-1 px-4 py-12">
      <h1 className="text-3xl font-bold text-[#0B1F3A]">Register</h1>
      <form action={onSubmit} className="mt-6 space-y-4 rounded-2xl bg-white p-6 shadow-lg">
        <input name="name" required placeholder="Name" className="w-full rounded-xl border p-3" />
        <input name="email" type="email" required placeholder="Email" className="w-full rounded-xl border p-3" />
        <input name="country" placeholder="Country" className="w-full rounded-xl border p-3" />
        <input name="password" type="password" required placeholder="Password" className="w-full rounded-xl border p-3" />
        <button className="w-full rounded-2xl bg-[#D4AF37] px-5 py-3 font-semibold text-[#0B1F3A]">Create Account</button>
      </form>
      {msg ? <p className="mt-3 text-red-600">{msg}</p> : null}
    </main>
  );
}
