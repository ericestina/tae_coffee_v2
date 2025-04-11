window.onload = function (){
    const name = prompt("For a personalized experience on our website, please enter your name:");

    if(name && name.trim() !== "" ){
        const welcomeElement1 = document.getElementById("welcome");
        welcomeElement1.textContent =`${name.trim()}, WELCOME TO TAE COFFEE!`;
        input.value = "";
    }
};


let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

function moveSlide(step) {
  currentSlide = (currentSlide + step + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Show the first slide initially
showSlide(currentSlide);

