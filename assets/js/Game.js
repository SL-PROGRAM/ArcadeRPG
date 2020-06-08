class Game {

    plateau = null;
    _joueur;
    duree_tour = 2000;
    niveau = 1;



    get joueur() {
        return this._joueur;
    }

    set joueur(value) {
        this._joueur = value;
    }

    /**
     * Lance les menus de creations d'equipe
     */
    creerPartie(){
        let plateaux = jeu.creerAllPateau();
        jeu.afficherAllTableau(plateaux[0], plateaux[1])

    }

    /**
     * lance le combat
     */
    lancerPartie(){
        jeu.creerZoneTravail();
        equipe.creerEquipeHeros();
        moEquipeMonstre.creerEquipeMonstre(this.niveau);
        jeu.main.appendChild(jeu.PLATEAU_JEU);
        this.positionHeros();
        this.afficherNiveau();
        this.finDeNiveau()
    }

    tourSuivant(){
        jeu.creerZoneTravail();
        equipe.afficherEquipeHeros();
        moEquipeMonstre.creerEquipeMonstre(this.niveau);
        jeu.main.appendChild(jeu.PLATEAU_JEU);
        this.positionHeros();
        this.afficherNiveau();
        this.finDeNiveau()
    }



    afficherNiveau() {
        let divNiveau = document.createElement("div");
        divNiveau.classList = "text_anim";
        divNiveau.innerText = "NIVEAU " + this.niveau;
        jeu.PLATEAU_JEU.appendChild(divNiveau);
    }

    finDeNiveau(){
        setTimeout(function (){
            if(equipe.EQUIPE.length === 0 ){
            jeu.main.innerHTML="<h1> PERDU </h1>";
        }
        else if(moEquipeMonstre.EQUIPE.length === 0){
            jeu.main.innerHTML="<h1> GAGNÉ </h1>";
                setTimeout(function () {
                    jeu.clearLvl();
                    gainLvl.construirePage(0);
                    game.niveau += 1;
                },game.duree_tour);
        }
        else{
            game.aQuiLeTour()
            game.tourDeJeux(game.joueur)
        }
        }, this.duree_tour)

    }


    tourDeJeux(joueur) {
        if(document.querySelector(".text_anim") !== null){
            let divNiveau = document.querySelector(".text_anim");
            setTimeout(function () {
                    divNiveau.remove();
            },game.duree_tour);
        }

        for (let i = 0; i < equipe.EQUIPE.length; i++) {
            if (joueur === equipe.EQUIPE[i]) {
                menu.creerMenuAction();
                break
            }
            else if (joueur === moEquipeMonstre.EQUIPE[i] ) {

                this.tourMonstre(joueur);
                break;
            }
        }
    }

    tourMonstre(joueur) {
        setTimeout(function (){
            let cible = Math.floor(Math.random() * Math.floor(equipe.EQUIPE.length - 1));
            joueur.attaque(equipe.EQUIPE[0])
            setTimeout(function (){
                game.finDeNiveau()
            }, game.duree_tour)



        }, game.duree_tour)

    }

    aQuiLeTour(){
        // TODO Changer le mode aleatoire par def max PA des deux equipes
        let listVivant = [];
        for (let i = 0; i < equipe.EQUIPE.length; i++) {
            listVivant.push(equipe.EQUIPE[i]);
        }
        for (let i = 0; i < moEquipeMonstre.EQUIPE.length; i++) {
            listVivant.push(moEquipeMonstre.EQUIPE[i]);
        }
        let nouveauJoueur = listVivant[0];


        for (let i = 0; i <listVivant.length ; i++) {
                if(listVivant[i].pa > nouveauJoueur.pa){
                    nouveauJoueur = listVivant[i];
                }
                else if (listVivant[i].pa === nouveauJoueur.pa && listVivant[i].agilite > nouveauJoueur.agilite){
                    nouveauJoueur = listVivant[i];
                }
        }
        this.joueur = nouveauJoueur;

    }


    /**
     * Positionne les heros correctement en fonction des plateau
     */
    positionHeros() {
        if(jeu.PLATEAU_JEU.id === "0"){
            this.allPosition(20, 70, 10, 90, 40 ,70, 30 ,90);
        }
        else{
            this.allPosition(20, 70, 10, 90, 40 ,70, 30 ,90);
        }
    }

    allPosition(hero1X,hero1Y,hero2X,hero2Y,hero3X,hero3Y,hero4X,hero4Y) {
        hero10.savePosition(hero1X, hero1Y);
        hero40.savePosition(hero2X, hero2Y);
        hero30.savePosition(hero3X, hero3Y);
        hero20.savePosition(hero4X, hero4Y);
        hero10.position();
        hero40.position();
        hero30.position();
        hero20.position();
        hero10.imagePerso.majAffichage(hero10)
        hero20.imagePerso.majAffichage(hero20)
        hero30.imagePerso.majAffichage(hero30)
        hero40.imagePerso.majAffichage(hero40)
    }



}