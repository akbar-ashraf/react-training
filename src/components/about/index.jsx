import { useState } from "react";

export const AboutSection = ({ isEditMode }) => {
  const [aboutText, setAboutText] = useState(
    `I am a passionate software engineer with a strong focus on front-end development. With a keen eye for design and a knack for creating user-friendly interfaces, I have been dedicated to crafting engaging web experiences that not only look great but also function seamlessly. My expertise includes using cutting-edge technologies like React, JavaScript, HTML, and CSS to build responsive and interactive applications. I thrive in collaborative environments, solving complex problems, and delivering elegant solutions that enhance the users digital journey. I am excited about the ever-evolving world of web development and am always eager to take on new challenges to stay at the forefront of the field.`
  );
  const handlerAboutText = (e) => {
    setAboutText(e.target.value);
  };
  return (
    <div className="cardBox">
      <h2>About</h2>
      {isEditMode ? (
        <>
          <div className="formControl">
            <textarea
              defaultValue={aboutText}
              onChange={handlerAboutText}
            ></textarea>
          </div>
        </>
      ) : (
        <>
          <p>{aboutText}</p>
        </>
      )}
    </div>
  );
};
