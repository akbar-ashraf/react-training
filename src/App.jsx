import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Home } from "./pages/home";
function App() {
  return (
    <>
      <Header />
      <div id="contentWrapper" className="container">
        <Home></Home>
      </div>
      <Footer />
    </>
  );
}

export default App;
