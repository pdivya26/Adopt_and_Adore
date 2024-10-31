document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get values from inputs
    const nm = document.getElementById('nm').value;
    const em = document.getElementById('em').value;
    const msg = document.getElementById('msg').value;

    // Check if any field is empty
    if (nm.trim() === "" || em.trim() === "" || msg.trim() === "") {
        alert("Fields cannot be empty!");
    } else {
        alert('Message Submitted Successfully!');

        // Clear the input fields
        document.getElementById('contact-form').reset();

        // Display notification (if using a notification element)
        const notification = document.getElementById("notification");
        notification.classList.add("show"); // Show the notification
        setTimeout(() => {
            notification.classList.remove("show"); // Hide after 3 seconds
        }, 3000);
    }
});
