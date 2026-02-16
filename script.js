// ===============================
// MENU RESPONSIVO (Mobile Toggle)
// ===============================

const navLinks = document.querySelector("nav");
const toggleBtn = document.createElement("button");

toggleBtn.innerText = "☰";
toggleBtn.style.background = "transparent";
toggleBtn.style.border = "none";
toggleBtn.style.color = "white";
toggleBtn.style.fontSize = "25px";
toggleBtn.style.cursor = "pointer";

document.querySelector("header").appendChild(toggleBtn);

toggleBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// ===============================
// ROLAGEM SUAVE
// ===============================

document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({
            behavior: "smooth"
        });
    });
});

// ===============================
// BOTÃO HERO → SCROLL PARA CONTATO
// ===============================

const heroBtn = document.querySelector(".hero button");

heroBtn.addEventListener("click", () => {
    document.querySelector("#contato").scrollIntoView({
        behavior: "smooth"
    });
});

// ===============================
// CHAT SIMPLES (SIMULAÇÃO)
// ===============================

const chatBox = document.querySelector(".chat-box textarea");
const sendBtn = document.querySelector(".chat-box button");

sendBtn.addEventListener("click", () => {
    if (chatBox.value.trim() === "") {
        alert("Digite uma mensagem antes de enviar.");
        return;
    }

    alert("Mensagem enviada! Em breve entraremos em contato.");
    chatBox.value = "";
});

// ===============================
// ANIMAÇÃO AO ROLAR A PÁGINA
// ===============================

const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (cardTop < windowHeight - 100) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
});

// Inicializa cards invisíveis
cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "all 0.6s ease";
});

// ===============================
// CONTADOR ANIMADO (OPCIONAL)
// ===============================

function animateCounter(id, start, end, duration) {
    let obj = document.getElementById(id);
    let range = end - start;
    let current = start;
    let increment = end > start ? 1 : -1;
    let stepTime = Math.abs(Math.floor(duration / range));

    let timer = setInterval(() => {
        current += increment;
        obj.textContent = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

// Exemplo de uso:
// animateCounter("clientes", 0, 500, 2000);

