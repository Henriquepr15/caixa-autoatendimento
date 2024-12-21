import React from "react";

const Header = () => {
  return (
    <header style={headerStyle}>
      <h1>Supermercado</h1>
    </header>
  );
};

const headerStyle = {
  background: "#f00",
  color: "#fff",
  textAlign: "center",
  padding: "15px",
};

export default Header;
