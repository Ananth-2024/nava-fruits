import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import p1 from "./Image/Dragon11.jpeg";
import p2 from "./Image/Kiwi12.jpeg";
import p3 from "./Image/Mangosteen13.jpeg";
import p4 from "./Image/Avocado14.jpeg";
import p5 from "./Image/Rambuton15.jpeg";
import p6 from "./Image/PassionFruit16.jpeg";
import p7 from "./Image/Blueberries17.jpeg";
import p8 from "./Image/Persimmon18.jpeg";

const fruitsList = [
  { id: 1, name: "Dragon", description: "Boosts immunity, aids digestion, hydrates, and supports heart health.", price: "₹210", image: p1 },
  { id: 2, name: "Kiwi", description: "Kiwi boosts immunity, aids digestion, and supports heart health with vitamin C, fiber, and antioxidants.", price: "₹380", image: p2 },
  { id: 3, name: "Mangosteen", description: "Rich in antioxidants, boosts immunity, supports digestion, and promotes healthy skin.", price: "₹700", image: p3 },
  { id: 4, name: "Avocado", description: "Rich in healthy fats, fiber, and vitamins for heart, skin, and brain health.", price: "₹254", image: p4 },
  { id: 5, name: "Rambutan", description: "Rich in vitamin C, antioxidants, and fiber, rambutan boosts immunity, aids digestion, and promotes healthy skin.", price: "₹400", image: p5 },
  { id: 6, name: "Passion Fruit", description: "Rich in antioxidants, fiber, and vitamin C, boosting immunity and digestion.", price: "₹440", image: p6 },
  { id: 7, name: "Blueberries", description: "Rich in antioxidants, blueberries boost brain health, immunity, and heart health.", price: "₹1656", image: p7 },
  { id: 8, name: "Persimmon", description: "Rich in fiber, vitamins A & C, boosts immunity, aids digestion, and supports heart health.", price: "₹700", image: p8 },
];

const Menu = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center text-warning mb-4">🍎 Fresh Fruits Menu</h2>
      <hr />
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {fruitsList.map((fruit) => (
          <FruitCard key={fruit.id} fruit={fruit} />
        ))}
      </div>
    </div>
  );
};

const FruitCard = ({ fruit }) => (
  <div className="col">
    <div className="card h-100 shadow-sm rounded d-flex flex-column">
      <img src={fruit.image} className="card-img-top img-fluid" alt={fruit.name} style={{ height: "200px", objectFit: "cover" }} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-warning">{fruit.name}</h5>
        <p className="card-text text-muted flex-grow-1">{fruit.description}</p>
        <div className="d-flex justify-content-between align-items-center mt-auto">
          <div className="text-end">
            <span className="fw-bold text-success">{fruit.price}</span>
            <small className="text-muted ms-1">/ 1kg</small>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Menu;
