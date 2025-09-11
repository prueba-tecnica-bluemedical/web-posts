import { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

type Props = {
  onSearch?: (value: string) => void;
  initialQuery?: string;
  className?: string;
};

const linkBase = "rounded-xl px-3 py-2 text-sm font-medium transition-colors";
const linkOn = "bg-slate-900/60 text-white";
const linkOff = "text-gray-300 hover:text-white hover:bg-white/10";

export const Navbar: React.FC<Props> = ({ onSearch, initialQuery = "", className = "" }) => {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState(initialQuery);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(q);
  };

  return (
    <nav className={`rounded-2xl border border-white/10 bg-slate-800/50 backdrop-blur ${className}`}>
      <div className="px-3 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <button
              className="sm:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:bg-white/10 hover:text-white"
              onClick={() => setOpen(v => !v)}
              aria-label="Abrir menú"
            >
              <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor">
                <path strokeWidth="2" strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>

            <div
              className="hidden sm:flex items-center gap-2 cursor-pointer"
              onClick={() => navigate("/summary")}
              aria-label="Home"
            >
              <img
                alt="logo"
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                className="h-7 w-auto"
              />
              <span className="text-white/90 font-semibold">PostsApp</span>
            </div>

            <div className="hidden sm:flex items-center gap-2">
              <NavLink to="/posts" className={({ isActive }) => `${linkBase} ${isActive ? linkOn : linkOff}`}>
                Posts
              </NavLink>
              <NavLink to="/summary" className={({ isActive }) => `${linkBase} ${isActive ? linkOn : linkOff}`}>
                Summary
              </NavLink>
            </div>
          </div>

          <form onSubmit={submit} className="hidden sm:flex flex-1 max-w-xl">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Buscar por nombre (ej. Pedro)"
              className="w-full rounded-xl bg-white/90 text-gray-900 placeholder:text-gray-500 px-4 py-2 outline-none border border-transparent focus:border-indigo-500"
            />
            <button
              type="submit"
              className="ml-2 rounded-xl bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-500"
            >
              Buscar
            </button>
          </form>
        </div>

        {open && (
          <div className="sm:hidden pb-3 space-y-3">
            <form onSubmit={submit} className="flex">
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Buscar por nombre…"
                className="flex-1 rounded-xl bg-white text-gray-900 px-4 py-2 outline-none"
              />
              <button className="ml-2 rounded-xl bg-indigo-600 px-4 py-2 text-white" type="submit">
                Buscar
              </button>
            </form>

            <div className="flex flex-col gap-1">
              <NavLink to="/posts" className={({ isActive }) => `block ${linkBase} ${isActive ? linkOn : linkOff}`}>
                Posts
              </NavLink>
              <NavLink to="/summary" className={({ isActive }) => `block ${linkBase} ${isActive ? linkOn : linkOff}`}>
                Summary
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
