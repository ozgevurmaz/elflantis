"use client";

import { motion } from "framer-motion";

import { TallyCTAButton } from "@/components/atolyeler/duygularinda-ustalas/TallyCTAButton";
import { WORKSHOP_HERO_CONTENT } from "@/lib/constants";

const FADE_UP = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
} as const;

export function WorkshopHero() {
  return (
    <section className="pt-6 pb-16 sm:pt-10 lg:pb-20">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={FADE_UP}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-2xl text-center"
      >
        <span className="inline-flex items-center rounded-full bg-lavender-100 px-4 py-1.5 text-sm font-medium text-lavender-700">
          {WORKSHOP_HERO_CONTENT.eyebrow}
        </span>

        <h1 className="mt-6 font-display text-4xl leading-[1.15] tracking-tight text-ink-900 sm:text-5xl">
          {WORKSHOP_HERO_CONTENT.title}
        </h1>

        <div className="mt-7 space-y-2">
          {WORKSHOP_HERO_CONTENT.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-lg leading-relaxed text-ink-700">
              {paragraph}
            </p>
          ))}
        </div>

        <p className="mt-6 font-display text-xl text-ink-900 sm:text-2xl">
          {WORKSHOP_HERO_CONTENT.emphasis}
        </p>

        <p className="mt-6 text-lg leading-relaxed text-ink-700">{WORKSHOP_HERO_CONTENT.description}</p>

        <div className="mt-9">
          <TallyCTAButton>{WORKSHOP_HERO_CONTENT.cta}</TallyCTAButton>
        </div>
      </motion.div>
    </section>
  );
}
