class GainLvl {

    main = document.createElement("main");

    construirePage(i){
        GenericFct.clearBody()

        let body = jeu.body;


        let divJoueur = document.createElement("div");
        divJoueur.id = equipe.EQUIPE[i].nom;


        let titreGeneral = this.blocTitreH1("Amélioration de :");
        let titreNomJoueur = this.blocTitreH1(equipe.EQUIPE[i].nom+" ( "+equipe.EQUIPE[i].className+" )");


        let titreNomJoueur2 = document.createElement("h1");
        titreNomJoueur2.classList = "centerBox";
        titreNomJoueur2.innerText = equipe.EQUIPE[i].nom+" ( "+equipe.EQUIPE[i].className+" )";

        let {divContainerCarac, divListCarac, titreCarac} = this.blocListCarac("Caractéristiques");
        let blocComp = document.createElement("div");
        blocComp.classList = "container centerBox";
        let {divContainerCompDef, divListCompDef, titreCompDef} = this.blocListCompDef("Compétences de Défense");
        let {divContainerCompAtk, divListCompAtk, titreCompAtk} = this.blocListCompAtk("Compétences d'Attaque");

        this.creerListCarac(i, divContainerCarac, divContainerCarac, divListCarac, titreCarac);
        this.creerListComp(i, divContainerCarac, divContainerCompDef, divListCompDef, titreCompDef, "DEF", blocComp);
        this.creerListComp(i, divContainerCarac, divContainerCompAtk, divListCompAtk, titreCompAtk, "ATK", blocComp);


        body.appendChild(this.main);
        this.main.appendChild(divJoueur);
        divJoueur.appendChild(titreGeneral);
        divJoueur.appendChild(titreNomJoueur);

        divJoueur.appendChild(divContainerCarac);
        divJoueur.appendChild(blocComp);
        blocComp.appendChild(divContainerCompDef);
        blocComp.appendChild(divContainerCompAtk);
    }

    creerListCarac(i, divJoueur, divContainer, divList, titre) {

        let caracInt = this.creerDivCarac("intelligence", divJoueur, i);
        let caracFor = this.creerDivCarac("force",  divJoueur, i);
        let caracAgl = this.creerDivCarac("agilité",  divJoueur, i);
        let caracEnd = this.creerDivCarac("endurence",  divJoueur, i);

        divContainer.appendChild(divList);
        divList.appendChild(titre);
        divList.appendChild(caracInt);
        divList.appendChild(caracAgl);
        divList.appendChild(caracEnd);
        divList.appendChild(caracFor);
    }

    creerDivCarac(txt, container, i ) {
        let carac = document.createElement("div");
        carac.classList = "comp comp-dispo";
        carac.innerText = txt.toUpperCase();
        carac.onclick  = event => {
            ev.gainCarac(txt, container, i);
            ev.gainCompHerosSuivant(i);
        }
        return carac;
    }

    creerListComp(i, divJoueur, divContainer, divList, titre, typecompToGet, divCompGeneral) {
        let compToGet;
        let compHave;
        if(typecompToGet === "DEF"){
            compToGet = equipe.EQUIPE[i].competenceDefenseToGet;
            compHave = equipe.EQUIPE[i].competenceDefense
        }
        else if(typecompToGet === "ATK"){
            compToGet = equipe.EQUIPE[i].competenceAttaqueToGet;
            compHave = equipe.EQUIPE[i].competenceAttaque;
        }
        divContainer.appendChild(divList);
        divList.appendChild(titre);
        for (let j = 0; j < compToGet.length; j++) {
            let comp = document.createElement("div");
            comp.classList = "comp comp-dispo";
            comp.innerText = compToGet[j][0].toUpperCase();

            comp.onclick  = event => {
                ev.gainComp(compToGet, j, compHave, divCompGeneral);
                ev.gainCompHerosSuivant(i)
            };
            divList.appendChild(comp);

        }
    }

    blocTitreH1(txt) {
        let titreNomJoueur = document.createElement("h1");
        titreNomJoueur.innerText = txt;
        titreNomJoueur.classList = "centerBox";
        return titreNomJoueur;
    }

    blocListCarac(txt) {
        let divContainer = document.createElement("div");
        divContainer.classList = "container colList"

        let divList = document.createElement("div");
        divList.classList = "listComp";

        let titre = document.createElement("h1");
        titre.innerText = "Liste des "+txt;
        titre.classList = "centerBox";

        return {divContainerCarac: divContainer, divListCarac: divList, titreCarac: titre};
    }

    blocListCompAtk(txt) {
        let divContainer = document.createElement("div");
        divContainer.classList = "container colList"

        let divList = document.createElement("div");
        divList.classList = "listComp";

        let titre = document.createElement("h1");
        titre.innerText = "Liste des "+txt;
        titre.classList = "centerBox";

        return {divContainerCompAtk: divContainer, divListCompAtk: divList, titreCompAtk: titre};
    }

    blocListCompDef(txt) {
        let divContainer = document.createElement("div");
        divContainer.classList = "container colList"

        let divList = document.createElement("div");
        divList.classList = "listComp";

        let titre = document.createElement("h1");
        titre.innerText = "Liste des "+txt;
        titre.classList = "centerBox";

        return {divContainerCompDef: divContainer, divListCompDef: divList, titreCompDef: titre};
    }



}