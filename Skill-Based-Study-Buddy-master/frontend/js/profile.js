document.getElementById("upload-pic").addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById("profile-pic").src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

function saveProfile() {
    const name = document.getElementById("name").value;
    const bio = document.getElementById("bio").value;
    const skills = document.getElementById("skills").value;

    alert("Profile Updated!\nName: " + name + "\nBio: " + bio + "\nSkills: " + skills);
}
