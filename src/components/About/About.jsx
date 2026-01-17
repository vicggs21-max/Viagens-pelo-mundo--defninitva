import "./About.css";

export function About() {
  return (
    <section className="about">
      <div className="about-container">

        <div className="about-text">
          <span className="about-tag">Sobre o projeto</span>
          <h2>
            Explore o mundo através das <br />
            <span>viagens mais belas</span>
          </h2>

          <p>
            Nosso site foi criado para inspirar pessoas a descobrirem destinos
            incríveis ao redor do mundo. Aqui, cada lugar é apresentado não
            apenas como um ponto turístico, mas como uma experiência única,
            repleta de cultura, paisagens e histórias inesquecíveis.
          </p>

          <p>
            Reunimos destinos selecionados, imagens de alta qualidade e
            informações pensadas para ajudar você a planejar sua próxima
            aventura, seja ela uma viagem de descanso, exploração cultural ou
            contato com a natureza.
          </p>
        </div>

        <div className="about-cards">
          <div className="about-card">
            <h3>🌍 Destinos Selecionados</h3>
            <p>
              Apresentamos apenas lugares cuidadosamente escolhidos, valorizando
              beleza natural, cultura local e experiências autênticas.
            </p>
          </div>

          <div className="about-card">
            <h3>📸 Inspiração Visual</h3>
            <p>
              Imagens imersivas que despertam o desejo de viajar e ajudam você a
              visualizar cada destino antes mesmo de arrumar as malas.
            </p>
          </div>

          <div className="about-card">
            <h3>🧭 Guia para Viajantes</h3>
            <p>
              Informações claras e organizadas para auxiliar na escolha do
              destino ideal, desde aventuras urbanas até refúgios naturais.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
