"use client";

import { motion } from "framer-motion";

import { EmailSignupForm } from "@/components/email-signup-form";
import { ProfilePhoto } from "@/components/profile-photo";
import { HERO_CONTENT, NAV_CONFIG } from "@/lib/constants";
import Image from "next/image";

const FADE_UP = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
} as const;

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-10 sm:pt-14 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex felx-col items-center justify-start gap-2">
          <Image
            src={NAV_CONFIG.logo}
            alt={NAV_CONFIG.brandName}
            width={24}
            height={24}
            className="h-auto w-auto"
          />
          <span className="text-[15px] font-semibold tracking-tight text-ink-900">
            {NAV_CONFIG.brandName}
          </span>
        </div>

        <div className="mt-16 grid items-center gap-16 lg:mt-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={FADE_UP}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="inline-flex items-center rounded-full bg-lavender-100 px-4 py-1.5 text-sm font-medium text-lavender-700">
              {HERO_CONTENT.eyebrow}
            </span>

            <h1 className="mt-6 font-display text-4xl leading-[1.1] tracking-tight text-ink-900 sm:text-5xl lg:text-[3.25rem]">
              {HERO_CONTENT.title}
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-700">
              {HERO_CONTENT.description}
            </p>

            <div className="mt-9 max-w-md">
              <EmailSignupForm formId="hero" />
              <p className="mt-3 text-sm text-ink-500">{HERO_CONTENT.formHint}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            className="flex justify-center lg:justify-end"
          >
            <ProfilePhoto alt={HERO_CONTENT.photoAlt} src={HERO_CONTENT.photoSrc} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
