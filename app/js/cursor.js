import { gsap, Power2 } from "gsap";

const body = document.querySelector('body'),
    cursor = document.querySelector('#cursor'),
    links = document.getElementsByTagName('a'),
    buttons = document.querySelectorAll("button"),
    red_but = document.querySelectorAll(".red"),
    cur_burg = document.querySelector(".burger");

let mouseX = 0, mouseY = 0, posX = 0, posY = 0;


function mouseCoords(e) {
    mouseX = e.pageX; //присваиваем позицию курсора по X
    mouseY = e.pageY; //Присваиваем позицию курсора по Y
}
gsap.to({}, .01, {
    repeat: -1,
    onRepeat: () => {
        posX += (mouseX - posX) / 5;
        posY += (mouseY - posY) / 5;
        gsap.set(cursor, {
            css: {
                left: posX,
                top: posY
            }
        })
    }
})

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('mouseover', () => {
        cursor.classList.add('active');
    })
    links[i].addEventListener('mouseout', () => {
        cursor.classList.remove('active');
    })
}

for (let i = 0; i < red_but.length; i++) {
    red_but[i].addEventListener('mouseover', () => {
        cursor.classList.add('active_blue');
    })
    red_but[i].addEventListener('mouseout', () => {
        cursor.classList.remove('active_blue');
    })
}
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('mouseover', () => {
        cursor.classList.add('active');
    })
    buttons[i].addEventListener('mouseout', () => {
        cursor.classList.remove('active');
    })
}

cur_burg.addEventListener("mouseover", () => {
    cursor.classList.add('active_blue');

})
cur_burg.addEventListener("mouseout", () => {
    cursor.classList.remove('active_blue');

})
body.addEventListener('mousemove', e => {
    cursor.classList.remove("hidden");
    mouseCoords(e);  // получаем mouseX & mouseY при каждом движении мыши
})

body.addEventListener('mouseout', e => {
    cursor.classList.add("hidden");
})
window.addEventListener("click", function () {
    cursor.classList.add("clicked");

    this.setTimeout(() => {
        cursor.classList.remove("clicked");
    }, 150);
})