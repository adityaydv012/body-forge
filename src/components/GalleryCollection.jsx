
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const categories = [
  "All",
  "Gym Interior",
  "Equipment",
  "Training",
  "Workout Moments",
];

const galleryItems = [
  {
    id: 1,
    category: "Gym Interior",
    title: "The Training Floor",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=85&w=1200&auto=format&fit=crop",
    size: "large",
  },
  {
    id: 2,
    category: "Equipment",
    title: "Built For Performance",
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=85&w=1000&auto=format&fit=crop",
    size: "normal",
  },
  {
    id: 3,
    category: "Training",
    title: "Strength In Motion",
    image:
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=85&w=1000&auto=format&fit=crop",
    size: "normal",
  },
  {
    id: 4,
    category: "Workout Moments",
    title: "Earn Every Rep",
    image:
      "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?q=85&w=1000&auto=format&fit=crop",
    size: "large",
  },
  {
    id: 5,
    category: "Equipment",
    title: "Details That Matter",
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=85&w=1000&auto=format&fit=crop",
    size: "normal",
  },
  {
    id: 6,
    category: "Training",
    title: "Push Your Limits",
    image:
      "https://images.unsplash.com/photo-1534368270820-9de3d8053204?q=85&w=1000&auto=format&fit=crop",
    size: "normal",
  },
];

export default function GalleryCollection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter(
          (item) => item.category === activeCategory
        );

  return (
    <section
      id="gallery-collection"
      className="bg-[#F4F5F1] px-6 py-24 md:px-12 md:py-32 lg:px-16"
    >
      <div className="mx-auto max-w-[1400px]">

        {/* Heading */}
        <div className="mb-12 flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#4D867F]"
            >
              A Visual Journal
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-4xl font-black uppercase leading-tight tracking-tight text-[#172522] md:text-6xl"
            >
              Inside The
              <br />
              <span className="text-[#4D867F]">Forge.</span>
            </motion.h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-[#172522]/55">
            From the training floor to the smallest details,
            explore the environment where every effort matters.
          </p>
        </div>

        {/* Category Filters */}
        <div className="mb-12 flex gap-3 overflow-x-auto border-b border-[#172522]/10 pb-5">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`shrink-0 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.16em] transition-all duration-300 ${
                activeCategory === category
                  ? "bg-[#4D867F] text-white"
                  : "bg-white text-[#172522]/60 hover:bg-[#172522] hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Asymmetrical Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.article
                layout
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.04,
                }}
                className={`group relative overflow-hidden bg-[#DDE5DF] ${
                  item.size === "large"
                    ? "lg:row-span-2"
                    : ""
                }`}
              >
                <div className="relative h-[390px] overflow-hidden sm:h-[350px] lg:h-full lg:min-h-[420px]">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#172522]/85 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                    <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#A6C8BE]">
                      {item.category}
                    </p>

                    <h3 className="text-2xl font-black uppercase tracking-tight text-white md:text-3xl">
                      {item.title}
                    </h3>

                    <div className="mt-5 h-px w-10 bg-[#82B5A9] transition-all duration-500 group-hover:w-full" />
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Footer Note */}
        <p className="mt-10 text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-[#172522]/40">
          BODY FORGE — A SPACE TO BUILD YOUR BEST
        </p>

      </div>
    </section>
  );
}
