import { useState } from "react";
import { AboutSection } from "../../components/about";
import { ExperienceSection } from "../../components/experience";
import { Sidebar } from "../../components/sidebar";

export const Home = () => {
  const getExperienceData =
    JSON.parse(localStorage.getItem("experienceData")) || [];
  const [experienceData, setExperienceData] = useState(getExperienceData);

  const handleExperienceData = (data) => {
    localStorage.setItem("experienceData", JSON.stringify(data));
    setExperienceData(data);
  };

  return (
    <div className="portfolioContent">
      <div className="portfolioContentLeft">
        <AboutSection experienceData={experienceData} />
        <ExperienceSection
          experienceData={experienceData}
          handleExperienceData={handleExperienceData}
        />
      </div>
      <Sidebar />
    </div>
  );
};
