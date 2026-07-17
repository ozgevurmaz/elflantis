"use client";

import { motion } from "framer-motion";
import { KeyRound } from "lucide-react";

import { TRUTH_SECTION_CONTENT } from "@/lib/constants";

const FADE_UP = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
} as const;

export function TruthSection() {
  return (
    <section className="px-6 py-16 lg:px-8 lg:py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={FADE_UP}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mx-auto max-w-2xl"
      >
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-lavender-100">
          <KeyRound className="h-5 w-5 text-lavender-600" strokeWidth={1.75} aria-hidden="true" />
        </div>

        <h2 className="mt-5 font-display text-3xl tracking-tight text-ink-900 sm:text-4xl">
          {TRUTH_SECTION_CONTENT.title}
        </h2>

        <div className="mt-6 rounded-2xl border-l-4 border-lavender-400 bg-lavender-50/70 py-5 pl-6 pr-5">
          <p className="font-display text-xl text-ink-900 sm:text-2xl">
            {TRUTH_SECTION_CONTENT.emphasis}
          </p>
        </div>

        <div className="mt-6 space-y-4">
          {TRUTH_SECTION_CONTENT.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-[17px] leading-relaxed text-ink-700">
              {paragraph}
            </p>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
