
import { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  Dumbbell,
  Target,
  Zap,
  CheckCircle2,
} from "lucide-react";

const fitnessGoals = [
  "Build Muscle",
  "Weight Loss",
  "Strength Training",
  "Improve Fitness",
  "General Wellness",
];

const inputClass =
  "w-full border-b border-[#172522]/15 bg-transparent px-0 py-4 text-sm text-[#172522] outline-none transition-colors placeholder:text-[#172522]/35 focus:border-[#4D867F]";

export default function JoinEnquiry() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Frontend preview only. Connect your backend before accepting enquiries.
    setSubmitted(true);
  };

  return (
    <section
      id="join-enquiry"
      className="bg-[#F4F5F1] px-6 py-24 md:px-12 md:py-32 lg:px-16"
    >
      <div className="mx-auto grid max-w-[1400px] gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">

        {/* LEFT: FORM */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#4D867F]">
              Become A Member
            </p>

            <h2 className="text-4xl font-black uppercase leading-[1.05] tracking-tight text-[#172522] md:text-6xl">
              Let's Get
              <br />
              <span className="text-[#4D867F]">You Started.</span>
            </h2>

            <p className="mt-6 max-w-lg text-sm leading-7 text-[#172522]/55">
              Tell us a little about yourself. Our team can help
              you understand the available membership options
              and take your next step.
            </p>
          </motion.div>

          {submitted ? (
            <div className="mt-12 border border-[#4D867F]/30 bg-white p-8">
              <CheckCircle2
                size={36}
                className="mb-5 text-[#4D867F]"
              />
              <h3 className="text-2xl font-black uppercase text-[#172522]">
                Form Preview Complete
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#172522]/60">
                The form interface is working, but enquiries are not
                being sent or stored yet. Connect your backend or
                enquiry service before publishing.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-6 text-xs font-bold uppercase tracking-widest text-[#4D867F] underline underline-offset-4"
              >
                Submit Another Enquiry
              </button>
            </div>
          ) : (
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-12 space-y-9"
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="join-name"
                  className="mb-1 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#172522]/55"
                >
                  Full Name *
                </label>
                <input
                  id="join-name"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  required
                  autoComplete="name"
                  className={inputClass}
                />
              </div>

              {/* Phone and Email */}
              <div className="grid gap-9 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="join-phone"
                    className="mb-1 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#172522]/55"
                  >
                    Mobile Number *
                  </label>
                  <input
                    id="join-phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter mobile number"
                    required
                    autoComplete="tel"
                    pattern="[0-9+\-\s()]{10,16}"
                    title="Enter a valid phone number"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="join-email"
                    className="mb-1 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#172522]/55"
                  >
                    Email Address
                  </label>
                  <input
                    id="join-email"
                    name="email"
                    type="email"
                    placeholder="Enter email address"
                    autoComplete="email"
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Membership */}
              <div>
                <label
                  htmlFor="join-plan"
                  className="mb-1 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#172522]/55"
                >
                  Preferred Membership *
                </label>
                <select
                  id="join-plan"
                  name="membership"
                  required
                  defaultValue=""
                  className={`${inputClass} cursor-pointer`}
                >
                  <option value="" disabled>
                    Select a membership plan
                  </option>
                  <option value="Monthly">Monthly</option>
                  <option value="Quarterly">Quarterly</option>
                  <option value="Yearly">Yearly</option>
                  <option value="Not Sure">Not Sure Yet</option>
                </select>
              </div>

              {/* Fitness Goal */}
              <div>
                <label
                  htmlFor="join-goal"
                  className="mb-1 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#172522]/55"
                >
                  Your Fitness Goal *
                </label>
                <select
                  id="join-goal"
                  name="fitnessGoal"
                  required
                  defaultValue=""
                  className={`${inputClass} cursor-pointer`}
                >
                  <option value="" disabled>
                    Select your fitness goal
                  </option>
                  {fitnessGoals.map((goal) => (
                    <option key={goal} value={goal}>
                      {goal}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="join-message"
                  className="mb-1 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#172522]/55"
                >
                  Anything You'd Like Us To Know?
                </label>
                <textarea
                  id="join-message"
                  name="message"
                  rows="3"
                  placeholder="Tell us about your fitness journey..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="group flex w-full items-center justify-between bg-[#4D867F] px-7 py-5 text-xs font-bold uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:bg-[#172522]"
              >
                Submit Enquiry
                <ArrowUpRight
                  size={19}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>

              <p className="text-xs leading-6 text-[#172522]/40">
                By submitting this form, you agree to be contacted
                regarding your membership enquiry.
              </p>
            </motion.form>
          )}
        </div>

        {/* RIGHT: MEMBERSHIP INFORMATION */}
        <motion.div
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative flex flex-col justify-between overflow-hidden bg-[#172522] p-8 text-white md:p-12 lg:p-14"
        >
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#82B5A9]">
              Why BODY FORGE
            </p>

            <h3 className="text-3xl font-black uppercase leading-tight md:text-4xl">
              Your Goals.
              <br />
              Our Environment.
              <br />
              <span className="text-[#82B5A9]">One Journey.</span>
            </h3>

            <p className="mt-6 text-sm leading-8 text-white/55">
              Build consistency, challenge your limits and work
              towards a stronger version of yourself.
            </p>

            <div className="my-12 h-px bg-white/15" />

            <div className="space-y-9">
              {[
                {
                  icon: Dumbbell,
                  title: "Train Your Way",
                  description: "Make every workout count.",
                },
                {
                  icon: Target,
                  title: "Stay Goal Focused",
                  description: "Keep your fitness goals in sight.",
                },
                {
                  icon: Zap,
                  title: "Build Consistency",
                  description: "Turn effort into a lasting habit.",
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.12 }}
                    className="flex gap-5"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#4D867F]/20 text-[#82B5A9]">
                      <Icon size={22} strokeWidth={1.5} />
                    </div>

                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wider">
                        {item.title}
                      </h4>
                      <p className="mt-2 text-sm text-white/45">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="mt-16 border-t border-white/15 pt-7">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#82B5A9]">
              BODY FORGE
            </p>
            <p className="mt-3 text-sm text-white/50">
              Stronger starts with showing up.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
