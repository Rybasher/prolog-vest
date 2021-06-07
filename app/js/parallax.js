let header = document.querySelector(".header");
let phone = document.querySelector(".image-wrapper");


// Коефициэнты

const coef = 15;

// Speed 

const speed = 0.1;

let positionX = 0, positionY = 0;
let coordXprocent = 0, coordYprocent = 0;

function setMouseParallaxStyle(){
    const distX = coordXprocent - positionX;
    const distY = coordYprocent - positionY;
    positionX = positionX + (distX * speed);
    positionY = positionY + (distY * speed);
    // Styles

    phone.style.transform = `translate(${positionX / coef}%, ${positionY / coef}%)`;
    requestAnimationFrame(setMouseParallaxStyle);

}
setMouseParallaxStyle();

header.addEventListener("mousemove", function(e){
    const parralaxWidth = header.offsetWidth;
    const parralaxHeight = header.offsetHeight;
    console.log(parralaxHeight, parralaxWidth);
    // Zero at center

    const coordX = e.pageX - parralaxWidth / 2;
    const coordY = e.pageY - parralaxHeight / 2;


    coordXprocent = coordX / parralaxWidth * 100;
    coordYprocent = coordY / parralaxHeight * 100;
    

})