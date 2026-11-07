import type { Metadata } from "next";
import { Shell } from "@/components/sites/liciad/Shell";
import { PageHero } from "@/components/sites/liciad/PageHero";
import { BlogHeroAside, BlogList } from "@/components/sites/liciad/Blog";
import { Cta } from "@/components/sites/liciad/Cta";
import { Btn } from "@/components/sites/liciad/ui";

export const metadata: Metadata = {
  title: "Blog | LIČI AD - Novinky zo sveta marketingu",
  description:
    "Trendy, postrehy a tipy zo sveta marketingu, sociálnych sietí a tvorby obsahu od tímu reklamnej agentúry LIČI AD.",
};

export default function BlogPage() {
  return (
    <Shell current="blog">
      <PageHero
        crumb="Blog"
        title={
          <>
            Novinky zo sveta <mark className="lc-hl lc-hl--red">marketingu.</mark>
          </>
        }
        lead="Trendy, postrehy a tipy z našej každodennej práce so sociálnymi sieťami, obsahom a kampaňami."
        actions={
          <Btn href="https://www.instagram.com/licisk/" variant="ghost" external>
            Sledovať @licisk
          </Btn>
        }
        aside={<BlogHeroAside />}
      />
      <BlogList />
      <Cta
        title="Chcete, aby o vašej značke hovorili ako o trende?"
        text="Z nápadov a trendov robíme kampane, ktoré fungujú. Povedzte nám, kam chcete svoju značku posunúť."
      />
    </Shell>
  );
}
