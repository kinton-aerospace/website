"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowDown, ArrowUpRight, Shield, Compass } from "lucide-react";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

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
            / / SAR & DEFENSE AVIATION
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

      {/* Hero Typography Center */}
      <div ref={contentRef} className="my-auto py-10 md:py-16 space-y-6">
        <div className="hero-fade-in inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/60 text-xs text-zinc-300">
          <Compass className="w-3.5 h-3.5 text-zinc-400" />
          <span>AUTONOMOUS HYBRID FIXED-WING PLATFORMS</span>
        </div>

        <h1
          ref={titleRef}
          className="hero-fade-in text-[clamp(2.5rem,8.2vw,8.5rem)] font-bold tracking-tight text-white uppercase font-sans whitespace-nowrap leading-[0.95]"
        >
          KINTON AEROSPACE
        </h1>

        <div className="hero-fade-in grid grid-cols-1 md:grid-cols-12 gap-6 pt-2">
          <p className="md:col-span-8 text-lg sm:text-xl md:text-2xl font-light text-zinc-300 leading-relaxed max-w-3xl">
            We design and manufacture long-range hybrid fixed-wing drones engineered for extreme endurance SAR (Search & Rescue) and tactical defense operations. Zero runways required.
          </p>

          <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col gap-3 justify-end">
            <a
              href="#prototype"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-zinc-200 text-black font-semibold text-xs tracking-wider uppercase transition-colors"
            >
              <span>DISCOVER PROJECT K-1</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-zinc-700 hover:border-white text-white font-semibold text-xs tracking-wider uppercase transition-colors"
            >
              <span>CONTACT FOUNDERS</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Architectural Specs Ticker */}
      <div className="hero-fade-in pt-6 border-t border-zinc-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
        <div>
          <div className="text-[11px] uppercase tracking-wider text-zinc-500 font-sans">
            AERODYNAMIC ARCHITECTURE
          </div>
          <div className="text-sm sm:text-base font-semibold text-white mt-1">
            Hybrid VTOL Tilt-Rotor
          </div>
          <div className="text-xs text-zinc-400 mt-0.5">Runway Independent</div>
        </div>

        <div>
          <div className="text-[11px] uppercase tracking-wider text-zinc-500 font-sans">
            TARGET ENDURANCE
          </div>
          <div className="text-sm sm:text-base font-semibold text-white mt-1">
            14+ Hours Target
          </div>
          <div className="text-xs text-zinc-400 mt-0.5">Turbine-Electric Hybrid</div>
        </div>

        <div>
          <div className="text-[11px] uppercase tracking-wider text-zinc-500 font-sans">
            MISSION PROFILE
          </div>
          <div className="text-sm sm:text-base font-semibold text-white mt-1">
            SAR & Defense ISR
          </div>
          <div className="text-xs text-zinc-400 mt-0.5">Maritime & Alpine Rescue</div>
        </div>

        <div>
          <div className="text-[11px] uppercase tracking-wider text-zinc-500 font-sans">
            DEVELOPMENT STATUS
          </div>
          <div className="text-sm sm:text-base font-semibold text-white mt-1">
            Alpha Prototype Build
          </div>
          <div className="text-xs text-zinc-400 mt-0.5">1:1 Scale Manufacturing</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
