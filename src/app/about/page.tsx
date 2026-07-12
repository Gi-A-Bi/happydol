import type { Metadata } from "next";
import {
  ABOUT_DESCRIPTION,
  ABOUT_PARAGRAPHS,
  CONTACT_EMAIL,
} from "@/lib/site";

const TITLE = "About";

export const metadata: Metadata = {
  title: TITLE,
  description: ABOUT_DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: ABOUT_DESCRIPTION,
  },
};

export default function AboutPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">About</h1>
      <div className="mt-6 max-w-2xl space-y-4 leading-relaxed">
        {ABOUT_PARAGRAPHS.map((paragraph) => (
          <p key={paragraph.slice(0, 20)}>{paragraph}</p>
        ))}
      </div>
      <section className="mt-10">
        <h2 className="text-lg font-semibold">Contact</h2>
        <ul className="text-ink-soft mt-3 space-y-1 text-sm">
          <li>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="hover:text-cocoa underline underline-offset-4 transition-colors"
            >
              {CONTACT_EMAIL}
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
