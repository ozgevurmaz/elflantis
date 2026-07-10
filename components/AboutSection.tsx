"use client";

import { motion } from "framer-motion";

import { ProfilePhoto } from "@/components/profile-photo";
import { ABOUT_CONTENT } from "@/lib/constants";

export function AboutSection() {
  return (
    <section className="px-6 py-20 lg:px-8 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center"
      >
        <ProfilePhoto alt={ABOUT_CONTENT.photoAlt} size="large" />
        <h2 className="font-display text-2xl tracking-tight text-ink-900 sm:text-3xl">
          {ABOUT_CONTENT.title}
        </h2>
        <p className="max-w-xl text-[17px] leading-relaxed text-ink-700">
          {ABOUT_CONTENT.description}
        </p>
      </motion.div>
    </section>
  );
}
