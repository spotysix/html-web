/* only execute this script when the document is ready */
$(document).ready(function(){
  $("li").hide();
/* function called when you click of the button */
$("boton").click(function(){
    
    /* this if else to change the text in the button */
    if($("boton").text() == "🞬"){
    $("boton").text("☰");
    }else{
      $("boton").text("🞬");
    }
  
  /* this function toggle the visibility of our "li" elements */
  $("li").toggle("slow");
  });
});

let actualLanguage = 'es'; // Idioma per defecte

function setLanguaje(newLanguage) {
  const oldLanguageElements = document.getElementsByClassName(actualLanguage);
  
  for (element of oldLanguageElements) {   
      element.style.display = 'none';
  }

  actualLanguage = newLanguage;

  const newLanguageElements = document.getElementsByClassName(actualLanguage);
  for (element of newLanguageElements) {
      element.style.display = 'inline';
  }

  // Si canviem l'idioma per la URL, necessitem e codi següent
  const newURL = window.location.protocol + '//' + window.location.host + window.location.pathname + '?lang=' + actualLanguage;
  window.history.replaceState({}, '', newURL);
}


// El següent codi es per obtenir l'idioma per la URL

const querystring = window.location.search; // Si la url és: https://miweb.es?lang=es , retorna ?lang=es
let urlParams = new URLSearchParams(querystring);

if (urlParams.get('lang')) actualLanguage = urlParams.get('lang');

const espLanguage = document.getElementsByClassName('es');
const enLanguage = document.getElementsByClassName('en');



if (actualLanguage === 'en') {
  for(element of enLanguage) {
      element.style.display = 'inline';

      }
  for(element of espLanguage){
      element.style.display = 'none';
  }
} else if (actualLanguage === 'es') {

  for(element of enLanguage) {
      element.style.display = 'none';
  }
  for(element of espLanguage){
      element.style.display = 'inline';
  }
}


$(document).ready(function(){
    $('.zoom').hover(function() {
        $(this).addClass('transition');
    }, function() {
        $(this).removeClass('transition');
    });
});


$('audio').on('play', function () { //cuando un audio empieza a reproducirse
  var current=this;
  $('audio').each(function() { 
    if (this!== current) { //todos los demás
      this.pause();  //los pausamos
    }
   });
});