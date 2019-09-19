import React from "react";

class Year extends React.Component {
  constructor() {
    super();
    this.state = {
      // Set the currentYear state as the Date object's
      // getFullYear method:
      currentYear: new Date().getFullYear()
    };
  }

  // Get the full year from the date object
  // and set it as the currentYear state:
  getYear() {
    this.setState({ currentYear: new Date().getFullYear() });
  }

  // Refresh the year as-needed:
  componentDidMount() {
    this.interval = setInterval(() => this.getYear());
  }

  // Clear this.interval on exit:
  componentWillMount() {
    clearInterval(this.interval);
  }

  render() {
    // Render the currentYear state:
    return <span>{this.state.currentYear}</span>;
  }
}

export default Year;
