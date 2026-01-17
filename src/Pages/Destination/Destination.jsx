import "./Destination.css";

export function Destination() {
    return (
        <>
            <section
                className="destination-hero"
                style={{
                    backgroundImage:
                        "url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e)",
                }}
            >
                <div className="overlay"></div>

                <div className="destination-hero-content">
                    <span>Grécia</span>
                    <h1>Santorini</h1>
                    <p>
                        Um dos destinos mais icônicos do mundo, famoso por suas casas
                        brancas, mar azul profundo e pores do sol inesquecíveis.
                    </p>
                </div>
            </section>
            <section className="destination-about">
                <div className="container">
                    <h2>Sobre Santorini</h2>

                    <p>
                        Santorini é uma ilha vulcânica localizada no Mar Egeu, conhecida por sua
                        arquitetura única, falésias impressionantes e vilas que parecem flutuar
                        sobre o mar. O destino combina história milenar, paisagens naturais e uma
                        atmosfera romântica.
                    </p>

                    <p>
                        Além da beleza visual, Santorini oferece experiências gastronômicas
                        marcantes, praias de areia vulcânica e uma cultura rica que reflete séculos
                        de história grega.
                    </p>
                </div>
            </section>
            <section className="destination-highlights">
                <div className="container">
                    <h2>Destaques</h2>

                    <div className="highlights-grid">
                        <div className="highlight-card">
                            <h3>🌅 Pôr do Sol em Oia</h3>
                            <p>
                                Considerado um dos mais belos do mundo, com vistas panorâmicas do Mar
                                Egeu.
                            </p>
                        </div>

                        <div className="highlight-card">
                            <h3>🏖️ Praias Vulcânicas</h3>
                            <p>
                                Praias únicas com areia preta, vermelha e formações rochosas
                                impressionantes.
                            </p>
                        </div>

                        <div className="highlight-card">
                            <h3>🍷 Vinícolas Locais</h3>
                            <p>
                                Degustações de vinhos produzidos a partir de uvas cultivadas em solo
                                vulcânico.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="destination-gallery">
                <div className="container">
                    <h2>Galeria</h2>

                    <div className="gallery-grid">
                        <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" />
                        <img src="https://images.unsplash.com/photo-1500534314209-a26db0f5b923" />
                        <img src="https://images.unsplash.com/photo-1493558103817-58b2924bce98" />
                    </div>
                </div>
            </section>
            <section className="destination-tips">
                <div className="container">
                    <h2>Dicas para sua viagem</h2>

                    <ul>
                        <li>✔ Melhor época: abril a outubro</li>
                        <li>✔ Reserve hotéis com antecedência</li>
                        <li>✔ Explore vilas menos turísticas</li>
                        <li>✔ Leve roupas leves e confortáveis</li>
                    </ul>
                </div>
            </section>
            <section className="destination-cta">
                <h2>Pronto para conhecer Santorini?</h2>
                <button>Planejar minha viagem</button>
            </section>
        </>
    )
}