let burger = document.querySelector(".burger");
let menu = document.querySelector(".header-nav");
let list = document.querySelector(".header-nav__list");

burger.addEventListener("click", function () {
    document.body.classList.add("lock");
    menu.classList.add("active");
    list.classList.add("active");
})

let mob_burg = document.querySelector(".mob-burg");

mob_burg.addEventListener("click", function () {
    document.body.classList.remove("lock");
    menu.classList.remove("active");
    list.classList.remove("active");


})

window.onclick = function (e) {
    if (e.target == menu) {
        menu.classList.remove('active');
        list.classList.remove("active");
        document.body.classList.remove("lock");
    }
}


let lis = document.querySelectorAll(".header-nav__li");

lis[1].addEventListener("click", function () {
    this.classList.toggle("active");
    this.querySelector('.header-nav__sub-list').classList.toggle("active");
})

