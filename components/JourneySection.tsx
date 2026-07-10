"use client";

import { motion } from "framer-motion";

import { JOURNEY_CARDS, JOURNEY_CONTENT } from "@/lib/constants";

const FADE_UP = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
} as const;

export function JourneySection() {
  return (
    <section className="px-6 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={FADE_UP}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <h2 className="font-display text-3xl tracking-tight text-ink-900 sm:text-4xl">
            {JOURNEY_CONTENT.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-700">
            {JOURNEY_CONTENT.description}
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {JOURNEY_CARDS.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={FADE_UP}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
                className="group rounded-2xl border border-ink-900/[0.06] bg-white p-7 transition-shadow duration-200 hover:shadow-md hover:shadow-ink-900/[0.04]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sage-100">
                  <Icon className="h-5 w-5 text-sage-600" strokeWidth={1.75} aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-[17px] font-semibold text-ink-900">{card.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-700">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
