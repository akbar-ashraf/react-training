import { useState } from "react";
import { AboutSection } from "../../components/about";
import { ExperienceSection } from "../../components/experience";
import { Sidebar } from "../../components/sidebar";

export const Home = ({ isEditMode }) => {
  const [experienceData, setExperienceData] = useState([]);

  return (
    <div className="portfolioContent">
      <div className="portfolioContentLeft">
        <AboutSection isEditMode={isEditMode} experienceData={experienceData} />
        <ExperienceSection
          isEditMode={isEditMode}
          experienceData={experienceData}
          setExperienceData={setExperienceData}
        />
      </div>
      <Sidebar isEditMode={isEditMode} />
    </div>
  );
};
