import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Header = () => {
  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [guests, setGuests] = useState(1);

  const formatDate = (date) => {
    if (!date) return "";
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const handleSearch = () => {
    alert(
      `Searching for ${location}\nCheck-in: ${formatDate(
        checkIn
      )}\nCheck-out: ${formatDate(checkOut)}\nGuests: ${guests}`
    );
  };

  return (
    <header style={{ padding: "20px", textAlign: "center" }}>
      <h1 style={{ marginBottom: "20px" }}>Airbnb</h1>

      <input
        type="text"
        placeholder="Where are you going?"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        style={{ padding: "10px", width: "150px", marginRight: "10px" }}
      />

      <DatePicker
        selected={checkIn}
        onChange={(date) => setCheckIn(date)}
        selectsStart
        startDate={checkIn}
        endDate={checkOut}
        placeholderText="Check-in"
        dateFormat="dd-MM-yyyy"
        style={{ padding: "10px", marginRight: "10px" }}
      />

      <DatePicker
        selected={checkOut}
        onChange={(date) => setCheckOut(date)}
        selectsEnd
        startDate={checkIn}
        endDate={checkOut}
        minDate={checkIn}
        placeholderText="Check-out"
        dateFormat="dd-MM-yyyy"
        style={{ padding: "10px", marginRight: "10px" }}
      />

      <input
        type="number"
        min="1"
        value={guests}
        onChange={(e) => setGuests(parseInt(e.target.value) || 1)}
        placeholder="Guests"
        style={{ padding: "10px", width: "80px", marginRight: "10px" }}
      />

      <button
        onClick={handleSearch}
        style={{
          padding: "10px 20px",
          backgroundColor: "#FF385C",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Search
      </button>
    </header>
  );
};

export default Header;
