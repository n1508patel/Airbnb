import React from "react";
import { useParams, Link } from "react-router-dom";
import "./BookingConfirmation.css";

// ✅ List of stays
const listings = [
  {
    id: 1,
    name: "Luxury Beach Villa",
    location: "Goa, India",
    price: 250,
    rating: 4.8,
    nights: 3,
    image: "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg",
  },
  {
    id: 2,
    name: "Cozy Mountain Cabin",
    location: "Manali, Himachal",
    price: 180,
    rating: 4.6,
    nights: 2,
    image: "https://images.pexels.com/photos/277572/pexels-photo-277572.jpeg",
  },
  {
    id: 3,
    name: "Modern City Apartment",
    location: "Mumbai, India",
    price: 200,
    rating: 4.7,
    nights: 4,
    image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
  },
  {
    id: 4,
    name: "Traditional Heritage Home",
    location: "Jaipur, Rajasthan",
    price: 220,
    rating: 4.5,
    nights: 3,
    image: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
  },
  {
    id: 5,
    name: "Houseboat Stay",
    location: "Alleppey, Kerala",
    price: 240,
    rating: 4.9,
    nights: 2,
    image: "https://images.unsplash.com/photo-1575467677476-1b2b3e963a0c?fit=crop&w=800&q=80",
  },
  {
    id: 6,
    name: "Desert Camp Tent",
    location: "Jaisalmer, Rajasthan",
    price: 190,
    rating: 4.6,
    nights: 2,
    image: "https://images.unsplash.com/photo-1577087269339-bdd24bfb0a93?fit=crop&w=800&q=80",
  },
];

// ✅ Experiences
const experiences = [
  {
    id: 101,
    name: "Skydiving Adventure",
    location: "Dubai, UAE",
    price: 150,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?fit=crop&w=800&q=80",
  },
  {
    id: 102,
    name: "Scuba Diving",
    location: "Andaman Islands",
    price: 200,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?fit=crop&w=800&q=80",
  },
  {
    id: 103,
    name: "Desert Safari",
    location: "Dubai, UAE",
    price: 180,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?fit=crop&w=800&q=80",
  },
];

// ✅ Services
const services = [
  {
    id: 201,
    name: "Car Rental (Sedan)",
    location: "Pan India",
    price: 100,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?fit=crop&w=800",
  },
  {
    id: 202,
    name: "Personal Tour Guide",
    location: "Delhi, India",
    price: 60,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fit=crop&w=800",
  },
  {
    id: 203,
    name: "Luxury Makeup & Salon",
    location: "Mumbai, India",
    price: 120,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?fit=crop&w=800",
  },
  {
    id: 204,
    name: "Airport Pickup Service",
    location: "Goa, India",
    price: 40,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?fit=crop&w=800",
  },
];

export default function BookingConfirmation() {
  const { id } = useParams();
  const bookingId = Number(id);

  const booking =
    listings.find((item) => item.id === bookingId) ||
    experiences.find((item) => item.id === bookingId) ||
    services.find((item) => item.id === bookingId);

  if (!booking) {
    return <h2 style={{ textAlign: "center", marginTop: "50px" }}>Booking not found.</h2>;
  }

  // Mock booking details
  const checkIn = "2025-11-15";
  const checkOut = "2025-11-18";
  const guests = 2;
  const nights = booking.nights || 3;
  const total = booking.price * nights;

  return (
    <div className="booking-page">
      <h1>🎉 Booking Confirmed!</h1>
      <div className="booking-card">
        <img src={booking.image} alt={booking.name} />
        <h2>{booking.name}</h2>
        <p className="location">{booking.location}</p>
        <p className="rating">⭐ {booking.rating} / 5</p>

        <div className="details">
          <p><strong>Check-In:</strong> {checkIn}</p>
          <p><strong>Check-Out:</strong> {checkOut}</p>
          <p><strong>Guests:</strong> {guests}</p>
          <p><strong>Duration:</strong> {nights} nights</p>
        </div>

        <h3>💳 Payment Summary</h3>
        <div className="summary">
          <p>Base Price: ${booking.price} × {nights} nights</p>
          <p>Taxes & Fees: ${Math.round(booking.price * 0.1)}</p>
          <hr />
          <h4>Total: ${Math.round(total + booking.price * 0.1)}</h4>
        </div>

        <h3>Choose Payment Method</h3>
        <div className="payment-options">
          <label><input type="radio" name="payment" /> UPI (GPay / Paytm / PhonePe)</label>
          <label><input type="radio" name="payment" /> Credit / Debit Card</label>
          <label><input type="radio" name="payment" /> Net Banking</label>
          <label><input type="radio" name="payment" /> Pay on Arrival</label>
        </div>

        <button className="confirm-btn">Confirm & Pay</button>
        <Link to="/">
          <button className="back-home-btn">⬅ Back to Home</button>
        </Link>
      </div>

      {/* Related Suggestions */}
      <h2 className="related-title">You may also like</h2>
      <div className="related-grid">
        {[...listings.slice(0, 2), ...services.slice(0, 2)].map((item) => (
          <div key={item.id} className="related-card">
            <img src={item.image} alt={item.name} />
            <h4>{item.name}</h4>
            <p>{item.location}</p>
            <p>⭐ {item.rating} | ${item.price}/night</p>
            <Link to={`/booking/${item.id}`}>
              <button>Book Now</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
