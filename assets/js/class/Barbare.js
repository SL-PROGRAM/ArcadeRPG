class Barbare extends Perso{

    className = "Barbare";
    animStatus = [
        //[imageWReel, imageHreel, nbImagePourAnim]
        [40, 53, 1],
        [40, 53, 1],
        [40, 53, 1],
        [40, 53, 1],
    ]
    constructor() {
        super();
        this.nom = "Brutus";
    }

    imagePerso = new ImagePerso(
       this.className,
       "assets/images/class/"+this.className+"/",
       53,
       40,
        this.animStatus);


    //Liste des caracteristique de base
    force = 10;
    endurence = 10;
    agilite = 14;
    intelligence = 14;


}
