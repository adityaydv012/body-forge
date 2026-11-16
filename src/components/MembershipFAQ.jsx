
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "What membership plans are available?",
    answer:
      "BODY FORGE offers monthly, quarterly and yearly membership options. Contact our team for current pricing and available membership details.",
  },
  {
    question: "How can I become a member?",
    answer:
      "You can enquire through our website or contact our team directly. We'll help you understand the available options and guide you through the joining process.",
  },
  {
    question: "Can I visit the gym before joining?",
    answer:
      "Please contact our team to enquire about a gym visit and the available arrangements before purchasing a membership.",
  },
  {
    question: "Is personal training available?",
    answer:
      "Contact BODY FORGE to confirm personal training availability, trainer details and any applicable charges.",
  },
  {
    question: "Can I change my membership plan?",
    answer:
      "Membership changes depend on the applicable gym policies. Please speak with our team for details about available options.",
  },
  {
    question: "How do I know which membership is right for me?",
    answer:
      "Our team can help you understand the available membership durations so you can choose an option that suits your goals and schedule.",
  },
];

export default function MembershipFAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="overflow-hidden bg-[#F4F5F1] px-6 py-24 md:py-32 lg:px-12">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-32 lg:h-fit"
          >
            <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-[#4D867F]">
              <span className="h-px w-9 bg-[#4D867F]" />
              Got Questions?
            </p>

            <h2 className="text-4xl font-black uppercase leading-[1.02] tracking-tight text-[#172522] md:text-6xl">
              Everything
              <br />
              You Need
              <br />
              <span className="font-light italic text-[#4D867F]">
                To Know.
              </span>
            </h2>

            <p className="mt-7 max-w-sm text-sm leading-7 text-[#172522]/60">
              Have questions about joining BODY FORGE?
              Find answers to some common membership questions here.
            </p>

            <Link
              to="/contact"
              className="group mt-9 inline-flex items-center gap-4 bg-[#172522] px-7 py-4 text-xs font-bold uppercase tracking-widest text-white transition-colors duration-300 hover:bg-[#4D867F]"
            >
              Ask Us Directly
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.25em] text-[#172522]/35">
              BODY FORGE — HERE TO HELP
            </p>
          </motion.div>

          {/* FAQ ACCORDION */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8 }}
            className="border-t border-[#172522]/20"
          >
            {faqs.map((faq, index) => {
              const isOpen = activeIndex === index;

              return (
                <div
                  key={faq.question}
                  className="border-b border-[#172522]/20"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setActiveIndex(isOpen ? -1 : index)
                    }
                    aria-expanded={isOpen}
                    className="group flex w-full items-center justify-between gap-6 py-7 text-left md:py-8"
                  >
                    <div className="flex items-start gap-5">
                      <span className="pt-1 text-[10px] font-bold tracking-widest text-[#4D867F]/65">
                        0{index + 1}
                      </span>

                      <h3
                        className={`text-base font-bold leading-6 transition-colors duration-300 md:text-lg ${
                          isOpen
                            ? "text-[#4D867F]"
                            : "text-[#172522] group-hover:text-[#4D867F]"
                        }`}
                      >
                        {faq.question}
                      </h3>
                    </div>

                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex h-9 w-9 shrink-0 items-center justify-center border transition-colors duration-300 ${
                        isOpen
                          ? "border-[#4D867F] bg-[#4D867F] text-white"
                          : "border-[#172522]/20 text-[#172522]"
                      }`}
                    >
                      <Plus size={18} />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          height: {
                            duration: 0.35,
                            ease: [0.22, 1, 0.36, 1],
                          },
                          opacity: { duration: 0.25 },
                        }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-2xl pb-8 pl-10 text-sm leading-7 text-[#172522]/60 md:pl-[52px]">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
