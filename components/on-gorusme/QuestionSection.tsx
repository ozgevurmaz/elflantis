"use client";

import { motion } from "framer-motion";
import { CircleHelp } from "lucide-react";

import { QUESTION_SECTION_CONTENT } from "@/lib/constants";

const FADE_UP = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
} as const;

export function QuestionSection() {
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
          <CircleHelp className="h-5 w-5 text-sage-600" strokeWidth={1.75} aria-hidden="true" />
        </div>

        <h2 className="mt-5 font-display text-3xl tracking-tight text-ink-900 sm:text-4xl">
          {QUESTION_SECTION_CONTENT.title}
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-ink-800">{QUESTION_SECTION_CONTENT.lead}</p>

        <div className="mt-6 space-y-4">
          {QUESTION_SECTION_CONTENT.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-[17px] leading-relaxed text-ink-700">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start gap-3">
          <span aria-hidden="true" className="h-px w-12 bg-lavender-300" />
          <p className="font-display text-2xl italic tracking-tight text-ink-900 sm:text-3xl">
            {QUESTION_SECTION_CONTENT.closing}
          </p>
        </div>
      </motion.div>
    </section>
  );
}
