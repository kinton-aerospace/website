"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import useUserActivity from "@/hooks/useUserActivity";
import { Plane, Compass, Activity, ChevronRight, X, Sparkles, Layers } from "lucide-react";

const navItems = [
  {
    id: 1,
    title: "Mission & Strategic Imperative",
    tagline: "Bridging Range vs. Runway Independence",
    link: "#mission",
    icon: Compass,
  },
  {
    id: 2,
    title: "Project K-1 Architecture",
    tagline: "Our First Hybrid VTOL Prototype",
    link: "#prototype",
    icon: Plane,
  },
  {
    id: 3,
    title: "Development Roadmap",
    tagline: "CFD Simulation to Maiden Flight",
    link: "#roadmap",
    icon: Activity,
  },
  {
    id: 4,
    title: "Strategic Partnerships",
    tagline: "SAR & Defense Early Pilot Tracks",
    link: "#partners",
    icon: Layers,
  },
  {
    id: 5,
    title: "Direct Engagement",
    tagline: "Founders, Pilots & Engineering Roles",
    link: "#contact",
    icon: Sparkles,
  },
];

const Nav = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [mouseHover, setMouseHover] = useState<boolean>(false);
  const activeUser = useUserActivity(8000);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    e.preventDefault();
    setOpen(false);
    const target = document.querySelector(link);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav aria-label="Main Navigation" className="fixed bottom-5 left-1/2 -translate-x-1/2 z-[995] w-[92%] max-w-lg md:max-w-xl">
      {/* Floating Tactical Pill */}
      <div
        onMouseEnter={() => setMouseHover(true)}
        onMouseLeave={() => setMouseHover(false)}
        onClick={() => setOpen(!open)}
        className="h-14 w-full rounded-xl bg-black/95 backdrop-blur-2xl border border-zinc-700 text-white px-4 flex items-center justify-between cursor-pointer shadow-2xl transition-all duration-200 hover:border-white"
      >
        {/* Left Section: Mark & Live State */}
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center h-7 w-7 rounded bg-zinc-900 border border-zinc-700">
            <Plane className="w-3.5 h-3.5 text-white" />
          </div>

          <div className="relative h-6 overflow-hidden flex flex-col justify-center text-xs font-sans">
            {/* Default State */}
            <motion.div
              animate={!mouseHover && activeUser ? { y: 0 } : { y: "-120%" }}
              transition={{ duration: 0.25 }}
              className="text-white font-semibold tracking-wider uppercase flex items-center gap-2"
            >
              <span>KINTON AEROSPACE</span>
              <span className="text-zinc-500 hidden sm:inline">| HYBRID FLIGHT LAB</span>
            </motion.div>

            {/* Hover State */}
            <motion.div
              animate={mouseHover && activeUser ? { y: 0 } : { y: "120%" }}
              transition={{ duration: 0.25 }}
              className="absolute top-0 left-0 text-white font-semibold flex items-center gap-1 uppercase tracking-wider"
            >
              <span>OPEN NAVIGATION</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </motion.div>

            {/* Idle State */}
            <motion.div
              animate={!activeUser ? { y: 0 } : { y: "120%" }}
              transition={{ duration: 0.25 }}
              className="absolute top-0 left-0 text-zinc-400 uppercase tracking-wider"
            >
              PROJECT K-1 ALPHA
            </motion.div>
          </div>
        </div>

        {/* Right Section: Briefing CTA & Menu Toggle */}
        <div className="flex items-center gap-2.5">
          <a
            href="#contact"
            onClick={(e) => {
              e.stopPropagation();
              handleScrollTo(e, "#contact");
            }}
            className="hidden sm:inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider px-3 py-1.5 rounded bg-white text-black hover:bg-zinc-200 transition-colors"
          >
            <span>CONTACT</span>
          </a>

          <button
            type="button"
            aria-label="Toggle menu"
            className="h-8 w-8 rounded bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 flex items-center justify-center transition-colors text-white"
          >
            {open ? (
              <X className="w-4 h-4 text-white" />
            ) : (
              <div className="flex flex-col gap-1 w-3.5 items-center">
                <span className="w-full h-0.5 bg-white rounded-full"></span>
                <span className="w-full h-0.5 bg-white rounded-full"></span>
              </div>
            )}
          </button>
        </div>
      </div>

      {/* Expanded Menu Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute bottom-16 left-0 w-full rounded-xl bg-black/98 backdrop-blur-2xl border border-zinc-700 p-5 shadow-2xl text-white overflow-hidden"
          >
            {/* Header */}
            <div className="flex justify-between items-center pb-3 border-b border-zinc-800 mb-3">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest font-sans text-white">
                  KINTON AEROSPACE SYSTEMS
                </h3>
                <p className="text-[11px] text-zinc-400 font-sans">
                  PRE-PRODUCTION FLIGHT LAB
                </p>
              </div>
              <div className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-zinc-900 text-white border border-zinc-700 font-medium">
                ALPHA CRAFT
              </div>
            </div>

            {/* Nav list */}
            <ul className="space-y-1.5">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.id}>
                    <a
                      href={item.link}
                      onClick={(e) => handleScrollTo(e, item.link)}
                      className="group flex items-center justify-between p-2.5 rounded-lg hover:bg-zinc-900 border border-transparent hover:border-zinc-800 transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded bg-zinc-900 border border-zinc-800 text-zinc-400 group-hover:text-white group-hover:border-zinc-600 transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-white group-hover:text-zinc-200 transition-colors">
                            {item.title}
                          </div>
                          <div className="text-[11px] text-zinc-400 font-sans">
                            {item.tagline}
                          </div>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-zinc-600 group-hover:text-white group-hover:translate-x-1 transition-all" />
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Bottom Actions */}
            <div className="mt-4 pt-3 border-t border-zinc-800 flex justify-between items-center text-xs text-zinc-400">
              <span className="uppercase tracking-wider text-[10px]">PRE-PRODUCTION PHASE</span>
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, "#contact")}
                className="text-white hover:underline flex items-center gap-1 font-semibold uppercase tracking-wider text-[11px]"
              >
                ENGAGE FOUNDING TEAM →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Nav;
