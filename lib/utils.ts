import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Tailwind class çakışmalarını doğru şekilde çözerek class isimlerini birleştirir.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(email: string) {
  return EMAIL_PATTERN.test(email);
}
