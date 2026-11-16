
import { Link } from "react-router-dom";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

export default function TeamHero() {
  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-[#172522] text-white">

      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=85&w=2200&auto=format&fit=crop"
          alt="BODY FORGE training environment"
          className="h-full w-full object-cover object-center"
        />
      </motion.div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-[#172522]/65" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#172522] via-[#172522]/75 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#172522]/70 via-transparent to-[#172522]/20" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 py-28 md:px-12 lg:px-16">

        <div className="max-w-4xl">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-7 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.35em] text-[#82B5A9]"
          >
            <span className="h-px w-10 bg-[#82B5A9]" />
            The People Behind The Progress
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-6xl font-black uppercase leading-[0.95] tracking-tight sm:text-7xl md:text-8xl lg:text-[110px]"
          >
            Meet The
            <br />
            <span className="text-[#82B5A9]">Force</span>
            <br />
            Behind You.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 max-w-xl text-sm leading-7 text-white/70 md:text-base md:leading-8"
          >
            Every great transformation has people behind it.
            Get to know the team that brings energy, guidance
            and purpose to your fitness journey.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-10 flex flex-wrap items-center gap-6"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-4 bg-[#4D867F] px-7 py-4 text-xs font-bold uppercase tracking-widest text-white transition-colors duration-300 hover:bg-white hover:text-[#172522]"
            >
              Connect With Us
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

            <a
              href="#team-members"
              className="group inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-white/80 transition-colors hover:text-[#82B5A9]"
            >
              Meet The Team
              <ArrowDown
                size={16}
                className="transition-transform duration-300 group-hover:translate-y-1"
              />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom Label */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 right-8 hidden items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/50 md:flex"
      >
        <span className="h-px w-10 bg-[#82B5A9]/70" />
        BODY FORGE — OUR TEAM
      </motion.div>
    </section>
  );
}
