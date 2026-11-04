import { useState, useEffect, useRef, type FormEvent, type ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Star,
  Phone,
  Mail,
  MapPin,
  Plus,
  ArrowRight,
  ArrowUpRight,
  Instagram,
  Facebook,
  Linkedin,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";

// Images are stored in the repo as optimised WebP (were ~10.5 MB of PNG served only from Lovable hosting).
import heroBuilding from "@/assets/hero-building.webp";
import heroBuildingSmall from "@/assets/hero-building-960.webp";
import expertiseBg from "@/assets/expertise-bg.webp";
import serviceVisual from "@/assets/service-visual.webp";
import serviceWeb from "@/assets/service-web.webp";
import serviceBranding from "@/assets/service-branding.webp";
import serviceAds from "@/assets/service-ads.webp";
import serviceSocial from "@/assets/service-social.webp";
import serviceStrategy from "@/assets/service-strategy.webp";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

// Custom Figma icons
import iconView3d from "@/assets/icons/view-3d.svg";
import iconGroupAdd from "@/assets/icons/group-add.svg";
import iconDesktop from "@/assets/icons/desktop-mac.svg";
import iconTag from "@/assets/icons/tag.svg";
import iconBranding from "@/assets/icons/branding.svg";

const CONTACT = {
  email: "hello@realestate.sk",
  phone: "+421 900 000 000",
  phoneHref: "+421900000000",
};

const faqs = [
  {
    q: "Viete zastrešiť aj viac častí projektu naraz?",
    a: "Áno. Práve v tom je výhoda spolupráce s nami. Jednotlivé výstupy vznikajú v jednej línii a nemusia sa skladať z viacerých strán.",
  },
  {
    q: "Vieme začať len jednou službou a ostatné doplniť postupne?",
    a: "Samozrejme. Spoluprácu vieme nastaviť modulárne, začneme tým, čo je najakútnejšie, a postupne projekt rozširujeme.",
  },
  {
    q: "Ako zistíme, ktorý balík alebo forma spolupráce je pre nás vhodná?",
    a: "Po krátkej úvodnej konzultácii odporučíme konkrétne kroky podľa fázy projektu, rozpočtu a cieľov.",
  },
  {
    q: "Viete nastaviť riešenie aj podľa rozpočtu, ktorý máme aktuálne k dispozícii?",
    a: "Áno, vždy hľadáme variant, ktorý dáva v danom rozpočte najväčší zmysel a najrýchlejšiu návratnosť.",
  },
  {
    q: "Pomáha virtuálna prehliadka aj pri prenájme, alebo skôr pri predaji?",
    a: "Pri oboch. Pri prenájme šetrí čas obhliadok, pri predaji zvyšuje dôveru a skracuje rozhodovací cyklus.",
  },
  {
    q: "Čo od nás potrebujete na začiatku?",
    a: "Krátky brief o projekte, dostupné podklady (pôdorysy, vizualizácie) a kontakt na osobu, ktorá rozhoduje o marketingu.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LIČI, Marketing pre realitný development" },
      {
        name: "description",
        content:
          "LIČI Real Estate. Prepájame vizuál, dáta a kampane do reálnych výsledkov pre realitných developerov a maklérov.",
      },
      { property: "og:title", content: "LIČI, Marketing pre realitný development" },
      {
        property: "og:description",
        content:
          "Od virtuálnej prehliadky až po predajnú stratégiu. Marketing, ktorý predáva nehnuteľnosti.",
      },
      { name: "twitter:title", content: "LIČI, Marketing pre realitný development" },
      {
        name: "twitter:description",
        content:
          "Od virtuálnej prehliadky až po predajnú stratégiu. Marketing, ktorý predáva nehnuteľnosti.",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: LiciLanding,
});

const View3dIcon = ({ className }: { className?: string; strokeWidth?: number }) => (
  <svg
    viewBox="0 0 28 28"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path d="M14 28C12.0633 28 10.2433 27.6325 8.54 26.8975C6.83667 26.1625 5.355 25.165 4.095 23.905C2.835 22.645 1.8375 21.1633 1.1025 19.46C0.3675 17.7567 0 15.9367 0 14H2.8C2.8 16.6833 3.64583 19.0517 5.3375 21.105C7.02917 23.1583 9.19333 24.4533 11.83 24.99L9.8 22.96L11.76 21L18.13 27.37C17.4533 27.6033 16.7708 27.7667 16.0825 27.86C15.3942 27.9533 14.7 28 14 28ZM14.7 18.2V9.8H18.9C19.2967 9.8 19.6292 9.93417 19.8975 10.2025C20.1658 10.4708 20.3 10.8033 20.3 11.2V16.8C20.3 17.1967 20.1658 17.5292 19.8975 17.7975C19.6292 18.0658 19.2967 18.2 18.9 18.2H14.7ZM7.7 18.2V16.1H11.2V14.7H9.1V13.3H11.2V11.9H7.7V9.8H11.9C12.2967 9.8 12.6292 9.93417 12.8975 10.2025C13.1658 10.4708 13.3 10.8033 13.3 11.2V16.8C13.3 17.1967 13.1658 17.5292 12.8975 17.7975C12.6292 18.0658 12.2967 18.2 11.9 18.2H7.7ZM16.8 16.1H18.2V11.9H16.8V16.1ZM25.2 14C25.2 11.3167 24.3542 8.94833 22.6625 6.895C20.9708 4.84167 18.8067 3.54667 16.17 3.01L18.2 5.04L16.24 7L9.87 0.63C10.5467 0.396667 11.2292 0.233333 11.9175 0.14C12.6058 0.0466667 13.3 0 14 0C15.9367 0 17.7567 0.3675 19.46 1.1025C21.1633 1.8375 22.645 2.835 23.905 4.095C25.165 5.355 26.1625 6.83667 26.8975 8.54C27.6325 10.2433 28 12.0633 28 14H25.2Z" />
  </svg>
);
const DesktopIcon = ({ className }: { className?: string; strokeWidth?: number }) => (
  <svg
    viewBox="0 0 15 13"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path d="M4.5 13V12.2778L6 10.8333H1.5C1.0875 10.8333 0.734375 10.6919 0.440625 10.409C0.146875 10.1262 0 9.78611 0 9.38889V1.44444C0 1.04722 0.146875 0.707176 0.440625 0.424306C0.734375 0.141435 1.0875 0 1.5 0H13.5C13.9125 0 14.2656 0.141435 14.5594 0.424306C14.8531 0.707176 15 1.04722 15 1.44444V9.38889C15 9.78611 14.8531 10.1262 14.5594 10.409C14.2656 10.6919 13.9125 10.8333 13.5 10.8333H9L10.5 12.2778V13H4.5ZM1.5 7.22222H13.5V1.44444H1.5V7.22222Z" />
  </svg>
);
const BrandingIcon = ({ className }: { className?: string; strokeWidth?: number }) => (
  <svg
    viewBox="0 0 13 15"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path d="M1.76667 15C1.16667 15 0.722222 14.8625 0.433333 14.5875C0.144444 14.3125 0 13.9 0 13.35C0 12.625 0.272222 12.1625 0.816667 11.9625C1.36111 11.7625 2.00556 11.6625 2.75 11.6625H3.1V10.6125C3.1 10.1875 3.09444 9.84063 3.08333 9.57188C3.07222 9.30313 3.03889 9.08125 2.98333 8.90625C2.92778 8.73125 2.86389 8.60938 2.79167 8.54063C2.71944 8.47188 2.62222 8.4375 2.5 8.4375C2.4 8.4375 2.30833 8.45625 2.225 8.49375C2.14167 8.53125 2.07222 8.58125 2.01667 8.64375C1.97222 8.70625 1.94444 8.77188 1.93333 8.84063C1.92222 8.90938 1.92778 8.98125 1.95 9.05625C2.01667 9.19375 2.09444 9.32813 2.18333 9.45938C2.27222 9.59063 2.31667 9.74375 2.31667 9.91875C2.31667 10.2313 2.21944 10.4969 2.025 10.7156C1.83056 10.9344 1.59444 11.0438 1.31667 11.0438C1.03889 11.0438 0.802778 10.9344 0.608333 10.7156C0.413889 10.4969 0.316667 10.2313 0.316667 9.91875C0.316667 9.58125 0.383333 9.30625 0.516667 9.09375C0.65 8.88125 0.830556 8.7125 1.05833 8.5875C1.28611 8.4625 1.55 8.375 1.85 8.325C2.15 8.275 2.47222 8.25 2.81667 8.25C3.76111 8.25 4.41667 8.44063 4.78333 8.82188C5.15 9.20313 5.33333 9.875 5.33333 10.8375V13.5938C5.33333 13.8313 5.35833 14.0063 5.40833 14.1188C5.45833 14.2313 5.54444 14.2875 5.66667 14.2875C5.8 14.2875 5.90833 14.175 5.99167 13.95C6.075 13.725 6.12778 13.375 6.15 12.9H6.33333C6.3 13.675 6.16944 14.2188 5.94167 14.5313C5.71389 14.8438 5.33333 15 4.8 15C4.32222 15 3.94722 14.9156 3.675 14.7469C3.40278 14.5781 3.22778 14.325 3.15 13.9875C3.03889 14.35 2.875 14.6094 2.65833 14.7656C2.44167 14.9219 2.14444 15 1.76667 15ZM7.98333 15C7.76111 15 7.58056 14.8969 7.44167 14.6906C7.30278 14.4844 7.27778 14.2625 7.36667 14.025L9.06667 8.98125C9.14445 8.76875 9.26667 8.59375 9.43333 8.45625C9.6 8.31875 9.78889 8.25 10 8.25C10.2111 8.25 10.4 8.31875 10.5667 8.45625C10.7333 8.59375 10.8556 8.76875 10.9333 8.98125L12.6333 14.025C12.7222 14.2625 12.6972 14.4844 12.5583 14.6906C12.4194 14.8969 12.2389 15 12.0167 15C11.8833 15 11.7611 14.9563 11.65 14.8688C11.5389 14.7813 11.4556 14.6625 11.4 14.5125L11.0667 13.425H8.93333L8.6 14.5125C8.55556 14.65 8.47778 14.7656 8.36667 14.8594C8.25556 14.9531 8.12778 15 7.98333 15ZM2.58333 14.4563C2.72778 14.4563 2.85 14.3281 2.95 14.0719C3.05 13.8156 3.1 13.5063 3.1 13.1438V11.8875C2.81111 11.8875 2.6 11.9844 2.46667 12.1781C2.33333 12.3719 2.26667 12.6875 2.26667 13.125V13.3313C2.26667 13.7813 2.28889 14.0813 2.33333 14.2313C2.37778 14.3813 2.46111 14.4563 2.58333 14.4563ZM9.36667 12.1125H10.65L10 9.975L9.36667 12.1125ZM8.75 6.76875C8.21667 6.76875 7.79167 6.55938 7.475 6.14063C7.15833 5.72188 7 5.15625 7 4.44375C7 3.14375 7.36667 2.07813 8.1 1.24688C8.83333 0.415625 9.77222 0 10.9167 0C11.3833 0 11.7611 0.059375 12.05 0.178125C12.3389 0.296875 12.4833 0.45 12.4833 0.6375C12.4833 0.7125 12.4722 0.7875 12.45 0.8625C12.4278 0.9375 12.3889 1.00625 12.3333 1.06875C12.2778 1.15625 12.2083 1.21875 12.125 1.25625C12.0417 1.29375 11.9556 1.3 11.8667 1.275C11.7111 1.225 11.5333 1.18125 11.3333 1.14375C11.1333 1.10625 10.95 1.0875 10.7833 1.0875C9.99444 1.0875 9.36111 1.3875 8.88333 1.9875C8.40556 2.5875 8.16667 3.38125 8.16667 4.36875C8.16667 4.64375 8.21111 4.93125 8.3 5.23125C8.38889 5.53125 8.58889 5.68125 8.9 5.68125C9.02222 5.68125 9.14167 5.65 9.25833 5.5875C9.375 5.525 9.47778 5.4375 9.56667 5.325C9.75556 5.1 9.93056 4.725 10.0917 4.2C10.2528 3.675 10.4 3.0375 10.5333 2.2875C10.5556 2.125 10.6139 2.00938 10.7083 1.94063C10.8028 1.87188 10.9333 1.8375 11.1 1.8375C11.3 1.8375 11.4528 1.89688 11.5583 2.01563C11.6639 2.13438 11.6944 2.28125 11.65 2.45625C11.5167 2.99375 11.4194 3.4625 11.3583 3.8625C11.2972 4.2625 11.2667 4.625 11.2667 4.95C11.2667 5.2 11.2972 5.38125 11.3583 5.49375C11.4194 5.60625 11.5111 5.6625 11.6333 5.6625C11.7556 5.6625 11.875 5.6125 11.9917 5.5125C12.1083 5.4125 12.2722 5.225 12.4833 4.95C12.5056 4.9125 12.5889 4.86875 12.7333 4.81875C12.8222 4.81875 12.8889 4.85625 12.9333 4.93125C12.9778 5.00625 13 5.1125 13 5.25C13 5.6 12.8222 5.9375 12.4667 6.2625C12.1111 6.5875 11.7389 6.75 11.35 6.75C11.0611 6.75 10.8139 6.6625 10.6083 6.4875C10.4028 6.3125 10.2611 6.0625 10.1833 5.7375C10.0167 6.0625 9.81111 6.31563 9.56667 6.49688C9.32222 6.67813 9.05 6.76875 8.75 6.76875ZM0.666667 6.75V2.625C0.666667 1.9 0.894444 1.28125 1.35 0.76875C1.80556 0.25625 2.35556 0 3 0C3.64444 0 4.19444 0.25625 4.65 0.76875C5.10556 1.28125 5.33333 1.9 5.33333 2.625V6.75H4V5.25H2V6.75H0.666667ZM2 3.75H4V2.625C4 2.3125 3.90278 2.04688 3.70833 1.82813C3.51389 1.60938 3.27778 1.5 3 1.5C2.72222 1.5 2.48611 1.60938 2.29167 1.82813C2.09722 2.04688 2 2.3125 2 2.625V3.75Z" />
  </svg>
);

const GroupAddIcon = ({ className }: { className?: string; strokeWidth?: number }) => (
  <svg
    viewBox="0 0 28 19"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path d="M14.5833 9.44063C15.1472 8.80729 15.5799 8.0849 15.8812 7.27344C16.1826 6.46198 16.3333 5.62083 16.3333 4.75C16.3333 3.87917 16.1826 3.03802 15.8812 2.22656C15.5799 1.4151 15.1472 0.692708 14.5833 0.059375C15.75 0.217708 16.7222 0.742188 17.5 1.63281C18.2778 2.52344 18.6667 3.5625 18.6667 4.75C18.6667 5.9375 18.2778 6.97656 17.5 7.86719C16.7222 8.75781 15.75 9.28229 14.5833 9.44063ZM21 19V15.4375C21 14.725 20.8444 14.0471 20.5333 13.4039C20.2222 12.7607 19.8139 12.1917 19.3083 11.6969C20.3 12.0531 21.2187 12.5133 22.0646 13.0773C22.9104 13.6414 23.3333 14.4281 23.3333 15.4375V19H21ZM23.3333 10.6875V8.3125H21V5.9375H23.3333V3.5625H25.6667V5.9375H28V8.3125H25.6667V10.6875H23.3333ZM6.0375 8.10469C5.12361 7.17448 4.66667 6.05625 4.66667 4.75C4.66667 3.44375 5.12361 2.32552 6.0375 1.39531C6.95139 0.465104 8.05 0 9.33333 0C10.6167 0 11.7153 0.465104 12.6292 1.39531C13.5431 2.32552 14 3.44375 14 4.75C14 6.05625 13.5431 7.17448 12.6292 8.10469C11.7153 9.0349 10.6167 9.5 9.33333 9.5C8.05 9.5 6.95139 9.0349 6.0375 8.10469ZM0 19V15.675C0 15.0021 0.170139 14.3836 0.510417 13.8195C0.850694 13.2555 1.30278 12.825 1.86667 12.5281C3.07222 11.9146 4.29722 11.4544 5.54167 11.1477C6.78611 10.8409 8.05 10.6875 9.33333 10.6875C10.6167 10.6875 11.8806 10.8409 13.125 11.1477C14.3694 11.4544 15.5944 11.9146 16.8 12.5281C17.3639 12.825 17.816 13.2555 18.1562 13.8195C18.4965 14.3836 18.6667 15.0021 18.6667 15.675V19H0ZM9.33333 7.125C9.975 7.125 10.5243 6.89245 10.9812 6.42734C11.4382 5.96224 11.6667 5.40312 11.6667 4.75C11.6667 4.09688 11.4382 3.53776 10.9812 3.07266C10.5243 2.60755 9.975 2.375 9.33333 2.375C8.69167 2.375 8.14236 2.60755 7.68542 3.07266C7.22847 3.53776 7 4.09688 7 4.75C7 5.40312 7.22847 5.96224 7.68542 6.42734C8.14236 6.89245 8.69167 7.125 9.33333 7.125ZM2.33333 16.625H16.3333V15.675C16.3333 15.4573 16.2799 15.2594 16.1729 15.0813C16.066 14.9031 15.925 14.7646 15.75 14.6656C14.7 14.1313 13.6403 13.7305 12.5708 13.4633C11.5014 13.1961 10.4222 13.0625 9.33333 13.0625C8.24444 13.0625 7.16528 13.1961 6.09583 13.4633C5.02639 13.7305 3.96667 14.1313 2.91667 14.6656C2.74167 14.7646 2.60069 14.9031 2.49375 15.0813C2.38681 15.2594 2.33333 15.4573 2.33333 15.675V16.625Z" />
  </svg>
);

const TagIcon = ({ className }: { className?: string; strokeWidth?: number }) => (
  <svg
    viewBox="0 0 15 14"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path d="M12.5 0.00260544L11.6667 3.33594H15L14.5833 5.0026H11.25L10.4167 8.33594H13.75L13.3333 10.0026H10L9.16667 13.3359H7.5L8.33333 10.0026H5L4.16667 13.3359H2.5L3.33333 10.0026H3.57628e-07L0.416667 8.33594H3.75L4.58333 5.0026H1.25L1.66667 3.33594H5L5.83333 0.00260544H7.5L6.66667 3.33594H10L10.8333 0.00260544H12.5ZM9.58333 5.0026H6.25L5.41667 8.33594H8.75L9.58333 5.0026Z" />
  </svg>
);

const ChessRookIcon = ({ className }: { className?: string; strokeWidth?: number }) => (
  <svg
    viewBox="0 0 30 38"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path d="M1.46418e-06 38L1.09814e-06 28.5C2.53125 26.4417 4.4375 24.2092 5.71875 21.8025C7 19.3958 7.90625 17.195 8.4375 15.2H7.5C6.46875 15.2 5.58594 14.8279 4.85156 14.0837C4.11719 13.3396 3.75 12.445 3.75 11.4L3.75 0H13.125L13.125 5.7H16.875L16.875 0H26.25L26.25 11.4C26.25 12.445 25.8828 13.3396 25.1484 14.0837C24.4141 14.8279 23.5313 15.2 22.5 15.2H21.5156C22.0469 17.195 22.9531 19.3958 24.2344 21.8025C25.5156 24.2092 27.4375 26.4417 30 28.5L30 38H1.46418e-06ZM3.75 34.2H26.25L26.25 30.2575C23.5625 27.7875 21.5859 25.1988 20.3203 22.4913C19.0547 19.7838 18.1563 17.3533 17.625 15.2H12.3281C11.8281 17.3533 10.9375 19.7838 9.65625 22.4913C8.375 25.1988 6.40625 27.7875 3.75 30.2575L3.75 34.2ZM7.5 11.4H22.5L22.5 3.8H20.625L20.625 9.5H9.375L9.375 3.8H7.5L7.5 11.4Z" />
  </svg>
);

const accordionServices = [
  {
    icon: View3dIcon,
    title: "Kompletný vizuálny servis projektov",
    desc: "Postaráme sa o to, aby vaša nehnuteľnosť zaujala na prvý pohľad. Pomocou technológie Matterport vytvoríme virtuálne 3D prehliadky, 2D pôdorysy, profesionálne fotografie aj dronové zábery z výšky. Virtual stagingom alebo klasickým home stagingom oživíme priestory a ukážeme ich skutočný potenciál.",
    tags: ["Matterport 3D", "Foto & dron", "Virtual staging"],
    image: serviceVisual,
  },
  {
    icon: DesktopIcon,
    title: "Prémiové weby ako kľúčový predajný kanál",
    desc: "Navrhujeme a vyvíjame realitné weby, ktoré nielen krásne vyzerajú, ale aj predávajú. Optimalizované pre rýchlosť, SEO a konverzie, od landing pages až po kompletné developerské portály.",
    tags: ["Landing pages", "Developerské portály", "SEO"],
    image: serviceWeb,
  },
  {
    icon: BrandingIcon,
    title: "Komplexný branding nehnuteľností",
    desc: "Vizuálna identita projektu od názvu, loga, typografie až po tone of voice. Branding, ktorý dáva nehnuteľnosti charakter a pomáha ju predať za vyššiu cenu.",
    tags: ["Názov & logo", "Identita", "Tón komunikácie"],
    image: serviceBranding,
  },
  {
    icon: GroupAddIcon,
    title: "Výkonnostné kampane, ktoré prinášajú reálny dopyt",
    desc: "Performance kampane na Google, Meta a YouTube cielené presne na vašu cieľovú skupinu kupujúcich. Denná optimalizácia, transparentné reporty a fokus na cenu za kvalitný lead.",
    tags: ["Google", "Meta", "YouTube"],
    image: serviceAds,
  },
  {
    icon: TagIcon,
    title: "Obsah na sociálne siete, ktorý buduje záujem",
    desc: "Pravidelný obsah pre Instagram, Facebook aj LinkedIn, od konceptu, cez foto/video produkciu až po publikovanie a komunitný manažment.",
    tags: ["Instagram", "Facebook", "LinkedIn"],
    image: serviceSocial,
  },
  {
    icon: ChessRookIcon,
    title: "Predajná stratégia, ktorá pružne reaguje na trh",
    desc: "Cenotvorba, fázovanie predaja, segmentácia jednotiek a sledovanie konkurencie. Stratégia, ktorá sa vie prispôsobiť aktuálnemu dopytu.",
    tags: ["Cenotvorba", "Fázovanie", "Konkurencia"],
    image: serviceStrategy,
  },
];

const packages = [
  {
    label: "Balík 01",
    name: "Štart",
    pricePrefix: "od",
    price: "4 900",
    priceSuffix: "€",
    desc: "Pre menšie projekty do 15 jednotiek, ktoré potrebujú základný vizuálny servis a rýchly štart.",
    features: [
      "Lorem ipsum dolor sit amet consectetur",
      "Integer fermentum convallis elit eget dictum",
      "Duis nec urna nec quam malesuada lobortis",
      "Aliquam erat volutpat. Proin a dui metus",
      "Curabitur in massa a ligula semper",
    ],
    cta: "Mám záujem",
    highlight: false,
  },
  {
    label: "Balík 02",
    name: "Komplex",
    pricePrefix: "od",
    price: "12 400",
    priceSuffix: "€",
    desc: "Pre stredne veľké rezidenčné projekty, kompletný vizuálny aj performance marketing na kľúč.",
    features: [
      "Lorem ipsum dolor sit amet consectetur",
      "Duis nec urna nec quam malesuada lobortis",
      "Duis nec urna nec quam malesuada lobortis",
      "Aliquam erat volutpat. Proin a dui metus",
      "Aliquam erat volutpat. Proin a dui metus",
      "Aliquam erat volutpat. Proin a dui metus",
    ],
    cta: "Mám záujem",
    highlight: true,
    badge: "Najpopulárnejšie",
  },
  {
    label: "Balík 03",
    name: "Na mieru",
    pricePrefix: "",
    price: "Na dopyt",
    priceSuffix: "",
    desc: "Pre veľké rezidenčné komplexy nad 50 jednotiek, marketing na mieru vrátane PR a eventov.",
    features: [
      "Všetko z balíka Komplex, plus:",
      "PR a mediálna stratégia",
      "Kampaň na out-of-home",
      "Event pre maklérov a investorov",
      "Neobmedzené kampane",
      "Dedikovaný projektový manažér",
    ],
    cta: "Kontaktujte nás",
    highlight: false,
  },
];

const cycle = [
  {
    title: "Ujasníme si cieľ a priority",
    desc: "Na úvodnom stretnutí prejdeme váš projekt, cieľovú skupinu a fázy predaja. Zadefinujeme priority a metriky úspechu.",
  },
  {
    title: "Nastavíme prezentáciu projektu",
    desc: "Vytvoríme vizuálnu identitu, web, fotky, virtuálne prehliadky a všetky podklady, ktoré projekt potrebuje pre trh.",
  },
  {
    title: "Prepojíme výstupy do celku",
    desc: "Branding, web, kampane a obsah pracujú spolu, jeden tón komunikácie, jedna logika, jeden výsledok.",
  },
  {
    title: "Privedieme relevantný záujem",
    desc: "Performance kampane, retargeting a obsah cielene privádzajú kupujúcich pripravených na rozhodnutie.",
  },
];

const partners = ["HORIZON", "AVALON", "Proxima", "STONE&CO", "Meridian", "KALEA"];

const testimonials = [
  {
    name: "Jožinka Ferková",
    company: "Atrium Architekti",
    rating: "5.0",
    photo: testimonial1,
    quote:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Vivamus dapibus faucibus ex sed vestibulum.",
    projectImg: project2,
    projectName: "Rezidencia Slnečnice",
    projectDesc: "Bytový projekt v Bratislave",
  },
  {
    name: "Marek Dvořák",
    company: "Nordic Living s.r.o.",
    rating: "5.0",
    photo: testimonial2,
    quote:
      "Spolupráca s LIČI prekonala naše očakávania. Vizualizácie boli na úrovni a kampaň priniesla reálne predaje.",
    projectImg: project1,
    projectName: "Villa Modrá",
    projectDesc: "Rodinný dom, Senec",
  },
  {
    name: "Petra Kováčová",
    company: "Urban Group",
    rating: "5.0",
    photo: testimonial3,
    quote:
      "Profesionálny tím, ktorý rozumie realitnému trhu. Doručili sme projekt včas a s vynikajúcimi výsledkami.",
    projectImg: project3,
    projectName: "Loft District",
    projectDesc: "Mestský polyfunkčný projekt",
  },
];

const hotspots = [
  {
    top: "30%",
    left: "8%",
    iconSrc: iconDesktop,
    title: "Prémiové weby",
    desc: "Web ako kľúčový predajný kanál: rýchly, optimalizovaný a navrhnutý na konverziu.",
    cardSide: "below-right",
  },
  {
    top: "26%",
    left: "90%",
    iconSrc: iconBranding,
    title: "Branding & identita",
    desc: "Vizuálna identita, ktorá projektu dáva charakter, od loga cez typografiu až po tón komunikácie.",
    cardSide: "below-left",
  },
  {
    top: "48%",
    left: "62%",
    iconSrc: iconTag,
    title: "Sociálne siete",
    desc: "Obsah pre Instagram a Facebook, ktorý ľudia sledujú a zdieľajú. Pravidelný plán a kvalitný vizuál.",
    cardSide: "below-left",
  },
  {
    top: "44%",
    left: "34%",
    iconSrc: iconView3d,
    title: "Virtuálna prehliadka",
    desc: "Matterport 3D prehliadka, ktorú si kupujúci prejde kedykoľvek a odkiaľkoľvek. Šetrí čas obhliadok a zvyšuje dôveru.",
    cardSide: "below-right",
  },
  {
    top: "18%",
    left: "68%",
    iconSrc: iconGroupAdd,
    title: "Predajná stratégia",
    desc: "Určuje, ako bude projekt komunikovaný, komu bude určený a v akej fáze treba zdôrazniť konkrétne benefity.",
    cardSide: "below-left",
  },
] as const;

const navLinks = [
  { href: "#sluzby", label: "Služby" },
  { href: "#balicky", label: "Balíčky" },
  { href: "#proces", label: "Proces" },
  { href: "#referencie", label: "Referencie" },
  { href: "#faq", label: "FAQ" },
];

function Eyebrow({
  index,
  children,
  light = false,
}: {
  index: string;
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <div
      data-reveal
      className={`mb-6 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.22em] ${
        light ? "text-cream/70" : "text-copper"
      }`}
    >
      <span className="font-display tabular-nums">{index}</span>
      <span className={`h-px w-8 ${light ? "bg-cream/40" : "bg-copper/50"}`} />
      <span>{children}</span>
    </div>
  );
}

function LiciLanding() {
  const [openService, setOpenService] = useState<number>(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [selectedPackage, setSelectedPackage] = useState("");
  const prevTestimonial = () =>
    setTestimonialIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const nextTestimonial = () => setTestimonialIndex((i) => (i + 1) % testimonials.length);

  // Parallax for the Expertise banner: writes straight to the DOM in rAF, no React re-render per scroll.
  const expertiseRef = useRef<HTMLElement>(null);
  const expertiseImgRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const el = expertiseRef.current;
      const img = expertiseImgRef.current;
      if (!el || !img) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      if (rect.bottom < 0 || rect.top > vh) return;
      const progress = (vh - rect.top) / (vh + rect.height);
      img.style.transform = `translate3d(0, ${(progress - 0.5) * 160}px, 0) scale(1.2)`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  // Scroll-reveal: observe all [data-reveal] elements once
  useEffect(() => {
    (window as unknown as { __revealReady?: boolean }).__revealReady = true;
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const choosePackage = (name: string) => {
    setSelectedPackage(name);
    document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-cream text-cocoa">
      <a
        href="#obsah"
        className="sr-only z-[60] rounded-full bg-cream px-4 py-2 text-sm focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Preskočiť na obsah
      </a>
      <SiteNav />

      {/* HERO */}
      <header className="grain relative flex min-h-[640px] h-[100svh] max-h-[1000px] flex-col overflow-hidden bg-espresso text-cream">
        <div className="absolute inset-0 !z-0">
          <img
            src={heroBuilding}
            srcSet={`${heroBuildingSmall} 960w, ${heroBuilding} 1920w`}
            sizes="100vw"
            alt="Moderná rezidenčná budova"
            width={1920}
            height={1215}
            fetchPriority="high"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(26,18,12,0.55)_0%,rgba(26,18,12,0.25)_35%,rgba(26,18,12,0.85)_100%)]" />
        </div>

        {/* Hotspots: desktop only, card on hover and keyboard focus */}
        <div className="pointer-events-none absolute inset-x-0 top-[12%] bottom-[38%] hidden lg:block">
          {hotspots.map((h) => (
            <Hotspot key={h.title} {...h} />
          ))}
        </div>

        <div
          id="obsah"
          className="relative mx-auto mt-auto w-full max-w-[1440px] px-5 pb-10 md:px-10 md:pb-14"
        >
          <div className="grid items-end gap-10 lg:grid-cols-[1fr_300px]">
            <div>
              <p className="mb-6 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.22em] text-cream/75">
                <span className="h-px w-8 bg-copper-light" />
                Marketing pre realitný development
              </p>
              <h1 className="max-w-[15ch] font-display text-[44px] font-light leading-[0.98] tracking-[-0.035em] sm:text-6xl lg:text-[92px]">
                Rozumieme marketingu, ktorý predáva{" "}
                <em className="accent text-copper-light">nehnuteľnosti</em>
              </h1>
              <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-10">
                <p className="max-w-sm text-base leading-relaxed text-cream/80">
                  Prinesieme váš projekt tej správnej cieľovej skupine. Od vizuálu cez web až po
                  kampane, pod jednou strechou.
                </p>
                <a
                  href="#kontakt"
                  className="group inline-flex w-fit items-center gap-3 rounded-full bg-cream py-2 pl-6 pr-2 text-sm font-medium text-cocoa transition-colors duration-200 hover:bg-white"
                >
                  Nezáväzná konzultácia
                  <span className="grid size-9 place-items-center rounded-full bg-copper text-cream transition-transform duration-200 group-hover:translate-x-0.5">
                    <ArrowRight className="size-4" />
                  </span>
                </a>
              </div>
            </div>

            {/* Floating card (Stellar-style) */}
            <a
              href="#sluzby"
              className="group hidden overflow-hidden rounded-[12px] border border-cream/15 bg-espresso/55 p-3 backdrop-blur-md transition-colors duration-200 hover:bg-espresso/75 lg:block"
            >
              <div className="flex items-center justify-between px-1 pb-3 text-[11px] uppercase tracking-[0.18em] text-cream/65">
                <span>Naše služby</span>
                <span>06</span>
              </div>
              <div className="relative overflow-hidden rounded-[8px]">
                <img
                  src={serviceVisual}
                  alt=""
                  width={1326}
                  height={864}
                  className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex items-center justify-between gap-3 px-1 pt-3">
                <span className="text-sm leading-snug">
                  Od virtuálnej prehliadky až po predajnú stratégiu
                </span>
                <ArrowUpRight className="size-4 shrink-0 text-copper-light transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
            </a>
          </div>
        </div>
      </header>

      {/* 01 SLUŽBY */}
      <section id="sluzby" className="bg-cream px-5 py-24 md:px-10 md:py-36">
        <div className="mx-auto max-w-[1360px]">
          <div className="grid gap-8 md:grid-cols-[1fr_1fr] md:items-end">
            <div>
              <Eyebrow index="01">Služby</Eyebrow>
              <h2
                data-reveal
                className="font-display text-[40px] leading-[1.02] tracking-[-0.03em] md:text-[64px]"
              >
                Od virtuálnej prehliadky až po{" "}
                <em className="accent text-copper">predajnú stratégiu</em>
              </h2>
            </div>
            <p
              data-reveal
              className="max-w-md text-base leading-relaxed text-cocoa/70 md:justify-self-end"
            >
              Šesť disciplín, jeden tím. Každý výstup nadväzuje na ďalší, aby projekt komunikoval
              jednotne od prvej fotky po posledný predaný byt.
            </p>
          </div>

          <ul className="mt-16 border-t border-cocoa/15">
            {accordionServices.map((s, i) => {
              const isOpen = openService === i;
              const Icon = s.icon;
              const panelId = `sluzba-${i}`;
              return (
                <li key={s.title} data-reveal className="border-b border-cocoa/15">
                  <h3 className="m-0 text-base font-normal tracking-normal">
                    <button
                      type="button"
                      onClick={() => setOpenService(isOpen ? -1 : i)}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      className="group grid w-full grid-cols-[40px_1fr_auto] items-center gap-4 py-6 text-left md:grid-cols-[80px_48px_1fr_auto] md:py-8"
                    >
                      <span className="hidden font-display text-sm tabular-nums text-cocoa/45 md:block">
                        0{i + 1}
                      </span>
                      <Icon
                        className={`size-6 transition-colors duration-200 ${isOpen ? "text-copper" : "text-cocoa/50 group-hover:text-copper"}`}
                      />
                      <span
                        className={`font-display text-xl leading-tight tracking-[-0.02em] transition-[color,transform] duration-300 md:text-[32px] ${isOpen ? "text-cocoa" : "text-cocoa/75 group-hover:translate-x-1.5 group-hover:text-cocoa"}`}
                      >
                        {s.title}
                      </span>
                      <span
                        className={`grid size-11 place-items-center rounded-full border transition-colors duration-200 ${
                          isOpen
                            ? "border-copper bg-copper text-cream"
                            : "border-cocoa/20 text-cocoa group-hover:border-copper group-hover:text-copper"
                        }`}
                      >
                        <Plus
                          className={`size-4 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                        />
                      </span>
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                  >
                    <div className="overflow-hidden" inert={!isOpen}>
                      <div className="grid gap-8 pb-10 md:grid-cols-[128px_1fr_1.35fr] md:gap-10">
                        <div className="hidden md:block" />
                        <div className="flex flex-col justify-between gap-8">
                          <p className="max-w-md text-base leading-relaxed text-cocoa/75">
                            {s.desc}
                          </p>
                          <div>
                            <ul className="flex flex-wrap gap-2">
                              {s.tags.map((t) => (
                                <li
                                  key={t}
                                  className="rounded-full border border-cocoa/15 px-3 py-1 text-xs text-cocoa/70"
                                >
                                  {t}
                                </li>
                              ))}
                            </ul>
                            <a
                              href="#kontakt"
                              className="link-underline mt-6 inline-flex items-center gap-2 text-sm font-medium text-copper"
                            >
                              Konzultovať túto službu <ArrowRight className="size-4" />
                            </a>
                          </div>
                        </div>
                        <div className="overflow-hidden rounded-[12px]">
                          <img
                            src={s.image}
                            alt=""
                            width={1326}
                            height={864}
                            loading="lazy"
                            className={`aspect-[16/10] w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${isOpen ? "scale-100" : "scale-110"}`}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* 02 EXPERTÍZA */}
      <section
        ref={expertiseRef}
        className="grain relative flex min-h-[620px] h-[88svh] max-h-[860px] w-full items-center overflow-hidden bg-espresso"
      >
        <img
          ref={expertiseImgRef}
          src={expertiseBg}
          alt=""
          width={1442}
          height={841}
          loading="lazy"
          style={{ transform: "scale(1.2)" }}
          className="absolute inset-0 !z-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 !z-0 bg-espresso/65" />
        <div className="mx-auto w-full max-w-[1360px] px-5 text-cream md:px-10">
          <Eyebrow index="02" light>
            Expertíza
          </Eyebrow>
          <h2
            data-reveal
            className="max-w-[18ch] font-display text-[40px] leading-[1.02] tracking-[-0.03em] md:text-7xl lg:text-[84px]"
          >
            Prepájame vizuál, dáta a kampane do{" "}
            <em className="accent text-copper-light">reálnych výsledkov</em>
          </h2>
          <div
            data-reveal
            className="mt-12 flex flex-col gap-8 border-t border-cream/20 pt-8 md:flex-row md:items-center md:justify-between"
          >
            <p className="max-w-md text-cream/75">
              Každé rozhodnutie o vizuáli, webe či kampani meriame tým, či privádza kupujúcich
              pripravených na rozhodnutie.
            </p>
            <a
              href="#kontakt"
              className="group inline-flex w-fit items-center gap-3 rounded-full border border-cream/40 py-2 pl-6 pr-2 text-sm font-medium transition-colors duration-200 hover:bg-cream hover:text-cocoa"
            >
              Nezáväzná konzultácia
              <span className="grid size-9 place-items-center rounded-full bg-copper text-cream">
                <ArrowRight className="size-4" />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* 03 BALÍČKY */}
      <section id="balicky" className="bg-cream">
        <div className="mx-auto max-w-[1360px] px-5 py-24 md:px-10 md:py-36">
          <div className="grid items-end gap-8 md:grid-cols-2">
            <div>
              <Eyebrow index="03">Balíčky</Eyebrow>
              <h2
                data-reveal
                className="font-display text-[40px] leading-[1.02] tracking-[-0.03em] md:text-[64px]"
              >
                Vyberte si rozsah <em className="accent text-copper">spolupráce</em>
              </h2>
            </div>
            <p
              data-reveal
              className="max-w-md text-base leading-relaxed text-cocoa/70 md:justify-self-end"
            >
              Balíky sú navrhnuté pre rôzne typy projektov, podľa ich fázy, cieľa a náročnosti.
              Finálne nastavenie vždy vychádza z konkrétneho zadania.
            </p>
          </div>

          <div className="mt-16 grid gap-5 lg:grid-cols-3">
            {packages.map((p) => (
              <div
                key={p.name}
                data-reveal
                className={`relative flex flex-col rounded-[16px] p-8 transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 md:p-10 ${
                  p.highlight
                    ? "grain bg-espresso text-cream shadow-[0_30px_60px_-30px_rgba(26,18,12,0.6)]"
                    : "border border-cocoa/12 bg-[#FBF8F3] hover:shadow-[0_24px_48px_-28px_rgba(26,18,12,0.35)]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`text-[11px] uppercase tracking-[0.2em] ${p.highlight ? "text-cream/60" : "text-cocoa/50"}`}
                  >
                    {p.label}
                  </span>
                  {p.badge && (
                    <span className="rounded-full bg-copper px-3 py-1 text-[11px] font-medium text-cream">
                      {p.badge}
                    </span>
                  )}
                </div>
                <h3 className="mt-6 font-display text-[34px] leading-none tracking-[-0.02em]">
                  {p.name}
                </h3>
                <p
                  className={`mt-4 text-sm leading-relaxed ${p.highlight ? "text-cream/70" : "text-cocoa/65"}`}
                >
                  {p.desc}
                </p>
                <div
                  className={`mt-8 flex items-baseline gap-2 border-y py-6 ${p.highlight ? "border-cream/15" : "border-cocoa/10"}`}
                >
                  {p.pricePrefix && <span className="text-sm opacity-60">{p.pricePrefix}</span>}
                  <span
                    className={`font-display tracking-[-0.03em] ${p.priceSuffix ? "text-[52px] leading-none" : "accent text-[44px] leading-none"}`}
                  >
                    {p.price}
                  </span>
                  {p.priceSuffix && <span className="text-2xl opacity-60">{p.priceSuffix}</span>}
                </div>
                <ul className="mt-6 flex-1 space-y-3 text-sm">
                  {p.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span
                        className={`mt-[7px] size-1.5 shrink-0 rounded-full ${p.highlight ? "bg-copper-light" : "bg-copper"}`}
                      />
                      <span className={p.highlight ? "text-cream/85" : "text-cocoa/80"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() => choosePackage(p.name)}
                  className={`group mt-10 inline-flex items-center justify-between rounded-full py-2 pl-6 pr-2 text-sm font-medium transition-colors duration-200 ${
                    p.highlight
                      ? "bg-cream text-cocoa hover:bg-white"
                      : "bg-cocoa text-cream hover:bg-espresso"
                  }`}
                >
                  {p.cta}
                  <span className="grid size-9 place-items-center rounded-full bg-copper text-cream transition-transform duration-200 group-hover:translate-x-0.5">
                    <ArrowRight className="size-4" />
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 PROCES */}
      <section id="proces" className="bg-sand">
        <div className="mx-auto max-w-[1360px] px-5 py-24 md:px-10 md:py-36">
          <div className="grid gap-8 md:grid-cols-2 md:items-end">
            <div>
              <Eyebrow index="04">Proces</Eyebrow>
              <h2
                data-reveal
                className="font-display text-[40px] leading-[1.02] tracking-[-0.03em] md:text-[64px]"
              >
                Jeden partner. Kompletný <em className="accent text-copper">marketingový</em> cyklus
              </h2>
            </div>
            <p
              data-reveal
              className="max-w-md text-base leading-relaxed text-cocoa/70 md:justify-self-end"
            >
              Projekt nevnímame ako sériu samostatných úloh, ale ako celok, v ktorom má každé
              rozhodnutie vplyv na to ďalšie.
            </p>
          </div>
          <ol className="mt-16 grid gap-px overflow-hidden rounded-[16px] bg-cocoa/12 sm:grid-cols-2 lg:grid-cols-4">
            {cycle.map((step, i) => (
              <li
                key={step.title}
                data-reveal
                className="flex flex-col bg-sand p-8 md:min-h-[320px] md:p-10"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="accent text-[56px] leading-none text-copper">0{i + 1}</span>
                <h3 className="mt-auto pt-10 font-display text-2xl leading-tight tracking-[-0.02em]">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-cocoa/70">{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 05 KLIENTI */}
      <section className="bg-cream py-20 md:py-28" aria-labelledby="klienti-nadpis">
        <div className="mx-auto max-w-[1360px] px-5 md:px-10">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <Eyebrow index="05">Klienti</Eyebrow>
              <h2
                id="klienti-nadpis"
                data-reveal
                className="font-display text-[32px] leading-[1.05] tracking-[-0.03em] md:text-5xl"
              >
                Vybrané <em className="accent text-copper">spolupráce</em>
              </h2>
            </div>
          </div>
        </div>
        <div className="marquee mt-12 overflow-hidden border-y border-cocoa/12 py-8 [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
          <ul className="sr-only">
            {partners.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
          <div className="marquee-track flex w-max items-center" aria-hidden="true">
            {[...partners, ...partners, ...partners, ...partners].map((n, i) => (
              <span
                key={i}
                className="flex items-center whitespace-nowrap font-display text-3xl uppercase tracking-[0.08em] text-cocoa/40 transition-colors duration-200 hover:text-cocoa md:text-5xl"
              >
                <span className="px-8 md:px-14">{n}</span>
                <span className="text-base text-copper">✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 06 REFERENCIE */}
      <section
        id="referencie"
        className="bg-cream"
        aria-roledescription="karusel"
        aria-label="Referencie klientov"
      >
        <div className="mx-auto max-w-[1360px] px-5 pb-24 pt-8 md:px-10 md:pb-36">
          <div className="flex items-end justify-between gap-6">
            <div>
              <Eyebrow index="06">Referencie</Eyebrow>
              <h2
                data-reveal
                className="font-display text-[40px] leading-[1.02] tracking-[-0.03em] md:text-[64px]"
              >
                Povedali <em className="accent text-copper">o nás</em>
              </h2>
            </div>
            <div className="hidden items-center gap-3 md:flex">
              <CarouselButtons onPrev={prevTestimonial} onNext={nextTestimonial} />
            </div>
          </div>

          <div className="mt-14 overflow-hidden rounded-[16px]">
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
              style={{ transform: `translateX(-${testimonialIndex * 100}%)` }}
              aria-live="polite"
            >
              {testimonials.map((t, i) => (
                <div
                  key={t.name}
                  role="group"
                  aria-roledescription="snímka"
                  aria-label={`${i + 1} z ${testimonials.length}`}
                  inert={i !== testimonialIndex}
                  className="grid w-full shrink-0 gap-5 lg:grid-cols-[1fr_1.25fr]"
                >
                  <figure className="flex flex-col justify-between rounded-[16px] border border-cocoa/12 bg-[#FBF8F3] p-8 md:p-12">
                    <div>
                      <span
                        className="accent block text-[96px] leading-[0.6] text-copper"
                        aria-hidden="true"
                      >
                        “
                      </span>
                      <blockquote className="mt-6 font-display text-2xl font-light leading-snug tracking-[-0.015em] md:text-[30px]">
                        {t.quote}
                      </blockquote>
                    </div>
                    <figcaption className="mt-10 flex items-center gap-4 border-t border-cocoa/10 pt-6">
                      <img
                        src={t.photo}
                        alt=""
                        width={96}
                        height={96}
                        loading="lazy"
                        className="size-14 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="font-medium">{t.name}</div>
                        <div className="text-sm text-cocoa/60">{t.company}</div>
                      </div>
                      <div
                        className="flex items-center gap-1.5 text-copper"
                        aria-label={`Hodnotenie ${t.rating} z 5`}
                      >
                        <Star className="size-4 fill-current" aria-hidden="true" />
                        <span className="text-sm font-medium text-cocoa">{t.rating}</span>
                      </div>
                    </figcaption>
                  </figure>
                  <div className="img-zoom relative min-h-[320px] overflow-hidden rounded-[16px] md:min-h-[480px]">
                    <img
                      src={t.projectImg}
                      alt={t.projectName}
                      width={1280}
                      height={768}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-espresso/85 to-transparent p-6 text-cream md:p-8">
                      <div>
                        <span className="mb-3 inline-block rounded-full bg-cream/90 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-cocoa">
                          Projekt
                        </span>
                        <div className="font-display text-2xl tracking-[-0.02em] md:text-3xl">
                          {t.projectName}
                        </div>
                        <div className="text-sm text-cream/75">{t.projectDesc}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="font-display text-sm tabular-nums text-cocoa/60">
                0{testimonialIndex + 1} / 0{testimonials.length}
              </span>
              <div className="flex gap-1">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setTestimonialIndex(i)}
                    aria-label={`Referencia ${i + 1}`}
                    aria-current={i === testimonialIndex}
                    className="grid h-11 w-8 place-items-center"
                  >
                    <span
                      className={`block h-[2px] rounded-full transition-all duration-300 ${i === testimonialIndex ? "w-8 bg-copper" : "w-4 bg-cocoa/25"}`}
                    />
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-3 md:hidden">
              <CarouselButtons onPrev={prevTestimonial} onNext={nextTestimonial} />
            </div>
          </div>
        </div>
      </section>

      {/* 07 FAQ */}
      <section id="faq" className="bg-sand">
        <div className="mx-auto grid max-w-[1360px] gap-12 px-5 py-24 md:grid-cols-[1fr_1.3fr] md:px-10 md:py-36">
          <div className="flex flex-col">
            <Eyebrow index="07">FAQ</Eyebrow>
            <h2
              data-reveal
              className="font-display text-[40px] leading-[1.02] tracking-[-0.03em] md:text-[64px]"
            >
              Často kladené <em className="accent text-copper">otázky</em>
            </h2>
            <p data-reveal className="mt-6 max-w-md leading-relaxed text-cocoa/70">
              Nie ste si istí, ktoré služby sú pre váš projekt dôležité? Radi vám odporučíme
              riešenie podľa toho, či riešite predaj, prenájom alebo celkové uvedenie projektu na
              trh.
            </p>
            <div className="mt-10 md:mt-auto md:pt-12">
              <div className="text-sm text-cocoa/60">Máte inú otázku?</div>
              <a
                href="#kontakt"
                className="link-underline mt-2 inline-flex items-center gap-2 font-display text-2xl tracking-[-0.02em] text-cocoa"
              >
                Napíšte nám <ArrowUpRight className="size-5 text-copper" />
              </a>
            </div>
          </div>
          <div className="border-t border-cocoa/15">
            {faqs.map((item) => (
              <details
                key={item.q}
                data-reveal
                className="group border-b border-cocoa/15 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-lg leading-snug transition-colors duration-200 hover:text-copper md:text-xl">
                  <span>{item.q}</span>
                  <span className="grid size-10 shrink-0 place-items-center rounded-full border border-cocoa/20 transition-colors duration-200 group-open:border-copper group-open:bg-copper group-open:text-cream">
                    <Plus className="size-4 transition-transform duration-300 group-open:rotate-45" />
                  </span>
                </summary>
                <p className="max-w-xl pb-6 pr-14 leading-relaxed text-cocoa/70">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 08 KONTAKT */}
      <section id="kontakt" className="grain bg-espresso text-cream">
        <div className="mx-auto max-w-[1360px] px-5 py-24 md:px-10 md:py-36">
          <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
            <div className="flex flex-col">
              <Eyebrow index="08" light>
                Kontakt
              </Eyebrow>
              <h2
                data-reveal
                className="font-display text-[44px] leading-[1] tracking-[-0.035em] md:text-[80px]"
              >
                Pozrime sa, čo váš projekt <em className="accent text-copper-light">potrebuje</em>
              </h2>
              <p data-reveal className="mt-8 max-w-md leading-relaxed text-cream/70">
                Vyplňte formulár a stručne nám priblížte váš projekt. Náš špecialista sa vám ozve a
                odporučí ďalší krok podľa typu projektu, cieľa a aktuálnej fázy.
              </p>
              <ul className="mt-12 space-y-1 border-t border-cream/15 lg:mt-auto">
                <ContactRow
                  icon={<Mail className="size-4" />}
                  label="E-mail"
                  href={`mailto:${CONTACT.email}`}
                >
                  {CONTACT.email}
                </ContactRow>
                <ContactRow
                  icon={<Phone className="size-4" />}
                  label="Telefón"
                  href={`tel:${CONTACT.phoneHref}`}
                >
                  {CONTACT.phone}
                </ContactRow>
                <ContactRow icon={<MapPin className="size-4" />} label="Adresa">
                  Ulica 1, PSČ Mesto, Slovenská republika
                </ContactRow>
              </ul>
            </div>
            <ContactForm selectedPackage={selectedPackage} onPackageChange={setSelectedPackage} />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="grain overflow-hidden border-t border-cream/10 bg-espresso text-cream">
        <div className="mx-auto grid max-w-[1360px] gap-12 px-5 pt-20 md:grid-cols-[1.4fr_1fr_1fr] md:px-10">
          <div>
            <p className="font-display text-3xl leading-tight tracking-[-0.025em] md:text-4xl">
              Spojme sa a posuňme váš projekt <em className="accent text-copper-light">ďalej</em>
            </p>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-cream/60">
              Marketingové štúdio pre realitný development. Pomáhame developerom a maklérom predávať
              nehnuteľnosti s pomocou vizuálu, dát a presných kampaní.
            </p>
          </div>
          <nav aria-label="Pätička">
            <div className="mb-5 text-[11px] uppercase tracking-[0.2em] text-cream/50">
              Navigácia
            </div>
            <ul className="space-y-3 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="link-underline text-cream/80 hover:text-cream">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <div className="mb-5 text-[11px] uppercase tracking-[0.2em] text-cream/50">
              Sledujte nás
            </div>
            <div className="flex gap-2">
              {[
                { Ic: Instagram, label: "Instagram" },
                { Ic: Facebook, label: "Facebook" },
                { Ic: Linkedin, label: "LinkedIn" },
              ].map(({ Ic, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="grid size-11 place-items-center rounded-full border border-cream/20 text-cream transition-colors duration-200 hover:border-copper hover:bg-copper"
                >
                  <Ic className="size-4" />
                </a>
              ))}
            </div>
            <a
              href={`mailto:${CONTACT.email}`}
              className="link-underline mt-8 inline-block text-sm text-cream/80"
            >
              {CONTACT.email}
            </a>
          </div>
        </div>
        <div className="mx-auto max-w-[1360px] px-5 md:px-10">
          <div
            aria-hidden="true"
            className="select-none pt-24 font-display text-[30vw] font-light leading-[0.8] tracking-[-0.06em] text-cream/[0.07] md:text-[23vw] xl:text-[310px]"
          >
            LIČI<span className="text-copper/60">.</span>
          </div>
        </div>
        <div className="border-t border-cream/10">
          <div className="mx-auto flex max-w-[1360px] flex-col gap-3 px-5 py-6 text-xs text-cream/50 md:flex-row md:justify-between md:px-10">
            <span>© {new Date().getFullYear()} LIČI Real Estate</span>
            <a href="#" className="hover:text-cream">
              Ochrana osobných údajov
            </a>
          </div>
        </div>
      </footer>

      <FloatingCta />
    </div>
  );
}

function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <nav
        aria-label="Hlavná navigácia"
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-300 ${
          scrolled && !open
            ? "border-b border-cream/10 bg-espresso/80 backdrop-blur-md"
            : "border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-5 text-cream md:px-10">
          <a
            href="#"
            className="font-display text-[28px] font-normal tracking-[-0.04em]"
            aria-label="LIČI, na úvod"
          >
            LIČI<span className="text-copper-light">.</span>
          </a>
          <ul className="hidden items-center gap-9 text-sm md:flex">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="link-underline text-cream/85 transition-colors hover:text-cream"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#kontakt"
            className="hidden rounded-full border border-cream/35 px-5 py-2 text-sm transition-colors duration-200 hover:bg-cream hover:text-cocoa md:inline-flex"
          >
            Kontakt
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobilne-menu"
            aria-label={open ? "Zavrieť menu" : "Otvoriť menu"}
            className="grid size-11 place-items-center rounded-full border border-cream/30 md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>
      <div
        id="mobilne-menu"
        inert={!open}
        className={`grain fixed inset-0 z-40 flex flex-col bg-espresso px-5 pb-[max(2rem,env(safe-area-inset-bottom))] pt-28 text-cream transition-opacity duration-300 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <ul className="space-y-1">
          {[...navLinks, { href: "#kontakt", label: "Kontakt" }].map((l, i) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-4 border-b border-cream/10 py-4 font-display text-4xl tracking-[-0.03em]"
              >
                <span className="text-sm tabular-nums text-cream/40">0{i + 1}</span>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-auto space-y-2 text-sm text-cream/70">
          <a href={`mailto:${CONTACT.email}`} className="block">
            {CONTACT.email}
          </a>
          <a href={`tel:${CONTACT.phoneHref}`} className="block">
            {CONTACT.phone}
          </a>
        </div>
      </div>
    </>
  );
}

function FloatingCta() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const contact = document.getElementById("kontakt");
    let contactInView = false;
    const io = contact
      ? new IntersectionObserver(([e]) => {
          contactInView = e.isIntersecting;
          update();
        })
      : null;
    const update = () => setVisible(window.scrollY > window.innerHeight * 0.8 && !contactInView);
    if (contact && io) io.observe(contact);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      io?.disconnect();
    };
  }, []);
  return (
    <a
      href="#kontakt"
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      className={`fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-5 z-30 inline-flex items-center gap-3 rounded-full bg-copper py-2 pl-5 pr-2 text-sm font-medium text-cream shadow-[0_18px_40px_-12px_rgba(26,18,12,0.55)] transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[#84492a] ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      Poďme sa rozprávať
      <span className="grid size-8 place-items-center rounded-full bg-cream/15">
        <ArrowRight className="size-4" />
      </span>
    </a>
  );
}

function CarouselButtons({ onPrev, onNext }: { onPrev: () => void; onNext: () => void }) {
  const cls =
    "grid size-12 place-items-center rounded-full border border-cocoa/20 text-cocoa transition-colors duration-200 hover:border-copper hover:bg-copper hover:text-cream";
  return (
    <>
      <button type="button" onClick={onPrev} aria-label="Predchádzajúca referencia" className={cls}>
        <ChevronLeft className="size-5" />
      </button>
      <button type="button" onClick={onNext} aria-label="Ďalšia referencia" className={cls}>
        <ChevronRight className="size-5" />
      </button>
    </>
  );
}

function ContactRow({
  icon,
  label,
  href,
  children,
}: {
  icon: ReactNode;
  label: string;
  href?: string;
  children: ReactNode;
}) {
  const inner = (
    <>
      <span className="grid size-10 shrink-0 place-items-center rounded-full border border-cream/20 text-copper-light">
        {icon}
      </span>
      <span className="flex flex-col">
        <span className="text-[11px] uppercase tracking-[0.18em] text-cream/45">{label}</span>
        <span className="text-base text-cream/90">{children}</span>
      </span>
    </>
  );
  return (
    <li className="border-b border-cream/15">
      {href ? (
        <a
          href={href}
          className="group flex items-center gap-5 py-5 transition-colors hover:text-copper-light"
        >
          {inner}
        </a>
      ) : (
        <div className="flex items-center gap-5 py-5">{inner}</div>
      )}
    </li>
  );
}

const fieldCls =
  "w-full border-0 border-b border-cream/30 bg-transparent px-0 py-3 text-base text-cream placeholder:text-cream/35 outline-none transition-colors focus:border-copper-light focus-visible:ring-0";

function ContactForm({
  selectedPackage,
  onPackageChange,
}: {
  selectedPackage: string;
  onPackageChange: (v: string) => void;
}) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error" | "unconfigured">(
    "idle",
  );

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined;
    if (!endpoint) {
      setStatus("unconfigured");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      data-reveal
      className="grid gap-7 rounded-[20px] border border-cream/12 bg-cream/[0.04] p-7 md:p-12"
      aria-describedby="form-status"
    >
      <div className="grid gap-7 md:grid-cols-2">
        <label className="grid gap-1 text-sm">
          <span className="text-[11px] uppercase tracking-[0.18em] text-cream/55">
            Meno a priezvisko *
          </span>
          <input
            name="meno"
            type="text"
            required
            autoComplete="name"
            className={fieldCls}
            placeholder="Jana Nováková"
          />
        </label>
        <label className="grid gap-1 text-sm">
          <span className="text-[11px] uppercase tracking-[0.18em] text-cream/55">Telefón</span>
          <input
            name="telefon"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            className={fieldCls}
            placeholder="+421"
          />
        </label>
      </div>
      <label className="grid gap-1 text-sm">
        <span className="text-[11px] uppercase tracking-[0.18em] text-cream/55">E-mail *</span>
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          className={fieldCls}
          placeholder="jana@developer.sk"
        />
      </label>
      <fieldset className="grid gap-3">
        <legend className="mb-3 text-[11px] uppercase tracking-[0.18em] text-cream/55">
          Segment
        </legend>
        <div className="flex flex-wrap gap-2">
          {["Rezidenčný", "Komerčný"].map((s) => (
            <label key={s} className="cursor-pointer">
              <input type="radio" name="segment" value={s} className="peer sr-only" />
              <span className="inline-flex min-h-11 items-center rounded-full border border-cream/30 px-5 text-sm text-cream/80 transition-colors peer-checked:border-copper peer-checked:bg-copper peer-checked:text-cream peer-focus-visible:ring-2 peer-focus-visible:ring-copper-light">
                {s}
              </span>
            </label>
          ))}
        </div>
      </fieldset>
      <label className="grid gap-1 text-sm">
        <span className="text-[11px] uppercase tracking-[0.18em] text-cream/55">Balík</span>
        <select
          name="balik"
          value={selectedPackage}
          onChange={(e) => onPackageChange(e.target.value)}
          className={`${fieldCls} [&>option]:text-cocoa`}
        >
          <option value="">Zatiaľ neviem</option>
          {packages.map((p) => (
            <option key={p.name} value={p.name}>
              {p.name}
            </option>
          ))}
        </select>
      </label>
      <label className="grid gap-1 text-sm">
        <span className="text-[11px] uppercase tracking-[0.18em] text-cream/55">O projekte</span>
        <textarea
          name="sprava"
          rows={3}
          className={`${fieldCls} resize-none`}
          placeholder="Lokalita, počet jednotiek, fáza predaja…"
        />
      </label>
      <label className="flex items-start gap-3 text-sm text-cream/70">
        <input
          name="suhlas"
          type="checkbox"
          required
          className="mt-0.5 size-5 shrink-0 accent-[#955A38]"
        />
        <span>Súhlasím so spracovaním osobných údajov za účelom odpovede na dopyt. *</span>
      </label>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === "sending"}
          className="group inline-flex w-fit items-center gap-3 rounded-full bg-cream py-2 pl-7 pr-2 text-sm font-medium text-cocoa transition-colors duration-200 hover:bg-white disabled:opacity-60"
        >
          {status === "sending" ? "Odosielam…" : "Odoslať dopyt"}
          <span className="grid size-9 place-items-center rounded-full bg-copper text-cream transition-transform duration-200 group-hover:translate-x-0.5">
            <ArrowRight className="size-4" />
          </span>
        </button>
        <p id="form-status" role="status" aria-live="polite" className="text-sm text-cream/75">
          {status === "sent" && "Ďakujeme, ozveme sa vám do 24 hodín."}
          {status === "error" && "Odoslanie zlyhalo. Skúste to znova alebo nám napíšte e-mail."}
          {status === "unconfigured" &&
            `Formulár zatiaľ nie je napojený. Napíšte nám na ${CONTACT.email}.`}
        </p>
      </div>
    </form>
  );
}

function Hotspot({
  top,
  left,
  iconSrc,
  title,
  desc,
  cardSide = "below-right",
}: {
  top: string;
  left: string;
  iconSrc: string;
  title: string;
  desc: string;
  cardSide?: "below-right" | "below-left";
}) {
  const cardPos =
    cardSide === "below-right"
      ? "top-12 left-1/2 -translate-x-5"
      : "top-12 right-1/2 translate-x-5";
  const corner = cardSide === "below-right" ? "rounded-tl-none" : "rounded-tr-none";
  const id = `hotspot-${title.replace(/\W+/g, "-")}`;
  return (
    <div
      className="group pointer-events-auto absolute z-20 -translate-x-1/2 -translate-y-1/2"
      style={{ top, left }}
    >
      <button
        type="button"
        aria-label={title}
        aria-describedby={id}
        className="relative grid size-11 place-items-center rounded-full border border-cream/40 bg-cream/15 backdrop-blur-md transition-[transform,background-color] duration-200 hover:scale-105 hover:bg-cream focus-visible:bg-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-light"
      >
        <span className="hotspot-ping pointer-events-none absolute inset-0 rounded-full bg-cream/40" />
        <img
          src={iconSrc}
          alt=""
          className="relative h-[18px] w-[18px] brightness-0 invert transition-[filter] duration-200 group-hover:invert-0 group-focus-within:invert-0"
        />
      </button>
      <div
        id={id}
        role="tooltip"
        className={`pointer-events-none absolute ${cardPos} w-[250px] translate-y-1 rounded-[12px] ${corner} border border-cream/15 bg-espresso/80 p-4 text-left text-cream opacity-0 shadow-[0_18px_40px_-12px_rgba(0,0,0,0.5)] backdrop-blur-md transition-[opacity,transform] duration-200 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100`}
      >
        <div className="text-[15px] font-medium leading-tight">{title}</div>
        <p className="mt-1.5 text-xs leading-[1.5] text-cream/75">{desc}</p>
      </div>
    </div>
  );
}
