"use client";

import Image from "next/image";
import { useState } from "react";

export default function AdmissionPage() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(formData: FormData) {
    setSubmitting(true);
    setStatus("idle");
    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      program: String(formData.get("program") || ""),
      message: `Country: ${String(formData.get("country") || "")}
Preferred Start Date: ${String(formData.get("startDate") || "")}
Study Mode: ${String(formData.get("studyMode") || "")}
Career Goal: ${String(formData.get("careerGoal") || "")}
Additional Message: ${String(formData.get("message") || "")}`,
    };
    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("submit failed");
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-12">
      <section className="mb-8 grid gap-6 rounded-2xl bg-[#0B1F3A] p-6 text-white md:grid-cols-[1.2fr_1fr] md:items-center">
        <div>
          <h1 className="text-4xl font-bold md:text-5xl">Online Applications</h1>
          <p className="mt-3 text-slate-100">
            Submit your premium admission application to California Public
            University. Our admissions specialists review every application with
            personalized guidance and global learner support.
          </p>
          <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-xl bg-white/10 p-3">100+ Programs</div>
            <div className="rounded-xl bg-white/10 p-3">20+ Countries</div>
            <div className="rounded-xl bg-white/10 p-3">98% Success Rate</div>
            <div className="rounded-xl bg-white/10 p-3">Career-Focused</div>
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl">
          <Image
            src="https://images.pexels.com/photos/6146929/pexels-photo-6146929.jpeg?auto=compress&cs=tinysrgb&w=1400"
            alt="University students reviewing online application and study options"
            width={900}
            height={620}
            className="h-full w-full object-cover"
            priority
          />
        </div>
      </section>

      <form
        action={onSubmit}
        className="rounded-2xl bg-white p-7 shadow-xl"
      >
        <h2 className="text-2xl font-bold text-[#0B1F3A]">
          Premium Admission Form
        </h2>
        <p className="mt-2 text-sm text-slate-600">
          Fill out the details carefully. Incomplete information may delay
          processing.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <input
            name="name"
            required
            placeholder="Full Name"
            className="w-full rounded-xl border p-3"
          />
          <input
            name="email"
            type="email"
            required
            placeholder="Email Address"
            className="w-full rounded-xl border p-3"
          />
          <input
            name="phone"
            required
            placeholder="Contact Number"
            className="w-full rounded-xl border p-3"
          />
          <input
            name="country"
            required
            placeholder="Country"
            className="w-full rounded-xl border p-3"
          />
          <select
            name="program"
            required
            defaultValue=""
            className="w-full rounded-xl border p-3"
          >
            <option value="" disabled>
              Select Program
            </option>
            <option>Global Business Analytics</option>
            <option>Cybersecurity & Cloud Defense</option>
            <option>Digital Product Leadership</option>
            <option>Education Leadership</option>
            <option>Health & Social Care</option>
          </select>
          <input
            name="startDate"
            required
            placeholder="Preferred Start Date"
            className="w-full rounded-xl border p-3"
          />
          <select
            name="studyMode"
            required
            defaultValue=""
            className="w-full rounded-xl border p-3"
          >
            <option value="" disabled>
              Study Mode
            </option>
            <option>Full Time</option>
            <option>Part Time</option>
            <option>Weekend Flexible</option>
          </select>
          <input
            name="careerGoal"
            placeholder="Career Goal"
            className="w-full rounded-xl border p-3"
          />
        </div>

        <textarea
          name="message"
          placeholder="Additional Message"
          rows={5}
          className="mt-4 w-full rounded-xl border p-3"
        />

        <button
          disabled={submitting}
          className="mt-4 w-full rounded-2xl bg-[#D4AF37] px-5 py-3 font-semibold text-[#0B1F3A] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {submitting ? "Submitting..." : "Submit Application"}
        </button>

        {status === "success" ? (
          <p className="mt-3 text-sm text-emerald-700">
            Application submitted successfully. CPU admissions team will contact
            you shortly.
          </p>
        ) : null}
        {status === "error" ? (
          <p className="mt-3 text-sm text-red-600">
            Submission failed. Please verify your details and try again.
          </p>
        ) : null}
      </form>
    </main>
  );
}
