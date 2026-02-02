export default function Landing() {
  const popularServices = [
    "Electrician",
    "Plumbing",
    "Welding",
    "Carpentry",
    "HVAC",
    "Auto Mechanic",
    "Delivery Driver",
    "Construction",
    "Landscaping",
    "Cleaning",
    "Drywall",
    "Roofing",
    "Painting",
    "Plastering",
    "Security",
    "Warehouse",
  ];

  return (
    <main className="bg-[#f3f2ef]">
      {/* HERO SECTION (full-width background like LinkedIn) */}
      <section className="w-full bg-[#f3f2ef]">
        <div className="mx-auto max-w-6xl px-4 py-10">
          {/* HERO (stop stretch) */}
          <div className="grid gap-10 lg:grid-cols-2 items-start">
            {/* Left */}
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl font-semibold leading-tight text-[#0a0a0a] sm:text-5xl">
                Hire skilled workers <br className="hidden sm:block" />
                you can trust
              </h1>
              <p className="mt-3 text-lg text-black/70">
                Watch real skill videos, compare profiles, and invite the right person — fast.
              </p>

              {/* Search */}
              <div className="mt-6 flex items-center gap-3">
                <div className="flex w-full items-center gap-2 rounded-md border border-black/10 bg-white px-3 py-3 shadow-sm">
                  <span className="text-black/50">🔎</span>
                  <input
                    className="w-full outline-none placeholder:text-black/40"
                    placeholder='Try "electrician", "welder", "HVAC", "carpentry"...'
                  />
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-4 flex flex-wrap gap-3">
                <button className="rounded-full bg-[#0a66c2] px-6 py-3 text-sm font-semibold text-white hover:brightness-95">
                  Find talent
                </button>
                <button className="rounded-full border border-black/20 bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-black/5">
                  Post a job
                </button>
              </div>
            </div>

            {/* Right block (no extra white space; section-style not “floating card”) */}
            <div className="rounded-2xl bg-transparent md:bg-white md:ring-1 md:ring-black/5">
              <div className="grid overflow-hidden rounded-2xl md:grid-cols-2">
                <div className="bg-[#f2e6c9] p-8">
                  <p className="text-sm font-semibold text-black/60">For Employers</p>
                  <h2 className="mt-2 text-3xl font-semibold leading-snug text-black/85">
                    Watch the work. <br /> Then hire.
                  </h2>
                  <p className="mt-3 text-sm text-black/70">
                    Short skill videos and verified profiles — so you can hire without doubt.
                  </p>
                </div>

                <div className="relative bg-[#d7dbe0] min-h-[260px]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      className="grid size-14 place-items-center rounded-full bg-black/70 text-white hover:bg-black/80"
                      aria-label="Play"
                    >
                      ▶
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* POPULAR SERVICES (LinkedIn-like chips) */}
          <div className="mt-10">
            <h3 className="text-2xl font-semibold text-black">Popular Services</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {popularServices.map((s) => (
                <button
                  key={s}
                  className="rounded-full border border-black/10 bg-white px-5 py-2 text-sm text-black/80 hover:bg-black/5"
                >
                  {s}
                </button>
              ))}
            </div>

            <button className="mt-6 text-sm font-semibold text-[#0a66c2] hover:underline">
              See all services
            </button>
          </div>
        </div>
      </section>

      {/* GET PROPOSALS SECTION (full-width band background like LinkedIn) */}
      <section className="w-full bg-[#efece7]">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            {/* Illustration placeholder */}
            <div className="rounded-2xl bg-[#dbe7f2] p-8">
              <div className="h-56 rounded-xl bg-white/85" />
              <div className="mt-6 flex items-center justify-between">
                <div className="h-3 w-44 rounded bg-white/70" />
                <div className="h-10 w-28 rounded-full bg-white/70" />
              </div>
            </div>

            {/* Text */}
            <div>
              <h3 className="text-4xl font-semibold leading-tight text-black">
                Get offers from <br /> trusted pros
              </h3>
              <p className="mt-3 text-lg text-black/70">
                Tell us what you need. We’ll match you with verified workers who are ready to respond.
              </p>
              <button className="mt-6 rounded-full border border-black/25 bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-black/5">
                Get offers
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SEARCH PROVIDERS SECTION (full-width band background like LinkedIn) */}
      <section className="w-full bg-[#f0efed]">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            {/* Text */}
            <div>
              <h3 className="text-4xl font-semibold leading-tight text-black">Find the right worker</h3>
              <p className="mt-3 text-lg text-black/70">
                Browse by trade, location, and verified skills — then reach out in minutes.
              </p>
              <button className="mt-6 rounded-full border border-black/25 bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-black/5">
                Search talent
              </button>
            </div>

            {/* Illustration placeholder */}
            <div className="rounded-2xl bg-white p-8">
              <div className="h-56 rounded-xl bg-[#d7e8d7]" />
              <div className="mt-6 h-3 w-52 rounded bg-black/10" />
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="w-full bg-[#f3f2ef]">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h3 className="text-3xl font-semibold text-black">How it works</h3>

          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            <HowCard
              step="Step 1"
              title="Discover"
              body="Search by trade and location to find the right candidates quickly."
            />
            <HowCard
              step="Step 2"
              title="Review"
              body="Watch skill videos, compare experience, and check verified details."
            />
            <HowCard
              step="Step 3"
              title="Hire"
              body="Message candidates, schedule a trial, and hire with confidence."
            />
          </div>
        </div>
      </section>

      {/* DIVE DEEPER */}
      <section className="w-full bg-[#f3f2ef]">
        <div className="mx-auto max-w-6xl px-4 pb-14">
          <h3 className="text-3xl font-semibold text-black">Dive Deeper</h3>
          <p className="mt-2 text-black/70">
            Learn how to get the most out of the marketplace with guides and resources.
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <ResourceCard />
            <ResourceCard />
            <ResourceCard />
            <ResourceCard />
          </div>
        </div>
      </section>

      {/* ARE YOU A PROVIDER */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h3 className="text-4xl font-semibold text-black">Are you a provider?</h3>
              <p className="mt-3 text-lg text-black/70">
                Create a profile, upload a short skill video, and get discovered by real employers.
              </p>
              <div className="mt-6 flex gap-4">
                <button className="rounded-full border border-black/25 bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-black/5">
                  Get started
                </button>
                <button className="rounded-full px-2 py-3 text-sm font-semibold text-[#0a66c2] hover:underline">
                  Learn more
                </button>
              </div>
            </div>

            <div className="rounded-2xl bg-[#e9edf3] p-8">
              <div className="h-56 rounded-xl bg-[#d7dbe0]" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function HowCard({ step, title, body }: { step: string; title: string; body: string }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
      <p className="text-sm font-semibold text-black/50">{step}</p>
      <h4 className="mt-2 text-2xl font-semibold text-black">{title}</h4>
      <p className="mt-2 text-black/70">{body}</p>
    </div>
  );
}

function ResourceCard() {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-black/5">
      <div className="h-28 rounded-xl bg-[#e8e8e8]" />
      <div className="mt-4 h-3 w-3/4 rounded bg-black/10" />
      <div className="mt-2 h-3 w-1/2 rounded bg-black/10" />
    </div>
  );
}
