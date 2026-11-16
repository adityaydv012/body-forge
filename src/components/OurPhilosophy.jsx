
import { motion } from "motion/react";
import {
  Target,
  Repeat2,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1];

const principles = [
  {
    number: "01",
    title: "Discipline",
    description:
      "Progress begins when you show up, even on the days when motivation doesn't. Build the mindset to stay committed.",
    icon: Target,
    word: "COMMIT",
  },
  {
    number: "02",
    title: "Consistency",
    description:
      "Real transformation takes time. Small efforts repeated every day create the foundation for lasting results.",
    icon: Repeat2,
    word: "REPEAT",
  },
  {
    number: "03",
    title: "Growth",
    description:
      "Every session is an opportunity to push your limits, challenge yourself and become stronger than yesterday.",
    icon: TrendingUp,
    word: "EVOLVE",
  },
];

export default function OurPhilosophy() {
  return (
    <section className="relative overflow-hidden bg-[#172522] px-6 py-24 md:py-32 lg:px-12">

      {/* BACKGROUND DETAIL */}
      <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full border border-[#82B5A9]/10" />
      <div className="pointer-events-none absolute -right-20 top-32 h-72 w-72 rounded-full border border-[#82B5A9]/10" />

      <div className="relative mx-auto max-w-[1440px]">

        {/* SECTION HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease }}
          className="mb-16 max-w-3xl md:mb-20"
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="h-[2px] w-10 bg-[#82B5A9]" />

            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#A6C8BE]">
              What Drives Us
            </p>
          </div>

          <h2 className="text-4xl font-black uppercase leading-[0.98] tracking-tight text-white sm:text-5xl md:text-7xl">
            More Than
            <br />
            <span className="text-[#82B5A9]">Muscle.</span>
            A Mindset.
          </h2>

          <p className="mt-7 max-w-xl text-sm leading-8 text-white/55 md:text-base">
            Fitness is not just about lifting weights. It's about
            developing the mindset, habits and determination that
            make you stronger in every aspect of life.
          </p>
        </motion.div>

        {/* PRINCIPLE CARDS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.18,
              },
            },
          }}
          className="grid gap-5 md:grid-cols-3"
        >
          {principles.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.number}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 50,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.8,
                      ease,
                    },
                  },
                }}
                whileHover={{ y: -8 }}
                className="group relative flex min-h-[360px] flex-col justify-between overflow-hidden border border-white/10 bg-white/[0.035] p-7 transition-colors duration-500 hover:border-[#82B5A9]/50 hover:bg-[#4D867F]/10 md:min-h-[410px] md:p-9"
              >
                {/* BACKGROUND WORD */}
                <span className="pointer-events-none absolute -bottom-5 -right-3 text-7xl font-black uppercase tracking-tighter text-white/[0.025] transition-colors duration-500 group-hover:text-[#82B5A9]/[0.07] md:text-8xl">
                  {item.word}
                </span>

                {/* TOP */}
                <div className="relative z-10 flex items-start justify-between">
                  <span className="text-xs font-bold tracking-[0.25em] text-[#82B5A9]">
                    / {item.number}
                  </span>

                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="flex h-14 w-14 items-center justify-center border border-[#82B5A9]/30 text-[#82B5A9]"
                  >
                    <Icon size={25} strokeWidth={1.5} />
                  </motion.div>
                </div>

                {/* BOTTOM */}
                <div className="relative z-10 mt-16">
                  <h3 className="text-3xl font-black uppercase tracking-tight text-white md:text-4xl">
                    {item.title}
                  </h3>

                  <p className="mt-5 max-w-sm text-sm leading-7 text-white/50">
                    {item.description}
                  </p>

                  <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
                    <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#82B5A9]">
                      The BODY FORGE Way
                    </span>

                    <ArrowUpRight
                      size={18}
                      className="text-white/50 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#82B5A9]"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* BOTTOM STATEMENT */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease }}
          className="mt-16 flex flex-col gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="max-w-xl text-lg font-semibold uppercase leading-relaxed tracking-wide text-white/80 md:text-xl">
            Stronger habits.
            <span className="text-[#82B5A9]"> Stronger you.</span>
          </p>

          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/35">
            Forge Your Own Path
          </span>
        </motion.div>

      </div>
    </section>
  );
}
