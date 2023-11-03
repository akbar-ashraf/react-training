import { useContext } from "react";
import { EditIcon } from "../icons/editIcon";
import { EditModeContext } from "../../context/editModeContext";

export const ProfileAvatar = ({ pictureURL, size }) => {
  const isEditMode = useContext(EditModeContext);
  return (
    <div
      className="profileAvatar"
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <img
        className=""
        src={pictureURL}
        alt="Profile Image"
        width={size}
        height={size}
      />
      {isEditMode && (
        <div className="profileAvatarEdit">
          <span>
            <EditIcon />
          </span>
          <input type="file"></input>
        </div>
      )}
    </div>
  );
};
