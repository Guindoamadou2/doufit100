/* ==========================================================
   DOUFIT_100
   SCRIPT PRINCIPAL
========================================================== */


document.addEventListener(
    "DOMContentLoaded",
    function () {


        /* ======================================================
           ELEMENTS DU FORMULAIRE
        ======================================================= */

        const contactForm =
            document.getElementById(
                "contact-form"
            );


        const goalSelect =
            document.getElementById(
                "goal"
            );


        const messageField =
            document.getElementById(
                "message"
            );



        /* ======================================================
           INFORMATIONS DES SERVICES
        ======================================================= */

        const services = {


            /* FAT LOSS */

            "fat-loss": {

                name:
                    "Fat Loss",

                message:
                    "Bonjour, je suis intéressé(e) par le coaching Fat Loss de DouFit_100. J'aimerais discuter de mon objectif et savoir comment commencer."

            },


            /* MUSCLE GAIN */

            "muscle-gain": {

                name:
                    "Muscle Gain",

                message:
                    "Bonjour, je suis intéressé(e) par le coaching Muscle Gain de DouFit_100. J'aimerais discuter de mon objectif et savoir comment commencer."

            },


            /* COMPETITION PREP */

            "competition-prep": {

                name:
                    "Competition Prep",

                message:
                    "Bonjour, je suis intéressé(e) par la préparation Competition Prep de DouFit_100. J'aimerais discuter de ma compétition et de ma préparation."

            },


            /* POSING */

            "posing": {

                name:
                    "Posing",

                message:
                    "Bonjour, je suis intéressé(e) par une session de Posing avec DouFit_100. J'aimerais discuter de mes besoins et améliorer ma présentation."

            },


            /* AUTRE */

            "other": {

                name:
                    "Autre",

                message:
                    "Bonjour, j'aimerais obtenir plus d'informations sur les services DouFit_100."

            }


        };



        /* ======================================================
           RECUPERER LE SERVICE DEPUIS L'URL

           Exemple :

           index.html?service=fat-loss#contact
        ======================================================= */

        const urlParams =
            new URLSearchParams(
                window.location.search
            );


        const selectedService =
            urlParams.get(
                "service"
            );



        /* ======================================================
           MESSAGE AUTOMATIQUE ACTUEL
        ======================================================= */

        let lastAutomaticMessage = "";



        /* ======================================================
           PRESELECTION AUTOMATIQUE DU SERVICE
        ======================================================= */

        if (
            selectedService &&
            services[selectedService] &&
            goalSelect
        ) {


            /*
               Sélectionne automatiquement
               le service.
            */

            goalSelect.value =
                selectedService;



            /*
               Préremplit automatiquement
               le message.
            */

            if (
                messageField &&
                messageField.value.trim() === ""
            ) {


                messageField.value =
                    services[selectedService]
                        .message;


                lastAutomaticMessage =
                    services[selectedService]
                        .message;


            }


        }



        /* ======================================================
           CHANGEMENT MANUEL DU SERVICE
        ======================================================= */

        if (
            goalSelect &&
            messageField
        ) {


            goalSelect.addEventListener(
                "change",
                function () {


                    const service =
                        goalSelect.value;


                    const currentMessage =
                        messageField
                            .value
                            .trim();



                    /* ==========================================
                       VERIFIER SI LE MESSAGE PEUT ETRE CHANGE
                    =========================================== */

                    const canReplaceMessage =

                        currentMessage === "" ||

                        currentMessage ===
                        lastAutomaticMessage
                            .trim();



                    /* ==========================================
                       NOUVEAU MESSAGE AUTOMATIQUE
                    =========================================== */

                    if (
                        services[service] &&
                        canReplaceMessage
                    ) {


                        messageField.value =
                            services[service]
                                .message;


                        lastAutomaticMessage =
                            services[service]
                                .message;


                    }



                    /* ==========================================
                       AUCUN SERVICE SELECTIONNE
                    =========================================== */

                    if (
                        service === "" &&
                        currentMessage ===
                        lastAutomaticMessage
                            .trim()
                    ) {


                        messageField.value = "";


                        lastAutomaticMessage = "";


                    }


                }
            );


        }



        /* ======================================================
           DETECTER UN MESSAGE PERSONNALISE
        ======================================================= */

        if (messageField) {


            messageField.addEventListener(
                "input",
                function () {


                    /*
                       Si le client commence à modifier
                       le message lui-même, le script
                       ne doit plus remplacer son texte.
                    */


                    if (
                        messageField
                            .value
                            .trim()
                        !==
                        lastAutomaticMessage
                            .trim()
                    ) {


                        lastAutomaticMessage = "";


                    }


                }
            );


        }



        /* ======================================================
           ALLER AUTOMATIQUEMENT AU CONTACT
        ======================================================= */

        if (selectedService) {


            const contactSection =
                document.getElementById(
                    "contact"
                );


            if (contactSection) {


                setTimeout(
                    function () {


                        contactSection.scrollIntoView({

                            behavior:
                                "smooth",

                            block:
                                "start"

                        });


                    },

                    150
                );


            }


        }



        /* ======================================================
           FORMULAIRE
        ======================================================= */

        if (contactForm) {


            contactForm.addEventListener(
                "submit",
                function () {


                    /*
                       On laisse FormSubmit effectuer
                       l'envoi normalement.

                       Aucun preventDefault() ici.
                    */


                    const submitButton =
                        contactForm.querySelector(
                            'button[type="submit"]'
                        );


                    if (submitButton) {


                        submitButton.textContent =
                            "Envoi en cours...";


                        submitButton.disabled =
                            true;


                    }


                }
            );


        }


    }
);