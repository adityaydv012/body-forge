
import { motion } from "motion/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const reveal = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function MembershipHero() {
  return (
    <section className="relative flex min-h-[680px] items-center overflow-hidden bg-[#172522] md:min-h-[760px]">

      {/* BACKGROUND IMAGE */}
      <motion.div
        initial={{ scale: 1.14 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=2000&q=90"
          alt="Gym training environment"
          className="h-full w-full object-cover"
        />
      </motion.div>

      {/* OVERLAYS */}
      <div className="absolute inset-0 bg-[#172522]/75" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#172522] via-[#172522]/85 to-transparent" />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 py-28 lg:px-12">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-5xl"
        >
          <motion.div
            variants={reveal}
            className="mb-8 flex items-center gap-3"
          >
            <span className="h-[2px] w-10 bg-[#82B5A9]" />

            <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#A6C8BE]">
              Your Commitment Starts Here
            </p>
          </motion.div>

          <motion.h1
            variants={reveal}
            className="text-5xl font-black uppercase leading-[0.92] tracking-[-0.06em] text-white sm:text-6xl md:text-8xl lg:text-[108px]"
          >
            Invest In
            <br />
            <span className="font-light italic text-[#82B5A9]">
              Yourself.
            </span>
            <br />
            Forge Your
            <br />
            Future.
          </motion.h1>

          <motion.p
            variants={reveal}
            className="mt-9 max-w-xl text-sm leading-7 text-white/65 md:text-base"
          >
            Every transformation begins with a decision.
            Choose your membership, commit to your goals and
            start building a stronger version of yourself.
          </motion.p>

          <motion.div
            variants={reveal}
            className="mt-9 flex flex-wrap gap-4"
          >
            <Link
              to="#membership-plans"
              className="group inline-flex items-center gap-3 bg-[#4D867F] px-7 py-4 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-[#82B5A9] hover:text-[#172522]"
            >
              Explore Memberships
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 border border-white/40 px-7 py-4 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-white hover:text-[#172522]"
            >
              Talk To Us
              <ArrowUpRight size={17} />
            </Link>
          </motion.div>
        </motion.div>

        {/* BOTTOM LABEL */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-10 right-12 hidden items-center gap-5 text-white/60 lg:flex"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.25em]">
            Commitment / Consistency / Results
          </span>
          <span className="h-px w-16 bg-white/40" />
        </motion.div>

        {/* SCROLL INDICATOR */}
        <motion.a
          href="#membership-plans"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="absolute bottom-9 left-6 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#A6C8BE] lg:left-12"
        >
          Explore Plans

          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ArrowDown size={16} />
          </motion.span>
        </motion.a>
      </div>
    </section>
  );
}
