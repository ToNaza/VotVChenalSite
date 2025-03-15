const modal2 = document.getElementById("modal2");
const openModal2 = document.getElementById("openModal2");
const closeModal2 = document.getElementById("modal2");
const modal3 = document.getElementById("modal3");
const openModal3 = document.getElementById("openModal3");
const closeModal3 = document.getElementById("closeModal3");
const professionSelect = document.getElementById("profession");

openModal2.addEventListener("click", function() {
    modal2.style.display = "flex";
});

closeModal2.addEventListener("click", function() {
    modal2.style.display = "none";
});

window.addEventListener("click", function(event) {
    if (event.target === modal2) {
        modal2.style.display = "none";
    }
    if (event.target === modal3) {
        modal3.style.display = "none";
    }
});

openModal3.addEventListener("click", function() {
    modal3.style.display = "flex";
});

closeModal3.addEventListener("click", function() {
    modal3.style.display = "none";
});

document.querySelectorAll(".box").forEach(box => {
    box.addEventListener("click", function() {
        const professionText = this.querySelector("p").textContent.trim(); // Получаем название профессии
        professionSelect.value = professionText; // Устанавливаем в select
        
        modal3.style.display = "flex"; // Открываем модальное окно
    });
});











