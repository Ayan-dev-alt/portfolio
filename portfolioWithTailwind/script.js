// ===========================================
// Portfolio JS
// ===========================================



document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // Lucide Icons
    // ==========================

    lucide.createIcons();

    const rotatorWrap = document.querySelector(".about-rotator-wrap");
    const rotatorText = document.querySelector(".about-rotator");
    const typingCursor = document.querySelector(".typing-cursor");

    if (rotatorWrap && rotatorText && typingCursor) {
        const phrases = [
            "Interactive Websites",
            "Modern Interfaces",
            "Dynamic Experiences"
        ];

        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        const renderPhrase = () => {
            const currentPhrase = phrases[phraseIndex];
            rotatorText.textContent = currentPhrase.slice(0, charIndex);
            typingCursor.style.marginLeft = `${charIndex === 0 ? 0 : 0.08}em`;
        };

        const typeLoop = () => {
            const currentPhrase = phrases[phraseIndex];

            if (!isDeleting && charIndex < currentPhrase.length) {
                charIndex += 1;
                renderPhrase();
                setTimeout(typeLoop, 90);
                return;
            }

            if (!isDeleting && charIndex === currentPhrase.length) {
                isDeleting = true;
                setTimeout(typeLoop, 1200);
                return;
            }

            if (isDeleting && charIndex > 0) {
                charIndex -= 1;
                renderPhrase();
                setTimeout(typeLoop, 55);
                return;
            }

            if (isDeleting && charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                charIndex = 0;
                renderPhrase();
                setTimeout(typeLoop, 220);
            }
        };

        rotatorText.textContent = "";
        charIndex = 0;
        renderPhrase();
        setTimeout(typeLoop, 180);
    }


    // ===========================================
    // Mobile Menu
    // ===========================================

    const menuBtn = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");

    const menuOpen = document.getElementById("menu-open");
    const menuClose = document.getElementById("menu-close");

    menuBtn.addEventListener("click", () => {

        mobileMenu.classList.toggle("hidden");

        menuOpen.classList.toggle("hidden");
        menuClose.classList.toggle("hidden");

    });


    // ==========================
    // Close Mobile Menu
    // ==========================

    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            mobileMenu.classList.add("hidden");

        });

    });


    const navbar = document.querySelector("nav");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            navbar.classList.add(
                "bg-slate-transparent",
                "shadow-2xl",
                "shadow-black/30"
            );

            navbar.classList.remove(
                "bg-slate-950/70"
            );

        }

        else {

            navbar.classList.remove(
                "bg-slate-950/95",
                "shadow-2xl",
                "shadow-black/30"
            );

            navbar.classList.add(
                "bg-slate-950/70"
            );

        }

    });







    // ==========================
    // Theme Toggle
    // ==========================

    // const themeToggle = document.getElementById("theme-toggle");

    // if (themeToggle) {
    //     themeToggle.addEventListener("click", () => {
    //         document.documentElement.classList.toggle("dark");
    //     });
    // }



    // ==========================
    // Smooth Scroll
    // ==========================

    navLinks.forEach(link => {

        link.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        });

    });


    // ==========================
    // Reveal Animation
    // ==========================
    const revealItems = document.querySelectorAll(".reveal");

    const revealObserver = new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {
                if (entry.isIntersecting) {

                    entry.target.classList.remove(
                        "opacity-0",
                        "translate-y-16"
                    );

                    entry.target.classList.add(
                        "opacity-100",
                        "translate-y-0"
                    );

                } else {

                    entry.target.classList.remove(
                        "opacity-100",
                        "translate-y-0"
                    );

                    entry.target.classList.add(
                        "opacity-0",
                        "translate-y-16"
                    );

                }

            });

        },

        {

            threshold: 0.1,
            rootMargin: "0px 0px -80px 0px"

        }

    );

    revealItems.forEach(item => {

        item.classList.add(
            "opacity-0",
            "translate-y-16",
            "transition-all",
            "duration-1000",
            "ease-out"
        );

        revealObserver.observe(item);

    });


    // ==========================
    // Skills Animation
    // ==========================

    const skillBars = document.querySelectorAll(".skill-progress");

    const skillObserver = new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.target.classList.contains("backend-loading-bar")) {
                    return;
                }

                if (entry.isIntersecting) {

                    entry.target.style.width =
                        entry.target.dataset.width;

                }

                else {

                    entry.target.style.width = "0%";

                }

            });

        },

        {

            threshold: .5

        }

    );


    skillBars.forEach(bar => {

        if (bar.classList.contains("backend-loading-bar")) {
            bar.style.width = "0%";
            bar.style.transition = "none";
            return;
        }

        bar.style.width = "0%";

        bar.style.transition = "1.5s ease";

        skillObserver.observe(bar);

    });


    // ==========================
    // Active Navbar
    // ==========================

    const navItems = document.querySelectorAll(".navbar a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const top = section.offsetTop - 120;
            const height = section.clientHeight;

            if (pageYOffset >= top) {

                current = section.getAttribute("id");

            }

        });

        navItems.forEach(link => {

            link.classList.remove(
                "text-indigo-500"
            );

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add(
                    "text-indigo-500"
                );

            }

        });

    });

});
const sections = document.querySelectorAll("section");

const navItems = document.querySelectorAll("nav a[href^='#']");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 150;

        const height = section.offsetHeight;

        if (window.scrollY >= top &&
            window.scrollY < top + height) {

            current = section.id;

        }

    });

    navItems.forEach(link => {

        link.classList.remove("text-indigo-400");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("text-indigo-400");

        }

    });

});
// ==========================
// Scroll To Top Button
// ==========================

const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        scrollBtn.classList.remove(
            "opacity-0",
            "invisible",
            "translate-y-5"
        );

        scrollBtn.classList.add(
            "opacity-100",
            "visible",
            "translate-y-0"
        );

    }

    else {

        scrollBtn.classList.add(
            "opacity-0",
            "invisible",
            "translate-y-5"
        );

        scrollBtn.classList.remove(
            "opacity-100",
            "visible",
            "translate-y-0"
        );

    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});
// ==========================
// Social Links
// ==========================

const instagram = document.getElementById("instagram");

if (instagram) {

    instagram.addEventListener("click", () => {

        window.open("https://www.instagram.com/tech___ayu/", "_blank");

    });

}

const github = document.getElementById("github");

if (github) {

    github.addEventListener("click", (e) => {



        window.open(
            "https://github.com/ayanali26156566",

        );

    });

}

const facebook = document.getElementById("#facebook");

if (facebook) {

    facebook.addEventListener("click", (e) => {



        window.open(
            "https://facebook.com/ayanali_051",

        );

    });

}
const pinterest = document.getElementById("#pinterest");

if (pinterest) {

    pinterest.addEventListener("click", (e) => {


        window.open(
            "https://pinterest.com/ayanali_051",

        );

    });

}