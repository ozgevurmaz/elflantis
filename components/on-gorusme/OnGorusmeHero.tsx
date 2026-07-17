"use client";

import { motion } from "framer-motion";

import { TallyCTAButton } from "@/components/on-gorusme/TallyCTAButton";
import { ProfilePhoto } from "@/components/profile-photo";
import { PRE_CONSULTATION_HERO_CONTENT } from "@/lib/constants";

const FADE_UP = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
} as const;

export function OnGorusmeHero() {
  return (
    <section className="pt-6 pb-20 sm:pt-10 lg:pb-28">
      <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={FADE_UP}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-flex items-center rounded-full bg-lavender-100 px-4 py-1.5 text-sm font-medium text-lavender-700">
            {PRE_CONSULTATION_HERO_CONTENT.eyebrow}
          </span>

          <h1 className="mt-6 font-display text-4xl leading-[1.15] tracking-tight text-ink-900 sm:text-5xl lg:text-[3.25rem]">
            {PRE_CONSULTATION_HERO_CONTENT.title}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-700">
            {PRE_CONSULTATION_HERO_CONTENT.leadIn}{" "}
            <span className="font-semibold text-ink-900">
              {PRE_CONSULTATION_HERO_CONTENT.emphasis}
            </span>{" "}
            {PRE_CONSULTATION_HERO_CONTENT.trailingParagraph}
          </p>

          <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink-700">
            {PRE_CONSULTATION_HERO_CONTENT.closing}
          </p>

          <div className="mt-9">
            <TallyCTAButton>{PRE_CONSULTATION_HERO_CONTENT.cta}</TallyCTAButton>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          className="flex justify-center lg:justify-end"
        >
          <ProfilePhoto alt={PRE_CONSULTATION_HERO_CONTENT.photoAlt} />
        </motion.div>
      </div>
    </section>
  );
}
