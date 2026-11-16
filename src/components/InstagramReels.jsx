
import { useEffect } from "react";
import { ArrowUpRight } from "lucide-react";

const instagramUrl = "https://www.instagram.com/bodyforgelucknow/";

const reels = [
  {
    id: "DemKD8Shjqp",
    url: "https://www.instagram.com/reel/DemKD8Shjqp/",
  },
  {
    id: "DfmkTNkvhwi",
    url: "https://www.instagram.com/reel/DfmkTNkvhwi/",
  },
  {
    id: "De9UfpBxJEi",
    url: "https://www.instagram.com/reel/De9UfpBxJEi/",
  },
  {
    id: "DeHWwuUPiO3",
    url: "https://www.instagram.com/reel/DeHWwuUPiO3/",
  },
  {
    id: "Dd8QhdIvyOC",
    url: "https://www.instagram.com/p/Dd8QhdIvyOC/",
  },
];

function InstagramIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle
        cx="18"
        cy="6"
        r="1"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

export default function InstagramReels() {
  useEffect(() => {
    const scriptUrl = "https://www.instagram.com/embed.js";

    const processEmbeds = () => {
      window.instgrm?.Embeds?.process();
    };

    let script = document.querySelector(
      `script[src="${scriptUrl}"]`
    );

    if (window.instgrm?.Embeds) {
      processEmbeds();
    } else {
      if (!script) {
        script = document.createElement("script");
        script.src = scriptUrl;
        script.async = true;
        document.body.appendChild(script);
      }

      script.addEventListener("load", processEmbeds);

      return () => {
        script?.removeEventListener("load", processEmbeds);
      };
    }
  }, []);

  return (
    <section className="overflow-hidden bg-[#172522] px-5 py-24 md:px-8 md:py-32 lg:px-12">
      <div className="mx-auto max-w-[1240px]">

        {/* SECTION HEADER */}
        <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#82B5A9]" />

              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#82B5A9]">
                Follow The Movement
              </p>
            </div>

            <h2 className="text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-5xl md:text-7xl">
              Inside
              <br />
              <span className="text-[#82B5A9]">
                BODY FORGE.
              </span>
            </h2>

            <p className="mt-6 max-w-lg text-sm leading-7 text-white/55 md:text-base">
              Real workouts. Real people. Real progress.
              Experience the BODY FORGE community through our
              latest Instagram moments.
            </p>
          </div>

          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow BODY FORGE on Instagram"
            className="inline-flex items-center gap-3 self-start bg-[#4D867F] px-6 py-4 text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-white hover:text-[#172522]"
          >
            <InstagramIcon size={18} />
            Follow Us
            <ArrowUpRight size={17} />
          </a>
        </div>

        {/* INSTAGRAM CAROUSEL / DESKTOP GRID */}
        <div
          className="
            -mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto
            px-5 pb-5
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden

            sm:mx-0 sm:grid sm:grid-cols-4 sm:items-start
            sm:gap-x-7 sm:gap-y-10 sm:overflow-visible
            sm:px-0 sm:pb-0

            lg:grid-cols-6
          "
        >
          {reels.map((reel, index) => (
            <div
              key={reel.id}
              className={`
                w-[88%] min-w-[88%] shrink-0 snap-center
                overflow-hidden rounded-sm bg-white p-2 shadow-lg

                sm:w-full sm:min-w-0 sm:shrink
                sm:transition-all sm:duration-500
                sm:hover:-translate-y-1 sm:hover:shadow-2xl

                sm:col-span-2
                ${
                  index === 4
                    ? "sm:col-start-2 lg:col-start-4"
                    : ""
                }
                ${
                  index === 3
                    ? "lg:col-start-2"
                    : ""
                }
              `}
            >
              <blockquote
                className="instagram-media"
                data-instgrm-permalink={reel.url}
                data-instgrm-version="14"
                style={{
                  background: "#fff",
                  border: 0,
                  margin: 0,
                  padding: 0,
                  width: "100%",
                  minWidth: 0,
                }}
              >
                <a
                  href={reel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View this post on Instagram
                </a>
              </blockquote>
            </div>
          ))}
        </div>

        {/* MOBILE SWIPE INDICATOR */}
        <div className="mt-6 flex items-center justify-center gap-3 sm:hidden">
          <span className="h-px w-8 bg-[#82B5A9]/40" />
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/45">
            Swipe To Explore
          </p>
          <span className="h-px w-8 bg-[#82B5A9]/40" />
        </div>

        {/* BOTTOM LINE */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 sm:flex-row">
          <p className="text-xs uppercase tracking-[0.2em] text-white/45">
            Strength / Discipline / Community
          </p>

          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#82B5A9] transition hover:text-white"
          >
            Explore Instagram
            <ArrowUpRight size={16} />
          </a>
        </div>

      </div>
    </section>
  );
}
