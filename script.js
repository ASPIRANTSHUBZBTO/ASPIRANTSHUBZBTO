function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("active");
}

document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();

    const data = {
        name: e.target[0].value,
        phone: e.target[1].value,
        course: e.target[2].value,
        qualification: e.target[3].value
    };

    fetch("https://script.google.com/macros/s/AKfycbxHsZ8dA2j2YgQ-WKwjgFhDledijhshTUyrk1X79PLDtKCoSKppJjvnD8asQilhHn1l9w/exec", {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(data)
    })
    .then(res => res.text())
    .then(() => {
        alert("Application submitted successfully!");
        document.getElementById("form").reset();
    })
    .catch(() => alert("Error submitting form"));
});

const mentorsContainer = document.getElementById("mentors-list");

const API_URL = "https://script.google.com/macros/s/AKfycbz2WLSjFWvchKJFljOEo3jv7-U_WWroLRwdG8EZhgFYrFAoqo5SFbrEkrjEFYk9hDge/exec";


fetch(API_URL)
    .then(res => res.json())
    .then(data => {
        data.forEach(mentor => {
            const row = document.createElement("div");
            row.classList.add("mentor-row");

            row.innerHTML = `
                <img src="assets/mentors/${mentor.Photo_name}" alt="${mentor.Name}">
                
                <div class="mentor-details">
                    <div class="mentor-name">${mentor.Name}</div>
                    <div class="mentor-subject">${mentor.Subject}</div>
                    <div class="mentor-meta">${mentor.Qualification}</div>
                    <div class="mentor-meta">${mentor.Experience}</div>
                </div>
            `;

            mentorsContainer.appendChild(row);
        });
    })
    .catch(err => {
        console.error("Error loading mentors:", err);
    });