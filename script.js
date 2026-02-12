document.addEventListener("DOMContentLoaded", function () {

    const correctPin = "071125";
    const envelope = document.getElementById("envelope");
    const letter = document.querySelector(".letter");

    /* ================= PIN ================= */

    window.checkPin = function () {
        const userPin = document.getElementById("pinInput").value;
        const errorMsg = document.getElementById("errorMsg");

        if (userPin === correctPin) {
            document.querySelector(".pin-container").style.display = "none";
            envelope.style.display = "block";
        } else {
            errorMsg.textContent = "Wrong PIN 💔 Try again!";
        }
    };

    document.getElementById("pinInput")
        .addEventListener("keypress", function (e) {
            if (e.key === "Enter") checkPin();
        });

    /* ================= LETTER ANIMATION ================= */

    envelope.addEventListener("mouseenter", function () {
        letter.style.transform = "translateX(-50%) translateY(-180px)";
    });

    envelope.addEventListener("mouseleave", function () {
        letter.style.transform = "translateX(-50%) translateY(0)";
    });

    /* ================= FLOATING HEARTS ================= */

    function createFloatingHeart() {
        const heart = document.createElement("div");
        heart.classList.add("floating-heart");
        heart.innerHTML = "❤";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = (Math.random() * 3 + 3) + "s";
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 6000);
    }

    setInterval(createFloatingHeart, 400);
});
