
// import { useEffect, useState } from "react";
// import { AnimatePresence, motion } from "motion/react";

// export default function OpeningAnimation() {
//   const [visible, setVisible] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => setVisible(false), 3200);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <AnimatePresence>
//       {visible && (
//         <motion.div
//           className="fixed inset-0 z-[99999] overflow-hidden bg-[#101916]"
//           exit={{
//             opacity: 0,
//             transition: { duration: 0.65, ease: "easeInOut" },
//           }}
//         >
//           {/* Cinematic background */}
//           <div className="absolute inset-0">
//             <img
//               src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2200&q=90"
//               alt=""
//               className="h-full w-full scale-110 object-cover opacity-35"
//             />

//             <div className="absolute inset-0 bg-[#101916]/65" />
//             <div className="absolute inset-0 bg-gradient-to-t from-[#101916] via-transparent to-[#101916]/60" />
//           </div>

//           {/* Atmospheric teal light */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.5 }}
//             animate={{ opacity: 0.25, scale: 1.4 }}
//             transition={{ duration: 2.5 }}
//             className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4D867F] blur-[150px]"
//           />

//           {/* Top details */}
//           <div className="absolute left-6 right-6 top-7 z-20 flex justify-between md:left-12 md:right-12">
//             <span className="text-[9px] font-semibold uppercase tracking-[0.35em] text-white/50">
//               BODY FORGE / LUCKNOW
//             </span>
//             <span className="text-[9px] font-semibold uppercase tracking-[0.35em] text-white/50">
//               EST. FITNESS CULTURE
//             </span>
//           </div>

//           {/* Main content */}
//           <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-5">
//             {/* Actual logo */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.75, y: 25 }}
//               animate={{ opacity: 1, scale: 1, y: 0 }}
//               transition={{
//                 duration: 0.8,
//                 ease: [0.16, 1, 0.3, 1],
//               }}
//               className="mb-8"
//             >
//               <img
//                 src="/body-logo.jpg"
//                 alt="BODY FORGE"
//                 className="h-20 w-20 rounded-full object-contain md:h-24 md:w-24"
//               />
//             </motion.div>

//             {/* Main typography */}
//             <div className="overflow-hidden">
//               <motion.h1
//                 initial={{ y: "110%" }}
//                 animate={{ y: 0 }}
//                 transition={{
//                   duration: 0.85,
//                   delay: 0.25,
//                   ease: [0.16, 1, 0.3, 1],
//                 }}
//                 className="text-center text-[clamp(2.8rem,9vw,8rem)] font-black uppercase leading-[0.88] tracking-[-0.075em] text-white"
//               >
//                 NO SHORTCUTS.
//               </motion.h1>
//             </div>

//             <div className="overflow-hidden">
//               <motion.h2
//                 initial={{ y: "110%" }}
//                 animate={{ y: 0 }}
//                 transition={{
//                   duration: 0.85,
//                   delay: 0.4,
//                   ease: [0.16, 1, 0.3, 1],
//                 }}
//                 className="mt-2 text-center text-[clamp(2.8rem,9vw,8rem)] font-black uppercase leading-[0.88] tracking-[-0.075em] text-[#82B5A9]"
//               >
//                 ONLY STRENGTH.
//               </motion.h2>
//             </div>

//             <motion.p
//               initial={{ opacity: 0, letterSpacing: "0.1em" }}
//               animate={{ opacity: 1, letterSpacing: "0.38em" }}
//               transition={{ duration: 0.9, delay: 0.8 }}
//               className="mt-8 text-center text-[9px] font-bold uppercase text-white/60 md:text-xs"
//             >
//               YOUR JOURNEY STARTS HERE
//             </motion.p>

//             {/* Progress indicator */}
//             <div className="mt-12 h-[2px] w-44 overflow-hidden bg-white/20 md:w-56">
//               <motion.div
//                 initial={{ scaleX: 0 }}
//                 animate={{ scaleX: 1 }}
//                 transition={{
//                   duration: 2.1,
//                   delay: 0.3,
//                   ease: "easeInOut",
//                 }}
//                 className="h-full origin-left bg-[#82B5A9]"
//               />
//             </div>
//           </div>

//           {/* Industrial shutter panels */}
//           <motion.div
//             initial={{ x: 0 }}
//             animate={{ x: "-101%" }}
//             transition={{
//               duration: 1,
//               delay: 2.35,
//               ease: [0.76, 0, 0.24, 1],
//             }}
//             className="absolute inset-y-0 left-0 z-30 w-1/2 border-r border-[#82B5A9]/20 bg-[#172522]"
//           >
//             <div className="absolute right-5 top-1/2 h-32 w-[2px] -translate-y-1/2 bg-[#82B5A9]/50" />
//           </motion.div>

//           <motion.div
//             initial={{ x: 0 }}
//             animate={{ x: "101%" }}
//             transition={{
//               duration: 1,
//               delay: 2.35,
//               ease: [0.76, 0, 0.24, 1],
//             }}
//             className="absolute inset-y-0 right-0 z-30 w-1/2 border-l border-[#82B5A9]/20 bg-[#172522]"
//           >
//             <div className="absolute left-5 top-1/2 h-32 w-[2px] -translate-y-1/2 bg-[#82B5A9]/50" />
//           </motion.div>

//           {/* Flash sweep */}
//           <motion.div
//             initial={{ x: "-120%", opacity: 0 }}
//             animate={{
//               x: "120%",
//               opacity: [0, 0.8, 0],
//             }}
//             transition={{
//               duration: 0.65,
//               delay: 2.3,
//               ease: "easeInOut",
//             }}
//             className="absolute inset-y-0 z-40 w-1/3 skew-x-[-20deg] bg-gradient-to-r from-transparent via-[#A6C8BE]/30 to-transparent"
//           />

//           {/* Bottom brand signature */}
//           <div className="absolute bottom-7 left-6 right-6 z-20 flex items-center justify-between md:left-12 md:right-12">
//             <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/40">
//               TRAIN. EVOLVE. REPEAT.
//             </span>
//             <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#82B5A9]">
//               BF / 001
//             </span>
//           </div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }
