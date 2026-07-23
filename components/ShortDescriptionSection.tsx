"use client";

import { motion } from "framer-motion";

import { HOME_SHORT_DESCRIPTION_CONTENT } from "@/lib/constants";

const FADE_UP = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
} as const;

export function ShortDescriptionSection() {
  return (
    <section className="bg-lavender-50/60 px-6 py-16 lg:px-8 lg:py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={FADE_UP}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mx-auto max-w-2xl space-y-4 text-center"
      >
        {HOME_SHORT_DESCRIPTION_CONTENT.paragraphs.map((paragraph, index) => (
          <p key={index} className="text-lg leading-relaxed text-ink-800">
            {paragraph}
          </p>
        ))}
      </motion.div>
    </section>
  );
}
