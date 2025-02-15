import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CartProvider } from "./CartContext"; // Import CartProvider

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartProvider>  {/* Wrap your app with CartProvider */}
    <App />
  </CartProvider>
);
