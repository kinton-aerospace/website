"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const greetings = [
  "Hello",
  "Bonjour",
  "Willkommen",
  "Hola",
  "Ciao",
  "Olá",
  "Hej",
  "Hallo",
  "G'day",
  "你好",
  "こんにちは",
  "안녕하세요",
  "नमस्ते",
  "مرحباً",
  "שלום",
  "Γειά σας",
  "Sawubona",
  "Kinton Aerospace",
];

const Loader = () => {
  const [index, setIndex] = useState(0);
  const [done, setDone] = useState(false);
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isLast = index === greetings.length - 1;

    if (!isLast) {
      // Gradual acceleration from 230ms down to 45ms
      const totalWordsBeforeLast = greetings.length - 1;
      const progress = index / (totalWordsBeforeLast - 1);
      const delay = Math.round(230 - (230 - 45) * Math.pow(progress, 1.4));

      const timer = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, delay);

      return () => clearTimeout(timer);
    } else {
      // Land on Kinton Aerospace for longer (~850ms) then smooth Apple-style slide up
      const exitTimer = setTimeout(() => {
        if (loaderRef.current) {
          gsap.to(loaderRef.current, {
            yPercent: -100,
            duration: 0.85,
            ease: "power4.inOut",
            onComplete: () => setDone(true),
          });
        } else {
          setDone(true);
        }
      }, 850);

      return () => clearTimeout(exitTimer);
    }
  }, [index]);

  if (done) return null;

  const isFinalBrand = index === greetings.length - 1;

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[99999] h-screen w-screen flex flex-col justify-between bg-black text-white p-8 md:p-14 select-none"
    >
      {/* Top minimal mark */}
      <div className="flex justify-between items-center text-xs tracking-widest uppercase text-zinc-500 font-sans">
        <span className="font-semibold text-white tracking-widest">KINTON AEROSPACE</span>
        <span>AUTONOMOUS FLIGHT SYSTEMS</span>
      </div>

      {/* Center Multilingual Greeting */}
      <div className="my-auto flex items-center justify-center">
        <h2
          className={`text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white font-sans text-center transition-all duration-75 ${
            isFinalBrand ? "font-semibold tracking-tight scale-105" : "font-light"
          }`}
        >
          {greetings[index]}
        </h2>
      </div>

      {/* Bottom minimal indicator */}
      <div className="flex justify-between items-center text-xs text-zinc-600 tracking-wider">
        <span>PRE-PRODUCTION FLIGHT LAB</span>
        <span>EST. 2025</span>
      </div>
    </div>
  );
};

export default Loader;
