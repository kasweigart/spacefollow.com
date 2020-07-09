import React from "react";
import RSNav from "./components/NavbarToggler";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Missions from "./components/Missions";
import Mars from "./components/Mars";
import Images from "./components/Images";
import Technology from "./components/Technology";
import IntoTheVoid from "./components/IntoTheVoid";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div>
        <RSNav />
        <div className="">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/missions">
              <Missions />
            </Route>
            <Route path="/mars">
              <Mars />
            </Route>
            <Route path="/images">
              <Images />
            </Route>
            <Route path="/technology">
              <Technology />
            </Route>
            <Route path="/into-the-void">
              <IntoTheVoid />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
