<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>VR TechCon 2025</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            background-color: #1a1a2e;
            color: #f4f4f4;
        }
        header {
            background-color: #4CAF50;
            color: white;
            text-align: center;
            padding: 20px;
        }
        nav {
            background-color: #222831;
            text-align: center;
            padding: 12px;
        }
        nav ul {
            list-style: none;
            padding: 0;
        }
        nav ul li {
            display: inline;
            margin: 0 15px;
        }
        nav a {
            color: white;
            text-decoration: none;
            font-weight: 600;
        }
        nav a:hover {
            color: #ff6347;
        }
        section {
            padding: 20px;
            margin: 20px auto;
            max-width: 900px;
            background-color: #16213e;
            border-radius: 8px;
        }
        #countdown {
            font-size: 1.5rem;
            text-align: center;
            font-weight: bold;
            color: #ff6347;
        }
        form {
            max-width: 600px;
            margin: auto;
        }
        form label {
            display: block;
            margin: 8px 0;
            font-weight: 600;
        }
        form input, form select {
            width: 100%;
            padding: 10px;
            margin: 10px 0;
            border: none;
            border-radius: 5px;
            background-color: #222;
            color: white;
        }
        form button {
            background-color: #ff6347;
            color: white;
            font-weight: 700;
            cursor: pointer;
            padding: 10px;
            border: none;
            width: 100%;
            border-radius: 5px;
        }
        form button:hover {
            background-color: #e04e3f;
        }
        footer {
            background-color: #222831;
            padding: 20px;
            text-align: center;
        }
        table {
            width: 100%;
            text-align: center;
            color: white;
            margin-top: 10px;
        }
        table th, table td {
            padding: 8px;
            border: 1px solid #444;
        }
    </style>
</head>
<body>
    <header>
        <h1>Welcome to VR TechCon 2025</h1> 
        <p>The Ultimate Technology and Programming Conference</p>
        <div id="countdown">Event starts in: <span id="timer"></span></div>
    </header>

    <nav>
        <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#schedule">Schedule</a></li>
            <li><a href="#calendar">Calendar</a></li>
            <li><a href="#rsvp">RSVP</a></li>
            <li><a href="#tickets">Buy Tickets</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>

    <section id="about">
        <h2>About the Event</h2>
        <p>Join us for insightful talks, hands-on workshops, and an opportunity to network with professionals worldwide.</p>
    </section>

    <!-- Calendar of Events Section -->
    <section id="calendar">
        <h2>Event Calendar</h2>
        <div id="event-calendar"></div>
        <p id="event-details" style="text-align:center; font-weight:bold; color:#ff6347;"></p>
    </section>

    <!-- RSVP Section -->
    <section id="rsvp">
        <h2>RSVP for the Event</h2>
        <form id="rsvp-form">
            <label for="name">Name:</label>
            <input type="text" id="name" required>
            <label for="email">Email:</label>
            <input type="email" id="email" required>
            <button type="submit">RSVP Now</button>
        </form>
    </section>

    <!-- Ticket Purchase Section -->
    <section id="tickets">
        <h2>Buy Tickets</h2>
        <form id="ticket-form">
            <label for="ticket-type">Choose Ticket Type:</label>
            <select id="ticket-type">
                <option value="General">General - $50</option>
                <option value="VIP">VIP - $100</option>
                <option value="Student">Student - $30</option>
            </select>

            <label for="card-number">Card Number:</label>
            <input type="text" id="card-number" placeholder="Enter card number" required>

            <label for="expiry">Expiry Date:</label>
            <input type="month" id="expiry" required>

            <label for="cvv">CVV:</label>
            <input type="text" id="cvv" placeholder="123" required>

            <button type="submit">Purchase Ticket</button>
        </form>
    </section>

    <footer>
        <p>&copy; 2025 VR TechCon. All rights reserved.</p>
    </footer>

    <script>
        document.addEventListener("DOMContentLoaded", function () {
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

            // RSVP Form
            document.getElementById("rsvp-form").addEventListener("submit", function (event) {
                event.preventDefault();
                alert("Thank you for RSVPing! We’ll send event updates to your email.");
            });

            // Ticket Purchase Form
            document.getElementById("ticket-form").addEventListener("submit", function (event) {
                event.preventDefault();
                const ticketType = document.getElementById("ticket-type").value;
                alert(`Thank you for purchasing a ${ticketType} ticket! You will receive an email confirmation soon.`);
            });

            // Calendar of Events
            const eventCalendar = document.getElementById("event-calendar");
            const eventDetails = document.getElementById("event-details");

            const events = {
                "2025-06-14": "Pre-Event Networking Party",
                "2025-06-15": "Opening Ceremony & Keynote Speech",
                "2025-06-16": "AI & Machine Learning Workshop",
                "2025-06-17": "Blockchain Technology Discussion",
                "2025-06-18": "Closing Ceremony & Q&A"
            };

            for (let date in events) {
                let eventItem = document.createElement("p");
                eventItem.innerHTML = `📅 <strong>${date}</strong>: ${events[date]}`;
                eventCalendar.appendChild(eventItem);
            }
        });
    </script>
</body>
</html>
