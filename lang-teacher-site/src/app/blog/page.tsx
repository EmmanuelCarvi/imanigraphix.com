import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: `Blog • ${siteConfig.teacherName}`,
};

export default function BlogPage() {
  return (
    <div className="py-10">
      <h1 className="text-3xl font-semibold tracking-tight">Blog</h1>
      <p className="mt-4 max-w-2xl text-gray-700">
        Articles and tips about learning {siteConfig.language} are coming soon. Check back later!
      </p>
    </div>
  );
}