
const compoundStartingPrincipal = document.getElementById("compund-starting-principal");
const compundAnnualRate = document.getElementById("compund-annual-rate");
const compoundNumberOfYears = document.getElementById("compund-number-of-years");
const compoundInterestForm = document.getElementById("compound-interest-input-form")
const compoundInterstDisplay = document.getElementById("compound-interest-results-display");

const ruleOf72Form = document.getElementById("rule-of-72-input-form");
const ruleOf72Rate = document.getElementById("rule-of-72-rate");
const ruleOf72Display = document.getElementById("rule-of-72-result-display");


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

compoundInterestForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let startNum = Number(compoundStartingPrincipal.value);
    let rate = Number(compundAnnualRate.value)/100;
    let years = Number(compoundNumberOfYears.value);
    let resultsHTML = calculatedCompoundInterestCalculator(startNum, rate, years).map( (year, index) => {
        let formattedIndex = index + 1;
        let fixedYear = Number(year).toFixed(2);
        return "Year " + formattedIndex + " " + "$" + fixedYear
    }).join("<br>");
    compoundInterstDisplay.innerHTML = resultsHTML;
});

const calculateRuleOf72 = (rate) => 72/rate;

ruleOf72Form.addEventListener("submit", (event) => {
    event.preventDefault();
    let resultsHTML = calculateRuleOf72(ruleOf72Rate.value);

    ruleOf72Display.innerHTML.toFixed(2) = resultsHTML;
});



