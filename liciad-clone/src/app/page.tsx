import { Shell } from "@/components/sites/liciad/Shell";
import { Hero } from "@/components/sites/liciad/Hero";
import { Story } from "@/components/sites/liciad/Story";
import { Works } from "@/components/sites/liciad/Works";
import { Services } from "@/components/sites/liciad/Services";
import { Process } from "@/components/sites/liciad/Process";
import { Team } from "@/components/sites/liciad/Team";
import { Reviews } from "@/components/sites/liciad/Reviews";
import { Instagram } from "@/components/sites/liciad/Instagram";
import { Cta } from "@/components/sites/liciad/Cta";

export default function Home() {
  return (
    <Shell current="home" loader>
      <Hero />
      <Story />
      <Works />
      <Services />
      <Process />
      <Team />
      <Reviews />
      <Instagram />
      <Cta />
    </Shell>
  );
}
