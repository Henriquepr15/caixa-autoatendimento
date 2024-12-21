import React from "react";

const ShoppingCart = ({ items = [] }) => {
  const total = items.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  return (
    <div style={cartStyle}>
      <h2>Itens no Carrinho</h2>
      {items.map((item) => (
        <div key={item.id} style={itemRowStyle}>
          <span>{item.name}</span>
          <span>
            {item.quantity} x R${item.price.toFixed(2)}
          </span>
        </div>
      ))}
      <h3>Total: R${total.toFixed(2)}</h3>
    </div>
  );
};

const cartStyle = {
  backgroundColor: "#fff",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
};

const itemRowStyle = {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "10px",
};

export default ShoppingCart;
