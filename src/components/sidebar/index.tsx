import { useContext, useEffect, useState } from "react";

import { EditModeContext } from "../../context/editModeContext";
import { ProfileAvatar } from "../avatar";
import avatarImg from "../../assets/akbar-profile.png";

import { Loader } from "../loader";

import { getRequest, updateRequest } from "../../api";

export const Sidebar = () => {
  const isEditMode = useContext(EditModeContext);
  const [isLoading, setIsLoading] = useState(false);
  const [skills, setSkills] = useState();

  const getSKills = async () => {
    try {
      const response = await getRequest(
        "http://localhost:3000/api/portfolio/skills"
      );
      setSkills(response.data[0].skills);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getSKills();
  }, []);

  const handleChangeSkills = (e) => {
    const skillsValue = e.target.value;
    setSkills(skillsValue);
  };

  const handleBlurSave = async () => {
    const skillsData = {
      _id: "65a13342323e9a91c8437ccd",
      skills: skills,
    };
    try {
      setIsLoading(true);
      await updateRequest(
        "http://localhost:3000/api/portfolio/skills",
        "65a13342323e9a91c8437ccd",
        skillsData
      );
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="portfolioContentRight cardBox">
      <Loader isLoading={isLoading}></Loader>
      <ProfileAvatar pictureURL={avatarImg} size="200" />
      <h3>Akbar Ali</h3>
      <h4>Skills:</h4>
      {isEditMode ? (
        <div className="formControl">
          <textarea
            defaultValue={skills}
            onChange={handleChangeSkills}
            onBlur={handleBlurSave}
          ></textarea>
        </div>
      ) : (
        <p>{skills}</p>
      )}
    </div>
  );
};
