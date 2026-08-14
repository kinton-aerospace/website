"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Rocket, Check } from "lucide-react";

const roadmapPhases = [
  {
    phase: "PHASE 01",
    title: "Airframe Design & CAD Finalization",
    status: "IN PROGRESS",
    statusColor: "text-white bg-black border-black font-semibold",
    description:
      "Wing sizing, fuselage geometry, twin-boom and V-tail configuration finalization. OpenVSP aerodynamic modeling, structural weight budget, carbon composite material selection.",
    deliverables: ["Wing geometry locked", "Fuselage bay layout", "Structural weight budget", "OpenVSP / CAD model"],
  },
  {
    phase: "PHASE 02",
    title: "Propulsion & Motor Selection",
    status: "IN PROGRESS",
    statusColor: "text-white bg-black border-black font-semibold",
    description:
      "Push-pull motor and prop selection (front ~24\", rear ~28\"), ESC and dual-winding redundancy architecture. Sustainer/motorglider motor comparative evaluation — an active ongoing technical process.",
    deliverables: ["Motor comparative testing", "Prop sizing validated", "Dual ESC redundancy spec", "Static thrust bench data"],
  },
  {
    phase: "PHASE 03",
    title: "Power System Validation",
    status: "UPCOMING",
    statusColor: "text-zinc-700 bg-zinc-100 border-zinc-200",
    description:
      "Honda GX35-class generator integration and dyno testing. Molicel P45B battery buffer sizing. 12S power architecture validation. Fuel consumption vs. endurance optimization against the 30 hr / 4 gal target.",
    deliverables: ["Generator dyno test", "Battery buffer sizing", "Fuel budget optimization", "30 hr target validation"],
  },
  {
    phase: "PHASE 04",
    title: "Regulatory Engagement",
    status: "UPCOMING",
    statusColor: "text-zinc-700 bg-zinc-100 border-zinc-200",
    description:
      "FSDO contact and guidance on Special Airworthiness Certificate (Experimental/R&D). Oregon public-benefit LLC formation. SBIR/STTR application preparation. Pursuit of public-safety agency co-sponsor for BVLOS exemption pathway.",
    deliverables: ["FSDO initial contact", "LLC formation", "SBIR/STTR applications", "Agency partner outreach"],
  },
  {
    phase: "PHASE 05",
    title: "Build, Integration & First Flight",
    status: "PLANNED",
    statusColor: "text-zinc-500 bg-white border-zinc-200",
    description:
      "Carbon composite airframe fabrication, hybrid powertrain installation, avionics integration. Ground tests, tethered validation, and first flight with SAR payload validation.",
    deliverables: ["Airframe fabrication", "Powertrain integration", "Ground & tethered tests", "First flight milestone"],
  },
];

const Achievements: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".roadmap-fade", {
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
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="roadmap"
      ref={containerRef}
      className="min-h-screen p-6 sm:p-10 md:p-14 lg:p-16 bg-white text-zinc-950 border-b border-zinc-200 overflow-hidden"
    >
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:justify-between gap-6 mb-12">
        <div className="flex-1">
          <div className="roadmap-fade flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-500 font-semibold mb-2">
            <Rocket className="w-4 h-4 text-black" />
            <span>DEVELOPMENT TIMELINE // ROADMAP &amp; PROGRESS LOG</span>
          </div>
          <h2 className="roadmap-fade text-[clamp(1.85rem,3.8vw,3.2rem)] font-bold font-sans tracking-tight text-zinc-950">
            From First Principles to First Flight
          </h2>
        </div>
        <p className="roadmap-fade flex-1 text-sm text-zinc-600 leading-relaxed font-sans">
          An honest, running log of where things stand. This is real engineering iteration — not a polished-after-the-fact story. Updated as milestones are actually reached.
        </p>
      </div>

      {/* Phase Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {roadmapPhases.map((phase, idx) => (
          <div
            key={idx}
            className="roadmap-fade p-6 rounded-xl bg-zinc-50 border border-zinc-200 hover:border-zinc-400 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-center pb-4 border-b border-zinc-200 mb-4">
                <span className="text-xs font-mono font-bold text-zinc-950">{phase.phase}</span>
                <span className={`text-[10px] uppercase tracking-wider px-2 py-0.5 rounded border ${phase.statusColor}`}>
                  {phase.status}
                </span>
              </div>
              <h3 className="text-lg font-bold font-sans text-zinc-950 mb-2">{phase.title}</h3>
              <p className="text-xs text-zinc-600 leading-relaxed mb-4">{phase.description}</p>
            </div>
            <div className="pt-4 border-t border-zinc-200 space-y-1.5 text-xs text-zinc-700">
              {phase.deliverables.map((item, itemIdx) => (
                <div key={itemIdx} className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-black shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Stats bar */}
      <div className="mt-16 pt-12 border-t border-zinc-200 grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="p-6 rounded-xl bg-zinc-50 border border-zinc-200">
          <div className="text-xs uppercase tracking-wider text-zinc-500 font-semibold">TARGET ENDURANCE</div>
          <div className="text-[clamp(2.2rem,4vw,3.5rem)] font-bold text-zinc-950 mt-1 font-mono">
            ~30 <span className="text-sm font-normal text-zinc-600">HRS</span>
          </div>
          <div className="text-xs text-zinc-500 mt-1 font-sans">Hybrid power, 4 gal fuel</div>
        </div>
        <div className="p-6 rounded-xl bg-zinc-50 border border-zinc-200">
          <div className="text-xs uppercase tracking-wider text-zinc-500 font-semibold">WINGSPAN</div>
          <div className="text-[clamp(2.2rem,4vw,3.5rem)] font-bold text-zinc-950 mt-1 font-mono">
            22 <span className="text-sm font-normal text-zinc-600">FT</span>
          </div>
          <div className="text-xs text-zinc-500 mt-1 font-sans">High aspect ratio ≈17</div>
        </div>
        <div className="p-6 rounded-xl bg-zinc-50 border border-zinc-200">
          <div className="text-xs uppercase tracking-wider text-zinc-500 font-semibold">GROSS WEIGHT</div>
          <div className="text-[clamp(2.2rem,4vw,3.5rem)] font-bold text-zinc-950 mt-1 font-mono">
            85 <span className="text-sm font-normal text-zinc-600">LB</span>
          </div>
          <div className="text-xs text-zinc-500 mt-1 font-sans">Carbon composite airframe</div>
        </div>
        <div className="p-6 rounded-xl bg-zinc-50 border border-zinc-200">
          <div className="text-xs uppercase tracking-wider text-zinc-500 font-semibold">PAYLOAD</div>
          <div className="text-[clamp(2.2rem,4vw,3.5rem)] font-bold text-zinc-950 mt-1 font-mono">
            20 <span className="text-sm font-normal text-zinc-600">LB</span>
          </div>
          <div className="text-xs text-zinc-500 mt-1 font-sans">Two 10 lb aid packages</div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
