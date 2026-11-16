
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import ExploreGym from "./pages/ExploreGym";
import Membership from "./pages/Membership";
import Team from "./pages/Team";
import Gallery from "./pages/Gallery";
import JoinNow from "./pages/JoinNow";

// Placeholder content for pages still under development
const pageContent = {
  "/contact": [
    "Get In Touch",
    "Your fitness journey starts with a conversation.",
  ],
};

// Reusable placeholder page
function Placeholder({ title, description }) {
  return (
    <section className="flex min-h-[65vh] flex-col items-center justify-center bg-[#F4F5F1] px-6 text-center">
      <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#4D867F]">
        BODY FORGE
      </p>

      <h1 className="text-5xl font-black uppercase text-[#172522] md:text-7xl">
        {title}
      </h1>

      <p className="mt-6 max-w-lg leading-7 text-[#172522]/60">
        {description}
      </p>
    </section>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      {/* Scroll to top whenever the route changes */}
      <ScrollToTop />

      <Navbar />

      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* About Page */}
        <Route path="/about" element={<About />} />

        {/* Explore Our Gym Page */}
        <Route path="/explore-gym" element={<ExploreGym />} />

        {/* Membership Page */}
        <Route path="/membership" element={<Membership />} />

        {/* Our Team Page */}
        <Route path="/team" element={<Team />} />

        {/* Gallery Page */}
        <Route path="/gallery" element={<Gallery />} />

        {/* Join Now Page */}
        <Route path="/join-now" element={<JoinNow />} />

        {/* Remaining Placeholder Pages */}
        {Object.entries(pageContent).map(([path, content]) => (
          <Route
            key={path}
            path={path}
            element={
              <Placeholder
                title={content[0]}
                description={content[1]}
              />
            }
          />
        ))}

        {/* 404 Page */}
        <Route
          path="*"
          element={
            <Placeholder
              title="Page Not Found"
              description="The page you're looking for doesn't exist."
            />
          }
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
