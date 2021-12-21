import { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WebFont from "webfontloader";
import { Navbar } from "./Components";
import { CartPage, CategoryPage, ConfirmationPage, HomePage, PaymentPage, ProductPage, ShopPage } from "./Pages";

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
        <Route exact path="/" component={HomePage} />
        <>
          <Navbar />
          <Route path="/categories" component={CategoryPage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/product" component={ProductPage} />
          <Route path="/cart" component={CartPage} />
          <Route path="/payment" component={PaymentPage} />
          <Route path="/success" component={ConfirmationPage} />
          {/* <Route path="*" component={NotFound} /> */}
        </>
      </Switch>
    </Router>
  );
};

export default App;
