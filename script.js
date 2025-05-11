console.log("Arquivo script.js carregado!");

const formularioCadastro = document.getElementById('cadastroForm');

if (formularioCadastro) {
    formularioCadastro.addEventListener('submit', function(event) {
        event.preventDefault(); 
        console.log("Formulário de cadastro submetido (prevenido)!");

    });
}