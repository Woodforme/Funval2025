
document.addEventListener('DOMContentLoaded', function () {
    const contactoForm = document.querySelector('#contacto-form form');

    contactoForm.addEventListener('submit', function (e) {
        e.preventDefault();

        resetErrors();

        let isValid = true;
        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();

        if (nombre === '') {
            showError('nombre', 'Por favor ingresa tu nombre');
            isValid = false;
        }

        if (email === '') {
            showError('email', 'Por favor ingresa tu correo electrónico');
            isValid = false;
        } else if (!isValidEmail(email)) {
            showError('email', 'Por favor ingresa un correo válido');
            isValid = false;
        }

        if (mensaje === '') {
            showError('mensaje', 'Por favor ingresa tu mensaje');
            isValid = false;
        }

        if (isValid) {
            sendForm();
        }
    });

    function showError(fieldId, message) {
        const field = document.getElementById(fieldId);
        const errorElement = document.createElement('p');
        errorElement.className = 'text-red-500 text-sm mt-1';
        errorElement.textContent = message;
        field.parentNode.insertBefore(errorElement, field.nextSibling);
        field.classList.add('border-red-500');
    }

    function resetErrors() {
        document.querySelectorAll('.text-red-500').forEach(el => el.remove());
        ['nombre', 'email', 'mensaje'].forEach(id =>
            document.getElementById(id).classList.remove('border-red-500')
        );
    }

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    async function sendForm() {
        const formData = new FormData(contactoForm);
        const submitButton = contactoForm.querySelector('button[type="submit"]');

        try {
            submitButton.disabled = true;
            submitButton.textContent = 'Enviando...';

            const response = await fetch('https://formsubmit.co/ajax/tu-email@ejemplo.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    nombre: formData.get('nombre'),
                    email: formData.get('email'),
                    mensaje: formData.get('mensaje'),
                }),
            });

            const result = await response.json();

            if (response.ok) {
                alert('¡Mensaje enviado con éxito!');
                contactoForm.reset();
            } else {
                throw new Error(result.message || 'Error al enviar el formulario');
            }
        } catch (error) {
            alert('Hubo un error: ' + error.message);
        } finally {
            submitButton.disabled = false;
            submitButton.textContent = 'Enviar mensaje';
        }
    }
});
