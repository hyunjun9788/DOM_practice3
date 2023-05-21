const animals = ['코알라', '사자', '호랑이', '강아지']
let currentIndex=0

const previousButton = document.querySelector('#previous')
const nextButton = document.querySelector('#next')
const animalElement  = document.querySelector('#animalName')


previousButton.addEventListener('click',()=>{
    currentIndex = (currentIndex -1 + animals.length)%animals.length;
    animalElement.textContent = animals[currentIndex]
})

nextButton.addEventListener('click',()=>{
    currentIndex = (currentIndex +1)%animals.length
    animalElement.textContent = animals[currentIndex];
})