/**
 * class de gestion des equipes du jeu (monstre et heros)
 */
class Equipe {

    NB_EQUIPE = 4;
    body = document.querySelector("body");
    main = document.createElement("main");
    EQUIPE = [];
    CLASS = [
        'GUERRIER',
        'SOIGNEUR',
        'NECRO',
        'PERSO',
        'BARBARE',
        'MAGE',
        'VOLEUR'
    ];
    NB_CLASS = this.CLASS.length

    creerEquipeHeros(){
        for (let i = 0; i < this.EQUIPE.length ; i++) {
            let herosTemp = Function('return new ' + this.EQUIPE[i].className)();
            this.EQUIPE[i] = herosTemp;
        }
        hero10 = this.EQUIPE[0];
        hero20 = this.EQUIPE[1];
        hero30 = this.EQUIPE[2];
        hero40 = this.EQUIPE[3];
        this.afficherEquipeHeros()

    }

    afficherEquipeHeros(){
        for (let i = 0; i < this.EQUIPE.length ; i++) {
            this.EQUIPE[i].creerPerso();
        }
    }

    creerEquipeMonstre(niveau){
        Function('return Niveau.niveau'+niveau+'()')();

    }

    creerZoneTravail(){
        GenericFct.clearBody();
        this.main = document.createElement("main");
        this.main.className="equipe centerBox container";
        let button= document.createElement("button")
        button.innerText = "Valider";
        button.className = "titre";
        button.onclick = event => ev.getEquipe()
        this.body.appendChild(this.main);
        this.body.appendChild(button);


        return this.main;
    }


    creerListHeros(){
        this.main = this.creerZoneTravail();

        let allHeros = [];
        let divBouton = [];
        let divImage = [];


        for (let i = 0; i < this.NB_CLASS; i++) {
            divImage.push(this.creerHero(i));

            divBouton.push(this.creerBouton(i, divImage[i]));
        }
        allHeros.push(divImage)
        allHeros.push(divBouton)
        return allHeros;
    }

    afficherListHeros(divImage, divBouton) {
        let divHerosPotenetiel = this.domHerosPotentiel();
        this.main.appendChild(divHerosPotenetiel);

        let divHerosRecrute = this.domHerosRecrute();
        this.main.appendChild(divHerosRecrute)

        for (let i = 0; i < this.NB_CLASS; i++) {
            this.afficherHeros(divImage[i], ".potentiel");
            this.afficherBouton(divImage[i], divBouton[i]);
        }

    }

    domHerosRecrute() {
        let divHerosRecrute = document.createElement("div");
        divHerosRecrute.className = "heros";

        let titreHerosRecrute = document.createElement("h1");
        titreHerosRecrute.innerText = "Listes des Heros Recrutés";
        titreHerosRecrute.className = "titre";

        let titre2HerosRecrute = document.createElement("h2");
        titre2HerosRecrute.innerText = "Vous pouvez recrutez : "+ this.NB_EQUIPE +" Heros";
        titre2HerosRecrute.className = "titre";

        let divContainerHerosRecrute = document.createElement("div");
        divContainerHerosRecrute.className = "heros recrute";

        divHerosRecrute.appendChild(titreHerosRecrute);
        divHerosRecrute.appendChild(titre2HerosRecrute);
        divHerosRecrute.appendChild(divContainerHerosRecrute);
        return divHerosRecrute;
    }

    domHerosPotentiel() {
        let divHerosPotenetiel = document.createElement("div");
        divHerosPotenetiel.className = "heros";

        let titreHerosPotentiel = document.createElement("h1");
        titreHerosPotentiel.className = "titre";
        titreHerosPotentiel.innerText = "Listes des Heros Potentiels";

        let divContainerHerosPotentiel = document.createElement("div");
        divContainerHerosPotentiel.className = "heros potentiel";

        divHerosPotenetiel.appendChild(titreHerosPotentiel);
        divHerosPotenetiel.appendChild(divContainerHerosPotentiel);
        return divHerosPotenetiel;
    }

    creerHero(i) {
        let divImage = document.createElement("div");
        divImage.className = "divHeros";
        divImage.id= i;
        return divImage
    }

    afficherHeros(divImage, cible) {
        let potentiel = document.querySelector(cible);
        potentiel.appendChild(divImage);
    }

    creerBouton(i, divImage) {
        let divBouton = document.createElement("div");
        divBouton.className = "categoryWrapper";

        let titreBouton = document.createElement("h1");
        titreBouton.textContent = this.CLASS[i];

        let bouton = document.createElement("button");
        let span = document.createElement("span");
        let span2 = document.createElement("span");



        bouton.onclick = event => ev.deplacerVersPotentiel(deplacerVersRecrute, bouton, deplacerVersPotentiel);

        let spanAffichage = document.createElement("span");
        spanAffichage.dataset.test = "Recruter";
        spanAffichage.innerHTML = "recruter";
        divBouton.appendChild(titreBouton);
        divBouton.appendChild(bouton);
        bouton.appendChild(span);
        span.appendChild(span2);
        span2.appendChild(spanAffichage);


        function deplacerVersRecrute() {
            let heros = document.querySelector("[id='" + divImage.id + "']");
            let recrute = document.querySelector(".recrute");
            recrute.appendChild(heros)
            spanAffichage.dataset.test = "Annuler";
            spanAffichage.innerHTML = "Annuler";
            return {heros, recrute};
        }

        function deplacerVersPotentiel() {

            let heros = document.querySelector("[id='" + divImage.id + "']");
            heros.remove()
            heros = this.creerHero(divImage.id);
            let newBouton = this.creerBouton(divImage.id, divImage);
            this.afficherHeros(heros, ".potentiel");
            this.afficherBouton(heros, newBouton);
            spanAffichage.dataset.test = "Recruter";
            spanAffichage.innerHTML = "Recruter";
        }
        return divBouton
    }

    afficherBouton(divImage, divBouton) {
        divImage.appendChild(divBouton);
    }
}