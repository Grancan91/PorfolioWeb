const canvas = document.createElement("canvas");
canvas.id = "matrixCanvas";
document.body.appendChild(canvas);
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const characters = "0 1".split(" ");
const fontSize = 20; // Tamaño de la fuente
const columns = Math.floor(canvas.width / (fontSize * 1.5)); // Número de columnas
const drops = Array(columns).fill(1);

// Inicializar las gotas en posiciones aleatorias
const initialDropPositions = Array(columns).fill(0).map(() => Math.random() * canvas.height);

let scrollOffset = 0; // Variable para el desplazamiento

function drawMatrix() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.15)"; // Más opacidad para borrar más rápido
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#0ff"; // Color verde-azulado futurista
  ctx.font = `${fontSize}px monospace`;

  for (let i = 0; i < drops.length; i++) {
    const text = characters[Math.floor(Math.random() * characters.length)];

    // Usamos la posición inicial y aplicamos desplazamiento y el movimiento gradual
    ctx.fillText(text, i * fontSize * 1.5, (initialDropPositions[i] + (drops[i] * fontSize)) - scrollOffset);

    if ((drops[i] * fontSize + initialDropPositions[i]) > canvas.height && Math.random() > 0.98) {
      // Reseteo de gotas en posiciones aleatorias para un efecto más dinámico
      initialDropPositions[i] = Math.random() * canvas.height;
      drops[i] = 0;
    }

    drops[i]++;
  }
}

function handleScroll() {
  scrollOffset = window.scrollY * 0.2; // Ajustar la velocidad de movimiento con el scroll
}

window.addEventListener("scroll", handleScroll);

setInterval(drawMatrix, 80); // Intervalo para la animación

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Recalcular las columnas cuando se redimensiona
  const columns = Math.floor(canvas.width / (fontSize * 1.5));
  drops.length = columns;
  initialDropPositions.length = columns;
  drops.fill(1);
  initialDropPositions.fill(0).map(() => Math.random() * canvas.height);
});
