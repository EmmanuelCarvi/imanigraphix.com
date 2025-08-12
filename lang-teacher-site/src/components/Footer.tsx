import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-black/10">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-gray-600">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <p>
            © {year} {siteConfig.teacherName}. {siteConfig.language} Lessons. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href={`mailto:${siteConfig.email}`} className="hover:underline">
              {siteConfig.email}
            </Link>
            {siteConfig.socials.instagram && (
              <a href={siteConfig.socials.instagram} target="_blank" rel="noreferrer" className="hover:underline">
                Instagram
              </a>
            )}
            {siteConfig.socials.linkedin && (
              <a href={siteConfig.socials.linkedin} target="_blank" rel="noreferrer" className="hover:underline">
                LinkedIn
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}