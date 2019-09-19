import React from "react";
import "./Form.css";

class Form extends React.Component {
  render() {
    // Render the form with the following details:
    return (
      <form name="set-privilege" action="" method="get">
        {/* Select the privileged group: */}
        <div className="form-element">
          <label htmlFor="race">Privileged Group:</label>
          {/* 
            The value is the race property and, 
            on selection, call the changeRace function
          */}
          <select
            value={this.props.race}
            onChange={this.props.changeRace}
            name="race"
          >
            <option value="White">White</option>
            <option value="East Asian">East Asian</option>
            <option value="First Nations">The People (First Nations)</option>
            <option value="Black">Black</option>
          </select>
        </div>

        <br />

        {/* Select the indigenous group: */}
        <div className="form-element">
          <label htmlFor="indigenous">Indigenous Group:</label>
          {/* 
            The value is the indigenous property and, 
            on selection, call the changeIndigenous function
          */}
          <select
            value={this.props.indigenous}
            onChange={this.props.changeIndigenous}
            name="indigenous"
          >
            <option value="First Nations">The People (First Nations)</option>
            <option value="White">White</option>
            <option value="East Asian">East Asian</option>
            <option value="Black">Black</option>
          </select>
        </div>

        <br />

        {/* Select the enslaved group: */}
        <div className="form-element">
          <label htmlFor="enslaved">Enslaved Group:</label>
          {/* 
            The value is the enslaved property and, 
            on selection, call the changeEnslaved function
          */}
          <select
            value={this.props.enslaved}
            onChange={this.props.changeEnslaved}
            name="enslaved"
          >
            <option value="Black">Black</option>
            <option value="White">White</option>
            <option value="East Asian">East Asian</option>
            <option value="First Nations">The People (First Nations)</option>
          </select>
        </div>

        <br />

        {/* Select the othered group: */}
        <div className="form-element">
          <label htmlFor="othered">Othered Group:</label>
          {/* 
            The value is the othered property and, 
            on selection, call the changeOthered function
          */}
          <select
            value={this.props.othered}
            onChange={this.props.changeOthered}
            name="othered"
          >
            <option value="East Asian">East Asian</option>
            <option value="First Nations">The People (First Nations)</option>
            <option value="Black">Black</option>
            <option value="White">White</option>
          </select>
        </div>
      </form>
    );
  }
}

export default Form;
