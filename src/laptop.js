const canvas = document.createElement("canvas");
canvas.id = "floatingShapesCanvas";
document.body.appendChild(canvas);
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Definir algunas propiedades para las formas
const shapes = [];
const numShapes = 50; // Número de formas a crear
const shapeSize = 30; // Tamaño de las formas

// Clase para representar una forma
class Shape {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = shapeSize;
    this.speedX = (Math.random() - 0.5) * 2; // Velocidad en el eje X
    this.speedY = (Math.random() - 0.5) * 2; // Velocidad en el eje Y
    this.color = `hsl(${Math.random() * 360}, 100%, 50%)`; // Color aleatorio
    this.type = Math.random() > 0.5 ? 'circle' : 'square'; // Forma aleatoria
  }

  // Método para mover la forma
  move() {
    this.x += this.speedX;
    this.y += this.speedY;

    // Rebotar si se sale de los límites de la pantalla
    if (this.x <= 0 || this.x >= canvas.width) {
      this.speedX = -this.speedX; // Cambiar dirección en el eje X
    }
    if (this.y <= 0 || this.y >= canvas.height) {
      this.speedY = -this.speedY; // Cambiar dirección en el eje Y
    }
  }

  // Método para dibujar la forma
  draw() {
    ctx.fillStyle = this.color;
    if (this.type === 'circle') {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    } else if (this.type === 'square') {
      ctx.fillRect(this.x - this.size / 2, this.y - this.size / 2, this.size, this.size);
    }
  }
}

// Crear las formas
for (let i = 0; i < numShapes; i++) {
  shapes.push(new Shape());
}

// Función de animación
function animate() {
  // Limpiar el fondo
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Mover y dibujar cada forma
  shapes.forEach(shape => {
    shape.move();
    shape.draw();
  });

  // Llamar de nuevo a la animación
  requestAnimationFrame(animate);
}

// Iniciar la animación
animate();

// Ajustar el tamaño del canvas al redimensionar la ventana
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});