"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/siteConfig";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function onSubmit(formData: FormData) {
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          level: formData.get("level"),
          message: formData.get("message"),
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch (e) {
      setStatus("error");
    }
  }

  return (
    <div className="py-10">
      <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
      <p className="mt-2 text-gray-700">Book a free 20-minute consultation or ask a question.</p>
      <div className="mt-6 grid gap-8 sm:grid-cols-2">
        <form
          action={onSubmit}
          className="rounded-lg border p-6"
        >
          <div className="grid gap-4">
            <label className="grid gap-1 text-sm">
              <span>Name</span>
              <input name="name" required className="rounded border px-3 py-2" placeholder="Your name" />
            </label>
            <label className="grid gap-1 text-sm">
              <span>Email</span>
              <input name="email" type="email" required className="rounded border px-3 py-2" placeholder="you@email.com" />
            </label>
            <label className="grid gap-1 text-sm">
              <span>Level</span>
              <select name="level" className="rounded border px-3 py-2">
                <option>Beginner</option>
                <option>Elementary</option>
                <option>Intermediate</option>
                <option>Upper-Intermediate</option>
                <option>Advanced</option>
              </select>
            </label>
            <label className="grid gap-1 text-sm">
              <span>Message</span>
              <textarea name="message" rows={5} className="rounded border px-3 py-2" placeholder="Tell me about your goals" />
            </label>
            <button
              type="submit"
              disabled={status === "submitting"}
              className="mt-2 rounded-md bg-black px-5 py-3 text-white hover:bg-gray-800 disabled:opacity-60"
            >
              {status === "submitting" ? "Sending..." : "Send"}
            </button>
            {status === "success" && (
              <p className="text-sm text-green-600">Thanks! I will reach out shortly.</p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-600">Something went wrong. Please try again.</p>
            )}
          </div>
        </form>
        <div>
          <div className="rounded-lg border p-6">
            <h2 className="font-medium">Contact details</h2>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              <li>Email: {siteConfig.email}</li>
              <li>Location: {siteConfig.location}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}