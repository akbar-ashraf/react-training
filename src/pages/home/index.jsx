import { useState } from "react";
import { AboutSection } from "../../components/about";
import { ExperienceSection } from "../../components/experience";
import { Sidebar } from "../../components/sidebar";

export const Home = ({ isEditMode }) => {
  const [totalExperience, setTotalExperience] = useState(10);
  return (
    <div className="portfolioContent">
      <div className="portfolioContentLeft">
        <AboutSection
          isEditMode={isEditMode}
          totalExperience={totalExperience}
        />
        <ExperienceSection
          isEditMode={isEditMode}
          setTotalExperience={setTotalExperience}
        />
      </div>
      <Sidebar isEditMode={isEditMode} />
    </div>
  );
};
