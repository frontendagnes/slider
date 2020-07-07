const slide = document.querySelectorAll(".slide")
const buttons = document.querySelector(".slider-dots")
let nr = 0; //zmienna która dodaj numer do kolenjengo slidu
// tworzy kontener na kropki
const dots = document.createElement("ul")
dots.classList.add("dots")
buttons.appendChild(dots)

//#region  towrzy kropki - tyle ile jest slidów
for (let i = 0; i < slide.length; i++) {
    nr = i + 1
    const dot = document.createElement("li")
    dot.classList.add("dot")
    dots.appendChild(dot)
    const href = document.createElement("a")
    href.classList.add("href-dot")
    href.href = `#article${nr}`
    dot.appendChild(href)
}
//#endregion
//#region obsługa kropek
let link = document.querySelectorAll(".href-dot")
let li = document.querySelectorAll(".dot")
li[0].classList.add("active-btn")

for (let j = 0; j < link.length; j++) {
    link[j].addEventListener("click", function (e) {
        e.preventDefault()
        for (let dot of li) {
            dot.classList.remove("active-btn")
        }
        this.parentElement.classList.add("active-btn")
        let sl = document.querySelector(this.getAttribute("href"))
        const parentSlide = sl.parentElement.children

        for (let art of parentSlide) {
            art.classList.remove("active-slide")
        }
        sl.classList.add("active-slide")
    })
}
//#endregion

let btnPrev = document.querySelector(".btn-prev")
let btnNext = document.querySelector(".btn-next")

//#region obsługa buttona prevSlide

function prevSlide() {
    let prevSib, prevBtn
    for (let s of slide) {
        if (s.classList.contains("active-slide")) {
            let atr = `#${s.getAttribute("id")}`
            let sI = document.querySelector(atr)
            prevSib = sI.previousElementSibling
            sI.classList.remove("active-slide")
            if (prevSib === null) {
                prevSib = slide[slide.length - 1]
            }
        }
    }
    prevSib.classList.add("active-slide")
    for (let l of li) {
        if (l.classList.contains("active-btn")) {
            prevBtn = l.previousElementSibling
            l.classList.remove("active-btn")
            if (prevBtn === null) {
                prevBtn = li[li.length - 1]
            }
        }
    }
    prevBtn.classList.add("active-btn")
}

btnPrev.addEventListener("click", prevSlide)

//#endregion

//#region obsługa buttona nextSlide
function nextSlide() {
    let nextSib, nextBtn
    for (let s of slide) {
        if (s.classList.contains("active-slide")) {
            let atr = `#${s.getAttribute("id")}`
            let sI = document.querySelector(atr)
            nextSib = sI.nextElementSibling
            sI.classList.remove("active-slide")
            if (nextSib === null) {
                nextSib = slide[0]
            }
        }
    }
    nextSib.classList.add("active-slide")
    for (let l of li) {
        if (l.classList.contains("active-btn")) {
            nextBtn = l.nextElementSibling
            l.classList.remove("active-btn")
            if (nextBtn === null) {
                nextBtn = li[0]
            }
        }
    }
    nextBtn.classList.add("active-btn")
}
btnNext.addEventListener("click", nextSlide)

//#endregion

//automatyzacja slidera przełącza się co 10s - wykorzystuje funckję nextSlide
// setInterval(nextSlide, 10000) 