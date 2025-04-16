//Mobiilinäkymän hampurilaisvalikko
document.addEventListener('DOMContentLoaded', function() {
    const hamburgerIcon = document.querySelector('.hamburger-container'); // Käytetään containeria klikkauksen kohdistamiseen
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');

    if (hamburgerIcon && sidebar && mainContent) {
        hamburgerIcon.addEventListener('click', function() {
            sidebar.classList.toggle('open');
            mainContent.classList.toggle('sidebar-open'); // Poistetaan tämä rivi
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