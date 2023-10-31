import { useState } from "react";

export const AboutSection = ({ isEditMode, totalExperience }) => {
  const [aboutText, setAboutText] = useState(
    `I am a passionate software engineer with a strong focus on front-end development. With a keen eye for design and a knack for creating user-friendly interfaces, I have been dedicated to crafting engaging web experiences that not only look great but also function seamlessly. My expertise includes using cutting-edge technologies like React, JavaScript, HTML, and CSS to build responsive and interactive applications. I thrive in collaborative environments, solving complex problems, and delivering elegant solutions that enhance the users digital journey. I am excited about the ever-evolving world of web development and am always eager to take on new challenges to stay at the forefront of the field.`
  );
  const aboutTextChangeHandler = (e) => {
    setAboutText(e.target.value);
  };
  return (
    <div className="cardBox">
      <div className="experienceTitle">
        <h2>About</h2>
        <div>
          {totalExperience != "0.00" && (
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
