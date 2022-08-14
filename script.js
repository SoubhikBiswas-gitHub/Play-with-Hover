let ip = document.getElementById("inputText");
let container = document.getElementById("cr");

let span = document.createElement("span");
container.appendChild(span);

ip.addEventListener("keydown", (e) => {
  if (e.keyCode >= 65 && e.keyCode <= 90) {
    let span = document.createElement("span");
    span.textContent = e.key;
    span.classList.add("s");
    span.classList.add("s:hover");
    container.appendChild(span);
  } else if (e.keyCode === 8) {
    // span.innerText.slice(0, -1);
    container.remove("span").slice(0, -1);
  }
});
