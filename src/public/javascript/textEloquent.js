import textEloquent from './textAfterEloquent.js'

// Khai báo
let eloquentText = document.querySelector(".eloquentText")
let eloquentText4 = document.querySelector(".eloquentText4")
let input = document.querySelector("#typeVocab")

eloquentText4.innerHTML = textEloquent(10);
let text2 = textEloquent(10);

input.addEventListener("keyup", (e) => {
    if (input.value != "") {
        let string = input.value.trim()

        let locationVocab = text2.indexOf(string) / 3 - 300;

        if (text2.indexOf(string) == -1) {
            locationVocab = text2.indexOf(string.charAt(0).toUpperCase() + string.slice(1)) / 3 - 300;

            eloquentText.scrollTo(0, locationVocab);

            let regexp = new RegExp(string.charAt(0).toUpperCase() + string.slice(1), "gi")

            eloquentText4.innerHTML = text2.replace(regexp, `<mark>${string.charAt(0).toUpperCase() + string.slice(1)}</mark>`)
        }
        else {
            eloquentText.scrollTo(0, locationVocab);

            let regexp = new RegExp(string, "gi")

            eloquentText4.innerHTML = text2.replace(regexp, `<mark>${string}</mark>`)
        }
    }
})

// eloquentText.addEventListener('scroll',()=>{
//     let scrolled = eloquentText.scrollTop;
//     console.log(scrolled,"scrolled")
// })




// String
