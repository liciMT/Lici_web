import "swiper/css";
import "swiper/css/effect-coverflow";
import "@/components/sites/liciad/liciad.css";
import { Header } from "@/components/sites/liciad/Header";
import { Hero } from "@/components/sites/liciad/Hero";
import { Disciplines } from "@/components/sites/liciad/Disciplines";
import { Reviews } from "@/components/sites/liciad/Reviews";
import { Works } from "@/components/sites/liciad/Works";
import { Values } from "@/components/sites/liciad/Values";
import { MeetTheGang } from "@/components/sites/liciad/MeetTheGang";
import { About } from "@/components/sites/liciad/About";
import { Instagram } from "@/components/sites/liciad/Instagram";
import { Footer } from "@/components/sites/liciad/Footer";

export default function Home() {
  return (
    <div className="lc">
      <Header />
      <main>
        <Hero />
        <Disciplines />
        <Reviews />
        <Works />
        <Values />
        <MeetTheGang />
        <About />
        <Instagram />
      </main>
      <Footer />
    </div>
  );
}
