class ImagePerso {


    image;
    imagePath;
    typeImg = ".png";
    positionX = 50;
    positionY = 50;
    heightAffichage;
    widthAffichage;
    animInfo;
    anim;
    static listStatus = [  "Vivant",
        "Blesser",
        "Mort",
        "Attaque"
    ];
    status;



    constructor(image, imagePath, heightAffichage, widthAffichage, anim) {
        this.image = image;
        this.imagePath = imagePath;
        this.heightAffichage = heightAffichage;
        this.widthAffichage = widthAffichage;
        this.animInfo = anim;
    }


    creerImgPerso(nom) {
        let image = document.createElement("div");
        // image.src = this.imagePath+this.image+this.status+this.typeImg;
        image.className = "personPosition " + nom;
        image.id = "img"+nom;
        image.style.left = "30%";
        image.style.top ="100%";
        image.style.height = this.heightAffichage+"px";
        image.style.width = this.widthAffichage+"px";
        this.status = ImagePerso.listStatus[0];

        this.animation(image)

        return image;
    }
    creerDivAffichagePerso(txt, nom) {
        let div = document.createElement("div");
        div.className = nom + " "+txt;
        return div;
    }

    afficherPerso(nom, pv, defense, mana, pa) {
        let plateau = document.querySelector(".plateau");
        let divPersonnage = document.createElement("div");
        divPersonnage.className = "personPosition " + nom;
        let divVie = this.creerDivAffichagePerso("vie", nom);
        let divDef = this.creerDivAffichagePerso("def", nom);
        let divMana = this.creerDivAffichagePerso("mana", nom);
        let pointAction = this.creerDivAffichagePerso("pointAction", nom);

        let image = this.creerImgPerso(nom);

        plateau.appendChild(divPersonnage);

        divVie.innerHTML = "PV : " + pv;
        divPersonnage.appendChild(divVie);
        divDef.innerHTML = "DEF : " + defense;
        divPersonnage.appendChild(divDef);
        divMana.innerHTML = "MP : " + mana;
        divPersonnage.appendChild(divMana);
        pointAction.innerHTML = "PA : " +pa;
        divPersonnage.appendChild(pointAction);
        divPersonnage.appendChild(image);

    }

    majAffichage($cible){
        let divVie = document.querySelector("div."+$cible.nom+".vie");
        let divDef =document.querySelector("div."+$cible.nom+".def");
        let divMana = document.querySelector("div."+$cible.nom+".mana");
        let pointAction = document.querySelector("div."+$cible.nom+".pointAction");
        let image = document.querySelector("div#img"+$cible.nom);
        $cible.imagePerso.animation(image)
        divVie.innerHTML = "PV : " + $cible.pv;
        divDef.innerHTML = "DEF : " + $cible.defense;
        divMana.innerHTML = "MP : " + $cible.mana;
        pointAction.innerHTML = "PA : " +$cible.pa;
    }


    animation(divImage){
        if (this.status === ImagePerso.listStatus[0]) {
            AnimationPerso.animAttente(
                divImage,
                this.image,
                divImage.id,
                this.animInfo[0][0],
                this.animInfo[0][1],
                this.animInfo[0][2],
                this.heightAffichage)
        }
        if (this.status === ImagePerso.listStatus[1]) {
            //Animation blessure non gerer
            AnimationPerso.animBlesser(
                divImage,
                this.image,
                divImage.id,
                this.animInfo[1][0],
                this.animInfo[1][1],
                this.animInfo[1][2],
                this.heightAffichage)
        }
        if (this.status === ImagePerso.listStatus[2]) {
            AnimationPerso.animMort(
                divImage,
                this.image,
                divImage.id,
                this.animInfo[2][0],
                this.animInfo[2][1],
                this.animInfo[2][2],
                this.heightAffichage)
        }
        if (this.status === ImagePerso.listStatus[3]) {
            AnimationPerso.animAttaque(
                divImage,
                this.image,
                divImage.id,
                this.animInfo[3][0],
                this.animInfo[3][1],
                this.animInfo[3][2],
                this.heightAffichage)
        }
    }

}