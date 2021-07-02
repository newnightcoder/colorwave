import "./App.css";
import "./Components/index";
import { Navbar, Products } from "./Components/index";

function App() {
  return (
    <div className="h-full w-full font-mono">
      <Navbar />
      <Products />
    </div>
  );
}

export default App;
