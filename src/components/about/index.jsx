import { useContext, useMemo, useState, useEffect } from "react";
import { EditModeContext } from "../../context/editModeContext";
import { calculateTotalExperience } from "../../utils";
import { Loader } from "../loader";
import { getRequest, updateRequest } from "../../api";

export const AboutSection = ({ experienceData }) => {
  const isEditMode = useContext(EditModeContext);
  const [aboutText, setAboutText] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const aboutTextChangeHandler = (e) => {
    const aboutTextValue = e.target.value;
    setAboutText(aboutTextValue);
  };

  const getAboutText = async () => {
    try {
      setIsLoading(true);
      const response = await getRequest(
        "http://localhost:3000/api/portfolio/about"
      );
      setAboutText(response.data[0].about);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getAboutText();
  }, []);

  const handleBlurSave = async () => {
    setIsLoading(true);
    const aboutData = {
      _id: "65a50d467925c725772190eb",
      about: aboutText,
    };
    try {
      await updateRequest(
        "http://localhost:3000/api/portfolio/about",
        "65a50d467925c725772190eb",
        aboutData
      );
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  const totalExperience = useMemo(() => {
    return calculateTotalExperience(experienceData);
  }, [experienceData]);

  return (
    <div className="cardBox">
      <Loader isLoading={isLoading}></Loader>
      <div className="experienceTitle">
        <h2>About</h2>
        <div>
          {totalExperience !== 0.0 && (
            <p>Total Experience: {totalExperience} Years</p>
          )}
        </div>
      </div>
      {isEditMode ? (
        <div className="formControl">
          <textarea
            defaultValue={aboutText}
            onChange={aboutTextChangeHandler}
            onBlur={handleBlurSave}
          ></textarea>
        </div>
      ) : (
        <p>{aboutText}</p>
      )}
    </div>
  );
};
