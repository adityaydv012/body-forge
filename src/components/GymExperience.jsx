
import { motion } from "motion/react";
import { ArrowUpRight, MoveUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const highlights = [
  {
    number: "01",
    title: "Your Training Space",
    description: "A space to focus, challenge yourself and make progress.",
  },
  {
    number: "02",
    title: "Your Own Pace",
    description: "Build strength and confidence one workout at a time.",
  },
  {
    number: "03",
    title: "Your Next Level",
    description: "Show up with purpose. Leave a little stronger.",
  },
];

export default function GymExperience() {
  return (
    <section className="overflow-hidden bg-[#F4F5F1] px-5 py-24 sm:px-10 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-[1600px]">

        {/* Section Heading */}
        <div className="mb-16 grid gap-8 lg:grid-cols-2 lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-[1px] w-10 bg-[#4D867F]" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#4D867F]">
                Inside BODY FORGE
              </span>
            </div>

            <h2 className="text-5xl font-black uppercase leading-[0.92] tracking-[-0.055em] text-[#172522] sm:text-6xl lg:text-7xl">
              A Space To
              <br />
              <span className="text-[#4D867F]">Become More.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="max-w-lg text-sm leading-8 text-[#172522]/65 lg:justify-self-end lg:text-base"
          >
            Your environment shapes your experience. BODY FORGE is a place
            where you can focus on yourself, put in the work and make every
            training session count.
          </motion.p>
        </div>

        {/* Image + Highlights */}
        <div className="grid gap-12 lg:grid-cols-[1.35fr_0.65fr] lg:items-center">

          {/* Main Image */}
          <motion.div
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="group relative min-h-[420px] overflow-hidden bg-[#172522] sm:min-h-[550px]"
          >
            <motion.img
              initial={{ scale: 1.12 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1800&q=90"
              alt="Gym interior and training environment"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#101b19]/75 via-transparent to-transparent" />

            <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between sm:bottom-10 sm:left-10 sm:right-10">
              <div>
                <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[#A6C8BE]">
                  The BODY FORGE Standard
                </p>
                <h3 className="text-3xl font-black uppercase tracking-tight text-white sm:text-5xl">
                  Built To Push
                  <br />
                  Your Limits.
                </h3>
              </div>

              <div className="hidden h-12 w-12 items-center justify-center rounded-full bg-[#4D867F] text-white sm:flex">
                <MoveUpRight size={21} />
              </div>
            </div>
          </motion.div>

          {/* Highlights */}
          <div className="flex flex-col">
            {highlights.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, x: 35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.65, delay: index * 0.15 }}
                className="group border-b border-[#172522]/15 py-8 first:pt-0 last:border-0"
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-xs font-bold tracking-[0.2em] text-[#4D867F]">
                    / {item.number}
                  </span>

                  <ArrowUpRight
                    size={19}
                    className="text-[#172522]/40 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#4D867F]"
                  />
                </div>

                <h3 className="mb-3 text-2xl font-black uppercase tracking-tight text-[#172522] transition-colors duration-300 group-hover:text-[#4D867F] sm:text-3xl">
                  {item.title}
                </h3>

                <p className="max-w-sm text-sm leading-7 text-[#172522]/60">
                  {item.description}
                </p>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-5"
            >
              <Link
                to="/contact"
                className="group inline-flex items-center gap-4 text-xs font-bold uppercase tracking-[0.18em] text-[#172522]"
              >
                Come Experience It
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#4D867F] text-white transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={18} />
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
