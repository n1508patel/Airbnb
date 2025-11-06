import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";

const services = [
  {
    id: 1,
    category: "Travel & Stay",
    name: "Luxury Hotel Booking",
    description: "Book 5-star hotels and premium stays around the world.",
    image: "https://images.unsplash.com/photo-1560347876-aeef00ee58a1?fit=crop&w=800&q=80",
    details:
      "Experience world-class luxury with top-rated amenities, city views, and exclusive concierge service.",
  },
  {
    id: 2,
    category: "Beauty & Lifestyle",
    name: "Makeup & Hair Salon",
    description: "Get top beauty and hair stylists wherever you travel.",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?fit=crop&w=800&q=80",
    details:
      "Professional stylists and makeup artists available for weddings, parties, and travel looks.",
  },
  {
    id: 3,
    category: "Transport",
    name: "Car & Bike Rentals",
    description: "Rent vehicles at affordable prices for city or travel rides.",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?fit=crop&w=800&q=80",
    details:
      "Choose from luxury cars, SUVs, or bikes. Drive anywhere with flexible rental durations.",
  },
  {
    id: 4,
    category: "Tours & Adventures",
    name: "Guided Tours",
    description: "Enjoy private guided tours for top attractions and cities.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?fit=crop&w=800&q=80",
    details:
      "Join our expert-led city tours and discover hidden gems with cultural stories and local food stops.",
  },
];

function Services() {
  return (
    <div className="services-wrapper">
      <div className="services-header">
        <h1>Our Premium Services</h1>
        <p>Explore travel, beauty, and lifestyle services at your fingertips.</p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <div className="service-card" key={service.id}>
            <div className="service-image-container">
              <img src={service.image} alt={service.name} />
              <span className="service-category">{service.category}</span>
            </div>
            <div className="service-details">
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <Link to={`/services/${service.id}`}>
                <button className="service-btn">Learn More</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
