import React from "react";

const SearchBar = () => {
  return (
    <nav style={{ marginBottom: "30px" }} className="blue">
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input id="search" type="search" required />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons" style={{ cursor: "pointer" }}>
                search
              </i>
            </label>
            <i className="material-icons" style={{ cursor: "pointer" }}>
              close
            </i>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default SearchBar;
