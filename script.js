document.addEventListener("DOMContentLoaded", function () {

    const correctPin = "071125";
    const envelope = document.getElementById("envelope");
    const letter = document.querySelector(".letter");

    /* ================= PIN SYSTEM ================= */

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

    const pinInput = document.getElementById("pinInput");
    pinInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            checkPin();
        }
    });

    /* ================= ENVELOPE CLICK SYSTEM ================= */

    let isOpen = false;

    envelope.addEventListener("click", function () {
        isOpen = true;
        letter.classList.add("open");
    });

    envelope.addEventListener("mouseleave", function () {
        isOpen = false;
        letter.classList.remove("open");
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
