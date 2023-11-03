import { useContext } from "react";
import { EditModeContext } from "../../context/editModeContext";

export const Header = ({ onToggle }) => {
  const isEditMode = useContext(EditModeContext);
  return (
    <header id="header">
      <div className="container">
        <div className="navigation">
          <button className="btn btn-outline" onClick={onToggle}>
            {isEditMode ? "Save" : "Edit"}
          </button>
        </div>
      </div>
    </header>
  );
};
