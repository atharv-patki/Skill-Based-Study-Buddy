document.addEventListener("DOMContentLoaded", function () {
    const mentorCards = document.querySelectorAll(".mentor-card");
    
    mentorCards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.classList.add("highlight");
        });
        
        card.addEventListener("mouseleave", () => {
            card.classList.remove("highlight");
        });
    });

    // Click event to show more details
    mentorCards.forEach(card => {
        card.addEventListener("click", () => {
            alert(`You selected ${card.dataset.name}! Connect via LinkedIn or GitHub.`);
        });
    });
});
