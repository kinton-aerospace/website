"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Rocket, Check, ArrowRight } from "lucide-react";

const roadmapPhases = [
  {
    phase: "PHASE 01",
    title: "Aerodynamics & CFD Digital Twin",
    status: "COMPLETED",
    statusColor: "text-zinc-900 bg-zinc-100 border-zinc-300",
    description:
      "Computational fluid dynamics, high-lift airfoil optimization, tilt-rotor transition modeling, and carbon airframe stress simulations.",
    deliverables: ["Aerodynamic L/D validation", "CFD stall margin analysis", "Structural weight budget", "Digital flight twin"],
  },
  {
    phase: "PHASE 02",
    title: "Powertrain Bench & Sub-Scale Tests",
    status: "CURRENT",
    statusColor: "text-white bg-black border-black font-semibold",
    description:
      "Hybrid generator test dyno, battery thermal management, hardware-in-the-loop avionics testing, and subscale flight envelope mapping.",
    deliverables: ["Hybrid dyno bench testing", "Subscale transition trials", "CAN-FD avionics bus test", "Flight control firmware v1.0"],
  },
  {
    phase: "PHASE 03",
    title: "1:1 Full-Scale Alpha Assembly",
    status: "UPCOMING",
    statusColor: "text-zinc-700 bg-zinc-100 border-zinc-200",
    description:
      "Carbon-fiber composite tooling, full-scale airframe integration, hybrid powertrain installation, and ground tethered hover checks.",
    deliverables: ["Composite mold fabrication", "Actuator integration", "Tethered hover validation", "Pre-flight BIT diagnostics"],
  },
  {
    phase: "PHASE 04",
    title: "Maiden Flight & SAR Pilot Trials",
    status: "PLANNED",
    statusColor: "text-zinc-500 bg-white border-zinc-200",
    description:
      "First full vertical liftoff and winged cruise transition, BVLOS telemetry validation, and field trials with Search & Rescue partners.",
    deliverables: ["Hover-to-cruise transition", "BVLOS range trial", "Thermal payload drop test", "Early pilot agency demo"],
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
            <span>DEVELOPMENT TIMELINE // ROADMAP & MILESTONES</span>
          </div>
          <h2 className="roadmap-fade text-[clamp(1.85rem,3.8vw,3.2rem)] font-bold font-sans tracking-tight text-zinc-950">
            From First Principles to Maiden Flight
          </h2>
        </div>

        <p className="roadmap-fade flex-1 text-sm text-zinc-600 leading-relaxed font-sans">
          We are moving fast with lean, rigorous aerospace iteration. Here is our roadmap as we transition from aerodynamic simulation to full-scale composite prototyping and maiden flight trials.
        </p>
      </div>

      {/* 4-Phase Roadmap Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {roadmapPhases.map((phase, idx) => (
          <div
            key={idx}
            className="roadmap-fade p-6 rounded-xl bg-zinc-50 border border-zinc-200 hover:border-zinc-400 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-center pb-4 border-b border-zinc-200 mb-4">
                <span className="text-xs font-mono font-bold text-zinc-950">
                  {phase.phase}
                </span>
                <span
                  className={`text-[10px] uppercase tracking-wider px-2 py-0.5 rounded border ${phase.statusColor}`}
                >
                  {phase.status}
                </span>
              </div>

              <h3 className="text-lg font-bold font-sans text-zinc-950 mb-2">
                {phase.title}
              </h3>
              <p className="text-xs text-zinc-600 leading-relaxed mb-4">
                {phase.description}
              </p>
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

      {/* Target Specs Bar */}
      <div className="mt-16 pt-12 border-t border-zinc-200 grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="p-6 rounded-xl bg-zinc-50 border border-zinc-200">
          <div className="text-xs uppercase tracking-wider text-zinc-500 font-semibold">
            TARGET FLIGHT ENDURANCE
          </div>
          <div className="text-[clamp(2.2rem,4vw,3.5rem)] font-bold text-zinc-950 mt-1 font-mono">
            14+ <span className="text-sm font-normal text-zinc-600">HRS</span>
          </div>
          <div className="text-xs text-zinc-500 mt-1 font-sans">
            Continuous hybrid power cruise
          </div>
        </div>

        <div className="p-6 rounded-xl bg-zinc-50 border border-zinc-200">
          <div className="text-xs uppercase tracking-wider text-zinc-500 font-semibold">
            TARGET OPERATIONAL RANGE
          </div>
          <div className="text-[clamp(2.2rem,4vw,3.5rem)] font-bold text-zinc-950 mt-1 font-mono">
            500+ <span className="text-sm font-normal text-zinc-600">KM</span>
          </div>
          <div className="text-xs text-zinc-500 mt-1 font-sans">
            Long-range BVLOS coverage
          </div>
        </div>

        <div className="p-6 rounded-xl bg-zinc-50 border border-zinc-200">
          <div className="text-xs uppercase tracking-wider text-zinc-500 font-semibold">
            RUNWAY INDEPENDENCE
          </div>
          <div className="text-[clamp(2.2rem,4vw,3.5rem)] font-bold text-zinc-950 mt-1 font-mono">
            0 <span className="text-sm font-normal text-zinc-600">METERS</span>
          </div>
          <div className="text-xs text-zinc-500 mt-1 font-sans">
            Pure vertical takeoff & landing
          </div>
        </div>

        <div className="p-6 rounded-xl bg-zinc-50 border border-zinc-200">
          <div className="text-xs uppercase tracking-wider text-zinc-500 font-semibold">
            AIRFRAME DESIGN
          </div>
          <div className="text-[clamp(2.2rem,4vw,3.5rem)] font-bold text-zinc-950 mt-1 font-mono">
            100% <span className="text-sm font-normal text-zinc-600">IN-HOUSE</span>
          </div>
          <div className="text-xs text-zinc-500 mt-1 font-sans">
            Proprietary aerodynamics
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
