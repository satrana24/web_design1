// Инициализация EmailJS
(function () {
    emailjs.init({
        publicKey: "vB9pUYhlYm9VNFBf6",
    });
})();

// Получение формы обратной связи
const feedbackForm = document.getElementById("feedback-form");
const feedbackStatus = document.getElementById("feedback-status");

// Обработка отправки формы
feedbackForm.addEventListener("submit", function (event) {
    event.preventDefault();

    feedbackStatus.textContent = "Отправка сообщения...";

    emailjs.sendForm(
        "service_ffdzoh8",
        "template_ahj50ov",
        feedbackForm
    )
    .then(function () {
        feedbackStatus.textContent = "Сообщение успешно отправлено!";
        feedbackForm.reset();
    })
    .catch(function (error) {
        feedbackStatus.textContent =
            "Не удалось отправить сообщение. Попробуйте ещё раз.";

        console.error("Ошибка отправки:", error);
    });
});
