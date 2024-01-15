import { useState } from "react";
import { Outlet } from "react-router-dom";

import { EditModeContext } from "./context/editModeContext";

import { Header } from "./components/header";
import { Footer } from "./components/footer";

function App() {
  const [isEditMode, setIsEditMode] = useState(false);

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  return (
    <>
      <EditModeContext.Provider value={isEditMode}>
        <Header onToggle={toggleEditMode} />
        <div id="contentWrapper" className="container">
          <Outlet />
        </div>
        <Footer />
      </EditModeContext.Provider>
    </>
  );
}

export default App;
