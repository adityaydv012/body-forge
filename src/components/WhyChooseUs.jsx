
import { motion } from "motion/react";
import {
  Dumbbell,
  Users,
  Activity,
  HeartPulse,
  ArrowUpRight,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1];

const features = [
  {
    number: "01",
    title: "Modern Equipment",
    description:
      "Train with equipment designed to support your workouts and help you work towards your fitness goals.",
    icon: Dumbbell,
  },
  {
    number: "02",
    title: "Training For Everyone",
    description:
      "Whether you're a beginner or an experienced fitness enthusiast, there's room to grow at every level.",
    icon: Users,
  },
  {
    number: "03",
    title: "Focused Environment",
    description:
      "A dedicated training space that keeps you focused, motivated and committed to your routine.",
    icon: Activity,
  },
  {
    number: "04",
    title: "Fitness That Lasts",
    description:
      "Build sustainable habits and make physical activity a consistent part of your lifestyle.",
    icon: HeartPulse,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="overflow-hidden bg-[#F4F5F1] px-6 py-24 md:py-32 lg:px-12">
      <div className="mx-auto max-w-[1440px]">

        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease }}
          className="mb-16 max-w-3xl"
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="h-[2px] w-10 bg-[#4D867F]" />
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#4D867F]">
              The BODY FORGE Experience
            </p>
          </div>

          <h2 className="text-4xl font-black uppercase leading-[0.98] tracking-tight text-[#172522] sm:text-5xl md:text-7xl">
            Everything You Need.
            <br />
            <span className="text-[#4D867F]">Nothing Holding You Back.</span>
          </h2>

          <p className="mt-7 max-w-xl text-sm leading-8 text-[#172522]/60 md:text-base">
            Your fitness environment matters. Discover the elements
            that make BODY FORGE a space to train, improve and move
            forward with purpose.
          </p>
        </motion.div>

        {/* MAIN CONTENT */}
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">

          {/* IMAGE SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease }}
            className="relative min-h-[480px] md:min-h-[650px]"
          >
            <div className="absolute inset-0 overflow-hidden bg-[#172522]">
              <motion.img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1400&q=90"
                alt="Gym training equipment and workout area"
                initial={{ scale: 1.12 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease }}
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#172522]/80 via-transparent to-transparent" />
            </div>

            {/* IMAGE TEXT */}
            <div className="absolute bottom-0 left-0 p-8 md:p-12">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#A6C8BE]">
                Your Space. Your Journey.
              </p>

              <h3 className="mt-4 text-4xl font-black uppercase leading-none text-white md:text-6xl">
                Train
                <br />
                With Purpose.
              </h3>
            </div>

            {/* CORNER LABEL */}
            <div className="absolute -right-3 -top-3 flex h-20 w-20 items-center justify-center bg-[#4D867F] text-white md:-right-5 md:-top-5 md:h-24 md:w-24">
              <Dumbbell size={32} strokeWidth={1.4} />
            </div>
          </motion.div>

          {/* FEATURES SIDE */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: 0.1,
                },
              },
            }}
            className="flex flex-col justify-center"
          >
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.number}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.7, ease },
                    },
                  }}
                  className="group border-b border-[#172522]/15 py-7 first:border-t md:py-9"
                >
                  <div className="flex items-start gap-5">

                    <span className="pt-1 text-[10px] font-bold tracking-[0.2em] text-[#4D867F]">
                      / {feature.number}
                    </span>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-4">
                        <h3 className="text-xl font-black uppercase tracking-tight text-[#172522] transition-colors duration-300 group-hover:text-[#4D867F] md:text-2xl">
                          {feature.title}
                        </h3>

                        <motion.div
                          whileHover={{ rotate: 12, scale: 1.1 }}
                          className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#4D867F]/30 text-[#4D867F] transition-colors duration-300 group-hover:bg-[#4D867F] group-hover:text-white"
                        >
                          <Icon size={20} strokeWidth={1.5} />
                        </motion.div>
                      </div>

                      <p className="mt-4 max-w-md text-sm leading-7 text-[#172522]/60">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* EXPLORE LINK */}
            <motion.a
              href="/explore-gym"
              whileHover={{ x: 6 }}
              className="mt-9 inline-flex w-fit items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#4D867F]"
            >
              Explore Our Facilities
              <ArrowUpRight size={18} />
            </motion.a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
