import { ProfileAvatar } from "../avatar";
import avatarImg from "../../assets/akbar-profile.png";
export const Sidebar = () => {
  return (
    <div className="portfolioContentRight cardBox">
      <ProfileAvatar pictureURL={avatarImg} size="200" />
      <h3>Akbar Ali</h3>
      <h4>Skills:</h4>
      <p>
        JavaScript, React, TypeScript, HTML, CSS, TailwindCSS, Bootstrap,
        Responsive Web Design
      </p>
    </div>
  );
};
