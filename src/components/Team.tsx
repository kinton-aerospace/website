"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Users } from "lucide-react";

const teamMembers = [
  {
    name: "Project Lead",
    role: "Founder & Lead Engineer",
    location: "Beaverton, OR",
    credentials: ["Part 107 Certified Remote Pilot", "CAD & Structural Design", "Electrical Engineering & PCB Design", "Project management & systems integration"],
    note: "Bio coming soon",
    initials: "ROSD",
  },
];

const Team = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".team-fade", {
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
      id="team"
      ref={containerRef}
      className="p-6 sm:p-10 md:p-14 lg:p-16 bg-white text-zinc-950 border-b border-zinc-200"
    >
      {/* Header */}
      <div className="mb-10">
        <div className="team-fade flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-500 font-semibold mb-2">
          <Users className="w-4 h-4 text-black" />
          <span>Kinton Aerospace Team</span>
        </div>
        <p className="team-fade mt-3 max-w-xl text-sm text-zinc-600 leading-relaxed">
          An engineer from Kinton, OR building innovative aerospace solutions.
        </p>
      </div>

      {/* Team Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            className="team-fade p-6 rounded-xl bg-zinc-50 border border-zinc-200 hover:border-zinc-400 transition-all flex flex-col"
          >
            {/* Avatar */}
            <div className="w-14 h-14 rounded-xl bg-zinc-950 text-white flex items-center justify-center text-lg font-bold font-mono mb-5">
              {member.initials}
            </div>

            <div className="flex-1">
              <h3 className="text-base font-bold font-sans text-zinc-950">{member.name}</h3>
              <div className="text-xs text-zinc-500 font-semibold uppercase tracking-wider mt-0.5 mb-1">{member.role}</div>
              <div className="text-xs text-zinc-400 mb-4">{member.location}</div>

              {member.credentials.length > 0 && (
                <ul className="space-y-1.5 text-xs text-zinc-600">
                  {member.credentials.map((cred, cIdx) => (
                    <li key={cIdx} className="flex items-start gap-1.5">
                      <span className="text-zinc-900 font-bold shrink-0">›</span>
                      <span>{cred}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="mt-5 pt-4 border-t border-zinc-200 text-[10px] uppercase tracking-wider text-zinc-400 font-semibold">
              {member.note}
            </div>
          </div>
        ))}
      </div>

      {/* Join callout */}
      <div className="team-fade mt-8 p-5 rounded-xl bg-zinc-50 border border-zinc-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <div className="text-sm font-bold text-zinc-950">Interested in joining?</div>
          <div className="text-xs text-zinc-500 mt-0.5">We&apos;re a small team building something real. Engineering, fabrication, and software roles may open as we grow.</div>
        </div>
        <a
          href="#contact"
          onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
          className="shrink-0 inline-flex items-center gap-2 px-4 py-2 bg-black text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors hover:bg-zinc-800"
        >
          Get in touch
        </a>
      </div>
    </section>
  );
};

export default Team;
