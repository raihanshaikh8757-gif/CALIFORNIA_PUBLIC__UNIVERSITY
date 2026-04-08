import Image from "next/image";
import { notFound } from "next/navigation";
import { connectToDatabase } from "@/lib/db";
import { courseSeeds } from "@/lib/data";
import { Course } from "@/models/Course";

const staticProgramDetails: Record<
  string,
  {
    title: string;
    summary: string;
    category: string;
    duration: string;
    level: string;
    tuition: string;
    image: string;
    highlights: string[];
    outcomes: string[];
  }
> = {
  "global-business-analytics": {
    title: "Global Business Analytics",
    summary:
      "Develop strategic data analysis, dashboarding, and decision-making capabilities for modern global organizations.",
    category: "Business and Analytics",
    duration: "8 months",
    level: "Intermediate",
    tuition: "$2,100",
    image:
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1400",
    highlights: ["Hands-on analytics projects", "Business KPI frameworks", "AI-assisted insights"],
    outcomes: ["Data Analyst roles", "Business intelligence planning", "Portfolio-ready case studies"],
  },
  "school-of-arts-and-humanities": {
    title: "School of Arts and Humanities",
    summary:
      "Explore language, communication, culture, and critical thinking through globally relevant humanities programs.",
    category: "Study Programmes",
    duration: "1-3 years",
    level: "Undergraduate and Professional",
    tuition: "Program based",
    image:
      "https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=1200",
    highlights: ["Global communication", "Research and writing", "Creative and cultural studies"],
    outcomes: ["Academic progression", "Communication careers", "Public and social sector pathways"],
  },
  "school-of-biological-sciences": {
    title: "School of Biological Sciences",
    summary:
      "Build strong foundations in life sciences, laboratory practice, and modern biological research methods.",
    category: "Study Programmes",
    duration: "1-3 years",
    level: "Undergraduate and Professional",
    tuition: "Program based",
    image:
      "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1200",
    highlights: ["Biology fundamentals", "Applied lab concepts", "Scientific inquiry skills"],
    outcomes: ["Health and science pathways", "Research preparation", "Graduate progression options"],
  },
  "school-of-clinical-medicine": {
    title: "School of Clinical Medicine",
    summary:
      "Gain clinically oriented knowledge with ethical, patient-centered, and evidence-based learning frameworks.",
    category: "Study Programmes",
    duration: "1-3 years",
    level: "Advanced and Professional",
    tuition: "Program based",
    image:
      "https://images.pexels.com/photos/7089014/pexels-photo-7089014.jpeg?auto=compress&cs=tinysrgb&w=1200",
    highlights: ["Clinical foundations", "Health systems awareness", "Patient care standards"],
    outcomes: ["Medical support careers", "Clinical education growth", "Professional certification readiness"],
  },
  "school-of-physical-sciences": {
    title: "School of Physical Sciences",
    summary:
      "Study core principles of physics, chemistry, and mathematics with practical scientific applications.",
    category: "Study Programmes",
    duration: "1-3 years",
    level: "Undergraduate and Professional",
    tuition: "Program based",
    image:
      "https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=1200",
    highlights: ["Quantitative foundations", "Experimental methods", "Scientific modeling"],
    outcomes: ["Technical roles", "Research pathways", "Advanced academic opportunities"],
  },
  "school-of-social-sciences": {
    title: "School of Social Sciences",
    summary:
      "Understand society, policy, and human behavior through interdisciplinary social science education.",
    category: "Study Programmes",
    duration: "1-3 years",
    level: "Undergraduate and Professional",
    tuition: "Program based",
    image:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200",
    highlights: ["Social research tools", "Policy and governance", "Community impact studies"],
    outcomes: ["Public service and NGO roles", "Policy support careers", "Postgraduate readiness"],
  },
  "school-of-technology": {
    title: "School of Technology",
    summary:
      "Master technology-driven learning in software, systems, and digital innovation for global careers.",
    category: "Study Programmes",
    duration: "1-3 years",
    level: "Beginner to Advanced",
    tuition: "Program based",
    image:
      "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1200",
    highlights: ["Core computing skills", "Modern digital tools", "Project-based learning"],
    outcomes: ["IT and software roles", "Technology entrepreneurship", "Industry certification pathways"],
  },
};

export default async function ProgramDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const hasDb = Boolean(process.env.MONGODB_URI);
  if (hasDb) await connectToDatabase();
  const dbCourse = hasDb ? await Course.findOne({ slug }).lean() : null;
  const seedCourse = courseSeeds.find((c) => c.slug === slug);
  const staticCourse = staticProgramDetails[slug];
  const course =
    dbCourse ||
    seedCourse ||
    staticCourse;
  if (!course) return notFound();
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-12">
      <h1 className="text-4xl font-bold text-[#0B1F3A]">{course.title}</h1>
      <p className="mt-4 text-lg text-slate-700">{course.summary}</p>
      {"image" in course ? (
        <div className="mt-6 overflow-hidden rounded-2xl">
          <Image
            src={String(course.image)}
            alt={String(course.title)}
            width={1200}
            height={640}
            className="h-[320px] w-full object-cover"
          />
        </div>
      ) : null}
      <div className="mt-8 grid gap-4 rounded-2xl bg-white p-6 shadow-lg md:grid-cols-2">
        <p><strong>Category:</strong> {course.category}</p>
        <p><strong>Duration:</strong> {course.duration}</p>
        <p><strong>Level:</strong> {course.level}</p>
        <p><strong>Tuition:</strong> {course.tuition}</p>
      </div>
      {"highlights" in course ? (
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-[#0B1F3A]">Program Highlights</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-700">
              {course.highlights.map((h: string) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-[#0B1F3A]">Career Outcomes</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-700">
              {course.outcomes.map((o: string) => (
                <li key={o}>{o}</li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </main>
  );
}
