export const A = (path: string) => `/sites/liciad/${path}`;

export const SOURCE = "https://www.liciad.com";

export type NavKey = "home" | "kariera" | "blog";

export const navItems: { label: string; href: string; key?: NavKey }[] = [
  { label: "Práce", href: "/#prace" },
  { label: "Služby", href: "/#sluzby" },
  { label: "Tím", href: "/#tim" },
  { label: "Kariéra", href: "/kariera", key: "kariera" },
  { label: "Blog", href: "/blog", key: "blog" },
];

export const contactHref = `${SOURCE}/contact/`;
export const email = "office@liciad.com";
export const phone = "+421 918 498 500";

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
    brand: "Môjobchod",
  },
  {
    text: "\"Spoluprácu hodnotím na vysokej úrovni. Perfektné navnímanie a obľúbenie si nášho produktu sa prejavilo v prepracovaných príspevkoch na sociálnych sieťach a v propagačných materiáloch, čo podporilo našu značku a predaj.\"",
    name: "Peter H.",
    position: "Marketingový manažér spoločnosti Premac",
    logo: "2024/02/premac_logo.png",
    brand: "Premac",
  },
  {
    text: "\"Vždy kreatívni, vždy jedineční a iní. Chválim nielen profesionálnu stránku, ale aj ľudský prístup a nekonečnú ochotu vyjsť zadávateľovi v ústrety za akýchkoľvek okolností. Veľká spokojnosť!\"",
    name: "Barbora B.",
    position: "Event manažér SLOVNAFT",
    logo: "2024/01/Slovnaft.png",
    brand: "Slovnaft",
  },
  {
    text: "\"S agenturou Liči spolupracuji již 4 roky a za tu dobu jsme společně připravili spoustu inovativních projektů, které pomohly značku Alpro dostat do popředí. Mimo jejich kreativní nápady, oceňuji zejména osobní přístup a skvělou schopnost se přizpůsobit jakýmkoliv našim požadavkům. Spolupráci si opravdu užívám a vřele doporučuji.\"",
    name: "Barbora H.",
    position: "Brand Manager | Alpro CZ&SK",
    logo: "2024/01/ALRPO.png",
    brand: "Alpro",
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
  { name: "Dominik", href: "https://www.instagram.com/p/C19gMwJKrNm/", video: "2024/01/mtg_dominik-2_short.mp4", poster: "2024/01/videoframe_426.png" },
  { name: "Manuel", href: "https://www.instagram.com/p/CwP0ktwqpqE/", video: "2024/01/mtg_manuel-2-short.mp4", poster: "2024/01/videoframe_153.png" },
  { name: "Laura", href: "https://www.instagram.com/licisk/", video: "2024/01/mtg_laura_short.mp4", poster: "2024/01/videoframe_1089.png" },
  { name: "Monika", href: "https://www.instagram.com/p/CnPLMNIBMS-/", video: "2024/01/mtg_monika_short.mp4", poster: "2024/01/videoframe_1544.png" },
  { name: "Kika", href: "https://www.instagram.com/p/Ci2KvL0KqO7/", video: "2024/01/mtg_kika_short.mp4", poster: "2024/01/videoframe_2814.png" },
];

/** Small round portraits reused in avatar clusters (hero, services, CTA). */
export const avatars = gang.map((g) => ({ src: g.poster, name: g.name }));

export const marqueeServices = [
  "Corporate identity",
  "Kreatívna stratégia",
  "Digital",
  "Web design",
  "Foto a video produkcia",
  "3D vizuály",
  "Print",
  "Marketingové riešenia",
];

export const marqueeValues = [
  "We take it personally",
  "Fullservis pod jednou strechou",
  "10+ rokov na trhu",
  "Vlastný ateliér",
  "80+ vyhraných tendrov",
  "Kreativita s výsledkami",
];

export const process = [
  {
    step: "01",
    title: "Spoznáme sa",
    text: "Počúvame, pýtame sa a spolu definujeme, ako vyzerá úspech pre vašu značku.",
  },
  {
    step: "02",
    title: "Stratégia",
    text: "Z poznatkov vytvoríme jasný smer, priority a kreatívne zadanie.",
  },
  {
    step: "03",
    title: "Tvoríme",
    text: "Navrhujeme, natáčame a ladíme detaily, kým to nie je nezameniteľne vaše.",
  },
  {
    step: "04",
    title: "Spúšťame",
    text: "Kampaň uvedieme do sveta, meriame výsledky a ďalej optimalizujeme.",
  },
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
  { label: "Úvod", href: "/" },
  { label: "Práce", href: "/#prace" },
  { label: "Služby", href: "/#sluzby" },
  { label: "Kariéra", href: "/kariera" },
  { label: "Blog", href: "/blog" },
];

export const legalLinks = [
  { label: "Zásady používania súborov cookie (EÚ)", href: `${SOURCE}/cookie-policy/` },
  { label: "Vyhlásenie o ochrane osobných údajov (EÚ)", href: `${SOURCE}/data-protection/` },
];

export type BlogPost = {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  categories: string[];
  image: string;
  href: string;
};

export const blogCategories = ["Online marketing", "Tvorba obsahu"];

export const blogPosts: BlogPost[] = [
  {
    title: "Snažíte sa tvoriť obsah na TikTok čo najkratšou formou? Dnes už je to chyba!",
    excerpt: "Ak ste sa doposiaľ sústredili na to, ako postrihať video na TikTok do čo najkratšej podoby, tak vás zrejme aktuálne prekvapí, čo dnes funguje.",
    date: "13. júna 2025",
    author: "Monika Dimitrovičová",
    categories: ["Online marketing"],
    image: "blog/Snazite-sa-tvorit-obsah-na-TikTok-co-najkratsou-formou.jpg",
    href: `${SOURCE}/snazite-sa-tvorit-obsah-na-tiktok-co-najkratsou-formou-dnes-uz-je-to-chyba/`,
  },
  {
    title: "Ako tvoriť obsah na sociálnych sieťach v roku 2025?",
    excerpt: "Sociálne siete sa neustále menia a to, čo fungovalo pred rokom, dnes už nemusí byť efektívne. Ak chcete zaujať svoje publikum, čítajte ďalej.",
    date: "18. februára 2025",
    author: "Veronika Kúdelová",
    categories: ["Online marketing"],
    image: "blog/Marketing_Trends_2025__-1.jpg",
    href: `${SOURCE}/ako-tvorit-obsah-na-socialnych-sietach-v-roku-2025/`,
  },
  {
    title: "Aké marketingové zmeny nás čakajú v roku 2025?",
    excerpt: "Transparentnosť, autenticita a dôveryhodnosť sú kľúčové prvky, ktoré v dobe plnej dezinformácií a rýchlych zmien vyhľadáva snáď každý.",
    date: "30. januára 2025",
    author: "Veronika Kúdelová",
    categories: ["Online marketing"],
    image: "blog/Marketing_Trends_2025-1.jpg",
    href: `${SOURCE}/ake-marketingove-zmeny-nas-cakaju-v-roku-2025/`,
  },
  {
    title: "Instagram v kocke - Najväčšie zmeny za rok 2024",
    excerpt: "Instagram v roku 2024 pokračoval s významnými zmenami v algoritmoch a optimalizáciou pre video obsah. Na čo sa zameriavajú algoritmy?",
    date: "29. novembra 2024",
    author: "Veronika Kúdelová",
    categories: ["Tvorba obsahu", "Online marketing"],
    image: "blog/Instagram_v_kocke.jpg",
    href: `${SOURCE}/instagram-v-kocke-najvacsie-zmeny-za-rok-2024/`,
  },
  {
    title: "Aký vplyv má Gen Z na trendy v digitálnom marketingu?",
    excerpt: "Druhá najmladšia generácia medzi mileniálmi a generáciou Alpha je poznačená nielen digitálnou érou, ale aj klimatickými zmenami.",
    date: "18. októbra 2024",
    author: "Veronika Kúdelová",
    categories: ["Online marketing"],
    image: "blog/GenZ_v_marketingu-1.jpg",
    href: `${SOURCE}/aky-vplyv-ma-gen-z-na-trendy-v-digitalnom-marketingu/`,
  },
  {
    title: "Platené TikTok reklamy na Slovensku: Aké príležitosti prinášajú?",
    excerpt: "Sociálna sieť TikTok sa každým dňom stáva populárnejšou. Od spustenia v roku 2017 zaznamenala obrovský nárast používateľov.",
    date: "19. septembra 2024",
    author: "Veronika Kúdelová",
    categories: ["Online marketing"],
    image: "blog/LICI_TikTok_Ads_v_cislach_thumbnail.jpg",
    href: `${SOURCE}/pozerame-sa-na-tik-tok-ads-v-cislach-co-nam-prinesu/`,
  },
  {
    title: "Nová sociálna sieť Threads - Rekordman v počte stiahnutí je dostupný už aj na Slovensku!",
    excerpt: "Threads poskytuje používateľom textové informácie, podobne ako Twitter. Zameriava sa však primárne na vytváranie verejných konverzácií.",
    date: "16. januára 2024",
    author: "Monika Dimitrovičová",
    categories: ["Online marketing"],
    image: "blog/lici_nova_socialna_siet_threads_blog.webp",
    href: `${SOURCE}/nova-socialna-siet-threads/`,
  },
  {
    title: "Tvorba marketingových prezentácií: Pravidlá a kľúčové kroky",
    excerpt: "Úspech spočíva nielen v kvalite ponúkaných služieb, ale aj v efektívnom oslovení a presvedčení klienta. Ako na to systematicky?",
    date: "15. januára 2024",
    author: "Monika Dimitrovičová",
    categories: ["Online marketing"],
    image: "blog/lici_tvorba_marketingovych_prezentacii_blog.png",
    href: `${SOURCE}/tvorba-marketingovych-prezentacii/`,
  },
  {
    title: "Mikroinfluenceri: Kľúč k úspešným brandovým a predajným kampaniam",
    excerpt: "Svet digitálnej marketingovej komunikácie sa začal mimoriadne rýchlo meniť už v roku 2023 s nástupom AI automatizácie.",
    date: "15. januára 2024",
    author: "Monika Dimitrovičová",
    categories: ["Online marketing"],
    image: "blog/lici_Mikroinfluenceri_blog.webp",
    href: `${SOURCE}/mikroinfluenceri-kluc-k-uspesnych-brandovym-a-predajnym-kampaniam/`,
  },
  {
    title: "Podpora brandu s rešpektom ku kultúrnym presahom v roku 2024",
    excerpt: "S rýchlym vývojom digitálnej éry a posunom spotrebiteľských preferencií prináša rok 2024 nové výzvy aj príležitosti.",
    date: "15. januára 2024",
    author: "Monika Dimitrovičová",
    categories: ["Online marketing"],
    image: "blog/lici_marketingove_trendy_blog-1.webp",
    href: `${SOURCE}/podpora-brandu-s-respektom-ku-kulturnym-preshaom-v-roku-2024/`,
  },
  {
    title: "Ako budú vyzerať marketingové trendy v roku 2024?",
    excerpt: "Výrazný pokrok pri možnostiach využitia AI zásadne ovplyvnil nielen marketingové trendy, ale aj spôsob myslenia a tvorby.",
    date: "31. decembra 2023",
    author: "Monika Dimitrovičová",
    categories: ["Online marketing"],
    image: "blog/lici_marketingove_trendy_blog-1.png",
    href: `${SOURCE}/marketingove-trendy-2024/`,
  },
];
