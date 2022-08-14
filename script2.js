let ip = document.getElementById("inputText");
let container = document.getElementById("cr");

// let span = document.createElement("span");
// container.appendChild(span);
let spanNode = [];
ip.addEventListener("onInput", (e) => {
  if (e.keyCode >= 65 && e.keyCode <= 90) {
    let span = document.createElement("span");
    spanNode.push(span);

    spanNode.forEach((element) => {
      element.textContent = e.key;
      element.classList.add("s");
      element.classList.add("s:hover");
      container.appendChild(element);
    });

    console.log(spanNode);
  } else if (e.keyCode === 8) {
  }
});
