import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Trophy, Award } from "lucide-react";

import muthuselviImg from "@/assets/achievers/muthuselvi.jpg";
import ananthiImg from "@/assets/achievers/ananthi.jpg";
import muthulakshmiImg from "@/assets/achievers/muthulakshmi.jpg";
import sivathanuImg from "@/assets/achievers/sivathanu.jpg";
import selvakumarImg from "@/assets/achievers/selvakumar.jpg";
import baladeviImg from "@/assets/achievers/baladevi.jpg";
import shakeelaImg from "@/assets/achievers/shakeela.jpg";
import bakyalakshmiImg from "@/assets/achievers/bakyalakshmi.jpg";

const achievers = [
  { name: "V. Muthuselvi", mark: 113, badge: "State 4th Rank", img: muthuselviImg },
  { name: "M. Ananthi Natchiyar", mark: 113, badge: "State 4th Rank", img: ananthiImg },
  { name: "R. Muthulakshmi", mark: 113, badge: "State 4th Rank", img: muthulakshmiImg },
  { name: "K. Sivathanu", mark: 107, img: sivathanuImg },
  { name: "M. Selvakumar", mark: 104, img: selvakumarImg },
  { name: "Baladevi C.", mark: 103, img: baladeviImg },
  { name: "M. Shakeela Fathima", mark: 96, img: shakeelaImg },
  { name: "R. Bakyalakshmi", mark: 86, img: bakyalakshmiImg },
];

const SuccessStories = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const perPage = typeof window !== "undefined" && window.innerWidth >= 1024 ? 4 : window.innerWidth >= 640 ? 2 : 1;
  const totalPages = Math.ceil(achievers.length / perPage);

  const go = useCallback(
    (dir: 1 | -1) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrent((p) => (p + dir + totalPages) % totalPages);
      setTimeout(() => setIsTransitioning(false), 500);
    },
    [isTransitioning, totalPages],
  );

  useEffect(() => {
    const t = setInterval(() => go(1), 4000);
    return () => clearInterval(t);
  }, [go]);

  const visible = achievers.slice(current * perPage, current * perPage + perPage);

  return (
    <section className="section-padding section-alt-bg">
      <div className="container-narrow mx-auto">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Trophy className="w-5 h-5 text-accent" />
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">PG TRB Mathematics</span>
        </div>
        <h2 className="text-2xl md:text-4xl font-bold font-display text-center text-foreground mb-3">
          Success Stories from Our Students
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Our students consistently achieve top ranks in PG TRB Mathematics. Here are some of our proud achievers.
        </p>

        {/* Carousel */}
        <div className="relative">
          {/* Nav buttons */}
          <button
            onClick={() => go(-1)}
            aria-label="Previous"
            className="absolute -left-3 md:-left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card border border-border shadow-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => go(1)}
            aria-label="Next"
            className="absolute -right-3 md:-right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card border border-border shadow-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
            {visible.map((a) => (
              <div
                key={a.name}
                className="group bg-card rounded-2xl border border-border overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-in"
              >
                {/* Image */}
                <div className="relative aspect-square overflow-hidden bg-muted">
                  <img
                    src={a.img}
                    alt={a.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  {a.badge && (
                    <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-accent text-accent-foreground text-xs font-bold px-2.5 py-1.5 rounded-full shadow-lg">
                      <Award className="w-3.5 h-3.5" />
                      {a.badge}
                    </div>
                  )}
                </div>
                {/* Info */}
                <div className="p-4 text-center">
                  <h3 className="font-bold text-foreground text-lg font-display">{a.name}</h3>
                  <div className="flex items-center justify-center gap-2 mt-1.5">
                    <span className="text-sm text-muted-foreground">PG TRB Mathematics</span>
                    <span className="bg-primary text-primary-foreground text-xs font-bold px-2.5 py-1 rounded-full">{a.mark} Marks</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => { setCurrent(i); }}
                className={`h-2.5 rounded-full transition-all duration-300 ${i === current ? "w-8 bg-primary" : "w-2.5 bg-border hover:bg-muted-foreground"}`}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
