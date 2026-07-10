"use client";

import { motion } from "framer-motion";

import { EmailSignupForm } from "@/components/email-signup-form";
import { CTA_CONTENT } from "@/lib/constants";

export function CTASection() {
  return (
    <section className="px-6 py-20 lg:px-8 lg:py-28">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mx-auto flex max-w-xl flex-col items-center rounded-3xl bg-ink-900 px-8 py-14 text-center sm:px-16"
      >
        <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
          {CTA_CONTENT.title}
        </h2>
        <p className="mt-3 text-lg text-white/70">{CTA_CONTENT.description}</p>

        <div className="mt-8 w-full max-w-sm">
          <EmailSignupForm formId="cta" />
          <p className="mt-3 text-sm text-white/50">{CTA_CONTENT.formHint}</p>
        </div>
      </motion.div>
    </section>
  );
}
