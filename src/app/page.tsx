export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="flex min-h-screen items-center justify-center px-6">
        <div className="max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Career Draft
          </p>

          <h1 className="text-4xl font-bold leading-tight sm:text-6xl">
            Build a CV That
            <span className="block text-blue-500">Gets You Noticed.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            Professional, modern and ATS-friendly CVs designed to help you make
            a stronger first impression.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <button className="rounded-xl bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-500">
              Get Your CV
            </button>

            <button className="rounded-xl border border-slate-700 px-6 py-3 font-semibold transition hover:border-blue-500 hover:text-blue-400">
              View Samples
            </button>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3 text-sm text-slate-300">
            <span className="rounded-full border border-slate-800 px-4 py-2">
              ✓ ATS-Friendly
            </span>
            <span className="rounded-full border border-slate-800 px-4 py-2">
              ✓ Modern Designs
            </span>
            <span className="rounded-full border border-slate-800 px-4 py-2">
              ✓ Fast Delivery
            </span>
            <span className="rounded-full border border-slate-800 px-4 py-2">
              ✓ Confidential Service
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}