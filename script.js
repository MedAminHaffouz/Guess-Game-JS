function guess_game(difficulty){
    var max;var attempts;
    switch (difficulty){
        case 1:
            max=6;
            attempts=10;
            break

        case 2:
            max=20;
            attempts=5;
            break
        case 3:
            max=100;
            attempts=3;
            break
        default :
            alert("Erreur , veuillez entrez une difficulté valide");
    }
    if (1<=difficulty<=3){
        let x=Math.floor(Math.random() * (max)) + 1;
        let win=false;
        let Msg=""
        while ((!win) && (attempts!=0)){
            const ans=parseInt(prompt(Msg+"Faire votre quess du nombre"));
            if (ans===x){
                alert("Bravo YOU WON !!!\nPour rejouer veuillez actualiser cet écran");
                win=true;
            }
            else{
                attempts--;
                Msg="Faux , ce n'est pas "+ans+"\n";
            }
        }
        if ((!win) && (attempts===0)){
            alert("You Lose sadly :( , le nombre était "+x);
        }
    }
    window.location.reload();
}

var d=parseInt(prompt("Welcome ... \nChoisir votre niveau de difficulté\n1-Facile (Intervalle [1,6] et 10 essais)\n2-Moyenne (Intervalle [1,20] et 5 essais)\n3-Difficile (Intervalle [1,100] et 3 essais)"));
guess_game(d);