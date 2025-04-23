const marqueeElement = document.querySelector('.marquee');

// Настройка скорости (меньше значение — быстрее движение)
let speedFactor = 10; // Скорость передвижения в секундах

// Применяем длительность анимации
marqueeElement.style.animationDuration = `${speedFactor}s`;