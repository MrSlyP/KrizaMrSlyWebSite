/*Par Lacsamana, Kriza et Pouliot, Sylvain */
var $ = function (id) {
return document.getElementById(id);
}

function afficheDateHeure() {
            var date = new Date();
            var semaine = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
            var mois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", 
            "Octobre", "Novembre", "Décembre"];
            var dateAjd = semaine[date.getDay()] + ", " + date.getDate() + " " + mois[date.getMonth()] +  
            ", " + date.getFullYear();
            //affiche date courante
            document.getElementById("dateCourr").innerHTML = dateAjd;

            var heures = date.getHours();
            var minutes = date.getMinutes();
            var secondes = date.getSeconds();
            
            //ajoute un zero si minutes/secondes est plus petit que 10
            if (minutes < 10) {
                minutes = "0" + minutes;
            }
            if (secondes < 10) {
                secondes = "0" + secondes;
            }

            var heureMtn = heures + " : " + minutes + " : "
                + secondes;
            //affiche l'heure courante
            document.getElementById("heureCourr").innerHTML = heureMtn;
        }

        afficheDateHeure();
        //affiche les secondes qui roulent
        setInterval(afficheDateHeure, 1000);

        function confirmer(formulaire){
        
        var nom= formulaire.nom.value;
        var prenom= formulaire.prenom.value;
        var email= formulaire.email.value
        var adresse= formulaire.adresse.value;
        var datenaissance= formulaire.datenaissance.value;
        
         confirm('Nom : ' + nom + ' Prenom: ' + prenom+ ' Email: ' + email +' Adresse: ' + adresse +
        ' Date de naissance: '+datenaissance+ ". Vos informations sont enregistrées! ")       
        }

        function calculer(){
            var montant= parseFloat($("montant").value);
            var taux= parseFloat($("taux").value);
            var terme= parseFloat($("terme").value);
            var rate = taux/100/12;
            var paye_mensuel =  (montant * rate)/(1-(1/(Math.pow((1+rate),(12*terme)))));  
          
           $("paiement").value = paye_mensuel.toFixed(2) + " $";           
           }
       