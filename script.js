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

    fetch("https://script.google.com/macros/s/AKfycbwV2ThmHl681EDt1D2VBOYpo0t22hy5tHPuVVX2UlJ7As0_1j3_1SNBnVtUSOzydCNo/exec", {
        method: "POST",
        body: JSON.stringify(data)
    })
    .then(res => res.text())
    .then(() => {
        alert("Application submitted successfully!");
        document.getElementById("form").reset();
    })
    .catch(() => alert("Error submitting form"));
});


// const mentorsContainer = document.getElementById("mentors-list");

// // 🔁 Replace with your deployed URL
// const API_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQjjPFy4GO0YnuCUwCSuWDPAvVobgqBtTjUc-EaSyQacBnZLEAUEEWax9NNq9yqC-cMkaCyDwAj3Ut6/pub?output=csv";

// fetch(API_URL)
//     .then(res => res.json())
//     .then(data => {
//         data.forEach(mentor => {
//             const row = document.createElement("div");
//             row.classList.add("mentor-row");

//             row.innerHTML = `
//                 <img src="assets/mentors/${mentor.Photo_name}" alt="${mentor.Name}">
                
//                 <div class="mentor-details">
//                     <div class="mentor-name">${mentor.Name}</div>
//                     <div class="mentor-subject">${mentor.Subject}</div>
//                     <div class="mentor-meta">${mentor.Qualification}</div>
//                     <div class="mentor-meta">${mentor.Experience}</div>
//                 </div>
//             `;

//             mentorsContainer.appendChild(row);
//         });
//     })
//     .catch(err => {
//         console.error("Error loading mentors:", err);
//     });



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