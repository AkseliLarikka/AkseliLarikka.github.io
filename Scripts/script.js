/* ===== NÄYTÄ VALIKKO ===== */
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

/* Valikko näkyviin */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

/* Valikko piiloon */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

/* Piilota valikko linkin klikkauksella (mobiili) */
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));


/* ===== AKTIIVISEN OSIO-LINKIN KOROSTUS VIERITTÄESSÄ ===== */
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58; // 58px on headerin korkeus + vähän marginaalia
        const sectionId = current.getAttribute('id');
        const link = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

        if (link) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                link.classList.add('active-link');
            } else {
                link.classList.remove('active-link');
            }
        }
    });
}
window.addEventListener('scroll', scrollActive);


/* ===== LIGHTBOX-ASETUKSET ===== */
lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
    'albumLabel': 'Kuva %1 / %2'
})

/* ===== KIELENVAIHTO ===== */

// 1. Määrittele käännökset "sanakirjaan"
const translations = {
    en: {
        // Navigaatio
        nav_profile: "Profile",
        nav_projects: "Projects",
        nav_experience: "Experience",
        nav_hobbies: "Hobbies",
        nav_contact: "Contact",

        // Koti
        home_subtitle: "IT/OT Cybersecurity Engineer (student)",
        home_description: "A third-year ICT engineering student with hands-on experience in integrating industrial automation (OT) and IT infrastructure. My strengths include rapid learning and problem-solving in production-critical environments.",
        download_cv: "Download CV (PDF)",

        // Profiili & Taidot
        profile_section_title: "Profile and Skills",
        profile_who_am_i: "Who am I?",
        profile_paragraph: "I am a calm and deliberate problem-solver with high resilience and a self-directed work approach. I ask a lot of questions because I want to understand things thoroughly. I enjoy challenging myself both physically and mentally, which is reflected in my career choices and hobbies. I actively seek challenges where I can utilize and deepen my expertise, especially in the cybersecurity of OT environments.",
        skills_title: "Skills",
        skills_header_area: "Area",
        skills_header_tech: "Technologies and Skills",
        skills_area_cyber: "Cybersecurity",
        skills_tech_cyber: "NIS2, SIEM, OSI/TCP/IP models, Cybersecurity fundamentals",
        skills_area_infra: "IT Infrastructure",
        skills_tech_infra: "Linux, Windows 10/11, Oracle VBox, Hyper-V, AWS, Azure",
        skills_area_ot: "Industrial Automation (OT)",
        skills_tech_ot: "Siemens TIA v18, STEP7, PLC logic, HMI design",
        skills_area_programming: "Programming & Other",
        skills_tech_programming: "Python, JavaScript, NodeJS, HTML/CSS, REST, GIT, Agile",
        skills_area_languages: "Languages",
        skills_tech_languages: "Finnish (Native), English (C1.1), Swedish (B2.1), Russian (A2.1)",

        // Projektit
        projects_section_title: "Projects",
        project1_title: "Taistelukenttä d20 Strategic TTRPG",
        project1_description: "A strategy project simulating modern warfare, which evolved from a static rule page to a dynamic game platform. I implemented interactive tools, automated content with a Python script, and adopted a CI/CD workflow with GitHub Actions.",
        project1_skills: "JavaScript, Python, CI/CD, HTML, CSS, SEO",
        project1_link: "Explore the game",
        project2_title: "Full Stack E-commerce Application",
        project2_description: "A practice application developed in pairs that mimics a car e-commerce site. The project deepened my knowledge of modern web technologies.",
        project2_skills: "JavaScript, NodeJS, MongoDB, Agile",
        project2_link: "View on GitHub",
        project3_title: "Python Password Program",
        project3_description: "A Python script created as a basic programming assignment that generates a random password and checks its strength using Selenium WebDriver.",
        project3_skills: "Python, Selenium, Visual Studio Code",
        project3_link: "View on GitHub",
        project4_title: "Personal Websites",
        project4_description: "Based on my interests, I have created and maintain various websites. These include a Russian grammar practice page and my personal recipe book. These projects have given me practical experience in web development and content management.",
        project4_skills: "HTML, CSS, JavaScript, SEO",
        project4_link1: "Grammar Page",
        project4_link2: "Recipe Page",
        project5_title: "Functional Corporate Network",
        project5_description: "A fictional company's data network implemented in a virtual environment, connecting terminals, switches, and routers. The exercise included subnetting and network traffic analysis with Wireshark.",
        project5_skills: "OSI & TCP/IP, Subnetting, Wireshark",
        project6_title: "MySQL Database",
        project6_description: "A relational database for a fictional used car e-commerce site, designed and implemented in pairs. The project covered database design, SQL implementation, and management with MySQL Workbench.",
        project6_skills: "SQL, MySQL Workbench, Database Design",

        // Kokemus
        experience_section_title: "Work Experience and Education",
        exp1_title: "Bachelor of Engineering, Information and Communications Technology",
        exp1_company: "JAMK University of Applied Sciences",
        exp1_date: "2023 - 2027 (est.)",
        exp1_desc: "Major in Cybersecurity.",
        exp2_title: "Industrial Automation Intern",
        exp2_company: "Larikka Automation Oy",
        exp2_date: "05/2024 - 07/2024 & <br> 05/2025 - 08/2025",
        exp2_desc: "I actively participated in a production line modernization project, where my responsibilities included system testing, troubleshooting, and problem-solving. I designed and implemented user interfaces in the Siemens TIA environment and managed virtualized test environments.",
        exp3_title: "Security Officer / Bouncer",
        exp3_company: "Turvallisuusplaneetta Oy & KST Oy",
        exp3_date: "04/2022 - 07/2025",
        exp3_desc: "I worked as a security steward, performing my statutory duties. The work developed my decision-making and resilience under pressure.",
        exp4_title: "Substitute Teacher",
        exp4_company: "Nokia Emäkoski Secondary School",
        exp4_date: "04/2022 - 05/2023",
        exp4_desc: "I worked as an hourly substitute teacher in a secondary school, which developed my training skills and allowed me to apply the instructor skills I learned in NCO school.",
        exp5_title: "Military Service, Sergeant",
        exp5_company: "Armoured Brigade",
        exp5_date: "2022 - 2023",
        exp5_desc: "Military Police NCO leadership training, which taught group leadership and maintaining operational capability under pressure.",
        exp6_title: "High School Graduate",
        exp6_company: "Lempäälä High School",
        exp6_date: "2019 - 2022",
        exp6_desc: "I served as the lighting, sound, and presentation technology manager for the school's student union. I was also awarded as the most entrepreneurial graduate.",

        // Harrastukset
        hobbies_section_title: "Hobbies",
        hobby1_title: "Hiking and Nature",
        hobby2_title: "Reading",
        hobby3_title: "Sport Shooting",
        hobby4_title: "Reservist Activities",

        // Footer
        footer_title: "Contact me",
        footer_rights: "All rights reserved."
    },
    fi: {
        nav_profile: "Profiili",
        nav_projects: "Projektit",
        nav_experience: "Kokemus",
        nav_hobbies: "Harrastukset",
        nav_contact: "Ota yhteyttä",
        home_subtitle: "IT/OT Kyberturvainsinööri (opiskelija)",
        home_description: "Kolmannen vuoden tieto- ja viestintätekniikan insinööriopiskelija, jolla on käytännön kokemusta teollisuusautomaation (OT) ja IT-infrastruktuurin yhdistämisestä. Vahvuuksiani ovat nopea oppimiskyky ja ongelmanratkaisu tuotantokriittisissä ympäristöissä.",
        download_cv: "Lataa CV (PDF)",
        profile_section_title: "Profiili ja Osaaminen",
        profile_who_am_i: "Kuka olen?",
        profile_paragraph: "Olen rauhallinen ja harkitseva ongelmanratkaisija, jolla on korkea resilienssi ja itseohjautuva työote. Kyselen paljon, koska haluan ymmärtää asiat perusteellisesti. Pidän itseni haastamisesta niin fyysisesti kuin henkisestikin, mikä heijastuu uravalintoihini ja harrastuksiini. Etsin aktiivisesti haasteita, joissa voin hyödyntää ja syventää osaamistani erityisesti OT-ympäristöjen kyberturvallisuuden parissa.",
        skills_title: "Taidot",
        skills_header_area: "Osa-alue",
        skills_header_tech: "Teknologiat ja taidot",
        skills_area_cyber: "Kyberturvallisuus",
        skills_tech_cyber: "NIS2, SIEM, OSI/TCP/IP-mallit, Kyberturvallisuuden perusteet",
        skills_area_infra: "IT-Infrastruktuuri",
        skills_tech_infra: "Linux, Windows 10/11, Oracle VBox, Hyper-V, AWS, Azure",
        skills_area_ot: "Teollisuusautomaatio (OT)",
        skills_tech_ot: "Siemens TIA v18, STEP7, PLC-logiikat, HMI-suunnittelu",
        skills_area_programming: "Ohjelmointi & Muut",
        skills_tech_programming: "Python, JavaScript, NodeJS, HTML/CSS, REST, GIT, Agile",
        skills_area_languages: "Kielet",
        skills_tech_languages: "Suomi (Äidinkieli), Englanti (C1.1), Ruotsi (B2.1), Venäjä (A2.1)",
        projects_section_title: "Projektit",
        project1_title: "Taistelukenttä d20 strateginen sotapeli",
        project1_description: "Modernia sodankäyntiä simuloiva strategiaprojekti, joka kehittyi staattisesta sääntösivusta dynaamisia työkaluja sisältäväksi pelialustaksi. Toteutin interaktiivisia työkaluja, automatisoin sisältöä Python-skriptillä ja otin käyttöön CI/CD-työnkulun GitHub Actionsilla.",
        project1_skills: "JavaScript, Python, CI/CD, HTML, CSS, SEO",
        project1_link: "Tutustu peliin",
        project2_title: "Full Stack -verkkokauppasovellus",
        project2_description: "Parityönä toteutettu harjoitussovellus, joka imitoi autojen verkkokauppaa. Projekti syvensi osaamistani modernien verkkoteknologioiden parissa.",
        project2_skills: "JavaScript, NodeJS, MongoDB, Agile",
        project2_link: "Katso GitHubissa",
        project3_title: "Python-salasanaohjelma",
        project3_description: "Ohjelmoinnin perusteiden harjoitustyönä toteutettu Python-skripti, joka generoi satunnaisen salasanan ja tarkistaa sen vahvuuden Selenium WebDriverin avulla.",
        project3_skills: "Python, Selenium, Visual Studio Code",
        project3_link: "Katso GitHubissa",
        project4_title: "Henkilökohtaiset sivustot",
        project4_description: "Olen luonut ja ylläpidän harrastuneisuuteeni perustuen erilaisia verkkosivustoja. Näihin kuuluvat venäjän kieliopin harjoitussivu sekä henkilökohtainen reseptikirjani. Nämä projektit ovat antaneet minulle käytännön kokemusta verkkokehityksestä ja sisällönhallinnasta.",
        project4_skills: "HTML, CSS, JavaScript, SEO",
        project4_link1: "Kielioppisivu",
        project4_link2: "Reseptisivu",
        project5_title: "Toimiva tietoverkko yritykselle",
        project5_description: "Virtuaaliympäristössä toteutettu kuvitteellisen yrityksen tietoverkko, jossa yhdistettiin päätelaitteita, kytkimiä ja reitittimiä. Harjoitus sisälsi mm. aliverkotusta ja verkkoliikenteen analysointia Wiresharkilla.",
        project5_skills: "OSI & TCP/IP, Aliverkotus, Wireshark",
        project6_title: "MySQL-tietokanta",
        project6_description: "Parityönä suunniteltu ja toteutettu relaatiotietokanta kuvitteelliselle käytettyjen autojen verkkokaupalle. Projekti kattoi tietokannan suunnittelun, toteutuksen SQL:llä ja hallinnoinnin MySQL Workbench -työkalulla.",
        project6_skills: "SQL, MySQL Workbench, Tietokantasuunnittelu",
        experience_section_title: "Työkokemus ja Koulutus",
        exp1_title: "Insinööri (AMK), Tieto- ja viestintätekniikka",
        exp1_company: "Jyväskylän ammattikorkeakoulu",
        exp1_date: "2023 - 2027 (arvio)",
        exp1_desc: "Pääsuuntautumisena kyberturvallisuus.",
        exp2_title: "Teollisuus&shy;automaatio&shy;harjoittelija",
        exp2_company: "Larikka Automation Oy",
        exp2_date: "05/2024 - 07/2024 & <br> 05/2025 - 08/2025",
        exp2_desc: "Osallistuin aktiivisesti tuotantolinjan modernisointiprojektiin, jossa vastuisiini kuului järjestelmätestaus, vianetsintä ja ongelmanratkaisu. Suunnittelin ja toteutin käyttöliittymiä Siemens TIA -ympäristössä ja hallinnoin virtualisoituja testiympäristöjä.",
        exp3_title: "Järjestyksenvalvoja",
        exp3_company: "Turvallisuusplaneetta Oy & KST Oy",
        exp3_date: "04/2022 - 07/2025",
        exp3_desc: "Toimin järjestyksenvalvojana ja suoritin lakisääteiset tehtäväni. Työ kehitti päätöksenteko- ja paineensietokykyäni.",
        exp4_title: "Sijainen",
        exp4_company: "Nokian Emäkosken yläaste",
        exp4_date: "04/2022 - 05/2023",
        exp4_desc: "Toimin tuntisijaisena yläasteella, mikä kehitti koulutuskykyjäni ja pääsin soveltamaan aliupseerikoulussa oppimiani kouluttajan taitoja.",
        exp5_title: "Varusmiespalvelus, Alikersantti",
        exp5_company: "Panssariprikaati",
        exp5_date: "2022 - 2023",
        exp5_desc: "Sotilaspoliisialikersantin johtajakoulutus, joka opetti ryhmän johtamista ja toimintakyvyn säilyttämistä paineessa.",
        exp6_title: "Ylioppilas",
        exp6_company: "Lempäälän lukio",
        exp6_date: "2019 - 2022",
        exp6_desc: "Toimin koulun opiskelijakunnan valo-, ääni- ja esitystekniikkavastaavana. Minut palkittiin myös yrittäjähenkisimpänä ylioppilaana.",
        hobbies_section_title: "Harrastukset",
        hobby1_title: "Vaellus ja Luonto",
        hobby2_title: "Lukeminen",
        hobby3_title: "Urheiluammunta",
        hobby4_title: "Reserviläistoiminta",
        footer_title: "Ota yhteyttä",
        footer_rights: "Kaikki oikeudet pidätetään."
    }
};

// 2. Määritä elementit ja muuttujat
const languageSwitcher = document.getElementById('language-switcher');
const mobileLangSwitcher = document.getElementById('mobile-lang-switcher');
const cvLink = document.getElementById('cv-link');
let currentLanguage = localStorage.getItem('language') || 'fi';

// 3. Funktio, joka vaihtaa kielen
const setLanguage = (lang) => {
    // Käännä kaikki data-translate-attribuutilla merkityt tekstit
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });

    // Päivitä CV-linkki ja napin teksti kielen mukaan
    if (lang === 'en') {
        cvLink.href = 'pdf/CV_en_Akseli_Larikka.pdf';
        languageSwitcher.innerText = 'Suomeksi';
    } else {
        cvLink.href = 'pdf/CV_Akseli_Larikka.pdf';
        languageSwitcher.innerText = 'In English';
    }

    localStorage.setItem('language', lang);
    currentLanguage = lang;
};

// 4. Jaettu tapahtumankäsittelijä kielen vaihtamiselle
const handleLanguageChange = (e) => {
    e.preventDefault();
    const newLanguage = currentLanguage === 'fi' ? 'en' : 'fi';
    setLanguage(newLanguage);
};

// 5. Lisää tapahtumankäsittelijät molemmille napeille
languageSwitcher.addEventListener('click', handleLanguageChange);
mobileLangSwitcher.addEventListener('click', handleLanguageChange);

// 6. Aseta oikea kieli sivun latautuessa
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLanguage);
});