"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { GUIDE_WORKSHOP_CTA_CONTENT } from "@/lib/constants";

export function WorkshopCTASection() {
  return (
    <section className="px-6 py-20 lg:px-8 lg:py-28">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mx-auto flex max-w-xl flex-col items-center rounded-3xl bg-ink-900 px-8 py-14 text-center sm:px-16"
      >
        <p className="text-lg font-medium text-white">{GUIDE_WORKSHOP_CTA_CONTENT.leadIn}</p>
        <p className="mt-4 text-white/70">{GUIDE_WORKSHOP_CTA_CONTENT.description}</p>

        <div className="mt-8">
          <Link href={GUIDE_WORKSHOP_CTA_CONTENT.href} className={buttonVariants({ variant: "primary" })}>
            {GUIDE_WORKSHOP_CTA_CONTENT.cta}
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
