class Evenement {

    retourChoixAtion(){
        menu.body.removeChild(menu.menu);
        menu.creerMenuAction()
    }

    gainCarac(txt, container, i){
        let reponse = confirm("Voulez vous augmenté : "+txt+" ?" );
        if(reponse){
            (Function('return equipe.EQUIPE['+i+'].'+txt+' += 1')());
            container.remove();
        }
    }

    gainComp(compToGet, i, compHave, divContainer) {
        let reponse = confirm("Voulez vous apprendre : " + compToGet[i][0].toUpperCase() + " ?");
        if (reponse) {
            compHave.push(compToGet[i]);
            divContainer.remove();
        }
    }

    atkAction(indice, i) {
        menu.body.removeChild(menu.menu);
        let def = game.joueur.competenceDefense[indice][1];
        (Function('return game.joueur.' + def + '(equipe.EQUIPE[' + i + '])')());
        game.finDeNiveau()
    }

    defAction(indice, i) {
        menu.body.removeChild(menu.menu);
        let def = game.joueur.competenceAttaque[indice][1];
        (Function('return game.joueur.' + def + '(moEquipeMonstre.EQUIPE[' + i + '])')());
        game.finDeNiveau()
    }

    atkCible(divAttaque, i) {
        menu.body.removeChild(menu.menu);
        menu.creerMenuCible("ATK", divAttaque.innerText, i)
    }

    defCible(divDefense, i) {
        menu.body.removeChild(menu.menu);
        menu.creerMenuCible("DEF", divDefense.innerText, i)
    }

    getEquipe() {
        let equipeChoisi = document.querySelectorAll("div.recrute>div");
        if (equipeChoisi.length < 4) {
            alert("EquipeHeros incomplet")
        } else {
            for (let i = 0; i < equipeChoisi.length; i++) {
                Function('return hero' + (1 + i) + '0.className = ' +
                    GenericFct.capitalizeFirstLetter(equipe.CLASS[equipeChoisi[i].id]))();
                equipe.EQUIPE[i] = Function('return hero' + (1 + i) + '0')();
            }
            game.lancerPartie();
        }
    }

    deplacerVersPotentiel(deplacerVersRecrute, bouton, deplacerVersPotentiel) {
        if (equipe.NB_EQUIPE > 0) {
            let {heros, recrute} = deplacerVersRecrute();
            equipe.NB_EQUIPE -= 1
            bouton.onclick = ev1 => {
                deplacerVersPotentiel.call(equipe);
                equipe.NB_EQUIPE += 1
            }
        }
    }

    selectPlateau(divImage) {
        game.plateau = jeu.PLATEAU_JEU;
        jeu.creerPlateauJeu(divImage.id);
        let heros = equipe.creerListHeros();
        equipe.afficherListHeros(heros[0], heros[1])
    }

    gainCompHerosSuivant(numHeros){
        let $divHeros = document.querySelector("#"+equipe.EQUIPE[numHeros].nom)
        if($divHeros.querySelectorAll("div").length === 0){
            alert("niveau gagné");
            // for (let i = numHeros+1; i < equipe.EQUIPE.length; i++) {
                console.log(numHeros)
                console.log(game.niveau)

                if( numHeros === equipe.EQUIPE.length-1  || numHeros+2 === game.niveau){
                    let divs =document.querySelectorAll("div");
                    divs.forEach(value => value.remove());
                    alert("FIM XP");
                    game.tourSuivant();
                    // break;
                }
                else if (numHeros+1 < game.niveau){
                    let divs =document.querySelectorAll("div");
                    divs.forEach(value => value.remove());
                    lvl.construirePage(numHeros+1);
                    // break;
                }

            }

        }
    // }
}