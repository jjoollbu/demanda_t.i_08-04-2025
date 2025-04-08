const services = {
    "Arquitetura": [
        "Design de Interiores",
        "Projeto Arquitetônico"
    ],
    "T.I": [
        "Desenvolvimento de site",
        "Desenvolvimento de E-commerce",
        "Design de site",
        "Manutenção de site"
    ]
};

function updateServices() {
    const area = document.getElementById('area').value;
    const serviceSelect = document.getElementById('service');
    
    serviceSelect.innerHTML = '<option value="">Selecione um serviço</option>';
    
    if (area) {
        services[area].forEach(service => {
            const option = document.createElement('option');
            option.value = service;
            option.textContent = service;
            serviceSelect.appendChild(option);
        });
    }
}

document.getElementById('serviceForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const area = document.getElementById('area').value;
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value;

    const text = `Olá, meu nome é ${name}, meu e-mail é ${email}. Gostaria de solicitar o serviço de ${area} - ${service}. ${message ? '\nMensagem adicional: ' + message : ''}`;
    
    // adicione o número que vai receber a mensagem logo abaixo
    const whatsappUrl = `https://wa.me/557481366256?text=${encodeURIComponent(text)}`; 
    window.open(whatsappUrl, '_blank');
});