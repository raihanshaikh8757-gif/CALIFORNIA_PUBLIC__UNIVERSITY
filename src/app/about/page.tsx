import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-10 px-4 py-12">
      <section>
        <h1 className="text-4xl font-bold text-[#0B1F3A] md:text-5xl">About Us</h1>
        <p className="mt-3 max-w-4xl text-slate-700">
          Learn more about California Public University, our academic direction,
          and our commitment to flexible, globally relevant online education.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <div className="overflow-hidden rounded-2xl shadow-lg md:col-span-2">
          <Image
            src="https://images.pexels.com/photos/207684/pexels-photo-207684.jpeg?auto=compress&cs=tinysrgb&w=1800"
            alt="Modern university building"
            width={1200}
            height={700}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="grid gap-4">
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="https://images.pexels.com/photos/6147369/pexels-photo-6147369.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Student working with laptop"
              width={700}
              height={420}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Students collaborating together"
              width={700}
              height={420}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="rounded-2xl bg-white p-7 shadow-lg">
        <h2 className="text-3xl font-bold text-[#0B1F3A]">About CPU</h2>
        <p className="mt-4 text-slate-700">
          The California Public University (CPU) is an autonomous, globally
          recognized institution of higher learning. CPU is committed to
          providing flexible, innovative, and practical academic programs
          across a wide range of disciplines, giving students access to high
          quality education without geographical limitations.
        </p>
        <p className="mt-4 text-slate-700">
          CPU offers technology driven learning models that combine
          personalized mentorship, guided independent study, and interactive
          online seminars. With students from over thirty countries, CPU
          fosters a vibrant, inclusive academic environment enriched by
          cultural and linguistic diversity.
        </p>
        <p className="mt-4 text-slate-700">
          Through strong partnerships with international universities, CPU
          students have opportunities to progress into advanced graduate and
          professional programs. Our broad range of academic and professional
          courses including Management, Business, Education, Technology, Health
          and Social Care, and Science is designed to equip students with
          knowledge, skills, and practical expertise for success in today’s
          global careers.
        </p>
        <p className="mt-4 text-slate-700">
          CPU’s faculty are highly qualified, with most holding doctoral or
          master’s degrees and extensive professional experience. This ensures
          that every program blends academic rigor with real-world relevance.
        </p>
      </section>

      <section className="rounded-2xl bg-white p-7 shadow-lg">
        <h2 className="text-3xl font-bold text-[#0B1F3A]">Why Choose CPU</h2>
        <p className="mt-4 text-slate-700">
          CPU provides learners with the same high quality education as
          traditional institutions while offering the flexibility to balance
          professional and personal commitments.
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-700">
          <li>
            Excellence in Teaching: 80% of CPU faculty hold Ph.D. degrees, and
            the remaining 20% hold Master’s degrees, with many also teaching at
            leading universities worldwide.
          </li>
          <li>
            Flexible Learning: Self paced programs designed to accommodate
            working professionals and international students.
          </li>
          <li>
            Diverse Opportunities: Over 20 fields of study, including Business
            Administration, Computer Science, Education, and Information
            Technology.
          </li>
          <li>
            Global Recognition: Alumni achieve career growth, professional
            recognition, and international opportunities.
          </li>
        </ul>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl bg-white p-7 shadow-lg">
          <h2 className="text-3xl font-bold text-[#0B1F3A]">Vision</h2>
          <p className="mt-4 text-slate-700">
            To be a global center of academic excellence, innovation, and
            professionalism.
          </p>
        </div>
        <div className="rounded-2xl bg-white p-7 shadow-lg">
          <h2 className="text-3xl font-bold text-[#0B1F3A]">Mission</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-700">
            <li>Educating responsible and visionary leaders.</li>
            <li>Stimulating creativity and interdisciplinary innovation.</li>
            <li>Building an open academic community for global knowledge exchange.</li>
            <li>Delivering lifelong, engaging, and transformative learning experiences.</li>
            <li>
              Empowering individuals to contribute positively to society and
              global progress.
            </li>
          </ul>
        </div>
      </section>

      <section className="rounded-2xl bg-white p-7 shadow-lg">
        <h2 className="text-3xl font-bold text-[#0B1F3A]">Core Values</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Excellence",
            "Integrity",
            "Student Centered Learning",
            "Innovation",
            "Creativity",
            "Diversity and Inclusion",
            "Responsibility",
            "Stewardship and Leadership",
          ].map((value) => (
            <div key={value} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-[#0B1F3A]">
              {value}
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl bg-white p-7 shadow-lg">
        <h2 className="text-3xl font-bold text-[#0B1F3A]">Our Philosophy</h2>
        <p className="mt-4 text-slate-700">
          CPU is established as a Developmental University, dedicated to
          transforming lives, empowering communities, and contributing to
          global progress. Guided by a hands-on and minds-on approach, CPU
          integrates academic knowledge with practical applications, preparing
          students for leadership and innovation.
        </p>
        <p className="mt-4 text-slate-700">
          At CPU, students and faculty are united by:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-700">
          <li>A commitment to excellence and integrity.</li>
          <li>Respect for diversity and open academic dialogue.</li>
          <li>Celebration of achievement and innovation.</li>
          <li>Student centered approaches to education.</li>
          <li>Collaboration, creativity, and accountability in all endeavors.</li>
        </ul>
      </section>
    </main>
  );
}
