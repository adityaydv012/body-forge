
import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";

export default function GalleryHero() {
  return (
    <section className="relative flex min-h-[75vh] items-end overflow-hidden bg-[#172522]">

      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=85&w=2200&auto=format&fit=crop"
          alt="Fitness training space"
          className="h-full w-full object-cover object-center"
        />
      </motion.div>

      {/* Image Overlays */}
      <div className="absolute inset-0 bg-[#172522]/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#172522] via-[#172522]/35 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#172522]/65 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 pb-20 pt-40 md:px-12 md:pb-28 lg:px-16">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.35em] text-[#82B5A9]"
        >
          <span className="h-px w-10 bg-[#82B5A9]" />
          Inside BODY FORGE
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-6xl font-black uppercase leading-[0.9] tracking-tight text-white sm:text-7xl md:text-8xl lg:text-[110px]"
        >
          Beyond
          <br />
          The <span className="text-[#82B5A9]">Weights.</span>
        </motion.h1>

        <div className="mt-9 flex flex-col justify-between gap-8 md:flex-row md:items-end">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="max-w-lg text-sm leading-7 text-white/70 md:text-base"
          >
            Every corner has a purpose. Every session has a story.
            Take a closer look at the space where strength is built
            and limits are challenged.
          </motion.p>

          <motion.a
            href="#gallery-collection"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="group flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] text-white transition-colors hover:text-[#82B5A9]"
          >
            Explore The Gallery

            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 transition-all duration-300 group-hover:border-[#82B5A9] group-hover:bg-[#4D867F]">
              <ArrowDown
                size={17}
                className="transition-transform duration-300 group-hover:translate-y-1"
              />
            </span>
          </motion.a>

        </div>
      </div>

      {/* Bottom Label */}
      <div className="absolute bottom-7 right-8 hidden text-[10px] font-semibold uppercase tracking-[0.3em] text-white/45 md:block">
        BODY FORGE — VISUAL JOURNAL
      </div>

    </section>
  );
}
