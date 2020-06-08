 class Necro extends Perso{

     className = "Necro";


     constructor() {
         super();
         this.nom = "Paul",
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


    brasier($cible){
        var degats = this.intelligence * 1.8;
        if ($cible.weak === 'feu'){
            degats = degats * 1.5; 
            $cible.pv -= degats;
        }
        else{
            $cible.pv -= degats;
        }
        this.mana -=5;
    }
    glacier($cible){
        var degats = this.intelligence * 1.4;
        if ($cible.weak === 'glace'){
            degats = degats * 1.5; 
            $cible.pv -= degats;
        }
        else{
            $cible.pv -= degats;
        }
        $cible.vitesse -= 0.5;
        this.mana -=5;
    }
    foudre($cible){
        var degats = this.intelligence * 1.4;
        if ($cible.weak === 'elec'){
            degats = degats * 1.5; 
            $cible.pv -= degats;
        }
        else{
            $cible.pv -= degats;
        }
        $cible.defence -= 0.1;
        this.mana -=5;
    }
    soin_leger($allier){
        var heal_poto = this.intelligence / 0.8; 
        if ($allier.pv += heal_poto >= $allier.pv_max){
            $allier.pv = $allier.pv_max;
        }
        else{
            $allier.pv += heal_poto;
        }
        this.mana -=7;
    }
    atomnium($cible){
        var degats = this.intelligence * 2.5;
        $cible.pv -= degats;
        this.mana -=12;
    }
    element_strike(){
        //frappe de feu + glace + foudre mais degats faible sur tous les ennemis
        this.mana -=15;
    }
    ultima($cible){
        var degats = this.intelligence * 3;
        $cible.pv -= degats;
        this.mana -=20;
    }


}
