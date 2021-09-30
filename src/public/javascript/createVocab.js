let vocabWord = document.getElementById("vocabWord")
let vocabMeaning = document.getElementById("vocabMeaning");

vocabWord.addEventListener("keyup",()=>{
    vocabMeaning.setAttribute('name', vocabWord.value)
})


