
import { motion } from "motion/react";
import { ArrowUpRight, Target, Eye } from "lucide-react";

const ease = [0.22, 1, 0.36, 1];

const panels = [
  {
    number: "01",
    label: "Our Mission",
    title: "Make Every Rep Count.",
    description:
      "Our mission is to create an environment where people feel motivated to train, challenge their limits and build healthier, stronger lives through consistency and discipline.",
    icon: Target,
    image:
      "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=1200&q=90",
    imageAlt: "Athlete training with weights",
  },
  {
    number: "02",
    label: "Our Vision",
    title: "Strength Beyond Limits.",
    description:
      "Our vision is to inspire a fitness mindset that goes beyond physical transformation — encouraging confidence, resilience and continuous personal growth.",
    icon: Eye,
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=90",
    imageAlt: "Modern gym training environment",
  },
];

export default function MissionVision() {
  return (
    <section className="overflow-hidden bg-[#F4F5F1] px-6 py-24 md:py-32 lg:px-12">

      <div className="mx-auto max-w-[1440px]">

        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease }}
          className="mb-16 flex flex-col gap-6 md:mb-20 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#4D867F]" />

              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#4D867F]">
                Our Direction
              </p>
            </div>

            <h2 className="text-4xl font-black uppercase leading-[0.98] tracking-tight text-[#172522] sm:text-5xl md:text-7xl">
              What We Stand
              <br />
              <span className="text-[#4D867F]">For.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-[#172522]/60 md:text-base">
            Every strong foundation starts with a purpose.
            Here's what shapes the direction of BODY FORGE.
          </p>
        </motion.div>

        {/* MISSION & VISION PANELS */}
        <div className="grid gap-6 lg:grid-cols-2">

          {panels.map((panel, index) => {
            const Icon = panel.icon;

            return (
              <motion.article
                key={panel.number}
                initial={{
                  opacity: 0,
                  y: 55,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.9,
                  delay: index * 0.18,
                  ease,
                }}
                className="group relative min-h-[540px] overflow-hidden bg-[#172522] md:min-h-[620px]"
              >

                {/* BACKGROUND IMAGE */}
                <motion.img
                  src={panel.image}
                  alt={panel.imageAlt}
                  initial={{ scale: 1.12 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease }}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                {/* IMAGE OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#172522]/95 via-[#172522]/60 to-[#172522]/10 transition duration-500 group-hover:from-[#172522]/90" />

                {/* PANEL CONTENT */}
                <div className="relative z-10 flex min-h-[540px] flex-col justify-between p-7 text-white md:min-h-[620px] md:p-12">

                  {/* TOP */}
                  <div className="flex items-start justify-between">
                    <span className="text-xs font-bold tracking-[0.3em] text-[#A6C8BE]">
                      / {panel.number}
                    </span>

                    <motion.div
                      whileHover={{
                        rotate: 12,
                        scale: 1.1,
                      }}
                      className="flex h-14 w-14 items-center justify-center border border-white/30 bg-white/10 backdrop-blur-sm"
                    >
                      <Icon size={25} strokeWidth={1.5} />
                    </motion.div>
                  </div>

                  {/* BOTTOM */}
                  <div className="max-w-lg">

                    <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#A6C8BE]">
                      {panel.label}
                    </p>

                    <h3 className="text-4xl font-black uppercase leading-[0.98] tracking-tight sm:text-5xl md:text-6xl">
                      {panel.title}
                    </h3>

                    <p className="mt-6 max-w-md text-sm leading-7 text-white/65 md:text-base">
                      {panel.description}
                    </p>

                    <div className="mt-9 flex items-center gap-3 border-t border-white/20 pt-6">
                      <span className="h-[2px] w-8 bg-[#82B5A9]" />

                      <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/70">
                        BODY FORGE
                      </span>
                    </div>

                  </div>
                </div>
              </motion.article>
            );
          })}

        </div>

        {/* CLOSING STATEMENT */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-[#172522]/15 pt-8 sm:flex-row sm:items-center"
        >
          <p className="text-xl font-black uppercase tracking-tight text-[#172522] md:text-2xl">
            Built With Purpose.
            <span className="text-[#4D867F]"> Driven By Passion.</span>
          </p>

          <a
            href="/explore-gym"
            className="group inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#4D867F]"
          >
            Explore Our Gym

            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
