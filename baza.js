var versionText = "Alpha";
var versionHistory = [
    { name: "Pre_Alpha", desc: "Создание главной страницы и страницы с информацией" },
    { name: "Pre_Alpha 0.2", desc: "Появление страницы с правилами и фикс некоторых багов" },
    { name: "Pre_Alpha 0.3", desc: "Исправление бага с подвалом сайта" },
    { name: "Alpha", desc: "Исправление незначительных багов, добавление формы жалобы, создание страницы новостей(страница в розработке)" },
    { name: "Alpha 0.2", desc: "Добавление страницы с професиями, попытка исправления некоторых багов" },
    { name: "Alpha 0.3", desc: "Страница с работой завершена" }
];

// Ожидание загрузки DOM перед установкой текста
document.addEventListener("DOMContentLoaded", function () {
    var versionElement = document.getElementById("versionInfo");
    if (versionElement) {
        versionElement.textContent = versionText;
    }
});

// Генерация списка версий в модальном окне
function fillVersionList() {
    var versionListElement = document.getElementById("versionList");
    if (versionListElement) {
        versionListElement.innerHTML = versionHistory
            .map(v => `<b>${v.name}</b> - ${v.desc}`)
            .join("<br><br>");
    }
}

// Открытие и закрытие модального окна
const modal = document.getElementById("modal");
const openModal = document.getElementById("versionInfo");
const closeModal = document.querySelector(".close");

openModal.addEventListener("click", () => {
    fillVersionList();
    modal.style.display = "flex";
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});


openModal.addEventListener("click", () => {
    modal.style.display = "flex";
    setTimeout(() => modal.classList.add("show"), 10);
});

closeModal.addEventListener("click", () => {
    modal.classList.remove("show");
    modal.classList.add("hide");
    setTimeout(() => {
        modal.style.display = "none";
        modal.classList.remove("hide");
    }, 300); // Ждём окончания анимации
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        closeModal.click();
    }
});












