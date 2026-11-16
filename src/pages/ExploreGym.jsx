
import EquipmentShowcase from "../components/EquipmentShowcase";
import ExploreGymCTA from "../components/ExploreGymCTA";
import ExploreGymHero from "../components/ExploreGymHero";
import GymExperience from "../components/GymExperience";
import GymFacilities from "../components/GymFacilities";
import GymGallery from "../components/GymGallery";
import TrainingZones from "../components/TrainingZones";

export default function ExploreGym() {
  return (
    <main>
      <ExploreGymHero />
      <GymExperience/>
      <TrainingZones/>
      <EquipmentShowcase/>
     <GymGallery/>
     <ExploreGymCTA/>
    </main>
  );
}
