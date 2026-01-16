import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h2>TravelWorld</h2>
          <p>
            Explore o mundo através dos destinos mais incríveis e viva
            experiências inesquecíveis.
          </p>
        </div>

        <div className="footer-links">
          <h3>Navegação</h3>
          <a href="#">Home</a>
          <a href="#">Destinos</a>
          <a href="#">Sobre</a>
          <a href="#">Contato</a>
        </div>

        <div className="footer-social">
          <h3>Conecte-se</h3>
          <a href="#">Instagram</a>
          <a href="#">YouTube</a>
          <a href="#">Twitter</a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 TravelWorld. Todos os direitos reservados.</span>
      </div>
    </footer>
  );
}
