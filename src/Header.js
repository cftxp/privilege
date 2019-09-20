import React, { Component } from "react";

// Header Components:
import Form from "./Form";

import Logo from "./img/logo.png";

class Header extends Component {
  constructor() {
    super();
    this.selectedNumber = this.selectedNumber.bind(this);
  }

  // Take the event of the called object as an argument:
  selectedNumber = e => {
    let num; // Set a num variable

    // If the target is a reference to...
    switch (e.target) {
      case this.one:
        num = 1;
        break;
      case this.two:
        num = 2;
        break;
      case this.three:
        num = 3;
        break;
      default:
        num = 1;
    }

    // Then call selectedNumber with the argument of num:
    this.props.selectedNumber(num);
  };

  render() {
    return (
      <header>
        <span id="heading">
          <img
            src={Logo}
            alt="The logo for Woke Us Designs, the home of the Racial Privilege Hypothetical."
            id="logo"
          />
          <h1>Racial Privilege Hypothetical</h1>
        </span>
        <hr />
        <p>
          The dynamics of race are much more complex and nuanced than what
          search engines or Dictionary.com could fathom.
        </p>
        <hr />
        <h2>Choose a Race/Ethnicity</h2>
        <p>
          The following is my best attempt to concoct a thought experiment to
          express what would have to be the case for have non-white privilege
          (of a specified non-white racial/ethnic group) in the same context
          that white privilege and supremacy exists today.
        </p>
        {/* The form component inherits all header properties: */}
        <Form
          race={this.props.race}
          changeRace={this.props.changeRace}
          indigenous={this.props.indigenous}
          changeIndigenous={this.props.changeIndigenous}
          enslaved={this.props.enslaved}
          changeEnslaved={this.props.changeEnslaved}
          othered={this.props.othered}
          changeOthered={this.props.changeOthered}
          newWorld={this.props.newWorld}
          homeland={this.props.homeland}
          religion={this.props.religion}
        />
        <hr />
        <nav>
          <ul>
            {/*
              For each list item, value = Selected state
              and selectedNumber is called on the targeted
              item on each click event
            */}
            <li
              ref={ref => (this.one = ref)}
              value={1}
              onClick={this.selectedNumber}
            >
              Overview
            </li>
            <li
              ref={ref => (this.two = ref)}
              value={2}
              onClick={this.selectedNumber}
            >
              Colonialism
            </li>
            <li
              ref={ref => (this.three = ref)}
              value={3}
              onClick={this.selectedNumber}
            >
              Postcolonialism
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
