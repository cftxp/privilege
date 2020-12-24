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
        This site in: <a href="https://privilege.php.csf.codes" className="App-link">PHP</a> | <a href="https://privilege.django.csf.codes" className="App-link">Django</a>.
      </footer>
    );
  }
}

export default Footer;
