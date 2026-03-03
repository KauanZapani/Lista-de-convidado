// JavaScript - Lista de convidados
const convidados = ["Ana", "Carlos", "Beatriz", "Andre", "Paula", "João", "Alice", "Margarida", "Arthur", "Luciana"];

// Função para criar a lista com os nomes em maiúsculo
function displayNamesInUppercase() {
    let nameList = document.getElementById('name-list');
    convidados.forEach(name => {
        let li = document.createElement('li');
        li.textContent = name.toUpperCase();
        nameList.appendChild(li);
    });
}

// Função para criar a lista de nomes que começam com 'A'
function displayNamesStartingWithA() {
    let nameListA = document.getElementById('name-list-a');
    let namesWithA = convidados.filter(name => name.toLowerCase().startsWith('a'));
    namesWithA.forEach(name => {
        let li = document.createElement('li');
        li.textContent = name.toUpperCase();
        nameListA.appendChild(li);
    });
}

// Função para criar a lista de nomes com mais de 5 letras
function displayNamesLongerThan5() {
    let nameListLong = document.getElementById('name-list-long');
    let namesLongerThan5 = convidados.filter(name => name.length > 5);
    namesLongerThan5.forEach(name => {
        let li = document.createElement('li');
        li.textContent = name.toUpperCase();
        nameListLong.appendChild(li);
    });
}

// Função que utiliza range() para criar uma faixa de números (em JS, usamos uma função customizada)
function range(start, end) {
    let result = [];
    for (let i = start; i <= end; i++) {
        result.push(i);
    }
    return result;
}

// Exemplo de uso do range (gerar um array de 1 a 5)
let rangeExample = range(1, 5);
console.log("Exemplo de range():", rangeExample);

// Função para alternar a visibilidade das listas
function toggleList(listId) {
    const list = document.getElementById(listId);
    if (list.style.display === 'none' || list.style.display === '') {
        list.style.display = 'block';
    } else {
        list.style.display = 'none';
    }
}

// Chama as funções para exibir as listas (essas funções criam as listas, mas elas ficam ocultas até o clique)
displayNamesInUppercase();
displayNamesStartingWithA();
displayNamesLongerThan5();
