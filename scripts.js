document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validação básica
    if (!name || !email || !message) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Validação de e-mail
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Por favor, insira um e-mail válido.');
        return;
    }

    // Simulação de envio para o backend
    fetch('/enviar-formulario', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
    })
    .then(response => response.json())
    .then(data => {
        alert('Obrigado, ' + name + '! Sua mensagem foi enviada.');
        document.getElementById('contact-form').reset(); // Limpa o formulário
    })
    .catch(error => {
        alert('Ocorreu um erro ao enviar a mensagem.');
    });
});