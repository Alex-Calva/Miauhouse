
    // Mostrar/ocultar botón al hacer scroll
    window.addEventListener('scroll', function() {
        const backToTopButton = document.getElementById('back-to-top');
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });

    // Función para volver arriba
    document.getElementById('back-to-top').addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });


        // Carrusel automático
        let currentIndex = 0;
        const carouselInner = document.getElementById('carouselInner');
        const items = document.querySelectorAll('.carousel-item');
        const totalItems = items.length;

        function moveCarousel() {
            currentIndex = (currentIndex + 1) % totalItems;
            carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
        }

        setInterval(moveCarousel, 4000);

        // Smooth scroll
        document.querySelectorAll('nav a').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            });
        });

        // Validación de formulario
        const form = document.querySelector('.contact-form');
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = form.querySelector('.submit-btn');
            submitBtn.textContent = 'Enviando...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.textContent = '✓ Mensaje Enviado';
                submitBtn.style.backgroundColor = '#4CAF50';
                form.reset();
                
                setTimeout(() => {
                    submitBtn.textContent = 'Enviar Mensaje';
                    submitBtn.style.backgroundColor = '#2A5C8B';
                    submitBtn.disabled = false;
                }, 2000);
            }, 1500);
        });
