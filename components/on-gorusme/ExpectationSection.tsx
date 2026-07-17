"use client";

import { motion } from "framer-motion";
import { Clock, Coffee } from "lucide-react";

import { EXPECTATION_SECTION_CONTENT } from "@/lib/constants";

const FADE_UP = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
} as const;

export function ExpectationSection() {
  return (
    <section className="bg-sage-50/60 px-6 py-16 lg:px-8 lg:py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={FADE_UP}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mx-auto max-w-2xl"
      >
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white">
          <Coffee className="h-5 w-5 text-sage-600" strokeWidth={1.75} aria-hidden="true" />
        </div>

        <h2 className="mt-5 font-display text-3xl tracking-tight text-ink-900 sm:text-4xl">
          {EXPECTATION_SECTION_CONTENT.title}
        </h2>

        <div className="mt-6 space-y-4">
          {EXPECTATION_SECTION_CONTENT.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-[17px] leading-relaxed text-ink-700">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-7 inline-flex items-center gap-2.5 rounded-full bg-white px-5 py-3 shadow-sm shadow-ink-900/[0.04]">
          <Clock className="h-4 w-4 shrink-0 text-sage-600" strokeWidth={2} aria-hidden="true" />
          <p className="text-[15px] font-semibold text-ink-900">
            {EXPECTATION_SECTION_CONTENT.emphasis}
          </p>
        </div>
      </motion.div>
    </section>
  );
}
