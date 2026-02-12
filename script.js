document.addEventListener("DOMContentLoaded", function () {

    const correctPin = "071125";

    window.checkPin = function () {
        const userPin = document.getElementById("pinInput").value;
        const errorMsg = document.getElementById("errorMsg");

        if (userPin === correctPin) {
            document.querySelector(".pin-container").style.display = "none";
            document.querySelector(".envelope").style.display = "grid";
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
