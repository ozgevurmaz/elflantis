"use client";

import { motion } from "framer-motion";

import { EmailSignupForm } from "@/components/email-signup-form";
import { ProfilePhoto } from "@/components/profile-photo";
import { YEDI_GUNLUK_HERO_CONTENT, NAV_CONFIG } from "@/lib/constants";
import Image from "next/image";

const FADE_UP = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
} as const;

export function HeroSection() {
  return (
    <section >

        <div className="mt-16 grid items-center gap-16 lg:mt-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={FADE_UP}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="inline-flex items-center rounded-full bg-lavender-100 px-4 py-1.5 text-sm font-medium text-lavender-700">
              {YEDI_GUNLUK_HERO_CONTENT.eyebrow}
            </span>

            <h1 className="mt-6 font-display text-4xl leading-[1.1] tracking-tight text-ink-900 sm:text-5xl lg:text-[3.25rem]">
              {YEDI_GUNLUK_HERO_CONTENT.title}
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-700">
              {YEDI_GUNLUK_HERO_CONTENT.description}
            </p>

            <div className="mt-9 max-w-md">
              <EmailSignupForm formId="hero" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            className="flex justify-center lg:justify-end"
          >
            <ProfilePhoto alt={YEDI_GUNLUK_HERO_CONTENT.photoAlt} />
          </motion.div>
        </div>

    </section>
  );
}
