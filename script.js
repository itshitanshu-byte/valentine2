document.addEventListener("DOMContentLoaded", function () {

    const correctPin = "071125";

    const envelope = document.querySelector('.envelope');
    const heartSeal = document.querySelector('.heart-seal');
    const pinContainer = document.querySelector('.pin-container');
    const pinInput = document.getElementById('pinInput');
    const errorMsg = document.getElementById('errorMsg');

    let timeoutId;

    /* ================= PIN SYSTEM ================= */

    window.checkPin = function () {
        if (pinInput.value === correctPin) {
            pinContainer.style.display = "none";
            envelope.style.display = "block";
        } else {
            errorMsg.textContent = "Wrong PIN 💔 Try again!";
        }
    };

    // Press Enter to unlock
    pinInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            checkPin();
        }
    });

    /* ================= ENVELOPE HOVER LOGIC ================= */

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

    /* ================= FLOATING HEARTS ================= */

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
