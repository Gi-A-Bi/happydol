import Link from "next/link";
import { SITE_NAME } from "@/lib/site";

const NAV_ITEMS = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
];

export default function Header() {
  return (
    <header className="border-b border-zinc-200">
      <div className="mx-auto flex w-full max-w-3xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="font-semibold">
          {SITE_NAME}
        </Link>
        <nav className="flex gap-5 text-sm text-zinc-600">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-zinc-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
