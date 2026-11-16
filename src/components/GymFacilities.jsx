
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const facilities = [
  {
    number: "01",
    title: "Training Environment",
    description:
      "A dedicated space to focus on your workouts and make every session count.",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=90",
    className: "md:col-span-2",
  },
  {
    number: "02",
    title: "Strength & Conditioning",
    description:
      "Build strength through focused and consistent training.",
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=900&q=90",
    className: "",
  },
  {
    number: "03",
    title: "Cardio Training",
    description:
      "Keep moving, build endurance and challenge your limits.",
    image:
      "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=900&q=90",
    className: "",
  },
  {
    number: "04",
    title: "Your Fitness Journey",
    description:
      "Show up with purpose and create a routine that works for you.",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1000&q=90",
    className: "md:col-span-2",
  },
];

export default function GymFacilities() {
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
                More Than A Workout
              </span>
            </div>

            <h2 className="text-5xl font-black uppercase leading-[0.92] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              The Space.
              <br />
              <span className="text-[#82B5A9]">The Experience.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="max-w-md text-sm leading-8 text-white/55 sm:text-base"
          >
            Every corner of your training environment contributes to the
            experience. Find your focus, discover your rhythm and keep
            moving forward.
          </motion.p>
        </div>

        {/* Facility Grid */}
        <div className="grid gap-5 md:grid-cols-2">
          {facilities.map((facility, index) => (
            <motion.article
              key={facility.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.75,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`group relative min-h-[390px] overflow-hidden bg-[#263832] sm:min-h-[470px] ${facility.className}`}
            >
              <img
                src={facility.image}
                alt={facility.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#101b19]/90 via-[#101b19]/15 to-transparent" />

              <span className="absolute left-7 top-7 text-xs font-bold tracking-[0.2em] text-[#A6C8BE] sm:left-9 sm:top-9">
                / {facility.number}
              </span>

              <div className="absolute right-7 top-7 flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-white transition-all duration-300 group-hover:rotate-45 group-hover:border-[#82B5A9] group-hover:bg-[#4D867F] sm:right-9 sm:top-9">
                <ArrowUpRight size={19} />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">
                <div className="mb-4 h-[2px] w-10 bg-[#82B5A9] transition-all duration-500 group-hover:w-20" />

                <h3 className="text-3xl font-black uppercase tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                  {facility.title}
                </h3>

                <p className="mt-3 max-w-md text-sm leading-7 text-white/65">
                  {facility.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 flex flex-col gap-4 border-t border-white/15 pt-8 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-white/45">
            Find Your Focus. Find Your Strength.
          </p>

          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#A6C8BE]">
            BODY FORGE / Lucknow
          </span>
        </motion.div>

      </div>
    </section>
  );
}
