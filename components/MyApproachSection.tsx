"use client";

import { motion } from "framer-motion";

import { HOME_MY_APPROACH_CONTENT } from "@/lib/constants";

const FADE_UP = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
} as const;

export function MyApproachSection() {
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
          {HOME_MY_APPROACH_CONTENT.title}
        </h2>

        <div className="mt-6 space-y-4">
          {HOME_MY_APPROACH_CONTENT.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-[17px] leading-relaxed text-ink-700">
              {paragraph}
            </p>
          ))}
        </div>

        <p className="mt-8 text-[15px] font-medium text-ink-700">
          {HOME_MY_APPROACH_CONTENT.questionLeadIn}
        </p>

        <div className="mt-4 rounded-2xl border-l-4 border-lavender-400 bg-lavender-50/70 py-5 pl-6 pr-5">
          <p className="font-display text-xl text-ink-900 sm:text-2xl">
            {HOME_MY_APPROACH_CONTENT.question}
          </p>
        </div>

        <p className="mt-8 text-[17px] leading-relaxed text-ink-700">{HOME_MY_APPROACH_CONTENT.closing}</p>
      </motion.div>
    </section>
  );
}
