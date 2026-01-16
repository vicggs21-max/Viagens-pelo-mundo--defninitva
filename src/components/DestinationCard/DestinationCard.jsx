
import "./DestinationCard.css"
export function DestinationCard({ image, title, country }) {
  return (
    <div
      className="destination-card"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="card-overlay">
        <h3>{title}</h3>
        <span>{country}</span>
      </div>
    </div>
  );
}
