
import { motion } from "motion/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ExploreGymHero() {
  return (
    <section className="relative flex min-h-[85vh] items-end overflow-hidden bg-[#172522] px-5 pb-16 pt-36 text-white sm:px-10 lg:min-h-[92vh] lg:px-16 lg:pb-20">

      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2400&q=90"
          alt="BODY FORGE gym training area"
          className="h-full w-full object-cover object-center"
        />
      </motion.div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-[#101b19]/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#101b19] via-[#101b19]/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#101b19]/65 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1600px]">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-7 flex items-center gap-3"
        >
          <span className="h-[1px] w-10 bg-[#82B5A9]" />
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#A6C8BE]">
            The BODY FORGE Experience
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 55 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl text-[clamp(3.5rem,9vw,8.5rem)] font-black uppercase leading-[0.86] tracking-[-0.065em]"
        >
          Built For
          <br />
          <span className="text-[#A6C8BE]">The Work.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-9 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between"
        >
          <p className="max-w-md text-sm leading-7 text-white/75 sm:text-base">
            Explore the space, discover your training environment, and find
            everything you need to push beyond your limits.
          </p>

          <Link
            to="/contact"
            className="group inline-flex w-fit items-center gap-4 border-b border-[#82B5A9] pb-3 text-xs font-bold uppercase tracking-[0.2em] transition-colors hover:text-[#A6C8BE]"
          >
            Experience BODY FORGE
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#4D867F] transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight size={17} />
            </span>
          </Link>
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-7 right-8 z-10 hidden items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-white/60 md:flex lg:right-16"
      >
        Scroll To Explore
        <ArrowDown size={15} />
      </motion.div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 h-[3px] w-full bg-white/10">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "28%" }}
          transition={{ duration: 1.5, delay: 1 }}
          className="h-full bg-[#82B5A9]"
        />
      </div>
    </section>
  );
}
