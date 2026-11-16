
import { motion } from "motion/react";
import {
  MessageCircle,
  ClipboardCheck,
  Dumbbell,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  {
    number: "01",
    title: "Get In Touch",
    description:
      "Connect with our team and enquire about membership options that suit your goals.",
    icon: MessageCircle,
  },
  {
    number: "02",
    title: "Choose Your Plan",
    description:
      "Explore the available membership durations and select the option that works for you.",
    icon: ClipboardCheck,
  },
  {
    number: "03",
    title: "Start Training",
    description:
      "Complete your membership process and take the first step towards your fitness journey.",
    icon: Dumbbell,
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const reveal = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function MembershipProcess() {
  return (
    <section className="overflow-hidden bg-[#F4F5F1] px-6 py-24 md:py-32 lg:px-12">
      <div className="mx-auto max-w-[1440px]">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75 }}
          className="mb-20 flex flex-col justify-between gap-8 lg:flex-row lg:items-end"
        >
          <div className="max-w-3xl">
            <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-[#4D867F]">
              <span className="h-px w-9 bg-[#4D867F]" />
              Getting Started
            </p>

            <h2 className="text-4xl font-black uppercase leading-[1.02] tracking-tight text-[#172522] md:text-6xl lg:text-7xl">
              Three Steps.
              <br />
              <span className="font-light italic text-[#4D867F]">
                One Stronger You.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-[#172522]/60">
            Getting started at BODY FORGE is simple.
            Take the first step, find your membership and get ready to train.
          </p>
        </motion.div>

        {/* PROCESS STEPS */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative grid gap-12 md:grid-cols-3 md:gap-8"
        >
          {/* CONNECTING LINE */}
          <div className="absolute left-[12%] right-[12%] top-[38px] hidden h-px bg-[#172522]/15 md:block" />

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <motion.article
                key={step.number}
                variants={reveal}
                className="group relative"
              >
                {/* ICON AND NUMBER */}
                <div className="relative mb-9 flex items-center justify-between">
                  <motion.div
                    whileHover={{ rotate: 5, scale: 1.06 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10 flex h-[76px] w-[76px] items-center justify-center border border-[#4D867F]/30 bg-[#F4F5F1] text-[#4D867F] transition-colors duration-300 group-hover:bg-[#4D867F] group-hover:text-white"
                  >
                    <Icon size={28} strokeWidth={1.5} />
                  </motion.div>

                  <span className="text-5xl font-black tracking-tight text-[#172522]/[0.07] md:text-6xl">
                    {step.number}
                  </span>
                </div>

                {/* CONTENT */}
                <div className="border-t border-[#172522]/15 pt-7">
                  <h3 className="text-2xl font-black uppercase tracking-tight text-[#172522] transition-colors duration-300 group-hover:text-[#4D867F] md:text-3xl">
                    {step.title}
                  </h3>

                  <p className="mt-4 max-w-sm text-sm leading-7 text-[#172522]/55">
                    {step.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* BOTTOM CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 flex flex-col items-start justify-between gap-6 border-t border-[#172522]/15 pt-8 sm:flex-row sm:items-center"
        >
          <div>
            <p className="text-lg font-bold text-[#172522]">
              Ready to take the first step?
            </p>
            <p className="mt-2 text-sm text-[#172522]/50">
              Talk to our team about joining BODY FORGE.
            </p>
          </div>

          <Link
            to="/contact"
            className="group inline-flex items-center gap-4 bg-[#172522] px-7 py-4 text-xs font-bold uppercase tracking-widest text-white transition-colors duration-300 hover:bg-[#4D867F]"
          >
            Enquire Now
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
