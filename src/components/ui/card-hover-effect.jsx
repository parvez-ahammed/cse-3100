"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import CharContext from "./../../Pages/Verti_char/CharContext"
import { Card } from "./apple-cards-carousel";

export const HoverEffect = ({ items, className }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedCharacter, setSelectedCharacter] = useState(null); // 👈 New



  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10", className)}>
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative group block p-2 h-full w-full cursor-pointer"
         // onClick={() => setSelectedCharacter(item.character)} // 👈 Handle click
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-600 dark:bg-slate-1000/[0.8] block rounded-3xl"
                style={{ backgroundColor: "blue" }}
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>

          <Cards backgroundImage={item.backgroundImage}>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Cards>
        </div>
      ))}
    </div>
  );
};
export const Cards = ({ className, children, backgroundImage }) => {
  return (
    <div
      className={cn(
        "flex h-[300px] rounded-2xl overflow-hidden border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20 bg-black",
        className
      )}
    >
      {/* Left: Background Image */}
      <div
        className="w-1/2 h-full bg-cover bg-center"
        style={{
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        }}
      />

      {/* Right: Text Content */}
      <div className="w-1/2 h-full p-4 flex flex-col justify-center text-white z-10">
        {children}
      </div>
    </div>
  );
};


export const CardTitle = ({ className, children }) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({ className, children }) => {
  return (
    <p className={cn("mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm", className)}>
      {children}
    </p>
  );
};
