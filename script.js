localStorage.setItem("os", navigator.platform);
localStorage.setItem("browser", navigator.userAgent);

document.addEventListener("DOMContentLoaded", () => {
    const footer = document.querySelector("footer");
    footer.innerHTML = `
        <p>OS: ${localStorage.getItem("os")}</p>
        <p>Browser: ${localStorage.getItem("browser")}</p>
    `;
});

fetch("https://jsonplaceholder.typicode.com/posts/17/comments")
    .then(response => response.json())
    .then(comments => {
        const commentsBlock = document.getElementById("comments");
        comments.forEach(c => {
            const div = document.createElement("div");
            div.innerHTML = `<strong>${c.email}</strong>: ${c.body}`;
            commentsBlock.appendChild(div);
        });
    })
    .catch(error => console.error("Помилка:", error));
    
setTimeout(() => {
    document.getElementById("modal").style.display = "block";
}, 60000); 
document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("toggleTheme");
    const body = document.body;
    const now = new Date();
    const hour = now.getHours();
    console.log("Поточна година:", hour); 
    if (hour >= 7 && hour < 21) {
        body.classList.add("day");
        localStorage.setItem("theme", "day");
    } else {
        body.classList.add("night");
        localStorage.setItem("theme", "night");
    }
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        body.className = "";
        body.classList.add(savedTheme);
    }
    toggleBtn.addEventListener("click", () => {
        if (body.classList.contains("day")) {
            body.classList.remove("day");
            body.classList.add("night");
            localStorage.setItem("theme", "night");
        } else {
            body.classList.remove("night");
            body.classList.add("day");
            localStorage.setItem("theme", "day");
        }
    });
});