 class Soigneur extends Perso{

     className = "Soigneur";


     constructor() {
         super();
         this.nom = "POO"
         this.competenceAttaque.push(["attaque eclair", "magieAir"],["attaque 4"]);
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




    soin_faible($allier){
        var heal_poto = this.intelligence + 3; 
        if ($allier.pv += heal_poto >= $allier.pv_max){
            $allier.pv = $allier.pv_max;
        }
        else{
            $allier.pv += heal_poto;
        }
        this.mana -=5;
    }
    scan($cible){
        return $cible.weak;
    }
    miroir($allier){

    }
    


}
