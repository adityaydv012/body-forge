
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export default function TeamCTA() {
  return (
    <section className="relative isolate overflow-hidden bg-[#172522] px-6 py-28 text-white md:px-12 md:py-36 lg:px-16">

      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 -z-20"
      >
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=85&w=2200&auto=format&fit=crop"
          alt="Gym training environment"
          className="h-full w-full object-cover object-center"
        />
      </motion.div>

      {/* Overlays */}
      <div className="absolute inset-0 -z-10 bg-[#172522]/80" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#172522] via-[#172522]/75 to-[#172522]/40" />

      <div className="relative mx-auto max-w-[1400px]">
        <div className="max-w-4xl">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-[#82B5A9]"
          >
            <span className="h-px w-10 bg-[#82B5A9]" />
            Your Journey Starts Here
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl md:text-8xl"
          >
            Great Things
            <br />
            Are Built
            <br />
            <span className="text-[#82B5A9]">Together.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-8 max-w-xl text-sm leading-8 text-white/65 md:text-base"
          >
            Find your strength, build your discipline and take
            the next step with BODY FORGE.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-4 bg-[#4D867F] px-7 py-4 text-xs font-bold uppercase tracking-widest text-white transition-colors duration-300 hover:bg-white hover:text-[#172522]"
            >
              Get In Touch
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

            <Link
              to="/membership"
              className="group inline-flex items-center gap-3 border border-white/35 px-7 py-4 text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 hover:border-[#82B5A9] hover:text-[#82B5A9]"
            >
              Explore Membership
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
