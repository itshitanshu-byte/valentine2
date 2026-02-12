document.addEventListener("DOMContentLoaded", function () {

    const envelope = document.querySelector('.envelope');
    const heartSeal = document.querySelector('.heart-seal');
    let timeoutId;

    if (envelope && heartSeal) {
        envelope.addEventListener('mouseover', () => {
            clearTimeout(timeoutId);
            heartSeal.style.opacity = 0;
        });

        envelope.addEventListener('mouseout', () => {
            timeoutId = setTimeout(() => {
                heartSeal.style.opacity = 1;
            }, 1500);
        });

        heartSeal.style.transition = 'opacity 0.3s ease';
    }

    function createFloatingHeart() {
        const heart = document.createElement("div");
        heart.classList.add("floating-heart");
        heart.innerHTML = "❤";

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = (Math.random() * 20 + 15) + "px";
        heart.style.animationDuration = (Math.random() * 3 + 4) + "s";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 7000);
    }

    setInterval(createFloatingHeart, 400);

});
