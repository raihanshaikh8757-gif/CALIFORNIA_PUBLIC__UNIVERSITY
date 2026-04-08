export default async function CertificationsPage() {
  const sheetOneTiles = Array.from({ length: 8 }, (_, index) => {
    const col = index % 4;
    const row = Math.floor(index / 4);
    return {
      id: `s1-${index}`,
      bgImage: "/certifications/cpu-cert-sheet-1.png",
      bgSize: "400% 200%",
      bgPos: `${(col / 3) * 100}% ${(row / 1) * 100}%`,
    };
  });

  const sheetTwoTiles = Array.from({ length: 18 }, (_, index) => {
    const col = index % 6;
    const row = Math.floor(index / 6);
    return {
      id: `s2-${index}`,
      bgImage: "/certifications/cpu-cert-sheet-2.png",
      bgSize: "600% 300%",
      bgPos: `${(col / 5) * 100}% ${(row / 2) * 100}%`,
    };
  });

  const certifications = [...sheetOneTiles, ...sheetTwoTiles];

  return (
    <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-12">
      <h1 className="mb-3 text-4xl font-bold text-[#0B1F3A]">Certifications</h1>
      <p className="mb-8 max-w-5xl text-slate-700">
        California Public University is proud of its broad portfolio of
        accreditation, affiliation, and recognition certificates. These
        certifications reflect our commitment to academic quality, global
        collaboration, and trusted education standards.
      </p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
        {certifications.map((cert, index) => (
          <a
            key={cert.id}
            href={cert.bgImage}
            target="_blank"
            rel="noreferrer"
            className="group overflow-hidden rounded-2xl bg-white p-2 shadow-lg"
            title={`Open certification image ${index + 1}`}
          >
            <div
              className="h-56 w-full rounded-xl border border-slate-200 bg-cover bg-no-repeat transition group-hover:scale-[1.03]"
              style={{
                backgroundImage: `url(${cert.bgImage})`,
                backgroundSize: cert.bgSize,
                backgroundPosition: cert.bgPos,
              }}
            />
            <p className="mt-2 text-center text-xs font-semibold text-[#0B1F3A]">
              Certification {index + 1}
            </p>
          </a>
        ))}
      </div>

      <div className="mt-8 rounded-2xl bg-white p-6 shadow-lg">
        <h2 className="text-2xl font-bold text-[#0B1F3A]">
          Trusted Quality and Recognition
        </h2>
        <p className="mt-3 text-slate-700">
          These recognitions showcase CPU’s continued focus on quality assurance,
          academic excellence, and professional credibility across international
          education networks.
        </p>
      </div>
    </main>
  );
}
