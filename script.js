// ==========================
// DARK / LIGHT MODE
// ==========================

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.textContent = "☀️";
    } else {
        themeBtn.textContent = "🌙";
    }

});


// ==========================
// CONTACT FORM
// ==========================

const form = document.getElementById("contactForm");
const result = document.getElementById("result");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        result.textContent = "Vui lòng nhập đầy đủ thông tin!";
        return;
    }

    result.textContent =
        "Cảm ơn " + name + "! Tin nhắn của bạn đã được ghi nhận. 🚀";

    form.reset();

});