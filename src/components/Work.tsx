"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { DroneMediaPlaceholder } from "./DroneMediaPlaceholder";
import { Plane, Check, ArrowUpRight } from "lucide-react";

interface DroneModule {
  id: string;
  name: string;
  category: string;
  stage: string;
  tagline: string;
  description: string;
  specs: {
    endurance: string;
    range: string;
    payload: string;
    speed: string;
  };
  media: {
    type: "image" | "video";
    src: string;
    label: string;
    badge: string;
  };
  subsystems: string[][];
}

const prototypeModules: DroneModule[] = [
  {
    id: "01",
    name: "PROJECT K-1 ALPHA",
    category: "MAIDEN HYBRID FIXED-WING PROTOTYPE",
    stage: "IN PRE-PRODUCTION & ASSEMBLY",
    tagline: "Our first 1:1 scale hybrid VTOL fixed-wing prototype.",
    description:
      "The flagship development aircraft of Kinton Aerospace. Designed to bridge vertical takeoff accessibility with long-range fixed-wing glide. Built around a carbon-composite airframe and hybrid turbine-electric powertrain.",
    specs: {
      endurance: "14+ Hours Target",
      range: "450 KM Reach",
      payload: "10 KG Modular Bay",
      speed: "140 Kts Cruise",
    },
    media: {
      type: "video",
      src: "/drone-media/k1-alpha-prototype.mp4",
      label: "PROJECT K-1 ALPHA PROTOTYPE FOOTAGE",
      badge: "1:1 FULL-SCALE CAD & ASSEMBLY",
    },
    subsystems: [
      ["Tilt-Rotor VTOL Actuation", "Carbon-Composite Monocoque", "High-Lift Swept Airfoil", "Zero-Runway Liftoff"],
      ["Hybrid Electric Generator", "Quick-Swap Battery Pack", "Ultra-Low Thermal Sig", "Cold-Weather De-Ice"],
      ["Maritime SAR Surveillance", "Alpine Emergency Search", "Disaster Reconnaissance", "Tactical Overwatch"],
    ],
  },
  {
    id: "02",
    name: "SUB-SCALE TEST ARTICLE (K-1X)",
    category: "AERODYNAMIC FLIGHT ENVELOPE TESTER",
    stage: "ACTIVE SUBSCALE TESTING",
    tagline: "Validating VTOL-to-cruise transition dynamics.",
    description:
      "A rapid-iteration subscale flight article used to validate aerodynamic control laws, transition stall margins, and autonomous flight controller algorithms in real-world wind conditions.",
    specs: {
      endurance: "45 Min Battery Test",
      range: "15 KM Telemetry Link",
      payload: "Telemetry & IMU Suite",
      speed: "95 Kts Peak Speed",
    },
    media: {
      type: "video",
      src: "/drone-media/k1x-subscale-flight.mp4",
      label: "K-1X SUBSCALE FLIGHT TEST FOOTAGE",
      badge: "FLIGHT ENVELOPE TRIALS",
    },
    subsystems: [
      ["Transition Control Laws", "Dynamic Tilt Calibration", "Flight Envelope Mapping", "Real-Time Telemetry Log"],
      ["Rapid 3D Print / Carbon", "Modular Motor Mounts", "IMU & Pitot Tube Array", "High-G Recovery Chute"],
      ["Hover-to-Cruise Validation", "Crosswind Stability Trials", "Autonomous Waypoint Mesh", "Fail-Safe RTL Trials"],
    ],
  },
  {
    id: "03",
    name: "MODULAR SAR PAYLOAD POD",
    category: "SEARCH & RESCUE MISSION BAY",
    stage: "PAYLOAD SPECIFICATION PHASE",
    tagline: "Interchangeable nose & ventral payload pods.",
    description:
      "A modular bay architecture designed for rapid mission reconfiguration. Supports gyro-stabilized dual EO/IR thermal gimbals for nighttime survivor detection and drop-capable emergency locator beacons.",
    specs: {
      endurance: "Continuous Power Bus",
      range: "Dual Sensor Gimbal",
      payload: "10 KG Max Payload",
      speed: "All-Weather Sealing",
    },
    media: {
      type: "image",
      src: "/drone-media/sar-payload-pod.jpg",
      label: "SAR PAYLOAD POD CAD PLACEHOLDER",
      badge: "EO/IR + BEACON DROP BAY",
    },
    subsystems: [
      ["Dual Optical + Thermal FLIR", "AI Survivor Heat Tracker", "Emergency Beacon Ejection", "Inflatable Life-Raft Release"],
      ["Mil-Spec Quick Disconnect", "CAN-FD Interface Bus", "Active Gimbal Damping", "Salt-Spray IP67 Sealing"],
      ["Lost Vessel Localization", "Mountain Climber Beacon", "Flood Disaster Survey", "Wildfire Thermal Mapping"],
    ],
  },
  {
    id: "04",
    name: "AUTONOMOUS GCS & FLIGHT CONTROLLER",
    category: "FLIGHT SOFTWARE & AVIONICS",
    stage: "HARDWARE-IN-THE-LOOP SIMULATION",
    tagline: "Resilient autonomous guidance and BVLOS link.",
    description:
      "Custom flight control software incorporating Visual Inertial Odometry for GPS-denied navigation, automated fail-safe return-to-base, and an intuitive ground control tactical map interface.",
    specs: {
      endurance: "Real-Time RTOS",
      range: "BVLOS SATCOM Mesh",
      payload: "Triple-Redundant IMU",
      speed: "Zero-Latency Telemetry",
    },
    media: {
      type: "image",
      src: "/drone-media/avionics-software-gcs.jpg",
      label: "GROUND CONTROL INTERFACE PLACEHOLDER",
      badge: "GPS-DENIED AUTONOMY",
    },
    subsystems: [
      ["Visual Inertial Odometry", "Triple Redundant Sensors", "Automated Return-to-Launch", "Encrypted SATCOM Link"],
      ["Edge Compute AI Vision", "Obstacle Detection Radar", "Hardware-in-the-Loop Sim", "Open API Fleet Protocol"],
      ["Single-Operator Control", "Collaborative Search Grid", "Autonomous Geo-Fencing", "Low-Bandwidth Datalink"],
    ],
  },
];

const Work = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

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

  return (
    <section
      id="prototype"
      ref={containerRef}
      className="min-h-screen p-6 sm:p-10 md:p-14 lg:p-16 bg-zinc-50 text-zinc-950 border-b border-zinc-200"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
        <div>
          <div className="craft-fade flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-500 font-semibold mb-2">
            <Plane className="w-4 h-4 text-black" />
            <span>AEROSPACE ARCHITECTURE // PROTOTYPE SYSTEM</span>
          </div>
          <h2 className="craft-fade text-[clamp(1.85rem,3.8vw,3.2rem)] font-bold tracking-tight text-zinc-950 font-sans">
            The K-1 Architecture & Subsystems
          </h2>
        </div>

        <p className="craft-fade max-w-md text-sm text-zinc-600 font-sans">
          We are in pre-production and assembling our first full-scale hybrid VTOL fixed-wing prototype. Explore the key subsystems.
        </p>
      </div>

      {/* Prototype Cards */}
      <div className="space-y-8">
        {prototypeModules.map((item) => (
          <div
            key={item.id}
            className="craft-fade bg-white rounded-xl border border-zinc-200 p-6 sm:p-8 md:p-10 shadow-sm hover:border-zinc-400 transition-all duration-200"
          >
            {/* Card Header Bar */}
            <div className="flex flex-wrap justify-between items-center gap-4 pb-6 border-b border-zinc-200">
              <div className="flex items-baseline gap-4">
                <span className="text-[clamp(1.8rem,3.5vw,3rem)] font-bold font-mono text-zinc-900">
                  {item.id}
                </span>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold font-sans text-zinc-950 whitespace-nowrap">
                    {item.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-zinc-500 font-medium">
                      {item.category}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-zinc-100 text-zinc-800 border border-zinc-300 font-medium">
                      {item.stage}
                    </span>
                  </div>
                </div>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-black hover:bg-zinc-800 text-white text-xs uppercase tracking-wider font-semibold rounded transition-colors"
              >
                <span>PILOT INQUIRY</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Main Grid: Description + Media Placeholder + Specs */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
              {/* Left Column: Description & Specs */}
              <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
                <div>
                  <p className="text-base text-zinc-700 leading-relaxed mb-3">
                    {item.description}
                  </p>
                  <p className="text-xs uppercase tracking-wider font-semibold text-zinc-500">
                    // {item.tagline}
                  </p>
                </div>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-lg bg-zinc-50 border border-zinc-200">
                  <div>
                    <div className="text-[10px] uppercase text-zinc-500 font-semibold">ENDURANCE</div>
                    <div className="text-sm font-bold text-zinc-900 mt-0.5">
                      {item.specs.endurance}
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase text-zinc-500 font-semibold">RANGE</div>
                    <div className="text-sm font-bold text-zinc-900 mt-0.5">
                      {item.specs.range}
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase text-zinc-500 font-semibold">PAYLOAD</div>
                    <div className="text-sm font-bold text-zinc-900 mt-0.5">
                      {item.specs.payload}
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase text-zinc-500 font-semibold">AIRSPEED</div>
                    <div className="text-sm font-bold text-zinc-900 mt-0.5">
                      {item.specs.speed}
                    </div>
                  </div>
                </div>

                {/* Subsystem Lists */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  {item.subsystems.map((group, colIdx) => (
                    <ul key={colIdx} className="space-y-1.5 text-xs text-zinc-600">
                      {group.map((sub, rowIdx) => (
                        <li key={rowIdx} className="flex items-start gap-1.5">
                          <Check className="w-3.5 h-3.5 text-zinc-900 shrink-0 mt-0.5" />
                          <span>{sub}</span>
                        </li>
                      ))}
                    </ul>
                  ))}
                </div>
              </div>

              {/* Right Column: Prototype CAD / Footage Media Placeholder */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                <DroneMediaPlaceholder
                  type={item.media.type}
                  src={item.media.src}
                  label={item.media.label}
                  badge={item.media.badge}
                  flightData={{
                    altitude: "PROTOTYPE R&D",
                    airspeed: item.specs.speed,
                    payload: item.specs.payload,
                    mode: item.stage,
                  }}
                  aspect="aspect-[16/11]"
                  className="w-full shadow-lg"
                  dark={true}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
