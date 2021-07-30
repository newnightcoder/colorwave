import { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WebFont from "webfontloader";
import "./Components/Components";
import {
  Cart,
  Footer,
  Home,
  Login,
  Navbar,
  Payment,
  ProductPage,
  Shop,
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
          <Route path="/cart" component={Cart} />
          <Route path="/payment" component={Payment} />
          <Route path="/success" component={Success} />
          {/* <Route path="*" component={NotFound} /> */}
          <Footer />
        </>
        {/* <NavbarCart /> */}
      </Switch>
    </Router>
  );
};

export default App;
