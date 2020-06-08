class Guerrier extends Perso{

    className = "Guerrier";


    constructor() {
        super();
        this.nom = "Pierre";
        this.competenceAttaque.push(["attaque eclair", "magieAir"],["attaque 4"],
            ["Attaque Ultime", "frappeUltime"],
            ["Attaque Multiple", "attaqueMultiple"])
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

    bouclier($allier){
        var defence_comp = this.intelligence + 2;
        $allier.defence += defence_comp;
    }
    attaque_ralentissante($cible){
        var degats = this.force * 1.7;
        var degats_def = degats - ($cible.defence/2);
        $cible.pv -= degats_def;
        $cible.vitesse -= 0.2;
    }
    bouclier_regenaissant($allier){
        var heal_poto = this.intelligence + 3; 
        if ($allier.pv += heal_poto >= $allier.pv_max){
            $allier.pv = $allier.pv_max;
        }
        else{
            $allier.pv += heal_poto;
        }
        var defence_comp = this.intelligence;
        $allier.defence += defence_comp;
    }
    attaqueMultiple(){
        for (let i = 0; i <moEquipeMonstre.EQUIPE.length ; i++) {
            this.attaque(moEquipeMonstre.EQUIPE[i]);
        }
    }
    defence_legendaire(){
        //Bouclier sur tous les persos
    }
    frappeUltime($cible){
            console.log("boom")
    }


}
