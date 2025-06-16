document.addEventListener('DOMContentLoaded', function () {
    const mainContent = document.getElementById('main-content');
    const navMenu = document.getElementById('nav-menu');
    const sidebar = document.getElementById('sidebar');
    const menuToggle = document.getElementById('menu-toggle');

    // ====================================================================
    // VAIHE 1: Otsikoiden automaattinen numerointi dokumenttiin
    // ====================================================================
    const headersToNumber = mainContent.querySelectorAll('h1, h2, h3, h4');
    const counters = [0, 0, 0]; // Laskurit tasoille h2, h3, h4

    headersToNumber.forEach(header => {
        const level = parseInt(header.tagName.substring(1));

        if (level === 1) {
            // H1-taso nollaa kaikki laskurit
            counters.fill(0);
        } else if (level >= 2 && level <= 4) {
            const counterIndex = level - 2; // h2 -> index 0, h3 -> index 1, jne.

            // Kasvata nykyisen tason laskuria
            counters[counterIndex]++;

            // Nollaa alemmat tasot
            for (let i = counterIndex + 1; i < counters.length; i++) {
                counters[i] = 0;
            }

            // Rakenna numeroitu merkkijono ja päivitä otsikko
            const numberString = counters.slice(0, counterIndex + 1).join('.');
            header.textContent = `${numberString} ${header.textContent}`;
        }
    });


    // ====================================================================
    // VAIHE 2: Sivupalkin navigaatiomenun luonti numeroiduista otsikoista
    // ====================================================================
    const headersForSidebar = mainContent.querySelectorAll('h2, h3, h4');

    const createSlug = (text) => {
        if (!text) return '';
        // Poistetaan numerointi ja välilyönti alusta slugia varten
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
        link.textContent = numberedTitle; // Käytä valmiiksi numeroitua otsikkoa
        link.className = 'block py-1.5 px-4 rounded-md text-stone-700 hover:bg-purple-100 nav-link transition-all duration-200';
        
        // Sivupalkin linkkien sisennys
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

    // --- Active Link Highlighting on Scroll ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            let id = entry.target.id;
            const navLink = navMenu.querySelector(`a[href="#${id}"]`);
            if (navLink) {
                if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
                    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
                    navLink.classList.add('active');
                }
            }
        });
    }, { rootMargin: "-30% 0px -60% 0px", threshold: 0.6 });

    headersForSidebar.forEach(header => observer.observe(header));
});