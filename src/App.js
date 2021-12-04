import { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WebFont from "webfontloader";
import { Cart, Footer, Navbar, Payment, ProductPage, Shop, Success } from "./Components";
import { Category, Homepage } from "./Pages";

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
        <Route exact path="/" component={Homepage} />
        {/* <Route path="/login" component={Login} /> */}
        <>
          <Navbar />
          <Route path="/categories" component={Category} />
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
