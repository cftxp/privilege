import React from "react";

// Import the Year component that shows the current year:
import Year from "./Year";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        Created &amp; Designed by{" "}
        <a href="https://www.chrisfornesa.com" className="App-link">
          Chris Fornesa
        </a>{" "}
        and{" "}
        <a href="https://wokeus.com" className="App-link">
          Woke Us Designs
        </a>{" "}
        &copy; <Year />. ||{" "}
        <a href="https://privilege.php.chrisfornesa.com" className="App-link">
          This site in PHP
        </a>
        .
      </footer>
    );
  }
}

export default Footer;
