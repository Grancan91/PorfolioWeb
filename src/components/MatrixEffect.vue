<template>
  <div>
    <canvas id="matrixCanvas"></canvas>
  </div>
</template>

<script>
export default {
  mounted() {
    this.setupMatrixEffect();
  },
  methods: {
    setupMatrixEffect() {
      const canvas = document.getElementById("matrixCanvas");
      const ctx = canvas.getContext("2d");

      // Variables de configuración
      const characters = "0 1".split(" ");
      const fontSize = 15; // Tamaño de la fuente
      let columns = 0; // Número de columnas
      let drops = []; // Array de gotas

      // Función para ajustar el tamaño del canvas y recalcular las columnas
      const updateCanvasSize = () => {
        canvas.width = window.innerWidth;
        canvas.height = document.documentElement.scrollHeight; // Altura completa del documento
        columns = Math.floor(canvas.width / (fontSize * 3)); // Menos columnas
        drops = Array(columns).fill(1).map(() => Math.floor(Math.random() * canvas.height)); // Inicializa gotas aleatorias
      };

      // Llamar a la función de actualización del tamaño al principio
      updateCanvasSize();

      // Función para dibujar el efecto Matrix
      const drawMatrix = () => {
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)"; // Fondo con baja opacidad
        ctx.fillRect(0, 0, canvas.width, canvas.height); // Limpiar el canvas

        ctx.fillStyle = "rgba(0, 255, 255, 0.5)"; // Color verde-azulado con opacidad
        

        ctx.font = `${fontSize}px monospace`;

        for (let i = 0; i < drops.length; i++) {
          const text = characters[Math.floor(Math.random() * characters.length)];
          ctx.fillText(text, i * fontSize * 3, (drops[i] * fontSize)); // Posición dinámica de las gotas

          // Reinicia las gotas cuando llegan al fondo
          if (drops[i] * fontSize > canvas.height && Math.random() > 0.98) {
            drops[i] = 0;
          }

          drops[i]++; // Desplazar cada gota
        }
      };

      // Manejo del scroll
      let scrollOffset = 0;
      const handleScroll = () => {
        scrollOffset = window.scrollY * 0.1; // Ajustar la velocidad del scroll
      };

      // Actualización de las columnas al redimensionar
      window.addEventListener("resize", updateCanvasSize);
      window.addEventListener("scroll", handleScroll);

      // Iniciar la animación
      setInterval(drawMatrix, 100); // Animación más fluida y menos rápida

      // Asegurarse de que el canvas se redimensione correctamente al cargar
      window.addEventListener("load", updateCanvasSize);
    }
  }
};
</script>

<style scoped>


#matrixCanvas {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;
  opacity: 0.2;
  /* Baja opacidad para no interferir demasiado */
  pointer-events: none;
}
</style>