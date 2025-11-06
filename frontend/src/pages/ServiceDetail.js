import React from "react";
import { useParams, Link } from "react-router-dom";
import "./ServiceDetail.css";

const services = [
  {
    id: 1,
    category: "Travel & Stay",
    name: "Luxury Hotel Booking",
    image:
      "https://images.unsplash.com/photo-1560347876-aeef00ee58a1?fit=crop&w=1200&q=80",
    details:
      "Enjoy a world-class hotel experience with ocean views, infinity pools, and personalized services. Our luxury hotel booking ensures comfort, privacy, and unforgettable memories.",
    rating: 4.9,
    reviews: 243,
    price: "₹8,999 / night",
    location: "Goa, India",
    availability: "Available all year round",
  },
  {
    id: 2,
    category: "Beauty & Lifestyle",
    name: "Makeup & Hair Salon",
    image:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?fit=crop&w=1200&q=80",
    details:
      "Get premium beauty and hairstyling services by professional artists. Perfect for weddings, photoshoots, and special events. We use top international brands for a flawless look.",
    rating: 4.7,
    reviews: 189,
    price: "₹2,000 / session",
    location: "Mumbai, India",
    availability: "Mon - Sat, 9 AM - 7 PM",
  },
  {
    id: 3,
    category: "Transport",
    name: "Car & Bike Rentals",
    image:
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?fit=crop&w=1200&q=80",
    details:
      "Choose from a wide range of cars and bikes for self-drive or with chauffeur. Includes full insurance, GPS tracking, and flexible hourly, daily, or weekly plans.",
    rating: 4.8,
    reviews: 324,
    price: "₹1,200 / day",
    location: "Bangalore, India",
    availability: "24/7 Service Available",
  },
  {
    id: 4,
    category: "Tours & Adventures",
    name: "Guided City Tours",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?fit=crop&w=1200&q=80",
    details:
      "Discover hidden gems and local culture with our certified tour guides. Enjoy food tastings, local markets, and breathtaking sightseeing experiences.",
    rating: 4.6,
    reviews: 152,
    price: "₹3,500 / person",
    location: "Jaipur, India",
    availability: "Seasonal (Oct - March)",
  },
];

export default function ServiceDetail() {
  const { id } = useParams();
  const service = services.find((s) => s.id === Number(id));

  if (!service) {
    return <h2>Service not found.</h2>;
  }

  return (
    <div className="service-detail-container">
      <img
        src={service.image}
        alt={service.name}
        className="service-detail-image"
      />

      <div className="service-detail-info">
        <h1>{service.name}</h1>
        <h4 className="service-category-tag">{service.category}</h4>

        <div className="service-meta">
          <span>⭐ {service.rating} ({service.reviews} reviews)</span>
          <span>📍 {service.location}</span>
        </div>

        <p className="service-details-text">{service.details}</p>

        <div className="service-price">
          <strong>{service.price}</strong>
          <p className="availability">🗓 {service.availability}</p>
        </div>

        <Link to={`/booking/${service.id}`}>
          <button className="book-now-btn">Book Now</button>
        </Link>
      </div>
    </div>
  );
}
