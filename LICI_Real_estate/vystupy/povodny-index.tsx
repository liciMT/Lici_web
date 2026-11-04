import { useState, useEffect, useRef } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Monitor,
  Megaphone,
  Users,
  Hash,
  Compass,
  Star,
  Phone,
  Mail,
  MapPin,
  Plus,
  Play,
  ArrowRight,
  ArrowUp,
  ArrowDown,
  Instagram,
  Facebook,
  Linkedin,
  Type,
  LineChart,
  Camera,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import heroBuildingAsset from "@/assets/hero-building-new.png.asset.json";
const heroBuilding = heroBuildingAsset.url;

import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import ctaVilla from "@/assets/cta-villa.jpg";
import expertiseBg from "@/assets/expertise-bg.png.asset.json";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";
import serviceVisualAsset from "@/assets/service-visual-new.png.asset.json";
const serviceVisual = serviceVisualAsset.url;
import serviceWebAsset from "@/assets/service-web-new.png.asset.json";
const serviceWeb = serviceWebAsset.url;
import serviceBrandingAsset from "@/assets/service-branding-new.png.asset.json";
const serviceBranding = serviceBrandingAsset.url;
import serviceAdsAsset from "@/assets/service-ads-new.png.asset.json";
const serviceAds = serviceAdsAsset.url;
import serviceSocialAsset from "@/assets/service-social-new.png.asset.json";
const serviceSocial = serviceSocialAsset.url;
import serviceStrategyAsset from "@/assets/service-strategy-new.png.asset.json";
const serviceStrategy = serviceStrategyAsset.url;

// Custom Figma icons
import iconView3d from "@/assets/icons/view-3d.svg";
import iconGroupAdd from "@/assets/icons/group-add.svg";
import iconDesktop from "@/assets/icons/desktop-mac.svg";
import iconTag from "@/assets/icons/tag.svg";
import iconBranding from "@/assets/icons/branding.svg";

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
  <svg viewBox="0 0 15 13" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <path d="M4.5 13V12.2778L6 10.8333H1.5C1.0875 10.8333 0.734375 10.6919 0.440625 10.409C0.146875 10.1262 0 9.78611 0 9.38889V1.44444C0 1.04722 0.146875 0.707176 0.440625 0.424306C0.734375 0.141435 1.0875 0 1.5 0H13.5C13.9125 0 14.2656 0.141435 14.5594 0.424306C14.8531 0.707176 15 1.04722 15 1.44444V9.38889C15 9.78611 14.8531 10.1262 14.5594 10.409C14.2656 10.6919 13.9125 10.8333 13.5 10.8333H9L10.5 12.2778V13H4.5ZM1.5 7.22222H13.5V1.44444H1.5V7.22222Z" />
  </svg>
);
const BrandingIcon = ({ className }: { className?: string; strokeWidth?: number }) => (
  <svg viewBox="0 0 13 15" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <path d="M1.76667 15C1.16667 15 0.722222 14.8625 0.433333 14.5875C0.144444 14.3125 0 13.9 0 13.35C0 12.625 0.272222 12.1625 0.816667 11.9625C1.36111 11.7625 2.00556 11.6625 2.75 11.6625H3.1V10.6125C3.1 10.1875 3.09444 9.84063 3.08333 9.57188C3.07222 9.30313 3.03889 9.08125 2.98333 8.90625C2.92778 8.73125 2.86389 8.60938 2.79167 8.54063C2.71944 8.47188 2.62222 8.4375 2.5 8.4375C2.4 8.4375 2.30833 8.45625 2.225 8.49375C2.14167 8.53125 2.07222 8.58125 2.01667 8.64375C1.97222 8.70625 1.94444 8.77188 1.93333 8.84063C1.92222 8.90938 1.92778 8.98125 1.95 9.05625C2.01667 9.19375 2.09444 9.32813 2.18333 9.45938C2.27222 9.59063 2.31667 9.74375 2.31667 9.91875C2.31667 10.2313 2.21944 10.4969 2.025 10.7156C1.83056 10.9344 1.59444 11.0438 1.31667 11.0438C1.03889 11.0438 0.802778 10.9344 0.608333 10.7156C0.413889 10.4969 0.316667 10.2313 0.316667 9.91875C0.316667 9.58125 0.383333 9.30625 0.516667 9.09375C0.65 8.88125 0.830556 8.7125 1.05833 8.5875C1.28611 8.4625 1.55 8.375 1.85 8.325C2.15 8.275 2.47222 8.25 2.81667 8.25C3.76111 8.25 4.41667 8.44063 4.78333 8.82188C5.15 9.20313 5.33333 9.875 5.33333 10.8375V13.5938C5.33333 13.8313 5.35833 14.0063 5.40833 14.1188C5.45833 14.2313 5.54444 14.2875 5.66667 14.2875C5.8 14.2875 5.90833 14.175 5.99167 13.95C6.075 13.725 6.12778 13.375 6.15 12.9H6.33333C6.3 13.675 6.16944 14.2188 5.94167 14.5313C5.71389 14.8438 5.33333 15 4.8 15C4.32222 15 3.94722 14.9156 3.675 14.7469C3.40278 14.5781 3.22778 14.325 3.15 13.9875C3.03889 14.35 2.875 14.6094 2.65833 14.7656C2.44167 14.9219 2.14444 15 1.76667 15ZM7.98333 15C7.76111 15 7.58056 14.8969 7.44167 14.6906C7.30278 14.4844 7.27778 14.2625 7.36667 14.025L9.06667 8.98125C9.14445 8.76875 9.26667 8.59375 9.43333 8.45625C9.6 8.31875 9.78889 8.25 10 8.25C10.2111 8.25 10.4 8.31875 10.5667 8.45625C10.7333 8.59375 10.8556 8.76875 10.9333 8.98125L12.6333 14.025C12.7222 14.2625 12.6972 14.4844 12.5583 14.6906C12.4194 14.8969 12.2389 15 12.0167 15C11.8833 15 11.7611 14.9563 11.65 14.8688C11.5389 14.7813 11.4556 14.6625 11.4 14.5125L11.0667 13.425H8.93333L8.6 14.5125C8.55556 14.65 8.47778 14.7656 8.36667 14.8594C8.25556 14.9531 8.12778 15 7.98333 15ZM2.58333 14.4563C2.72778 14.4563 2.85 14.3281 2.95 14.0719C3.05 13.8156 3.1 13.5063 3.1 13.1438V11.8875C2.81111 11.8875 2.6 11.9844 2.46667 12.1781C2.33333 12.3719 2.26667 12.6875 2.26667 13.125V13.3313C2.26667 13.7813 2.28889 14.0813 2.33333 14.2313C2.37778 14.3813 2.46111 14.4563 2.58333 14.4563ZM9.36667 12.1125H10.65L10 9.975L9.36667 12.1125ZM8.75 6.76875C8.21667 6.76875 7.79167 6.55938 7.475 6.14063C7.15833 5.72188 7 5.15625 7 4.44375C7 3.14375 7.36667 2.07813 8.1 1.24688C8.83333 0.415625 9.77222 0 10.9167 0C11.3833 0 11.7611 0.059375 12.05 0.178125C12.3389 0.296875 12.4833 0.45 12.4833 0.6375C12.4833 0.7125 12.4722 0.7875 12.45 0.8625C12.4278 0.9375 12.3889 1.00625 12.3333 1.06875C12.2778 1.15625 12.2083 1.21875 12.125 1.25625C12.0417 1.29375 11.9556 1.3 11.8667 1.275C11.7111 1.225 11.5333 1.18125 11.3333 1.14375C11.1333 1.10625 10.95 1.0875 10.7833 1.0875C9.99444 1.0875 9.36111 1.3875 8.88333 1.9875C8.40556 2.5875 8.16667 3.38125 8.16667 4.36875C8.16667 4.64375 8.21111 4.93125 8.3 5.23125C8.38889 5.53125 8.58889 5.68125 8.9 5.68125C9.02222 5.68125 9.14167 5.65 9.25833 5.5875C9.375 5.525 9.47778 5.4375 9.56667 5.325C9.75556 5.1 9.93056 4.725 10.0917 4.2C10.2528 3.675 10.4 3.0375 10.5333 2.2875C10.5556 2.125 10.6139 2.00938 10.7083 1.94063C10.8028 1.87188 10.9333 1.8375 11.1 1.8375C11.3 1.8375 11.4528 1.89688 11.5583 2.01563C11.6639 2.13438 11.6944 2.28125 11.65 2.45625C11.5167 2.99375 11.4194 3.4625 11.3583 3.8625C11.2972 4.2625 11.2667 4.625 11.2667 4.95C11.2667 5.2 11.2972 5.38125 11.3583 5.49375C11.4194 5.60625 11.5111 5.6625 11.6333 5.6625C11.7556 5.6625 11.875 5.6125 11.9917 5.5125C12.1083 5.4125 12.2722 5.225 12.4833 4.95C12.5056 4.9125 12.5889 4.86875 12.7333 4.81875C12.8222 4.81875 12.8889 4.85625 12.9333 4.93125C12.9778 5.00625 13 5.1125 13 5.25C13 5.6 12.8222 5.9375 12.4667 6.2625C12.1111 6.5875 11.7389 6.75 11.35 6.75C11.0611 6.75 10.8139 6.6625 10.6083 6.4875C10.4028 6.3125 10.2611 6.0625 10.1833 5.7375C10.0167 6.0625 9.81111 6.31563 9.56667 6.49688C9.32222 6.67813 9.05 6.76875 8.75 6.76875ZM0.666667 6.75V2.625C0.666667 1.9 0.894444 1.28125 1.35 0.76875C1.80556 0.25625 2.35556 0 3 0C3.64444 0 4.19444 0.25625 4.65 0.76875C5.10556 1.28125 5.33333 1.9 5.33333 2.625V6.75H4V5.25H2V6.75H0.666667ZM2 3.75H4V2.625C4 2.3125 3.90278 2.04688 3.70833 1.82813C3.51389 1.60938 3.27778 1.5 3 1.5C2.72222 1.5 2.48611 1.60938 2.29167 1.82813C2.09722 2.04688 2 2.3125 2 2.625V3.75Z" />
  </svg>
);

const GroupAddIcon = ({ className }: { className?: string; strokeWidth?: number }) => (
  <svg viewBox="0 0 28 19" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <path d="M14.5833 9.44063C15.1472 8.80729 15.5799 8.0849 15.8812 7.27344C16.1826 6.46198 16.3333 5.62083 16.3333 4.75C16.3333 3.87917 16.1826 3.03802 15.8812 2.22656C15.5799 1.4151 15.1472 0.692708 14.5833 0.059375C15.75 0.217708 16.7222 0.742188 17.5 1.63281C18.2778 2.52344 18.6667 3.5625 18.6667 4.75C18.6667 5.9375 18.2778 6.97656 17.5 7.86719C16.7222 8.75781 15.75 9.28229 14.5833 9.44063ZM21 19V15.4375C21 14.725 20.8444 14.0471 20.5333 13.4039C20.2222 12.7607 19.8139 12.1917 19.3083 11.6969C20.3 12.0531 21.2187 12.5133 22.0646 13.0773C22.9104 13.6414 23.3333 14.4281 23.3333 15.4375V19H21ZM23.3333 10.6875V8.3125H21V5.9375H23.3333V3.5625H25.6667V5.9375H28V8.3125H25.6667V10.6875H23.3333ZM6.0375 8.10469C5.12361 7.17448 4.66667 6.05625 4.66667 4.75C4.66667 3.44375 5.12361 2.32552 6.0375 1.39531C6.95139 0.465104 8.05 0 9.33333 0C10.6167 0 11.7153 0.465104 12.6292 1.39531C13.5431 2.32552 14 3.44375 14 4.75C14 6.05625 13.5431 7.17448 12.6292 8.10469C11.7153 9.0349 10.6167 9.5 9.33333 9.5C8.05 9.5 6.95139 9.0349 6.0375 8.10469ZM0 19V15.675C0 15.0021 0.170139 14.3836 0.510417 13.8195C0.850694 13.2555 1.30278 12.825 1.86667 12.5281C3.07222 11.9146 4.29722 11.4544 5.54167 11.1477C6.78611 10.8409 8.05 10.6875 9.33333 10.6875C10.6167 10.6875 11.8806 10.8409 13.125 11.1477C14.3694 11.4544 15.5944 11.9146 16.8 12.5281C17.3639 12.825 17.816 13.2555 18.1562 13.8195C18.4965 14.3836 18.6667 15.0021 18.6667 15.675V19H0ZM9.33333 7.125C9.975 7.125 10.5243 6.89245 10.9812 6.42734C11.4382 5.96224 11.6667 5.40312 11.6667 4.75C11.6667 4.09688 11.4382 3.53776 10.9812 3.07266C10.5243 2.60755 9.975 2.375 9.33333 2.375C8.69167 2.375 8.14236 2.60755 7.68542 3.07266C7.22847 3.53776 7 4.09688 7 4.75C7 5.40312 7.22847 5.96224 7.68542 6.42734C8.14236 6.89245 8.69167 7.125 9.33333 7.125ZM2.33333 16.625H16.3333V15.675C16.3333 15.4573 16.2799 15.2594 16.1729 15.0813C16.066 14.9031 15.925 14.7646 15.75 14.6656C14.7 14.1313 13.6403 13.7305 12.5708 13.4633C11.5014 13.1961 10.4222 13.0625 9.33333 13.0625C8.24444 13.0625 7.16528 13.1961 6.09583 13.4633C5.02639 13.7305 3.96667 14.1313 2.91667 14.6656C2.74167 14.7646 2.60069 14.9031 2.49375 15.0813C2.38681 15.2594 2.33333 15.4573 2.33333 15.675V16.625Z" />
  </svg>
);

const TagIcon = ({ className }: { className?: string; strokeWidth?: number }) => (
  <svg viewBox="0 0 15 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <path d="M12.5 0.00260544L11.6667 3.33594H15L14.5833 5.0026H11.25L10.4167 8.33594H13.75L13.3333 10.0026H10L9.16667 13.3359H7.5L8.33333 10.0026H5L4.16667 13.3359H2.5L3.33333 10.0026H3.57628e-07L0.416667 8.33594H3.75L4.58333 5.0026H1.25L1.66667 3.33594H5L5.83333 0.00260544H7.5L6.66667 3.33594H10L10.8333 0.00260544H12.5ZM9.58333 5.0026H6.25L5.41667 8.33594H8.75L9.58333 5.0026Z" />
  </svg>
);

const ChessRookIcon = ({ className }: { className?: string; strokeWidth?: number }) => (
  <svg viewBox="0 0 30 38" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <path d="M1.46418e-06 38L1.09814e-06 28.5C2.53125 26.4417 4.4375 24.2092 5.71875 21.8025C7 19.3958 7.90625 17.195 8.4375 15.2H7.5C6.46875 15.2 5.58594 14.8279 4.85156 14.0837C4.11719 13.3396 3.75 12.445 3.75 11.4L3.75 0H13.125L13.125 5.7H16.875L16.875 0H26.25L26.25 11.4C26.25 12.445 25.8828 13.3396 25.1484 14.0837C24.4141 14.8279 23.5313 15.2 22.5 15.2H21.5156C22.0469 17.195 22.9531 19.3958 24.2344 21.8025C25.5156 24.2092 27.4375 26.4417 30 28.5L30 38H1.46418e-06ZM3.75 34.2H26.25L26.25 30.2575C23.5625 27.7875 21.5859 25.1988 20.3203 22.4913C19.0547 19.7838 18.1563 17.3533 17.625 15.2H12.3281C11.8281 17.3533 10.9375 19.7838 9.65625 22.4913C8.375 25.1988 6.40625 27.7875 3.75 30.2575L3.75 34.2ZM7.5 11.4H22.5L22.5 3.8H20.625L20.625 9.5H9.375L9.375 3.8H7.5L7.5 11.4Z" />
  </svg>
);


const accordionServices = [
  {
    icon: View3dIcon,
    title: "Kompletný vizuálny servis projektov",
    desc: "Postaráme sa o to, aby vaša nehnuteľnosť zaujala na prvý pohľad. Pomocou technológie Matterport vytvoríme virtuálne 3D prehliadky, 2D pôdorysy, profesionálne fotografie aj dronové zábery z výšky. Virtual stagingom alebo klasickým home stagingom oživíme priestory a ukážeme ich skutočný potenciál.",
    image: serviceVisual,
  },
  {
    icon: DesktopIcon,
    title: "Prémiové weby, ako kľúčový predajný kanál",
    desc: "Navrhujeme a vyvíjame realitné weby, ktoré nielen krásne vyzerajú, ale aj predávajú. Optimalizované pre rýchlosť, SEO a konverzie, od landing pages až po kompletné developerské portály.",
    image: serviceWeb,
  },
  {
    icon: BrandingIcon,
    title: "Komplexný branding nehnuteľností",
    desc: "Vizuálna identita projektu od názvu, loga, typografie až po tone of voice. Branding, ktorý dáva nehnuteľnosti charakter a pomáha ju predať za vyššiu cenu.",
    image: serviceBranding,
  },
  {
    icon: GroupAddIcon,
    title: "Výkonnostné kampane, ktoré prinášajú reálny dopyt",
    desc: "Performance kampane na Google, Meta a YouTube cielené presne na vašu kupujúcu cieľovku. Denná optimalizácia, transparentné reporty a fokus na cenu za kvalitný lead.",
    image: serviceAds,
  },
  {
    icon: TagIcon,
    title: "Obsah na sociálne siete, ktorý buduje záujem",
    desc: "Pravidelný obsah pre Instagram, Facebook aj LinkedIn, od konceptu, cez foto/video produkciu až po publikovanie a komunitný manažment.",
    image: serviceSocial,
  },
  {
    icon: ChessRookIcon,
    title: "Predajná stratégia, ktorá pružne reaguje na trh",
    desc: "Cenotvorba, fázovanie predaja, segmentácia jednotiek a sledovanie konkurencie. Stratégia, ktorá sa vie prispôsobiť aktuálnemu dopytu.",
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
    pricePrefix: "Na",
    price: "Dopyt",
    priceSuffix: "",
    desc: "Pre veľké rezidenčné komplexy nad 50 jednotiek, marketing na mieru vrátane PR a eventov.",
    features: [
      "Všetko z Optimal, plus:",
      "PR & media strategy",
      "Kampaň na out-of-home",
      "Event pre brokérov & investorov",
      "Neobmedzené kampane",
      "Full-time project lead",
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

function LiciLanding() {
  const [openService, setOpenService] = useState<number>(0);
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
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const prevTestimonial = () =>
    setTestimonialIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const nextTestimonial = () =>
    setTestimonialIndex((i) => (i + 1) % testimonials.length);

  // Parallax for Expertise section
  const expertiseRef = useRef<HTMLElement>(null);
  const [expertiseOffset, setExpertiseOffset] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = expertiseRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      if (rect.bottom < 0 || rect.top > vh) return;
      // Move image up to ~120px as section scrolls through viewport
      const progress = (vh - rect.top) / (vh + rect.height);
      setExpertiseOffset((progress - 0.5) * 400);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-reveal: observe all [data-reveal] elements once
  useEffect(() => {
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
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <header className="relative h-[calc(75vh+50px)] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroBuilding}
            alt="Moderná rezidenčná budova"
            width={1600}
            height={1024}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#21160E]/55" />
        </div>

        <nav className="relative z-20 mx-auto flex max-w-[1400px] items-center justify-between border-b border-[#F5F1EB]/20 px-10 py-6 text-[#F5F1EB]">
          <div className="font-display text-3xl italic transition-transform duration-300 hover:scale-105">
            LIČI<span className="text-primary">.</span>
          </div>
          <div className="hidden items-center gap-10 text-sm font-medium md:flex">
            <a href="#rezidencne" className="link-underline hover:text-primary transition-colors">Rezidenčné</a>
            <a href="#komercne" className="link-underline hover:text-primary transition-colors">Komerčné</a>
            <a href="#sluzby" className="link-underline hover:text-primary transition-colors">Služby</a>
            <a href="#projekty" className="link-underline hover:text-primary transition-colors">Referencie</a>
            <a href="#kontakt" className="link-underline hover:text-primary transition-colors">Kontakt</a>
          </div>
        </nav>

        {/* HOTSPOTS layer */}
        {([
          {
            top: "32%", left: "6%",
            iconSrc: iconDesktop,
            title: "Prémiové weby",
            desc: "Web ako kľúčový predajný kanál, rýchly, optimalizovaný a navrhnutý na konverziu.",
            card: false,
            cardSide: "below-right",
          },
          {
            top: "36%", left: "94%",
            iconSrc: iconBranding,
            title: "Branding & identita",
            desc: "Vizuálna identita, ktorá projektu dáva charakter, od loga, cez typografiu až po tón komunikácie.",
            card: false,
            cardSide: "below-left",
          },
          {
            top: "70%", left: "92%",
            iconSrc: iconTag,
            title: "Sociálne siete",
            desc: "Obsah pre Instagram a Facebook, ktorý ľudia sledujú a zdieľajú. Pravidelný plán a kvalitný vizuál.",
            card: false,
            cardSide: "below-left",
          },
          {
            top: "calc(82% - 30px)", left: "12%",
            iconSrc: iconView3d,
            title: "Virtuálna prehliadka",
            desc: "Určuje, ako bude projekt komunikovaný, komu bude určený a v akej fáze bude potrebné zdôrazniť konkrétne benefity. Vďaka nej majú jednotlivé výstupy spoločný smer a jasnú obchodnú logiku.",
            card: true,
            cardSide: "below-right",
          },
          {
            top: "calc(86% - 65px)", left: "70%",
            iconSrc: iconGroupAdd,
            title: "Predajná stratégia",
            desc: "Určuje, ako bude projekt komunikovaný, komu bude určený a v akej fáze bude potrebné zdôrazniť konkrétne benefity. Vďaka nej majú jednotlivé výstupy spoločný smer a jasnú obchodnú logiku.",
            card: true,
            cardSide: "below-left",
          },
        ] as const).map((h, i) => (
          <Hotspot key={i} {...h} />
        ))}

        {/* HERO COPY */}
        <div className="absolute inset-0 z-10 mx-auto flex max-w-[1400px] flex-col items-center justify-center px-6 text-center text-[#F5F1EB]">
          <h1 data-reveal className="font-display text-5xl leading-[1.05] tracking-tight md:text-7xl lg:text-[88px]">
            Rozumieme marketingu, <br />
            ktorý predáva nehnuteľnosti
          </h1>
          <p data-reveal className="mt-6 max-w-xl text-base text-[#F5F1EB]/80 md:text-lg">
            Prinesieme váš projekt, tej správnej cieľovej skupine
          </p>
          <a
            data-reveal
            href="#kontakt"
            className="group mt-10 inline-flex items-center gap-2 rounded-full bg-[#955A38] py-[5px] pl-[15px] pr-[5px] text-sm font-medium text-[#F5F1EB] transition-all duration-300 hover:opacity-90 hover:scale-[1.03] hover:shadow-lg"
          >
            Chcem vedieť viac
            <span className="grid size-6 place-items-center rounded-full bg-[#F5F1EB]/20 transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight className="size-3" />
            </span>
          </a>
        </div>
      </header>


      {/* SERVICES ACCORDION (horizontal on desktop, vertical on mobile) */}
      <section id="sluzby" className="bg-[#F5F1EB] px-6 py-28 md:px-10">
        <div className="mx-auto max-w-[1340px]">
          <div data-reveal className="mb-8 text-xs font-medium uppercase tracking-[0.15em] text-[#8A4A28]">
            02 Služby
          </div>
          <h3 data-reveal className="max-w-3xl font-display text-4xl leading-[1.05] text-[#21160E] md:text-[59px]">
            Od virtuálnej prehliadky <br className="hidden md:block" />
            až po predajnú stratégiu
          </h3>

          {/* Vertical stacked accordion */}
          <div className="mt-12 flex flex-col gap-3">
            {accordionServices.map((s, i) => {
              const isOpen = openService === i;
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  data-reveal
                  className="relative overflow-hidden rounded-[8px] transition-transform duration-300 hover:scale-[1.005]"

                  style={{
                    backgroundImage: isOpen
                      ? `linear-gradient(0deg, rgba(33,22,14,0.85) 18%, rgba(33,22,14,0.45) 55%, rgba(33,22,14,0.05) 100%), url(${s.image})`
                      : `linear-gradient(0deg, rgba(33,22,14,0.78), rgba(33,22,14,0.78)), url(${s.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenService(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left md:px-8 md:py-5"
                  >
                    <div className="flex items-center gap-5 md:gap-8">
                      <Icon className="size-5 shrink-0 text-white md:size-6" strokeWidth={1.5} />
                      {!isOpen && (
                        <span className="text-sm font-medium text-[#F5F1EB] md:text-base">
                          {s.title}
                        </span>
                      )}
                    </div>
                    <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#955A38] text-[#F5F1EB] transition md:size-10">
                      {isOpen ? <ArrowUp className="size-4" /> : <ArrowDown className="size-4" />}
                    </span>
                  </button>

                  {/* Open: tall image area + title and description at bottom */}
                  <div
                    className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="flex flex-col justify-end px-5 pb-6 pt-[260px] md:px-8 md:pb-8 md:pt-[480px]">
                        <h3 className="mb-3 font-display text-2xl text-[#F5F1EB] md:text-3xl">
                          {s.title}
                        </h3>
                        <p className="max-w-3xl text-sm leading-relaxed text-[#F5F1EB]/90 md:text-base">
                          {s.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* EXPERTISE FULLWIDTH BANNER */}
      <section ref={expertiseRef} className="relative h-[714px] w-full overflow-hidden">
        <img
          src={expertiseBg.url}
          alt=""
          width={1920}
          height={1200}
          loading="lazy"
          style={{ transform: `translate3d(0, ${expertiseOffset}px, 0) scale(1.45)` }}
          className="absolute inset-0 h-full w-full object-cover will-change-transform"
        />
        <div className="absolute inset-0 bg-[#21160E]/55" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-[#F5F1EB]">
          <div className="flex max-w-4xl flex-col items-center">
            <div data-reveal className="mb-6 text-xs font-medium uppercase tracking-[0.25em] text-[#F5F1EB]/85">
              03 Expertíza
            </div>
            <h2 data-reveal className="text-4xl md:text-6xl lg:text-[64px]">
              Prepájame vizuál, dáta a kampane{"\u00a0"}
              <br className="hidden lg:block" />
              do reálnych výsledkov
            </h2>
            <a
              data-reveal
              href="#kontakt"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#955A38] px-7 py-3.5 text-sm font-medium text-[#F5F1EB] transition-all duration-300 hover:opacity-90 hover:scale-[1.04] hover:shadow-lg"
            >
              CTA pôjde SEM
            </a>
          </div>
        </div>
      </section>


      {/* PACKAGES */}
      <section id="balicky" className="bg-[#F5F1EB]">
        <div className="mx-auto max-w-7xl px-6 py-28">
        <div data-reveal className="mb-4 text-xs font-medium uppercase tracking-[0.15em] text-[#8A4A28]">
          04 Balíčky
        </div>
        <div className="grid items-end gap-10 md:grid-cols-2">
          <h3 data-reveal className="font-display text-4xl leading-[1.05] md:text-6xl">
            Vyberte si <br />
            rozsah <span className="italic text-primary">spolupráce.</span>
          </h3>
          <p data-reveal className="text-muted-foreground md:text-lg">
            Balíky sú navrhnuté pre rôzne typy projektov, podľa ich fázy, cieľa
            a náročnosti. Finálne nastavenie vždy vychádza z konkrétneho zadania.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {packages.map((p) => (
            <div
              key={p.name}
              data-reveal
              className={`group relative flex flex-col rounded-3xl p-8 transition-all duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 hover:bg-[#21160E] hover:text-[#F5F1EB] hover:shadow-2xl hover:shadow-[#21160E]/25 ${
                p.highlight
                  ? "bg-secondary text-secondary-foreground shadow-xl shadow-secondary/20 md:-translate-y-4 md:hover:-translate-y-6"
                  : "bg-card text-card-foreground border border-border hover:border-[#21160E]"
              }`}
            >
              {p.badge && (
                <span className="absolute -top-3 left-8 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground transition-colors duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:bg-[#F5F1EB] group-hover:text-[#21160E]">
                  {p.badge}
                </span>
              )}
              <div className="text-xs uppercase tracking-widest opacity-60 transition-opacity duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-80">{p.label}</div>
              <div className="mt-2 font-display text-3xl">{p.name}</div>
              <div className={`my-6 h-px transition-colors duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:bg-[#F5F1EB]/15 ${p.highlight ? "bg-[#F5F1EB]/15" : "bg-border"}`} />
              <p className={`text-sm transition-colors duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-[#F5F1EB]/75 ${p.highlight ? "text-secondary-foreground/70" : "text-muted-foreground"}`}>
                {p.desc}
              </p>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-sm opacity-60">{p.pricePrefix}</span>
                <span className="font-display text-5xl">{p.price}</span>
                {p.priceSuffix && <span className="text-2xl opacity-70">{p.priceSuffix}</span>}
              </div>
              <ul className="mt-6 flex-1 space-y-2.5 text-sm">
                {p.features.map((f, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="mt-0.5 text-primary transition-colors duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-[#F5F1EB]">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`mt-8 rounded-full px-6 py-3 text-sm font-medium transition-all duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03] group-hover:bg-[#F5F1EB] group-hover:text-[#21160E] ${
                  p.highlight
                    ? "bg-primary text-primary-foreground hover:opacity-90"
                    : "bg-secondary text-secondary-foreground hover:opacity-90"
                }`}
              >
                {p.cta}
              </button>
            </div>
          ))}
        </div>

        </div>
      </section>

      {/* CYCLE / PROCES */}
      <section className="mx-auto max-w-7xl px-6 py-28">
        <div data-reveal className="mb-4 text-xs font-medium uppercase tracking-[0.15em] text-[#8A4A28]">
          05 Proces
        </div>
        <div className="grid gap-12 md:grid-cols-[1.1fr_1.4fr]">
          <div>
            <h3 data-reveal className="font-display text-3xl leading-[1.05] md:text-5xl">
              Jeden partner. <br />
              Kompletný{" "}
              <span className="italic text-primary">marketingový</span> cyklus
            </h3>
            <p data-reveal className="mt-6 text-muted-foreground">
              Projekt nevnímame ako sériu samostatných úloh, ale ako celok,&nbsp;
              <br className="hidden lg:block" />
              v ktorom má každé rozhodnutie vplyv na to ďalšie.
            </p>
          </div>
          <ol className="divide-y divide-border border-b border-border">
            {cycle.map((step, i) => (
              <li key={step.title} data-reveal className="group transition-colors duration-300 hover:bg-card/40">
                <details className="[&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-center justify-between gap-6 py-5 px-2 transition-colors hover:text-primary">
                    <div className="flex items-center gap-5">
                      <span className="font-display text-2xl text-primary transition-transform duration-300 group-hover:scale-110">0{i + 1}</span>
                      <span className="text-base md:text-lg">{step.title}</span>
                    </div>
                    <Plus className="size-5 shrink-0 text-primary transition group-open:rotate-45" />
                  </summary>
                  <p className="pb-5 pl-12 pr-8 text-sm leading-relaxed text-muted-foreground">
                    {step.desc}
                  </p>
                </details>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="bg-[#F5F1EB]"><div className="mx-auto max-w-7xl px-6 py-28">
        <div data-reveal className="mb-6 text-center text-xs font-medium uppercase tracking-[0.2em] text-[#8A4A28]">
          Klienti
        </div>
        <h3 data-reveal className="text-center font-display text-3xl md:text-4xl text-foreground">
          Vybrané spolupráce
        </h3>
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 border-t border-dashed border-border">
          {partners.map((n) => (
            <div
              key={n}
              data-reveal
              className="border-b border-r border-dashed border-border last:border-r-0 [&:nth-child(3n)]:md:border-r-0 [&:nth-child(6n)]:md:border-r [&:nth-child(2n)]:sm:max-md:border-r-0 py-8 text-center text-base uppercase tracking-[0.15em] text-muted-foreground/80 transition-all duration-300 hover:text-primary hover:-translate-y-1"
            >
              {n}
            </div>
          ))}
        </div>
      </div></section>

      {/* TESTIMONIAL */}
      <section className="bg-[#F5F1EB]"><div className="mx-auto max-w-7xl px-6 py-28">
        <div data-reveal className="mb-4 text-xs font-medium uppercase tracking-[0.15em] text-[#8A4A28]">
          03 Referencie
        </div>
        <h3 data-reveal className="font-display text-4xl leading-tight md:text-6xl">
          Povedali <span className="italic text-primary">o nás</span>
        </h3>

        <div className="relative mt-10">
          <div className="overflow-hidden rounded-3xl">
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ transform: `translateX(-${testimonialIndex * 100}%)` }}
            >
              {testimonials.map((t, i) => (
                <div key={i} className="grid w-full shrink-0 gap-6 md:grid-cols-3">
                  <div className="flex flex-col items-center justify-center rounded-3xl bg-card p-10 text-center border border-border md:col-span-1">
                    <img
                      src={t.photo}
                      alt={t.name}
                      width={96}
                      height={96}
                      loading="lazy"
                      className="size-20 rounded-full object-cover ring-4 ring-background"
                    />
                    <div className="mt-6 font-medium text-lg">{t.name}</div>
                    <div className="mt-1 text-sm text-primary">{t.company}</div>
                    <div className="mt-4 flex items-center justify-center gap-2 text-primary">
                      <div className="flex gap-1">
                        {Array.from({ length: 5 }).map((_, j) => (
                          <Star key={j} className="size-4 fill-current" />
                        ))}
                      </div>
                      <span className="text-sm font-medium text-foreground">{t.rating}</span>
                    </div>
                    <p className="mt-8 max-w-xs text-sm leading-relaxed text-muted-foreground">
                      {t.quote}
                    </p>
                  </div>

                  <div className="img-zoom relative overflow-hidden rounded-3xl min-h-[420px] md:col-span-2">
                    <img
                      src={t.projectImg}
                      alt={t.projectName}
                      width={1280}
                      height={768}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-[#F5F1EB]">
                      <div className="font-display text-2xl">{t.projectName}</div>
                      <div className="text-sm text-[#F5F1EB]/80">{t.projectDesc}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={prevTestimonial}
            aria-label="Predchádzajúca referencia"
            className="absolute -left-4 md:-left-12 lg:-left-16 top-1/2 -translate-y-1/2 z-10 grid size-12 place-items-center text-foreground hover:text-primary transition-colors"
          >
            <ChevronLeft className="size-8" />
          </button>
          <button
            type="button"
            onClick={nextTestimonial}
            aria-label="Ďalšia referencia"
            className="absolute -right-4 md:-right-12 lg:-right-16 top-1/2 -translate-y-1/2 z-10 grid size-12 place-items-center text-foreground hover:text-primary transition-colors"
          >
            <ChevronRight className="size-8" />
          </button>

          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setTestimonialIndex(i)}
                aria-label={`Referencia ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === testimonialIndex ? "w-8 bg-primary" : "w-2 bg-border"
                }`}
              />
            ))}
          </div>
        </div>

      </div></section>

      {/* FAQ */}
      <section className="mx-auto max-w-7xl px-6 py-28">
        <div data-reveal className="mb-4 text-xs font-medium uppercase tracking-[0.15em] text-[#8A4A28]">
          07 FAQ
        </div>
        <div className="grid gap-10 md:grid-cols-[1fr_1.4fr]">
          <div className="flex flex-col">
            <h3 data-reveal className="font-display text-4xl leading-tight md:text-5xl">
              Často kladené <br />
              <span className="italic text-primary">otázky</span>
            </h3>
            <p data-reveal className="mt-6 text-muted-foreground">
              Nie ste si istí, ktoré služby sú pre váš projekt dôležité? Radi
              vám odporučíme riešenie podľa toho, či riešite predaj, prenájom
              alebo celkové uvedenie projektu na trh.
            </p>
            <div className="mt-auto pt-12 text-sm text-muted-foreground">Máte inú otázku?</div>
            <a
              href="#kontakt"
              className="mt-3 inline-flex w-fit items-center gap-2 self-start rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all duration-300 hover:scale-[1.04] hover:shadow-lg"
            >
              Napíšte nám
            </a>
          </div>
          <div className="space-y-3">
            {faqs.map((item) => (
              <details
                key={item.q}
                data-reveal
                className="group rounded-2xl bg-card border border-border px-6 py-4 transition-all duration-300 hover:border-primary/40 hover:shadow-md [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-sm md:text-base transition-colors group-hover:text-primary">
                  <span>{item.q}</span>
                  <Plus className="size-4 shrink-0 text-primary transition group-open:rotate-45" />
                </summary>
                <p className="mt-3 text-sm text-muted-foreground">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="kontakt" className="bg-[#F5F1EB] text-foreground">
        <div className="mx-auto max-w-7xl px-6 py-28">
          <div data-reveal className="grid gap-12 md:grid-cols-2 md:gap-16">
            {/* Left column */}
            <div className="flex flex-col">
              <h3 data-reveal="left" className="font-display text-4xl leading-tight md:text-5xl">
                Pozrime sa, čo váš&nbsp;
                <br />
                projekt <span className="italic text-primary">potrebuje</span>
              </h3>
              <div className="mt-8 space-y-4 text-foreground/80 max-w-md">
                <p data-reveal="left">
                  Vyplňte formulár a stručne nám priblížte váš projekt.
                </p>
                <p data-reveal="left">
                  Náš špecialista sa vám následne ozve a odporučí ďalší krok, podľa typu projektu, cieľa a aktuálnej fázy.
                </p>
              </div>

              <ul className="mt-16 space-y-6 text-sm">
                <li className="flex items-center gap-5">
                  <span className="grid size-12 place-items-center rounded-full bg-primary text-primary-foreground shrink-0">
                    <Mail className="size-5" />
                  </span>
                  hello@realestate.sk
                </li>
                <li className="flex items-center gap-5">
                  <span className="grid size-12 place-items-center rounded-full bg-primary text-primary-foreground shrink-0">
                    <Phone className="size-5" />
                  </span>
                  +421 900 000 000
                </li>
                <li className="flex items-center gap-5">
                  <span className="grid size-12 place-items-center rounded-full bg-primary text-primary-foreground shrink-0">
                    <MapPin className="size-5" />
                  </span>
                  Ulica 1, PSČ Mesto,<br />Slovenská republika
                </li>
              </ul>
            </div>

            {/* Right column, form */}
            <form className="grid gap-6 rounded-[2rem] bg-[#EDE8DF] p-8 md:p-12">
              <label className="grid gap-2 text-sm">
                <span className="text-primary font-medium">Meno Priezvisko</span>
                <input
                  type="text"
                  className="rounded-md bg-[#C7BEB3] px-4 py-4 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary"
                />
              </label>
              <label className="grid gap-2 text-sm">
                <span className="text-primary font-medium">Tel.č.</span>
                <input
                  type="tel"
                  className="rounded-md bg-[#C7BEB3] px-4 py-4 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary"
                />
              </label>
              <label className="grid gap-2 text-sm">
                <span className="text-primary font-medium">Email</span>
                <input
                  type="email"
                  className="rounded-md bg-[#C7BEB3] px-4 py-4 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary"
                />
              </label>
              <div className="grid gap-3 text-sm">
                <span className="text-primary font-medium">Segment</span>
                <div className="flex flex-wrap gap-6">
                  {["Rezidenciálny", "Komerčný real estate"].map((s) => (
                    <label
                      key={s}
                      className="inline-flex cursor-pointer items-center gap-2 text-sm text-foreground/80"
                    >
                      <input
                        type="radio"
                        name="segment"
                        className="size-4 appearance-none rounded-full bg-[#C7BEB3] checked:bg-primary transition-colors"
                      />
                      {s}
                    </label>
                  ))}
                </div>
              </div>
              <button
                type="button"
                className="mt-2 self-start rounded-full bg-primary px-10 py-3 text-sm font-medium uppercase tracking-widest text-primary-foreground transition-all duration-300 hover:opacity-90 hover:scale-[1.04] hover:shadow-lg"
              >
                Odoslať
              </button>
            </form>
          </div>
        </div>
      </section>


      {/* FOOTER */}
      <footer className="bg-[#F5F1EB] text-foreground">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 pt-20 pb-10 md:grid-cols-3">
          <div className="md:col-span-2 md:pr-10">
            <h3 className="font-display text-5xl leading-[1.05] tracking-tight md:text-6xl">
              Spojme sa <span className="italic text-primary">spolu</span>
            </h3>
            <p className="mt-6 max-w-xl text-base text-muted-foreground">
              Real estate marketing studio. Pomáhame developerom a maklérom predávať
              nehnuteľnosti s pomocou vizuálu, dát a presných kampaní. Napíšte nám
              a poďme spoločne posunúť váš projekt na ďalšiu úroveň.
            </p>
            <div className="mt-8 flex gap-3">
              {[Instagram, Facebook, Linkedin].map((Ic, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social"
                  className="grid size-10 place-items-center rounded-full border border-foreground/15 text-foreground transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:border-primary hover:-translate-y-0.5"
                >
                  <Ic className="size-4" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <div className="mb-6 text-lg font-medium text-foreground">
              Navigácia
            </div>
            <ul className="space-y-4 text-sm">
              {[
                { href: "#projekty", label: "Rezidenčné" },
                { href: "#komercne", label: "Komerčné" },
                { href: "#sluzby", label: "Služby" },
                { href: "#projekty", label: "Referencie" },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="group inline-flex items-center gap-2 text-foreground/80 transition-colors hover:text-primary"
                  >
                    <ChevronRight className="size-4 text-primary transition-transform group-hover:translate-x-1" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-foreground/15">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 md:flex-row">
            <div className="font-display text-3xl font-bold italic">
              LIČI<span className="text-primary">.</span>
            </div>
            <a
              href="#kontakt"
              className="rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Kontakt
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Hotspot({
  top,
  left,
  iconSrc,
  title,
  desc,
  card = false,
  cardSide = "below-right",
}: {
  top: string;
  left: string;
  iconSrc: string;
  title: string;
  desc: string;
  card?: boolean;
  cardSide?: "below-right" | "below-left" | "above-right" | "above-left";
}) {
  const cardPos =
    cardSide === "below-right"
      ? "top-10 left-1/2 -translate-x-4"
      : cardSide === "below-left"
        ? "top-10 right-1/2 translate-x-4"
        : cardSide === "above-right"
          ? "bottom-10 left-1/2 -translate-x-4"
          : "bottom-10 right-1/2 translate-x-4";

  // Pick which corner of the card is "anchored" (square, no radius) to face the dot
  const cornerRadius =
    cardSide === "below-right"
      ? "rounded-[10px] rounded-tl-none"
      : cardSide === "below-left"
        ? "rounded-[10px] rounded-tr-none"
        : cardSide === "above-right"
          ? "rounded-[10px] rounded-bl-none"
          : "rounded-[10px] rounded-br-none";

  void card;
  return (
    <div
      className="group absolute z-20 -translate-x-1/2 -translate-y-1/2"
      style={{ top, left }}
    >
      {/* Hotspot dot with embedded icon */}
      <button
        type="button"
        aria-label={title}
        className="relative grid size-10 place-items-center rounded-full bg-[#FBF9F5] shadow-[0_0_0_6px_rgba(245,241,235,0.25)] transition hover:scale-110"
      >
        <span className="pointer-events-none absolute inset-0 animate-ping rounded-full bg-[#F5F1EB]/30" />
        <img
          src={iconSrc}
          alt=""
          className="relative h-5 w-5"
          style={{ filter: "brightness(0) saturate(100%) invert(34%) sepia(28%) saturate(900%) hue-rotate(346deg) brightness(92%) contrast(86%)" }}
        />
      </button>

      {/* Card: hover-only */}
      <div
        className={`pointer-events-none absolute ${cardPos} w-[230px] scale-95 bg-[#FBF9F5] p-4 text-left text-[#21160E] opacity-0 shadow-[0_8px_32px_rgba(0,0,0,0.25)] transition-all duration-200 group-hover:pointer-events-auto group-hover:scale-100 group-hover:opacity-100 ${cornerRadius}`}
      >
        <div className="text-[15px] font-medium leading-tight">{title}</div>
        <p className="mt-1.5 text-[11px] leading-[1.4] text-[#21160E]/80">{desc}</p>
      </div>
    </div>
  );
}
