const convidados = [
    "Ana",
    "Bruno",
    "Amanda",
    "Carlos",
    "Alessandra",
    "Beatriz",
    "Antonio",
    "Fernanda",
    "João",
    "Alexandre",
    "Mariana"
];

const listaTodos = document.getElementById("listaTodos");
const listaA = document.getElementById("listaA");
const lista5 = document.getElementById("lista5");
const searchInput = document.getElementById("search");

function renderizarListas(filtro = "") {
    listaTodos.innerHTML = "";
    listaA.innerHTML = "";
    lista5.innerHTML = "";

    for (let i = 0; i < convidados.length; i++) {
        let nome = convidados[i].toUpperCase();

        if (nome.includes(filtro.toUpperCase())) {

            // Adicionando na lista Todos
            let liTodos = document.createElement("li");
            liTodos.textContent = nome;
            listaTodos.appendChild(liTodos);

            // Adicionando na lista Começam com A
            if (nome.startsWith("A")) {
                let liA = document.createElement("li");
                liA.textContent = nome;
                listaA.appendChild(liA);
            }

            // Adicionando na lista Mais de 5 Letras
            if (nome.length > 5) {
                let li5 = document.createElement("li");
                li5.textContent = nome;
                lista5.appendChild(li5);
            }
        }
    }
}

// Evento de pesquisa
searchInput.addEventListener("input", function () {
    renderizarListas(this.value);
});

// Inicializando as listas
renderizarListas();
