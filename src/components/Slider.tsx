"use client";

import React, { useRef, useEffect } from "react";
import { DroneMediaPlaceholder } from "./DroneMediaPlaceholder";
import { Move, Crosshair } from "lucide-react";

/*
 * PLACEHOLDER LIST FOR PROTOTYPE R&D SHOWCASE SLIDER
 * Place your CAD renders, CFD simulations, or flight photos in /public/drone-media/
 */
const droneGalleryItems = [
  {
    id: 1,
    type: "image" as const,
    src: "/drone-media/k1-cfd-aerodynamics.jpg",
    label: "PROJECT K-1 CFD AIRFOIL SIMULATION",
    badge: "STAGE 01 // AERODYNAMICS",
    flightData: {
      altitude: "DIGITAL TWIN SIM",
      airspeed: "140 KTS CRUISE SIM",
      payload: "L/D EFFICIENCY: 18:1",
      mode: "CFD VALIDATION",
    },
  },
  {
    id: 2,
    type: "video" as const,
    src: "/drone-media/hybrid-powertrain-bench.mp4",
    label: "HYBRID POWERTRAIN TEST BENCH",
    badge: "STAGE 02 // PROPULSION",
    flightData: {
      altitude: "GROUND DYNABENCH",
      airspeed: "0 KTS STATIC THRUST",
      payload: "TURBINE-GENERATOR",
      mode: "HYBRID BENCH TESTING",
    },
  },
  {
    id: 3,
    type: "image" as const,
    src: "/drone-media/k1-cad-assembly.jpg",
    label: "1:1 SCALE CAD PROTOTYPE AIRFRAME",
    badge: "STAGE 03 // AIRFRAME CAD",
    flightData: {
      altitude: "WINGSPAN: 4.2 METERS",
      airspeed: "VTOL TILT-ROTOR",
      payload: "10 KG MODULAR BAY",
      mode: "CARBON COMPOSITE TOOLING",
    },
  },
  {
    id: 4,
    type: "image" as const,
    src: "/drone-media/avionics-hil-testing.jpg",
    label: "AUTONOMOUS AVIONICS HIL TESTING",
    badge: "STAGE 04 // FLIGHT SOFTWARE",
    flightData: {
      altitude: "HARDWARE-IN-THE-LOOP",
      airspeed: "SIMULATED ENVELOPE",
      payload: "EO/IR THERMAL GIMBAL",
      mode: "GPS-DENIED ODOMETRY",
    },
  },
];

const Slider = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.pageX - (scrollRef.current?.offsetLeft || 0);
    scrollLeft.current = scrollRef.current?.scrollLeft || 0;
  };

  const onMouseMove = (e: MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.8;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const stopDragging = () => {
    isDragging.current = false;
  };

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", stopDragging);
    window.addEventListener("mouseleave", stopDragging);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", stopDragging);
      window.removeEventListener("mouseleave", stopDragging);
    };
  }, []);

  return (
    <div className="relative mt-16 select-none">
      {/* Slider Header info */}
      <div className="flex justify-between items-center px-1 mb-4 text-xs font-mono uppercase tracking-wider text-zinc-500">
        <span className="flex items-center gap-2 font-semibold text-zinc-800">
          <Crosshair className="w-3.5 h-3.5 text-black" />
          <span>PROJECT K-1 // DEVELOPMENT ARCHIVE & CAD BLUEPRINTS</span>
        </span>
        <span className="hidden sm:inline-flex items-center gap-1.5 text-zinc-600">
          <Move className="w-3 h-3" />
          <span>DRAG TO INSPECT ARTICLES</span>
        </span>
      </div>

      {/* Draggable container */}
      <div
        ref={scrollRef}
        onMouseDown={onMouseDown}
        className="flex gap-6 overflow-x-auto cursor-grab active:cursor-grabbing pb-4 hide-scrollbar"
        style={{ scrollBehavior: isDragging.current ? "auto" : "smooth" }}
      >
        {droneGalleryItems.map((item) => (
          <div
            key={item.id}
            className="w-[320px] sm:w-[420px] md:w-[500px] shrink-0 pointer-events-auto transition-transform duration-300 hover:scale-[1.01]"
          >
            <DroneMediaPlaceholder
              type={item.type}
              src={item.src}
              label={item.label}
              badge={item.badge}
              flightData={item.flightData}
              aspect="aspect-[16/10]"
              className="shadow-md border border-zinc-800"
              dark={true}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
