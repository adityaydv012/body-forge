
import { motion } from "motion/react";
import {
  Target,
  Dumbbell,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";

const principles = [
  {
    number: "01",
    icon: Target,
    title: "Train With Purpose",
    description:
      "Every workout should have direction. Focus on your goals and make every session count.",
  },
  {
    number: "02",
    icon: Dumbbell,
    title: "Master The Basics",
    description:
      "Build a strong foundation through proper technique, controlled movement and consistency.",
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Progress Over Perfection",
    description:
      "Real progress takes time. Small improvements, repeated consistently, create lasting change.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Discipline Builds Strength",
    description:
      "Stay committed to the process. Show up, put in the work and keep moving forward.",
  },
];

export default function TrainingPhilosophy() {
  return (
    <section className="overflow-hidden bg-[#172522] px-6 py-24 text-white md:px-12 md:py-32 lg:px-16">
      <div className="mx-auto max-w-[1400px]">

        {/* Heading */}
        <div className="mb-16 grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#82B5A9]"
            >
              What Drives Us
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75 }}
              className="text-4xl font-black uppercase leading-[1.05] tracking-tight md:text-6xl"
            >
              Stronger Bodies.
              <br />
              <span className="text-[#82B5A9]">Stronger Mindsets.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="max-w-lg text-sm leading-8 text-white/55 md:text-base lg:justify-self-end"
          >
            Fitness is more than lifting weights. It's about building
            habits, developing discipline and becoming stronger with
            every step of the journey.
          </motion.p>
        </div>

        {/* Principles */}
        <div className="grid grid-cols-1 border-t border-white/15 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.12,
                }}
                className="group border-b border-white/15 py-10 sm:px-6 sm:first:pl-0 lg:border-b-0 lg:border-r lg:px-7 lg:first:pl-0 lg:last:border-r-0"
              >
                <div className="mb-12 flex items-center justify-between">
                  <span className="text-xs font-bold tracking-widest text-[#82B5A9]">
                    / {item.number}
                  </span>

                  <Icon
                    size={27}
                    strokeWidth={1.4}
                    className="text-[#82B5A9] transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-110"
                  />
                </div>

                <h3 className="max-w-[220px] text-2xl font-black uppercase leading-tight tracking-tight transition-colors duration-300 group-hover:text-[#82B5A9]">
                  {item.title}
                </h3>

                <p className="mt-5 text-sm leading-7 text-white/50">
                  {item.description}
                </p>

                <div className="mt-8 h-px w-10 bg-[#4D867F] transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
