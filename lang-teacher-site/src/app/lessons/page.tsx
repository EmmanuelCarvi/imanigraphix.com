import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: `Lessons • ${siteConfig.teacherName}`,
};

export default function LessonsPage() {
  return (
    <div className="py-10">
      <h1 className="text-3xl font-semibold tracking-tight">Lessons</h1>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <div className="rounded-lg border p-6">
          <h2 className="text-lg font-medium">1:1 Tutoring</h2>
          <p className="mt-2 text-gray-700 text-sm">Personalized lessons for fast progress. Focus on speaking, listening, reading, writing, or a mix.</p>
        </div>
        <div className="rounded-lg border p-6">
          <h2 className="text-lg font-medium">Small Group</h2>
          <p className="mt-2 text-gray-700 text-sm">Learn with a friend or colleague at a reduced rate. Interactive and motivating.</p>
        </div>
        <div className="rounded-lg border p-6">
          <h2 className="text-lg font-medium">Exam Preparation</h2>
          <p className="mt-2 text-gray-700 text-sm">Targeted strategies and practice for DELE/DELF/IELTS/TOEFL or local proficiency tests.</p>
        </div>
        <div className="rounded-lg border p-6">
          <h2 className="text-lg font-medium">Business {siteConfig.language}</h2>
          <p className="mt-2 text-gray-700 text-sm">Meetings, presentations, emails, and industry-specific vocabulary for professionals.</p>
        </div>
      </div>
    </div>
  );
}