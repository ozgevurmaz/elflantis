"use client";

import { motion } from "framer-motion";
import { Sunrise } from "lucide-react";

import { TRANSFORMATION_SECTION_CONTENT } from "@/lib/constants";

const FADE_UP = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
} as const;

export function TransformationSection() {
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
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sage-100">
          <Sunrise className="h-5 w-5 text-sage-600" strokeWidth={1.75} aria-hidden="true" />
        </div>

        <h2 className="mt-5 font-display text-3xl tracking-tight text-ink-900 sm:text-4xl">
          {TRANSFORMATION_SECTION_CONTENT.title}
        </h2>

        <div className="mt-6 space-y-4">
          {TRANSFORMATION_SECTION_CONTENT.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-[17px] leading-relaxed text-ink-700">
              {paragraph}
            </p>
          ))}
        </div>

        <p className="mt-4 text-[17px] leading-relaxed text-ink-700">
          {TRANSFORMATION_SECTION_CONTENT.emphasisLeadIn}{" "}
          <span className="font-semibold text-ink-900">
            {TRANSFORMATION_SECTION_CONTENT.emphasis}
          </span>{" "}
          {TRANSFORMATION_SECTION_CONTENT.emphasisTrailing}
        </p>

        <div className="mt-6 space-y-4 border-t border-ink-900/8 pt-6">
          {TRANSFORMATION_SECTION_CONTENT.closingParagraphs.map((paragraph, index) => (
            <p key={index} className="text-[17px] leading-relaxed text-ink-700">
              {paragraph}
            </p>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
