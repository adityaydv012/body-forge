
import { motion } from "motion/react";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}) {
  return (
    <div className="max-w-2xl">
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className={`mb-4 text-xs font-bold uppercase tracking-[0.3em] ${
          light ? "text-[#82B5A9]" : "text-[#4D867F]"
        }`}
      >
        {eyebrow}
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{
          duration: 0.75,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`text-4xl font-black uppercase leading-[1.05] tracking-tight md:text-5xl lg:text-6xl ${
          light ? "text-white" : "text-[#172522]"
        }`}
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65, delay: 0.15 }}
          className={`mt-5 text-sm leading-7 md:text-base ${
            light ? "text-white/60" : "text-[#172522]/60"
          }`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
