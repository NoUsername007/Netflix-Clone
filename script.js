const plus = document.querySelectorAll(".ri-add-line")
const question = document.querySelectorAll(".question")
const content = document.querySelectorAll(".content")
const sponsor = document.querySelector(".sponsor-box")

question.forEach((element, index, array) =>{
    element.addEventListener("click", () => {
        content[index].classList.toggle("block")
        content[index].classList.toggle("animate")
        plus[index].classList.toggle("rotate")
        element.classList.toggle("active")
    })
})

window.addEventListener("scroll", () =>{
    const scrolled = window.scrollY

    if (1940 >= scrolled && scrolled >= 428 && screen.width < 600 ) {
        sponsor.style.display = 'block'
        sponsor.style.animation = 'forSponsor 0.5s linear'
    } 
    else {
        sponsor.style.display = 'none'
    }

})
