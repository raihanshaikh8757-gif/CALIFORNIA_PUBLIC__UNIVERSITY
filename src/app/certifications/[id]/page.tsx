export default async function CertificationDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-12">
      <h1 className="text-4xl font-bold text-[#0B1F3A]">Certification Detail</h1>
      <p className="mt-4 text-slate-700">
        Full certification detail view for ID: {id}
      </p>
    </main>
  );
}
