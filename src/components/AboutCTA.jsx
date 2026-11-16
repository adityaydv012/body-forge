
import { motion } from "motion/react";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ease = [0.22, 1, 0.36, 1];

export default function AboutCTA() {
  return (
    <section className="relative overflow-hidden bg-[#172522] px-6 py-28 md:py-36 lg:px-12">

      {/* BACKGROUND IMAGE */}
      <motion.div
        initial={{ scale: 1.12 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.8, ease }}
        className="absolute inset-0"
      >
        <img
          src="https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=2000&q=90"
          alt="Athlete training in the gym"
          className="h-full w-full object-cover"
        />
      </motion.div>

      {/* OVERLAYS */}
      <div className="absolute inset-0 bg-[#172522]/85" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#172522]/80 via-[#172522]/55 to-[#172522]/80" />

      {/* DECORATIVE ELEMENT */}
      <div className="pointer-events-none absolute -right-24 top-1/2 h-[450px] w-[450px] -translate-y-1/2 rounded-full border border-[#82B5A9]/15 md:h-[600px] md:w-[600px]" />

      <div className="relative z-10 mx-auto max-w-[1440px]">

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="max-w-5xl"
        >

          {/* EYEBROW */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -25 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.7, ease },
              },
            }}
            className="mb-8 flex items-center gap-3"
          >
            <span className="h-[2px] w-10 bg-[#82B5A9]" />

            <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#A6C8BE]">
              Your Next Chapter Starts Here
            </p>
          </motion.div>

          {/* HEADING */}
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 45 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.9, ease },
              },
            }}
            className="text-5xl font-black uppercase leading-[0.9] tracking-[-0.05em] text-white sm:text-6xl md:text-8xl lg:text-[110px]"
          >
            Ready To
            <br />
            <span className="text-[#82B5A9]">Forge</span>
            Your
            <br />
            Stronger Self?
          </motion.h2>

          {/* DESCRIPTION */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 25 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease },
              },
            }}
            className="mt-9 max-w-lg text-sm leading-8 text-white/60 md:text-base"
          >
            Every journey begins with a decision. Take the first
            step towards a stronger, healthier and more confident
            version of yourself.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 25 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease },
              },
            }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Link
              to="/membership"
              className="group inline-flex w-fit items-center justify-center gap-4 bg-[#4D867F] px-8 py-5 text-xs font-bold uppercase tracking-[0.2em] text-white transition duration-300 hover:bg-[#82B5A9]"
            >
              Explore Membership

              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/contact"
              className="group inline-flex w-fit items-center justify-center gap-4 border border-white/30 px-8 py-5 text-xs font-bold uppercase tracking-[0.2em] text-white transition duration-300 hover:border-[#82B5A9] hover:text-[#82B5A9]"
            >
              Get In Touch

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>

        </motion.div>

        {/* BOTTOM BRAND LABEL */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 flex flex-col justify-between gap-4 border-t border-white/20 pt-6 sm:flex-row sm:items-center"
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/45">
            BODY FORGE — FORGE YOUR OWN PATH
          </p>

          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#82B5A9]">
            Strength Starts With You.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
