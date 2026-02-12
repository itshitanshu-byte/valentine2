/* ===============================
   PIN SYSTEM
================================= */

function checkPin() {
    const correctPin = "071125"; // 🔐 Your secret PIN
    const userPin = document.getElementById("pinInput").value;
    const errorMsg = document.getElementById("errorMsg");

    if (userPin === correctPin) {
        document.querySelector(".pin-container").style.display = "none";
        document.querySelector(".envelope").style.display = "grid";
    } else {
        errorMsg.textContent = "Wrong PIN 💔 Try again!";
    }
}

/* Allow Enter key to unlock */
document.addEventListener("DOMContentLoaded", function () {
    const pinInput = document.getElementById("pinInput");

    if (pinInput) {
        pinInput.addEventListener("keypress", function (e) {
            if (e.key === "Enter") {
                checkPin();
            }
        });
    }

    /* ===============================
       ENVELOPE HOVER LOGIC
    ================================= */

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

    /* ===============================
       FLOATING HEARTS BACKGROUND
    ================================= */

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
