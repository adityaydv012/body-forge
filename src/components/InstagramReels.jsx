
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const instagramUrl = "https://www.instagram.com/bodyforgelucknow/";

function InstagramIcon({ size = 20 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle
        cx="18"
        cy="6"
        r="1"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

const footerLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Explore Gym", path: "/explore-gym" },
  { name: "Membership", path: "/membership" },
  { name: "Our Team", path: "/team" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact Us", path: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#172522] px-6 pb-8 pt-20 text-white lg:px-12">
      <div className="mx-auto max-w-[1440px]">

        {/* MAIN FOOTER */}
        <div className="grid gap-14 border-b border-white/10 pb-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">

          {/* BRAND */}
          <div>
            <Link to="/" className="inline-flex items-center gap-3">
              <img
                src="/body-logo.jpg"
                alt="BODY FORGE Logo"
                className="h-14 w-14 rounded-full object-cover"
              />

              <div>
                <h2 className="text-xl font-black tracking-[0.12em]">
                  BODY FORGE
                </h2>

                <p className="mt-1 text-[9px] tracking-[0.35em] text-[#82B5A9]">
                  BUILD YOUR LEGACY
                </p>
              </div>
            </Link>

            <p className="mt-7 max-w-xs text-sm leading-7 text-white/50">
              More than a gym. A community built on strength,
              discipline and consistency. Start building a stronger
              version of yourself with BODY FORGE.
            </p>

            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow BODY FORGE on Instagram"
              className="mt-7 inline-flex h-11 w-11 items-center justify-center border border-white/20 text-[#82B5A9] transition hover:border-[#82B5A9] hover:bg-[#4D867F] hover:text-white"
            >
              <InstagramIcon size={20} />
            </a>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="mb-7 text-xs font-bold uppercase tracking-[0.25em] text-[#82B5A9]">
              Explore
            </h3>

            <ul className="space-y-4">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/55 transition hover:pl-1 hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="mb-7 text-xs font-bold uppercase tracking-[0.25em] text-[#82B5A9]">
              Get In Touch
            </h3>

            <div className="space-y-5 text-sm text-white/55">
              <div>
                <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-white/35">
                  Phone
                </p>
                <p>Add your phone number</p>
              </div>

              <div>
                <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-white/35">
                  Email
                </p>
                <p>Add your email address</p>
              </div>

              <div>
                <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-white/35">
                  Location
                </p>
                <p>Add your gym address</p>
              </div>
            </div>
          </div>

          {/* INSTAGRAM CTA */}
          <div>
            <h3 className="mb-7 text-xs font-bold uppercase tracking-[0.25em] text-[#82B5A9]">
              Join The Movement
            </h3>

            <p className="text-sm leading-7 text-white/50">
              Follow our fitness journey, discover our community
              and stay connected with BODY FORGE.
            </p>

            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-3 border border-[#82B5A9]/50 px-5 py-4 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-[#4D867F] hover:border-[#4D867F]"
            >
              Follow on Instagram
              <ArrowUpRight size={17} />
            </a>
          </div>

        </div>

        {/* BOTTOM FOOTER */}
        <div className="flex flex-col items-center justify-between gap-5 pt-8 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} BODY FORGE. All Rights Reserved.
          </p>

          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#82B5A9]">
            FORGE YOUR BODY. BUILD YOUR LEGACY.
          </p>

          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs text-white/50 transition hover:text-[#82B5A9]"
          >
            Instagram
            <ArrowUpRight size={14} />
          </a>
        </div>

      </div>
    </footer>
  );
}
