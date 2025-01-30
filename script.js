// Script para animação suave de scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Script para animar elementos ao rolar
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
});

document.querySelectorAll('.animate-on-scroll').forEach(element => {
    observer.observe(element);
});

// Script para validação de formulário
document.querySelector('#form-contato').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name && email && message) {
        // Aqui você pode enviar os dados para um servidor
        alert('Mensagem enviada com sucesso!');
    } else {
        alert('Por favor, preencha todos os campos!');
    }
});
