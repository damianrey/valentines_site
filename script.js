document.addEventListener('DOMContentLoaded', () => {
    const startDate = new Date('2022-08-12T00:00:00'); // Data de início do namoro
    const timeTogetherElement = document.getElementById('time-together');
    const revealMessageBtn = document.getElementById('reveal-message-btn');
    const messageContainer = document.getElementById('message-container');
    const loveMessageElement = document.getElementById('love-message');
    const secretMessageArea = document.querySelector('.secret-message-area');
    const secretText = document.querySelector('.secret-text');

    // Mensagem carinhosa (EDITAR AQUI)
    loveMessageElement.textContent = 'Minha querida, cada dia ao seu lado é um presente. Você ilumina minha vida e me faz a pessoa mais feliz do mundo. Te amo mais que tudo!';

    // Função para calcular e exibir o tempo de namoro
    function updateTimeTogether() {
        const now = new Date();
        const diff = now.getTime() - startDate.getTime();

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const years = Math.floor(days / 365.25);
        const remainingDaysAfterYears = days % 365.25;
        const months = Math.floor(remainingDaysAfterYears / 30.44);
        const remainingDays = Math.floor(remainingDaysAfterYears % 30.44);

        let timeString = 'Estamos juntos há ';
        if (years > 0) {
            timeString += `${years} ano${years > 1 ? 's' : ''}`;
        }
        if (months > 0) {
            timeString += `${years > 0 ? ', ' : ''}${months} m${months > 1 ? 'eses' : 'ês'}`;
        }
        if (remainingDays > 0) {
            timeString += `${(years > 0 || months > 0) ? ' e ' : ''}${remainingDays} dia${remainingDays > 1 ? 's' : ''}`;
        }
        timeString += ' de muito amor!';

        timeTogetherElement.textContent = timeString;
    }

    updateTimeTogether();
    setInterval(updateTimeTogether, 1000 * 60 * 60 * 24); // Atualiza a cada dia

    // Botão Revelar Mensagem
    revealMessageBtn.addEventListener('click', () => {
        messageContainer.classList.toggle('hidden');
        if (!messageContainer.classList.contains('hidden')) {
            // Efeito de corações ao revelar a mensagem
            for (let i = 0; i < 30; i++) { // Diminuí para 30 para um efeito mais sutil
                const heart = document.createElement('div');
                heart.classList.add('heart'); // USA A NOVA CLASSE 'heart'
                
                // Posição e cores aleatórias
                heart.style.left = `${Math.random() * 100}vw`;
                heart.style.animationDuration = `${Math.random() * 2 + 3}s`; // Duração entre 3s e 5s
                
                // Para o coração ter a forma correta, a cor é definida no CSS.
                // Mas podemos variar a cor aqui se quisermos corações de cores diferentes.
                // Ex: heart.style.setProperty('--heart-color', `hsl(${Math.random() * 360}, 90%, 60%)`);
                // Isso exigiria mudar o 'background-color' no CSS para 'var(--heart-color)'.

                document.body.appendChild(heart);
                
                // Remove o coração da DOM após a animação terminar
                heart.addEventListener('animationend', () => {
                    heart.remove();
                });
            }
        }
    });

    // Mensagem Secreta
    secretMessageArea.addEventListener('mouseenter', () => {
        secretText.classList.remove('hidden');
    });

    secretMessageArea.addEventListener('mouseleave', () => {
        secretText.classList.add('hidden');
    });

    secretMessageArea.addEventListener('click', () => {
        secretText.classList.toggle('hidden');
    });

    // Galeria de Fotos (Adicionar as imagens aqui)
    const photoGallery = document.querySelector('.photo-gallery');
    const photos = [
        './images/1000087050.jpg',
        './images/1000079682.jpg',
        './images/1000077244.jpg'
        // Adicione mais fotos aqui se desejar
    ];

    photos.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = 'Nossas fotos';
        photoGallery.appendChild(img);
    });
});