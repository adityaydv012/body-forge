
import { motion } from "motion/react";
import { ArrowUpRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    number: "01",
    name: "Monthly",
    duration: "01 Month",
    description: "A flexible way to begin your fitness journey.",
    featured: false,
    features: [
      "Gym access",
      "Strength training",
      "Cardio training",
      "Basic workout guidance",
    ],
  },
  {
    number: "02",
    name: "Quarterly",
    duration: "03 Months",
    description: "Build consistency with a focused commitment.",
    featured: true,
    features: [
      "Gym access",
      "Strength training",
      "Cardio training",
      "Workout guidance",
    ],
  },
  {
    number: "03",
    name: "Yearly",
    duration: "12 Months",
    description: "Make fitness a lasting part of your lifestyle.",
    featured: false,
    features: [
      "Gym access",
      "Strength training",
      "Cardio training",
      "Workout guidance",
    ],
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardReveal = {
  hidden: {
    opacity: 0,
    y: 45,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function MembershipPlans() {
  return (
    <section
      id="membership-plans"
      className="bg-[#E8ECE6] px-6 py-24 md:py-32 lg:px-12"
    >
      <div className="mx-auto max-w-[1440px]">

        {/* SECTION HEADING */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#4D867F]"
          >
            Choose Your Commitment
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
            className="text-4xl font-black uppercase leading-[1.05] tracking-tight text-[#172522] md:text-6xl"
          >
            Your Journey.
            <br />
            <span className="font-light italic text-[#4D867F]">
              Your Commitment.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="mx-auto mt-6 max-w-lg text-sm leading-7 text-[#172522]/60 md:text-base"
          >
            Choose a membership that fits your goals.
            Stay consistent, train with purpose and keep moving forward.
          </motion.p>
        </div>

        {/* MEMBERSHIP CARDS */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-5 md:grid-cols-3"
        >
          {plans.map((plan) => (
            <motion.article
              key={plan.number}
              variants={cardReveal}
              whileHover={{ y: -9 }}
              transition={{ duration: 0.3 }}
              className={`relative flex flex-col p-8 md:p-10 ${
                plan.featured
                  ? "bg-[#4D867F] text-white shadow-xl md:-translate-y-4"
                  : "bg-[#F8F9F5] text-[#172522]"
              }`}
            >
              {/* POPULAR LABEL */}
              {plan.featured && (
                <span className="absolute right-7 top-7 border border-white/40 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.2em]">
                  Popular Choice
                </span>
              )}

              <p
                className={`text-xs font-bold tracking-[0.25em] ${
                  plan.featured
                    ? "text-white/55"
                    : "text-[#4D867F]/70"
                }`}
              >
                {plan.number} / MEMBERSHIP
              </p>

              <h3 className="mt-10 text-3xl font-black uppercase tracking-tight md:text-4xl">
                {plan.name}
              </h3>

              <p
                className={`mt-3 text-sm leading-6 ${
                  plan.featured
                    ? "text-white/75"
                    : "text-[#172522]/55"
                }`}
              >
                {plan.description}
              </p>

              <div
                className={`my-8 border-t ${
                  plan.featured
                    ? "border-white/25"
                    : "border-[#172522]/15"
                }`}
              />

              <p
                className={`text-[10px] font-bold uppercase tracking-[0.25em] ${
                  plan.featured
                    ? "text-white/60"
                    : "text-[#4D867F]"
                }`}
              >
                Membership Duration
              </p>

              <p className="mt-3 text-4xl font-black md:text-5xl">
                {plan.duration}
              </p>

              {/* FEATURES */}
              <div className="mt-9 flex-1">
                <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em]">
                  Membership Includes
                </p>

                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm"
                    >
                      <Check
                        size={16}
                        className={
                          plan.featured
                            ? "text-white"
                            : "text-[#4D867F]"
                        }
                      />
                      <span
                        className={
                          plan.featured
                            ? "text-white/85"
                            : "text-[#172522]/65"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <Link
                to="/contact"
                className={`group mt-10 flex items-center justify-between border-t pt-6 text-xs font-bold uppercase tracking-widest ${
                  plan.featured
                    ? "border-white/30 text-white"
                    : "border-[#172522]/15 text-[#172522]"
                }`}
              >
                Enquire Now

                <ArrowUpRight
                  size={19}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </motion.article>
          ))}
        </motion.div>

        {/* BOTTOM NOTE */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center text-xs leading-6 text-[#172522]/50"
        >
          Contact BODY FORGE for membership pricing, available offers
          and detailed plan information.
        </motion.p>
      </div>
    </section>
  );
}
