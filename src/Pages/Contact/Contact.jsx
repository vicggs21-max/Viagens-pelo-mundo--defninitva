import "./Contact.css";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
export function Contact() {
  return (
    <>
        <Header/>
      <section className="contact-hero">
        <div className="overlay"></div>

        <div className="contact-hero-content">
          <h1>Fale Conosco</h1>
          <p>
            Tem alguma dúvida, sugestão ou quer planejar sua próxima viagem?
            Estamos prontos para te ajudar.
          </p>
        </div>
      </section>


      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Entre em contato</h2>
              <p>
                Preencha o formulário ou utilize um dos canais abaixo. Nossa
                equipe responderá o mais rápido possível.
              </p>

              <ul>
                <li>📍 Atendimento global</li>
                <li>📧 contato@viagenspelomundo.com</li>
                <li>📞 +55 (99) 99999-9999</li>
              </ul>
            </div>

            <form className="contact-form">
              <div className="input-group">
                <label>Nome</label>
                <input type="text" placeholder="Seu nome" />
              </div>

              <div className="input-group">
                <label>Email</label>
                <input type="email" placeholder="seu@email.com" />
              </div>

              <div className="input-group">
                <label>Mensagem</label>
                <textarea placeholder="Escreva sua mensagem..." rows="5" />
              </div>

              <button type="submit">Enviar mensagem</button>
            </form>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}
