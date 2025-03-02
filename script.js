
// Tableau des taux de change
const tauxDeChange = {
    "USD": { "EUR": 0.92, "GBP": 0.78, "JPY": 130.5, "USD": 1 },
    "EUR": { "USD": 1.09, "GBP": 0.85, "JPY": 142.3, "EUR": 1 },
    "GBP": { "USD": 1.28, "EUR": 1.18, "JPY": 167.2, "GBP": 1 },
    "JPY": { "USD": 0.0076, "EUR": 0.007, "GBP": 0.0059, "JPY": 1 }
};

// Conversion de devise

function convertir() {
    let montant = parseFloat(document.getElementById("montant").value);
    let deviseDepart = document.getElementById("deviseDepart").value;
    let deviseArrivee = document.getElementById("deviseArrivee").value;

// Vérification de la validité du montant

    if (isNaN(montant) || montant <= 0) {
        document.getElementById("resultat").innerText = "Veuillez entrer un montant valide.";
        return;
    }

    let taux = tauxDeChange[deviseDepart][deviseArrivee];
    let resultat = montant * taux;
    document.getElementById("resultat").innerText = `Résultat : ${resultat.toFixed(2)} ${deviseArrivee}`;
}
 //Echange de devise
document.getElementById("swap").addEventListener("click", function() {
    let temp = document.getElementById("deviseDepart").value;
    document.getElementById("deviseDepart").value = document.getElementById("deviseArrivee").value;
    document.getElementById("deviseArrivee").value = temp;
});
