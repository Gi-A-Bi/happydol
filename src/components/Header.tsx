import Link from "next/link";
import { SITE_NAME } from "@/lib/site";

const NAV_ITEMS = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
];

export default function Header() {
  return (
    <header className="border-line border-b">
      <div className="mx-auto flex w-full max-w-3xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="font-semibold">
          {SITE_NAME}
        </Link>
        <nav className="text-ink-soft flex gap-5 text-sm">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-cocoa transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
