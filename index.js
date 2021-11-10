function calculateSum(numberOne, petko){
    if(numberOne === 1){
        return numberOne + petko;
    }
    else{
        return numberOne - petko;
    }   
}

const calculateSumArrow = (numberOne, numberTwo) => {
    return numberOne - numberTwo;
}

const numberVariable = 8;
const stringVariable = "String";
const booleanVariable = true;
const objectVariable = {
    "age" : 25,
    isMarried: false
};
const arrayVariable = [1, "Imeri", false, calculateSumArrow()];
const nullValue = null;
const somethingUndefined;

arrayVariable.find((element)=>{return element == false;})

const resultOfCalculateSum = calculateSum(2,3);
console.log(resultOfCalculateSum);
console.log(objectVariable.age);


// console.log(calculateSum(2,2))
// console.log(calculateSumArrow(2,1))