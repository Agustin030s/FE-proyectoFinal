import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import Footer from "./components/common/Footer";
import Menu from "./components/common/Menu";
import Gallery from "./components/pages/gallery/Gallery";
import Home from "./components/pages/Home";
import "./App.css";

function App() {
  return (
    <>
      <Menu />
      <Home/>
      <Footer />
    </>
  );
}

export default App;
