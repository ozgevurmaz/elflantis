"use client";

import { buttonVariants } from "@/components/ui/button";
import { WORKSHOP_TALLY_FORM_ID, WORKSHOP_TALLY_FORM_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

declare global {
  interface Window {
    Tally?: {
      openPopup: (formId: string, options?: Record<string, unknown>) => void;
    };
  }
}

interface TallyCTAButtonProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Tally'nin embed.js scripti sayfada yüklüyse popup açar (bkz. Tally.openPopup).
 * Script bloklanmışsa ya da henüz yüklenmediyse tıklama normal <a> davranışına
 * düşer ve form yeni sekmede WORKSHOP_TALLY_FORM_URL üzerinden açılır.
 */
export function TallyCTAButton({ children, className }: TallyCTAButtonProps) {
  function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    if (typeof window === "undefined" || !window.Tally) return;

    event.preventDefault();
    window.Tally.openPopup(WORKSHOP_TALLY_FORM_ID, {
      layout: "modal",
      emoji: { text: "🌿", animation: "wave" },
    });
  }

  return (
    <a
      href={WORKSHOP_TALLY_FORM_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={cn(buttonVariants({ variant: "primary" }), className)}
    >
      {children}
    </a>
  );
}
