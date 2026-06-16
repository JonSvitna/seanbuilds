import { Link, useLocation } from "react-router";

const navLinks = [
  { label: "Work", to: "/work" },
  { label: "What I Build", to: "/what-i-build" },
  { label: "GitHub Projects", to: "/github-projects" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export function Header() {
  const { pathname } = useLocation();

  return (
    <header className="w-full flex items-center justify-between px-10 py-5">
      <Link to="/" className="flex items-center gap-1 no-underline">
        <span className="text-white text-xl font-bold tracking-tight">Sean</span>
        <span className="text-blue-500 text-xl font-bold tracking-tight">Builds</span>
        <span className="text-blue-500 text-xl font-bold ml-1">&lt;/&gt;</span>
      </Link>

      <nav className="flex items-center gap-8">
        {navLinks.map(({ label, to }) => (
          <Link
            key={to}
            to={to}
            className={`text-sm transition-colors no-underline ${pathname === to ? "text-white" : "text-white/60 hover:text-white"}`}
          >
            {label}
          </Link>
        ))}
      </nav>

      <Link to="/contact">
        <button
          className="px-5 py-2 text-sm text-white rounded-full border border-blue-500/60 bg-[#0A0F1E] transition-all hover:border-blue-400"
          style={{ boxShadow: "0 0 12px rgba(59,130,246,0.3)" }}
        >
          Let's Build Something
        </button>
      </Link>
    </header>
  );
}
