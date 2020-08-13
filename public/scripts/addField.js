// Procurar o botao
document.querySelector("#add-time")
// Quando clicar no botao
.addEventListener('click', cloneField)

// Executar uma ação
function cloneField() {
    // Duplicar os campos. que campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) // boolean

    // pegar os campos. que campos?
    const fields = newFieldContainer.querySelector('input')

    // para cada campo, limpar seus dados
    fields.forEach(function(field)) {
        // pega o field do momento e limpa ele
        field.value = ""
    });
    // Colocar na página. Aonde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}