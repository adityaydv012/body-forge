import AboutCTA from "../components/AboutCTA";
import AboutHero from "../components/AboutHero";
import MissionVision from "../components/MissionVision";
import OurPhilosophy from "../components/OurPhilosophy";
import OurStory from "../components/OurStory";
import WhyChooseUs from "../components/WhyChooseUs";

export default function About() {
  return (
    <main>
      <AboutHero />
      <OurStory />
      <OurPhilosophy/>
      <MissionVision/>
      <WhyChooseUs/>
      <AboutCTA/>
    </main>
  );
}