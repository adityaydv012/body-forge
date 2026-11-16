
import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ExploreGymCTA() {
  return (
    <section className="relative isolate overflow-hidden bg-[#172522] px-5 py-28 md:px-10 md:py-36 lg:px-16">
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 -z-20">
        <motion.img
          initial={{ scale: 1.12 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2200&q=90"
          alt="Gym training environment"
          className="h-full w-full object-cover"
        />
      </div>

      {/* OVERLAYS */}
      <div className="absolute inset-0 -z-10 bg-[#101B18]/80" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#172522]/90 via-[#172522]/65 to-transparent" />

      <div className="mx-auto max-w-[1500px]">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl"
        >
          <p className="mb-7 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-[#A6C8BE]">
            <span className="h-px w-9 bg-[#A6C8BE]" />
            YOUR NEXT CHAPTER STARTS HERE
          </p>

          <h2 className="text-5xl font-black uppercase leading-[0.92] tracking-[-0.055em] text-white sm:text-6xl md:text-8xl lg:text-[108px]">
            Ready To
            <br />
            <span className="font-light italic text-[#82B5A9]">
              Forge Your
            </span>
            <br />
            Strength?
          </h2>

          <p className="mt-8 max-w-xl text-sm leading-7 text-white/65 md:text-base">
            Step into BODY FORGE, find your training space, and start building
            a stronger version of yourself.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/membership"
              className="group inline-flex items-center justify-center gap-4 bg-[#4D867F] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:bg-[#82B5A9] hover:text-[#172522]"
            >
              Explore Membership
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-4 border border-white/35 px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:border-[#82B5A9] hover:text-[#A6C8BE]"
            >
              Get In Touch
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </motion.div>

        <div className="mt-20 flex flex-col justify-between gap-4 border-t border-white/20 pt-6 sm:flex-row sm:items-center">
          <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/50">
            BODY FORGE — BUILT FOR YOUR NEXT LEVEL
          </p>
          <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#A6C8BE]">
            TRAIN. EVOLVE. REPEAT.
          </p>
        </div>
      </div>
    </section>
  );
}
