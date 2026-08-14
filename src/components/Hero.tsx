"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowDown, ArrowUpRight, Wind } from "lucide-react";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const tl = gsap.timeline({ delay: 0.2 });
    tl.from(".hero-fade-in", {
      opacity: 0,
      y: 20,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
    });
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative z-[10] bg-black text-white min-h-[92vh] flex flex-col justify-between p-6 sm:p-10 md:p-14 lg:p-16 border-b border-zinc-800 select-none"
    >
      {/* Top Meta Bar */}
      <div className="hero-fade-in flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800/80 pb-5">
        <div className="flex items-center gap-3">
          <span className="text-xs tracking-wider uppercase font-semibold text-white">
            KINTON AEROSPACE
          </span>
          <span className="text-xs text-zinc-500 hidden sm:inline">
            / / SAR &amp; DISASTER RESPONSE
          </span>
        </div>
        <div className="flex items-center gap-4 text-xs text-zinc-400">
          <span className="inline-flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
            STAGE: PRE-PRODUCTION PROTOTYPING
          </span>
          <span>•</span>
          <span>PROJECT K-1 ALPHA</span>
        </div>
      </div>

      {/* Hero Typography */}
      <div className="my-auto py-10 md:py-16 space-y-6">
        <div className="hero-fade-in inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/60 text-xs text-zinc-300">
          <Wind className="w-3.5 h-3.5 text-zinc-400" />
          <span>TWIN-BOOM HYBRID-ELECTRIC FIXED-WING UAS</span>
        </div>

        <h1 className="hero-fade-in text-[clamp(2.5rem,8.2vw,8.5rem)] font-bold tracking-tight text-white uppercase font-sans whitespace-nowrap leading-[0.95]">
          KINTON AEROSPACE
        </h1>

        <div className="hero-fade-in grid grid-cols-1 md:grid-cols-12 gap-6 pt-2">
          <div className="md:col-span-8 space-y-4">
            <p className="text-lg sm:text-xl md:text-2xl font-light text-zinc-300 leading-relaxed max-w-3xl">
              Eyes in the sky for the hours that matter most.
            </p>
            <p className="text-sm text-zinc-500 leading-relaxed max-w-2xl">
              A hybrid-electric fixed-wing aircraft built to loiter over disaster zones for a full day at a time — scouting for survivors, then guiding aid directly to them.
            </p>
          </div>

          <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col gap-3 justify-end">
            <a
              href="#technology"
              onClick={(e) => handleScroll(e, "#technology")}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-zinc-200 text-black font-semibold text-xs tracking-wider uppercase transition-colors"
            >
              <span>SEE THE TECHNOLOGY</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, "#contact")}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-zinc-700 hover:border-white text-white font-semibold text-xs tracking-wider uppercase transition-colors"
            >
              <span>PARTNER WITH US</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Stat Strip */}
      <div className="hero-fade-in pt-6 border-t border-zinc-800/80 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-left">
        <div>
          <div className="text-[11px] uppercase tracking-wider text-zinc-500 font-sans">
            ENDURANCE
          </div>
          <div className="text-sm sm:text-base font-semibold text-white mt-1">
            ~30 hrs
          </div>
          <div className="text-xs text-zinc-400 mt-0.5">Design target</div>
        </div>
        <div>
          <div className="text-[11px] uppercase tracking-wider text-zinc-500 font-sans">
            WINGSPAN
          </div>
          <div className="text-sm sm:text-base font-semibold text-white mt-1">
            20–22 ft
          </div>
          <div className="text-xs text-zinc-400 mt-0.5">High aspect ratio ≈17</div>
        </div>
        <div>
          <div className="text-[11px] uppercase tracking-wider text-zinc-500 font-sans">
            GROSS WEIGHT
          </div>
          <div className="text-sm sm:text-base font-semibold text-white mt-1">
            ~85 lb
          </div>
          <div className="text-xs text-zinc-400 mt-0.5">Carbon composite</div>
        </div>
        <div>
          <div className="text-[11px] uppercase tracking-wider text-zinc-500 font-sans">
            PAYLOAD
          </div>
          <div className="text-sm sm:text-base font-semibold text-white mt-1">
            20 lb
          </div>
          <div className="text-xs text-zinc-400 mt-0.5">Two 10 lb aid packages</div>
        </div>
        <div>
          <div className="text-[11px] uppercase tracking-wider text-zinc-500 font-sans">
            CRUISE
          </div>
          <div className="text-sm sm:text-base font-semibold text-white mt-1">
            43 mph
          </div>
          <div className="text-xs text-zinc-400 mt-0.5">Push-pull hybrid</div>
        </div>
        <div>
          <div className="text-[11px] uppercase tracking-wider text-zinc-500 font-sans">
            FUEL
          </div>
          <div className="text-sm sm:text-base font-semibold text-white mt-1">
            4 gal
          </div>
          <div className="text-xs text-zinc-400 mt-0.5">Gasoline + battery buffer</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
