
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Explore Gym", path: "/explore-gym" },
  { name: "Membership", path: "/membership" },
  { name: "Our Team", path: "/team" },
  { name: "Gallery", path: "/gallery" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#172522]/10 bg-[#F4F5F1]/95 backdrop-blur-md">
      <nav className="relative mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 lg:px-12">

        {/* LOGO */}
        <Link
          to="/"
          onClick={closeMenu}
          className="flex items-center gap-3"
        >
          <img
            src="/body-logo.jpg"
            alt="Body Forge"
            className="h-12 w-12 rounded-full object-contain"
          />

          <div>
            <h1 className="text-xl font-black tracking-[0.12em] text-[#172522]">
              BODY FORGE
            </h1>
            <p className="text-[9px] tracking-[0.3em] text-[#4D867F]">
              BUILD YOUR LEGACY
            </p>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden items-center gap-8 xl:flex">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `relative text-[12px] font-semibold uppercase tracking-wider transition-colors duration-300
                after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:bg-[#4D867F]
                after:transition-all after:duration-300
                ${
                  isActive
                    ? "text-[#4D867F] after:w-full"
                    : "text-[#172522] after:w-0 hover:text-[#4D867F] hover:after:w-full"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* DESKTOP JOIN BUTTON */}
        <Link
          to="/join-now"
          className="hidden items-center gap-2 bg-[#4D867F] px-5 py-3 text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#172522] md:flex"
        >
          Join Now
          <ArrowUpRight size={16} />
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="p-2 text-[#172522] transition-transform duration-300 active:scale-90 xl:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          <span className="block transition-transform duration-300">
            {open ? <X size={27} /> : <Menu size={27} />}
          </span>
        </button>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <div
        id="mobile-navigation"
        aria-hidden={!open}
        className={`absolute left-0 top-full w-full overflow-hidden border-t border-[#172522]/10 bg-[#F4F5F1] shadow-xl transition-all duration-500 ease-in-out xl:hidden ${
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex max-h-[calc(100vh-80px)] flex-col gap-6 overflow-y-auto px-6 py-8">

          {/* MOBILE LINKS */}
          {links.map((link, index) => (
            <div
              key={link.path}
              className={`transition-all duration-500 ease-out ${
                open
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
              style={{
                transitionDelay: open ? `${index * 75}ms` : "0ms",
              }}
            >
              <NavLink
                to={link.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `group flex items-center justify-between text-sm font-bold uppercase tracking-[0.15em] transition-colors duration-300 ${
                    isActive
                      ? "text-[#4D867F]"
                      : "text-[#172522] hover:text-[#4D867F]"
                  }`
                }
              >
                {link.name}

                <ArrowUpRight
                  size={17}
                  className="translate-x-0 translate-y-0 text-[#4D867F] opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                />
              </NavLink>
            </div>
          ))}

          {/* MOBILE JOIN BUTTON */}
          <div
            className={`transition-all duration-500 ${
              open
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
            style={{
              transitionDelay: open ? "450ms" : "0ms",
            }}
          >
            <Link
              to="/join-now"
              onClick={closeMenu}
              className="flex items-center justify-center gap-3 bg-[#4D867F] py-4 text-sm font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-[#172522] active:scale-[0.98]"
            >
              Join Now
              <ArrowUpRight size={18} />
            </Link>
          </div>

          <p className="pt-2 text-center text-[10px] uppercase tracking-[0.25em] text-[#172522]/45">
            Forge Your Body. Build Your Legacy.
          </p>
        </div>
      </div>
    </header>
  );
}
