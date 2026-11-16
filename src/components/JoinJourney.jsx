
import { motion } from "motion/react";
import {
  MessageCircle,
  ClipboardList,
  Dumbbell,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Start A Conversation",
    description:
      "Share your details through our enquiry form and let us know what you're looking for.",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Find Your Membership",
    description:
      "Explore the available plans and choose an option that suits your fitness goals.",
  },
  {
    number: "03",
    icon: Dumbbell,
    title: "Begin Your Training",
    description:
      "Take the first step, get into your routine and start working towards your goals.",
  },
];

export default function JoinJourney() {
  return (
    <section className="bg-white px-6 py-24 md:px-12 md:py-32 lg:px-16">
      <div className="mx-auto max-w-[1400px]">

        {/* Heading */}
        <div className="mb-16 flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#4D867F]"
            >
              Simple. Focused. Effective.
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-4xl font-black uppercase leading-[1.05] tracking-tight text-[#172522] md:text-6xl"
            >
              Three Steps.
              <br />
              <span className="text-[#4D867F]">One Stronger You.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="max-w-md text-sm leading-7 text-[#172522]/55 md:text-base"
          >
            Getting started doesn't have to be complicated.
            Take it one step at a time and make your fitness
            journey your own.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 border-t border-[#172522]/15 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.article
                key={step.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.15,
                }}
                className="group border-b border-[#172522]/15 py-10 sm:px-7 lg:border-b-0 lg:border-r lg:px-9 lg:first:pl-0 lg:last:border-r-0"
              >
                <div className="mb-14 flex items-center justify-between">
                  <span className="text-sm font-bold tracking-widest text-[#4D867F]">
                    / {step.number}
                  </span>

                  <div className="flex h-14 w-14 items-center justify-center bg-[#E8ECE6] text-[#4D867F] transition-all duration-500 group-hover:bg-[#4D867F] group-hover:text-white">
                    <Icon size={25} strokeWidth={1.5} />
                  </div>
                </div>

                <h3 className="max-w-[260px] text-2xl font-black uppercase leading-tight tracking-tight text-[#172522] transition-colors duration-300 group-hover:text-[#4D867F] md:text-3xl">
                  {step.title}
                </h3>

                <p className="mt-5 max-w-sm text-sm leading-7 text-[#172522]/55">
                  {step.description}
                </p>

                <div className="mt-9 h-px w-12 bg-[#4D867F] transition-all duration-500 group-hover:w-full" />
              </motion.article>
            );
          })}
        </div>

        {/* Bottom Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 flex flex-wrap items-center justify-between gap-6"
        >
          <p className="text-sm text-[#172522]/50">
            Not sure which plan is right for you?
          </p>

          <Link
            to="/membership"
            className="group inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[#4D867F] transition-colors hover:text-[#172522]"
          >
            Explore Membership Plans
            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
