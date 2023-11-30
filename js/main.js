let arrayNum = [];
const arrayRand = document.getElementById("arrayRandom");
const punteggio = document.getElementById("score");

let seconds = 3;
let tentativi = 5;
let score = 0;

arrayNum = genArrayNumRand(arrayNum);
console.log(arrayNum);
arrayRand.append(arrayNum);


setTimeout(
    function () {
        addHidden(arrayRand, "hidden");
    },
    seconds * 1000
);

const btn_play = document.getElementById("btn_play");
btn_play.addEventListener("click",
    function () {
        let esatte = [];
        let i = 0;
        while (i <= 5) {
            const userNum = parseInt(prompt("Inserisci Numero"));
            console.log(userNum);
            if (arrayNum.includes(userNum)) {
                score++;
                esatte.push(userNum);
            }
            i++;
        }
        punteggio.innerHTML = "Il tuo punteggio è " + score + " e hai indovinato " + esatte + ".";
    }
)





function genArrayNumRand(array) {
    while (array.length < 5) {
        let temp = genRandomNum(1, 10);
        if (!array.includes(temp)) {
            array.push(temp);
        }
    }
    return array;
}

function addHidden(tagName, className) {
    tagName.classList.add(className);
}

function genRandomNum(min, max) {
    let result;
    result = Math.floor(Math.random() * (max - min + 1)) + min;
    return result;
}