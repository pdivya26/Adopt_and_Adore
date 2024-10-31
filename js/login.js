function validateForm() {
    var un = document.getElementById("un").value;
    var pw = document.getElementById("pw").value;
    
    // Validate Username
    if (un.trim() === "") {
        alert("Username cannot be empty.");
        return false;
    }

    // Validate Password
    if (pw.length < 8) {
        alert("Password should be at least 8 characters long!");
        return false;
    }

    alert("Login successful!");
    return true;
}