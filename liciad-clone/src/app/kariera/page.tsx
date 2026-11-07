import type { Metadata } from "next";
import { Shell } from "@/components/sites/liciad/Shell";
import { PageHero } from "@/components/sites/liciad/PageHero";
import { CareerHeroAside, CareerJobs, CareerLife, CareerWhy } from "@/components/sites/liciad/Career";
import { Team } from "@/components/sites/liciad/Team";
import { Cta } from "@/components/sites/liciad/Cta";
import { Btn } from "@/components/sites/liciad/ui";
import { email } from "@/components/sites/liciad/data";

export const metadata: Metadata = {
  title: "Kariéra | LIČI AD - Reklamu berieme osobne",
  description:
    "Hľadáme kreatívnych ľudí, ktorí zdieľajú našu vášeň pre inovácie a tvorbu jedinečných marketingových kampaní. Pošlite nám otvorenú prihlášku.",
};

export default function CareerPage() {
  return (
    <Shell current="kariera">
      <PageHero
        crumb="Kariéra"
        status="Prijímame otvorené prihlášky"
        title={
          <>
            Tvorte s ľuďmi, ktorí to berú <mark className="lc-hl lc-hl--teal">osobne.</mark>
          </>
        }
        lead="V našej marketingovej agentúre hľadáme kreatívnych ľudí, ktorí sú pripravení zdieľať našu vášeň pre inovácie a tvorbu jedinečných marketingových kampaní."
        actions={
          <>
            <Btn href="#pozicie">Pracovné ponuky</Btn>
            <Btn href={`mailto:${email}`} variant="teal">
              Napíšte nám
            </Btn>
          </>
        }
        aside={<CareerHeroAside />}
      />
      <CareerWhy />
      <CareerJobs />
      <CareerLife />
      <Team />
      <div className="lc-spacer" />
      <Cta
        title="Nenašli ste pozíciu, ktorú ste hľadali? Ozvite sa aj tak."
        text="Pošlite nám pár viet o sebe a ukážku svojej práce. Talentovaných ľudí si radi zapamätáme."
        button="Poslať otvorenú prihlášku"
        href={`mailto:${email}?subject=${encodeURIComponent("Kariéra - otvorená prihláška")}`}
      />
    </Shell>
  );
}
