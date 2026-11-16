
import { motion } from "motion/react";
import {
  Dumbbell,
  Users,
  Target,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";

const benefits = [
  {
    number: "01",
    icon: Dumbbell,
    title: "Train With Purpose",
    description:
      "A dedicated training environment to help you stay focused on your fitness goals.",
  },
  {
    number: "02",
    icon: Users,
    title: "A Stronger Community",
    description:
      "Be part of an environment where motivation, consistency and effort matter.",
  },
  {
    number: "03",
    icon: Target,
    title: "Focus On Your Goals",
    description:
      "Make every session meaningful with a clear approach to your fitness journey.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Progress Every Day",
    description:
      "Build better habits and work towards becoming stronger with every session.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.13,
    },
  },
};

const reveal = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function MembershipBenefits() {
  return (
    <section className="overflow-hidden bg-[#172522] px-6 py-24 text-white md:py-32 lg:px-12">
      <div className="mx-auto max-w-[1440px]">

        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75 }}
          className="mb-16 max-w-3xl"
        >
          <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-[#82B5A9]">
            <span className="h-px w-9 bg-[#82B5A9]" />
            The BODY FORGE Experience
          </p>

          <h2 className="text-4xl font-black uppercase leading-[1.02] tracking-tight md:text-6xl lg:text-7xl">
            More Than
            <br />
            <span className="font-light italic text-[#82B5A9]">
              A Membership.
            </span>
            <br />
            A Commitment.
          </h2>

          <p className="mt-7 max-w-xl text-sm leading-7 text-white/55 md:text-base">
            Joining BODY FORGE is about creating space for yourself,
            staying consistent and making fitness a part of your life.
          </p>
        </motion.div>

        {/* IMAGE + BENEFITS */}
        <div className="grid items-stretch gap-12 lg:grid-cols-2 lg:gap-20">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9 }}
            className="group relative min-h-[450px] overflow-hidden bg-[#263833] md:min-h-[650px]"
          >
            <motion.img
              initial={{ scale: 1.12 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 1.1 }}
              src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=1200&q=90"
              alt="Athlete training at the gym"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#172522]/90 via-transparent to-transparent" />

            <div className="absolute bottom-0 left-0 p-8 md:p-10">
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-[#A6C8BE]">
                Your Space. Your Progress.
              </p>

              <h3 className="max-w-md text-3xl font-black uppercase leading-tight md:text-5xl">
                Show Up.
                <br />
                Put In The Work.
                <br />
                Become Stronger.
              </h3>
            </div>

            <span className="absolute right-7 top-7 text-xs font-bold tracking-widest text-white/70">
              BF / 001
            </span>
          </motion.div>

          {/* BENEFIT LIST */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="flex flex-col justify-center"
          >
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <motion.div
                  key={benefit.number}
                  variants={reveal}
                  className="group border-b border-white/15 py-7 first:border-t md:py-8"
                >
                  <div className="flex items-start gap-5 md:gap-7">
                    <span className="pt-1 text-[10px] font-bold tracking-widest text-[#82B5A9]/60">
                      {benefit.number}
                    </span>

                    <div className="flex-1">
                      <div className="mb-4 flex items-center justify-between">
                        <h3 className="text-xl font-bold uppercase tracking-tight transition-colors duration-300 group-hover:text-[#82B5A9] md:text-2xl">
                          {benefit.title}
                        </h3>

                        <motion.span
                          whileHover={{ rotate: 12, scale: 1.12 }}
                          transition={{ duration: 0.25 }}
                          className="text-[#82B5A9]"
                        >
                          <Icon size={25} strokeWidth={1.5} />
                        </motion.span>
                      </div>

                      <p className="max-w-md text-sm leading-7 text-white/50">
                        {benefit.description}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={18}
                      className="mt-1 shrink-0 text-white/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#82B5A9]"
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* BOTTOM LINE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 flex flex-col justify-between gap-4 border-t border-white/15 pt-7 sm:flex-row sm:items-center"
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/40">
            BODY FORGE — BUILT THROUGH DISCIPLINE
          </p>

          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#82B5A9]">
            TRAIN. EVOLVE. REPEAT.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
