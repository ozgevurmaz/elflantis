"use client";

import { motion } from "framer-motion";

import { WORKSHOP_PROCESS_CONTENT, WORKSHOP_PROCESS_FORMATS } from "@/lib/constants";

const FADE_UP = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
} as const;

export function ProcessSection() {
  return (
    <section className="bg-sage-50/60 px-6 py-20 lg:px-8 lg:py-28">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={FADE_UP}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mx-auto max-w-2xl"
      >
        <h2 className="font-display text-3xl tracking-tight text-ink-900 sm:text-4xl">
          {WORKSHOP_PROCESS_CONTENT.title}
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-ink-700">
          {WORKSHOP_PROCESS_CONTENT.description}
        </p>

        <p className="mt-8 text-[15px] font-medium text-ink-700">
          {WORKSHOP_PROCESS_CONTENT.formatsIntro}
        </p>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {WORKSHOP_PROCESS_FORMATS.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-ink-900/6 bg-white px-5 py-4 text-[15px] font-medium text-ink-800"
            >
              {item.text}
            </div>
          ))}
        </div>

        <p className="mt-8 text-[17px] leading-relaxed text-ink-700">{WORKSHOP_PROCESS_CONTENT.closing}</p>
      </motion.div>
    </section>
  );
}
