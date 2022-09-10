// Cache the DOM
const container = document.querySelector(".container");
const text = document.querySelector("#text");

// Set time
const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breatheAnimation()

// Main function
function breatheAnimation () {
    text.innerHTML = "Breathe in!";
    container.className = "container grow";

    setTimeout(() => {
        text.innerHTML = "Hold";

        setTimeout(() => {
            text.innerHTML = "Breathe out!";
            container.className = "container shrink";
        }, holdTime)
    }, breatheTime)
}

// Run the breatheAnimation every totalTime seconds
setInterval(breatheAnimation, totalTime);