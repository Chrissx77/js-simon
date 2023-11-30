const arrayNum = [];

for(let i = 0; i < 5; i++){
    arrayNum.push(genRandomNum(1, 10));
}



function genRandomNum(min, max){
    let result;
    result = Math.floor(Math.random() * (max - min +1)) + min;
    return result;
}