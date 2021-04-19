import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Appointment from "./pages/Appointment/Appointment";
import Contact from "./pages/Contact/Contact";
import Infrastructure from "./pages/Infrastructure/Infrastructure";
import Services from "./pages/Services/Services";
import Navbar from "./components/Navbar/Navbar";

const MainRouter = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/appointment" component={Appointment} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/infrastructure" component={Infrastructure} />
        <Route exact path="/services" component={Services} />
      </Switch>
    </div>
  );
};

export default MainRouter;
