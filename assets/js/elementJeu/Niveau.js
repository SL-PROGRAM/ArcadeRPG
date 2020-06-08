class Niveau {

    static niveau1(){
        monstre1 = Niveau.creerMonstre("Mutant", "str", 80 , 80);
        monstre2 = Niveau.creerMonstre("Monstre", "stra", 70 , 80);
    }

    static niveau2(){
        monstre1 = Niveau.creerMonstre("Monstre", "staur", 80 , 80);
        monstre2 = Niveau.creerMonstre("Monstre", "straua", 60 , 80);
        monstre3 = Niveau.creerMonstre("Monstre", "straaaa", 70 , 70);
    }

    static niveau3(){
        monstre1 = Niveau.creerMonstre("Mutant", "staur", 80 , 80);
        monstre2 = Niveau.creerMonstre("Mutant", "straua", 60 , 80);
        monstre3 = Niveau.creerMonstre("Monstre", "straaaa", 70 , 70);
    }

    static niveau4(){
        monstre1 = Niveau.creerMonstre("Mutant", "staur", 80 , 80);
        monstre2 = Niveau.creerMonstre("Monstre", "straua", 60 , 80);
        monstre3 = Niveau.creerMonstre("Monstre", "straaaa", 70 , 70);
    }

    static niveau5(){
        monstre1 = Niveau.creerMonstre("Mutant", "staur", 80 , 80);
        monstre2 = Niveau.creerMonstre("Mutant", "straua", 60 , 80);
        monstre3 = Niveau.creerMonstre("Mutant", "straaaa", 70 , 70);
    }
    static niveau6(){
        monstre1 = Niveau.creerMonstre("Mutant", "str", 80 , 80);
        monstre2 = Niveau.creerMonstre("Monstre", "stra", 70 , 80);
    }

    static niveau7(){
        monstre1 = Niveau.creerMonstre("Monstre", "staur", 80 , 80);
        monstre2 = Niveau.creerMonstre("Monstre", "straua", 60 , 80);
        monstre3 = Niveau.creerMonstre("Monstre", "straaaa", 70 , 70);
    }

    static niveau8(){
        monstre1 = Niveau.creerMonstre("Mutant", "staur", 80 , 80);
        monstre2 = Niveau.creerMonstre("Mutant", "straua", 60 , 80);
        monstre3 = Niveau.creerMonstre("Monstre", "straaaa", 70 , 70);
    }

    static niveau9(){
        monstre1 = Niveau.creerMonstre("Mutant", "staur", 80 , 80);
        monstre2 = Niveau.creerMonstre("Monstre", "straua", 60 , 80);
        monstre3 = Niveau.creerMonstre("Monstre", "straaaa", 70 , 70);
    }

    static creerMonstre(classMonstre, nom, posX, posY){
        let monstre = Function('return new '+classMonstre)();
        monstre.nom = nom;
        moEquipeMonstre.EQUIPE.push(monstre);
        monstre.creerPerso();
        monstre.savePosition(posX,posY);
        monstre.position();

        return monstre;
    }

}