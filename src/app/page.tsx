"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Award, Globe, GraduationCap, Laptop, ShieldCheck, Sparkles, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const heroSlides = [
  {
    src: "https://images.pexels.com/photos/5212687/pexels-photo-5212687.jpeg?auto=compress&cs=tinysrgb&w=2200",
    alt: "Confident students standing in front of a modern university building with California Public University signage",
  },
  {
    src: "https://images.pexels.com/photos/6147369/pexels-photo-6147369.jpeg?auto=compress&cs=tinysrgb&w=2200",
    alt: "Focused student using laptop in an outdoor campus setting",
  },
  {
    src: "https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=2200",
    alt: "Students collaborating together with laptops and notebooks",
  },
  {
    src: "https://images.pexels.com/photos/7972737/pexels-photo-7972737.jpeg?auto=compress&cs=tinysrgb&w=2200",
    alt: "Premium modern university seminar and campus event environment",
  },
];

const programCards = [
  {
    slug: "global-business-analytics",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1400",
    title: "Global Business Analytics",
    description:
      "Master practical analytics, AI-driven decision making, and data storytelling for global teams.",
  },
  {
    slug: "global-cybersecurity-certification-track",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1400",
    title: "Cybersecurity & Cloud Defense",
    description:
      "Build enterprise-grade security skills across cloud, compliance frameworks, and threat operations.",
  },
  {
    slug: "digital-product-management",
    image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1400",
    title: "Digital Product Leadership",
    description:
      "Learn roadmap design, market validation, and digital product growth used by high-performing teams.",
  },
];

const whyChooseUs = [
  {
    icon: Globe,
    title: "Global Learning Community",
    text: "Study with peers and mentors across multiple regions, combining international perspectives with market-relevant practice.",
  },
  {
    icon: GraduationCap,
    title: "Career-Focused Curriculum",
    text: "Every module is aligned to professional outcomes, portfolio building, and job-ready competencies employers evaluate.",
  },
  {
    icon: Laptop,
    title: "Flexible 100% Online Format",
    text: "Learn on your schedule with structured weekly goals, guided sessions, and asynchronous learning designed for working adults.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Certification Pathways",
    text: "Programs map to recognized certification standards and capability frameworks used in modern industries.",
  },
  {
    icon: Users,
    title: "Mentor and Student Support",
    text: "Receive coaching, academic advising, and responsive support services from enrollment through completion.",
  },
  {
    icon: Sparkles,
    title: "Premium Digital Experience",
    text: "Interactive content, structured pathways, and guided milestones ensure high clarity and measurable progress.",
  },
];

const testimonials = [
  {
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1200",
    name: "Amelia Chen",
    review:
      "The online format let me upskill while working full-time. I completed my certification track and moved into a product analytics role in under a year.",
  },
  {
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1200",
    name: "Daniel Mwangi",
    review:
      "Course structure was clear, practical, and globally relevant. The mentor sessions gave me direct feedback I could apply to real projects immediately.",
  },
  {
    image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1200",
    name: "Sofia Martinez",
    review:
      "From application to graduation, everything felt premium and organized. I valued the flexibility and strong career alignment throughout the program.",
  },
];

const counterItems = [
  { label: "Enrolled Students", value: "5,000+" },
  { label: "Programs", value: "100+" },
  { label: "Countries", value: "20+" },
  { label: "Success Rate", value: "98%" },
];

const trustBadges = [
  "Global Education Standards",
  "Career-Focused Curriculum",
  "International Academic Network",
  "Verified Learning Outcomes",
];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [admissionLoading, setAdmissionLoading] = useState(false);
  const [admissionStatus, setAdmissionStatus] = useState<"idle" | "success" | "error">("idle");

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  async function handleAdmissionSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setAdmissionLoading(true);
    setAdmissionStatus("idle");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      program: String(formData.get("program") || ""),
      message: String(formData.get("message") || ""),
    };

    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error("Apply failed");
      setAdmissionStatus("success");
      form.reset();
    } catch {
      setAdmissionStatus("error");
    } finally {
      setAdmissionLoading(false);
    }
  }

  return (
    <main className="flex-1 bg-slate-50">
      <section className="relative min-h-screen overflow-hidden text-white">
        {heroSlides.map((slide, index) => (
          <motion.div
            key={slide.src}
            className="absolute inset-0"
            initial={false}
            animate={{ opacity: activeSlide === index ? 1 : 0 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
          >
            <motion.div
              className="relative h-full w-full"
              animate={{
                scale: activeSlide === index ? 1.08 : 1.02,
              }}
              transition={{ duration: 4.2, ease: "easeOut" }}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                sizes="100vw"
                priority={index === 0}
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A]/95 via-[#0B1F3A]/75 to-[#1E3A8A]/55" />

        <div className="relative mx-auto grid min-h-screen w-full max-w-7xl gap-8 px-4 pb-28 pt-20 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Global Education, Your Way: Empowering Your Future Online.
            </h1>
            <p className="max-w-2xl text-lg text-slate-100">
              Gain industry-relevant skills and certifications through flexible, 100% online programs designed for modern learners worldwide.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <Link href="/admission">Apply Now</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/programs">Explore Programs</Link>
              </Button>
            </div>
            <div className="max-w-xl rounded-2xl border border-white/25 bg-white/10 p-2 backdrop-blur">
              <input
                placeholder="Search for a degree..."
                className="w-full rounded-xl bg-transparent px-3 py-2 text-white placeholder:text-slate-200 outline-none"
              />
            </div>
            <div className="grid max-w-2xl grid-cols-2 gap-3 md:grid-cols-4">
              {counterItems.map((item) => (
                <motion.div key={item.label} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl bg-white/10 p-3 text-sm backdrop-blur">
                  <p className="text-xl font-semibold text-[#D4AF37]">{item.value}</p>
                  <p>{item.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card mx-auto w-full max-w-sm rounded-2xl p-6"
          >
            <h2 className="text-2xl font-semibold">Global Reach</h2>
            <ul className="mt-5 space-y-3 text-lg">
              <li>20+ Countries</li>
              <li>100+ Programs</li>
              <li>5000+ Students</li>
            </ul>
          </motion.aside>
        </div>

        <div className="absolute bottom-0 left-0 right-0 border-t border-white/20 bg-[#0B1F3A]/85 py-4 backdrop-blur">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-3 px-4">
            {trustBadges.map((badge) => (
              <div key={badge} className="flex items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-3 py-2 text-xs font-semibold text-white">
                <Award className="h-4 w-4 text-[#D4AF37]" />
                <span>{badge}</span>
              </div>
            ))}
          </div>
          <div className="mt-3 flex justify-center gap-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2.5 w-2.5 rounded-full transition ${activeSlide === index ? "bg-[#D4AF37]" : "bg-white/55"}`}
                onClick={() => setActiveSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-20 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="text-3xl font-bold text-[#0B1F3A]">About California Public University</h2>
          <p className="mt-4 text-slate-700">
            California Public University is a global online learning platform built for modern, career-driven learners seeking certifications and skill-based
            programs. Our digital-first model combines flexibility, structured pathways, and practical outcomes to support professionals, career changers, and
            ambitious students in competitive industries.
          </p>
          <p className="mt-4 text-slate-700">
            Through industry-informed instruction, mentor-led support, and international peer collaboration, the platform helps learners gain recognized
            credentials and applicable capabilities in areas such as analytics, cybersecurity, digital business, and product leadership.
          </p>
        </div>
        <div className="relative overflow-hidden rounded-2xl shadow-xl">
          <Image
            src="https://images.pexels.com/photos/207684/pexels-photo-207684.jpeg?auto=compress&cs=tinysrgb&w=1800"
            alt="Modern university building with California Public University signage"
            width={960}
            height={640}
            className="h-full w-full object-cover"
          />
          <div className="absolute bottom-5 left-5 rounded-xl bg-[#0B1F3A]/85 px-5 py-3 text-sm font-semibold tracking-wide text-white backdrop-blur">
            California Public University
          </div>
        </div>
      </section>

      <section className="bg-[#0B1F3A] py-20 text-white">
        <div className="mx-auto grid w-full max-w-7xl gap-6 px-4 md:grid-cols-3">
          {[
            {
              title: "Structured Online Delivery",
              text: "Weekly modules, guided milestones, and clear progress tracking ensure consistent momentum and academic clarity.",
            },
            {
              title: "Flexible Learning Experience",
              text: "Study at your pace with accessible digital content and mentor-supported checkpoints that fit working schedules.",
            },
            {
              title: "Applied Career Outcomes",
              text: "Build practical portfolios, complete relevant projects, and align your learning to measurable professional goals.",
            },
          ].map((item) => (
            <div key={item.title} className="glass-card rounded-2xl p-6">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-slate-100">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-20">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-[#0B1F3A]">Programs</h2>
          <Link href="/programs" className="text-sm font-semibold text-[#1E3A8A]">View all programs</Link>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {programCards.map((program) => (
            <motion.article key={program.title} whileHover={{ y: -6 }} className="overflow-hidden rounded-2xl bg-white shadow-xl">
              <Image src={program.image} alt={program.title} width={900} height={560} className="h-52 w-full object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-semibold">{program.title}</h3>
                <p className="mt-3 text-slate-600">{program.description}</p>
                <Button asChild className="mt-4">
                  <Link href={`/programs/${program.slug}`}>Learn More</Link>
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-20">
        <h2 className="text-3xl font-bold text-[#0B1F3A]">Why Choose California Public University</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item) => (
            <div key={item.title} className="rounded-2xl bg-white p-6 shadow-lg">
              <item.icon className="h-8 w-8 text-[#1E3A8A]" />
              <h3 className="mt-3 text-xl font-semibold text-[#0B1F3A]">{item.title}</h3>
              <p className="mt-3 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto w-full max-w-7xl px-4">
          <h2 className="text-3xl font-bold text-[#0B1F3A]">Student Testimonials</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <div key={item.name} className="rounded-2xl bg-slate-50 p-5 shadow-lg">
                <Image src={item.image} alt={item.name} width={120} height={120} className="h-16 w-16 rounded-full object-cover" />
                <h3 className="mt-4 text-lg font-semibold">{item.name}</h3>
                <p className="mt-3 text-slate-600">{item.review}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0B1F3A] py-20 text-white">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold">Admission Process</h2>
            <p className="mt-4 text-slate-100">
              Start with program matching, complete your online application, and receive personalized admissions guidance. Our enrollment team supports each
              step to ensure a smooth transition into your learning journey.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {counterItems.map((item) => (
                <div key={item.label} className="rounded-2xl bg-white/10 p-4 text-center">
                  <p className="text-2xl font-bold text-[#D4AF37]">{item.value}</p>
                  <p className="mt-1 text-sm">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="glass-card rounded-2xl p-6">
            <h3 className="text-2xl font-semibold">Apply Now - Quick Admission Form</h3>
            <p className="mt-2 text-sm text-slate-100">
              Submit your details and our admissions team will contact you with program guidance, eligibility support, and next enrollment steps.
            </p>
            <form onSubmit={handleAdmissionSubmit} className="mt-5 space-y-3">
              <input
                name="name"
                required
                placeholder="Full Name"
                className="w-full rounded-xl border border-white/25 bg-white/10 px-4 py-3 text-white placeholder:text-slate-200"
              />
              <input
                name="email"
                type="email"
                required
                placeholder="Email Address"
                className="w-full rounded-xl border border-white/25 bg-white/10 px-4 py-3 text-white placeholder:text-slate-200"
              />
              <input
                name="phone"
                required
                placeholder="Phone Number"
                className="w-full rounded-xl border border-white/25 bg-white/10 px-4 py-3 text-white placeholder:text-slate-200"
              />
              <select
                name="program"
                required
                defaultValue=""
                className="w-full rounded-xl border border-white/25 bg-white/10 px-4 py-3 text-white"
              >
                <option value="" disabled className="text-slate-800">
                  Select Program
                </option>
                <option className="text-slate-800">Global Business Analytics</option>
                <option className="text-slate-800">Cybersecurity & Cloud Defense</option>
                <option className="text-slate-800">Digital Product Leadership</option>
              </select>
              <textarea
                name="message"
                rows={4}
                placeholder="Your career goals and questions"
                className="w-full rounded-xl border border-white/25 bg-white/10 px-4 py-3 text-white placeholder:text-slate-200"
              />
              <button
                type="submit"
                disabled={admissionLoading}
                className="w-full rounded-2xl bg-[#D4AF37] px-5 py-3 font-semibold text-[#0B1F3A] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {admissionLoading ? "Submitting..." : "Submit Admission Request"}
              </button>
              {admissionStatus === "success" ? (
                <p className="text-sm text-emerald-300">Application submitted successfully. Admissions team will reach out shortly.</p>
              ) : null}
              {admissionStatus === "error" ? (
                <p className="text-sm text-red-300">Unable to submit right now. Please try again.</p>
              ) : null}
            </form>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-100 py-16">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-6 px-4 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#0B1F3A]">Start Your Global Online Learning Journey</h2>
            <p className="mt-2 text-slate-700">Advance with certifications and career-focused programs built for modern professionals.</p>
          </div>
          <div className="flex gap-3">
            <Button asChild>
              <Link href="/admission">Apply Now</Link>
            </Button>
            <Button asChild variant="ghost" className="border border-[#1E3A8A]">
              <Link href="/programs">Browse Programs</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
