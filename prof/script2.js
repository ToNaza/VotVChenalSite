document.addEventListener("DOMContentLoaded", function() {
    async function sendDataToChannel(message) {
        try {
            const response = await fetch(`https://api.telegram.org/bot8015602492:AAGnRoDWNp2edl2nfZJ2IfUT3H1gMIgDSO0/sendMessage`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    chat_id: -1002574805901,
                    text: message
                }),
            });

            const data = await response.json();
            if (data.ok) {
                console.log("Сообщение успешно отправлено:", data);
            } else {
                console.error("Ошибка от Telegram API:", data.description);
            }
            return data;
        } catch (error) {
            console.error("Ошибка при отправке данных:", error);
        }
    }

    const pushBtn = document.getElementById("push");
    const nicknameInput = document.getElementById("nickname");
    const tgUsernameInput = document.getElementById("tgUsername");
    const professionSelect = document.getElementById("profession");

    pushBtn.addEventListener("click", function () {
        if (nicknameInput.value.trim() === "" || tgUsernameInput.value.trim() === "" || professionSelect.value.trim() === "") {
            window.alert("⚠️ Заполните все поля перед отправкой!");
            return;
        }

        let message = `📢 Заявление о роботро устройстве\n\n👤 Ник: ${nicknameInput.value}\n📱 Telegram: ${tgUsernameInput.value}\n🛠 Должность: ${professionSelect.value}`;

        sendDataToChannel(message)
            .then(data => {
                if (data && data.ok) {
                    window.alert("✅ Данные успешно отправлены!");
                    pushBtn.disabled = true;
                    pushBtn.textContent = "Отправлено";
                } else {
                    window.alert("❌ Ошибка при отправке данных.");
                }
            })
            .catch(error => {
                console.error("Ошибка:", error);
                window.alert("❌ Ошибка при отправке данных.");
            });
    });
});
