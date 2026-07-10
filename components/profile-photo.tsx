"use client";

import { motion, useReducedMotion } from "framer-motion";
import { User } from "lucide-react";

import { cn } from "@/lib/utils";

interface ProfilePhotoProps {
  alt: string;
  /** Görsel eklendiğinde bu prop'a gerçek <img> src'i verin; boşsa placeholder gösterilir. */
  src?: string;
  size?: "default" | "large";
  className?: string;
}

/**
 * Gerçek fotoğraf gelene kadar kullanılan placeholder.
 * Arkasındaki iki halka, sayfanın tek imza animasyonu olan "nefes" hareketini taşır:
 * yavaşça genişleyip daralarak nefes alıp vermeyi çağrıştırır.
 * `src` verildiğinde placeholder ikonu yerine gerçek <img> render edilir.
 */
export function ProfilePhoto({ alt, src, size = "default", className }: ProfilePhotoProps) {
  const prefersReducedMotion = useReducedMotion();

  const dimensions = size === "large" ? "h-40 w-40" : "h-72 w-72 sm:h-80 sm:w-80";

  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      {!prefersReducedMotion && (
        <>
          <motion.span
            aria-hidden="true"
            className="absolute rounded-full bg-lavender-300/25"
            style={{ inset: "-14%" }}
            animate={{ scale: [1, 1.06, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.span
            aria-hidden="true"
            className="absolute rounded-full bg-sage-300/20"
            style={{ inset: "-28%" }}
            animate={{ scale: [1, 1.08, 1], opacity: [0.35, 0.6, 0.35] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
          />
        </>
      )}

      <div
        className={cn(
          "relative overflow-hidden rounded-full border border-white bg-lavender-100 shadow-sm",
          dimensions,
        )}
      >
        {src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={src} alt={alt} className="h-full w-full object-cover" />
        ) : (
          <div
            role="img"
            aria-label={alt}
            className="flex h-full w-full items-center justify-center bg-gradient-to-b from-lavender-100 to-lavender-200"
          >
            <User
              className="h-1/3 w-1/3 text-lavender-500"
              strokeWidth={1.5}
              aria-hidden="true"
            />
          </div>
        )}
      </div>
    </div>
  );
}
