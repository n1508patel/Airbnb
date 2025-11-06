import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Experience.css";

const experiences = [
  {
    id: 101,
    title: "Skydiving Adventure",
    location: "Goa",
    price: "₹8,000/person",
    rating: 4.9,
    description: "Feel the thrill of freefall from 15,000 feet above the ground.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?fit=crop&w=800&q=80",
  },
  {
    id: 102,
    title: "Mountain Hiking",
    location: "Manali",
    price: "₹4,500/person",
    rating: 4.7,
    description: "Explore scenic trails and enjoy nature’s beauty.",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?fit=crop&w=800&q=80",
  },
  {
    id: 103,
    title: "Scuba Diving",
    location: "Andaman Islands",
    price: "₹10,000/person",
    rating: 4.8,
    description: "Discover colorful marine life deep under the sea.",
    image:
      "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?fit=crop&w=800&q=80",
  },
  {
    id: 104,
    title: "Desert Safari",
    location: "Jaisalmer",
    price: "₹6,500/person",
    rating: 4.6,
    description: "Ride across the golden dunes and watch the sunset.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?fit=crop&w=800&q=80",
  },
  {
    id: 105,
    title: "Camping Under Stars",
    location: "Rishikesh",
    price: "₹3,200/person",
    rating: 4.5,
    description: "Spend a peaceful night camping beside the river.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?fit=crop&w=800&q=80",
  },
];

function Experience() {
  const [search, setSearch] = useState("");

  const filteredExperiences = experiences.filter(
    (exp) =>
      exp.title.toLowerCase().includes(search.toLowerCase()) ||
      exp.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="experience-container">
      <h1 className="experience-title">Unforgettable Experiences</h1>
      <p className="experience-subtitle">
        Adventure, relaxation, or culture — find your perfect experience.
      </p>

      {/* Search bar */}
      <div className="exp-search">
        <input
          type="text"
          placeholder="Search by title or location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Cards */}
      <div className="exp-grid">
        {filteredExperiences.length > 0 ? (
          filteredExperiences.map((exp) => (
            <div key={exp.id} className="exp-card">
              <img src={exp.image} alt={exp.title} className="exp-img" />
              <div className="exp-details">
                <h3>{exp.title}</h3>
                <p className="exp-location">{exp.location}</p>
                <p className="exp-desc">{exp.description}</p>
                <div className="exp-info">
                  <span className="exp-price">{exp.price}</span>
                  <span className="exp-rating">⭐ {exp.rating}</span>
                </div>
                <Link to={`/booking/${exp.id}`}>
                  <button className="exp-btn">Book Now</button>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="no-results">No experiences found for “{search}”</p>
        )}
      </div>
    </div>
  );
}

export default Experience;
