"use client";

import * as React from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { EMAIL_FORM_CONTENT } from "@/lib/constants";
import type { EmailSignupStatus, NewsletterSignupResponse } from "@/lib/types";
import { isValidEmail } from "@/lib/utils";

interface EmailSignupFormProps {
  /** Aynı sayfada birden fazla form olduğu için benzersiz id/aria bağlantısı sağlar. */
  formId: string;
  className?: string;
}

export function EmailSignupForm({ formId, className }: EmailSignupFormProps) {
  const [email, setEmail] = React.useState("");
  const [status, setStatus] = React.useState<EmailSignupStatus>("idle");
  const [errorMessage, setErrorMessage] = React.useState<string>(EMAIL_FORM_CONTENT.errorMessage);
  const prefersReducedMotion = useReducedMotion();

  const inputId = `${formId}-email`;
  const errorId = `${formId}-error`;

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!isValidEmail(email)) {
      setErrorMessage(EMAIL_FORM_CONTENT.errorMessage);
      setStatus("error");
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: formId }),
      });
      const data = (await response.json()) as NewsletterSignupResponse;

      if (!response.ok || !data.success) {
        throw new Error(data.error ?? "server_error");
      }

      setStatus("success");
    } catch {
      setErrorMessage(EMAIL_FORM_CONTENT.serverErrorMessage);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        role="status"
        initial={prefersReducedMotion ? undefined : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={
          "flex items-center gap-3 rounded-full border border-sage-500/30 bg-sage-50 px-6 py-4 " +
          (className ?? "")
        }
      >
        <CheckCircle2 className="h-5 w-5 shrink-0 text-sage-600" aria-hidden="true" />
        <p className="text-[15px] text-ink-800">
          <span className="font-semibold">{EMAIL_FORM_CONTENT.successTitle}</span>{" "}
          {EMAIL_FORM_CONTENT.successMessage}
        </p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={className}
      aria-describedby={status === "error" ? errorId : undefined}
    >
      <div className="flex flex-col gap-3 sm:flex-row">
        <label htmlFor={inputId} className="sr-only">
          {EMAIL_FORM_CONTENT.label}
        </label>
        <Input
          id={inputId}
          name="email"
          inputMode="email"
          autoComplete="email"
          placeholder={EMAIL_FORM_CONTENT.placeholder}
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            if (status === "error") setStatus("idle");
          }}
          aria-invalid={status === "error"}
          className="flex-1"
        />
        <Button type="submit" disabled={status === "submitting"} className="sm:w-auto">
          {status === "submitting" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              {EMAIL_FORM_CONTENT.submittingLabel}
            </>
          ) : (
            EMAIL_FORM_CONTENT.submitLabel
          )}
        </Button>
      </div>

      <AnimatePresence>
        {status === "error" && (
          <motion.p
            id={errorId}
            role="alert"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="mt-2 text-sm text-red-600"
          >
            {errorMessage}
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
}
