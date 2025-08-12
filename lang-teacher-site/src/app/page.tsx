import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export default function Home() {
  return (
    <div className="py-14 sm:py-20">
      <section className="text-center">
        <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight">
          {siteConfig.language} lessons tailored to you
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          {siteConfig.tagline}. Flexible scheduling, clear goals, and engaging lessons for busy learners.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Link href="/contact" className="rounded-md bg-black px-5 py-3 text-white hover:bg-gray-800">
            Book a free consultation
          </Link>
          <Link href="/pricing" className="rounded-md border px-5 py-3 hover:bg-gray-50">
            View pricing
          </Link>
        </div>
      </section>

      <section className="mt-16 grid gap-6 sm:grid-cols-3">
        <div className="rounded-lg border p-6">
          <h3 className="font-medium">1:1 or small group</h3>
          <p className="mt-2 text-sm text-gray-600">Choose private sessions or bring a friend to learn together.</p>
        </div>
        <div className="rounded-lg border p-6">
          <h3 className="font-medium">Practical focus</h3>
          <p className="mt-2 text-sm text-gray-600">Speak confidently with real-life scenarios, role plays, and feedback.</p>
        </div>
        <div className="rounded-lg border p-6">
          <h3 className="font-medium">All levels</h3>
          <p className="mt-2 text-sm text-gray-600">From absolute beginners to exam prep and professional communication.</p>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-xl font-semibold tracking-tight">What students say</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <blockquote className="rounded-lg border p-6 text-sm text-gray-700">
            “The lessons are fun and effective. I started speaking within weeks!”
            <footer className="mt-3 text-gray-500">— Alex M.</footer>
          </blockquote>
          <blockquote className="rounded-lg border p-6 text-sm text-gray-700">
            “Clear structure, great materials, and supportive feedback every session.”
            <footer className="mt-3 text-gray-500">— Priya S.</footer>
          </blockquote>
        </div>
      </section>

      <section className="mt-16 text-center">
        <div className="inline-flex flex-col items-center rounded-xl border p-8">
          <p className="text-sm text-gray-600">Ready to start?</p>
          <h3 className="mt-1 text-2xl font-semibold">Try a 20-minute call—free</h3>
          <Link href="/contact" className="mt-5 rounded-md bg-black px-5 py-3 text-white hover:bg-gray-800">
            Schedule now
          </Link>
        </div>
      </section>
    </div>
  );
}
