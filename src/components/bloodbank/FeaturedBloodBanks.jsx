import { useNavigate } from "react-router-dom";
import { FeatureCard } from "./FeatureCard";

const bloodBanks = [
  {
    id: 1,
    image: "/lab-featured-1.jpg",
    badgeLabel: "/jaziri logo dark.png",
    category: "Laboratory",
    name: "Jasiri Med Laboratory",
    rating: "3.5",
    reviews: "503",
    location: "Abuja, NG.",
  },
  {
    id: 2,
    image: "/lab-featured-2.jpg",
    badgeLabel: "/jaziri logo green.png",
    category: "Laboratory",
    name: "Jasiri Med Laboratory",
    rating: "3.5",
    reviews: "503",
    location: "Abuja, NG.",
  },
  {
    id: 3,
    image: "/lab-featured-3.jpg",
    badgeLabel: "/jaziri logo dark.png",
    category: "Laboratory",
    name: "Jasiri Med Laboratory",
    rating: "3.5",
    reviews: "503",
    location: "Abuja, NG.",
  },
  {
    id: 4,
    image: "/lab-featured-4.jpg",
    badgeLabel: "/jaziri logo green.png",
    category: "Laboratory",
    name: "Jasiri Med Laboratory",
    rating: "3.5",
    reviews: "503",
    location: "Abuja, NG.",
  },
];

export function FeaturedBloodBanks() {
  const navigate = useNavigate();

  return (
    <section className="py-4">
      {/* Header */}
      <div className="flex items-baseline justify-between mb-5 px-0.5">
        <h2 className="text-[28px] md:text-[32px] font-semibold text-slate-800 dark:text-slate-200">
          Featured
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
        <div className="flex gap-[18px] md:gap-[22px] overflow-x-auto snap-x snap-mandatory pb-2 scrollbar-hide">
          {bloodBanks.map((bloodBank) => (
            <FeatureCard
              key={bloodBank.id}
              image={bloodBank.image}
              badgeLabel={bloodBank.badgeLabel}
              category={bloodBank.category}
              name={bloodBank.name}
              rating={bloodBank.rating}
              reviews={bloodBank.reviews}
              location={bloodBank.location}
              onClick={() => {
                navigate(`/blood-bank/${bloodBank.id}`);
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
