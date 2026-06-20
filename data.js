// data.js -- les données de Jàng Afrig
const paysAfrique = [
    { cca3: "SEN", nom: "Sénégal", capitale: "Dakar" },
    { cca3: "MLI", nom: "Mali", capitale: "Bamako" },
    { cca3: "GHA", nom: "Ghana", capitale: "Accra" },
    { cca3: "KEN", nom: "Kenya", capitale: "Nairobi" },
    { cca3: "MAR", nom: "Maroc", capitale: "Rabat" }
];
function choisirAuHasard(tableau) {
    const index = Math.floor(Math.random() * tableau.length);
    return tableau[index];
}

// Moyenne d'une classe
const dut1info = [
    { nom: "Rokhaya", note: 20 },
    { nom: "Aminata", note: 16 },
    { nom: "Fadel", note: 10 },
    { nom: "Oumou", note: 19 },
    { nom: "Fatima", note: 13 },
    { nom: "Malick", note: 7 },
    { nom: "Diarra", note: 4 },
    { nom: "Elimane", note: 17 },
    { nom: "Fatou", note: 12 },
    { nom: "Marie", note: 2 },
];

function moyenneClasse(tab) {
    let somme = 0;
    tab.forEach((e) => {
        somme += e.note
    });
    return somme / tab.length;
}

// Prix en EURO
const prixFCFA = [1780, 656, 10760];
const prixEURO = prixFCFA.map((p) => p / 656);

// Les admis
const admis = dut1info.filter(e => e.note >= 10);

// Les capitales
const capitales = paysAfrique.map((s) => s.capitale);


