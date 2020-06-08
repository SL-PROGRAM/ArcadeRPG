class Mutant extends Perso{

    className = "Mutant";
    animStatus = [
        //[imageWReel, imageHreel, nbImagePourAnim]
        [4433, 250, 31],
        [4433, 250, 31],
        [4400, 250, 16],
        [3036, 250, 12],
        //TODO entrer les valeurs des images
    ]
    constructor() {
        super();
    }

    imagePerso = new ImagePerso(
        this.className,
        "assets/images/class/"+this.className+"/",
        125,
        143,
        this.animStatus
    );

    force = 5;
    endurence = 5;
    agilite = 5;
    intelligence = 5;



}

