export const Header = ({ isEditMode, onToggle }) => {
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
