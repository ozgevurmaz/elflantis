"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { HOME_HERO_CONTENT } from "@/lib/constants";

const FADE_UP = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
} as const;

export function HeroSection() {
  return (
    <section className="pt-6 pb-16 sm:pt-10 lg:pb-20">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={FADE_UP}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-2xl text-center"
      >
        <h1 className="font-display text-4xl leading-[1.15] tracking-tight text-ink-900 sm:text-5xl">
          {HOME_HERO_CONTENT.title}
        </h1>

        <div className="mt-7 space-y-4">
          {HOME_HERO_CONTENT.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-lg leading-relaxed text-ink-700">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-9">
          <Link href={HOME_HERO_CONTENT.href} className={buttonVariants({ variant: "primary" })}>
            {HOME_HERO_CONTENT.cta}
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
