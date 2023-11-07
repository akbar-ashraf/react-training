import { useContext, useMemo, useState } from "react";
import { EditModeContext } from "../../context/editModeContext";
import { calculateTotalExperience } from "../../utils";

const initialAboutText = `I am a passionate software engineer with a strong focus on front-end development. With a keen eye for design and a knack for creating user-friendly interfaces, I have been dedicated to crafting engaging web experiences that not only look great but also function seamlessly. My expertise includes using cutting-edge technologies like React, JavaScript, HTML, and CSS to build responsive and interactive applications. I thrive in collaborative environments, solving complex problems, and delivering elegant solutions that enhance the users digital journey. I am excited about the ever-evolving world of web development and am always eager to take on new challenges to stay at the forefront of the field.`;

export const AboutSection = ({ experienceData }) => {
  const isEditMode = useContext(EditModeContext);

  const [aboutText, setAboutText] = useState(
    localStorage.getItem("aboutText") || initialAboutText
  );

  const aboutTextChangeHandler = (e) => {
    const aboutTextValue = e.target.value;
    localStorage.setItem("aboutText", aboutTextValue);
    setAboutText(aboutTextValue);
  };

  const totalExperience = useMemo(() => {
    return calculateTotalExperience(experienceData);
  }, [experienceData]);

  return (
    <div className="cardBox">
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
          ></textarea>
        </div>
      ) : (
        <p>{aboutText}</p>
      )}
    </div>
  );
};
