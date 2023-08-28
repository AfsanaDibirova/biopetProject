let sliderFirst = document.querySelector("#slider_first");
let sliderLeftIcon = document.querySelector(".slider_left_icon");
let sliderRihgtIcon = document.querySelector(".slider_rihgt_icon");


let lastSliderContainer = document.querySelector("#slide_container");
let rightLastIcon = document.querySelector("#right_last_icon");
let leftLastIcon = document.querySelector("#left_last_icon");



let count = 0;
function slider() {
    for (let i = 0; i < sliderFirst.children.length; i++) {
        sliderFirst.children[i].style.transform = `translateX(${-290 * count}px)`
    }
}
setInterval(() => {
    if (count < sliderFirst.children.length - 3) {
        count++
        slider()
    } else {
        count = 0
        slider()
    }

}, 3000);

sliderRihgtIcon.addEventListener("click", () => {
    if (count < sliderFirst.children.length - 3) {
        count++
        slider()
    } else {
        count = 0
        slider()
    }
})
sliderLeftIcon.addEventListener("click", () => {
    if (count > 0) {
        count--
        slider()
    } else {
        count = 0;
        slider()
    }
})

let count2 = 0;
function slider2() {
    for (let i = 0; i < lastSliderContainer.children.length; i++) {
        lastSliderContainer.children[i].style.transform = `translateX(${-288 * count2}px)`

    }
}
setInterval(() => {
    if (count2 < lastSliderContainer.children.length - 4){
        count2++
        slider2()
    }else{
        count2=0
        slider2()
    }
     
}, 3000);

rightLastIcon.addEventListener("click",()=>{
    if (count2 < lastSliderContainer.children.length - 4){
        count2++
        slider2()
    }else{
        count2=0
        slider2()
    }
})
leftLastIcon.addEventListener("click",()=>{
    if(count2>lastSliderContainer.children.length-4){
        count2--
        slider2()
    }else{
        count2=0
        slider2()
    }
})
