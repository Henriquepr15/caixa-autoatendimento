import React from "react";

const Modal = ({ content, onClose }) => {
  return (
    <div style={modalOverlayStyle}>
      <div style={modalStyle}>
        {content}
        <button style={closeButtonStyle} onClick={onClose}>
          Fechar
        </button>
      </div>
    </div>
  );
};

// Estilos para o modal
const modalOverlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const modalStyle = {
  backgroundColor: "#fff",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
};

const closeButtonStyle = {
  marginTop: "10px",
  padding: "10px",
  backgroundColor: "red",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

export default Modal;
