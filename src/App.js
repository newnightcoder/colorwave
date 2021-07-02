import { useEffect, useState } from "react";
import WebFont from "webfontloader";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./Components/Components";
import {
  Home,
  Navbar,
  Shop,
  Footer,
  ProductPage,
  Cart,
  Payment,
  Login,
  Success,
  // NotFound,
  // NavbarCart,
} from "./Components/Components";
import listing from "./Commerce/commerce";

const App = () => {
  const [store, setStore] = useState([]);
  const [soundStore, setSoundStore] = useState([]);

  const getStore = async () => {
    const data = await listing();
    setStore(data);
    console.log("store!!!!", data);
  };

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Cabin:400,500,600,700"],
      },
    });
    getStore();
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <>
          <Navbar />
          <Route
            path="/shop"
            component={() => {
              return <Shop store={store} />;
            }}
          />
          <Route path="/product" component={ProductPage} />
          {/* <NavbarCart /> */}
          <Route path="/cart" component={Cart} />
          <Route path="/payment" component={Payment} />
          <Route path="/success" component={Success} />
          <Footer />
        </>
      </Switch>
      {/* <Route component={NotFound} /> */}
    </Router>
  );
};

export default App;
