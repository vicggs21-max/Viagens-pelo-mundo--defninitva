import { NavLink } from "react-router-dom";
import "./Header.css";

export function Header() {
  return (
    <header className="header">
      <h1>Viagens pelo mundo</h1>

      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>

        <NavLink to="/destinos">
          Destinos
        </NavLink>

        <NavLink to="/#sobre">
          Sobre
        </NavLink>

        <NavLink to="/contato">
          Contato
        </NavLink>
      </nav>
    </header>
  );
}
