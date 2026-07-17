"use client";

import { motion } from "framer-motion";

import { PROCESS_SECTION_CONTENT, PROCESS_STEPS } from "@/lib/constants";

const FADE_UP = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
} as const;

export function ProcessSection() {
  return (
    <section className="bg-lavender-50/60 px-6 py-20 lg:px-8 lg:py-28">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={FADE_UP}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mx-auto max-w-2xl"
      >
        <h2 className="font-display text-3xl tracking-tight text-ink-900 sm:text-4xl">
          {PROCESS_SECTION_CONTENT.title}
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-ink-700">
          {PROCESS_SECTION_CONTENT.description}
        </p>
      </motion.div>

      <div className="mx-auto mt-12 flex max-w-2xl flex-col gap-4">
        {PROCESS_STEPS.map((step, index) => (
          <motion.div
            key={step.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={FADE_UP}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
            className="flex gap-5 rounded-2xl border border-ink-900/6 bg-white p-6 sm:p-7"
          >
            <span
              aria-hidden="true"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-lavender-100 font-display text-sm text-lavender-700"
            >
              {step.number}
            </span>
            <div>
              <h3 className="text-[17px] font-semibold text-ink-900">{step.title}</h3>
              <p className="mt-1.5 text-[15px] leading-relaxed text-ink-700">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
