import React, { Component } from "react";
import "./Create.css";
class Checkbox extends Component {
  state = {};
  render() {
    return (
      <div className="text">
        <input
          type="text"
          name="res"
          value={this.state.res}
          placeholder="Enter your answer here"
        />
        <button>Submit</button>
      </div>
    );
  }
}

export default Checkbox;
