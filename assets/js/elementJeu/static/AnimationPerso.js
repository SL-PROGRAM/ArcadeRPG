/**
 *
 * Cette class gère les animations en CSS des personnages
 *
 *
 */

class AnimationPerso {


    /**
     * Animation des attaques des persos
     * @param divImage
     * @param className
     * @param nameAnim
     * @param imageWReel
     * @param imageHreel
     * @param nbImagePourAnim
     * @param imageHAfficher
     */
    static animAttaque(divImage, className, nameAnim, imageWReel, imageHreel, nbImagePourAnim, imageHAfficher){
        nameAnim += "Attaque";
        divImage.style.animationTimingFunction = "steps("+nbImagePourAnim+")";
        divImage.style.animationDuration = "1s";
        divImage.style.animationIterationCount = "1";
        divImage.style.animationName =nameAnim;
        divImage.style.backgroundImage = "url('assets/images/class/"+className+"/"+className+"Attaque.png')";
        this.animGeneriqueCss(divImage,imageWReel, nbImagePourAnim,imageHreel,imageHAfficher);
        this.animKeyFrame(divImage, nameAnim,imageWReel);
    }

    /**
     * Animation Attente de son action
     * @param divImage
     * @param className
     * @param nameAnim
     * @param imageWReel
     * @param imageHreel
     * @param nbImagePourAnim
     * @param imageHAfficher
     */
    static animAttente(divImage, className, nameAnim, imageWReel, imageHreel, nbImagePourAnim, imageHAfficher){
        nameAnim += "-attente"
        divImage.style.animationTimingFunction = "steps("+nbImagePourAnim+")";
        divImage.style.animationDuration = "5s";
        divImage.style.animationIterationCount = "infinite";
        divImage.style.animationName =nameAnim;
        divImage.style.backgroundImage = "url('assets/images/class/"+className+"/"+className+"Vivant.png')";
        this.animGeneriqueCss(divImage,imageWReel, nbImagePourAnim,imageHreel,imageHAfficher);
        this.animKeyFrame(divImage, nameAnim,imageWReel);

    }

    static animBlesser(divImage, className, nameAnim, imageWReel, imageHreel, nbImagePourAnim, imageHAfficher) {
        //TODO
        //Pas de gestion de l'animation actuellement
        this.animAttente(divImage, className, nameAnim, imageWReel, imageHreel, nbImagePourAnim, imageHAfficher)
    }

    /**
     * Animation de la mort du personnage
     * @param divImage
     * @param className
     * @param nameAnim
     * @param imageWReel
     * @param imageHreel
     * @param nbImagePourAnim
     * @param imageHAfficher
     */
    static animMort(divImage, className, nameAnim, imageWReel, imageHreel, nbImagePourAnim, imageHAfficher){
        nameAnim += "-mort";
        divImage.style.backgroundImage = "url('assets/images/class/"+className+"/"+className+"Mort.png')";
        divImage.style.animationDuration = "2s";
        divImage.style.animationIterationCount = "1";
        divImage.style.animationName = nameAnim;
        divImage.style.animationFillMode = "forwards";
        divImage.style.animationTimingFunction = "steps("+(nbImagePourAnim-1)+")";
        this.animGeneriqueCss(divImage,imageWReel, nbImagePourAnim,imageHreel,imageHAfficher);
        this.animKeyFrame(divImage, nameAnim,imageWReel*(nbImagePourAnim-1)/nbImagePourAnim*(imageHAfficher/imageHreel));
    }

    /**
     * gestion de la taille de l'affichage et des ratios
     * @param divImage
     * @param imageWReel
     * @param imageHreel
     * @param nbImagePourAnim
     * @param imageHAfficher
     */
    static animGeneriqueCss(divImage, imageWReel, imageHreel, nbImagePourAnim, imageHAfficher) {
        divImage.style.width = "" + (imageWReel / nbImagePourAnim / (imageHreel / imageHAfficher)) + "px";
        divImage.style.height = "" + imageHAfficher + "px";
        divImage.style.willChange = "background-position";
        divImage.style.backgroundSize = "auto 100%";
    }

    /**
     * Integration dans le head du style de la KeyFrame
     * @param divImage
     * @param nameAnim
     * @param dynamiqueValue
     */
    static animKeyFrame(divImage, nameAnim, dynamiqueValue){
        var style = document.createElement('style');
        style.type = 'text/css';
        var keyFrames = '\
                @-webkit-keyframes SPECIFIC_NAME_ANIM {\
                    0% {\
                        background-position: 0px 0;\
                    }\
                    100% {\
                        background-position: -DYNAMIC_VALUEpx 0;\
                    }\
                }';
        style.innerHTML = keyFrames.replace(/SPECIFIC_NAME_ANIM/g, nameAnim);
        style.innerHTML = style.innerHTML.replace(/DYNAMIC_VALUE/g, dynamiqueValue);
        // divImage.appendChild(style);
        document.getElementsByTagName('head')[0].appendChild(style);
    }

    static avancer(posX, posY){
        document.querySelector("."+game.joueur.nom).src=
            game.joueur.imagePerso.imagePath+game.joueur.imagePerso.image+game.joueur.imagePerso.typeImg ;
        document.querySelector("."+game.joueur.nom).style.left = posX + "%";
        document.querySelector("."+game.joueur.nom).style.top = posY + "%" ;
        document.querySelector("."+game.joueur.nom).style.transition = game.duree_tour/20+'ms' ;
    }

}