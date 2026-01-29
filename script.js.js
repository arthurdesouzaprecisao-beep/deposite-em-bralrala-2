const btn = document.getElementById("btn-entrar");
const telaInicial = document.getElementById("tela-inicial");
const telaAniversario = document.getElementById("tela-aniversario");

btn.addEventListener("click", () => {
    telaInicial.style.display = "none";
    telaAniversario.classList.remove("hidden");
    iniciarConfete();
});

// Confete simples
function iniciarConfete() {
    const canvas = document.getElementById("confete");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const confetes = [];

    for (let i = 0; i < 150; i++) {
        confetes.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 6 + 4,
            d: Math.random() * 20,
            color: `hsl(${Math.random() * 360}, 100%, 50%)`
        });
    }

    function animar() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        confetes.forEach(c => {
            ctx.beginPath();
            ctx.fillStyle = c.color;
            ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
            ctx.fill();

            c.y += Math.cos(c.d) + 1 + c.r / 2;
            c.x += Math.sin(c.d);

            if (c.y > canvas.height) {
                c.y = -10;
                c.x = Math.random() * canvas.width;
            }
        });

        requestAnimationFrame(animar);
    }

    animar(); // ✅ ISSO ERA O QUE FALTAVA
}
