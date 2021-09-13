$(document).ready(function() 

{

  $(this).scrollTop(0);
  
  
document.querySelectorAll(".siteNav__listItem--link").forEach(function(element) {
	document.getElementById('burger').addEventListener('click', function() {
		
    if (element.classList.contains('slidein')) {
      element.classList.remove('slidein');
    } 
    
    else {
      element.classList.add('slidein');
    }
  	});
});






document.getElementById('burger').addEventListener('click', function () {

  if (document.getElementsByClassName('siteNav')[0].classList.contains('show')) {
   document.getElementsByClassName('siteNav')[0].classList.remove('show');


  } else {
    document.getElementsByClassName('siteNav')[0].classList.add('show');

  }
});



console.log('hi');


// var list = document.getElementById('siteNav__listItem');

// document.querySelectorAll(".siteNav__listItem").forEach(function(element) {
// 	document.getElementById('burger').addEventListener('click', function() {
		
//     list.classList.add('transit');
//   	});
// });






// const scrollElements = document.querySelectorAll(".square");

// const elementInView = (el, percentageScroll = 100) => {
//   const elementTop = el.getBoundingClientRect().top;
 
//   return (
//     elementTop <= 
//     ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll/100))
//   );
// };


// const displayScrollElement = (element) => {
//   element.classList.add("showup");
// };

// const handleScrollAnimation = () => {
//   scrollElements.forEach((el) => {
//     if (elementInView(el, 1.25)) {
//       displayScrollElement(el);
//     }

//     else  {
//       console.log('hi');
//     }
//     }
//   )}


// window.addEventListener("scroll", () => { 
//   handleScrollAnimation();
// });














// Detect request animation frame
var scroll = window.requestAnimationFrame ||
             // IE Fallback
             function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.transit'); 

function loop() {

  elementsToShow.forEach(function (element) {
    if (isElementInViewport(element)) {
      element.classList.add('is-visible');
    }
  });

  scroll(loop);
}

// Call the loop for the first time
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}



})


