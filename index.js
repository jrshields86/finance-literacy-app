
const startingPrincipal = document.getElementById("starting-principal");
const annualRate = document.getElementById("annual-rate");
const numberOfYears = document.getElementById("number-of-years");
const form = document.getElementById("input-form")

const calculatedCompoundInterestCalculator = (principal, rate, years) => {

    const yearlyTotalArray = [];
    let currentValue = principal;
    let interestEarned = 0;
    for (let i = 0; i < years; i++) {
        interestEarned = currentValue * rate;
        currentValue += interestEarned;
        yearlyTotalArray.push(currentValue)
    }
    return yearlyTotalArray;
};

form.addEventListener("submit", (event)=> {
    event.preventDefault();
    let startNum = Number(startingPrincipal.value);
    let rate = Number(annualRate.value)/100;
    let years = Number(numberOfYears.value);
    console.log(calculatedCompoundInterestCalculator(startNum, rate, years));
});

