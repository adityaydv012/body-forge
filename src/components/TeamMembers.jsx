
import { motion } from "motion/react";
import { ArrowUpRight, UserRound } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "Trainer Name",
    role: "Head Trainer",
    specialty: "Add specialisation",
    number: "01",
  },
  {
    id: 2,
    name: "Trainer Name",
    role: "Fitness Trainer",
    specialty: "Add specialisation",
    number: "02",
  },
  {
    id: 3,
    name: "Trainer Name",
    role: "Fitness Trainer",
    specialty: "Add specialisation",
    number: "03",
  },
  {
    id: 4,
    name: "Trainer Name",
    role: "Fitness Trainer",
    specialty: "Add specialisation",
    number: "04",
  },
];

export default function TeamMembers() {
  return (
    <section
      id="team-members"
      className="bg-[#F4F5F1] px-6 py-24 md:px-12 md:py-32 lg:px-16"
    >
      <div className="mx-auto max-w-[1400px]">

        {/* Section Heading */}
        <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#4D867F]"
            >
              The People Behind BODY FORGE
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-4xl font-black uppercase leading-[1.05] tracking-tight text-[#172522] md:text-6xl"
            >
              Meet The
              <br />
              <span className="text-[#4D867F]">Team.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="max-w-md text-sm leading-7 text-[#172522]/60 md:text-base"
          >
            The right guidance makes every rep count.
            Meet the people who help turn consistency into progress.
          </motion.p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <motion.article
              key={member.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.65,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -7 }}
              className="group"
            >
              {/* Photo Placeholder */}
              <div className="relative aspect-[4/5] overflow-hidden bg-[#DDE5DF]">
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#DDE5DF] to-[#A6C8BE] transition-transform duration-700 group-hover:scale-105">
                  <UserRound
                    size={64}
                    strokeWidth={1}
                    className="text-[#4D867F]/50"
                  />

                  <span className="mt-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#172522]/50">
                    Add Team Photo
                  </span>
                </div>

                <div className="absolute left-5 top-5 text-xs font-bold tracking-widest text-[#172522]/60">
                  / {member.number}
                </div>

                <div className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#4D867F] text-white transition-all duration-300 group-hover:bg-[#172522]">
                  <ArrowUpRight size={19} />
                </div>
              </div>

              {/* Member Details */}
              <div className="pt-6">
                <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[#4D867F]">
                  {member.role}
                </p>

                <h3 className="text-2xl font-black uppercase tracking-tight text-[#172522]">
                  {member.name}
                </h3>

                <p className="mt-2 text-sm text-[#172522]/50">
                  {member.specialty}
                </p>

                <div className="mt-5 h-px w-full bg-[#172522]/10 transition-colors duration-300 group-hover:bg-[#4D867F]" />
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
