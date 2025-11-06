import React, { useState } from "react";
import "../App.css";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const sampleListings = [
  {
    id: 1,
    name: "Cozy Apartment in NY",
    price: 12000,
    img:" https://images.unsplash.com/photo-1600585154340-be6161a56a0c?fit=crop&w=400"
  },
  {
    id: 2,
    name: "Modern Studio in LA",
    price: 9000,
    img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?fit=crop&w=400"
  },
  {
    id: 3,
    name: "Luxury Villa in Miami",
    price: 25000,
    img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?fit=crop&w=400"
  },
  {
    id: 4,
    name: "Beach House in California",
    price: 30000,
    img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?fit=crop&w=400"
  }
];

const ListingPage = () => {
  const [listings] = useState(sampleListings);

  return (
    <div>
      <Navbar />
      <div className="listings" style={{ padding: "2rem", display: "flex", flexWrap: "wrap", gap: "1.5rem", justifyContent: "center" }}>
        {listings.map((listing) => (
          <div key={listing.id} className="card" style={{ width: "300px", border: "1px solid #ddd", borderRadius: "10px", overflow: "hidden", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
            <img src={listing.img} alt={listing.name} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
            <div className="card-content" style={{ padding: "1rem" }}>
              <h3>{listing.name}</h3>
              <p>£{listing.price} / night</p>
              <Link to="/booking-confirmation">
                <button
                  style={{
                    marginTop: "10px",
                    padding: "10px 20px",
                    backgroundColor: "#ff5a5f",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    width: "100%"
                  }}
                >
                  Book Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListingPage;
