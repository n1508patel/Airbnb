import { useState } from "react";
import PropTypes from "prop-types";

export default function ListingDetail({ listing, initialSaved = false }) {
  const [saved, setSaved] = useState(initialSaved);

  if (!listing) return null;

  const toggleSave = () => setSaved(!saved);

  return (
    <div style={{ border: "1px solid #ccc", padding: 10, margin: 10, borderRadius: 5 }}>
      <h3>{listing.title}</h3>
      <p>{listing.location} • {listing.guests || 1} guest(s)</p>
      <p>₹ {listing.price}</p>
      <button onClick={toggleSave}>{saved ? "Saved" : "Save"}</button>
    </div>
  );
}

ListingDetail.propTypes = {
  listing: PropTypes.object.isRequired,
  initialSaved: PropTypes.bool,
};
