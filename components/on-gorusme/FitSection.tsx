"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

import { FIT_NO_ITEMS, FIT_SECTION_CONTENT, FIT_YES_ITEMS } from "@/lib/constants";
import type { AudienceItem } from "@/lib/types";

const FADE_UP = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
} as const;

function FitList({
  items,
  icon: Icon,
  iconBg,
  iconColor,
}: {
  items: AudienceItem[];
  icon: typeof Check;
  iconBg: string;
  iconColor: string;
}) {
  return (
    <ul className="mt-5 space-y-4">
      {items.map((item) => (
        <li key={item.id} className="flex items-start gap-3">
          <span
            className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${iconBg}`}
          >
            <Icon className={`h-3.5 w-3.5 ${iconColor}`} strokeWidth={2.5} aria-hidden="true" />
          </span>
          <p className="text-[15px] leading-relaxed text-ink-800">{item.text}</p>
        </li>
      ))}
    </ul>
  );
}

export function FitSection() {
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
          {FIT_SECTION_CONTENT.title}
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-ink-700">{FIT_SECTION_CONTENT.description}</p>
      </motion.div>

      <div className="mx-auto mt-12 grid max-w-4xl gap-5 sm:grid-cols-2">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={FADE_UP}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="rounded-2xl border border-sage-300/50 bg-sage-50/50 p-7"
        >
          <h3 className="text-[17px] font-semibold text-ink-900">{FIT_SECTION_CONTENT.yesTitle}</h3>
          <FitList items={FIT_YES_ITEMS} icon={Check} iconBg="bg-sage-100" iconColor="text-sage-600" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={FADE_UP}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.08 }}
          className="rounded-2xl border border-ink-900/6 bg-white p-7"
        >
          <h3 className="text-[17px] font-semibold text-ink-900">{FIT_SECTION_CONTENT.noTitle}</h3>
          <FitList items={FIT_NO_ITEMS} icon={X} iconBg="bg-ink-900/[0.06]" iconColor="text-ink-600" />
        </motion.div>
      </div>
    </section>
  );
}
