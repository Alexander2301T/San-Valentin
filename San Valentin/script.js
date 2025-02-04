// Función para crear flores geométricas
function createGeometricFlower() {
    const flower = document.createElement('div');
    flower.className = 'geometric-flower';
    
    // Crear 8 pétalos
    for (let i = 0; i < 8; i++) {
        const petal = document.createElement('div');
        petal.className = 'petal';
        petal.style.transform = `rotate(${i * 45}deg)`;
        flower.appendChild(petal);
    }

    // Posición aleatoria
    flower.style.left = `${Math.random() * 100}vw`;
    flower.style.top = `${Math.random() * 100}vh`;
    
    document.body.appendChild(flower);
    
    // Eliminar la flor después de la animación
    setTimeout(() => {
        flower.remove();
    }, 3000);
}

// Función para crear corazones flotantes
function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.innerHTML = '❤';
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${6 + Math.random() * 4}s`;
    
    document.querySelector('.floating-hearts').appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 6000);
}

// Variables y configuración inicial
let noButtonClickCount = 0;
const noButton = document.getElementById('noButton');
const yesButton = document.getElementById('yesButton');

// Crear flores y corazones periódicamente
setInterval(createGeometricFlower, 300);
setInterval(createFloatingHeart, 500);

// Evento para el botón "No"
noButton.addEventListener('click', () => {
    if (noButtonClickCount < 5) {
        const maxX = window.innerWidth - noButton.offsetWidth;
        const maxY = window.innerHeight - noButton.offsetHeight;
        
        noButton.style.position = 'fixed';
        noButton.style.left = `${Math.random() * maxX}px`;
        noButton.style.top = `${Math.random() * maxY}px`;
        
        noButtonClickCount++;
        noButton.style.transform = `scale(${1 - noButtonClickCount * 0.1})`;
    } else {
        noButton.innerHTML = '¡Sí!';
        noButton.onclick = accept;
    }
});

// Función para aceptar
function accept() {
    document.querySelector('.buttons').style.display = 'none';
    document.getElementById('card').classList.add('visible');
    // Aumentar la frecuencia de flores y corazones
    setInterval(createGeometricFlower, 200);
    setInterval(createFloatingHeart, 300);
}

// Evento para el botón "Sí"
yesButton.addEventListener('click', accept);