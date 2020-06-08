class MenuAction {


    body = document.querySelector("body");
    menu;

    /**
     * Creer et affichage du menu des actions du joueur
     */
    creerMenuAction(){
        let divMenuJeu = this.creerDOMElem("div","menuJeu",  );
        let titreH1 = this.creerDOMElem("h1","menuAction", "ACTION DE : "+game.joueur.nom );
        let divActionTitre = this.creerDOMElem("div","action");
        let divActionList = this.creerDOMElem("div","action");
        let titreH21 = this.creerDOMElem("div","titreH2", "Attaque");
        let titreH22 = this.creerDOMElem("div","titreH2", "Défense");
        let divList1 = this.creerDOMElem("div","menu");
        let divList2 = this.creerDOMElem("div","menu" );

        for (let i = 0; i < game.joueur.competenceAttaque.length; i++) {
            let divAttaque = this.creerDOMElem("div",
                "menu btn btn-attaque", game.joueur.competenceAttaque[i][0]);
            divList2.appendChild(divAttaque);
            divAttaque.onclick = event => ev.atkCible(divAttaque, i)

        }
        for (let i = 0; i < game.joueur.competenceDefense.length; i++) {
            let divDefense = this.creerDOMElem("div",
                "menu btn btn-defense", game.joueur.competenceDefense[i][0]);
            divList1.appendChild(divDefense);
            divDefense.onclick = event => ev.defCible(divDefense, i)
        }


        this.body.appendChild(divMenuJeu);
        divMenuJeu.appendChild(titreH1);
        divMenuJeu.appendChild(divActionTitre);
        divMenuJeu.appendChild(divActionList);
        divActionTitre.appendChild(titreH21);
        divActionTitre.appendChild(titreH22);
        divActionList.appendChild(divList2);
        divActionList.appendChild(divList1);

        this.menu = divMenuJeu;
    }

    /**
     * Fait apparaitre l'ensemble des cibles accessible au joueur
     * @param type
     * @param nom
     * @param indice
     */
    creerMenuCible(type, nom, indice){
        let divMenuJeu = this.creerDOMElem("div","menuJeu",  );
        let titreH1 = this.creerDOMElem("h1","menuAction", "MA CIBLE" );
        let divActionList = this.creerDOMElem("div","action");
        let divList = this.creerDOMElem("div","menu" );
        let divAnnuler = this.creerDOMElem("div","menu btn btn-defense", "annuler" );
        divAnnuler.onclick = event => ev.retourChoixAtion()

        if(type === "DEF"){
            this.actionDef(divList, indice);

        }
        if(type === "ATK"){
            this.actionAtk(divList, indice);
        }


        this.body.appendChild(divMenuJeu);
        divMenuJeu.appendChild(titreH1);
        divMenuJeu.appendChild(divActionList);
        divActionList.appendChild(divList);
        divMenuJeu.appendChild(divAnnuler)

        this.menu = divMenuJeu;
    }

    /**
     * Liste des actions defensives
     * @param divList
     * @param indice
     */
    actionDef(divList, indice) {
        for (let i = 0; i < equipe.EQUIPE.length; i++) {
            let divAttaque = this.creerDOMElem("div",
                "menu btn btn-defense",
                (Function('return equipe.EQUIPE[' + i + '].nom'))());
            divList.appendChild(divAttaque);
            divAttaque.onclick = event => ev.atkAction(indice, i)
        }
    }


    /**
     * Liste des actions offensives
     * @param divList
     * @param indice
     */
    actionAtk(divList, indice) {
        for (let i = 0; i < moEquipeMonstre.EQUIPE.length; i++) {
            let divAttaque = this.creerDOMElem("div",
                "menu btn btn-attaque",
                (Function('return moEquipeMonstre.EQUIPE['+i + '].nom'))());
            divList.appendChild(divAttaque);
            divAttaque.onclick = event => ev.defAction(indice, i)
        }
    }


    /**
     * Permet de creer un element du DOM structer
     * @param DOMelem
     * @param className
     * @param innerHTML
     * @param id
     * @returns {any}
     */
    creerDOMElem(DOMelem, className="", innerHTML ="",id = ""  ) {
        let element = document.createElement(DOMelem);
        element.className = className;
        element.innerText = innerHTML;

        return element
    }
}