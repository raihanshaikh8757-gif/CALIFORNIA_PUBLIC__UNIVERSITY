import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-[#1E3A8A]/30 bg-[#0B1F3A] text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="text-lg font-bold">California Public University</h3>
          <p className="mt-3 text-sm text-slate-200">
            A global online learning platform focused on certifications, skill-based programs, and career-ready digital education.
          </p>
          <p className="mt-4 text-xs text-slate-300">
            100% online learning, flexible schedules, and outcomes aligned to modern industry expectations.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-[#D4AF37]">Quick Links</h4>
          <div className="mt-3 space-y-2 text-sm">
            <Link href="/about" className="block hover:text-[#D4AF37]">About Us</Link>
            <Link href="/programs" className="block hover:text-[#D4AF37]">Programs</Link>
            <Link href="/certifications" className="block hover:text-[#D4AF37]">Certifications</Link>
            <Link href="/admission" className="block hover:text-[#D4AF37]">Admission</Link>
            <Link href="/contact" className="block hover:text-[#D4AF37]">Contact</Link>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-[#D4AF37]">Contact</h4>
          <div className="mt-3 space-y-2 text-sm text-slate-200">
            <p>Admissions: admissions@cpuglobal.edu</p>
            <p>Support: support@cpuglobal.edu</p>
            <p>Global Learner Desk: +1 (800) 555-0179</p>
            <p>Service Hours: Mon-Sat, 8:00 AM - 8:00 PM (PST)</p>
          </div>
        </div>

        <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-[#D4AF37]">Start Learning</h4>
          <p className="mt-3 text-sm text-slate-100">
            Apply to a career-focused online program and receive guidance from our admissions team.
          </p>
          <div className="mt-4 flex flex-col gap-2 sm:flex-row">
            <Link href="/admission" className="rounded-xl bg-[#D4AF37] px-3 py-2 text-xs font-semibold text-[#0B1F3A]">
              Apply Now
            </Link>
            <Link href="/programs" className="rounded-xl border border-white/40 px-3 py-2 text-xs font-semibold">
              Explore Programs
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 text-xs text-slate-300 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} California Public University. All rights reserved.</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/online-education" className="hover:text-[#D4AF37]">Online Education</Link>
            <Link href="/library" className="hover:text-[#D4AF37]">Library</Link>
            <Link href="/academic-partners" className="hover:text-[#D4AF37]">Academic Partners</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
