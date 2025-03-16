// Open Chat Room
function openChat(roomType) {
    let chatBox = document.getElementById("chatBox");
    chatBox.style.display = "flex";
    document.getElementById("room-title").innerText = "💬 " + roomType + " Chat Room";

    // Clear previous messages and add a welcome message
    let chatMessages = document.getElementById("chat-messages");
    chatMessages.innerHTML = "";
    let botMessage = document.createElement("div");
    botMessage.innerText = "Welcome to the " + roomType + " Chat!";
    botMessage.classList.add("message", "bot-message");
    chatMessages.appendChild(botMessage);
}

// Send Message
function sendMessage() {
    let messageInput = document.getElementById("messageInput");
    let messageText = messageInput.value.trim();

    if (messageText !== "") {
        let chatMessages = document.getElementById("chat-messages");

        // User message
        let userMessage = document.createElement("div");
        userMessage.innerText = messageText;
        userMessage.classList.add("message", "user-message");
        chatMessages.appendChild(userMessage);

        messageInput.value = "";

        // Auto-reply after 1 second
        setTimeout(() => {
            let botMessage = document.createElement("div");
            botMessage.innerText = "Your message was received!";
            botMessage.classList.add("message", "bot-message");
            chatMessages.appendChild(botMessage);
        }, 1000);
    }
}

// Handle Enter Key for Message Sending
function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

// Toggle Whiteboard Visibility
function toggleWhiteboard() {
    let whiteboard = document.getElementById("whiteboard-container");
    let chatBox = document.getElementById("chatBox");

    if (whiteboard.style.display === "none" || whiteboard.style.display === "") {
        whiteboard.style.display = "flex";  // Show whiteboard
        chatBox.style.display = "none";    // Hide chat if open
    } else {
        whiteboard.style.display = "none";   // Hide whiteboard
    }
}

// Clear Whiteboard
function clearWhiteboard() {
    let canvas = document.getElementById("whiteboard");
    let ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Initialize Jitsi API
let jitsiApi = null;

// Start Video Call
function startVideoCall() {
    let videoContainer = document.getElementById("video-call-container");

    // If video call is already active, do nothing
    if (videoContainer.style.display === "flex") {
        return;
    }

    videoContainer.style.display = "flex"; // Show the video call window

    if (!jitsiApi) {
        let container = document.getElementById("video-call-frame");

        if (typeof JitsiMeetExternalAPI === "undefined") {
            console.error("Jitsi API is not loaded!");
            return;
        }

        jitsiApi = new JitsiMeetExternalAPI("meet.jit.si", {
            roomName: "SkillSwapMeetingRoom",
            parentNode: container,
            width: "100%",
            height: "100%"
        });
    }
}

// End Video Call & Close Window
function endVideoCall() {
    if (jitsiApi) {
        jitsiApi.dispose();
        jitsiApi = null;
    }
    document.getElementById("video-call-container").style.display = "none";
}

// Share Screen
function shareScreen() {
    if (jitsiApi) {
        jitsiApi.executeCommand("toggleShareScreen");
    }
}

// Ensure Jitsi API is loaded before calling functions
document.addEventListener("DOMContentLoaded", () => {
    if (typeof JitsiMeetExternalAPI === "undefined") {
        let script = document.createElement("script");
        script.src = "https://meet.jit.si/external_api.js";
        script.onload = () => console.log("Jitsi API Loaded!");
        document.head.appendChild(script);
    }
});
