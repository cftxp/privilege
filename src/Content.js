import React, { Component } from "react";

import Header from "./Header";
import Details from "./Details";
import Overview from "./Overview";
import Colonialism from "./Colonialism";
import Postcolonialism from "./Postcolonialism";
import Footer from "./Footer";

class Content extends Component {
  constructor() {
    super();

    // Set all states for the application:
    this.state = {
      race: "White",
      indigenous: "First Nations",
      enslaved: "Black",
      othered: "East Asian",
      newWorld: "",
      homeland: "",
      religion: "",
      selected: 1
    };

    // Set the indigenous, homeland and religion states:
    this.state.newWorld = this.setLand(this.state.indigenous);
    this.state.homeland = this.setLand(this.state.race);
    this.state.religion = this.setReligion(this.state.race);

    // Bind this keyword in these functions to Content.js:
    this.changeRace = this.changeRace.bind(this);
    this.changeIndigenous = this.changeIndigenous.bind(this);
    this.changeEnslaved = this.changeEnslaved.bind(this);
    this.changeOthered = this.changeOthered.bind(this);
    this.selectedNumber = this.selectedNumber.bind(this);
  }

  // Set the race, indigenous, enslaved, and othered states
  // with the following functions:
  changeRace(current) {
    this.setState({ race: current.target.value });
  }
  changeIndigenous(current) {
    this.setState({ indigenous: current.target.value });
  }
  changeEnslaved(current) {
    this.setState({ enslaved: current.target.value });
  }
  changeOthered(current) {
    this.setState({ othered: current.target.value });
  }
  setLand(current) {
    switch (current) {
      case "Black":
        // this.setState({ current: "Africa" });
        // break;
        return "Africa";
      case "First Nations":
        // this.setState({ current: "Turtle Island" });
        // break;
        return "Turtle Island";
      case "East Asian":
        // this.setState({ current: "East Asia" });
        // break;
        return "East Asia";
      case "White":
        // this.setState({ current: "Europe" });
        // break;
        return "Europe";
      default:
        // this.setState({ current: "Turtle Island" });
        return "Unknown";
    }
  }
  setReligion(current) {
    switch (current) {
      case "Black":
        return "Traditional African faiths";
      case "First Nations":
        return "Traditional First Nations faiths";
      case "East Asian":
        return "Buddhism, Confucianism, and Shintoism";
      case "White":
        return "Christianity";
      default:
        return "Unknown";
    }
  }

  // Set the selected state to
  selectedNumber(num) {
    this.setState({ selected: num });
  }

  // Depending on the selected state, show the Overview, Colonialism,
  // or Postcolonialism component:
  showContent = (num, world, home, faith) => {
    switch (num) {
      case 1:
        return (
          <Overview
            race={this.state.race}
            indigenous={this.state.indigenous}
            enslaved={this.state.enslaved}
            othered={this.state.othered}
            newWorld={world}
            homeland={home}
            religion={faith}
          />
        );
      case 2:
        return (
          <Colonialism
            race={this.state.race}
            indigenous={this.state.indigenous}
            enslaved={this.state.enslaved}
            othered={this.state.othered}
            newWorld={world}
            homeland={home}
            religion={faith}
          />
        );
      case 3:
        return (
          <Postcolonialism
            race={this.state.race}
            indigenous={this.state.indigenous}
            enslaved={this.state.enslaved}
            othered={this.state.othered}
            newWorld={world}
            homeland={home}
            religion={faith}
          />
        );
      default:
        return (
          <Overview
            race={this.state.race}
            indigenous={this.state.indigenous}
            enslaved={this.state.enslaved}
            othered={this.state.othered}
            newWorld={this.state.newWorld}
            homeland={this.state.homeland}
            religion={this.state.religion}
          />
        );
    }
  };

  // Render new variables and the main content to be shown:
  render() {
    // Set the new world based on the indigenous state:
    let newWorld = this.setLand(this.state.indigenous);
    // Set the homeland and religion based on the race state:
    let homeland = this.setLand(this.state.race);
    let religion = this.setReligion(this.state.race);

    // A console log stating the current states and relevant variables:
    console.log(
      `Race: ${this.state.race}, Indigenous: ${
        this.state.indigenous
      }, Enslaved: ${this.state.enslaved}, Othered: ${
        this.state.othered
      }, New World: ${newWorld}, Homeland: ${homeland}, Religion: ${religion}`
    );

    // Show the content of a component based on the selected state.
    // The newWorld, homeland, and religion states determine
    // the world, home, and faith arguments:
    let mainContent = this.showContent(
      this.state.selected,
      newWorld,
      homeland,
      religion
    );

    // This component holds the header, the details,
    // the main content, and the footer:
    return (
      <div id="content">
        {/* The header component: */}
        <Header
          race={this.state.race}
          changeRace={this.changeRace}
          indigenous={this.state.indigenous}
          changeIndigenous={this.changeIndigenous}
          enslaved={this.state.enslaved}
          changeEnslaved={this.changeEnslaved}
          othered={this.state.othered}
          changeOthered={this.changeOthered}
          newWorld={newWorld}
          homeland={homeland}
          religion={religion}
          selectedNumber={this.selectedNumber}
        />
        {/* The details component: */}
        <Details
          race={this.state.race}
          indigenous={this.state.indigenous}
          enslaved={this.state.enslaved}
          othered={this.state.othered}
        />
        {/* The main component: */}
        {mainContent}
        {/* The footer component: */}
        <Footer />
      </div>
    );
  }
}

export default Content;
