
import { motion } from "motion/react";
import { ArrowUpRight, MoveUpRight } from "lucide-react";

const machines = [
  {
    number: "01",
    name: "Chest Press",
    category: "Upper Body Strength",
    image:
      "https://www.realleader.com.mx/images/pf-1001-chest-press-shoulder-press.png",
  },
  {
    number: "02",
    name: "Shoulder Press",
    category: "Shoulder Training",
    image:
      "https://dynamofitness.com.au/cdn/shop/files/Real_Leader_Shoulder_Press.jpg?v=1758987134",
  },
  {
    number: "03",
    name: "Wide Chest Press",
    category: "Plate Loaded Series",
    image:
      "https://iprorwxhjinjlq5q.ldycdn.com/cloud/niBpnKrjRlkSpkpqojlqk/HSPRO.jpg",
  },
];

export default function EquipmentShowcase() {
  return (
    <section className="overflow-hidden bg-[#F4F5F1] px-5 py-24 sm:px-10 lg:px-16 lg:py-32">

      <div className="mx-auto max-w-[1600px]">

        {/* Section Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="h-[1px] w-10 bg-[#4D867F]" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#4D867F]">
              Premium Equipment Collection
            </span>
          </div>

          <h2 className="text-5xl font-black uppercase leading-[0.92] tracking-[-0.055em] text-[#172522] sm:text-6xl lg:text-7xl">
            Engineered For
            <br />
            <span className="text-[#4D867F]">Performance.</span>
          </h2>
        </motion.div>

        {/* REALLEADER USA FEATURE */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85 }}
          className="relative overflow-hidden bg-[#172522] text-white"
        >
          {/* Decorative Background */}
          <div className="absolute -right-20 -top-28 h-96 w-96 rounded-full border border-white/[0.07]" />
          <div className="absolute -right-5 -top-12 h-64 w-64 rounded-full border border-white/[0.07]" />

          <div className="relative grid lg:grid-cols-[0.85fr_1.15fr]">

            {/* Brand Information */}
            <div className="flex flex-col justify-between p-8 sm:p-12 lg:p-14">

              <div>
                <div className="mb-10 inline-flex items-center gap-3 border border-[#82B5A9]/40 px-4 py-2">
                  <span className="h-2 w-2 rounded-full bg-[#82B5A9]" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A6C8BE]">
                    Featured Equipment Partner
                  </span>
                </div>

                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#82B5A9]">
                  International Fitness Brand
                </p>

                <h3 className="text-5xl font-black uppercase leading-[0.88] tracking-[-0.06em] sm:text-6xl xl:text-7xl">
                  REAL
                  <br />
                  <span className="text-[#82B5A9]">LEADER</span>
                  <br />
                  <span className="text-3xl tracking-[0.12em] sm:text-4xl">
                    USA
                  </span>
                </h3>

                <p className="mt-8 max-w-md text-sm leading-8 text-white/65">
                  Bringing an international fitness equipment brand into
                  the BODY FORGE training experience. Discover equipment
                  designed around strength, movement and performance.
                </p>
              </div>

              <div className="mt-12">
                <a
                  href="https://www.realleaderfitness.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-4 border-b border-[#82B5A9] pb-3 text-xs font-bold uppercase tracking-[0.17em] text-white transition-colors hover:text-[#A6C8BE]"
                >
                  Explore RealLeader
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#4D867F] transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight size={18} />
                  </span>
                </a>
              </div>

            </div>

            {/* Machine Photography */}
            <div className="relative grid min-h-[430px] grid-cols-2 gap-2 p-3 sm:min-h-[550px] sm:p-5">

              <div className="relative col-span-2 overflow-hidden bg-[#263832]">
                <img
                  src="https://www.realleader.co.uk/cdn/shop/files/21slimm.png?v=1777309274&width=1600"
                  alt="RealLeader plate-loaded strength training machine"
                  className="h-full min-h-[280px] w-full object-contain p-5 sm:p-10"
                />

                <div className="absolute bottom-5 left-5">
                  <span className="bg-[#4D867F] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white">
                    Strength Equipment
                  </span>
                </div>
              </div>

              <div className="relative overflow-hidden bg-white">
                <img
                  src="https://www.realleader.com.mx/images/pf-1001-chest-press-shoulder-press.png"
                  alt="RealLeader dual chest and shoulder press machine"
                  className="h-full min-h-[180px] w-full object-contain p-3 sm:p-5"
                />
              </div>

              <div className="relative overflow-hidden bg-white">
                <img
                  src="https://dynamofitness.com.au/cdn/shop/files/Real_Leader_Shoulder_Press.jpg?v=1758987134"
                  alt="RealLeader shoulder press machine"
                  className="h-full min-h-[180px] w-full object-contain p-3 sm:p-5"
                />
              </div>

            </div>
          </div>

          {/* Brand Footer Strip */}
          <div className="relative flex flex-col gap-3 border-t border-white/10 px-8 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-12 lg:px-14">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/45">
              RealLeader USA × BODY FORGE
            </p>

            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A6C8BE]">
              R&D Connection — California, USA
            </p>
          </div>
        </motion.div>

        {/* Featured Machines Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10 mt-24 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"
        >
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#4D867F]">
              The Equipment Collection
            </p>

            <h3 className="text-4xl font-black uppercase tracking-[-0.05em] text-[#172522] sm:text-5xl">
              Meet The Machines.
            </h3>
          </div>

          <p className="max-w-sm text-sm leading-7 text-[#172522]/55">
            A closer look at selected machines from the RealLeader equipment
            range.
          </p>
        </motion.div>

        {/* Machine Cards */}
        <div className="grid gap-5 md:grid-cols-3">
          {machines.map((machine, index) => (
            <motion.article
              key={machine.number}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="group"
            >
              <div className="relative flex h-[310px] items-center justify-center overflow-hidden bg-white sm:h-[360px]">
                <img
                  src={machine.image}
                  alt={`RealLeader ${machine.name} machine`}
                  className="h-full w-full object-contain p-7 transition-transform duration-700 group-hover:scale-105"
                />

                <span className="absolute left-5 top-5 text-xs font-bold tracking-[0.2em] text-[#4D867F]">
                  / {machine.number}
                </span>

                <div className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#172522] text-white transition-all duration-300 group-hover:rotate-45 group-hover:bg-[#4D867F]">
                  <MoveUpRight size={18} />
                </div>
              </div>

              <div className="border-b border-[#172522]/15 py-6">
                <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#4D867F]">
                  {machine.category}
                </p>

                <h4 className="text-2xl font-black uppercase tracking-tight text-[#172522]">
                  {machine.name}
                </h4>

                <p className="mt-2 text-xs uppercase tracking-[0.15em] text-[#172522]/45">
                  RealLeader Equipment
                </p>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
