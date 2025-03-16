const courses = [
    { id: 1, title: "Python for Beginners", description: "Learn Python from scratch.", pdf: "pdfs/python.pdf" },
    { id: 2, title: "Web Development", description: "Master HTML, CSS, JavaScript.", pdf: "pdfs/webdev.pdf" },
    { id: 3, title: "Machine Learning", description: "Introduction to ML and AI.", pdf: "pdfs/ml.pdf" },
];

const container = document.getElementById("courses-container");

courses.forEach(course => {
    const courseCard = `
        <div class="col-md-4">
            <div class="card course-card" onclick="openCourse(${course.id})">
                <h5 class="card-title">${course.title}</h5>
                <p class="card-text">${course.description}</p>
                <button class="btn btn-primary mt-2">View Course</button>
            </div>
        </div>
    `;
    container.innerHTML += courseCard;
});

function openCourse(id) {
    const course = courses.find(c => c.id === id);
    localStorage.setItem("selectedCourse", JSON.stringify(course));
    window.location.href = "course_details.html";
}
