document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("loginForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();

        if (username === "" || password === "") {
            alert("Please enter both username and password.");
            return;
        }

        // Fake authentication for now
        if (username === "atharvpatki" && password === "1234") {
            alert("Login Successful! Redirecting...");

            // Redirect to loading screen first
            window.location.href = "loading.html";

            // After 3 seconds, redirect to home.html (handled inside loading.html)
            setTimeout(() => {
                window.location.href = "home.html";
            }, 3000);
        } else {
            alert("Invalid username or password.");
        }
    });
});
