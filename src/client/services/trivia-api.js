export function dataTest() {
    fetch("https://opentdb.com/api.php?amount=2&category=9&difficulty=easy&type=multiple").then((response) => response.json())
    .then((data) => {
    document.getElementById("question").innerHTML = data.results[0].question;

    document.getElementById("answer").innerHTML = data.results[0].correct_answer;

})
}