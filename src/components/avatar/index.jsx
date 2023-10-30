import { EditIcon } from "../icons/editIcon";

export const ProfileAvatar = ({ isEditMode, pictureURL, size }) => {
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
