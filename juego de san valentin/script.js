document.getElementById('compatibilityForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario
    const name1 = document.getElementById('name1').value;
    const name2 = document.getElementById('name2').value;

    if (name1 && name2) {
        const compatibility = Math.floor(Math.random() * 100) + 1; // Número al azar entre 1 y 100
        const compatibilityPercentage = compatibility; // Usamos el número aleatorio como porcentaje

        // Redirige a la página de resultados con parámetros en la URL
        window.location.href = `index2.html?name1=${encodeURIComponent(name1)}&name2=${encodeURIComponent(name2)}&compatibility=${compatibilityPercentage}`;
    }
    percentageText.textContent = `Compatibilidad: ${compatibility}%`;
});