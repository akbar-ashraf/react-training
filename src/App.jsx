import { useState } from "react";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Home } from "./pages/home";
function App() {
  const [isEditMode, setIsEditMode] = useState(false);

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  return (
    <>
      <Header isEditMode={isEditMode} onToggle={toggleEditMode} />
      <div id="contentWrapper" className="container">
        <Home isEditMode={isEditMode}></Home>
      </div>
      <Footer />
    </>
  );
}

export default App;
