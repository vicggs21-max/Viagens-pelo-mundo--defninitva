import { DestinationCard } from "../DestinationCard/DestinationCard";
import "./Destinations.css"
import parisImg from "../../assets/images/countries/paris.png";
import baliImg from "../../assets/images/countries/bali.png";
import romaImg from "../../assets/images/countries/roma.png";
import portugalImg from "../../assets/images/countries/portugal.png";

export function Destinations() {
  return (
    <section className="destinations">
      <h2>Destinos Populares</h2>

      <div className="destinations-grid">
        <DestinationCard
          image={parisImg}
          title="Paris"
          country="França"
        />

        <DestinationCard
          image={baliImg}
          title="Bali"
          country="Indonésia"
        />

        <DestinationCard
          image={romaImg}
          title="Roma"
          country="Itália"
        />
        <DestinationCard
          image={portugalImg}
          title="Roma"
          country="Itália"
        />
  
      </div>
    </section>
  );
}
