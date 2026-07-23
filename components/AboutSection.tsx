"use client";

import { motion } from "framer-motion";

import { ProfilePhoto } from "@/components/profile-photo";
import { HOME_ABOUT_CONTENT } from "@/lib/constants";

export function AboutSection() {
  return (
    <section className="px-6 py-20 lg:px-8 lg:py-28">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center"
      >
        <ProfilePhoto alt={HOME_ABOUT_CONTENT.photoAlt} size="large" />

        <h2 className="font-display text-3xl tracking-tight text-ink-900 sm:text-4xl">
          {HOME_ABOUT_CONTENT.title}
        </h2>

        <p className="text-lg font-medium text-ink-900">{HOME_ABOUT_CONTENT.greeting}</p>

        <div className="space-y-4 text-left">
          {HOME_ABOUT_CONTENT.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-[17px] leading-relaxed text-ink-700">
              {paragraph}
            </p>
          ))}
        </div>

        <p className="font-display text-xl text-ink-900 sm:text-2xl">{HOME_ABOUT_CONTENT.emphasis}</p>

        <div className="space-y-4 text-left">
          {HOME_ABOUT_CONTENT.closingParagraphs.map((paragraph, index) => (
            <p key={index} className="text-[17px] leading-relaxed text-ink-700">
              {paragraph}
            </p>
          ))}
        </div>

        <p className="text-lg font-medium text-ink-900">{HOME_ABOUT_CONTENT.final}</p>
      </motion.div>
    </section>
  );
}
