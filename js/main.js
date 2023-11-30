const arrayNum = [];
const arrayRand = document.getElementById("arrayRandom")

for (let i = 0; i < 5; i++) {
    arrayNum.push(genRandomNum(1, 10));
}
arrayRand.innerHTML = arrayNum;
console.log(arrayNum);


setTimeout(function () {
    addHidden(arrayRand, "hidden");
}, 30000);



function addHidden(tagName, className){
    const element = tagName.classList.add(className);
}

function genRandomNum(min, max) {
    let result;
    result = Math.floor(Math.random() * (max - min + 1)) + min;
    return result;
}