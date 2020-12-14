const slide = document.querySelectorAll(".js-slide") // łączy z article (pojedynczy slide)
const dotsCnt = document.querySelector(".js-dots") // łączy z kontenerem na kropki
let nr = 0; //zmienna która dodaje numer do kolenjengo sliadu
// tworzy kontener na listę z kropkami
const dots = document.createElement("ul")
dots.classList.add("dots__js-dots")
dotsCnt.appendChild(dots)

//#region  towrzy kropki - tyle ile jest slidów
for (let i = 0; i < slide.length; i++) {
    nr = i + 1
    const dot = document.createElement("li") // tworzy pojedynczą kropkę
    dot.classList.add("dots__js-dot")
    dots.appendChild(dot) // dodaje element <li> do <ul>
    const href = document.createElement("a")
    href.classList.add("dots__js-href-dot")
    href.href = `#article${nr}` // tworzy atrybut href elementu <a> taki sam jak id <article>
    dot.appendChild(href)
}
//#endregion
//#region obsługa kropek
let li = document.querySelectorAll(".dots__js-dot") // łączy z utworzonymi kropkami (elementami <li>)
let link = document.querySelectorAll(".dots__js-href-dot") // łączy z utorzonymi elementami <a> dziećmi elementu <li>
li[0].classList.add("active-dot") // pierwszy element <li> jest widoczny

for (let j = 0; j < link.length; j++) {
    link[j].addEventListener("click", function (e) { //nasłuchuje kliknięcia elementu <a>
        e.preventDefault()
        for (let dot of li) {
            dot.classList.remove("active-dot") // z bieżącej kropki (elementu <li>) usuwa style
        }
        this.parentElement.classList.add("active-dot") // dodaje style do klikniętej kropki (elemntu <li>)

        let linkAttr = this.getAttribute('href') // pobiera atrybut href ze znacznika <a> 
        let sl = document.getElementById(linkAttr) // wykorzystuje pobrany atrybut do połączenia się z <article>
        const parentSlide = sl.parentElement.children // wybiera wszystkie <article>

        for (let art of parentSlide) {
            art.classList.remove("active-slide") // z bieżącego <article> usuwa widoczność
        }
        sl.classList.add("active-slide") // dodaje widoczność do <article> z tą samą klasą co atrybut href klikniętego znacznia <a>
    })
}
//#endregion

let btnPrev = document.querySelector(".btn__prev") // łączy ze strzałką prev
let btnNext = document.querySelector(".btn__next") // łączy ze strzałką next

//#region obsługa buttona prevSlide

function prevSlide() { // obsługa strzałki prev
    let prevSib, prevBtn
    for (let s of slide) { // pętla po wszystkich slidach znacznikach <article>
        if (s.classList.contains("active-slide")) { // sprawdza cz slide zawiera klasę "active-slide"
            let atr = `${s.getAttribute("id")}` // pobiera atrybut id ze znacznika <article>
            let sI = document.getElementById(atr) // łączy sie sie z tym <article>
            prevSib = sI.previousElementSibling // przypisuje do zmiennej poprzednie rodzeństwo
            sI.classList.remove("active-slide") // bieżącemu elementowi usuówa klasę " active-slide"
            if (prevSib === null) { // sprawdza czy poprzedni element był ostatnim (pierwszym)
                prevSib = slide[slide.length - 1] // jeżeli element był ostatni (pierwszy), przypsuje mu pierszy elemen od końca
                // np. pierwszy element to slide[0] ostatni to slide[4]
                // jeżeli prevSib === slide[-1] podmieni jego wartość na slide[4] 
            }
        }
    }
    prevSib.classList.add("active-slide") // jeżeli kliknięty element nie posiada klasy "active-slide" dodaje ją
    for (let l of li) { // analogicznie jak u góry tylko na kropkach
        if (l.classList.contains("active-dot")) {
            prevBtn = l.previousElementSibling
            l.classList.remove("active-dot")
            if (prevBtn === null) {
                prevBtn = li[li.length - 1]
            }
        }
    }
    prevBtn.classList.add("active-dot")
}

btnPrev.addEventListener("click", prevSlide) // dodaje nasłuch na zdarzenie kliknięcia na strzałkę prev
// po kliknięciu wywołuję funkcję prevSlide

//#endregion

//#region obsługa buttona nextSlide
// analogicznie jak w prevSlide tylko nie spradza poprzednie rodzeństo a kolejne
function nextSlide() { 
    let nextSib, nextBtn
    for (let s of slide) {
        if (s.classList.contains("active-slide")) {
            let atr = `${s.getAttribute("id")}`
            let sI = document.getElementById(atr)
            nextSib = sI.nextElementSibling
            sI.classList.remove("active-slide")
            if (nextSib === null) {
                nextSib = slide[0]
            }
        }
    }
    nextSib.classList.add("active-slide")
    for (let l of li) {
        if (l.classList.contains("active-dot")) {
            nextBtn = l.nextElementSibling
            l.classList.remove("active-dot")
            if (nextBtn === null) {
                nextBtn = li[0]
            }
        }
    }
    nextBtn.classList.add("active-dot")
}
btnNext.addEventListener("click", nextSlide) // dodaje nasłuch na zdarzenie kliknięcia na strzałkę next
// po kliknięciu wywołuję funkcję nextSlide

//#endregion

//automatyzacja slidera przełącza się co 4s - wykorzystuje funckję nextSlide
setInterval(nextSlide, 4000); 