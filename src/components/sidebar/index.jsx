import { useContext, useState } from "react";

import { EditModeContext } from "../../context/editModeContext";
import { ProfileAvatar } from "../avatar";
import avatarImg from "../../assets/akbar-profile.png";

const initialSkills = `JavaScript, React, TypeScript, HTML, CSS, TailwindCSS, Bootstrap, Responsive Web Design`;

export const Sidebar = () => {
  const isEditMode = useContext(EditModeContext);

  const [skills, setSkills] = useState(
    localStorage.getItem("skills") || initialSkills
  );

  const handleChangeSkills = (e) => {
    const skillsValue = e.target.value;
    localStorage.setItem("skills", skillsValue);
    setSkills(skillsValue);
  };

  return (
    <div className="portfolioContentRight cardBox">
      <ProfileAvatar pictureURL={avatarImg} size="200" />
      <h3>Akbar Ali</h3>
      <h4>Skills:</h4>
      {isEditMode ? (
        <div className="formControl">
          <textarea
            defaultValue={skills}
            onChange={handleChangeSkills}
          ></textarea>
        </div>
      ) : (
        <p>{skills}</p>
      )}
    </div>
  );
};
