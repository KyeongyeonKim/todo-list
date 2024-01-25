import React from "react";
import "App.css";

function Header({ children }) {
  return (
    <div>
      <div className="header">My Todo List</div>
      {children}
    </div>
  );
}

export default Header;
