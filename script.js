const titles = [
    "Data Analyst",
    "Fraud Analyst",
    "Risk Analyst",
    "BI Analyst"
];

let currentTitle = 0;

const titleElement = document.getElementById("changing-title");

if (titleElement) {
    setInterval(() => {
        titleElement.style.opacity = 0;

        setTimeout(() => {
            currentTitle = (currentTitle + 1) % titles.length;
            titleElement.textContent = titles[currentTitle];
            titleElement.style.opacity = 1;
        }, 600);

    }, 2200);
}
