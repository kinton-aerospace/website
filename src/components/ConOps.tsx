"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Map, Search, MapPin, Package, Clock } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Map,
    title: "Disaster Occurs",
    description:
      "Ground access is limited or the search area is too large for foot and vehicle teams to cover quickly and efficiently. A staging location is identified (can be hundreds of miles away from disaster, ex: a different state)— an airport, a stretch of highway, or a cleared field.",
    note: "Fixed-wing design: staging from a runway or cleared surface is realistic, and 30 hours of coverage matters more than launching from anywhere.",
  },
  {
    number: "02",
    icon: Search,
    title: "Scout Aircraft Launches / Transits",
    description:
      "The scout variant launches, transits to destination. The transit speed is 43 mph, covering ground efficiently while en route to the search area. Operators can setup a staging area far from the disaster site. ",
    note: "The transit distance affects the operational time on site. A 130 mile transit distance allows for 24 hours of operational time at the search location.",
    },
  {
    number: "03",
    icon: MapPin,
    title: "Operating location reached",
    description:
      "Upon arrival the scout begins a long-endurance search pattern over the affected area, streaming thermal and EO imagery back to responders in real time. The scout continuously searches the ground in a systemic autonomus pattern to locate survivors.",
    note: "The scout carries a heated nadir EO/thermal camera. It trades payload weight for extra fuel; maximum loiter time is the priority. When a survivor is located, the scout records precise GPS coordinates and relays them to the ground team. The scout continues its search pattern without interruption.",
  },
  {
    number: "04",
    icon: Package,
    title: "Survivor Located / Aid Delivery Requested",
    description:
      "Upon locating a survivor, the location and imagery is relayed to the ground team. Upon manual approval an aid-delivery variant is dispatched directly to the located survivor's GPS coordinates — a short, targeted flight rather than a long search — and delivers its two 10 lb aid packages. However, the payload aircraft can also be operated in a loiter pattern to reduce the time between sighting and delivery.",
    note: "Aid packages can include water, medical supplies, and communication devices. A smaller camera payload precisely matches the drop point to survivor coordinates.",
  },
  {
    number: "05",
    icon: Clock,
    title: "Extended Coverage Continues",
    description:
      "The scout aircraft continues its search pattern for up to 30 hours, extending coverage well beyond what a single short-endurance drone or a limited number of crewed helicopter hours could achieve.",
    note: "One aircraft. One tank of gas. A full day of coverage.",
  },
    {
    number: "06",
    icon: Package,
    title: "Return to Base",
    description:
      "After utilizing its operational time on site, each aircraft returns to the staging location from which it launched, recieves a quick maintenence check and refuel before being able to be redeployed for another mission.",
    note: "Aircraft downtime can be as short as 30 minutes.",
  },
];

const ConOps = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".conops-fade", {
      opacity: 0,
      y: 24,
      duration: 0.6,
      stagger: 0.12,
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
      id="conops"
      ref={containerRef}
      className="min-h-screen p-6 sm:p-10 md:p-14 lg:p-16 bg-white text-zinc-950 border-b border-zinc-200"
    >
      {/* Header */}
      <div className="mb-12">
        <div className="conops-fade flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-500 font-semibold mb-2">
          <Map className="w-4 h-4 text-black" />
          <span>CONCEPT OF OPERATIONS // MISSION FLOW</span>
        </div>
        <h2 className="conops-fade text-[clamp(1.85rem,3.8vw,3.2rem)] font-bold tracking-tight text-zinc-950 font-sans">
          How a Mission Unfolds
        </h2>
        <p className="conops-fade mt-3 max-w-2xl text-sm text-zinc-600 leading-relaxed">
          A plain-language walkthrough of a search-and-rescue mission, written for agency leadership, funders, and partners.
        </p>
      </div>

      {/* Steps */}
      <div className="space-y-0">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          const isLast = idx === steps.length - 1;
          return (
            <div key={step.number} className="conops-fade relative flex gap-6 md:gap-10">
              {/* Left: number + connector line */}
              <div className="flex flex-col items-center shrink-0 w-12">
                <div className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center font-mono font-bold text-sm shrink-0">
                  {step.number}
                </div>
                {!isLast && (
                  <div className="w-px flex-1 bg-zinc-200 mt-2 mb-2 min-h-[32px]" />
                )}
              </div>

              {/* Right: content */}
              <div className={`flex-1 pb-10 ${isLast ? "" : ""}`}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-zinc-50 border border-zinc-200">
                    <Icon className="w-4 h-4 text-zinc-700" />
                  </div>
                  <h3 className="text-lg font-bold font-sans text-zinc-950">
                    {step.title}
                  </h3>
                </div>
                <p className="text-base text-zinc-700 leading-relaxed mb-3">
                  {step.description}
                </p>
                <div className="inline-flex items-start gap-2 px-3 py-2 rounded-lg bg-zinc-50 border border-zinc-200 text-xs text-zinc-500 leading-relaxed max-w-xl">
                  <span className="text-zinc-400 shrink-0 mt-0.5">—</span>
                  <span>{step.note}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom callout */}
      <div className="conops-fade mt-8 p-6 sm:p-8 rounded-xl bg-zinc-950 text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <div className="text-[11px] uppercase tracking-wider text-zinc-400 mb-1">Scout Variant</div>
            <div className="text-lg font-bold">Search &amp; Persistent ISR</div>
            <div className="text-xs text-zinc-400 mt-1">EO/thermal nadir camera, maximum fuel, maximum loiter</div>
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-wider text-zinc-400 mb-1">Aid-Delivery Variant</div>
            <div className="text-lg font-bold">Targeted Supply Drop</div>
            <div className="text-xs text-zinc-400 mt-1">2 × 10 lb packages, GPS-coordinated delivery</div>
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-wider text-zinc-400 mb-1">Shared Platform</div>
            <div className="text-lg font-bold">One Airframe, Two Roles</div>
            <div className="text-xs text-zinc-400 mt-1">Modular bay enables rapid mission reconfiguration</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConOps;
