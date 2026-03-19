function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("active");
}

document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Application submitted!");
});