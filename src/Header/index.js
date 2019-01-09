import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="title-shell">
          <div>
            <h1 className="title">Work List</h1>
            <h5 className="sub-title">One Day Project</h5>
          </div>
          <div>
            <h1 className="fa fa-arrow-down" />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
