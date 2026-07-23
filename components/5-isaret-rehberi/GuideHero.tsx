"use client";

import { motion } from "framer-motion";

import { GuideForm } from "@/components/5-isaret-rehberi/GuideForm";
import { GUIDE_HERO_CONTENT } from "@/lib/constants";

const FADE_UP = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
} as const;

export function GuideHero() {
  return (
    <section className="pt-6 pb-16 sm:pt-10">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={FADE_UP}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-xl text-center"
      >
        <p className="text-[15px] text-ink-700">{GUIDE_HERO_CONTENT.leadIn}</p>

        <span className="mt-6 inline-flex items-center rounded-full bg-lavender-100 px-4 py-1.5 text-sm font-medium text-lavender-700">
          {GUIDE_HERO_CONTENT.eyebrow}
        </span>

        <h1 className="mt-6 font-display text-4xl leading-[1.15] tracking-tight text-ink-900 sm:text-5xl">
          {GUIDE_HERO_CONTENT.title}
        </h1>

        <p className="mt-6 text-lg leading-relaxed text-ink-700">{GUIDE_HERO_CONTENT.description}</p>

        <p className="mt-8 text-[15px] text-ink-700">{GUIDE_HERO_CONTENT.formIntro}</p>

        <div className="mt-6">
          <GuideForm />
        </div>
      </motion.div>
    </section>
  );
}
