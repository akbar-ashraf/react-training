import { useContext } from "react";
import { EditModeContext } from "../../context/editModeContext";
import { NavLink } from "react-router-dom";

export const Header = ({ onToggle }) => {
  const isEditMode = useContext(EditModeContext);
  return (
    <header id="header">
      <div className="container">
        <div className="navigation">
          <button className="btn btn-outline" onClick={onToggle}>
            {isEditMode ? "Save" : "Edit"}
          </button>
          <NavLink to={`signup`} className="btn">
            Sign Up
          </NavLink>
        </div>
      </div>
    </header>
  );
};
