class AttaquePhy extends Attaque{

    animPhyFaible($cible, degats_def, type) {
        let div1 = document.createElement("div");
        let div2 = document.createElement("div");
        var counter = 0;
        var intervalId = null;
        let img = new ImageAnimation();
        function animAttaque() {

            counter++;
            if (counter === 1) {
                AnimationPerso.avancer($cible.imagePerso.positionX, $cible.imagePerso.positionY)
            }

            if (counter === 2) {
                img.imgFaible(div1, $cible, -1,-5, type)
            }
            if (counter === 3) {
                img.imgFaible(div2, $cible, 1,-5, type);
                div1.innerHTML = "";
            }
            if (counter === 4) {
                div2.innerHTML = "";
                AnimationPerso.avancer(game.joueur.imagePerso.positionX, game.joueur.imagePerso.positionY);
                game.joueur.calcDegat($cible, degats_def, type);
                game.joueur.mort($cible);
                game.joueur.imagePerso.majAffichage($cible);
                game.joueur.pa -= 15;
                game.joueur.imagePerso.majAffichage(game.joueur);
            }
            if (counter === 5) {
                clearInterval(intervalId)
            }
        }

        function start() {
            intervalId = setInterval(animAttaque, game.duree_tour/5);
        }
        start();
    }

}