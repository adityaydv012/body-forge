
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Dumbbell,
  Target,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";

import SectionHeading from "../components/SectionHeading";
import Button from "../components/Button";
import InstagramReels from "../components/InstagramReels";

const facilities = [
  {
    number: "01",
    title: "Strength Training",
    description:
      "Build strength with dedicated resistance and free-weight zones.",
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=900&q=85",
  },
  {
    number: "02",
    title: "Cardio Zone",
    description:
      "Improve endurance with dedicated cardio equipment.",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=900&q=85",
  },
  {
    number: "03",
    title: "Personal Training",
    description:
      "Get guidance and structured support from fitness professionals.",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900&q=85",
  },
];

const plans = [
  {
    name: "Monthly",
    duration: "01 Month",
    description: "A flexible way to start your fitness journey.",
    featured: false,
  },
  {
    name: "Quarterly",
    duration: "03 Months",
    description:
      "Build consistency with a longer training commitment.",
    featured: true,
  },
  {
    name: "Yearly",
    duration: "12 Months",
    description:
      "Commit to long-term progress and discipline.",
    featured: false,
  },
];

const reveal = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function Home() {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="relative flex min-h-[720px] items-center overflow-hidden bg-[#172522] lg:min-h-[790px]">
        <motion.div
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center opacity-35"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=2000&q=90')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#172522] via-[#172522]/85 to-[#172522]/20" />

        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 py-28 lg:px-12">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            <motion.div
              variants={reveal}
              className="mb-8 flex items-center gap-3"
            >
              <span className="h-[2px] w-10 bg-[#82B5A9]" />
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#A6C8BE]">
                Welcome to Body Forge
              </p>
            </motion.div>

            <motion.h1
              variants={reveal}
              className="text-6xl font-black uppercase leading-[0.91] tracking-[-0.06em] text-white sm:text-7xl md:text-8xl lg:text-[112px]"
            >
              Forge Your
              <br />
              <span className="text-[#82B5A9]">Body.</span>
              <br />
              Build Your
              <br />
              Legacy.
            </motion.h1>

            <motion.p
              variants={reveal}
              className="mt-9 max-w-lg text-sm leading-7 text-white/65 md:text-base"
            >
              More than a gym. A place to challenge your limits,
              develop discipline and build a stronger version of
              yourself.
            </motion.p>

            <motion.div
              variants={reveal}
              className="mt-9 flex flex-wrap gap-4"
            >
              <Button to="/membership">
                Explore Membership
              </Button>

              <Link
                to="/explore-gym"
                className="group flex items-center gap-3 border border-white/40 px-7 py-4 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-white hover:text-[#172522]"
              >
                Explore Our Gym
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="absolute bottom-12 right-12 hidden items-center gap-5 text-white/70 lg:flex"
          >
            <span className="text-xs uppercase tracking-[0.25em]">
              Strength / Discipline / Growth
            </span>
            <span className="h-px w-20 bg-white/40" />
          </motion.div>
        </div>
      </section>

      {/* INTRO STRIP */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="overflow-hidden bg-[#4D867F] px-6 py-6 text-white"
      >
        <div className="mx-auto flex max-w-[1440px] flex-wrap justify-center gap-5 text-xs font-bold uppercase tracking-[0.2em] md:justify-between">
          {[
            "Train With Purpose",
            "Build Real Strength",
            "Stay Consistent",
            "Become Stronger",
          ].map((item, index) => (
            <motion.span
              key={item}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {item}
            </motion.span>
          ))}
        </div>
      </motion.section>

      {/* ABOUT SECTION */}
      <section className="bg-[#F4F5F1] px-6 py-24 md:py-32 lg:px-12">
        <div className="mx-auto grid max-w-[1440px] items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -55 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative"
          >
            <motion.img
              initial={{ scale: 1.12 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=1100&q=90"
              alt="Athlete training in the gym"
              className="h-[470px] w-full object-cover md:h-[600px]"
            />

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="absolute -bottom-7 -right-4 bg-[#4D867F] p-7 text-white md:right-[-28px] md:p-9"
            >
              <Dumbbell size={30} />
              <p className="mt-5 text-3xl font-black">BODY</p>
              <p className="text-3xl font-black">FORGE</p>
              <p className="mt-2 text-[10px] tracking-[0.25em]">
                BUILT THROUGH DISCIPLINE
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:pl-8"
          >
            <SectionHeading
              eyebrow="Who We Are"
              title={
                <>
                  Not Just A Gym.{" "}
                  <span className="text-[#4D867F]">
                    A Mindset.
                  </span>
                </>
              }
              description="BODY FORGE is built around the belief that real transformation starts with consistency. We create an environment where every workout has a purpose and every individual has room to grow."
            />

            <motion.div
              variants={reveal}
              className="mt-12 grid gap-7 border-t border-[#172522]/15 pt-8 sm:grid-cols-2"
            >
              <div>
                <Target className="mb-4 text-[#4D867F]" size={27} />
                <h3 className="text-lg font-bold">
                  Train With Purpose
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#172522]/55">
                  Focused training that keeps your goals in sight.
                </p>
              </div>

              <div>
                <Zap className="mb-4 text-[#4D867F]" size={27} />
                <h3 className="text-lg font-bold">
                  Progress Every Day
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#172522]/55">
                  Build better habits through consistent effort.
                </p>
              </div>
            </motion.div>

            <motion.div variants={reveal} className="mt-10">
              <Button to="/about" dark>
                Discover Our Story
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FACILITIES SECTION */}
      <section className="bg-[#172522] px-6 py-24 md:py-32 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Inside Body Forge"
              title={
                <>
                  Built For{" "}
                  <span className="text-[#82B5A9]">
                    Your Best.
                  </span>
                </>
              }
              description="Explore the spaces, equipment and training environment designed to support your fitness journey."
              light
            />

            <Link
              to="/explore-gym"
              className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[#A6C8BE] transition hover:text-white"
            >
              Explore All Facilities
              <ArrowRight size={17} />
            </Link>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          >
            {facilities.map((item) => (
              <motion.div
                key={item.number}
                variants={reveal}
                whileHover={{ y: -7 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  to="/explore-gym"
                  className="group relative block h-[430px] overflow-hidden bg-[#263833]"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover opacity-70 transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#172522] via-transparent to-transparent" />

                  <div className="absolute bottom-0 p-7 text-white md:p-9">
                    <p className="mb-4 text-xs tracking-widest text-[#A6C8BE]">
                      {item.number} / BODY FORGE
                    </p>

                    <h3 className="text-2xl font-black uppercase md:text-3xl">
                      {item.title}
                    </h3>

                    <p className="mt-3 max-w-xs text-sm leading-6 text-white/65">
                      {item.description}
                    </p>

                    <span className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#A6C8BE]">
                      Discover More
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* MEMBERSHIP SECTION */}
      <section className="bg-[#E8ECE6] px-6 py-24 md:py-32 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <div className="mx-auto">
              <SectionHeading
                eyebrow="Choose Your Commitment"
                title={
                  <>
                    Invest In{" "}
                    <span className="text-[#4D867F]">
                      Yourself.
                    </span>
                  </>
                }
                description="Find a membership duration that works with your goals and your schedule."
              />
            </div>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid gap-5 md:grid-cols-3"
          >
            {plans.map((plan) => (
              <motion.div
                key={plan.name}
                variants={reveal}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className={`p-9 md:p-11 ${
                  plan.featured
                    ? "bg-[#4D867F] text-white shadow-xl md:-translate-y-5"
                    : "bg-[#F8F9F5] text-[#172522]"
                }`}
              >
                {plan.featured && (
                  <span className="mb-7 inline-block border border-white/40 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.2em]">
                    Popular Choice
                  </span>
                )}

                <p
                  className={`text-xs font-bold uppercase tracking-[0.25em] ${
                    plan.featured
                      ? "text-white/70"
                      : "text-[#4D867F]"
                  }`}
                >
                  {plan.name}
                </p>

                <h3 className="mt-5 text-4xl font-black md:text-5xl">
                  {plan.duration}
                </h3>

                <p
                  className={`mt-5 min-h-14 text-sm leading-7 ${
                    plan.featured
                      ? "text-white/75"
                      : "text-[#172522]/60"
                  }`}
                >
                  {plan.description}
                </p>

                <Link
                  to="/membership"
                  className={`mt-9 flex items-center justify-between border-t pt-6 text-xs font-bold uppercase tracking-widest ${
                    plan.featured
                      ? "border-white/30 text-white"
                      : "border-[#172522]/15 text-[#172522]"
                  }`}
                >
                  View Plan Details
                  <ArrowUpRight size={18} />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <p className="mt-9 text-center text-xs text-[#172522]/50">
            Contact us for actual membership pricing and available offers.
          </p>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="bg-[#F4F5F1] px-6 py-24 md:py-32 lg:px-12">
        <div className="mx-auto grid max-w-[1440px] items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <SectionHeading
              eyebrow="The People Behind Your Progress"
              title={
                <>
                  Stronger{" "}
                  <span className="text-[#4D867F]">
                    Together.
                  </span>
                </>
              }
              description="Your fitness journey deserves the right guidance. Meet the team dedicated to helping you train with confidence and purpose."
            />

            <div className="mt-9">
              <Button to="/team" dark>
                Meet Our Team
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9 }}
            className="overflow-hidden"
          >
            <motion.img
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.7 }}
              src="https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=1200&q=90"
              alt="Personal training session"
              loading="lazy"
              className="h-[420px] w-full object-cover md:h-[540px]"
            />
          </motion.div>
        </div>
      </section>

      {/* INSTAGRAM REELS SECTION */}
      <InstagramReels />

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-[#4D867F] px-6 py-24 text-center text-white md:py-32">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative mx-auto max-w-4xl"
        >
          <motion.p
            variants={reveal}
            className="mb-7 text-xs font-bold uppercase tracking-[0.35em] text-white/70"
          >
            Your Transformation Starts Here
          </motion.p>

          <motion.h2
            variants={reveal}
            className="text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl md:text-8xl"
          >
            Ready To
            <br />
            Forge Your
            <br />
            <span className="text-[#172522]">Future?</span>
          </motion.h2>

          <motion.p
            variants={reveal}
            className="mx-auto mt-7 max-w-lg text-sm leading-7 text-white/75"
          >
            Take the first step towards a stronger, healthier and more
            confident you.
          </motion.p>

          <motion.div variants={reveal} className="mt-9">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 bg-[#172522] px-8 py-5 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-white hover:text-[#172522]"
            >
              Start Your Journey
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
