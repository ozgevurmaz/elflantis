"use client";

import * as React from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GUIDE_FORM_CONTENT } from "@/lib/constants";
import type { EmailSignupStatus, GuideSignupResponse } from "@/lib/types";
import { cn, isValidEmail } from "@/lib/utils";

interface GuideFormProps {
  className?: string;
}

export function GuideForm({ className }: GuideFormProps) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [consent, setConsent] = React.useState(false);
  const [status, setStatus] = React.useState<EmailSignupStatus>("idle");
  const [errorMessage, setErrorMessage] = React.useState<string>(GUIDE_FORM_CONTENT.invalidEmailError);
  const prefersReducedMotion = useReducedMotion();

  const errorId = "guide-form-error";

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!isValidEmail(email)) {
      setErrorMessage(GUIDE_FORM_CONTENT.invalidEmailError);
      setStatus("error");
      return;
    }

    if (!consent) {
      setErrorMessage(GUIDE_FORM_CONTENT.consentRequiredError);
      setStatus("error");
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("/api/guide", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim() || undefined, email, consent }),
      });
      const data = (await response.json()) as GuideSignupResponse;

      if (!response.ok || !data.success) {
        throw new Error(data.error ?? "server_error");
      }

      setStatus("success");
    } catch {
      setErrorMessage(GUIDE_FORM_CONTENT.serverErrorMessage);
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
        className={cn(
          "rounded-3xl border border-sage-500/30 bg-sage-50 px-6 py-6 text-center sm:px-8",
          className,
        )}
      >
        <p className="text-lg font-semibold text-ink-900">{GUIDE_FORM_CONTENT.successTitle}</p>
        <p className="mt-2 text-[15px] text-ink-800">{GUIDE_FORM_CONTENT.successMessage}</p>

        <div className="mt-4 text-sm text-ink-600">
          <p className="font-medium text-ink-700">{GUIDE_FORM_CONTENT.successNoteTitle}</p>
          <ul className="mt-1 space-y-0.5">
            {GUIDE_FORM_CONTENT.successNoteItems.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
          <p className="mt-1">{GUIDE_FORM_CONTENT.successNoteClosing}</p>
        </div>
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
      <div className="flex flex-col gap-3">
        <div>
          <label htmlFor="guide-name" className="sr-only">
            {GUIDE_FORM_CONTENT.nameLabel}
          </label>
          <Input
            id="guide-name"
            name="name"
            autoComplete="name"
            placeholder={GUIDE_FORM_CONTENT.namePlaceholder}
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <div>
          <label htmlFor="guide-email" className="sr-only">
            {GUIDE_FORM_CONTENT.emailLabel}
          </label>
          <Input
            id="guide-email"
            name="email"
            inputMode="email"
            autoComplete="email"
            placeholder={GUIDE_FORM_CONTENT.emailPlaceholder}
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              if (status === "error") setStatus("idle");
            }}
            aria-invalid={status === "error"}
          />
        </div>

        <label className="flex items-start gap-3 text-sm leading-relaxed text-ink-700">
          <input
            type="checkbox"
            checked={consent}
            onChange={(event) => {
              setConsent(event.target.checked);
              if (status === "error") setStatus("idle");
            }}
            className="mt-0.5 h-4 w-4 shrink-0 rounded border-ink-900/20 text-lavender-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender-500"
          />
          {GUIDE_FORM_CONTENT.consentLabel}
        </label>

        <Button type="submit" disabled={status === "submitting"} className="mt-1">
          {status === "submitting" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              {GUIDE_FORM_CONTENT.submittingLabel}
            </>
          ) : (
            GUIDE_FORM_CONTENT.submitLabel
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
