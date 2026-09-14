/* =========================================================
   DOUFIT_100
   JAVASCRIPT PRINCIPAL
========================================================= */


document.addEventListener(
    "DOMContentLoaded",
    function () {


        console.log(
            "DouFit_100 website loaded"
        );


        /* ==================================================
           HEADER SCROLL
        ================================================== */

        const header =
            document.querySelector(".header");


        function updateHeader() {


            if (window.scrollY > 50) {


                header.style.background =
                    "rgba(5, 5, 5, 0.98)";


                header.style.boxShadow =
                    "0 5px 30px rgba(0, 0, 0, 0.5)";


            } else {


                header.style.background =
                    "rgba(5, 5, 5, 0.92)";


                header.style.boxShadow =
                    "none";

            }

        }


        window.addEventListener(
            "scroll",
            updateHeader
        );


        updateHeader();



        /* ==================================================
           SMOOTH SCROLL
        ================================================== */

        const internalLinks =
            document.querySelectorAll(
                'a[href^="#"]'
            );


        internalLinks.forEach(
            function (link) {


                link.addEventListener(
                    "click",
                    function (event) {


                        const targetId =
                            this.getAttribute("href");


                        if (
                            !targetId ||
                            targetId === "#"
                        ) {

                            return;

                        }


                        const targetSection =
                            document.querySelector(
                                targetId
                            );


                        if (targetSection) {


                            event.preventDefault();


                            const headerHeight =
                                header.offsetHeight;


                            const position =
                                targetSection
                                    .getBoundingClientRect()
                                    .top +

                                window.pageYOffset -

                                headerHeight;


                            window.scrollTo({

                                top: position,

                                behavior: "smooth"

                            });

                        }

                    }
                );

            }
        );



        /* ==================================================
           ACTIVE NAVIGATION
        ================================================== */

        const sections =
            document.querySelectorAll(
                "main section[id]"
            );


        const navLinks =
            document.querySelectorAll(
                ".nav-links a"
            );


        function highlightNavigation() {


            let currentSection = "";


            sections.forEach(
                function (section) {


                    const sectionTop =
                        section.offsetTop - 180;


                    const sectionHeight =
                        section.offsetHeight;


                    if (

                        window.scrollY >=
                        sectionTop

                        &&

                        window.scrollY <
                        sectionTop +
                        sectionHeight

                    ) {


                        currentSection =
                            section.getAttribute("id");

                    }

                }
            );


            navLinks.forEach(
                function (link) {


                    link.style.color = "";


                    const href =
                        link.getAttribute("href");


                    if (
                        href ===
                        "#" + currentSection
                    ) {


                        link.style.color =
                            "#e50914";

                    }

                }
            );

        }


        window.addEventListener(
            "scroll",
            highlightNavigation
        );


        highlightNavigation();



        /* ==================================================
           SCROLL ANIMATIONS
        ================================================== */

        const animatedElements =
            document.querySelectorAll(

                ".service-card, " +

                ".feature, " +

                ".stat, " +

                ".contact-item, " +

                ".section-header"

            );


        animatedElements.forEach(
            function (element) {


                element.style.opacity =
                    "0";


                element.style.transform =
                    "translateY(35px)";


                element.style.transition +=
                    ", opacity 0.7s ease, transform 0.7s ease";

            }
        );



        const observer =
            new IntersectionObserver(

                function (entries) {


                    entries.forEach(
                        function (entry) {


                            if (
                                entry.isIntersecting
                            ) {


                                entry.target.style.opacity =
                                    "1";


                                entry.target.style.transform =
                                    "translateY(0)";


                                observer.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },

                {

                    threshold: 0.12

                }

            );


        animatedElements.forEach(
            function (element) {

                observer.observe(element);

            }
        );



        /* ==================================================
           HERO ANIMATION
        ================================================== */

        const heroContent =
            document.querySelector(
                ".hero-content"
            );


        if (heroContent) {


            heroContent.style.opacity =
                "0";


            heroContent.style.transform =
                "translateY(30px)";


            heroContent.style.transition =
                "opacity 1s ease, transform 1s ease";


            setTimeout(
                function () {


                    heroContent.style.opacity =
                        "1";


                    heroContent.style.transform =
                        "translateY(0)";


                },
                200
            );

        }



        /* ==================================================
           MOBILE MENU
        ================================================== */

        const navbar =
            document.querySelector(
                ".navbar"
            );


        const navMenu =
            document.querySelector(
                ".nav-links"
            );


        const navButton =
            document.querySelector(
                ".nav-btn"
            );


        const menuButton =
            document.createElement(
                "button"
            );


        menuButton.innerHTML =
            "☰";


        menuButton.classList.add(
            "mobile-menu-button"
        );


        menuButton.setAttribute(
            "aria-label",
            "Ouvrir le menu"
        );


        menuButton.style.background =
            "transparent";


        menuButton.style.border =
            "none";


        menuButton.style.color =
            "#ffffff";


        menuButton.style.fontSize =
            "28px";


        menuButton.style.cursor =
            "pointer";


        menuButton.style.display =
            "none";


        menuButton.style.padding =
            "5px 10px";


        navbar.insertBefore(
            menuButton,
            navButton
        );



        let menuOpen = false;



        function configureMobileMenu() {


            if (
                window.innerWidth <= 768
            ) {


                menuButton.style.display =
                    "block";


                if (!menuOpen) {

                    navMenu.style.display =
                        "none";

                }


            } else {


                menuOpen = false;


                menuButton.style.display =
                    "none";


                menuButton.innerHTML =
                    "☰";


                navMenu.removeAttribute(
                    "style"
                );

            }

        }



        function openMobileMenu() {


            navMenu.style.display =
                "flex";


            navMenu.style.position =
                "fixed";


            navMenu.style.top =
                header.offsetHeight +
                "px";


            navMenu.style.left =
                "0";


            navMenu.style.width =
                "100%";


            navMenu.style.background =
                "#080808";


            navMenu.style.flexDirection =
                "column";


            navMenu.style.alignItems =
                "center";


            navMenu.style.padding =
                "35px";


            navMenu.style.gap =
                "25px";


            navMenu.style.borderBottom =
                "2px solid #e50914";


            navMenu.style.zIndex =
                "999";


            menuButton.innerHTML =
                "✕";


            menuButton.setAttribute(
                "aria-label",
                "Fermer le menu"
            );

        }



        function closeMobileMenu() {


            if (
                window.innerWidth <= 768
            ) {


                navMenu.style.display =
                    "none";

            }


            menuOpen = false;


            menuButton.innerHTML =
                "☰";


            menuButton.setAttribute(
                "aria-label",
                "Ouvrir le menu"
            );

        }



        menuButton.addEventListener(
            "click",
            function () {


                menuOpen =
                    !menuOpen;


                if (menuOpen) {


                    openMobileMenu();


                } else {


                    closeMobileMenu();

                }

            }
        );



        navLinks.forEach(
            function (link) {


                link.addEventListener(
                    "click",
                    function () {


                        if (
                            window.innerWidth <=
                            768
                        ) {


                            closeMobileMenu();

                        }

                    }
                );

            }
        );



        window.addEventListener(
            "resize",
            configureMobileMenu
        );


        configureMobileMenu();



        /* ==================================================
           CONTACT FORM
        ================================================== */

        const contactForm =
            document.querySelector(
                ".contact-form"
            );


        if (contactForm) {


            contactForm.addEventListener(
                "submit",
                function (event) {


                    event.preventDefault();


                    const name =
                        document
                            .getElementById("name")
                            .value
                            .trim();


                    const email =
                        document
                            .getElementById("email")
                            .value
                            .trim();


                    const goal =
                        document
                            .getElementById("goal")
                            .value;


                    const message =
                        document
                            .getElementById("message")
                            .value
                            .trim();



                    if (

                        name === ""

                        ||

                        email === ""

                        ||

                        goal === ""

                        ||

                        message === ""

                    ) {


                        alert(
                            "Veuillez remplir tous les champs."
                        );


                        return;

                    }



                    const subject =
                        "Nouvelle demande DouFit_100 - " +
                        name;



                    const emailBody =

                        "Bonjour DouFit_100,\n\n" +

                        "Je souhaite obtenir plus d'informations sur vos services.\n\n" +

                        "Nom : " +
                        name +
                        "\n" +

                        "Email : " +
                        email +
                        "\n" +

                        "Objectif : " +
                        getGoalName(goal) +
                        "\n\n" +

                        "Message :\n" +
                        message +
                        "\n\n" +

                        "Merci.";



                    const mailtoLink =

                        "mailto:doufit100@gmail.com" +

                        "?subject=" +

                        encodeURIComponent(
                            subject
                        ) +

                        "&body=" +

                        encodeURIComponent(
                            emailBody
                        );



                    window.location.href =
                        mailtoLink;

                }
            );

        }



        /* ==================================================
           GOAL NAMES
        ================================================== */

        function getGoalName(goal) {


            const goals = {


                "fat-loss":
                    "Perte de gras",


                "muscle-gain":
                    "Prise de muscle",


                "competition-prep":
                    "Préparation compétition",


                "posing":
                    "Posing",


                "other":
                    "Autre"

            };


            return (
                goals[goal] ||
                goal
            );

        }



        /* ==================================================
           CURRENT YEAR
        ================================================== */

        const footerCopyright =
            document.querySelector(
                ".footer-bottom p"
            );


        if (footerCopyright) {


            const year =
                new Date()
                    .getFullYear();


            footerCopyright.innerHTML =

                "© " +

                year +

                " DouFit_100. Tous droits réservés.";

        }


    }
);