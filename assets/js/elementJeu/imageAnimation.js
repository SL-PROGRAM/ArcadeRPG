class ImageAnimation {


    animationPath = "assets/images/animation/";
    typeImg = ".png";

    imgFaible(div, $cible, decalageX, decalageY, type) {
        let img = this.creerImg(type, div, $cible, decalageX, decalageY);
        this.tailleImg(img, 60, 60);
        this.afficherImg(div, img);
    }

    imgForte(div, $cible, decalageX, decalageY, type) {
        let img = this.creerImg(type, div, $cible, decalageX, decalageY);
        this.tailleImg(img, 100, 100);
        this.afficherImg(div, img);
    }

    tailleImg(img, weight, height) {
        img.style.height = height+"px";
        img.style.weight = weight+"px";
    }

    afficherImg(div, img) {
        jeu.PLATEAU_JEU.appendChild(div);
        div.appendChild(img);
    }

    creerImg(type, div, $cible, decalageX, decalageY) {
        let img = document.createElement("img");
        img.src = this.animationPath + 'attaque' + GenericFct.capitalizeFirstLetter(type) + this.typeImg;
        div.style.position = "absolute";
        div.style.left = ($cible.imagePerso.positionX - decalageX) + "%";
        div.id = "AnimImg";
        div.style.top = ($cible.imagePerso.positionY - decalageY) + "%";
        return img;
    }


}