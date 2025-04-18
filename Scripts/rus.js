//Mobiilinäkymän hampurilaisvalikko
document.addEventListener('DOMContentLoaded', function() {
    const hamburgerIcon = document.querySelector('.hamburger-container');
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    const sidebarLinks = sidebar.querySelectorAll('a'); // Haetaan kaikki linkit sivupalkista

    if (hamburgerIcon && sidebar && mainContent) {
        hamburgerIcon.addEventListener('click', function() {
            sidebar.classList.toggle('open');
            mainContent.classList.toggle('sidebar-open');
        });

        // Lisätään tapahtumakuuntelija jokaiseen sivupalkin linkkiin
        sidebarLinks.forEach(link => {
            link.addEventListener('click', function() {
                // Suljetaan sivupalkki
                sidebar.classList.remove('open');
                mainContent.classList.remove('sidebar-open');
            });
        });

        // Suljetaan sivupalkki, jos klikataan pääsisällön aluetta (ei hampurilaista)
      /*  mainContent.addEventListener('click', function(event) {
            if (!event.target.closest('.sidebar') && sidebar.classList.contains('open')) {
                sidebar.classList.remove('open');
                mainContent.classList.remove('sidebar-open');
            }
        });*/
    }
});

//Selainnäkymän sidebar
function adjustMainContentMargin() {
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');

    if (sidebar && mainContent) {
      const sidebarWidth = sidebar.offsetWidth;
      mainContent.style.marginLeft = `${sidebarWidth}px`;
    }
  }

  // Säädetään marginaali sivun latautuessa
  document.addEventListener('DOMContentLoaded', adjustMainContentMargin);

  // Säädetään marginaali ikkunan koon muuttuessa (responsiveness)
  window.addEventListener('resize', adjustMainContentMargin);


  // takaisin ylös nappi
  document.addEventListener('DOMContentLoaded', function() {
    const backToTopBtn = document.getElementById('backToTopBtn');
  
    // Näytä nappi kun scrollataan alas
    window.addEventListener('scroll', function() {
      if (window.scrollY > 200) { // Näkyviin kun scrollattu 200px
        backToTopBtn.style.display = 'block';
      } else {
        backToTopBtn.style.display = 'none';
      }
    });
  
    // Scrollaa ylös napista
    backToTopBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });


  //Korosta korkein otsikko
  function highlightActiveSidebarLink() {
    const sections = document.querySelectorAll('h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]'); // Valitse kaikki otsikot H1-H6, joilla on ID
    const sidebarLinks = document.querySelectorAll('.sidebar a[href]');
    let currentSection = null;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 50) {
            currentSection = section;
        }
    });

    sidebarLinks.forEach(link => {
        link.classList.remove('active');
    });

    if (currentSection) {
        const currentId = currentSection.getAttribute('id');
        const activeLink = document.querySelector(`.sidebar a[href="#${currentId}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }
}

// Lisää CSS-tyyli korostusta varten
const style = document.createElement('style');
style.innerHTML = `
    .sidebar a.active {
        background-color: #243342b7;
        color: #fff;
        text-decoration: underline;
    }
`;
document.head.appendChild(style);

// Kuuntele scroll-tapahtumaa ja päivitä korostus
window.addEventListener('scroll', highlightActiveSidebarLink);

// Suorita highlightActiveSidebarLink() kerran sivun latauksen jälkeen
document.addEventListener('DOMContentLoaded', highlightActiveSidebarLink);
