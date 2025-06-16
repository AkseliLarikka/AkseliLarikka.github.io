document.addEventListener('DOMContentLoaded', function () {
            const mainContent = document.getElementById('main-content');
            const navMenu = document.getElementById('nav-menu');
            const sidebar = document.getElementById('sidebar');
            const menuToggle = document.getElementById('menu-toggle');
            
            // --- Navigation Menu Generation ---
            const headers = mainContent.querySelectorAll('h2, h3, h4');
            
            const createSlug = (text) => {
                if (!text) return '';
                return 'header-' + text.toString().toLowerCase()
                    .replace(/\s+/g, '-')
                    .replace(/[^\w\-]+/g, '')
                    .replace(/\-\-+/g, '-')
                    .replace(/^-+/, '')
                    .replace(/-+$/, '');
            };

            headers.forEach(header => {
                const title = header.textContent;
                let id = header.id;
                if (!id) {
                     id = createSlug(title);
                     header.id = id;
                }
                const link = document.createElement('a');
                link.href = `#${id}`;
                link.textContent = title;
                link.className = 'block py-1.5 px-4 rounded-md text-stone-700 hover:bg-purple-100 nav-link';

                if (header.tagName === 'H2') {
                    link.classList.add('font-bold', 'text-purple-800');
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

            headers.forEach(header => observer.observe(header));
        });
        