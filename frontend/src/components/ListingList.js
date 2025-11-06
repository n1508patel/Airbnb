// src/components/ListingList.js
import ListingCard from "./ListingCard";

export default function ListingList({ listings = [], onSelect = () => {} }) {
  return (
    <div>
      {listings.map((listing) => (
        <ListingCard key={listing.id} listing={listing} onSelect={onSelect} />
      ))}
    </div>
  );
}
