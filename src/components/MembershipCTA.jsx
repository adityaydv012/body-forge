
import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const reveal = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function MembershipCTA() {
  return (
    <section className="relative isolate overflow-hidden bg-[#172522] px-6 py-28 md:py-36 lg:px-12">

      {/* BACKGROUND IMAGE */}
      <motion.div
        initial={{ scale: 1.13 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        className="absolute inset-0 -z-20"
      >
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=2200&q=90"
          alt="Gym training environment"
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </motion.div>

      {/* OVERLAYS */}
      <div className="absolute inset-0 -z-10 bg-[#172522]/80" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#172522]/95 via-[#172522]/75 to-[#172522]/35" />

      <div className="mx-auto max-w-[1440px]">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-5xl"
        >
          <motion.p
            variants={reveal}
            className="mb-7 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-[#A6C8BE]"
          >
            <span className="h-px w-9 bg-[#A6C8BE]" />
            Your Next Chapter Starts Here
          </motion.p>

          <motion.h2
            variants={reveal}
            className="text-5xl font-black uppercase leading-[0.93] tracking-[-0.055em] text-white sm:text-6xl md:text-8xl lg:text-[105px]"
          >
            Make The
            <br />
            <span className="font-light italic text-[#82B5A9]">
              Commitment.
            </span>
            <br />
            Forge The Change.
          </motion.h2>

          <motion.p
            variants={reveal}
            className="mt-8 max-w-xl text-sm leading-7 text-white/65 md:text-base"
          >
            Your fitness journey doesn't begin someday.
            It begins when you decide to show up. Take the first step
            towards your stronger self with BODY FORGE.
          </motion.p>

          <motion.div
            variants={reveal}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-4 bg-[#4D867F] px-8 py-5 text-xs font-bold uppercase tracking-widest text-white transition-colors duration-300 hover:bg-[#82B5A9] hover:text-[#172522]"
            >
              Enquire About Membership
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

            <Link
              to="/explore-gym"
              className="group inline-flex items-center justify-center gap-4 border border-white/35 px-8 py-5 text-xs font-bold uppercase tracking-widest text-white transition-colors duration-300 hover:border-[#82B5A9] hover:text-[#A6C8BE]"
            >
              Explore Our Gym
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </motion.div>

        {/* BOTTOM STRIP */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-24 flex flex-col justify-between gap-4 border-t border-white/20 pt-6 sm:flex-row sm:items-center"
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/45">
            BODY FORGE — BUILD YOUR LEGACY
          </p>

          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#A6C8BE]">
            TRAIN. EVOLVE. REPEAT.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
