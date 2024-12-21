import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import ShoppingCart from "./components/ShoppingCart";
import Modal from "./components/Modal";

function App() {
  const [modalContent, setModalContent] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handlePayment = () => {
    setModalContent(
      <div>
        <h3>Selecione o Método de Pagamento</h3>
        <button onClick={() => alert("Gerando código PIX...")}>PIX</button>
        <button
          onClick={() => alert("Insira ou aproxime seu cartão de crédito.")}
        >
          Cartão de Crédito
        </button>
        <button
          onClick={() => alert("Insira ou aproxime seu cartão de débito.")}
        >
          Cartão de Débito
        </button>
      </div>
    );
    setShowModal(true);
  };

  const handleLargeProduct = () => {
    setModalContent(
      <div>
        <h3>Produto Grande</h3>
        <p>
          Por favor, passe o código de barras. Um funcionário irá até o caixa de
          autoatendimento para ajudá-lo.
        </p>
      </div>
    );
    setShowModal(true);
  };

  const handleHortifruti = () => {
    setModalContent(
      <div>
        <h3>Selecione o Produto Hortifruti</h3>
        <button onClick={() => alert("Pese o produto na balança central.")}>
          Confirmar
        </button>
      </div>
    );
    setShowModal(true);
  };

  const handleManualCode = () => {
    setModalContent(
      <div>
        <h3>Digite o Código de Barras</h3>
        <input
          type="number"
          placeholder="Insira o código"
          style={{ padding: "10px", fontSize: "16px" }}
        />
        <button onClick={() => alert("Código inserido!")}>Confirmar</button>
      </div>
    );
    setShowModal(true);
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1, padding: "20px" }}>
        <Header />
        <ShoppingCart />
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <button onClick={handlePayment}>💵 Pagamento</button>
          <button onClick={handleLargeProduct}>📦 Produto Grande</button>
          <button onClick={handleHortifruti}>🥕 Produto Hortifruti</button>
          <button onClick={handleManualCode}>
            🔢 Digitar Código de Barras
          </button>
        </div>
      </div>
      {showModal && (
        <Modal content={modalContent} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
}

export default App;
