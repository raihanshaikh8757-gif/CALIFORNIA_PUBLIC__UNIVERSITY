import Link from "next/link";
import Image from "next/image";
import { connectToDatabase } from "@/lib/db";
import { courseSeeds } from "@/lib/data";
import { Course } from "@/models/Course";

export default async function ProgramsPage() {
  const hasDb = Boolean(process.env.MONGODB_URI);
  if (hasDb) await connectToDatabase();
  const dbCourses = hasDb ? await Course.find().lean() : [];
  const courses = dbCourses.length ? dbCourses : courseSeeds;
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-12">
      <h1 className="mb-8 text-4xl font-bold text-[#0B1F3A]">Programs</h1>

      <section className="mb-10 rounded-2xl bg-white p-6 shadow-lg">
        <h2 className="text-2xl font-bold text-[#0B1F3A]">Study Programmes</h2>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              slug: "school-of-arts-and-humanities",
              title: "School of Arts and Humanities",
              image:
                "https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=1200",
            },
            {
              slug: "school-of-biological-sciences",
              title: "School of Biological Sciences",
              image:
                "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1200",
            },
            {
              slug: "school-of-clinical-medicine",
              title: "School of Clinical Medicine",
              image:
                "https://images.pexels.com/photos/7089014/pexels-photo-7089014.jpeg?auto=compress&cs=tinysrgb&w=1200",
            },
            {
              slug: "school-of-physical-sciences",
              title: "School of Physical Sciences",
              image:
                "https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=1200",
            },
            {
              slug: "school-of-social-sciences",
              title: "School of Social Sciences",
              image:
                "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200",
            },
            {
              slug: "school-of-technology",
              title: "School of Technology",
              image:
                "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1200",
            },
          ].map((school) => (
            <Link key={school.title} href={`/programs/${school.slug}`} className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
              <Image
                src={school.image}
                alt={school.title}
                width={600}
                height={300}
                className="h-36 w-full object-cover"
              />
              <div className="px-4 py-3 text-sm font-semibold text-[#0B1F3A]">
                {school.title}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <div className="grid gap-6 md:grid-cols-2">
        {courses.map((course: { slug: string; image: string; title: string; summary: string }) => (
          <Link key={course.slug} href={`/programs/${course.slug}`} className="rounded-2xl bg-white p-4 shadow-lg">
            <Image src={course.image} alt={course.title} width={640} height={320} className="h-56 w-full rounded-2xl object-cover" />
            <h2 className="mt-3 text-xl font-semibold">{course.title}</h2>
            <p className="mt-2 text-sm text-slate-600">{course.summary}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
