import React, { Component } from "react";

class Details extends Component {
  render() {
    let bool =
      this.props.race === "White" &&
      this.props.indigenous === "First Nations" &&
      this.props.enslaved === "Black" &&
      this.props.othered === "East Asian";
    let first = bool
      ? // If the race, indigenous, enslaved and othered properties
        // are set to the default stated in the bool variable, output:
        "But everything you read below is the reality of the global paradigm, as white supremacy is our shared global reality."
      : // Otherwise...
        `But everything you read below is simply speculation in the case that ${
          this.props.race
        } supremacy was our reality.  However, ${
          this.props.race
        } supremacy is not our reality, Black, Indigenous, and People of color (BIPOC) are not privileged for their melanin or non-European characteristics.`;

    let second =
      this.props.race === "White"
        ? // If the race property is "White"...
          `${
            this.props.race
          } people are the only racial group that is privileged in modern society solely due to their physical features.  This is true because of the following reasons:`
        : // Otherwise...
          `If ${
            this.props.race
          } people had privilege for being $current, the following would have to be the case and reality:`;
    return (
      <article className="article">
        <h2>Details</h2>
        <p>
          {this.props.race} people currently have privilege in this thought
          experiment.
        </p>
        <p>{first}</p>
        <p>{second}</p>
      </article>
    );
  }
}

export default Details;
