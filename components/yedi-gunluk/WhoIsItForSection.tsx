"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

import { YEDI_GUNLUK_AUDIENCE_ITEMS, YEDI_GUNLUK_WHO_IS_IT_FOR_CONTENT } from "@/lib/constants";

const FADE_UP = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
} as const;

export function WhoIsItForSection() {
  return (
    <section className="bg-lavender-50/60 px-6 py-20 lg:px-8 lg:py-28">
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
            {YEDI_GUNLUK_WHO_IS_IT_FOR_CONTENT.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-700">
            {YEDI_GUNLUK_WHO_IS_IT_FOR_CONTENT.description}
          </p>
        </motion.div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {YEDI_GUNLUK_AUDIENCE_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={FADE_UP}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.06 }}
              className="flex items-start gap-3 rounded-2xl bg-white p-6"
            >
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-lavender-100">
                <Check className="h-3.5 w-3.5 text-lavender-600" strokeWidth={2.5} aria-hidden="true" />
              </span>
              <p className="text-[15px] leading-relaxed text-ink-800">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
