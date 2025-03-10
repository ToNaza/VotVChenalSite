async function sendData(message) {
    try {
        return await fetch(`https://api.telegram.org/bot8015602492:AAGnRoDWNp2edl2nfZJ2IfUT3H1gMIgDSO0/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: -1002496239299,
                text: message
            }),
        });
    } catch (error) {
        console.error("Ошибка отправки:", error);
    }
}

const form = document.getElementById("complaintForm");
const nickname = document.getElementById("nickname");
const complaintAgainst = document.getElementById("complaintAgainst");
const description = document.getElementById("description");
const submitBtn = document.getElementById("submitBtn");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (nickname.value.trim() === "" || complaintAgainst.value.trim() === "" || description.value.trim() === "") {
        window.alert("⚠️ Заполните все поля перед отправкой!");
        return;
    }

    let message = `📌 Жалоба\n👤 Отправитель: ${nickname.value}\n⚠️ На кого: ${complaintAgainst.value}\n📝 Описание: ${description.value}`;

    sendData(message)
        .then(response => response.json())
        .then(data => {
            console.log("Ответ от Telegram:", data);
            window.alert("✅ Жалоба успешно отправлена!");
            submitBtn.disabled = true; // Блокируем кнопку после отправки
            submitBtn.textContent = "Отправлено";
        })
        .catch(error => console.error("Ошибка:", error));
});