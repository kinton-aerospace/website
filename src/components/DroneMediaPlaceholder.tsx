"use client";

import React from "react";
import { Eye, Video, Crosshair } from "lucide-react";
import Image from "next/image";

interface DroneMediaProps {
  type?: "image" | "video";
  src?: string;
  alt?: string;
  aspect?: string;
  label?: string;
  badge?: string;
  flightData?: {
    altitude?: string;
    airspeed?: string;
    payload?: string;
    mode?: string;
  };
  className?: string;
  dark?: boolean;
}

export const DroneMediaPlaceholder: React.FC<DroneMediaProps> = ({
  type = "image",
  src,
  alt = "Kinton Drone Prototype Media",
  aspect = "aspect-video",
  label = "DRONE IN-FLIGHT / CAD MEDIA PLACEHOLDER",
  badge = "PROJECT K-1 // ALPHA R&D",
  flightData = {
    altitude: "TARGET: 14+ HRS",
    airspeed: "140 KTS CRUISE",
    payload: "10 KG MODULAR SAR",
    mode: "HYBRID VTOL TILT-ROTOR",
  },
  className = "",
  dark = true,
}) => {
  const [hasValidSource, setHasValidSource] = React.useState<boolean>(Boolean(src && !src.includes("placeholder")));

  return (
    <div
      className={`relative group overflow-hidden rounded-xl ${
        dark ? "bg-zinc-950 border border-zinc-800 text-white" : "bg-zinc-900 border border-zinc-700 text-white"
      } ${aspect} ${className}`}
    >
      {hasValidSource && src ? (
        type === "video" ? (
          <div className="relative w-full h-full">
            <video
              src={src}
              controls
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              onError={() => setHasValidSource(false)}
            />
          </div>
        ) : (
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            onError={() => setHasValidSource(false)}
          />
        )
      ) : (
        /* Clean Defense Aerospace Technical Wireframe */
        <div className="relative w-full h-full flex flex-col justify-between p-5 select-none bg-gradient-to-br from-zinc-900 via-zinc-950 to-black">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />

          {/* Top Label Bar */}
          <div className="relative z-10 flex justify-between items-center text-[11px] uppercase tracking-wider text-zinc-400">
            <span className="font-semibold text-white flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-white"></span>
              {badge}
            </span>
            <span className="text-zinc-500">SPECIFICATION ARTICLE</span>
          </div>

          {/* Central Fixed-Wing Blueprint Wireframe */}
          <div className="relative z-10 flex flex-col items-center justify-center my-auto py-4">
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full border border-dashed border-zinc-800 flex items-center justify-center">
              <svg
                viewBox="0 0 100 100"
                className="w-20 h-20 sm:w-24 sm:h-24 text-zinc-300 drop-shadow-md"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                {/* Fuselage */}
                <path d="M50 16 L53 45 L52 84 L48 84 L47 45 Z" fill="currentColor" fillOpacity="0.1" />
                {/* Swept Wing */}
                <path d="M50 36 L92 50 L90 55 L52 47 L48 47 L10 55 L8 50 Z" fill="currentColor" fillOpacity="0.15" />
                {/* Booms & VTOL Motors */}
                <path d="M30 30 L30 70 M70 30 L70 70" strokeDasharray="3 2" />
                <circle cx="30" cy="30" r="3.5" fill="currentColor" fillOpacity="0.3" />
                <circle cx="30" cy="70" r="3.5" fill="currentColor" fillOpacity="0.3" />
                <circle cx="70" cy="30" r="3.5" fill="currentColor" fillOpacity="0.3" />
                <circle cx="70" cy="70" r="3.5" fill="currentColor" fillOpacity="0.3" />
                {/* T-Tail */}
                <path d="M38 80 L62 80 M50 76 L50 84" />
              </svg>
              <Crosshair className="absolute w-6 h-6 text-zinc-600" />
            </div>

            <div className="mt-3 text-center">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-zinc-900 border border-zinc-800 text-xs text-zinc-200">
                {type === "video" ? <Video className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
                {label}
              </span>
              <p className="text-[10px] text-zinc-500 mt-1">
                Drop your media in <code className="text-zinc-300">/public/drone-media/</code>
              </p>
            </div>
          </div>

          {/* Bottom Specs Readout */}
          <div className="relative z-10 pt-3 border-t border-zinc-800/80 grid grid-cols-2 sm:grid-cols-4 gap-2 text-[10px] uppercase tracking-wider text-zinc-400">
            <div>
              <span className="text-zinc-500 block">ENDURANCE:</span>
              <span className="text-white font-medium">{flightData.altitude}</span>
            </div>
            <div>
              <span className="text-zinc-500 block">CRUISE:</span>
              <span className="text-white font-medium">{flightData.airspeed}</span>
            </div>
            <div>
              <span className="text-zinc-500 block">PAYLOAD:</span>
              <span className="text-white font-medium">{flightData.payload}</span>
            </div>
            <div>
              <span className="text-zinc-500 block">CONFIGURATION:</span>
              <span className="text-white font-medium">{flightData.mode}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
