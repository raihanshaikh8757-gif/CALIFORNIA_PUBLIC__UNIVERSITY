import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { connectToDatabase } from "@/lib/db";
import { Application } from "@/models/Application";
import { Course } from "@/models/Course";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  if (!session?.user) redirect("/login");
  const hasDb = Boolean(process.env.MONGODB_URI);
  if (hasDb) await connectToDatabase();
  const applications = hasDb
    ? await Application.find({ email: session.user.email })
        .sort({ createdAt: -1 })
        .lean()
    : [];
  const courses = hasDb ? await Course.find().limit(4).lean() : [];
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-12">
      <h1 className="text-4xl font-bold text-[#0B1F3A]">Student Dashboard</h1>
      <p className="mt-2">Welcome, {session.user.name}</p>
      <section className="mt-8 rounded-2xl bg-white p-6 shadow-lg">
        <h2 className="text-2xl font-semibold">Application Status</h2>
        <ul className="mt-4 space-y-2">
          {applications.length ? applications.map((app: { _id: string; program: string; status: string }) => (
            <li key={String(app._id)}>{app.program} - {app.status}</li>
          )) : <li>No applications yet.</li>}
        </ul>
      </section>
      <section className="mt-8 rounded-2xl bg-white p-6 shadow-lg">
        <h2 className="text-2xl font-semibold">Courses</h2>
        <ul className="mt-4 space-y-2">
          {courses.map((course: { slug: string; title: string }) => <li key={course.slug}>{course.title}</li>)}
        </ul>
      </section>
    </main>
  );
}
