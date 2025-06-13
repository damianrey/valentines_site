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

        const seconds = Math.floor(diff / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        const months = Math.floor(days / 30.44); // Média de dias por mês
        const years = Math.floor(days / 365.25); // Média de dias por ano

        let timeString = 'Estamos juntos há ';
        if (years > 0) {
            timeString += `${years} ano${years > 1 ? 's' : ''}, `;
        }
        if (months % 12 > 0) {
            timeString += `${months % 12} mês${months % 12 > 1 ? 'es' : ''} e `;
        }
        timeString += `${days % 30} dia${days % 30 > 1 ? 's' : ''} de muito amor!`;

        timeTogetherElement.textContent = timeString;
    }

    updateTimeTogether();
    setInterval(updateTimeTogether, 1000 * 60 * 60 * 24); // Atualiza a cada dia

    // Botão Revelar Mensagem
    revealMessageBtn.addEventListener('click', () => {
        messageContainer.classList.toggle('hidden');
        if (!messageContainer.classList.contains('hidden')) {
            // Efeito de confete ao revelar a mensagem
            for (let i = 0; i < 50; i++) {
                const confetti = document.createElement('div');
                confetti.classList.add('confetti');
                confetti.style.left = `${Math.random() * 100}vw`;
                confetti.style.animationDuration = `${Math.random() * 2 + 1}s`;
                confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
                document.body.appendChild(confetti);
                confetti.addEventListener('animationend', () => {
                    confetti.remove();
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
    ];

    photos.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = 'Nossas fotos';
        photoGallery.appendChild(img);
    });
});

