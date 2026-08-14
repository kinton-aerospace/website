"use client";

import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import Slider from "./Slider";
import { Shield, Compass, Wind, Layers, Crosshair } from "lucide-react";

const About = () => {
  const bioText = `SAR (Search and Rescue) crews and tactical defense operators face an impossible dilemma: multirotor drones run out of battery in 40 minutes, while traditional fixed-wing aircraft require runways that do not exist in remote emergencies. Kinton Aerospace is engineering from first principles to eliminate this tradeoff with our maiden hybrid fixed-wing VTOL platform.`;

  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".about-fade", {
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
      id="mission"
      ref={containerRef}
      className="min-h-screen p-6 sm:p-10 md:p-14 lg:p-16 bg-white text-zinc-950 border-b border-zinc-200"
    >
      {/* Top Header Tag */}
      <div className="about-fade flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-500 font-semibold mb-6">
        <Compass className="w-4 h-4 text-black" />
        <span>THE STRATEGIC IMPERATIVE // SAR & DEFENSE AVIATION</span>
      </div>

      {/* Main Mission Text */}
      <div className="max-w-5xl space-y-4">
        <h2 className="about-fade text-xs uppercase tracking-widest text-zinc-400 font-sans font-semibold">
          Bridging Range and Runway Independence
        </h2>

        <div className="about-fade text-[clamp(1.4rem,3vw,2.75rem)] font-light text-zinc-900 leading-snug tracking-tight">
          {bioText}
        </div>
      </div>

      {/* 3 Core Engineering Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
        <div className="about-fade p-8 rounded-xl bg-zinc-50 border border-zinc-200 hover:border-zinc-400 transition-colors flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-lg bg-black text-white flex items-center justify-center mb-6">
              <Wind className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-zinc-950 mb-2 font-sans tracking-tight">
              Runway-Independent VTOL
            </h3>
            <p className="text-sm text-zinc-600 leading-relaxed font-sans">
              Vertical takeoff and landing capability allows deployment directly from forest clearings, vessel decks, or alpine passes without launch rails or runways.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-zinc-200 text-xs font-semibold text-zinc-900 uppercase tracking-wider">
            Zero Ground Infrastructure
          </div>
        </div>

        <div className="about-fade p-8 rounded-xl bg-zinc-50 border border-zinc-200 hover:border-zinc-400 transition-colors flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-lg bg-black text-white flex items-center justify-center mb-6">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-zinc-950 mb-2 font-sans tracking-tight">
              14+ Hour Hybrid Endurance
            </h3>
            <p className="text-sm text-zinc-600 leading-relaxed font-sans">
              Transitioning from vertical lift to aerodynamically clean fixed-wing flight powered by an onboard hybrid generator unlocks unmatched persistent airborne loiter.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-zinc-200 text-xs font-semibold text-zinc-900 uppercase tracking-wider">
            Turbine-Electric Powertrain
          </div>
        </div>

        <div className="about-fade p-8 rounded-xl bg-zinc-50 border border-zinc-200 hover:border-zinc-400 transition-colors flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-lg bg-black text-white flex items-center justify-center mb-6">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-zinc-950 mb-2 font-sans tracking-tight">
              Modular Mission Architecture
            </h3>
            <p className="text-sm text-zinc-600 leading-relaxed font-sans">
              Rapidly interchangeable nose and ventral payload pods accommodate gyro-stabilized thermal FLIR gimbals, emergency life-raft drops, or tactical electronic sensors.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-zinc-200 text-xs font-semibold text-zinc-900 uppercase tracking-wider">
            Multi-Mission Flexibility
          </div>
        </div>
      </div>

      {/* Concept & CAD Draggable Gallery */}
      <Slider />
    </section>
  );
};

export default About;
