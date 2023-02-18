const btn = document.querySelector("#btn");
const form = document.querySelector("#form");

btn.addEventListener("click", function () {
  console.log("click");
});

// btn.addEventListener("click", btnClick);

// function btnClick() {
//     console.log("click desde una funcion");
// }

form.addEventListener("submit", function(e){
    e.preventDefault();
    console.log("submit desde una funcion anonima");
})

