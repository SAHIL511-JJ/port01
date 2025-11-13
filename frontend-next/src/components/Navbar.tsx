import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b border-zinc-900 px-6 h-14 flex items-center gap-6 text-sm bg-black/50 backdrop-blur">
      <Link href="/">Home</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/experience">Experience</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}
