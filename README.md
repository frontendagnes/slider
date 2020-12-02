# Slider 2.0 (karuzela)
## Documentation
Projekt został wykonany przy wykorzystaniu nstepujących technoligii:
* html5
* javascript
* css3

Do projektu zostały dołączone biblioteki:
* Fontawesome (ikony dłoni wskazujących na buttonach)
* Animate.css (do stworzenie animacji przejścia slide-u)

Wykorzystano również czcionki google (google Fonts)

Obrazy pobrane ze strony: https://pixabay.com/pl/

Projekt można zautomatyzować w pliku script-slider.js na samym dole strony znajduje się linia

// setInterval(nextSlide, 10000) 
oznacza ona, że slaid będzie zmieniany automatycznie co 10s (10s = 10000ms), wystarczy usunąć ukośne linie z początku lini i dopasować czas zamiany zmieniając drugi parametr.

## Installation
Żeby użyć slidera należy podłączyć pliki css oraz js do strony:

css: link rel="stylesheet" href="style-slider.css"

js:  < script type = "module" src="script-slider.js" defer></ script>

do prawidłówego działania przejść oraz prawidłowego wyswietlania czcionek, w sekcji head dokumentu .html należy dodać następujące wpisy:
* link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"
* link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css"
* link href="https://fonts.googleapis.com/css2?family=Fondamento:ital@0;1&display=swap" rel="stylesheet"

z pliku html skopiować do swojej strony kontenr o klasie .slider, zmienić zawratość elementów article wg własnych potrzeb.
Żeby zmienińć rozmiar Slidera należy w pliku style-slider.css na samej górze w elemencie :root zmienić wartości.

Do prawidłowego działania należy każdemu nowo dodanemu artykułowi nadać id = "article + kolejny numer"

## Contribute
* Source Code: https://github.com/zabula81/slider.git
* Issue Tracker: https://github.com/zabula81/slider/issues
* View: https://zabula81.github.io/slider/

# License

## autor
Agnieszka Kamińska (agnieszka.kaminska@ksiegarnia.edu.pl)

