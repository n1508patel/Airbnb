// ListingCard.js
import PropTypes from "prop-types";

function ListingCard({ listing, onSelect }) {
  const priceStyle = {
    color: listing.price > 200 ? "red" : "green",
    fontWeight: "bold",
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: 10, margin: 10, borderRadius: 5 }} onClick={() => onSelect(listing)}>
      <h3>{listing.title}</h3>
      <p>{listing.location}</p>
      <p style={priceStyle}>₹ {listing.price} / night</p>
    </div>
  );
}

ListingCard.propTypes = {
  listing: PropTypes.shape({
    title: PropTypes.string,
    location: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default ListingCard;
