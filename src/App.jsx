import { useState } from "react";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Home } from "./pages/home";
import { EditModeContext } from "./context/editModeContext";
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
          <Home></Home>
        </div>
        <Footer />
      </EditModeContext.Provider>
    </>
  );
}

export default App;
