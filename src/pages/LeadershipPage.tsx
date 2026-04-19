import { Clubs } from "@/components/Clubs";
import { Volunteering } from "@/components/Volunteering";

export default function LeadershipPage() {
  return (
    <>
      <Clubs />
      <div className="section-divider" />
      <Volunteering />
    </>
  );
}
