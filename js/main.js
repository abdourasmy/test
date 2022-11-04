let tabs = document.querySelectorAll(".tabs li");
let tabsArrey = Array.from(tabs);

let divs = document.querySelectorAll(".contact1 > div");
let divsArrey = Array.from(divs);

tabsArrey.forEach((ele) => {
  ele.addEventListener("click", function (e) {
    // console.log(ele)
    tabsArrey.forEach((ele) => {
      ele.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    // this.className = "active"
    divsArrey.forEach((div) => {
      div.style.display = "none"
    });
    console.log(e.currentTarget.dataset.cont)
    document.querySelector(e.currentTarget.dataset.cont).style.display = "block"
  });
});

let user = document.getElementById("user");
let number = document.getElementById("number");
let adress = document.getElementById("adress");

let submit = document.getElementById("submit")

function getTotal() {
    submit.href = `https://api.whatsapp.com/send?phone=201028965962&text=الإسم+${user.value.trim()}++التليفون+${number.value.trim()}++العنوان+${adress.value.trim()}`;
}

submit.onclick = function () {
    console.log("bb")
    if (user.value == " ") {
        submit.href=""
    }
}