let slides = document.getElementsByClassName("slide");
let nextBtn = document.getElementById("nextBtn");
let currentIndex = 0;


for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}
slides[0].style.display = "block";

nextBtn.onclick = function () {
    slides[currentIndex].style.display = "none";
    currentIndex = currentIndex + 1;
    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }
    slides[currentIndex].style.display = "block";
};
