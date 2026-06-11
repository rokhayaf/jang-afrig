//Vérification du branchement
console.log("script.js est bien branché !")

// Message de bienvenue 
const prenom = "Rokhaya";
console.log("Bonjour " + prenom);
console.log(`Bonjour ${prenom}, prête à coder ?`);

// Variables et types (infos sur un joueur de jang afrig)
const pseudo = "Aminata"; 
let score = 0; 
const partieFinie = false; 
console.log(`Joueur : ${pseudo}`);
console.log(`Score de départ : ${score}`);
score = score + 5; 
console.log(`Nouveau score : ${score}`); 

// Mes premières fonctions
function direBonjour(nom) {
return `Bonjour ${nom}, bienvenue sur Jàng Afrig !`;
}
console.log(direBonjour("Cheikh"));
console.log(direBonjour("Ndèye"));

function direAuRevoir(nom) {
    return `A bientôt ${nom} !`;
}
console.log(direAuRevoir("Rokhaya"));
console.log(direAuRevoir("Modou"));

// Les conditions
function appreciation(note) {
    if (note >= 16) {
        return "Très bien";
    }   else if (note >= 12) {
        return "Bien";
    }   else if (note >= 10) {
        return "Passable";
    }   else {
        return "À retravailler";
    }
}
console.log(appreciation(14)); 
console.log(appreciation(8)); 

function statutMajorite(age) {
    return age >= 18 ? "majeur" : "mineur";
}
console.log(statutMajorite(20)); 

// Utilisation de la boucle for
const pays = ["Sénégal", "Mali", "Ghana", "Kenya"];
for (const nom of pays) {
    console.log(`Pays africain : ${nom}`);
}
console.log(`Il y a ${pays.length} pays dans la liste.`);

// Convertisseur en FCFA
function fcfaVersEuro(montant) {
    return montant / 656;
}
console.log(fcfaVersEuro(10000)); 

// Calcul de la moyenne d'un étudiant
function moyenne(notes) {
    let somme = 0;
    for (const note of notes) {
        somme = somme + note;
    }
    return somme / notes.length;
}
const notesAminata = [12, 15, 9, 14];
console.log(`Moyenne : ${moyenne(notesAminata)}`); 

// Estimation de la majorité
function estMajeur(age) {
    return age >= 18;
}
console.log(estMajeur(20)); 
console.log(estMajeur(16)); 

// FizzBuzz "à la sénégalaise"
function fizzBuzzSenegal() {
    for (let n = 1; n <= 30; n++) {
        if (n % 15 === 0) {
            console.log("Thiéboudienne");
        }   else if (n % 3 === 0) {
            console.log("Thié");
        }   else if (n % 5 === 0) {
            console.log("Bou");
        }   else {
            console.log(n);
        }
    }
}
fizzBuzzSenegal();

// Palindrome
function estPalindrome(mot) {
    let inverse = "";
    for (const lettre of mot) {
        inverse = lettre + inverse;
    }
    return mot === inverse;
}
console.log(estPalindrome("kayak")); 
console.log(estPalindrome("Dakar")); 

