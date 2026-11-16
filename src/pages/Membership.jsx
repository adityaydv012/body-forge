
import MembershipHero from "../components/MembershipHero";
import MembershipPlans from "../components/MembershipPlans";
import MembershipBenefits from "../components/MembershipBenefits";
import MembershipProcess from "../components/MembershipProcess";
import MembershipFAQ from "../components/MembershipFAQ";
import MembershipCTA from "../components/MembershipCTA";

export default function Membership() {
  return (
    <main>
      <MembershipHero />
      <MembershipPlans />
      <MembershipBenefits />
      <MembershipProcess />
      <MembershipFAQ />
      <MembershipCTA />
    </main>
  );
}
