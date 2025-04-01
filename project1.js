// Добавляем обработчики для стрелок
const slidesWrapper = document.querySelector('.slides-wrapper');
const slides = document.querySelectorAll('[class^="review-block"]');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentSlide = 0;

console.log('Найдено слайдов:', slides.length); // Должно быть 2
console.log('Стрелки:', prevButton, nextButton); // Должны быть кнопки

function showSlide(index) {
    console.log('Показываем слайд:', index);
    slides.forEach((slide, i) => {
        const isActive = i === index;
        slide.classList.toggle('active-slide', isActive);
        console.log(`Слайд ${i} активен:`, isActive);
    });
}

prevButton.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});

nextButton.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});

// Инициализация первого слайда
showSlide(0);