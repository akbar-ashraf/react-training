export const ProfileAvatar = ({ pictureURL, size }) => {
  return (
    <div className="profileAvatar">
      <img
        className=""
        src={pictureURL}
        alt="Profile Image"
        width={size}
        height={size}
      />
    </div>
  );
};
