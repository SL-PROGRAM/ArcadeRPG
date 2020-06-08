class Mage extends Perso{

    className = "Mage";

    constructor() {
        super();
        this.nom = "Magnus";
        this.animStatus = [
            //[imageWReel, imageHreel, nbImagePourAnim]
            [40, 53, 1],
            [40, 53, 1],
            [40, 53, 1],
            [40, 53, 1],
            //TODO entrer les valeurs des images
        ]
    }

    imagePerso = new ImagePerso(
        this.className,
        "assets/images/class/"+this.className+"/",
        53,
        40,
        this.animStatus
        );




}
