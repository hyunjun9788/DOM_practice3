const animals = ['코알라', '사자', '호랑이', '강아지']
let currentIndex=0

const previousButton = document.querySelector('#previous')
const nextButton = document.querySelector('#next')
const animalElement  = document.querySelector('#animalName')


previousButton.addEventListener('click',()=> {
        currentIndex = (currentIndex - 1 + animals.length) % animals.length;
        animalElement.textContent = animals[currentIndex]
    if(currentIndex===0){
        previousButton.disabled = true;
    }
    if(currentIndex>=1){
        nextButton.disabled = false
    }
    }
)

nextButton.addEventListener('click',()=>{
    currentIndex = (currentIndex +1)%animals.length
    animalElement.textContent = animals[currentIndex];

    if(currentIndex>=1){
        previousButton.disabled=false;
    }
    if(currentIndex === animals.length-1){
        nextButton.disabled=true
    }
})