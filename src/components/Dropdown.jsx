import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./dropdown.css";

const Dropdown = ({ data }) => {
  // Extracting the list of states from the data prop
  const states = data.map((stateData) => stateData.state);

  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Select State
      </button>
      <ul className="dropdown-menu">
        {states.map((state, index) => (
          <li key={index}>
            <a className="dropdown-item" href="#">
              {state}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
