// ==== Sélections ====
// ~~~~ Character ~~~~
const inputname         = document.querySelector("#name");
const inputStrength     = document.querySelector("#strength");
const inputMagic        = document.querySelector("#magic");
const addBtn            = document.querySelector(".add-btn");
const tagListPlayer     = document.querySelector(".list-player");
// ~~~~ Fighting controls ~~~~
const selectAttacker    = document.querySelector("#attacker");
const selectDefender    = document.querySelector("#defender");
const selectAttackType  = document.querySelector("#attack-type");
const attackBtn         = document.querySelector(".attack-btn");
// ~~~~ Arena ~~~~
const yourPlayerCard    = document.querySelector(".your-player__card-status");
const yourPlayerDialog  = document.querySelector(".your-player__dialog");
const yourEnnemyCard    = document.querySelector(".your-ennemy__card-status");
const yourEnnemyDialog  = document.querySelector(".your-ennemy__dialog");

// ==== Variables ====
const knights = [];

// ==== Fonctions ====
// ~~~~ Build your Hero ~~~~
class Knight {
    constructor (name, strength, magic) {
        this.name       = name;
        this.strength   = strength;
        this.magic      = magic;
        this.mana       = 50;
        this.hp         = 100;
        this.potions    = 2;
    }
    shout(isAttacker) {
        if (isAttacker) {
            yourPlayerDialog.textContent = `Je m'appelle ${this.name}.`;
        } else {
            yourEnnemyDialog.textContent = `Retiens ${this.name}, c'est mon nom... et le jour de ta défaite !`;
        }
    }
}

function addKnight(name, strength, magic) {
    if (name === "" || strength === "" || magic === "") {
        alert("Veuillez remplir les champs");
        return;
    }
    knights.push(new Knight(name, strength, magic));
    addAttacker(new Knight(name, strength, magic));
    addDefender(new Knight(name, strength, magic));
}

function displayKnights() {
    // Vider ma div container
    tagListPlayer.innerHTML = "";

    if (knights.length === 0) {
        const emptyMessage              = document.createElement("div");
        emptyMessage.className          = "character-card";
        emptyMessage.textContent        = "No player logged in.";
        tagListPlayer.append(emptyMessage);
    } else {
        knights.forEach((knight, index) => {
            // Création container pour afficher mes card personnage
            const divListCharacter      = document.createElement("div");
            divListCharacter.className  = "character-card";
            tagListPlayer.append(divListCharacter);

            // Création des mes div (infos personnage)
            const divCardName           = document.createElement("div");
            const divCardStrength       = document.createElement("div");
            const divCardMagic          = document.createElement("div");
            const divCardMana           = document.createElement("div");
            const divCardHp             = document.createElement("div");
            const divCardPotions        = document.createElement("div");
            const divCardHpBar          = document.createElement("div");

            // Création d'une classe pour CSS
            divCardName.className       = "character-card__name";
            divCardStrength.className   = "character-card__strength";
            divCardMagic.className      = "character-card__magic";
            divCardMana.className       = "character-card__mana";
            divCardHp.className         = "character-card__hp";
            divCardPotions.className    = "character-card__potions";
            divCardHpBar.className      = "character-card__hp-bar";

            // Insertion du contenu 
            divCardName.textContent     = `${knight.name}`
            divCardStrength.textContent = `💪 Force : ${knight.strength}`
            divCardMagic.textContent    = `✨ Magie : ${knight.magic}`
            divCardMana.textContent     = `🔮 Mana : ${knight.mana}`
            divCardHp.textContent       = `❤️ Vie : ${knight.hp}`
            divCardPotions.textContent  = `🧉 Potions : ${knight.potions}`
            
            // Création btn delete
            const deleteBtn             = document.createElement("button");
            deleteBtn.className         = "delete-btn";
            deleteBtn.dataset.index     = index;
            deleteBtn.dataset.title     = "Delete item"
            deleteBtn.textContent       = "❌";

            // Mise des div infos dans le container (dans l'ordre d'affichage)
            divListCharacter.append(divCardName);
            divListCharacter.append(divCardStrength);
            divListCharacter.append(divCardMagic);
            divListCharacter.append(divCardMana);
            divListCharacter.append(divCardHp);
            divListCharacter.append(divCardPotions);
            divListCharacter.append(divCardHpBar);
            divListCharacter.append(deleteBtn);
        })
    }
}

function resetInputs() {
    inputname.value     = "";
    inputStrength.value = "";
    inputMagic.value    = "";
    inputname.focus();
}

// ~~~~ Fight with your Hero ~~~~
function addAttacker(knight) {
    if (knights.length !== 0) {

        // Création d'un élément option à rajouter à la liste
        const optionAttacker        = document.createElement("option");
        optionAttacker.value        = knight.name;
        optionAttacker.textContent  = knight.name;
        selectAttacker.append(optionAttacker);
    }
}

function addDefender(knight) {
    if (knights.length !== 0) {

        // Création d'un élément option à rajouter à la liste
        const optionDefender        = document.createElement("option");
        optionDefender.value        = knight.name;
        optionDefender.textContent  = knight.name;
        selectDefender.append(optionDefender);
    }
}

function disabledOptionKnight (selectFighter, selectedFighter) {
    for (let i = 0; i < selectFighter.options.length; i++) {
        const option = selectFighter.options[i];

        if (option.value === selectedFighter) {
            option.disabled = true;
        } else {
            option.disabled = false;
        }
    }
}

function displayOptionKnight (knight, element) {
    // Vider l'élément
    element.innerHTML = "";

    // Création container pour afficher mes card personnage
    const divCharacter          = document.createElement("div");
    divCharacter.className      = "character-card";

    // Création des div pour les informations du chevalier
    const divCardName           = document.createElement("div");
    const divCardStrength       = document.createElement("div");
    const divCardMagic          = document.createElement("div");
    const divCardMana           = document.createElement("div");
    const divCardHp             = document.createElement("div");
    const divCardPotions        = document.createElement("div");
    const divCardHpBar          = document.createElement("div");

    // Ajouter des classes pour le CSS
    divCardName.className       = "character-card__name";
    divCardStrength.className   = "character-card__strength";
    divCardMagic.className      = "character-card__magic";
    divCardMana.className       = "character-card__mana";
    divCardHp.className         = "character-card__hp";
    divCardPotions.className    = "character-card__potions";
    divCardHpBar.className      = "character-card__hp-bar";

    // Insérer le contenu
    divCardName.textContent     = `${knight.name}`;
    divCardStrength.textContent = `💪 Force : ${knight.strength}`;
    divCardMagic.textContent    = `✨ Magie : ${knight.magic}`;
    divCardMana.textContent     = `🔮 Mana : ${knight.mana}`;
    divCardHp.textContent       = `❤️ Vie : ${knight.hp}`;
    divCardPotions.textContent  = `🧉 Potions : ${knight.potions}`;

    // Ajouter les div à l'élément
    divCharacter.append(divCardName);
    divCharacter.append(divCardStrength);
    divCharacter.append(divCardMagic);
    divCharacter.append(divCardMana);
    divCharacter.append(divCardHp);
    divCharacter.append(divCardPotions);
    divCharacter.append(divCardHpBar);
    element.append(divCharacter)
}

// ==== Evénements ====
// ~~~~ Hero creation ~~~~
addBtn.addEventListener("click", function (e) {
    e.preventDefault();

    const name      = inputname.value;
    const strength  = parseFloat(inputStrength.value);
    const magic     = parseFloat(inputMagic.value);

    addKnight(name, strength, magic);
    displayKnights(name, strength, magic, 50, 100, 2);
    // resetInputs();
})

// ~~~~ Delete hero ~~~~
tagListPlayer.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete-btn")) {
        const index = event.target.dataset.index;
        knights.splice(index, 1);
        displayKnights();
    }
})

// ~~~~ Select attacker/defender ~~~~
selectAttacker.addEventListener("change", function () {
    const selectedAttacker = this.value;
    disabledOptionKnight(selectDefender, selectedAttacker)

    // Trouver le chevalier sélectionné et appeler shout()
    const attacker = knights.find(knight => knight.name === selectedAttacker);
    if (attacker) {
        attacker.shout(true);
        displayOptionKnight(attacker, yourPlayerCard);
    }
})
selectDefender.addEventListener("change", function () {
    const selectedDefender = this.value;
    disabledOptionKnight(selectAttacker, selectedDefender)

    // Trouver le chevalier sélectionné et appeler shout()
    const defender = knights.find(knight => knight.name === selectedDefender);
    if (defender) {
        defender.shout(false);
        displayOptionKnight(defender, yourEnnemyCard);
    }
})

attackBtn.addEventListener("click", function (e) {
    e.preventDefault();

})
