"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { DroneMediaPlaceholder } from "./DroneMediaPlaceholder";
import { Layers, Zap, Battery, Cpu, Package } from "lucide-react";

const tabs = [
  { id: "airframe", label: "Airframe", icon: Layers },
  { id: "propulsion", label: "Propulsion", icon: Zap },
  { id: "power", label: "Power System", icon: Battery },
  { id: "avionics", label: "Avionics", icon: Cpu },
  { id: "payload", label: "Payload", icon: Package },
];

const tabContent = {
  airframe: {
    title: "Twin-Boom, V-Tail Fixed-Wing Airframe",
    description:
      "The airframe is the primary driver of endurance. A twin-boom, V-tail configuration — visually similar to the Bayraktar TB2 — pairs structural efficiency with clean aerodynamics. Carbon fiber composite construction throughout keeps weight down without sacrificing strength.",
    specs: [
      { label: "Configuration", value: "Twin-boom, V-tail" },
      { label: "Wingspan", value: "20–22 ft" },
      { label: "Fuselage", value: "80–90\" length" },
      { label: "Aspect Ratio", value: "≈17 (glider-class)" },
      { label: "Airfoil", value: "MH114" },
      { label: "Construction", value: "Carbon fiber composite" },
    ],
    points: [
      "High-aspect-ratio wing (AR≈17) — closer in proportion to a glider than a typical RC aircraft",
      "MH114 airfoil selected for lift-to-drag performance in slow, sustained cruise",
      "Modular payload and generator bay housed internally in the fuselage",
      "Carbon fiber spars, skins, and fuselage structure throughout",
    ],
    media: {
      type: "image" as const,
      src: "/drone-media/k1-airframe-cad.jpg",
      label: "TWIN-BOOM V-TAIL AIRFRAME",
      badge: "AIRFRAME // CAD BLUEPRINT",
      flightData: {
        altitude: "WINGSPAN: 20–22 FT",
        airspeed: "AR ≈ 17",
        payload: "85 LB GW",
        mode: "CARBON COMPOSITE",
      },
    },
  },
  propulsion: {
    title: "Push-Pull Redundant Propulsion — No Single Point of Failure",
    description:
      "A symmetric push-pull configuration with a front and rear motor, styled after the Cessna Skymaster twin-engine layout. Both motors run continuously throughout the flight — this isn't a get-home backup arrangement, it's a genuine dual-engine redundancy architecture.",
    specs: [
      { label: "Configuration", value: "Push-pull, front + rear" },
      { label: "Front Prop", value: "~24\"" },
      { label: "Rear Prop", value: "~28\"" },
      { label: "Cruise Speed", value: "43 mph" },
      { label: "Motor Class", value: "Sustainer / motorglider" },
      { label: "Redundancy", value: "Dual ESC, dual winding (rear)" },
    ],
    points: [
      "Both motors run continuously — not a backup system, a true redundancy architecture",
      "Front and rear props sized for equal disk loading (not equal thrust) to reduce total induced power draw",
      "Dual ESC / dual winding on rear motor for electrical fault tolerance",
      "Continuously-running front motor independently covers mechanical failure modes",
      "Motor selection targets sustainer/motorglider class — optimized for small, steady cruise draw",
    ],
    media: {
      type: "image" as const,
      src: "/drone-media/k1-propulsion.jpg",
      label: "PUSH-PULL PROPULSION LAYOUT",
      badge: "PROPULSION // REDUNDANCY ARCH",
      flightData: {
        altitude: "FRONT: ~24\" PROP",
        airspeed: "REAR: ~28\" PROP",
        payload: "DUAL ESC / DUAL WIND",
        mode: "43 MPH CRUISE",
      },
    },
  },
  power: {
    title: "Hybrid-Electric Power System — Hours, Not Minutes",
    description:
      "A small gasoline engine (Honda GX35-class) runs continuously as an onboard generator, charging a lithium-ion battery buffer that actually powers the motors. Pure battery power tops out at well under an hour for an aircraft like this. A running engine can sustain the mission for a full day on a fixed 4-gallon fuel load.",
    specs: [
      { label: "Generator", value: "Honda GX35-class" },
      { label: "Battery Cells", value: "Molicel P45B" },
      { label: "Architecture", value: "12S (44.4V)" },
      { label: "Fuel Capacity", value: "4 gallons gasoline" },
      { label: "Target Endurance", value: "~30 hours" },
      { label: "Approach", value: "Active engineering optimization" },
    ],
    points: [
      "Generator runs continuously — battery buffer absorbs power spikes (climb, maneuvering) the small generator can't instantly supply",
      "30 hr / 4 gal target is a hard fuel budget the team is actively optimizing toward, not a loose estimate",
      "Molicel P45B cells chosen for high energy density and reliable power delivery",
      "12S (44.4V) architecture throughout for efficient motor drive",
      "Honest status: fuel-budget vs. endurance tradeoffs are ongoing engineering work",
    ],
    media: {
      type: "image" as const,
      src: "/drone-media/hybrid-powertrain-bench.jpg",
      label: "HYBRID POWER SYSTEM",
      badge: "POWER // HYBRID GENERATOR",
      flightData: {
        altitude: "~30 HR TARGET",
        airspeed: "4 GAL GASOLINE",
        payload: "MOLICEL P45B",
        mode: "12S / 44.4V ARCH",
      },
    },
  },
  avionics: {
    title: "Avionics, Autonomy & Connectivity",
    description:
      "PX4 open-source flight controller — the same stack used across a wide range of professional and research UAS platforms. Onboard compute pairs a stripped-down Intel NUC with a Raspberry Pi for sensor processing and mission logic.",
    specs: [
      { label: "Flight Controller", value: "PX4 open-source" },
      { label: "Compute", value: "Intel NUC + Raspberry Pi" },
      { label: "DAA", value: "ADS-B In + 6-camera visual" },
      { label: "Comms", value: "Satellite / direct-to-cell" },
      { label: "Connectivity", value: "BVLOS capable" },
      { label: "Targeting", value: "Beyond-LOS disaster zones" },
    ],
    points: [
      "ADS-B In plus a multi-camera visual system (~6 cameras) for detect-and-avoid in shared airspace",
      "Satellite-linked connectivity for BVLOS command and telemetry — works even when ground infrastructure is down",
      "Direct-to-cell satellite comms critical for disaster zones where cellular networks may be destroyed",
      "PX4 chosen for its proven track record across professional and research UAS programs",
    ],
    media: {
      type: "image" as const,
      src: "/drone-media/avionics-hil-testing.jpg",
      label: "AVIONICS & AUTONOMY STACK",
      badge: "AVIONICS // PX4 + SATCOM",
      flightData: {
        altitude: "PX4 FLIGHT CTRL",
        airspeed: "ADS-B + 6-CAM DAA",
        payload: "INTEL NUC + RPI",
        mode: "BVLOS SATCOM LINK",
      },
    },
  },
  payload: {
    title: "Two Roles, One Airframe",
    description:
      "The aircraft comes in two roles built on a shared design. The scout variant carries long-loiter sensor payloads to search a wide area. The aid-delivery variant carries two 10 lb aid packages directly to a located survivor.",
    specs: [
      { label: "Scout Payload", value: "EO/thermal nadir camera" },
      { label: "Delivery Payload", value: "2 × 10 lb aid packages" },
      { label: "Total Payload Cap.", value: "~20 lb" },
      { label: "Scout Camera", value: "Heated nadir sensor window" },
      { label: "Delivery Camera", value: "Small downward cam for drop precision" },
      { label: "Interchangeable", value: "Shared airframe, modular bay" },
    ],
    points: [
      "Scout variant: fixed downward-facing EO/thermal camera through heated nadir window — trades payload weight for extra fuel and max loiter",
      "Aid-delivery variant: ~20 lb payload bay for water, medical kits, communication devices",
      "Small downward camera on delivery variant to match drop point to survivor GPS coordinates",
      "Both roles share the same airframe — modular bay enables rapid mission reconfiguration",
    ],
    media: {
      type: "image" as const,
      src: "/drone-media/sar-payload-pod.jpg",
      label: "DUAL-ROLE PAYLOAD SYSTEM",
      badge: "PAYLOAD // SCOUT & DELIVERY",
      flightData: {
        altitude: "SCOUT: EO/THERMAL",
        airspeed: "DELIVERY: 2×10 LB",
        payload: "20 LB MAX",
        mode: "MODULAR BAY",
      },
    },
  },
};

const Work = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeTab, setActiveTab] = useState<string>("airframe");

  useEffect(() => {
    if (!containerRef.current) return;
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".craft-fade", {
      opacity: 0,
      y: 30,
      duration: 0.6,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  const content = tabContent[activeTab as keyof typeof tabContent];

  return (
    <section
      id="technology"
      ref={containerRef}
      className="min-h-screen p-6 sm:p-10 md:p-14 lg:p-16 bg-zinc-50 text-zinc-950 border-b border-zinc-200"
    >
      {/* Header */}
      <div className="mb-10">
        <div className="craft-fade flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-500 font-semibold mb-2">
          <Layers className="w-4 h-4 text-black" />
          <span>DEEP DIVE // TECHNOLOGY &amp; ENGINEERING</span>
        </div>
        <h2 className="craft-fade text-[clamp(1.85rem,3.8vw,3.2rem)] font-bold tracking-tight text-zinc-950 font-sans">
          How It Works
        </h2>
        <p className="craft-fade max-w-2xl text-sm text-zinc-600 mt-3 font-sans leading-relaxed">
          Five engineering systems that together enable 30-hour disaster-zone coverage. Each tab is a deep dive into one subsystem.
        </p>
      </div>

      {/* Tabs */}
      <div className="craft-fade flex flex-wrap gap-2 mb-8">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all border ${
                activeTab === tab.id
                  ? "bg-black text-white border-black"
                  : "bg-white text-zinc-700 border-zinc-200 hover:border-zinc-400"
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div className="craft-fade bg-white rounded-xl border border-zinc-200 p-6 sm:p-8 md:p-10 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Text */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div>
              <h3 className="text-2xl font-bold font-sans text-zinc-950 mb-3 tracking-tight">
                {content.title}
              </h3>
              <p className="text-base text-zinc-700 leading-relaxed">
                {content.description}
              </p>
            </div>

            {/* Key Points */}
            <ul className="space-y-3 pt-2">
              {content.points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-zinc-600">
                  <span className="text-zinc-900 font-bold mt-0.5 shrink-0">›</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {/* Specs Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-lg bg-zinc-50 border border-zinc-200">
              {content.specs.map((spec, idx) => (
                <div key={idx}>
                  <div className="text-[10px] uppercase text-zinc-500 font-semibold">
                    {spec.label}
                  </div>
                  <div className="text-sm font-bold text-zinc-900 mt-0.5">
                    {spec.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Media */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <DroneMediaPlaceholder
              type={content.media.type}
              src={content.media.src}
              label={content.media.label}
              badge={content.media.badge}
              flightData={content.media.flightData}
              aspect="aspect-[16/11]"
              className="w-full shadow-lg"
              dark={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
