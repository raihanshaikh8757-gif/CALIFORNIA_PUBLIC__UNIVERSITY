import Image from "next/image";
import { connectToDatabase } from "@/lib/db";
import { LibraryResource } from "@/models/LibraryResource";

const fallback = [
  {
    title: "Applied Data Science Handbook",
    author: "CPU Press",
    category: "Data",
    image:
      "https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg?auto=compress&cs=tinysrgb&w=1200",
    link: "#",
  },
];

const libraryGallery = [
  "https://images.pexels.com/photos/1290141/pexels-photo-1290141.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/159621/open-book-library-education-read-159621.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/4861373/pexels-photo-4861373.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/3747505/pexels-photo-3747505.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/694740/pexels-photo-694740.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/261909/pexels-photo-261909.jpeg?auto=compress&cs=tinysrgb&w=1600",
];

export default async function LibraryPage() {
  const hasDb = Boolean(process.env.MONGODB_URI);
  if (hasDb) await connectToDatabase();
  const dbResources = hasDb ? await LibraryResource.find().lean() : [];
  const resources = dbResources.length ? dbResources : fallback;
  return (
    <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-12">
      <h1 className="mb-6 text-4xl font-bold text-[#0B1F3A]">Library</h1>

      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-bold text-[#0B1F3A]">Library Gallery</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {libraryGallery.map((img, index) => (
            <a
              key={img}
              href={img}
              target="_blank"
              rel="noreferrer"
              className="overflow-hidden rounded-2xl bg-white p-2 shadow-lg"
              title={`Open Library Image ${index + 1}`}
            >
              <Image
                src={img}
                alt={`Library and books gallery image ${index + 1}`}
                width={500}
                height={350}
                className="h-36 w-full rounded-xl object-cover"
              />
            </a>
          ))}
        </div>
      </section>

      <section className="rounded-2xl bg-white p-7 shadow-lg">
        <h2 className="text-3xl font-bold text-[#0B1F3A]">California Public University Library</h2>
        <p className="mt-4 text-slate-700">
          California Public University Library provides access to library resources and many user based modern services like renewal of books, book purchase
          suggestions, creation of custom resource lists, tagging, place holds, and advanced search options. Users are requested to register their accounts
          through reference librarians to receive updates about our collections and services.
        </p>
        <p className="mt-4 text-slate-700">
          Accessibility of online books, journals, databases, and other e-resources is available at the main campus. E-resources can be accessed both through
          global and local area network access.
        </p>
      </section>

      <section className="mt-8 rounded-2xl bg-white p-7 shadow-lg">
        <h2 className="text-2xl font-bold text-[#0B1F3A]">Library Timings</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm text-slate-500">Monday - Friday</p>
            <p className="mt-1 text-xl font-bold text-[#0B1F3A]">8:00 AM - 8:00 PM</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm text-slate-500">Weekend</p>
            <p className="mt-1 text-xl font-bold text-[#0B1F3A]">9:00 AM - 5:00 PM</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm text-slate-500">Public Holidays</p>
            <p className="mt-1 text-xl font-bold text-[#0B1F3A]">Closed</p>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="mb-4 text-2xl font-bold text-[#0B1F3A]">Digital Resources</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((r: { title: string; link: string; image: string; author: string }) => (
            <a key={r.title} href={r.link} className="rounded-2xl bg-white p-4 shadow-lg">
              <Image src={r.image} alt={r.title} width={400} height={240} className="h-40 w-full rounded-xl object-cover" />
              <h3 className="mt-3 text-lg font-semibold">{r.title}</h3>
              <p className="text-sm text-slate-600">{r.author}</p>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
