# Slider 2.0 (carousel)

Mój pierwszy projekt slidera!

## Documentation
Projekt został wykonany przy wykorzystaniu następujących technologii:
* html5
* javascript
* css3 / scss

Do projektu zostały dołączone biblioteki:
* Fontawesome (ikony dłoni wskazujących na buttonach)
* Animate.css (do stworzenie animacji przejścia slide-u)

Wykorzystano również czcionki google (google Fonts)

Obrazy pobrane ze strony: https://pixabay.com/pl/

Projekt można zautomatyzować w pliku `slider.js`, na samym dole strony znajduje się linia
```javascript
// setInterval(nextSlide, 10000)
```
oznacza ona, że slide będzie zmieniany automatycznie co 10s (10s = 10000ms), wystarczy usunąć ukośne kreski z początku linii i dopasować czas zamiany zmieniając drugi parametr.

## Installation
Żeby użyć slidera należy podłączyć pliki css oraz js do strony:
```html
css: <link rel="stylesheet" href="./style/style.css">

js:  <script type = "module" src="script-slider.js" defer></script>
```
do prawidłowego działania przejść oraz prawidłowego wyświetlania czcionek, w sekcji head dokumentu index.html należy dodać następujące wpisy:
```html
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"> 

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css"> 

<link href="https://fonts.googleapis.com/css2?family=Fondamento:ital@0;1&display=swap" rel="stylesheet">
```
z pliku html skopiować do swojej strony kontener o klasie `.slider`, zmienić zawartość elementów <article> wg własnych potrzeb.
Żeby zmienić rozmiar Slidera należy w pliku ./style/style.scss pod napisem `//Zmienne`  zmienić wartości, UWAGA: zmieniamy tylko wartości, nazwy zmiennych powinny pozostać takie same. Można również zmienić kolory kropek u dołu slide-u do tego służy `@mixin jsDot`.
Aby wyłączyć kropki należy od komentować odpowiedni kod u góry pliku `style.scss` opisany `//wyłączenie kropek` - nie usuwaj komentarza z opisu, aby usunąć strzałki postępujemy analogicznie usuwając skośne kreski poniżej napisu `//wyłączenie strzałek`

Zawartość slidera zmieniamy w pliku index.html, 1 slide = 1 article.
Do prawidłowego działania należy każdemu nowo dodanemu artykułowi nadać id = "#article + kolejny numer" np. `id = "#article1"`, pozostałe klasy powinny pozostać bez zmian.

**Zmiana tła slide-u:**
Aby zmienić tło należy wewnątrz znacznika article zmienić zawartość znacznika `<img src="./sciezka/obraz.jpg">`, gdzie ścieżka to folder w którym są umieszczone obrazy a obraz.jpg to nazwa pliku z obrazem.
Dla każdego artykułu możemy zrobić to samo.
Aby zostało samo zdjęcie usuwamy z wewnątrz artykułu cały `<div class="slider__content"></div>` 

## Contribute
* Source Code: https://github.com/zabula81/slider.git
* Issue Tracker: https://github.com/zabula81/slider/issues
* View: https://zabula81.github.io/slider/

## Author
Agnieszka Kamińska (agnieszka.kaminska@ksiegarnia.edu.pl)