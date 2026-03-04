// REGISTER
function register() {
    let username = document.getElementById("regUsername").value;
    let password = document.getElementById("regPassword").value;

    if (username === "" || password === "") {
        alert("Please fill all fields");
        return;
    }

    let user = {
        username: username,
        password: password
    };

    localStorage.setItem(username, JSON.stringify(user));
    alert("Registration Successful!");
    window.location.href = "login.html";
}

// LOGIN
function login() {
    let username = document.getElementById("loginUsername").value;
    let password = document.getElementById("loginPassword").value;

    let storedUser = localStorage.getItem(username);

    if (storedUser === null) {
        alert("User not found!");
        return;
    }

    let user = JSON.parse(storedUser);

    if (user.password === password) {
        localStorage.setItem("loggedInUser", username);
        window.location.href = "dashboard.html";
    } else {
        alert("Incorrect password!");
    }
}

// DASHBOARD CHECK
if (window.location.pathname.includes("dashboard.html")) {
    let loggedInUser = localStorage.getItem("loggedInUser");

    if (!loggedInUser) {
        window.location.href = "login.html";
    } else {
        document.getElementById("welcomeUser").innerText =
            "Hello, " + loggedInUser;
    }
}

// LOGOUT
function logout() {
    localStorage.removeItem("loggedInUser");
    window.location.href = "login.html";
}
