class BoutonWrapper {
    textPrincipal;
    textSecondaire;
    evenement;


    constructor(textPrincipal, textSecondaire, evenement) {
        this.textPrincipal = textPrincipal;
        this.textSecondaire = textSecondaire;
        this.evenement = evenement;
    }

    creerBoutonP() {
        let divBouton = document.createElement("div");
        divBouton.className = "categoryWrapper";

        let titreBouton = document.createElement("h1");
        titreBouton.textContent = this.textPrincipal

        let bouton = document.createElement("button");
        let span = document.createElement("span");
        let span2 = document.createElement("span");
        bouton.onclick = this.evenement;
        console.log("bopbop");

        let spanAffichage = document.createElement("span");
        spanAffichage.dataset.test = this.textSecondaire;
        spanAffichage.innerHTML = this.textSecondaire;


        divBouton.appendChild(titreBouton);
        divBouton.appendChild(bouton);
        bouton.appendChild(span);
        span.appendChild(span2);
        span2.appendChild(spanAffichage);
        return divBouton;
    }

}