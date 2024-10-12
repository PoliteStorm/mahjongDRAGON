document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    
    // Create floating particles
    for (let i = 0; i < 50; i++) {
        createParticle();
    }

    // Animate background on mouse move
    body.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        body.style.background = `radial-gradient(circle at ${x * 100}% ${y * 100}%, #1a1a1a, #000)`;
    });
});

function createParticle() {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.top = Math.random() * 100 + 'vh';
    particle.style.transform = `scale(${Math.random()})`;
    particle.style.opacity = Math.random();
    document.body.appendChild(particle);

    animateParticle(particle);
}

function animateParticle(particle) {
    const animation = particle.animate(
        [
            { transform: 'translate(0, 0) rotate(0deg)', opacity: Math.random() },
            { transform: `translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
        ],
        {
            duration: Math.random() * 3000 + 2000,
            easing: 'ease-out',
            iterations: Infinity
        }
    );

    animation.onfinish = () => {
        particle.remove();
        createParticle();
    };
}
