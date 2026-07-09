

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

console.log(calculatedCompoundInterestCalculator(500, .05, 10));