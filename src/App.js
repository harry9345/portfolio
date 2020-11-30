import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";

import Footer from "./components/Footer.js";
import NavBar from "./components/NavBar.js";
import HomePage from "./pages/HomePage.js";
import AboutPage from "./pages/AboutPage.js";
import ContactPage from "./pages/ContactPage.js";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Hossein Rajabi",
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Contact", path: "/contact" },
      ],
      home: {
        title: "Be Relentless",
        subtitle: "Project That Make a Diffrence",
        text: "check out my project below",
      },
      about: {
        title: "About Me",
      },
      contact: {
        title: "Lets Talk",
      },
    };
  }
  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <NavBar />
          <Route
            path="/"
            exact
            render={() => (
              <HomePage
                title={this.state.home.title}
                subtitle={this.state.home.subtitle}
                text={this.state.home.text}
              />
            )}
          />
          <Route
            path="/about"
            render={() => <AboutPage title={this.state.about.title} />}
          />
          <Route
            path="/contact"
            render={() => <ContactPage title={this.state.contact.title} />}
          />
          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
