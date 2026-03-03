const convidados = [
    "Ana", "Bernardo", "Amanda", "Carlos", "Alice", 
    "Gustavo", "Beatriz", "Leonardo", "Arthur", "Zoe"
];

const inputBusca = document.getElementById('searchInput');

function renderizarListas(filtro = "") {
    // Limpar as listas antes de renderizar
    const listaA = document.getElementById('listaA');
    const listaLongos = document.getElementById('listaLongos');
    const listaOutros = document.getElementById('listaOutros');
    
    listaA.innerHTML = "";
    listaLongos.innerHTML = "";
    listaOutros.innerHTML = "";

    // Loop principal
    convidados.forEach(nome => {
        const nomeUpper = nome.toUpperCase();
        
        // Verifica se o nome passa pelo filtro da barra de pesquisa
        if (nomeUpper.includes(filtro.toUpperCase())) {
            const li = document.createElement('li');
            li.textContent = nomeUpper;

            // Lógica de separação
            if (nomeUpper.startsWith('A')) {
                listaA.appendChild(li);
            } else if (nomeUpper.length > 5) {
                listaLongos.appendChild(li);
            } else {
                listaOutros.appendChild(li);
            }
        }
    });
}

// Evento de digitação na barra de pesquisa
inputBusca.addEventListener('input', (e) => {
    renderizarListas(e.target.value);
});

// Inicializa a lista ao carregar a página
renderizarListas();
