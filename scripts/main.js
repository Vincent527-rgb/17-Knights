// ==== Sélections ====
// ~~~~ Character ~~~~
const inputname         = document.querySelector("#name");
const inputStrength     = document.querySelector("#strength");
const inputMagic        = document.querySelector("#magic");
const addBtn            = document.querySelector(".add-btn");
const tagListPlayer  = document.querySelector(".list-player");
// ~~~~ Fighting controls ~~~~
const selectAttacker    = document.querySelector("#attacker");
const selectDefender    = document.querySelector("#defender");
const selectAttackType  = document.querySelector("#attack-type");
const attackBtn         = document.querySelector(".attack-btn");

// ==== Variables ====
const knights = [];

// ==== Fonctions ====
class Knight {
    constructor (name, strength, magic) {
        this.name       = name;
        this.strength   = strength;
        this.magic      = magic;
        this.mana       = 50;
        this.hp         = 100;
        this.potions    = 2;
    }
}

function addKnight(name, strength, magic) {
    knights.push(new Knight(name, strength, magic));
}

function displayKnights(name, strength, magic, mana, hp, potions) {
    if (inputname.value === "" || inputStrength.value === "" || inputMagic.value === "") {
        alert("Veuillez remplir les champs")
    } else {

        // Création container pour afficher mes card personnage
        const divListCharacter      = document.createElement("div");
        divListCharacter.className  = "character-card";
        tagListPlayer.append(divListCharacter);

        // Création des mes div (infos personnage)
        const divCardName       = document.createElement("div");
        const divCardStrength   = document.createElement("div");
        const divCardMagic      = document.createElement("div");
        const divCardMana       = document.createElement("div");
        const divCardHp         = document.createElement("div");
        const divCardPotions    = document.createElement("div");
        const divCardHpBar      = document.createElement("div");

        // Création d'une classe pour CSS
        divCardName.className       = "character-card__name";
        divCardStrength.className   = "character-card__strength";
        divCardMagic.className      = "character-card__magic";
        divCardMana.className       = "character-card__mana";
        divCardHp.className         = "character-card__hp";
        divCardPotions.className    = "character-card__potions";
        divCardHpBar.className      = "character-card__hp-bar";

        // Insertion du contenu 
        divCardName.textContent     = `${name}`
        divCardStrength.textContent = `💪 Force : ${strength}`
        divCardMagic.textContent    = `✨ Magie : ${magic}`
        divCardMana.textContent     = `🔮 Mana : ${mana}`
        divCardHp.textContent       = `❤️ Vie : ${hp}`
        divCardPotions.textContent  = `🧉 Potions : ${potions}`

        // Mise des div infos dans le container (dans l'ordre d'affichage)
        divListCharacter.append(divCardName);
        divListCharacter.append(divCardStrength);
        divListCharacter.append(divCardMagic);
        divListCharacter.append(divCardMana);
        divListCharacter.append(divCardHp);
        divListCharacter.append(divCardPotions);
        divListCharacter.append(divCardHpBar);
    }   
}



// ==== Evénements ====
addBtn.addEventListener("click", function (e) {
    e.preventDefault();

    const name      = inputname.value;
    const strength  = parseFloat(inputStrength.value);
    const magic     = parseFloat(inputMagic.value);

    addKnight(name, strength, magic);
    displayKnights(name, strength, magic, 50, 100, 2);
})