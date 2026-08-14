"use client";

import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { AlertTriangle, Battery, Plane } from "lucide-react";

const About = () => {
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
        <AlertTriangle className="w-4 h-4 text-black" />
        <span>THE PROBLEM // WHY SAR NEEDS A BETTER AIRCRAFT</span>
      </div>

      {/* Main Text */}
      <div className="max-w-5xl space-y-4">
        <h2 className="about-fade text-xs uppercase tracking-widest text-zinc-400 font-sans font-semibold">
          The Visibility Gap in Disaster Response
        </h2>
        <div className="about-fade text-[clamp(1.4rem,3vw,2.75rem)] font-light text-zinc-900 leading-snug tracking-tight">
          After a disaster — an earthquake, a flood, a hurricane — the first hours matter most, and they&apos;re often the hours when search teams have the least visibility. What&apos;s needed is something that can fly for most of a day, cover enormous ground, and either find people or bring them what they need.
        </div>
      </div>

      {/* Narrative paragraphs */}
      <div className="about-fade mt-10 max-w-3xl space-y-5 text-zinc-700 text-base leading-relaxed">
        <p>
          Helicopters are expensive to keep aloft for long stretches. Small consumer drones run out of battery in twenty minutes. There is a gap in the middle — long-endurance, sensor-capable aircraft that can be deployed from a cleared field or stretch of highway — that no existing product fills for public safety agencies.
        </p>
        <p>
          This project targets that gap directly. A twin-boom, V-tail fixed-wing aircraft powered by a small hybrid-electric system that pairs a gasoline generator with a battery buffer — giving it the endurance of a gas engine with the control and quiet reliability of electric propulsion.
        </p>
      </div>

      {/* 3 Problem Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
        {/* Card 1 */}
        <div className="about-fade p-8 rounded-xl bg-zinc-50 border border-zinc-200 hover:border-zinc-400 transition-colors flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-lg bg-black text-white flex items-center justify-center mb-6">
              <Plane className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-zinc-950 mb-2 font-sans tracking-tight">
              Crewed Helicopters
            </h3>
            <p className="text-sm text-zinc-600 leading-relaxed font-sans">
              Expensive to operate, limited by crew fatigue, and impossible to keep aloft continuously over a multi-day search. An hour of helicopter time can cost thousands of dollars — and there are rarely enough of them.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-zinc-200 text-xs font-semibold text-zinc-900 uppercase tracking-wider">
            High cost, limited hours
          </div>
        </div>

        {/* Card 2 */}
        <div className="about-fade p-8 rounded-xl bg-zinc-50 border border-zinc-200 hover:border-zinc-400 transition-colors flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-lg bg-black text-white flex items-center justify-center mb-6">
              <Battery className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-zinc-950 mb-2 font-sans tracking-tight">
              Consumer &amp; Prosumer Drones
            </h3>
            <p className="text-sm text-zinc-600 leading-relaxed font-sans">
              Battery-only multirotors cover 20–40 minutes per charge. Covering even a modest search area requires constant crew rotation, transport back to base, and repeated redeployments — losing coverage in the process.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-zinc-200 text-xs font-semibold text-zinc-900 uppercase tracking-wider">
            20–40 min battery limit
          </div>
        </div>

        {/* Card 3 */}
        <div className="about-fade p-8 rounded-xl bg-zinc-50 border border-zinc-200 hover:border-zinc-400 transition-colors flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-lg bg-black text-white flex items-center justify-center mb-6">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-zinc-950 mb-2 font-sans tracking-tight">
              The Gap We Target
            </h3>
            <p className="text-sm text-zinc-600 leading-relaxed font-sans">
              No affordable, fielded aircraft combines day-scale endurance with sensor capability and aid delivery in a platform that can be staged without a runway. That is precisely the mission this aircraft is designed for.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-zinc-200 text-xs font-semibold text-zinc-900 uppercase tracking-wider">
            30 hrs / runway-optional
          </div>
        </div>
      </div>

      {/* Supporting stat row */}
      <div className="about-fade mt-14 pt-10 border-t border-zinc-200 grid grid-cols-2 md:grid-cols-4 gap-8 text-left">
        <div>
          <div className="text-[clamp(1.8rem,3.5vw,3rem)] font-bold text-zinc-950 font-mono">72</div>
          <div className="text-xs text-zinc-500 mt-1 uppercase tracking-wider">Hour golden window</div>
          <div className="text-xs text-zinc-400 mt-0.5">After a disaster, survival odds drop sharply</div>
        </div>
        <div>
          <div className="text-[clamp(1.8rem,3.5vw,3rem)] font-bold text-zinc-950 font-mono">~30</div>
          <div className="text-xs text-zinc-500 mt-1 uppercase tracking-wider">hrs endurance target</div>
          <div className="text-xs text-zinc-400 mt-0.5">On 4 gallons of gasoline</div>
        </div>
        <div>
          <div className="text-[clamp(1.8rem,3.5vw,3rem)] font-bold text-zinc-950 font-mono">20</div>
          <div className="text-xs text-zinc-500 mt-1 uppercase tracking-wider">min avg drone time</div>
          <div className="text-xs text-zinc-400 mt-0.5">Typical battery-powered UAS</div>
        </div>
        <div>
          <div className="text-[clamp(1.8rem,3.5vw,3rem)] font-bold text-zinc-950 font-mono">2</div>
          <div className="text-xs text-zinc-500 mt-1 uppercase tracking-wider">Roles, one airframe</div>
          <div className="text-xs text-zinc-400 mt-0.5">Scout + aid-delivery variants</div>
        </div>
      </div>
    </section>
  );
};

export default About;
