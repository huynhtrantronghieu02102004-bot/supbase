// ==========================
// DARK / LIGHT MODE
// ==========================

const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {
    themeBtn.addEventListener("click", function () {
        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            themeBtn.textContent = "☀️";
        } else {
            themeBtn.textContent = "🌙";
        }
    });
}


// ==========================
// CONTACT FORM
// ==========================

const form = document.getElementById("contacts");
const result = document.getElementById("result");

if (form) {
    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Kiểm tra dữ liệu
        if (!name || !email || !message) {
            result.textContent = "Vui lòng nhập đầy đủ thông tin!";
            return;
        }

        // Kiểm tra Gmail
        if (!email.toLowerCase().endsWith("@gmail.com")) {
            result.textContent = "Vui lòng nhập đúng địa chỉ Gmail!";
            return;
        }

        // Trạng thái đang gửi
        result.textContent = "Đang gửi tin nhắn...";

        try {
            // Gửi dữ liệu vào Supabase
            const { data, error } = await supabaseClient
                .from("contacts")
                .insert([
                    {
                        name: name,
                        email: email,
                        message: message
                    }
                ])
                .select();

            // Nếu Supabase báo lỗi
            if (error) {
                console.error("Supabase error:", error);

                result.textContent =
                    "Lỗi Supabase: " +
                    error.message +
                    " | Code: " +
                    error.code;

                return;
            }

            // Thành công
            console.log("Dữ liệu đã lưu:", data);

            result.textContent =
                "Cảm ơn " + name + "! Tin nhắn đã được gửi thành công 🚀";

            // Xóa dữ liệu trong form
            form.reset();

        } catch (error) {
            console.error("JavaScript error:", error);

            result.textContent =
                "Có lỗi xảy ra. Vui lòng thử lại!";
        }
    });
}