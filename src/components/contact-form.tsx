"use client";

import { useFormState, useFormStatus } from "react-dom";
import { submitContact, type ContactFormState } from "@/app/actions";
import { site } from "@/lib/site";

const initialState: ContactFormState = { status: "idle" };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full rounded-full bg-brand-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-600 disabled:cursor-not-allowed disabled:bg-slate-300"
    >
      {pending ? "送信中..." : "送信する"}
    </button>
  );
}

export function ContactForm() {
  const [state, formAction] = useFormState(submitContact, initialState);

  return (
    <form action={formAction} className="mt-8 grid gap-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          お名前
          <input
            type="text"
            name="name"
            required
            className="rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-brand-400 focus:outline-none"
          />
          {state.errors?.name ? (
            <span className="text-xs text-rose-500">{state.errors.name}</span>
          ) : null}
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          メールアドレス
          <input
            type="email"
            name="email"
            required
            className="rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-brand-400 focus:outline-none"
          />
          {state.errors?.email ? (
            <span className="text-xs text-rose-500">{state.errors.email}</span>
          ) : null}
        </label>
      </div>
      <label className="grid gap-2 text-sm font-medium text-slate-700">
        お問い合わせ用途
        <select
          name="usage"
          required
          className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm focus:border-brand-400 focus:outline-none"
        >
          <option value="">選択してください</option>
          {site.contact.usages.map((usage) => (
            <option key={usage} value={usage}>
              {usage}
            </option>
          ))}
        </select>
        {state.errors?.usage ? (
          <span className="text-xs text-rose-500">{state.errors.usage}</span>
        ) : null}
      </label>
      <label className="grid gap-2 text-sm font-medium text-slate-700">
        ご相談内容
        <textarea
          name="message"
          rows={5}
          required
          className="rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-brand-400 focus:outline-none"
        />
        {state.errors?.message ? (
          <span className="text-xs text-rose-500">{state.errors.message}</span>
        ) : null}
      </label>
      {state.message ? (
        <p
          className={`rounded-xl px-4 py-3 text-sm ${
            state.status === "success"
              ? "bg-emerald-50 text-emerald-700"
              : "bg-rose-50 text-rose-600"
          }`}
        >
          {state.message}
        </p>
      ) : null}
      <SubmitButton />
    </form>
  );
}
