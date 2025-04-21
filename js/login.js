function handleLogin() {
    let name = document.getElementById("name").value;
    let password = document.getElementById("password").value;

    if (!name) {
        alert("Please write your name");
        return;
    }
    if (password !== "123456") {
        alert("Wrong password! Contact admin to get your password");
        return;
    }

    document.getElementById("loginSection").classList.add("hidden");
    
    document.getElementById("section1").classList.remove("hidden");
    document.getElementById("section2").classList.remove("hidden");
    document.getElementById("section3").classList.remove("hidden");
}

function handleLogout() {
    document.getElementById("loginSection").classList.remove("hidden");
    
    document.getElementById("section1").classList.add("hidden");
    document.getElementById("section2").classList.add("hidden");
    document.getElementById("section3").classList.add("hidden");
    
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("password").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            handleLogin();
        }
    });
    document.getElementById("name").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            handleLogin();
        }
    });
});