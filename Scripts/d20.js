document.addEventListener('DOMContentLoaded', function () {
    // --- Alkuperäinen koodi ---
    const mainContent = document.getElementById('main-content');
    const navMenu = document.getElementById('nav-menu');
    const sidebar = document.getElementById('sidebar');
    const menuToggle = document.getElementById('menu-toggle');

    // Otsikoiden numerointi
    const headersToNumber = mainContent.querySelectorAll('h1, h2, h3, h4');
    const counters = [0, 0, 0];
    headersToNumber.forEach(header => {
        const level = parseInt(header.tagName.substring(1));
        if (level === 1) {
            counters.fill(0);
        } else if (level >= 2 && level <= 4) {
            const counterIndex = level - 2;
            counters[counterIndex]++;
            for (let i = counterIndex + 1; i < counters.length; i++) {
                counters[i] = 0;
            }
            const numberString = counters.slice(0, counterIndex + 1).join('.');
            header.textContent = `${numberString} ${header.textContent}`;
        }
    });

    // Sivupalkin luonti
    const headersForSidebar = mainContent.querySelectorAll('h2, h3, h4');
    const createSlug = (text) => {
        if (!text) return '';
        const cleanText = text.replace(/^[\d\.]+\s/, '');
        return 'header-' + cleanText.toString().toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^\w\-]+/g, '')
            .replace(/\-\-+/g, '-')
            .replace(/^-+/, '')
            .replace(/-+$/, '');
    };
    headersForSidebar.forEach(header => {
        const numberedTitle = header.textContent;
        let id = header.id;
        if (!id) {
            id = createSlug(numberedTitle);
            header.id = id;
        }
        const link = document.createElement('a');
        link.href = `#${id}`;
        link.textContent = numberedTitle;
        link.className = 'block py-1.5 px-4 rounded-md text-stone-700 hover:bg-purple-100 nav-link transition-all duration-200';
        if (header.tagName === 'H2') {
            link.classList.add('font-bold', 'text-purple-800', 'mt-1');
        } else if (header.tagName === 'H3') {
            link.classList.add('ml-4');
        } else if (header.tagName === 'H4') {
            link.classList.add('ml-8', 'text-sm');
        }
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
            if (window.innerWidth < 768) {
                sidebar.classList.add('sidebar-hidden');
            }
        });
        navMenu.appendChild(link);
    });

    // --- Mobile Sidebar Controls ---
    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('sidebar-hidden');
    });
    mainContent.addEventListener('click', () => {
        if (window.innerWidth < 768 && !sidebar.classList.contains('sidebar-hidden')) {
            sidebar.classList.add('sidebar-hidden');
        }
    });

    // ====================================================================
    // Sivupalkin automaattinen vieritys
    // ====================================================================
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            let id = entry.target.id;
            const navLink = navMenu.querySelector(`a[href="#${id}"]`);
            if (navLink) {
                if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
                    // Poistetaan ensin 'active'-luokka kaikista linkeistä
                    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
                    // Lisätään 'active'-luokka nykyiseen näkyvään linkkiin
                    navLink.classList.add('active');

                    // Vieritetään sivupalkkia niin, että aktiivinen linkki on näkyvissä
                    navLink.scrollIntoView({
                        behavior: 'smooth',
                        block: 'nearest' // Vierittää vain, jos linkki ei ole jo näkyvissä
                    });
                }
            }
        });
    }, { rootMargin: "-30% 0px -60% 0px", threshold: 0.6 });
    headersForSidebar.forEach(header => observer.observe(header));

    // ====================================================================
    // Vieritysnappien toiminnallisuus
    // ====================================================================
    const scrollButtonsContainer = document.getElementById('scroll-buttons-container');
    const scrollToH2Button = document.getElementById('scroll-to-h2'); // Nimeä voisi muuttaa, mutta ID:llä ei ole väliä
    const scrollToTopButton = document.getElementById('scroll-to-top');

    // Haetaan ensimmäinen H3-otsikko, joka toimii kynnysarvona
    const firstHeader = document.querySelector('#main-content h3');

    // Varmistetaan, että kaikki tarvittavat elementit löytyivät
    if (!scrollButtonsContainer || !scrollToH2Button || !scrollToTopButton || !firstHeader) {
        console.error("Vieritysnappien toiminnallisuutta ei voitu alustaa. Yksi tai useampi elementti puuttuu.");
        return; // Lopetetaan suoritus, jos elementtejä ei löydy
    }

    // 1. Näytä/piilota napit vierittäessä
    window.addEventListener('scroll', () => {
        const triggerPoint = firstHeader.offsetTop - 50;
        if (window.scrollY > triggerPoint) {
            scrollButtonsContainer.classList.add('visible');
        } else {
            scrollButtonsContainer.classList.remove('visible');
        }
    });

    // 2. "Vieritä alkuun" -napin toiminta (tämä oli jo kunnossa)
    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // 3. KORJATTU: "Vieritä lähimpään" -napin logiikka etsii nyt H3-otsikoita
    scrollToH2Button.addEventListener('click', () => {
        // KORJATTU: Haetaan kaikki H3-elementit H2-elementtien sijaan
        const h3Elements = Array.from(mainContent.querySelectorAll('h3'));

        // Etsitään kaikki H3-otsikot, jotka ovat nykyisen näkymän yläpuolella
        const h3sAbove = h3Elements.filter(h3 => h3.getBoundingClientRect().top < 0);

        if (h3sAbove.length > 0) {
            // Vieritä yläpuolella olevista otsikoista viimeiseen (eli lähimpään)
            const targetH3 = h3sAbove[h3sAbove.length - 1];
            targetH3.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        } else {
            // Jos yläpuolella ei ole yhtään H3:sta, mennään aivan alkuun
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });

    navLink.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
    });
});