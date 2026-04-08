"use client";
import Image from "next/image";
import { useState } from "react";

export default function ContactPage() {
  const [message, setMessage] = useState("");
  async function onSubmit(formData: FormData) {
    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      subject: "Contact Form Inquiry",
      message: `Contact Number: ${String(formData.get("contactNumber") || "")}
Country: ${String(formData.get("country") || "")}
Questions or Comments: ${String(formData.get("questions") || "")}`,
    };
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    setMessage(res.ok ? "Message sent." : "Could not send message.");
  }
  return (
    <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-12">
      <section className="grid gap-8 lg:grid-cols-[1.05fr_1fr]">
        <div className="rounded-2xl bg-white p-7 shadow-lg">
          <div className="mb-5 flex items-center gap-4">
            <Image
              src="/branding/cpu-logo-clear.png"
              alt="California Public University logo"
              width={72}
              height={72}
              className="h-16 w-16 rounded-full object-contain"
            />
            <div>
              <h1 className="text-4xl font-bold text-[#0B1F3A]">Contact Us</h1>
              <p className="text-sm text-slate-600">
                California Public University - International Student Support
              </p>
            </div>
          </div>

          <div className="space-y-6 text-slate-700">
            <div>
              <h2 className="text-lg font-semibold text-[#0B1F3A]">Write Us:</h2>
              <p className="mt-2">contact@cpu-edu.us</p>
              <p>helpdesk@cpu-edu.us</p>
              <p>californiapublicuniversity@gmail.com</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[#0B1F3A]">Call Us:</h2>
              <p className="mt-2">+1 (213) 805-7076</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[#0B1F3A]">Address</h2>
              <p className="mt-2">
                <span className="font-semibold">Head Office:</span>
                {" "}
                California Public University, International Coordinate Office,
                Brohawn Ave, Lewes, Delaware, United States of America
              </p>
              <p className="mt-3">
                <span className="font-semibold">Regional Office:</span>
                {" "}
                California Public University, International Corporate Office,
                Kagman, Saipan, Northern Mariana Islands, United States of
                America
              </p>
            </div>
          </div>
        </div>

        <form action={onSubmit} className="rounded-2xl bg-white p-7 shadow-lg">
          <h2 className="mb-5 text-2xl font-bold text-[#0B1F3A]">
            Send Your Enquiry
          </h2>
          <div className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-semibold text-slate-700">
                Name :
              </label>
              <input name="name" required className="w-full rounded-xl border p-3" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-semibold text-slate-700">
                Email ID :
              </label>
              <input
                name="email"
                type="email"
                required
                className="w-full rounded-xl border p-3"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-semibold text-slate-700">
                Contact Number :
              </label>
              <input name="contactNumber" required className="w-full rounded-xl border p-3" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-semibold text-slate-700">
                Country :
              </label>
              <input name="country" required className="w-full rounded-xl border p-3" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-semibold text-slate-700">
                Questions or Comments:
              </label>
              <textarea name="questions" required rows={5} className="w-full rounded-xl border p-3" />
            </div>
            <button className="w-full rounded-2xl bg-[#1E3A8A] px-5 py-3 font-semibold text-white">
              Submit Inquiry
            </button>
          </div>
          {message ? <p className="mt-3 text-sm text-slate-700">{message}</p> : null}
        </form>
      </section>
    </main>
  );
}
