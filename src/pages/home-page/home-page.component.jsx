import React from "react";
import "./home-page.styles.scss";

class HomePage extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="header">
        <div className="text-box">
          <h1 className="heading-primary">
            <span className="primary-heading">E.Z business</span>
            <span className="sub-heading">Business management get easier</span>
          </h1>
          <button type="submit" className="btn btn-white btn-animated">
            Sign In / Register
          </button>
        </div>
      </div>
    );
  }
}

export default HomePage;
