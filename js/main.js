// alert("hello world");
// console.log("hello world");
// console.log("hello"+" amis");
// var ageManal =22 +"ans";
// var nomManal="Janah";
// var adresseManal="rue de ciplet 14";
// var codepostaleManal = 1020;
// console.log(ageManal);
// console.log(adresseManal);
// console.log(codepostaleManal , nomManal);
// var a = 5;
// var b = 12;
// var c = a + b;
// console.log("le résultat de a+b vaut", c);


// var note_maths=11;
// var note_français=9;
// var note_hg=16;
// var moyenne = (note_maths + note_français+ note_hg)/3;
// console.log("la moyenne est de "+ moyenne);

// var nomEtudiant ="Janah";
// var prenomEtudiant="Manal";

// console.log("Bonjour,je m'appelle" , nomEtudiant,prenomEtudiant);


// "capturer élément html sur lequel je vais faire l'action"
// var burgerMenu = document.querySelector('.ma-boite');
// var mybody = document.querySelector('body')
// burgerMenu.addEventListener('click',function() {
//     mybody.classList.toggle("background");
// });












var petiteBoite = document.querySelector('.burger-menu');
var body= document.querySelector('body'); 
petiteBoite.addEventListener("click" ,function() {
    body.classList.toggle("isActive"); 
});
   



