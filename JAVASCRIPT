document.addEventListener("DOMContentLoaded", function () {
    // Countdown Timer
    function updateCountdown() {
        const eventDate = new Date("2025-06-15T09:00:00").getTime();
        const now = new Date().getTime();
        const timeLeft = eventDate - now;

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
    setInterval(updateCountdown, 1000);

    // RSVP Form Validation
    document.getElementById("rsvp-form").addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Thank you for RSVPing! We’ll send event updates to your email.");
    });

    // Responsive Navigation Menu
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});
