export const A = (path: string) => `/sites/liciad/${path}`;

export const SOURCE = "https://www.liciad.com";

export const navItems = [
  { label: "Úvod", href: "/", active: true },
  { label: "Služby", href: `${SOURCE}/services/` },
  { label: "Práce", href: `${SOURCE}/works/` },
  { label: "Kariéra", href: `${SOURCE}/career/` },
  { label: "Blog", href: `${SOURCE}/blog/` },
];

export const contactHref = `${SOURCE}/contact/`;

export const heroSlides = [
  { word: "Advertising", desktop: "2023/12/01-Advertising.mp4", mobile: "2023/12/98a0-4a70-bc8a-9e0f9b873279.mp4" },
  { word: "Campaigns", desktop: "2023/12/02-Campaign.mp4", mobile: "2023/12/campaigns-1.mp4" },
  { word: "Social media", desktop: "2023/12/03-Socialmedia.mp4", mobile: "2023/12/social-media-1.mp4" },
  { word: "3D Visuals", desktop: "2023/12/04-3Dvisuals.mp4", mobile: "2023/12/3d-visuals.mp4" },
  { word: "Motion design", desktop: "2023/12/video_motion2-mp4_1.mp4", mobile: "2023/12/video_motion2-mobil.mp4" },
  { word: "Photoshoots", desktop: "2023/12/06-Photoshoots.mp4", mobile: "2023/12/photoshoots-1.mp4" },
];

export const disciplines = [
  {
    icon: "2023/12/vizualna_komunikacia.png",
    name: "Corporate identity",
    text: "Komplexné zastrešenie vašej značky, ktorá vás bude sprevádzať po celé roky, staviame na poznaní vašich produktov či služieb.",
    href: "corporate-identity",
  },
  {
    icon: "2023/12/kreativna_strategia.png",
    name: "Kreatívna stratégia",
    text: "Vďaka rozsiahlemu tímu kreatívcov dokážeme zabezpečiť dlhodobú strategickú ideu reklamného zamerania.",
    href: "creative-strategy",
  },
  {
    icon: "2023/12/sprava_soc_sieti.png",
    name: "Digital",
    text: "Z hľadiska generovania konverzií vytvárame online kampane šité na mieru potrebám zákazníka, preto nájdete v našom portfóliu kampane so zameraním na predaj, ale aj generovanie nových zamestnancov v rámci lead generation.",
    href: "online-marketing",
  },
  {
    icon: "2023/12/web_dizajn.png",
    name: "Web design",
    text: "Profesionálny UX dizajn navrhujeme tak, aby dokázal osloviť primárnu cieľovú skupinu zákazníkov.",
    href: "web-design",
  },
  {
    icon: "2023/12/tvorba_obsahu.png",
    name: "Foto a video produkcia",
    text: "Najmodernejšia high-end technika, vlastný ateliér a roky skúseností sú garanciou kvalitnej fotoprodukcie i videoprodukcie.",
    href: "photo-video",
  },
  {
    icon: "2023/12/print.png",
    name: "Print",
    text: "Katalógy, letáky, POS materiály robíme na vysokej úrovni vďaka kvalitnému tímu DTP grafikov.",
    href: "print",
  },
  {
    icon: "2023/12/performance-kampane.png",
    name: "Marketingové riešenia",
    text: "Inovatívne marketingové riešenia na vybudovanie vašej značky a dosahovanie merateľných cieľov sú viac ako 10 rokov v rukách našich skúsených odborníkov.",
    href: "marketing-solutions",
  },
];

export const introText =
  "Sme fullservisová reklamná agentúra s viac ako 10-ročnými skúsenosťami a hlavou plnou netradičných nápadov. Tvoríme hodnoty a prinášame riešenia, ktoré pomáhajú značkám uspieť v tvrdom konkurenčnom prostredí, pretože veríme, že reklama nie je len o predaji produktov, ale aj o vytváraní emócií a vzťahov. Do každého projektu vkladáme kus seba a nebojíme sa povedať, že to berieme osobne. Pridajte sa a napredujte spoločne s nami!";

export const teamPhotos = ["178", "181", "182", "177", "193", "173", "197", "192", "189", "201"].map(
  (n) => `2025/01/2024LICI_${n}.png`,
);

export const counters = [
  {
    to: 10,
    decimals: 0,
    suffix: "+",
    duration: 1400,
    label: "rokov na trhu",
    text: "Individuálny prístup ku klientom je to, čo náš tím už 10 rokov spája. Riadime sa heslom “We take it personally”. Aj vďaka transformácii LIČI Advertising na fullservisovú reklamnú agentúru sme otvorení novým víziám, ktoré nás podnecujú neustále napredovať.",
  },
  {
    to: 2.1,
    decimals: 1,
    suffix: "m+",
    duration: 2000,
    label: "ročný výnos marketingových spoluprác",
    text: "Dokážeme zabezpečiť aj vysokonákladové kampane, ktoré si vyžadujú väčší kapitál. Aj vďaka stabilnému zázemiu a dlhoročným spoluprácam sme schopní zapojiť sa do väčších výziev.",
  },
  {
    to: 80,
    decimals: 0,
    suffix: "+",
    duration: 2000,
    label: "úspešných tendrov",
    text: "Známe stabilné značky, ale aj nové brandy na trhu sú súčasťou nášho širokého portfólia úspešných tendrov, ktoré sa nám podarilo vyhrať. YoPRO, Alpro, Pizza Me a mnoho ďalších. Vďaka skúsenostiam s výkonnostnými kampaňami, ale aj brand awareness kampaňami či eventmi sa nebojíme zapojiť do akýchkoľvek nových výziev. Kreatívne myšlienky adaptujeme do online aj offline aktivít.",
  },
];

export const clientLogos = [
  ["AC", "AC"],
  ["ALRPO", "ALRPO"],
  ["Aupark", "Aupark"],
  ["FitCo", "Fit&Co"],
  ["METRO", "METRO"],
  ["MO", "MO"],
  ["PM", "PM"],
  ["Premac", "Premac"],
  ["Slovnaft", "Slovnaft"],
  ["subway", "subway"],
  ["YoPRO", "YoPRO"],
].map(([file, alt]) => ({ src: `2024/01/${file}.png`, alt }));

export const reviews = [
  {
    text: "\"Vďaka spolupráci sa zvýšil brand awareness značky, a naša prítomnosť v online aj offline prostredí vzrástla. Najviac si cením flexibilitu, pohotovosť a profesionalitu v jednaní. Som vďačná aj za prínos všetkých nápadov, tvorivosť a tím skvelých ľudí! Odporúčam 10 z 10.\"",
    name: "Klaudia H.",
    position: "Franchise Marketing Specialist",
    logo: "2024/01/MO.png",
  },
  {
    text: "\"Spoluprácu hodnotím na vysokej úrovni. Perfektné navnímanie a obľúbenie si nášho produktu sa prejavilo v prepracovaných príspevkoch na sociálnych sieťach a v propagačných materiáloch, čo podporilo našu značku a predaj.\"",
    name: "Peter H.",
    position: "Marketingový manažér spoločnosti Premac",
    logo: "2024/02/premac_logo.png",
  },
  {
    text: "\"Vždy kreatívni, vždy jedineční a iní. Chválim nielen profesionálnu stránku, ale aj ľudský prístup a nekonečnú ochotu vyjsť zadávateľovi v ústrety za akýchkoľvek okolností. Veľká spokojnosť!\"",
    name: "Barbora B.",
    position: "Event manažér SLOVNAFT",
    logo: "2024/01/Slovnaft.png",
  },
  {
    text: "\"S agenturou Liči spolupracuji již 4 roky a za tu dobu jsme společně připravili spoustu inovativních projektů, které pomohly značku Alpro dostat do popředí. Mimo jejich kreativní nápady, oceňuji zejména osobní přístup a skvělou schopnost se přizpůsobit jakýmkoliv našim požadavkům. Spolupráci si opravdu užívám a vřele doporučuji.\"",
    name: "Barbora H.",
    position: "Brand Manager | Alpro CZ&SK",
    logo: "2024/01/ALRPO.png",
  },
];

export type Work = {
  href: string;
  video?: string;
  poster?: string;
  image?: string;
  tags: string[];
  name: string;
  excerpt: string;
};

export const works: Work[] = [
  {
    href: `${SOURCE}/referral/mojobchod-social-media-strategia/`,
    video: "2024/02/MO_SOME_THUMBNAIL.mp4",
    poster: "2024/02/Moj-obchod-social.png",
    tags: ["Kreatívna stratégia", "Foto a video produkcia", "Social Media"],
    name: "Môjobchod",
    excerpt: "Social Media Strategy",
  },
  {
    href: `${SOURCE}/referral/edo-kin/`,
    video: "2023/12/edokin_thumnail_3d_prod.mp4",
    poster: "2024/02/Edo-kin.png",
    tags: ["Kreatívna stratégia", "Social Media", "3D produkcia"],
    name: "EDO-KIN",
    excerpt: "Social Media a 3D produkcia",
  },
  {
    href: `${SOURCE}/referral/pan-majster/`,
    image: "2024/01/PREMAC_thumbnail-1.jpg",
    tags: ["Web design", "Foto a video produkcia", "Social Media"],
    name: "Premac",
    excerpt: "Social Media kampaň “Pán Majster”",
  },
  {
    href: `${SOURCE}/referral/mojobchod-tv-produkcia/`,
    video: "2024/02/MO_tv_production_thumbnail.mp4",
    poster: "2024/02/Moj-obchod.png",
    tags: ["Kreatívna stratégia", "Foto a video produkcia", "TV"],
    name: "Môjobchod",
    excerpt: "TV produkcia",
  },
  {
    href: `${SOURCE}/referral/pizza-me-slovensko/`,
    video: "2024/01/pizzame_thumbnail.mp4",
    poster: "2024/02/Pizza-me-grand.png",
    tags: ["Foto a video produkcia", "Event", "Social Media"],
    name: "Pizza Me",
    excerpt: "Grand Opening Slovensko",
  },
  {
    href: `${SOURCE}/referral/premac/`,
    video: "2023/12/PREMAC_SoME_Thumbnail.mp4",
    poster: "2024/02/premac.png",
    tags: ["Kreatívna stratégia", "Social Media", "3D produkcia"],
    name: "Premac",
    excerpt: "Social Media a 3D produkcia",
  },
  {
    href: `${SOURCE}/referral/pizza-me/`,
    video: "2024/01/thumbnail_pizzame.mp4",
    poster: "2024/02/Pizza-me-social.png",
    tags: ["Kreatívna stratégia", "Foto a video produkcia", "Social Media"],
    name: "Pizza Me",
    excerpt: "Social Media, foto a videoprodukcia",
  },
];

export const gang = [
  { href: "https://www.instagram.com/p/C19gMwJKrNm/", video: "2024/01/mtg_dominik-2_short.mp4", poster: "2024/01/videoframe_426.png" },
  { href: "https://www.instagram.com/p/CwP0ktwqpqE/", video: "2024/01/mtg_manuel-2-short.mp4", poster: "2024/01/videoframe_153.png" },
  { href: "https://www.instagram.com/licisk/", video: "2024/01/mtg_laura_short.mp4", poster: "2024/01/videoframe_1089.png" },
  { href: "https://www.instagram.com/p/CnPLMNIBMS-/", video: "2024/01/mtg_monika_short.mp4", poster: "2024/01/videoframe_1544.png" },
  { href: "https://www.instagram.com/p/Ci2KvL0KqO7/", video: "2024/01/mtg_kika_short.mp4", poster: "2024/01/videoframe_2814.png" },
];

export const instagram = [
  ["468842730_455833964203150_7218553135682675058_n", "https://www.instagram.com/reel/DC838MTNbGj/", "video"],
  ["468159754_603752785650395_103835051528823889_n", "https://www.instagram.com/p/DC4LerDqqsH/", "carousel"],
  ["467495035_1659515501310380_800425554424218735_n", "https://www.instagram.com/p/DCpBtLbqfr8/", "image"],
  ["467142232_18466556119022367_5717724400485691380_n", "https://www.instagram.com/reel/DCjuTYAqLJO/", "video"],
  ["466665877_1240977023650062_6679725661663061746_n", "https://www.instagram.com/reel/DCerFzEJUMi/", "video"],
  ["466378546_1085753266028145_5136521590477073442_n", "https://www.instagram.com/reel/DCR571gPJ-w/", "video"],
  ["466406605_1283080869595947_8491736033158908938_n", "https://www.instagram.com/p/DCOT4t2qkUJ/", "image"],
  ["464999951_479676245101150_4580296373346310035_n", "https://www.instagram.com/reel/DB6rVLLv7C_/", "video"],
  ["465234059_580630424642883_5917165911995251636_n", "https://www.instagram.com/reel/DByHu8-hE_M/", "video"],
  ["464838208_1275809206946424_6699696289026522198_n", "https://www.instagram.com/p/DBqQy5kqgK5/", "image"],
  ["464566566_3890451081276759_6022581715406623999_n", "https://www.instagram.com/reel/DBopvwIR2B0/", "video"],
  ["464249942_1249043936416904_5248702236301386963_n", "https://www.instagram.com/reel/DBgttMwPz6D/", "video"],
].map(([id, href, type]) => ({ src: `instagram/${id}full.jpg`, href, type }));

export const footerLinks = [
  { label: "Úvod", href: "/", active: true },
  { label: "Služby", href: `${SOURCE}/services/` },
  { label: "Práce", href: `${SOURCE}/works/` },
  { label: "Kariéra", href: `${SOURCE}/career/` },
  { label: "Blog", href: `${SOURCE}/blog/` },
];

export const legalLinks = [
  { label: "Zásady používania súborov cookie (EÚ)", href: `${SOURCE}/cookie-policy/` },
  { label: "Vyhlásenie o ochrane osobných údajov (EÚ)", href: `${SOURCE}/data-protection/` },
];
