
import { motion } from "motion/react";
import { ArrowUpRight, Dumbbell } from "lucide-react";

const ease = [0.22, 1, 0.36, 1];

export default function OurStory() {
  return (
    <section
      id="our-story"
      className="overflow-hidden bg-[#F4F5F1] px-6 py-24 md:py-32 lg:px-12"
    >
      <div className="mx-auto grid max-w-[1440px] items-center gap-16 lg:grid-cols-2 lg:gap-24">

        {/* IMAGE SIDE */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative"
        >
          {/* IMAGE REVEAL */}
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                clipPath: "inset(0 100% 0 0)",
              },
              visible: {
                opacity: 1,
                clipPath: "inset(0 0% 0 0)",
                transition: {
                  duration: 1.2,
                  ease,
                },
              },
            }}
            className="relative h-[480px] overflow-hidden md:h-[650px]"
          >
            <motion.img
              src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=1200&q=90"
              alt="Athlete training at BODY FORGE"
              initial={{ scale: 1.15 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, ease }}
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#172522]/40 to-transparent" />
          </motion.div>

          {/* IMAGE LABEL */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5, ease }}
            whileHover={{ y: -6 }}
            className="absolute -bottom-7 -right-3 bg-[#4D867F] p-7 text-white md:-right-7 md:p-10"
          >
            <Dumbbell size={28} />

            <p className="mt-5 text-3xl font-black uppercase leading-none">
              Built
              <br />
              Different.
            </p>

            <p className="mt-3 text-[9px] font-bold uppercase tracking-[0.25em] text-white/70">
              The BODY FORGE Standard
            </p>
          </motion.div>

          {/* SIDE LABEL */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8 }}
            className="absolute -left-7 top-12 hidden -rotate-90 text-[10px] font-bold uppercase tracking-[0.3em] text-[#4D867F] md:block"
          >
            Strength Is A Lifestyle
          </motion.p>
        </motion.div>

        {/* CONTENT SIDE */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
              },
            },
          }}
          className="lg:pl-5"
        >
          {/* EYEBROW */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -25 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.7, ease },
              },
            }}
            className="mb-6 flex items-center gap-3"
          >
            <span className="h-[2px] w-10 bg-[#4D867F]" />

            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#4D867F]">
              Who We Are
            </p>
          </motion.div>

          {/* HEADING */}
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 35 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease },
              },
            }}
            className="text-4xl font-black uppercase leading-[0.98] tracking-tight text-[#172522] sm:text-5xl md:text-6xl"
          >
            Built On
            <br />
            <span className="text-[#4D867F]">Strength.</span>
            <br />
            Driven By
            <br />
            Purpose.
          </motion.h2>

          {/* DESCRIPTION */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 25 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease },
              },
            }}
            className="mt-9 max-w-xl space-y-5 text-sm leading-8 text-[#172522]/65 md:text-base"
          >
            <p>
              BODY FORGE is more than a place to work out.
              It is an environment where determination meets
              discipline and every individual gets the opportunity
              to work towards a stronger version of themselves.
            </p>

            <p>
              We believe fitness is not defined by a single workout
              or a temporary goal. It is built through consistency,
              commitment and the decision to keep moving forward.
            </p>

            <p>
              Whether you are beginning your fitness journey or
              pushing towards your next milestone, BODY FORGE
              is a space to challenge yourself and grow.
            </p>
          </motion.div>

          {/* BRAND SIGNATURE */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 25 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease },
              },
            }}
            className="mt-11 flex items-center justify-between border-t border-[#172522]/15 pt-7"
          >
            <div>
              <p className="text-lg font-black uppercase tracking-[0.12em] text-[#172522]">
                BODY FORGE
              </p>

              <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.3em] text-[#4D867F]">
                Forge Your Body. Build Your Legacy.
              </p>
            </div>

            <motion.a
              href="/explore-gym"
              whileHover={{
                scale: 1.08,
                rotate: 45,
              }}
              whileTap={{ scale: 0.94 }}
              transition={{ duration: 0.3 }}
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-[#4D867F]/40 text-[#4D867F] transition-colors duration-300 hover:bg-[#4D867F] hover:text-white"
              aria-label="Explore our gym"
            >
              <ArrowUpRight size={21} />
            </motion.a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
