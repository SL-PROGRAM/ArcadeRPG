/**
 *
 * Cette class gère la creation et le choix du plateau de jeu
 *
 *
 */

class Plateau{

    TXT_BOUTON = "Commencer la partie";
    TITRE_PLATEAU = [
        "DESERT",
        "NUIT",
        "TEMPETE",
        "FORET",
        "SIEGE",
        "VILLAGE",
        "DUEL",
        "ALEATOIRE"
    ];
    NB_PLATEAU = this.TITRE_PLATEAU.length;
    body = document.querySelector("body");
    main = document.createElement("main");
    PLATEAU_JEU;


    /**
     * Mise en place d'un canevas de travail propre
     * @returns {HTMLElement}
     */
    creerZoneTravail(){
        GenericFct.clearBody();
        this.main = document.createElement("main");
        this.main.className="plateau centerBox container";
        this.body.appendChild(this.main);

        return this.main;
    }


    /**
     * Suppression de l'affichage des heros et monstres
     */
    clearLvl(){
        let allPerso = this.PLATEAU_JEU.querySelectorAll(".personPosition");
        allPerso.forEach(perso => perso.innerHTML ="")
    }

    /**
     * Enregistrement du plateau de Jeu
     * @param numeroPlateau
     */
    creerPlateauJeu(numeroPlateau){
        if (parseInt(numeroPlateau) === parseInt(this.NB_PLATEAU) -1) {
            numeroPlateau = Math.floor(Math.random() * Math.floor(parseInt(this.NB_PLATEAU) -2));
        }
        this.creerZoneTravail();
        this.PLATEAU_JEU = this.creerPlateau(numeroPlateau);
        this.PLATEAU_JEU.className = "centerBox fondUnique fond-"+(parseInt(numeroPlateau)+1)
    }


    creerAllPateau(){
        this.main = this.creerZoneTravail();
        let allTableau = [];
        let divBouton = [];
        let divImage = [];
        for (let i = 0; i < this.NB_PLATEAU; i++) {
            divImage.push(this.creerPlateau(i));
            let bouton = new BoutonWrapper(this.TITRE_PLATEAU[i], "Commencer", event => ev.selectPlateau(divImage[i]));
            divBouton.push(bouton.creerBoutonP());
        }
        allTableau.push(divImage)
        allTableau.push(divBouton)
        return allTableau;
    }

    afficherAllTableau(divImage, divBouton) {
        for (let i = 0; i < this.NB_PLATEAU; i++) {
            this.afficherPlateau(divImage, i, divBouton);
        }
    }


    afficherPlateau(divImage, i, divBouton) {
        this.afficherFond(divImage[i]);
        this.afficherBouton(divImage[i], divBouton[i]);
    }

    creerPlateau(i) {
        let divImage = document.createElement("div");
        divImage.className = "centerBox fond fond-" + (parseInt(i) + 1);
        divImage.id= i;
        return divImage
    }

    afficherFond(divImage) {
        this.main.appendChild(divImage);
    }

    afficherBouton(divImage, divBouton) {
        divImage.appendChild(divBouton);
    }


}

