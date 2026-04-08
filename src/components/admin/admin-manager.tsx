"use client";

import { useState } from "react";

async function postJson(url: string, payload: Record<string, FormDataEntryValue>) {
  return fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
}

export function AdminManager() {
  const [status, setStatus] = useState("");
  async function submit(
    event: React.FormEvent<HTMLFormElement>,
    endpoint: string,
  ) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const payload = Object.fromEntries(data.entries());
    const res = await postJson(endpoint, payload);
    setStatus(res.ok ? `Saved via ${endpoint}` : `Failed via ${endpoint}`);
    if (res.ok) event.currentTarget.reset();
  }

  return (
    <div className="mt-8 grid gap-6 lg:grid-cols-2">
      <form onSubmit={(e) => submit(e, "/api/courses")} className="space-y-2 rounded-2xl bg-white p-4 shadow">
        <h3 className="font-semibold">Add Course</h3>
        <input name="title" required placeholder="Title" className="w-full rounded border p-2" />
        <input name="slug" required placeholder="Slug" className="w-full rounded border p-2" />
        <input name="category" required placeholder="Category" className="w-full rounded border p-2" />
        <input name="duration" required placeholder="Duration" className="w-full rounded border p-2" />
        <input name="level" required placeholder="Level" className="w-full rounded border p-2" />
        <input name="tuition" required placeholder="Tuition" className="w-full rounded border p-2" />
        <input name="image" required placeholder="Image URL" className="w-full rounded border p-2" />
        <textarea name="summary" required placeholder="Summary" className="w-full rounded border p-2" />
        <button className="rounded-xl bg-[#1E3A8A] px-4 py-2 text-white">Save Course</button>
      </form>

      <form onSubmit={(e) => submit(e, "/api/certifications")} className="space-y-2 rounded-2xl bg-white p-4 shadow">
        <h3 className="font-semibold">Add Certification</h3>
        <input name="title" required placeholder="Title" className="w-full rounded border p-2" />
        <input name="issuer" required placeholder="Issuer" className="w-full rounded border p-2" />
        <input name="badge" required placeholder="Badge URL" className="w-full rounded border p-2" />
        <textarea name="description" required placeholder="Description" className="w-full rounded border p-2" />
        <button className="rounded-xl bg-[#1E3A8A] px-4 py-2 text-white">Save Certification</button>
      </form>

      <form onSubmit={(e) => submit(e, "/api/library")} className="space-y-2 rounded-2xl bg-white p-4 shadow">
        <h3 className="font-semibold">Add Library Resource</h3>
        <input name="title" required placeholder="Title" className="w-full rounded border p-2" />
        <input name="author" required placeholder="Author" className="w-full rounded border p-2" />
        <input name="category" required placeholder="Category" className="w-full rounded border p-2" />
        <input name="image" required placeholder="Image URL" className="w-full rounded border p-2" />
        <input name="link" required placeholder="Link" className="w-full rounded border p-2" />
        <button className="rounded-xl bg-[#1E3A8A] px-4 py-2 text-white">Save Resource</button>
      </form>

      <form onSubmit={(e) => submit(e, "/api/partners")} className="space-y-2 rounded-2xl bg-white p-4 shadow">
        <h3 className="font-semibold">Add Partner</h3>
        <input name="name" required placeholder="Name" className="w-full rounded border p-2" />
        <input name="logo" required placeholder="Logo URL" className="w-full rounded border p-2" />
        <input name="website" required placeholder="Website" className="w-full rounded border p-2" />
        <button className="rounded-xl bg-[#1E3A8A] px-4 py-2 text-white">Save Partner</button>
      </form>
      {status ? <p className="lg:col-span-2 text-sm text-slate-700">{status}</p> : null}
    </div>
  );
}
