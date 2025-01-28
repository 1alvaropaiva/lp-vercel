// scripts.js

// Exemplo de validação do formulário
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Impede o envio do formulário

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Obrigado, ' + name + '! Sua mensagem foi enviada.');
        // Aqui você pode adicionar lógica para enviar o formulário para um backend
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});