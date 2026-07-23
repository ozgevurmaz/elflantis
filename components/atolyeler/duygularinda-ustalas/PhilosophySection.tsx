"use client";

import { motion } from "framer-motion";

import { TallyCTAButton } from "@/components/atolyeler/duygularinda-ustalas/TallyCTAButton";
import { WORKSHOP_PHILOSOPHY_CONTENT } from "@/lib/constants";

export function PhilosophySection() {
  return (
    <section className="px-6 py-20 lg:px-8 lg:py-28">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mx-auto flex max-w-xl flex-col items-center rounded-3xl bg-ink-900 px-8 py-14 text-center sm:px-16"
      >
        <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
          {WORKSHOP_PHILOSOPHY_CONTENT.title}
        </h2>

        <div className="mt-6 space-y-3">
          {WORKSHOP_PHILOSOPHY_CONTENT.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-lg text-white/70">
              {paragraph}
            </p>
          ))}
        </div>

        <p className="mt-6 text-lg font-medium text-white">{WORKSHOP_PHILOSOPHY_CONTENT.closing}</p>

        <div className="mt-8">
          <TallyCTAButton>{WORKSHOP_PHILOSOPHY_CONTENT.cta}</TallyCTAButton>
        </div>
      </motion.div>
    </section>
  );
}
