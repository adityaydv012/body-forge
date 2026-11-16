
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const zones = [
  {
    number: "01",
    title: "Strength",
    subtitle: "Build Your Foundation",
    description:
      "Focus on strength, challenge your limits and work towards becoming stronger.",
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=90",
    size: "lg:col-span-7",
  },
  {
    number: "02",
    title: "Cardio",
    subtitle: "Find Your Rhythm",
    description:
      "Bring energy to every session and keep moving towards your fitness goals.",
    image:
      "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1200&q=90",
    size: "lg:col-span-5",
  },
  {
    number: "03",
    title: "Functional",
    subtitle: "Move With Purpose",
    description:
      "Focus on movement, coordination and building a stronger foundation.",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1400&q=90",
    size: "lg:col-span-12",
  },
];

export default function TrainingZones() {
  return (
    <section className="overflow-hidden bg-[#172522] px-5 py-24 text-white sm:px-10 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-[1600px]">

        {/* Heading */}
        <div className="mb-16 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-[1px] w-10 bg-[#82B5A9]" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#A6C8BE]">
                Find Your Zone
              </span>
            </div>

            <h2 className="text-5xl font-black uppercase leading-[0.92] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              Every Space.
              <br />
              <span className="text-[#82B5A9]">A New Challenge.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-md text-sm leading-8 text-white/55 sm:text-base"
          >
            Different goals. Different ways to train. Explore the spaces
            designed around movement, effort and progress.
          </motion.p>
        </div>

        {/* Zone Cards */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
          {zones.map((zone, index) => (
            <motion.article
              key={zone.number}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`group relative min-h-[430px] overflow-hidden bg-[#253732] sm:min-h-[500px] ${zone.size}`}
            >
              {/* Image */}
              <motion.img
                src={zone.image}
                alt={`${zone.title} training`}
                initial={{ scale: 1.12 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#101b19] via-[#101b19]/20 to-transparent" />
              <div className="absolute inset-0 bg-[#101b19]/10 transition-colors duration-500 group-hover:bg-[#101b19]/25" />

              {/* Number */}
              <div className="absolute left-7 top-7 sm:left-10 sm:top-10">
                <span className="text-xs font-bold tracking-[0.2em] text-[#A6C8BE]">
                  / {zone.number}
                </span>
              </div>

              {/* Arrow */}
              <div className="absolute right-7 top-7 flex h-11 w-11 items-center justify-center rounded-full border border-white/35 text-white transition-all duration-300 group-hover:rotate-45 group-hover:border-[#82B5A9] group-hover:bg-[#4D867F] sm:right-10 sm:top-10">
                <ArrowUpRight size={20} />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-10">
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#A6C8BE]">
                  {zone.subtitle}
                </p>

                <h3 className="text-4xl font-black uppercase leading-none tracking-[-0.04em] sm:text-6xl">
                  {zone.title}
                </h3>

                <div className="mt-5 max-w-md overflow-hidden">
                  <p className="translate-y-0 text-sm leading-7 text-white/70 transition-transform duration-500">
                    {zone.description}
                  </p>
                </div>

                <div className="mt-6 h-[2px] w-12 bg-[#82B5A9] transition-all duration-500 group-hover:w-24" />
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 flex flex-col justify-between gap-5 border-t border-white/15 pt-8 sm:flex-row sm:items-center"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-white/45">
            Your Goals. Your Journey. Your BODY FORGE.
          </p>

          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#A6C8BE]">
            Make Every Rep Count.
          </span>
        </motion.div>

      </div>
    </section>
  );
}
