"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Radio, DollarSign, Newspaper, ArrowUpRight } from "lucide-react";

interface AudienceTrack {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  badge: string;
  description: string;
  benefits: string[];
  cta: string;
}

const audienceTracks: AudienceTrack[] = [
  {
    icon: Radio,
    title: "Public Safety Agencies",
    badge: "BVLOS PARTNERSHIP",
    description:
      "Interested in partnering on BVLOS operations or field testing? We are actively seeking public safety agency co-sponsors — fire, search and rescue, emergency management — to support our exemption pathway and real-world mission validation.",
    benefits: [
      "Early access to flight trial data",
      "Input on sensor payloads and mission software",
      "Co-sponsorship of BVLOS exemption (Section 44807)",
      "Priority deployment support for field evaluations",
    ],
    cta: "DISCUSS PARTNERSHIP",
  },
  {
    icon: DollarSign,
    title: "Funders & Grant Programs",
    badge: "SBIR / STTR",
    description:
      "Learn about our SBIR/STTR funding pathway and current needs. We are structured as an Oregon public-benefit LLC with humanitarian mission orientation, making us a strong fit for mission-driven grant programs and impact-focused investors.",
    benefits: [
      "SBIR/STTR program information package",
      "Technical documentation on request",
      "Honest project status and milestone roadmap",
      "B Lab public-benefit LLC structure",
    ],
    cta: "FUNDING INQUIRY",
  },
  {
    icon: Newspaper,
    title: "Press & General Public",
    badge: "MEDIA & UPDATES",
    description:
      "General contact, mission updates, and newsletter signup for anyone following the project. We believe in building in public — sharing real engineering progress, honest setbacks, and genuine milestones as they happen.",
    benefits: [
      "Mission updates and progress announcements",
      "Media kit and photography on request",
      "Engineering blog (coming soon)",
      "General project questions welcome",
    ],
    cta: "GET IN TOUCH",
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

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

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
            <Radio className="w-4 h-4 text-black" />
            <span>GET INVOLVED // PARTNERS, FUNDERS &amp; PRESS</span>
          </div>
          <h2 className="partner-fade text-[clamp(1.85rem,3.8vw,3.2rem)] font-bold font-sans tracking-tight text-zinc-950">
            Three Ways to Engage
          </h2>
        </div>
        <p className="partner-fade max-w-md text-sm text-zinc-600 font-sans">
          Whether you are a public safety agency, a grant program, or someone who wants to follow along — here is how to connect.
        </p>
      </div>

      {/* 3 Audience Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {audienceTracks.map((item, idx) => {
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

                <h3 className="text-xl font-bold font-sans text-zinc-950 mb-3">{item.title}</h3>
                <p className="text-sm text-zinc-600 leading-relaxed mb-6 font-sans">{item.description}</p>

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
                  onClick={handleScroll}
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-zinc-950 hover:text-zinc-600 transition-colors"
                >
                  <span>{item.cta}</span>
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
