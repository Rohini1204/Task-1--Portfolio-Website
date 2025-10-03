document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("🍂 Please fill in all fields.");
        return;
    }

    if (!email.includes("@")) {
        alert("🍂 Enter a valid email address!");
        return;
    }

    alert("🍁 Thank you, " + name + "! Your message has been sent.");
    document.getElementById("contactForm").reset();
});
