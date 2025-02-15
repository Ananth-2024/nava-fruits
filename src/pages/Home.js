import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "./CartContext"; // ✅ This is the correct way
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

import p1 from "./Image/Amla1.jpg";
import p2 from "./Image/Guava2.jpg";
import p3 from "./Image/Mango3.jpg";
import p4 from "./Image/Pomegranates4.jpg";
import p5 from "./Image/Papaya5.jpg";
import p6 from "./Image/Banana6.jpg";
import p7 from "./Image/Jamun (Black Plum)7.jpg";
import p8 from "./Image/Watermelon8.jpg";

const Home = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    addToCart(product);
    navigate("/CartPage");
  };

  const products = [
    { id: 1, name: "Amla (Indian Gooseberry)", description: "High in Vitamin C, boosts immunity, and aids digestion.", price: "₹260", image: p1 },
    { id: 2, name: "Guava", description: "Packed with fiber, Vitamin C, and antioxidants for heart health.", price: "₹280", image: p2 },
    { id: 3, name: "Mango", description: "Rich in Vitamin A, supports eye health, and is a great energy booster.", price: "₹160", image: p3 },
    { id: 4, name: "Pomegranates", description: "Loaded with antioxidants, promotes heart health, and improves skin.", price: "₹280", image: p4 },
    { id: 5, name: "Papaya", description: "Aids digestion, rich in Vitamin C and beta-carotene.", price: "₹165", image: p5 },
    { id: 6, name: "Banana", description: "Excellent source of potassium, provides instant energy.", price: "₹100", image: p6 },
    { id: 7, name: "Jamun (Black Plum)", description: "Regulates blood sugar, great for diabetics.", price: "₹95", image: p7 },
    { id: 8, name: "Watermelon", description: "Hydrating, packed with lycopene, and good for heart health.", price: "₹120", image: p8 },
  ];

  return (
    <div>
      <div className="banner vh-100 d-flex justify-content-center align-items-center text-center text-white">
        <div>
          <h1 className="display-4 fw-bold">Welcome to Nava Fruits</h1>
          <p className="lead">"Bringing you the freshest, most flavorful fruits every day!"</p>
          <button className="btn btn-warning btn-lg" onClick={() => navigate("/menu")}>
            Explore Fruits
          </button>
        </div>
      </div>

      <div className="container py-5">
        <h2 className="text-center text-warning mb-4">Our Fruits Collection</h2>
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {products.map((product) => (
            <div className="col" key={product.id}>
              <div className="card h-100 shadow-sm rounded d-flex flex-column">
                <img src={product.image} className="card-img-top img-fluid" alt={product.name} style={{ height: "200px", objectFit: "cover" }} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title text-warning">{product.name}</h5>
                  <p className="card-text text-muted flex-grow-1">{product.description}</p>
                  <div className="d-flex justify-content-between align-items-center mt-auto">
                    <span className="fw-bold text-success">{product.price}</span>
                    <button className="btn btn-sm btn-warning" onClick={() => handleAddToCart(product)}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
