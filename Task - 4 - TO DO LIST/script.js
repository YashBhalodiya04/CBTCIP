let text = document.querySelector("#text");
let list = document.querySelector("#list");
let complate = document.querySelector("#complate");

text.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    addToDO(this.value);
    this.value = "";
  }
});

function addToDO(text) {
  if (text === "") {
    alert("Enter the list");
  } else {
    let li = document.createElement("li");
    
    li.innerHTML = `${text} <i class="fa-solid fa-xmark"></i> <i class="fa-solid fa-check"></i>`;
    list.appendChild(li);

    li.querySelector(`i[class='fa-solid fa-xmark']`).addEventListener(
      "click",
      function () {
        li.remove();
      }
    );

    li.querySelector(`i[class='fa-solid fa-check']`).addEventListener(
      "click",
      function () {
        li.remove();
        complate.appendChild(li);
        
        li.innerHTML = `${text} <i class="fa-solid fa-xmark"></i> <i class="fa-solid fa-check"></i>`;
        // li.classList.toggle("done");
        li.querySelector(`i[class='fa-solid fa-xmark']`).addEventListener(
          "click",
          function () {
            li.remove();
          }
        );
      }
    );
    li.querySelector(`i[class='fa-solid fa-xmark']`).addEventListener(
      "click",
      function () {
        li.remove();
      }
    );
  }
}
