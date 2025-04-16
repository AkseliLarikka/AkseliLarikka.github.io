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