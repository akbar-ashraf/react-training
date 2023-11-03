import { useState } from "react";
import { AboutSection } from "../../components/about";
import { ExperienceSection } from "../../components/experience";
import { Sidebar } from "../../components/sidebar";

export const Home = () => {
  const [experienceData, setExperienceData] = useState([]);

  return (
    <div className="portfolioContent">
      <div className="portfolioContentLeft">
        <AboutSection experienceData={experienceData} />
        <ExperienceSection
          experienceData={experienceData}
          setExperienceData={setExperienceData}
        />
      </div>
      <Sidebar />
    </div>
  );
};
