let sliderFirst = document.querySelector("#slider_first");
let sliderLeftIcon = document.querySelector(".slider_left_icon");
let sliderRihgtIcon = document.querySelector(".slider_rihgt_icon");


let lastSliderContainer = document.querySelector("#slide_container");
let rightLastIcon = document.querySelector("#right_last_icon");
let leftLastIcon = document.querySelector("#left_last_icon");
let gridContainerSecond=document.querySelector(".grid_container_second");
let buttons=document.querySelectorAll(".three_btns button");
let buttonsParent=document.querySelector(".three_btns");
let barsIcon=document.querySelector(".bars_icon");
let navList=document.querySelector(".nav_list");
let closeIcon=document.querySelector(".close_icon");




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
        lastSliderContainer.children[i].style.transform = `translateX(${-295 * count2}px)`

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
let gridContainer=document.querySelector(".grid_container");



products.forEach(x=>{
    gridContainer.innerHTML+=`
    <div class="grid_card">
    <div class="grid_card_content">
        <img src="${x.img}"
            alt="">
        <button onclick="addToBasket(${x.id})">İndi al <svg xmlns="http://www.w3.org/2000/svg" width="21" height="17"
                viewBox="0 0 21 17" fill="none">
                <path
                    d="M1.47245 0H3.83407C3.85639 0 3.87535 0.0102163 3.89705 0.012459C3.94234 0.016994 3.98467 0.0243697 4.02711 0.0382241C4.06264 0.0497361 4.09471 0.0639393 4.12709 0.0811826C4.16435 0.101067 4.19794 0.122646 4.23042 0.149508C4.26031 0.174126 4.28567 0.20034 4.31037 0.229893C4.33584 0.260342 4.35759 0.29134 4.37691 0.326624C4.39688 0.362855 4.41091 0.400032 4.42316 0.4402C4.42982 0.461978 4.4442 0.479471 4.44847 0.502345L4.80614 2.41898L20.0902 3.29475C20.1487 3.29076 20.2004 3.29913 20.2658 3.30511C20.6054 3.33541 20.8575 3.62725 20.8322 3.96055C20.8302 3.98567 20.827 4.00999 20.8221 4.03391L19.7572 9.72875C19.5136 10.6118 18.7634 11.5033 17.635 11.5033H6.50152L6.7399 12.7807H16.1082C17.2943 12.7807 18.2596 13.7272 18.2596 14.8902C18.2596 16.0535 17.2943 17 16.1082 17C14.9221 17 13.9568 16.0535 13.9568 14.8902C13.9568 14.5732 14.0336 14.2754 14.1619 14.0055H8.40916C8.53745 14.2754 8.61425 14.5732 8.61425 14.8902C8.61425 16.0535 7.64894 17 6.46284 17C5.27675 17 4.31144 16.0535 4.31144 14.8902C4.31144 14.0632 4.80395 13.3531 5.51238 13.0075L3.31345 1.22477H1.47245C1.12764 1.22477 0.847885 0.950469 0.847885 0.612383C0.847885 0.274296 1.12764 0 1.47245 0ZM5.82598 7.88338L8.47265 7.92415L8.3285 6.4202L5.53759 6.33817L5.82598 7.88338ZM19.0482 6.73531L16.4034 6.65757L16.2304 8.04355L18.7966 8.08307L19.0482 6.73531ZM15.5679 6.633L12.6609 6.54758V7.98858L15.3934 8.0307L15.5679 6.633ZM12.6609 5.73032L15.6696 5.81878L15.8618 4.27935L12.6609 4.09586V5.73032ZM11.8281 4.04812L8.92165 3.88146L9.08877 5.62532L11.8281 5.70585V4.04812ZM12.6609 8.80529V10.2785H15.1127L15.2916 8.84581L12.6609 8.80529ZM11.8281 8.79249L9.3887 8.75496L9.53473 10.2785H11.8281V8.79249ZM11.8281 7.97578V6.52311L9.1673 6.44487L9.31033 7.937L11.8281 7.97578ZM5.38425 5.51643L8.24997 5.60065L8.08062 3.83327L5.03755 3.6588L5.38425 5.51643ZM16.6945 4.3271L16.5051 5.8433L19.2 5.92254C19.3136 5.31763 19.404 4.84753 19.4811 4.48682L16.6945 4.3271ZM18.5397 9.45884L18.6446 8.89744L16.1286 8.85872L15.9513 10.2785H17.635C18.1701 10.2785 18.4682 9.71001 18.5397 9.45884ZM8.69827 10.2785L8.55102 8.74205L5.97882 8.70243L6.27296 10.2785H8.69827ZM15.2059 14.8902C15.2059 15.3781 15.6105 15.7752 16.1082 15.7752C16.6059 15.7752 17.0105 15.3781 17.0105 14.8902C17.0105 14.4022 16.6059 14.0055 16.1082 14.0055C15.6105 14.0055 15.2059 14.4022 15.2059 14.8902ZM6.46284 15.7752C6.96054 15.7752 7.36513 15.3781 7.36513 14.8902C7.36513 14.4022 6.96054 14.0055 6.46284 14.0055C5.96515 14.0055 5.56056 14.4022 5.56056 14.8902C5.56056 15.3781 5.96515 15.7752 6.46284 15.7752Z"
                    fill="#1D1D1B" />
            </svg>
        </button>
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" viewBox="0 0 22 18"
                fill="none">
                <path
                    d="M20.1046 9.26959C22.2642 7.14738 22.2642 3.69662 20.1046 1.59166C17.9451 -0.530554 14.4336 -0.530554 12.2741 1.59166L11.2206 2.62689L10.1672 1.59166C8.00763 -0.530554 4.49616 -0.530554 2.35417 1.59166C1.30073 2.60963 0.738892 3.98994 0.738892 5.43925C0.738892 6.88857 1.31828 8.25162 2.35417 9.28685L11.2206 18L20.1046 9.26959ZM2.12592 5.43925C2.12592 4.35226 2.5473 3.33429 3.33738 2.57513C4.14502 1.78145 5.19846 1.38462 6.2519 1.38462C7.30534 1.38462 8.35878 1.78145 9.16642 2.57513L11.2206 4.57656L13.2748 2.55787C14.8901 0.970525 17.5062 0.970525 19.1039 2.55787C19.8764 3.31704 20.3153 4.33501 20.3153 5.422C20.3153 6.50899 19.894 7.52696 19.1039 8.28613L11.2206 16.0503L3.33738 8.30338C2.56486 7.52696 2.12592 6.50899 2.12592 5.43925Z"
                    fill="black" />
            </svg>
        </div>
    </div>
    <p>${x.title} <span>${x.price} <svg xmlns="http://www.w3.org/2000/svg" width="11" height="12"
                viewBox="0 0 11 12" fill="none">
                <path
                    d="M10.7819 6.42857V11.1429C10.7819 11.6167 10.3751 12 9.87343 12C9.37179 12 8.96497 11.6167 8.96497 11.1429V6.42857C8.96497 5.07429 8.00257 3.94018 6.69382 3.56786V11.1429C6.69382 11.6167 6.287 12 5.78535 12C5.28371 12 4.87689 11.6167 4.87689 11.1429V3.56786C3.56814 3.94018 2.60574 5.07321 2.60574 6.42857V11.1429C2.60574 11.6167 2.19892 12 1.69728 12C1.19564 12 0.788818 11.6167 0.788818 11.1429V6.42857C0.788818 4.12259 2.55464 2.20179 4.87689 1.79732V0.857143C4.87689 0.383304 5.28371 0 5.78535 0C6.287 0 6.69382 0.383304 6.69382 0.857143V1.79625C9.01607 2.20179 10.7819 4.12232 10.7819 6.42857Z"
                    fill="black" />
            </svg></span></p>
</div>

    `
})

function addToBasket(y) {
 let checkBasket=basket.find(a=>a.id==y);
 if (checkBasket){
    checkBasket.count+=1
 }else{
    let checkPr=products.find(z=>z.id==y)
    checkPr.count=1
    basket.push(checkPr)
 }
 console.log(basket);
 localStorage.setItem("sebet",JSON.stringify(basket))
}
let basketIcon=document.querySelector(".basket_icon");

basketIcon.addEventListener("click",()=>{
    window.location.href="basket.html"
})


products2.forEach(y=>{
    gridContainerSecond.innerHTML+=`
    <div data-name="${y.dataName}" class="grid_card_second">

    <img src="${y.img}" alt="">
    <p class="yem_uchun_olan_p">${y.title}</p>
    <p class="qiymet_uchun_olan_p">${y.price}<svg xmlns="http://www.w3.org/2000/svg" width="11" height="12"
            viewBox="0 0 11 12" fill="none">
            <path
                d="M10.7993 6.42857V11.1429C10.7993 11.6167 10.3925 12 9.89089 12C9.38925 12 8.98242 11.6167 8.98242 11.1429V6.42857C8.98242 5.07429 8.02002 3.94018 6.71127 3.56786V11.1429C6.71127 11.6167 6.30445 12 5.80281 12C5.30117 12 4.89435 11.6167 4.89435 11.1429V3.56786C3.5856 3.94018 2.6232 5.07321 2.6232 6.42857V11.1429C2.6232 11.6167 2.21638 12 1.71474 12C1.21309 12 0.806274 11.6167 0.806274 11.1429V6.42857C0.806274 4.12259 2.5721 2.20179 4.89435 1.79732V0.857143C4.89435 0.383304 5.30117 0 5.80281 0C6.30445 0 6.71127 0.383304 6.71127 0.857143V1.79625C9.03353 2.20179 10.7993 4.12232 10.7993 6.42857Z"
                fill="black" />
        </svg> </p>
    <div class="end_two_btns">
        <button onclick="addToBasket2(${y.id})" class="indiAl_btn">İndi al<svg xmlns="http://www.w3.org/2000/svg" width="21" height="17"
                viewBox="0 0 21 17" fill="none">
                <path
                    d="M1.47658 0H3.83821C3.86052 0 3.87948 0.0102163 3.90118 0.012459C3.94647 0.016994 3.98881 0.0243697 4.03125 0.0382241C4.06678 0.0497361 4.09885 0.0639393 4.13123 0.0811826C4.16848 0.101067 4.20208 0.122646 4.23456 0.149508C4.26445 0.174126 4.28981 0.20034 4.31451 0.229893C4.33998 0.260342 4.36173 0.29134 4.38104 0.326624C4.40102 0.362855 4.41505 0.400032 4.4273 0.4402C4.43395 0.461978 4.44834 0.479471 4.45261 0.502345L4.81028 2.41898L20.0943 3.29475C20.1529 3.29076 20.2045 3.29913 20.27 3.30511C20.6095 3.33541 20.8616 3.62725 20.8364 3.96055C20.8344 3.98567 20.8311 4.00999 20.8262 4.03391L19.7613 9.72875C19.5177 10.6118 18.7675 11.5033 17.6392 11.5033H6.50566L6.74404 12.7807H16.1123C17.2984 12.7807 18.2637 13.7272 18.2637 14.8902C18.2637 16.0535 17.2984 17 16.1123 17C14.9262 17 13.9609 16.0535 13.9609 14.8902C13.9609 14.5732 14.0377 14.2754 14.166 14.0055H8.41331C8.54159 14.2754 8.61839 14.5732 8.61839 14.8902C8.61839 16.0535 7.65308 17 6.46698 17C5.28088 17 4.31558 16.0535 4.31558 14.8902C4.31558 14.0632 4.80809 13.3531 5.51652 13.0075L3.31759 1.22477H1.47658C1.13177 1.22477 0.85202 0.950469 0.85202 0.612383C0.85202 0.274296 1.13177 0 1.47658 0ZM5.83012 7.88338L8.47679 7.92415L8.33264 6.4202L5.54173 6.33817L5.83012 7.88338ZM19.0524 6.73531L16.4076 6.65757L16.2346 8.04355L18.8007 8.08307L19.0524 6.73531ZM15.5721 6.633L12.665 6.54758V7.98858L15.3975 8.0307L15.5721 6.633ZM12.665 5.73032L15.6737 5.81878L15.866 4.27935L12.665 4.09586V5.73032ZM11.8323 4.04812L8.92579 3.88146L9.09291 5.62532L11.8323 5.70585V4.04812ZM12.665 8.80529V10.2785H15.1169L15.2958 8.84581L12.665 8.80529ZM11.8323 8.79249L9.39284 8.75496L9.53887 10.2785H11.8323V8.79249ZM11.8323 7.97578V6.52311L9.17144 6.44487L9.31447 7.937L11.8323 7.97578ZM5.38838 5.51643L8.25411 5.60065L8.08476 3.83327L5.04169 3.6588L5.38838 5.51643ZM16.6986 4.3271L16.5093 5.8433L19.2042 5.92254C19.3177 5.31763 19.4082 4.84753 19.4852 4.48682L16.6986 4.3271ZM18.5439 9.45884L18.6487 8.89744L16.1328 8.85872L15.9555 10.2785H17.6392C18.1743 10.2785 18.4723 9.71001 18.5439 9.45884ZM8.70241 10.2785L8.55516 8.74205L5.98296 8.70243L6.27709 10.2785H8.70241ZM15.21 14.8902C15.21 15.3781 15.6146 15.7752 16.1123 15.7752C16.61 15.7752 17.0146 15.3781 17.0146 14.8902C17.0146 14.4022 16.61 14.0055 16.1123 14.0055C15.6146 14.0055 15.21 14.4022 15.21 14.8902ZM6.46698 15.7752C6.96468 15.7752 7.36927 15.3781 7.36927 14.8902C7.36927 14.4022 6.96468 14.0055 6.46698 14.0055C5.96929 14.0055 5.5647 14.4022 5.5647 14.8902C5.5647 15.3781 5.96929 15.7752 6.46698 15.7752Z"
                    fill="#1D1D1B" />
            </svg></button>
        <div>
            <button class="heart_btn"><svg xmlns="http://www.w3.org/2000/svg" width="19" height="15"
                    viewBox="0 0 19 15" fill="none">
                    <path
                        d="M17.3458 7.72466C19.1968 5.95615 19.1968 3.08052 17.3458 1.32638C15.4947 -0.442128 12.4849 -0.442128 10.6339 1.32638L9.73092 2.18907L8.82797 1.32638C6.97693 -0.442128 3.9671 -0.442128 2.1311 1.32638C1.22815 2.17469 0.746582 3.32495 0.746582 4.53271C0.746582 5.74047 1.2432 6.87635 2.1311 7.73904L9.73092 15L17.3458 7.72466ZM1.93546 4.53271C1.93546 3.62689 2.29664 2.77858 2.97386 2.14594C3.66612 1.48454 4.56906 1.15385 5.47201 1.15385C6.37496 1.15385 7.27791 1.48454 7.97017 2.14594L9.73092 3.8138L11.4917 2.13156C12.8762 0.808771 15.1185 0.808771 16.488 2.13156C17.1501 2.7642 17.5264 3.61251 17.5264 4.51833C17.5264 5.42416 17.1652 6.27247 16.488 6.9051L9.73092 13.3753L2.97386 6.91948C2.31169 6.27247 1.93546 5.42416 1.93546 4.53271Z"
                        fill="black" />
                </svg></button>
        </div>
    </div>
</div>
    
    `
})
function addToBasket2(v){
    let checkBasket=basket.find(a=>a.id==v);
    if (checkBasket){
       checkBasket.count+=1
    }else{
       let checkPr=products2.find(z=>z.id==v)
       checkPr.count=1
       basket.push(checkPr)
    }
    console.log(basket);
    localStorage.setItem("sebet",JSON.stringify(basket))  
}



for(let i=0; i<buttons.length; i++){
    buttons[i].addEventListener("click",()=>{
        buttonsParent.querySelector(".three_btns_active").classList.remove("three_btns_active")
        buttons[i].classList.add("three_btns_active")
let btnName=buttons[i].getAttribute("data-name")
console.log(btnName);
let cards=document.querySelectorAll(".grid_card_second");

for(let i=0; i<cards.length;i++){
    let cardName=cards[i].getAttribute("data-name")
    if(btnName===cardName || btnName==="butun"){
       cards[i].classList.add("show")
       cards[i].classList.remove("hide")
    }else{
        cards[i].classList.add("hide")
        cards[i].classList.remove("show")
   
    }
}
    })
}
barsIcon.addEventListener("click",()=>{
navList.classList.add("nav_active")
})
closeIcon.addEventListener("click",()=>{
    navList.classList.remove("nav_active")
})
