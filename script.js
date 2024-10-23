function sendEmail(e) {
    e.preventDefault();

    const submitButton = e.target.querySelector('button[type="submit"]');
    const originalText = submitButton.innerHTML;
    submitButton.disabled = true;
    submitButton.innerHTML = 'Enviando...';

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const fecha = new Date().toLocaleString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });

    const templateParams = {
        from_name: name,
        from_email: email,
        message: message,
        fecha: fecha
    };

    emailjs.send(
        "service_w5e9ref",
        "template_z9jwads",
        templateParams
    )
    .then(function(response) {
        // Éxito
        alert("¡Mensaje enviado con éxito!");
        document.getElementById('contactForm').reset();
    })
    .catch(function(error) {
        // Error
        console.error("Error:", error);
        alert("Error al enviar el mensaje. Por favor, intenta nuevamente.");
    })
    .finally(function() {
        // Restaurar el botón
        submitButton.disabled = false;
        submitButton.innerHTML = originalText;
    });

    return false;
}