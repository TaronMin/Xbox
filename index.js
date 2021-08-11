let firstSlider = document.querySelector(".slider-div");
let count = 1;
function rigth(){
    if(count === 3){
        count  = 0;
    }
    count++;
    firstSlider.children[count].style.display = "block";
    for(let i = 1 ;i < 4;i++){
        if(i === count){
            continue;
        }
        firstSlider.children[i].style.display = "none";
    }

    console.log(count);
}
function left(){
    if(count <= 1){
        count  = 4;
    }
    count--;
    firstSlider.children[count].style.display = "block";
    for(let i = 1 ;i<4;i++){
        if(i === count){
            continue;
        }
        firstSlider.children[i].style.display = "none";
    }
    console.log(count);
}
var forSecondSlider = document.querySelector(".second-slider-div");
    forSecondSlider.style.cssText = `transform: translateX(100px); transition: 1s all ease`;
var translatedCount = 0;
    if(window.innerWidth < 767 && window.innerWidth >= 320){
        forSecondSlider.style.cssText = `transform: translateX(0px); transition: 1s all ease`;
    }
function secondSlider(){
        if(window.innerWidth > 1158){
            translatedCount-=200;
            console.log(translatedCount);
            if(translatedCount < -1600){
                forSecondSlider.style.cssText = `transform: translateX(0px); transition: 1s all ease`;
                translatedCount = 0;
                return;
            }
            forSecondSlider.style.cssText = `transform: translateX( ${translatedCount}px);`;
            return;
        }
        if(window.innerWidth < 1158 && window.innerWidth > 1023){
            translatedCount-=300;
            console.log(translatedCount);
            if(translatedCount < -1900){
                forSecondSlider.style.cssText = `transform: translateX(100px); transition: 1s all ease`;
                translatedCount = 0;
                return;
            }
            forSecondSlider.style.cssText = `transform: translateX( ${translatedCount}px);`;
            return;
        }
        if(window.innerWidth <= 1023 && window.innerWidth >= 767){
            translatedCount-=400;
            console.log(translatedCount);
            if(translatedCount < -2200){
                forSecondSlider.style.cssText = `transform: translateX(100px); transition: 1s all ease`;
                translatedCount = 0;
                return;
            }
            forSecondSlider.style.cssText = `transform: translateX( ${translatedCount}px);`;
            return;
        }
        if(window.innerWidth < 767 && window.innerWidth >= 500){
            translatedCount-=300;
            console.log(translatedCount);
            if(translatedCount < -1800){
                forSecondSlider.style.cssText = `transform: translateX(100px); transition: 1s all ease`;
                translatedCount = 0;
                return;
            }
            forSecondSlider.style.cssText = `transform: translateX( ${translatedCount}px);`;
            return;
        }
        if(window.innerWidth < 500 && window.innerWidth >= 320){
            translatedCount-=300;
            console.log(translatedCount);
            if(translatedCount < -1800){
                forSecondSlider.style.cssText = `transform: translateX(0px); transition: 1s all ease`;
                translatedCount = 0;
                return;
            }
            forSecondSlider.style.cssText = `transform: translateX( ${translatedCount}px);`;
            return;
        }
}

function secondSliderLeft(){
    if(window.innerWidth > 1158){
        translatedCount+=200;
        console.log(translatedCount);
        if(translatedCount > 0){
            forSecondSlider.style.cssText = `transform: translateX(-1500px); transition: 1s all ease`;
            translatedCount = -1600;
            return;
        }
        forSecondSlider.style.cssText = `transform: translateX( ${translatedCount}px);`;
        return;
    }
    if(window.innerWidth < 1158 && window.innerWidth > 1023){
        translatedCount+=250;
        console.log(translatedCount);
        if(translatedCount > 200){
            forSecondSlider.style.cssText = `transform: translateX(-1900px); transition: 1s all ease`;
            translatedCount = -1900;
            return;
        }
        forSecondSlider.style.cssText = `transform: translateX( ${translatedCount}px);`;
        return;
    }
    if(window.innerWidth <= 1023 && window.innerWidth >= 767){
        translatedCount+=400;
        console.log(translatedCount);
        if(translatedCount > 200){
            forSecondSlider.style.cssText = `transform: translateX(-2200px); transition: 1s all ease`;
            translatedCount = -2200;
            return;
        }
        forSecondSlider.style.cssText = `transform: translateX( ${translatedCount}px);`;
        return;
    }
    if(window.innerWidth < 767 && window.innerWidth >= 500){
        console.log(translatedCount);
        if(translatedCount === 0){
            translatedCount =  translatedCount = -1800;
            forSecondSlider.style.cssText = `transform: translateX( ${translatedCount}px);`;
            return;
        }
        translatedCount+=300;
        console.log(translatedCount);
        if(translatedCount > 0){
            forSecondSlider.style.cssText = `transform: translateX(100px); transition: 1s all ease`;
            translatedCount = -1800;
            return;
        }
        forSecondSlider.style.cssText = `transform: translateX( ${translatedCount}px);`;
        return;
    }
    if(window.innerWidth < 500 && window.innerWidth >= 320){
        translatedCount+=300;
        console.log(translatedCount);
        if(translatedCount > 0){
            forSecondSlider.style.cssText = `transform: translateX(-1800px); transition: 1s all ease`;
            translatedCount = -1800;
            return;
        }
        forSecondSlider.style.cssText = `transform: translateX( ${translatedCount}px);`;
        return;
    }
}


var gamesBlockDiv = document.querySelector(".games-opened-div");
function gamesDiv(){
    if(window.innerWidth >= 1024){
        gamesBlockDiv.classList.toggle("display");
    }
    if(window.innerWidth < 1024){
        gamesBlockDiv.classList.toggle("display-w");
    }
}
var consoleBlockDiv = document.querySelector(".console-opened-div");
function consoleDiv(){
    if(window.innerWidth >= 1024){
        consoleBlockDiv.classList.toggle("display-console");
    }
    if(window.innerWidth < 1024){
        consoleBlockDiv.classList.toggle("display-console-w");
    }
}
var contentSecond = document.querySelector(".content-of-second");
var topDiv = document.querySelector(".top-div")
window.onscroll = function(){
    if(document.body.scrollTop > 390){
        contentSecond.style.cssText = `
            transform: scale(1);
            opacity: 1;
            transition: 1s ease;
        `;
    }
    if(document.body.scrollTop > 1335){
        topDiv.style.cssText = `
        transform: translateY(0px);
        `;
    }else{
        topDiv.style.cssText = `
        transform: translateY(100px);
        `;
    }
}
var burgerDiv = document.querySelector(".burger-div");
var gamesList = document.querySelector(".games-li");
var consoleList = document.querySelector(".console-li");
var comunity = document.querySelector(".community");
var closeIcon = document.querySelector(".close-icon");
function burger(){
    closeIcon.style.cssText = `transform: translate(130px, 15px);`;
    burgerDiv.classList.add("for-burger-div");
    gamesList.classList.add("transform-class");
    consoleList.classList.add("transform-class");
    comunity.classList.add("transform-class");
}
function closeBurger() {
    consoleBlockDiv.classList.remove("display-console-w");
    gamesBlockDiv.classList.remove("display-w");
    closeIcon.style.cssText = `transform: translate(-20px, 15px);`;
    burgerDiv.classList.remove("for-burger-div");
    gamesList.classList.remove("transform-class");
    consoleList.classList.remove("transform-class");
    comunity.classList.remove("transform-class");
}