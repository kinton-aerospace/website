"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Shield, FileCheck, Radio, Building } from "lucide-react";

const regulatoryItems = [
  {
    icon: FileCheck,
    title: "Part 47 Registration",
    status: "PLANNED",
    statusColor: "text-zinc-500 bg-white border-zinc-200",
    description:
      "The aircraft will be registered with an FAA N-number under Part 47, rather than operating under the 55 lb Part 107 small-UAS category — a deliberate choice given the aircraft's mission profile and size.",
  },
  {
    icon: Shield,
    title: "Special Airworthiness Certificate",
    status: "TARGET",
    statusColor: "text-zinc-700 bg-zinc-100 border-zinc-200",
    description:
      "Targeting a Special Airworthiness Certificate in the Experimental / Research and Development category, which is the appropriate pathway for an aircraft at this stage of development.",
  },
  {
    icon: Radio,
    title: "BVLOS via Section 44807",
    status: "LONG-TERM",
    statusColor: "text-zinc-500 bg-white border-zinc-200",
    description:
      "Long-term goal: Beyond Visual Line of Sight (BVLOS) operating authority, most likely pursued through a Section 44807 exemption in partnership with a public safety agency co-sponsor.",
  },
  {
    icon: Building,
    title: "Business Structure",
    status: "IN PROGRESS",
    statusColor: "text-white bg-black border-black",
    description:
      "Structured as an Oregon public-benefit LLC, with B Lab certification as a goal and SBIR/STTR grant funding as the primary financial pathway — reflecting the project's humanitarian orientation.",
  },
];

const Regulatory = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".reg-fade", {
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
      id="regulatory"
      ref={containerRef}
      className="p-6 sm:p-10 md:p-14 lg:p-16 bg-zinc-50 text-zinc-950 border-b border-zinc-200"
    >
      {/* Header */}
      <div className="mb-10">
        <div className="reg-fade flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-500 font-semibold mb-2">
          <Shield className="w-4 h-4 text-black" />
          <span>REGULATORY &amp; PATH TO FLIGHT</span>
        </div>
        <h2 className="reg-fade text-[clamp(1.85rem,3.8vw,3.2rem)] font-bold tracking-tight text-zinc-950 font-sans">
          FAA Pathway, Honestly Stated
        </h2>
        <p className="reg-fade mt-3 max-w-2xl text-sm text-zinc-600 leading-relaxed">
          Transparency here builds credibility with funders and public-safety partners. This section describes the pathway being pursued, not certifications not yet obtained.
        </p>
      </div>

      {/* Regulatory Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {regulatoryItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="reg-fade p-6 sm:p-8 rounded-xl bg-white border border-zinc-200 hover:border-zinc-400 transition-all"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded-lg bg-zinc-950 text-white flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <span className={`text-[10px] uppercase tracking-wider px-2 py-0.5 rounded border font-medium ${item.statusColor}`}>
                  {item.status}
                </span>
              </div>
              <h3 className="text-lg font-bold font-sans text-zinc-950 mb-2">{item.title}</h3>
              <p className="text-sm text-zinc-600 leading-relaxed">{item.description}</p>
            </div>
          );
        })}
      </div>

      {/* Honest Status Note */}
      <div className="reg-fade p-5 rounded-xl bg-zinc-100 border border-zinc-200">
        <div className="flex gap-3">
          <span className="text-zinc-400 font-bold text-lg leading-none shrink-0">—</span>
          <div>
            <div className="text-xs uppercase tracking-wider font-semibold text-zinc-700 mb-1">Current Status</div>
            <p className="text-sm text-zinc-600 leading-relaxed">
              This section will be updated as milestones are actually reached — FSDO engagement, exemption filing, LLC formation, etc. We believe regulatory status should reflect reality, not aspiration. If you are a public safety agency interested in co-sponsoring a BVLOS exemption, we&apos;d love to talk.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Regulatory;
