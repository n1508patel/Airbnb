import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const heroImage =
  "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg";

// Added more listings
const listingsData = [
  {
    id: 1,
    name: "Luxury Beach Villa",
    location: "Goa",
    price: 12500,
    rating: 4.8,
    guests: 4,
    image: "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg",
    description: "Experience ocean views and sunsets in this luxury stay.",
  },
  {
    id: 2,
    name: "Cozy Mountain Cabin",
    location: "Manali",
    price: 8500,
    rating: 4.6,
    guests: 2,
    image: "https://images.pexels.com/photos/277572/pexels-photo-277572.jpeg",
    description: "Peaceful retreat surrounded by snow and pine trees.",
  },
  {
    id: 3,
    name: "Modern City Apartment",
    location: "Mumbai",
    price: 9500,
    rating: 4.7,
    guests: 3,
    image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
    description: "Stay close to the city center with all modern amenities.",
  },
  {
    id: 4,
    name: "Traditional Heritage Home",
    location: "Jaipur",
    price: 7800,
    rating: 4.9,
    guests: 5,
    image: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
    description: "Enjoy a royal experience with cultural interiors.",
  },
  {
    id: 5,
    name: "Lakeview Cottage",
    location: "Udaipur",
    price: 9200,
    rating: 4.8,
    guests: 4,
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    description: "Peaceful cottage by the lake with a private patio.",
  },
  {
    id: 6,
    name: "Luxury Pool Villa",
    location: "Kerala",
    price: 13800,
    rating: 4.9,
    guests: 6,
    image: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg",
    description: "Private pool, lush greenery and modern luxury amenities.",
  },
  {
    id: 7,
    name: "Hilltop Wooden Chalet",
    location: "Shimla",
    price: 8900,
    rating: 4.7,
    guests: 3,
    image: "https://images.pexels.com/photos/221457/pexels-photo-221457.jpeg",
    description: "Warm wooden chalet with scenic mountain views.",
  },
  {
    id: 8,
    name: "Desert Safari Camp",
    location: "Jaisalmer",
    price: 7500,
    rating: 4.5,
    guests: 2,
    image: "https://images.pexels.com/photos/210243/pexels-photo-210243.jpeg",
    description: "Stay under the stars in the heart of Thar Desert.",
  },
  {
    id: 9,
    name: "Penthouse Skyline View",
    location: "Bangalore",
    price: 10500,
    rating: 4.6,
    guests: 4,
    image: "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg",
    description: "Luxury penthouse with panoramic city skyline view.",
  },
  {
    id: 10,
    name: "Eco Jungle Resort",
    location: "Munnar",
    price: 9800,
    rating: 4.7,
    guests: 5,
    image: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg",
    description: "Nature resort offering peace and eco-luxury.",
  },
];

export default function Home() {
  const [location, setLocation] = useState("");
  const [guests, setGuests] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const filteredListings = listingsData.filter(
    (home) =>
      home.location.toLowerCase().includes(location.toLowerCase()) &&
      (!guests || home.guests >= Number(guests))
  );

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="hero-overlay">
          <h1 className="hero-title">Find Your Perfect Stay</h1>

          {/* Cute Search Bar */}
          <div className="cute-search-bar">
            <input
              type="text"
              placeholder="Where"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
            />
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
            />
            <input
              type="number"
              min="1"
              placeholder="Guests"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
            />
            <button>🔍 Search</button>
          </div>
        </div>
      </section>

      {/* Listings */}
      <section className="listing-section">
        <h2 className="section-title">Available Stays</h2>
        <div className="listing-grid">
          {filteredListings.length > 0 ? (
            filteredListings.map((home) => (
              <div key={home.id} className="listing-card">
                <img src={home.image} alt={home.name} />
                <div className="listing-content">
                  <h3>{home.name}</h3>
                  <p className="location">📍 {home.location}</p>
                  <p className="description">{home.description}</p>
                  <p className="guest-info">👥 Guests allowed: {home.guests}</p>

                  <div className="price-rating">
                    <span className="price">₹{home.price.toLocaleString()} / night</span>
                    <span className="rating">⭐ {home.rating}</span>
                  </div>

                  <Link to={`/booking/${home.id}`}>
                    <button className="explore-btn">Book Now</button>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="no-results">No stays found. Try changing filters!</p>
          )}
        </div>
      </section>
    </div>
  );
}
