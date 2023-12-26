import React from "react";
import { NavLink } from "react-router-dom";

type dark = "light" | "dark";

function Nav({
  setDarkMode,
}: {
  setDarkMode: React.Dispatch<React.SetStateAction<dark>>;
}) {
  return (
    <div className="arvaj-nav">
      <div className="checkbox-wrapper-3">
        {" "}
        <input
          type="checkbox"
          id="cbx-3"
          onChange={(e) => {
            if (e.currentTarget.checked === true) {
              setDarkMode("dark");
            } else {
              setDarkMode("light");
            }
          }}
        />
        <label htmlFor="cbx-3" className="toggle">
          {" "}
          <span> </span>{" "}
        </label>{" "}
      </div>

      <NavLink to="/" className={({ isActive }) => (isActive ? "bb" : "")}>
        All
      </NavLink>
      <NavLink to="/act" className={({ isActive }) => (isActive ? "bb" : "")}>
        Active
      </NavLink>
      <NavLink to="/com" className={({ isActive }) => (isActive ? "bb" : "")}>
        Completed
      </NavLink>
    </div>
  );
}

export default Nav;
