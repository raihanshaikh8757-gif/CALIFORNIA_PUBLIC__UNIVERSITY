import Image from "next/image";
export default async function AcademicPartnersPage() {
  return (
    <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-12">
      <h1 className="mb-6 text-4xl font-bold text-[#0B1F3A]">Academic Partners</h1>

      <div className="mb-8 overflow-hidden rounded-2xl shadow-lg">
        <Image
          src="https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=2000"
          alt="Global academic collaboration and university partnership"
          width={1800}
          height={520}
          className="h-[260px] w-full object-cover md:h-[320px]"
          priority
        />
      </div>

      <section className="rounded-2xl bg-white p-7 shadow-lg">
        <p className="text-slate-700">
          We are looking for experienced and qualified academic partners in:
          Africa, Asia, Far East, Middle East, UK, Europe, Russia, Canada, USA,
          Israel, Mexico, Brazil, Caribbean-West Indies, South America, Central
          America, Latin America, Australia and New Zealand to join our network
          of education partners as our Academic Partners to market and promote
          our education courses programs. CPU is one of the most popular
          world-class universities for study. If you feel that you are
          experienced and qualified, and you or your institution wish to be
          considered for the position of Academic Partner, please send your
          complete organization or institution details to us as soon as
          possible. We will contact you shortly. Thank you for your interest.
        </p>

        <p className="mt-5 text-slate-700">
          However, you must read the following information before submitting. By
          signing this form and sending this document, I certify that I am the
          person whose name appears on this application and that all the
          information I have provided is complete and accurate to the best of
          my knowledge, and if accepted, I agree to observe all the terms,
          rules and regulations of CPU. Incomplete forms will not be
          processed. I understand CPU hires applicants of any race, religion,
          age, sex, colour, handicap, sexual orientation and national or ethnic
          origin to all the rights and privileges, programs, and activities
          generally accorded or made available to applicants at CPU. It does
          not discriminate on the basis of race, religion, age, sex, colour,
          handicap, sexual orientation or national or ethnic origin in
          administering its appointment agreement and policies, admission
          policies, or other CPU administered programs.
        </p>

        <p className="mt-5 text-slate-700">
          I authorize CPU to utilize any and all public means available to
          verify the information contained herein. In accordance with the
          Electronic Signatures in Global and National Commerce Act (E-Sign),
          your type written signature constitutes a legal and binding
          application agreement. Within 144 hours of sending this application,
          you should receive an acknowledgement from the CPU office.
        </p>
      </section>

    </main>
  );
}
