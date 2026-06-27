const menuBtn = document.getElementById("menu-btn");
const siteNav = document.getElementById("site-nav");

menuBtn.addEventListener("click", function() {
    siteNav.classList.toggle("active");
});

const navLinks = document.querySelectorAll(".site-nav ul li a");
navLinks.forEach(link => {
    link.addEventListener("click", function() {
        if(siteNav.classList.contains("active")) {
            siteNav.classList.remove("active");
        }
    });
});

if(document.getElementById("sendBtn")) {
    document.getElementById("sendBtn").addEventListener("click", function() {
        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const messageInput = document.getElementById("message");
        const formMessage = document.getElementById("formMessage");

        formMessage.textContent = "";
        formMessage.style.color = "red";

        let errors = [];

        if(nameInput.value.trim() === "") errors.push("Ad alanı boş olamaz.");
        if(emailInput.value.trim() === "") errors.push("E-posta alanı boş olamaz.");
        if(messageInput.value.trim() === "") errors.push("Mesaj alanı boş olamaz.");

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(emailInput.value && !emailPattern.test(emailInput.value)) {
            errors.push("Lütfen geçerli bir e-posta adresi girin.");
        }

        if(nameInput.value.length > 50) errors.push("Ad alanı 50 karakterden uzun olamaz.");
        if(emailInput.value.length > 100) errors.push("E-posta alanı 100 karakterden uzun olamaz.");
        if(messageInput.value.length > 500) errors.push("Mesaj alanı 500 karakterden uzun olamaz.");

        if(errors.length > 0) {
            formMessage.innerHTML = errors.join("<br>");
        } else {
            formMessage.style.color = "green";
            formMessage.textContent = "Mesajınız alındı! Teşekkürler.";
            formMessage.style.fontWeight = "bold";

            nameInput.value = "";
            emailInput.value = "";
            messageInput.value = "";
        }
    });
}
