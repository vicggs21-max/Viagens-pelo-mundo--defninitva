import {Header} from "../components/Header/Header"
import { Hero } from "../components/Hero/Hero";
import { Destinations } from "../components/Destinations/Destinations";
import { Footer } from "../components/Footer/Footer";

export function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Destinations />
      <Footer />
    </>
  );
}