class Perso {

    //information générique des Perso
    className = "Perso";

    //Gestion des status et animation liées
    animStatus = [
        //[imageWReel, imageHreel, nbImagePourAnim]
        [40, 53, 1],
        [40, 53, 1],
        [40, 53, 1],
        [40, 53, 1],
        //TODO entrer les valeurs des images
    ]

    imagePerso = new ImagePerso(
        this.className,
        "assets/images/class/"+this.className+"/",
        53,
        40,
        this.animStatus
        );

    //Liste competence de base
    _competenceAttaque = [
        //[nom pour visuel, nom function]
        ["attaque", "attaque"],
        ["Attaque Flamme", "magieFeu"]
    ];
    _competenceDefense = [
        ["attaque", "attaque"],
        ["Flamme", "magieFeu"]
    ];

    //Liste compétences acquerables
    _competenceAttaqueToGet = [
        //[nom pour visuel, nom function, niveau requis]
        ["Attaque Eclair", "magieAir", 2]
    ];

    _competenceDefenseToGet = [
        //[nom pour visuel, nom function, niveau requis]
        ["Defense Eclair", "magieAir", 2]
    ];


    //Liste des caracteristique de base
    force = 15;
    endurence = 15;
    agilite = 14;
    intelligence = 14;
    nom = "roger";

    magie = new AttaqueMagique();
    physique = new AttaquePhy();


    //Liste des caracteristiques construites
    manaMax;
    mana
    pvMax;
    pv;
    paMax;
    pa;
    defenseMax;
    defense;

    resistance = [
        ["PHY", 100],
        ["FEU", 100],
        ["EAU", 100],
        ["AIR", 100],
        ["TERRE", 100],
    ];

    get competenceDefense() {
        return this._competenceDefense;
    }

    set competenceDefense(value) {
        this._competenceDefense = value;
    }

    get competenceAttaque() {
        return this._competenceAttaque;
    }

    set competenceAttaque(value) {
        this._competenceAttaque = this.competenceAttaque.push(value);
    }

    get competenceAttaqueToGet() {
        return this._competenceAttaqueToGet;
    }

    get competenceDefenseToGet() {
        return this._competenceDefenseToGet;
    }

    attaque($cible, $autre=0){
        var degats = this.force * 10;
        var degats_def = degats + $autre - ($cible.defense);
        this.physique.animPhyFaible($cible, degats_def, "PHY");
    }

    calcDegat($cible, degats_def, type) {
        for (let i = 0; i < $cible.resistance.length; i++) {
            if ($cible.resistance[i][0] === type){
                if ($cible.resistance[i][1] === 0){
                    degats_def = 0;
                }else{
                    degats_def = degats_def*$cible.resistance[i][1]/100;
                }
            }
        }
        $cible.pv -= degats_def;
    }

    mort($cible) {
        if ($cible.pv < 0) {
            $cible.pv = 0;
            $cible.mana = 0;
            $cible.pa = 0;
            $cible.imagePerso.status = ImagePerso.listStatus[2];
            this.supprimerMort($cible)
        }

    }

    supprimerMort($cible){
        for (let i = 0; i < moEquipeMonstre.EQUIPE.length; i++) {
            if (moEquipeMonstre.EQUIPE[i] === $cible) {
                moEquipeMonstre.EQUIPE = moEquipeMonstre.EQUIPE.filter(value => value !== $cible)
            }
        }
        for (let i = 0; i < equipe.EQUIPE.length; i++) {
            if (equipe.EQUIPE[i]=== $cible ){
                equipe.EQUIPE = equipe.EQUIPE.filter(value => value !== $cible);
            }
        }

    }

    magieFeu($cible){
        this.magie.animMagieFaible($cible, 1, "FEU", 4, 10)
    }

    magieAir($cible){
        this.magie.animMagieFaible($cible, 1, "AIR", 4, 10)
    }

    /**
     * creer une div qui contient l'image du Perso une class unique et affiche ses points de vie
     */
    creerPerso(){
        this.pvMax = (this.force + this.endurence)*10;
        this.pv = this.pvMax;
        this.paMax = (this.intelligence + this.agilite)*10;
        this.pa = this.paMax;
        this.manaMax = (this.intelligence + this.force)*10;
        this.mana= this.manaMax;
        this.defenseMax = (this.endurence + this.agilite);
        this.defense = this.defenseMax;
        this.imagePerso.afficherPerso(this.nom, this.pv, this.defense, this.mana, this.pa);

    }

    position(){
        let div = document.querySelector("div."+this.nom);
        div.style.left = this.imagePerso.positionX + "%";
        div.style.top = this.imagePerso.positionY + "%" ;
    }

    savePosition(posX, posY) {
        this.imagePerso.positionX = posX;
        this.imagePerso.positionY = posY;
    }

}





