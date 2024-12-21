import React from "react";

const Sidebar = ({ items = [] }) => {
  return (
    <div style={sidebarStyle}>
      <h2>Itens</h2>
      {items.map((item) => (
        <div key={item.id} style={itemStyle}>
          <span>{item.name}</span>
          <span>
            {item.quantity} x R${item.price.toFixed(2)}
          </span>
        </div>
      ))}
    </div>
  );
};

const sidebarStyle = {
  width: "250px",
  backgroundColor: "#f4f4f4",
  padding: "20px",
  borderRight: "1px solid #ccc",
};

const itemStyle = {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "10px",
};

export default Sidebar;
