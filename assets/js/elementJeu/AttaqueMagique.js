class AttaqueMagique extends Attaque{

    animMagieFaible($cible, degats_def, type, decalageX, decalageY) {
        let div1 = document.createElement("div");
        let div2 = document.createElement("div");
        var counter = 0;
        var intervalId = null;

        function animAttaque() {
            let img = new ImageAnimation();
            counter++;
            if (counter === 1) {
            }
            if (counter === 2) {

                img.imgFaible(div1, $cible, decalageX,-decalageY, type)
            }
            if (counter === 3) {
                img.imgFaible(div2, $cible, decalageX-2,-decalageY, type);
                div1.innerHTML = "";
            }
            if (counter === 4) {
                div2.innerHTML = "";
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