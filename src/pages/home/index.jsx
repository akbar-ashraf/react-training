import { AboutSection } from "../../components/about";
import { ExperienceSection } from "../../components/experience";
import { Sidebar } from "../../components/sidebar";

export const Home = ({ isEditMode }) => {
  return (
    <div className="portfolioContent">
      <div className="portfolioContentLeft">
        <AboutSection isEditMode={isEditMode} />
        <ExperienceSection isEditMode={isEditMode} />
      </div>
      <Sidebar />
    </div>
  );
};
