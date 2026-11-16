
import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";

export default function AboutHero() {
  const scrollToStory = () => {
    document.getElementById("our-story")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const ease = [0.22, 1, 0.36, 1];

  return (
    <section className="relative flex min-h-[620px] items-end overflow-hidden bg-[#172522] md:min-h-[720px]">

      {/* BACKGROUND IMAGE */}
      <motion.div
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <div
          className="h-full w-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=2000&q=90')",
          }}
        />
      </motion.div>

      {/* OVERLAYS */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#172522]/95 via-[#172522]/75 to-[#172522]/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#172522]/70 via-transparent to-transparent" />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 pb-24 pt-40 lg:px-12 lg:pb-32">
        <div className="max-w-5xl">

          {/* EYEBROW */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease }}
            className="mb-7 flex items-center gap-3"
          >
            <span className="h-[2px] w-10 bg-[#82B5A9]" />

            <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#A6C8BE]">
              The Story Behind The Strength
            </p>
          </motion.div>

          {/* MAIN HEADING */}
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.45, ease }}
            className="text-6xl font-black uppercase leading-[0.9] tracking-[-0.055em] text-white sm:text-7xl md:text-8xl lg:text-[112px]"
          >
            More Than
            <br />
            A <span className="text-[#82B5A9]">Gym.</span>
            <br />
            A Way Of Life.
          </motion.h1>

          {/* DESCRIPTION + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85, ease }}
            className="mt-9 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between"
          >
            <p className="max-w-md text-sm leading-7 text-white/65 md:text-base">
              Discover what drives BODY FORGE — a space built
              around discipline, personal growth and the pursuit
              of becoming stronger every day.
            </p>

            <button
              onClick={scrollToStory}
              className="group inline-flex w-fit items-center gap-4 border-b border-[#82B5A9]/50 pb-3 text-xs font-bold uppercase tracking-[0.2em] text-white transition duration-300 hover:border-[#82B5A9]"
            >
              Discover Our Story

              <motion.span
                animate={{ y: [0, 5, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ArrowDown
                  size={17}
                  className="text-[#82B5A9]"
                />
              </motion.span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* BOTTOM LABEL */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-7 right-12 hidden text-[10px] font-bold uppercase tracking-[0.3em] text-white/45 md:block"
      >
        BODY FORGE / OUR STORY
      </motion.div>

    </section>
  );
}
