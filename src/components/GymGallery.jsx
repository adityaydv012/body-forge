
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const galleryImages = [
  {
    id: "01",
    title: "The Training Floor",
    category: "THE SPACE",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1400&q=85",
    className: "md:col-span-7 md:row-span-2",
  },
  {
    id: "02",
    title: "Strength In Motion",
    category: "STRENGTH",
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1000&q=85",
    className: "md:col-span-5",
  },
  {
    id: "03",
    title: "Built Through Repetition",
    category: "TRAINING",
    image:
      "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?auto=format&fit=crop&w=1000&q=85",
    className: "md:col-span-5",
  },
  {
    id: "04",
    title: "Every Rep Matters",
    category: "THE PROCESS",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=85",
    className: "md:col-span-5",
  },
  {
    id: "05",
    title: "Find Your Strength",
    category: "THE PEOPLE",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=85",
    className: "md:col-span-7",
  },
];

export default function GymGallery() {
  return (
    <section className="overflow-hidden bg-[#F4F5F1] px-5 py-24 md:px-10 md:py-32 lg:px-16">
      <div className="mx-auto max-w-[1500px]">

        {/* SECTION HEADER */}
        <div className="mb-14 flex flex-col justify-between gap-8 md:mb-20 md:flex-row md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-[#4D867F]">
              <span className="h-px w-8 bg-[#4D867F]" />
              A Look Inside BODY FORGE
            </p>

            <h2 className="text-5xl font-black uppercase leading-[0.95] tracking-[-0.055em] text-[#172522] sm:text-6xl md:text-7xl lg:text-8xl">
              More Than
              <br />
              <span className="font-light italic text-[#4D867F]">
                Just Training.
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="max-w-sm text-sm leading-7 text-[#172522]/65 md:pb-2"
          >
            Every corner has a purpose. Every session has a story.
            Take a closer look at the space where strength is built.
          </motion.p>
        </div>

        {/* GALLERY GRID */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-5">
          {galleryImages.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.7,
                delay: (index % 3) * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`group relative min-h-[300px] overflow-hidden bg-[#172522] ${item.className} ${
                index === 0 ? "md:min-h-[650px]" : "md:min-h-[315px]"
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#101B18]/85 via-[#101B18]/10 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 text-white md:p-8">
                <div>
                  <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.25em] text-[#A6C8BE]">
                    {item.category}
                  </p>
                  <h3 className="max-w-sm text-2xl font-bold uppercase leading-tight tracking-tight md:text-3xl">
                    {item.title}
                  </h3>
                </div>

                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/40 transition-all duration-300 group-hover:border-[#82B5A9] group-hover:bg-[#4D867F]">
                  <ArrowUpRight
                    size={19}
                    strokeWidth={1.5}
                    className="transition-transform duration-300 group-hover:rotate-45"
                  />
                </span>
              </div>

              <span className="absolute right-6 top-6 text-xs font-medium tracking-widest text-white/80">
                {item.id}
              </span>
            </motion.article>
          ))}
        </div>

        {/* BOTTOM LABEL */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 flex items-center justify-between border-t border-[#172522]/15 pt-5"
        >
          <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#172522]/50">
            BODY FORGE — THE EXPERIENCE
          </p>
          <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#4D867F]">
            TRAIN. EVOLVE. REPEAT.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
