
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const instagramUrl = "https://www.instagram.com/bodyforgelucknow/";

const footerLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Explore Gym", path: "/explore-gym" },
  { name: "Membership", path: "/membership" },
  { name: "Our Team", path: "/team" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact Us", path: "/contact" },
];

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

const footerReveal = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65 },
  },
};

export default function Footer() {
  return (
    <footer className="overflow-hidden bg-[#172522] px-6 pb-8 pt-20 text-white lg:px-12">
      <div className="mx-auto max-w-[1440px]">
        <motion.div
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.13 },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-14 border-b border-white/10 pb-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10"
        >
          {/* BRAND */}
          <motion.div variants={footerReveal}>
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

            <motion.a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow BODY FORGE on Instagram"
              whileHover={{ y: -4, scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              className="mt-7 inline-flex h-11 w-11 items-center justify-center border border-white/20 text-[#82B5A9] transition hover:border-[#82B5A9] hover:bg-[#4D867F] hover:text-white"
            >
              <InstagramIcon size={20} />
            </motion.a>
          </motion.div>

          {/* QUICK LINKS */}
          <motion.div variants={footerReveal}>
            <h3 className="mb-7 text-xs font-bold uppercase tracking-[0.25em] text-[#82B5A9]">
              Explore
            </h3>

            <ul className="space-y-4">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="inline-block text-sm text-white/55 transition duration-300 hover:translate-x-1 hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CONTACT */}
          <motion.div variants={footerReveal}>
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
          </motion.div>

          {/* INSTAGRAM CTA */}
          <motion.div variants={footerReveal}>
            <h3 className="mb-7 text-xs font-bold uppercase tracking-[0.25em] text-[#82B5A9]">
              Join The Movement
            </h3>

            <p className="text-sm leading-7 text-white/50">
              Follow our fitness journey, discover our community
              and stay connected with BODY FORGE.
            </p>

            <motion.a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              className="mt-7 inline-flex items-center gap-3 border border-[#82B5A9]/50 px-5 py-4 text-xs font-bold uppercase tracking-widest text-white transition hover:border-[#4D867F] hover:bg-[#4D867F]"
            >
              Follow on Instagram
              <ArrowUpRight size={17} />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* BOTTOM FOOTER */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col items-center justify-between gap-5 pt-8 text-center sm:flex-row sm:text-left"
        >
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
        </motion.div>
      </div>
    </footer>
  );
}
