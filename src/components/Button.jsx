
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

export default function Button({
  children,
  to = "/contact",
  dark = false,
}) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.25 }}
      className="inline-block"
    >
      <Link
        to={to}
        className={`group inline-flex items-center justify-center gap-3 px-7 py-4 text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
          dark
            ? "bg-[#172522] text-white hover:bg-[#4D867F]"
            : "bg-[#4D867F] text-white hover:bg-[#172522]"
        }`}
      >
        {children}
        <ArrowUpRight
          size={17}
          className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </Link>
    </motion.div>
  );
}
