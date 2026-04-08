import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { connectToDatabase } from "@/lib/db";
import { Application } from "@/models/Application";
import { ContactMessage } from "@/models/ContactMessage";
import { AdminManager } from "@/components/admin/admin-manager";

export default async function AdminPage() {
  const session = await getServerSession(authOptions);
  if (!session?.user) redirect("/login");
  if (session.user.role !== "admin") redirect("/dashboard");
  const hasDb = Boolean(process.env.MONGODB_URI);
  if (hasDb) await connectToDatabase();
  const applications = hasDb
    ? await Application.find().sort({ createdAt: -1 }).limit(10).lean()
    : [];
  const messages = hasDb
    ? await ContactMessage.find().sort({ createdAt: -1 }).limit(10).lean()
    : [];
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-12">
      <h1 className="text-4xl font-bold text-[#0B1F3A]">Admin Panel</h1>
      <p className="mt-2 text-slate-600">Manage courses, certifications, library, partners, and review submissions.</p>
      <section className="mt-8 rounded-2xl bg-white p-6 shadow-lg">
        <h2 className="text-2xl font-semibold">Recent Applications</h2>
        <ul className="mt-4 space-y-2">{applications.map((a: { _id: string; name: string; program: string; status: string }) => <li key={String(a._id)}>{a.name} - {a.program} - {a.status}</li>)}</ul>
      </section>
      <section className="mt-8 rounded-2xl bg-white p-6 shadow-lg">
        <h2 className="text-2xl font-semibold">Recent Messages</h2>
        <ul className="mt-4 space-y-2">{messages.map((m: { _id: string; name: string; subject: string }) => <li key={String(m._id)}>{m.name} - {m.subject}</li>)}</ul>
      </section>
      <AdminManager />
    </main>
  );
}
