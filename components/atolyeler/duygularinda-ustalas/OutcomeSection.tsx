"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

import { WORKSHOP_OUTCOME_CONTENT, WORKSHOP_OUTCOME_ITEMS } from "@/lib/constants";

const FADE_UP = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
} as const;

export function OutcomeSection() {
  return (
    <section className="px-6 py-20 lg:px-8 lg:py-28">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={FADE_UP}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mx-auto max-w-2xl"
      >
        <h2 className="font-display text-3xl tracking-tight text-ink-900 sm:text-4xl">
          {WORKSHOP_OUTCOME_CONTENT.title}
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-ink-700">{WORKSHOP_OUTCOME_CONTENT.description}</p>

        <ul className="mt-8 space-y-4">
          {WORKSHOP_OUTCOME_ITEMS.map((item) => (
            <li key={item.id} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sage-100">
                <Check className="h-3.5 w-3.5 text-sage-600" strokeWidth={2.5} aria-hidden="true" />
              </span>
              <p className="text-[17px] leading-relaxed text-ink-800">{item.text}</p>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
