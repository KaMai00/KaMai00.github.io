// Initialize EmailJS with your public key
(function() {
    emailjs.init("PAOcdDR7aRcjPr90P");
})();

// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Send email
    emailjs.sendForm("service_zhcfruv", "template_xwvejld", this)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            document.getElementById('response-message').innerText = 'Sent successfully';
            document.getElementById('contact-form').reset();
        }, function(error) {
            console.log('FAILED...', error);
            document.getElementById('response-message').innerText = 'Failed to send';
        });
});