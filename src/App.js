import { useEffect } from "react";
import WebFont from "webfontloader";
import "./App.css";
import "./Components/index";
import { Navbar, Products, Footer } from "./Components/index";

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Cabin:400,500,600,700"],
      },
    });
  }, []);

  return (
    <div className="h-full w-full font-cabin">
      <Navbar />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
