"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Sparkles, Anchor, Shield, Mountain, ArrowUpRight } from "lucide-react";

interface PartnerTrack {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  badge: string;
  description: string;
  benefits: string[];
}

const partnerTracks: PartnerTrack[] = [
  {
    icon: Anchor,
    title: "Maritime & Coastal SAR Pilot Program",
    badge: "EARLY FIELD EVALUATION",
    description:
      "Designed for maritime search & rescue agencies seeking persistent, runway-independent aerial coverage over vast ocean search grids and severe coastal weather.",
    benefits: [
      "Early flight trial data access",
      "Custom payload & life-raft drop testing",
      "Input into ground station UX & mission software",
      "Priority queue for Alpha production craft",
    ],
  },
  {
    icon: Mountain,
    title: "Alpine & Mountain Rescue Taskforces",
    badge: "HIGH-ALTITUDE R&D",
    description:
      "Partnering with mountain rescue teams to test rapid vertical takeoff from rugged, snowbound terrain and autonomous thermal survivor detection in blizzards.",
    benefits: [
      "Sub-zero and high-altitude flight trials",
      "Emergency locator beacon drop integration",
      "Rapid backpack GCS deployment testing",
      "Joint field simulation exercises",
    ],
  },
  {
    icon: Shield,
    title: "Defense & Autonomous Systems R&D",
    badge: "TACTICAL BVLOS",
    description:
      "Collaborating with defense innovation teams and sensor manufacturers to evaluate long-endurance hybrid fixed-wing loiter and GPS-denied autonomous mesh.",
    benefits: [
      "Modular CAN-FD sensor bus integration",
      "Encrypted SATCOM BVLOS protocol trials",
      "Custom EO/IR & electronic warfare pod mounting",
      "Direct engineering collaboration",
    ],
  },
];

const Testimonials = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".partner-fade", {
      opacity: 0,
      y: 24,
      duration: 0.6,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <section
      id="partners"
      ref={containerRef}
      className="min-h-screen p-6 sm:p-10 md:p-14 lg:p-16 bg-zinc-50 text-zinc-950 border-b border-zinc-200 overflow-hidden"
    >
      {/* Heading */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
        <div>
          <div className="partner-fade flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-500 font-semibold mb-2">
            <Sparkles className="w-4 h-4 text-black" />
            <span>STRATEGIC COLLABORATION // PILOT PROGRAM TRACKS</span>
          </div>
          <h2 className="partner-fade text-[clamp(1.85rem,3.8vw,3.2rem)] font-bold font-sans tracking-tight text-zinc-950">
            Partner With Kinton During Development
          </h2>
        </div>

        <p className="partner-fade max-w-md text-sm text-zinc-600 font-sans">
          We are inviting forward-thinking Search & Rescue agencies, defense innovators, and sensor developers to collaborate on our Alpha flight trials.
        </p>
      </div>

      {/* 3 Partner Program Track Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {partnerTracks.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="partner-fade p-8 rounded-xl bg-white border border-zinc-200 hover:border-zinc-400 transition-all flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="flex justify-between items-center pb-6 border-b border-zinc-200 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-black text-white flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>

                  <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-zinc-100 text-zinc-800 border border-zinc-300 font-medium">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-sans text-zinc-950 mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed mb-6 font-sans">
                  {item.description}
                </p>

                <div className="space-y-2 pt-4 border-t border-zinc-200 text-xs font-sans text-zinc-700">
                  {item.benefits.map((benefit, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2">
                      <span className="text-black font-bold">›</span>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-zinc-200">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-zinc-950 hover:text-zinc-600 transition-colors"
                >
                  <span>REQUEST PILOT BRIEFING</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
