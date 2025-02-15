import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const FruitShop = () => {
  return (
    <div className="container py-5">
      <h2 className="text-warning text-center">🍎 Welcome to the Fruit Shop</h2>
      <div className="text-center">
        <p>Browse our fresh and exotic fruits!</p>
        <Link to="/menu" className="btn btn-warning">View Menu</Link>
      </div>
    </div>
  );
};

export default FruitShop;
