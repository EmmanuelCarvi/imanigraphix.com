import { siteConfig } from "@/lib/siteConfig";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `About • ${siteConfig.teacherName}`,
};

export default function AboutPage() {
  return (
    <div className="py-10">
      <h1 className="text-3xl font-semibold tracking-tight">About {siteConfig.teacherName}</h1>
      <p className="mt-4 max-w-3xl text-gray-700">
        I am a certified {siteConfig.language} teacher with years of experience helping learners gain confidence and fluency. My approach is communicative, practical, and tailored to your goals—whether travel, work, exams, or everyday life.
      </p>
      <p className="mt-4 max-w-3xl text-gray-700">
        Lessons include speaking practice, vocabulary building, grammar in context, and authentic materials. You will receive clear feedback and a study plan after each session.
      </p>
      <p className="mt-4 text-gray-600">Based: {siteConfig.location}</p>
    </div>
  );
}