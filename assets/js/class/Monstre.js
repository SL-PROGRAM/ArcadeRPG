class Monstre extends Perso{

    className = "Monstre";
    animStatus = [
        //[imageWReel, imageHreel, nbImagePourAnim]
        [369, 344, 1],
        [369, 344, 1],
        [40, 53, 1],
        [40, 53, 1],
        ]

    constructor() {
        super();
    }

    imagePerso = new ImagePerso(
        this.className,
        "assets/images/class/"+this.className+"/",
        53,
        40,
        this.animStatus
        );

    force = 5;
    endurence = 5;
    agilite = 5;
    intelligence = 5;



}

