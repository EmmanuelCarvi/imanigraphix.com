import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: `Pricing • ${siteConfig.teacherName}`,
};

const tiers = [
  {
    name: "Starter",
    price: "$35",
    unit: "per 60 min",
    features: ["1:1 lesson", "Homework plan", "Lesson notes"],
  },
  {
    name: "Pack of 5",
    price: "$165",
    unit: "save 5%",
    features: ["5 x 60 min lessons", "Flexible scheduling", "Priority booking"],
  },
  {
    name: "Group (2-3)",
    price: "$25",
    unit: "per person / 60 min",
    features: ["Small group", "Shared materials", "Speaking-focused"],
  },
];

export default function PricingPage() {
  return (
    <div className="py-10">
      <h1 className="text-3xl font-semibold tracking-tight">Pricing</h1>
      <p className="mt-3 text-gray-700">All lessons are online via Zoom or Google Meet.</p>
      <div className="mt-8 grid gap-6 sm:grid-cols-3">
        {tiers.map((tier) => (
          <div key={tier.name} className="rounded-xl border p-6">
            <h2 className="text-lg font-semibold">{tier.name}</h2>
            <p className="mt-2 text-3xl font-semibold">{tier.price}</p>
            <p className="text-sm text-gray-500">{tier.unit}</p>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              {tier.features.map((f) => (
                <li key={f}>• {f}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="mt-8 text-sm text-gray-600">
        Need a custom plan for your team or exam prep? Contact me for a quote.
      </p>
    </div>
  );
}