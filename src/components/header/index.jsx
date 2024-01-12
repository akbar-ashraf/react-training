import { useContext } from "react";
import { EditModeContext } from "../../context/editModeContext";
import { NavLink, useLocation } from "react-router-dom";

export const Header = ({ onToggle }) => {
  const isEditMode = useContext(EditModeContext);
  const location = useLocation();

  return (
    <header id="header">
      <div className="container">
        <div className="navigation">
          {location.pathname.includes("/signup") ||
          location.pathname.includes("/data-page") ? (
            <>
              <NavLink to={`/`} className="btn">
                Home
              </NavLink>
              <NavLink to={`data-page`} className="btn">
                Data Page
              </NavLink>
            </>
          ) : (
            <>
              <button className="btn btn-outline" onClick={onToggle}>
                {isEditMode ? "Save" : "Edit"}
              </button>
              <NavLink to={`signup`} className="btn">
                Sign Up
              </NavLink>
              <NavLink to={`data-page`} className="btn">
                Data Page
              </NavLink>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
