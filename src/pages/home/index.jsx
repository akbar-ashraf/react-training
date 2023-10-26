import { AboutSection } from "../../components/about";
import { ExperienceSection } from "../../components/experience";
import { Sidebar } from "../../components/sidebar";

export const Home = () => {
  return (
    <div className="portfolioContent">
      <div className="portfolioContentLeft">
        <AboutSection />
        <ExperienceSection />
      </div>
      <Sidebar />
    </div>
  );
};
