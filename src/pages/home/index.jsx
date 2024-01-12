import { useEffect, useState } from "react";
import { AboutSection } from "../../components/about";
import { ExperienceSection } from "../../components/experience";
import { Sidebar } from "../../components/sidebar";
import { Loader } from "../../components/loader";
import { getRequest } from "../../api";

export const Home = () => {
  const [experienceData, setExperienceData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const fetchExperiences = async () => {
    try {
      const response = await getRequest(
        "http://localhost:3000/api/portfolio/experience"
      );
      setExperienceData(response.data);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchExperiences();
  }, []);

  const handleExperienceData = () => {
    fetchExperiences();
    //localStorage.setItem("experienceData", JSON.stringify(data));
    //setExperienceData(data);
  };

  return (
    <div className="portfolioContent">
      <Loader isLoading={isLoading}></Loader>
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
