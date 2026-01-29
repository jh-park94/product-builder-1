
const generateBtn = document.getElementById("generate-btn");
const numberCircles = document.querySelectorAll(".number-circle");
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark");
});

generateBtn.addEventListener("click", () => {
    const numbers = new Set();
    while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
    }

    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

    numberCircles.forEach((circle, index) => {
        const number = sortedNumbers[index];
        circle.textContent = number;
        circle.style.backgroundColor = getNumberColor(number);
        circle.style.color = "white";
        circle.style.transform = "scale(1.1)";
        setTimeout(() => {
            circle.style.transform = "scale(1)";
        }, 300);
    });
});

function getNumberColor(number) {
    if (number <= 10) return "#fbc400"; // Yellow
    if (number <= 20) return "#69c8f2"; // Blue
    if (number <= 30) return "#ff7272"; // Red
    if (number <= 40) return "#aaa"; // Gray
    return "#b0d840"; // Green
}
