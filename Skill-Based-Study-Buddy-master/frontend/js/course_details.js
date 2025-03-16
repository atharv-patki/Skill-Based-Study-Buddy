document.addEventListener("DOMContentLoaded", function () {
    const course = JSON.parse(localStorage.getItem("selectedCourse"));

    if (!course) {
        window.location.href = "courses.html";
        return;
    }

    document.getElementById("course-title").innerText = course.title;
    document.getElementById("course-description").innerText = course.description;
    document.getElementById("course-pdf").href = course.pdf;
});
