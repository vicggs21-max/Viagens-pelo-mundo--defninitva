import "./Header.css"
export function Header() {
  return (
    <header className="header">
      <h1>Viagens pelo mundo</h1>

      <nav>
        <a href="#">Home</a>
        <a href="#">Destinos</a>
        <a href="#">Sobre</a>
        <a href="#">Contato</a>
      </nav>
    </header>
  );
}
