import { useState } from "react";

import { ProfileAvatar } from "../avatar";
import avatarImg from "../../assets/akbar-profile.png";
export const Sidebar = ({ isEditMode }) => {
  const [skills, setSkills] = useState(
    `JavaScript, React, TypeScript, HTML, CSS, TailwindCSS, Bootstrap, Responsive Web Design`
  );
  const handlerSkills = (e) => {
    setSkills(e.target.value);
  };
  return (
    <div className="portfolioContentRight cardBox">
      <ProfileAvatar
        isEditMode={isEditMode}
        pictureURL={avatarImg}
        size="200"
      />
      <h3>Akbar Ali</h3>
      <h4>Skills:</h4>
      {isEditMode ? (
        <>
          <div className="formControl">
            <textarea defaultValue={skills} onChange={handlerSkills}></textarea>
          </div>
        </>
      ) : (
        <>
          <p>{skills}</p>
        </>
      )}
    </div>
  );
};
