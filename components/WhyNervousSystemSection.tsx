"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";

import { HOME_WHY_NERVOUS_SYSTEM_CONTENT, HOME_WHY_NERVOUS_SYSTEM_ITEMS } from "@/lib/constants";

const FADE_UP = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
} as const;

export function WhyNervousSystemSection() {
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
          {HOME_WHY_NERVOUS_SYSTEM_CONTENT.title}
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-ink-700">
          {HOME_WHY_NERVOUS_SYSTEM_CONTENT.lead}
        </p>

        <p className="mt-8 text-[15px] font-medium text-ink-700">
          {HOME_WHY_NERVOUS_SYSTEM_CONTENT.conditionalLeadIn}
        </p>

        <ul className="mt-4 space-y-3">
          {HOME_WHY_NERVOUS_SYSTEM_ITEMS.map((item) => (
            <li key={item.id} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ink-900/[0.06]">
                <X className="h-3.5 w-3.5 text-ink-600" strokeWidth={2.5} aria-hidden="true" />
              </span>
              <p className="text-[17px] leading-relaxed text-ink-800">{item.text}</p>
            </li>
          ))}
        </ul>

        <div className="mt-8 space-y-2">
          {HOME_WHY_NERVOUS_SYSTEM_CONTENT.closingParagraphs.map((paragraph, index) => (
            <p key={index} className="text-[17px] leading-relaxed text-ink-700">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border-l-4 border-lavender-400 bg-lavender-50/70 py-5 pl-6 pr-5">
          <p className="font-display text-xl text-ink-900 sm:text-2xl">
            {HOME_WHY_NERVOUS_SYSTEM_CONTENT.closingEmphasis}
          </p>
        </div>
      </motion.div>
    </section>
  );
}
