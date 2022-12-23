let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0

// Your Code Here
for (let i = 2; i >= 0; i--){
    let stringAnswer = window.prompt(weeklyExpenseQuestions[i])
    console.log(stringAnswer)
    let numberAnswer = parseFloat(stringAnswer)
    weeklyExpenses += numberAnswer
}
for (let i = 0; i < monthlyExpenseQuestions.length; i++){
    let stringAnswer = window.prompt(monthlyExpenseQuestions[i])
    console.log(stringAnswer)
    let numberAnswer = parseFloat(stringAnswer)
    monthlyExpenses += numberAnswer
}
for (let i = 0; i < annualExpenseQuestions.length; i++){
    let stringAnswer = window.prompt(annualExpenseQuestions[i])
    console.log(stringAnswer)
    let numberAnswer = parseFloat(stringAnswer)
    annualExpenses += numberAnswer
}