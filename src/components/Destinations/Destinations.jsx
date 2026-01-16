import { DestinationCard } from "../DestinationCard/DestinationCard";
import "./Destinations.css"

export function Destinations() {
  return (
    <section className="destinations">
      <h2>Destinos Populares</h2>

      <div className="destinations-grid">
        <DestinationCard
          image="../../assets/images/countries/paris.png"
          title="Paris"
          country="França"
        />

        <DestinationCard
          image="/images/bali.jpg"
          title="Bali"
          country="Indonésia"
        />

        <DestinationCard
          image="/images/rome.jpg"
          title="Roma"
          country="Itália"
        />
        <DestinationCard
          image="/images/rome.jpg"
          title="Roma"
          country="Itália"
        />
        <DestinationCard
          image="/images/rome.jpg"
          title="Roma"
          country="Itália"
        />
        <DestinationCard
          image="/images/rome.jpg"
          title="Roma"
          country="Itália"
        />
      </div>
    </section>
  );
}
