# Slider 2.0 (carousel)

My first slider project!

## Documentation
The project was made using the following technologies:
* html5
* javascript
* css3 / scss

The following libraries were attached to the project:
* Fontawesome (icons of the hands pointing to the buttons)
* Animate.css (to create an animation of the slide transition)

Google fonts were also used.

Images downloaded from the site: https://pixabay.com/pl/

The project can be automated in the `slider.js` file, there is a line at the bottom of the page
```javascript
// setInterval(nextSlide, 10000)
```
it means that the slide will be changed automatically every 10s (10s = 10000ms), just remove the diagonal lines from the beginning of the line and adjust the swap time by changing the second parameter.

## Installation
To use the slider, you need to connect css and js files to the page:
```html
css: <link rel="stylesheet" href="./style/style.css">

js:  <script type = "module" src="slider.js" defer></script>
```
for the correct operation of transitions and the correct display of fonts, the following entries should be added in the head section of the index.html document:
```html
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"> 

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css"> 

<link href="https://fonts.googleapis.com/css2?family=Fondamento:ital@0;1&display=swap" rel="stylesheet">
```
copy a container with the class `.slider` from the html file to your website, change the content of <article> elements according to your needs.
To change the size of the Slider, change the values in the ./style/style.scss file under the inscription `// Variables`, NOTE: we only change the values, the variable names should remain the same. You can also change the colors of the dots at the bottom of the slide, that's what `@mixin jsDot` is for.
To disable the dots, comment the appropriate code at the top of the `style.scss` file described as` // disable dots` - do not remove the comment from the description, to remove the arrows, proceed in the same way by removing the slanting lines below the `// disable arrows`Zawartość slidera zmieniamy w pliku index.html, 1 slide = 1 article.
For proper operation, each newly added article should be given id = "#article + sequential number", eg `id =" # article1 "`, other classes should remain unchanged.

**Change slide background: **
To change the background, inside the article tag, change the content of the `<img src =" ./ path / image.jpg ">` tag, where path is the folder where the images are placed and image.jpg is the name of the image file.
We can do the same for each article.
To keep the photo only, remove the entire `<div class =" slider__content "> </div>` from inside the article.

## Contribute
* Source Code: https://github.com/frontendagnes/slider.git
* Issue Tracker: https://github.com/frontendagnes/slider/issues
* View: https://frontendagnes.github.io/slider/

## Author
Agnieszka Kamińska (agnieszka.kaminska@ksiegarnia.edu.pl)

### Other

The Polish version of this document is available in the README-PL.md file. (Polska wersja tego dokumentu znajduje się w pliku READMEPL.md. )

Document translated with google translator.

