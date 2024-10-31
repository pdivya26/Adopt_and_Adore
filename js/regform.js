function validateForm() {
    var fn = document.getElementById("fn").value;
    var ln = document.getElementById("ln").value;
    var un = document.getElementById("un").value;
    var pw = document.getElementById("pw").value;
    var em = document.getElementById("em").value;
    var mb = document.getElementById("mb").value;
    var hn = document.getElementById("hn").value;
    var sn = document.getElementById("sn").value;
    var ct = document.getElementById("city").value;
    var ct = document.getElementById("state").value;
    var cn = document.getElementById("country").value;
    var pn = document.getElementById("pincode").value;

    // Validate First Name
    if (fn.trim() === "") {
        alert("First Name cannot be empty!");
        return false;
    }
    if (!/^[a-zA-Z]+$/.test(fn)) {
        alert("First name should contain alphabets only!");
        return false;
    }

    // Validate Last Name
    if (ln.trim() === "") {
        alert("Last name cannot be empty.");
        return false;
    }
    if(!/^[a-zA-Z]+$/.test(ln)) {
        alert("Last name should contain alphabets only!");
        return false;
    }

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

    // Validate Email
    var emval = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (em.trim() === "") {
        alert("Email cannot be empty!");
        return false;
    }
    if (!emval.test(em)) {
        alert("Invalid email format!");
        return false;
    }

    // Validate Mobile Number
    if (!/^\d{10}$/.test(mb)) {
        alert("Mobile number should contain 10 digits only!");
        return false;
    }

    // Validate House No
    if (hn.trim() === "" ) {
        alert("House number cannot be empty!");
        return false;
    }
    if (!/^\d+$/.test(hn)) {
        alert("House number should contain numbers only!");
        return false;
    }

    // Validate Street Name
    if (sn.trim() === "") {
        alert("Street name cannot be empty!");
        return false;
    }
    if (!/^[a-zA-Z0-9\-]+$/.test(sn)) {
        alert("Invalid Street Name!");
        return false;
    }

    // Validate City
    if (ct.trim() === "") {
        alert("City cannot be empty!");
        return false;
    }
    if (!/^[a-zA-Z]+$/.test(ct)) {
        alert("City should contain alphabets only!");
        return false;
    }

    // Validate Pincode
    if (pn.trim() === "") {
        alert("Pincode cannot be empty!");
        return false;
    }
    if (!/^\d{6}$/.test(pn)) {
        alert("Pincode should contain 6 digits only!");
        return false;
    }
    return true;
}