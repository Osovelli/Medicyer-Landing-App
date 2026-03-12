import { CuratedCard } from "./CuratedCards";

// Inline Jasiri SVG logo — replace with your actual logo import/component
function JasiriLogo() {
  return (
    <svg viewBox="0 0 56 56" fill="none" className="w-14 h-14">
      <circle cx="28" cy="28" r="22" stroke="#34A853" strokeWidth="5" />
      <path
        d="M18 28c0-5.523 4.477-10 10-10s10 4.477 10 10"
        stroke="#34A853"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <circle cx="24" cy="24" r="2" fill="white" />
      <circle cx="32" cy="24" r="2" fill="white" />
      <path
        d="M22 32c1.5 3 3.5 4 6 4s4.5-1 6-4"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Arrow accent */}
      <path
        d="M38 14l4-4M42 14l-4-4"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

const labs = [
  {
    id: 1,
    logo: '/jaziri logo dark.png',
    logoText: "Jasiri",
    bgColor: "bg-[#1C2A3D]",
    verified: true,
    rating: "4.5",
    name: "Tech Laboratory",
    location: "Abuja, Nigeria",
  },
  {
    id: 2,
    logo: '/jaziri logo green.png',
    logoText: "Jasiri",
    bgColor: "bg-[#0D4A2B]",
    verified: true,
    rating: "4.5",
    name: "Med Laboratory",
    location: "Lagos, Nigeria",
  },
  {
    id: 3,
    logo: 'jaziri logo dark.png',
    logoText: "Jasiri",
    bgColor: "bg-[#1C2A3D]",
    verified: false,
    rating: "4.2",
    name: "Women's Labs & Tech",
    location: "Abuja, Nigeria",
  },
  {
    id: 4,
    logo: '/jaziri logo green.png',
    logoText: "Jasiri",
    bgColor: "bg-[#2A1D3D]",
    verified: true,
    rating: "4.8",
    name: "Jasiri Diagnostics",
    location: "Port Harcourt, NG",
  },
];

export function CuratedLabs() {
  return (
    <section className="py-4">
      {/* Header */}
      <div className="flex items-baseline justify-between mb-5 px-0.5">
        <h2 className=" text-[28px] md:text-[32px] font-semibold text-slate-800 dark:text-slate-200">
          Curated for you
        </h2>
        <a
          href="#"
          className="text-[13px] font-semibold tracking-[1.8px] uppercase text-slate-800 dark:text-slate-300 hover:opacity-70 transition-opacity"
        >
          Explore
        </a>
      </div>

      {/* Horizontal scroll track */}
      <div className="-mx-5 px-5 md:-mx-9 md:px-9">
        <div className="flex flex-wrap gap-4 md:gap-3 overflow-x-auto snap-x snap-mandatory pb-2 scrollbar-none">
          {labs.map((lab) => (
            <CuratedCard
              className={"md:w-[250px] w-full"}
              key={lab.id}
              logo={lab.logo}
              bgColor={lab.bgColor}
              verified={lab.verified}
              rating={lab.rating}
              name={lab.name}
              location={lab.location}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
