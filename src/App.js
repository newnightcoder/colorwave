import { useEffect } from "react";
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
  NavbarCart,
  Payment,
  Login,
  Success,
} from "./Components/Components";

const App = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Cabin:400,500,600,700"],
      },
    });
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <>
          <Navbar />
          <Route path="/shop" component={Shop} />
          <Route path="/product" component={ProductPage} />
          {/* <NavbarCart /> */}
          <Route path="/cart" component={Cart} />
          <Route path="/payment" component={Payment} />
          <Route path="/success" component={Success} />
          <Footer />
        </>
      </Switch>
    </Router>
  );
};

export default App;
