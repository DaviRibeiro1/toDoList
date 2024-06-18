//Cria tarefa
const adiciona = document.querySelector("#adicionar");
adiciona.addEventListener("click", () => {
    const task = document.querySelector("#task").value
    const span = document.createElement("span")
    const allTasks = document.querySelector(".allTasks")
    const newTask = document.createElement("li")
    span.textContent = task
    newTask.appendChild(span)
    
    const concluida = document.createElement("input")
    concluida.type = "button";
    concluida.value = "Concluida"
    concluida.className = "concluida"

    const editar = document.createElement("input")
    editar.type = "button"
    editar.value = "Editar"
    editar.className = "editar"
    
    const remove = document.createElement("input")
    remove.type = "button";
    remove.value = "Remover"
    remove.className = "remover"
    
    newTask.appendChild(concluida)
    newTask.appendChild(editar)
    newTask.appendChild(remove)
    allTasks.appendChild(newTask);
    
    
    //Altera cor da tarefa e risca a mesma como concluida
    const concluidas = document.querySelectorAll('.concluida')
    concluidas.forEach(botao => {
        botao.addEventListener("click", (event) => {
            event.target.parentElement.style.borderColor = "green";
            event.target.parentElement.style.color = "green";
            event.target.parentElement.style.fontWeight = "bold";
            event.target.previousElementSibling.style.textDecoration= "line-through";
        })
    })
    
    //Apaga a tarefa
    const deletar = document.querySelectorAll(".remover")
    deletar.forEach(botao => {
        botao.addEventListener("click", (event) => {
            event.target.parentElement.remove()
        })
    })

    //Cria input para alterar a tarefa
    const btnEditar = document.querySelectorAll(".editar");
    btnEditar.forEach(botao => {
        let valueTask = botao.previousElementSibling.previousElementSibling.textContent;
        botao.addEventListener("click", (event) => {
            const inputAlterar = document.createElement("input");
            inputAlterar.type = "text";
            inputAlterar.value = valueTask;
            inputAlterar.className = "inputNewTask";

            const btnAlterar = document.createElement("input");
            btnAlterar.type = "button";
            btnAlterar.value = "Alterar";
            btnAlterar.className = "alterar"

            event.target.previousElementSibling.previousElementSibling.innerHTML = "";
            event.target.previousElementSibling.previousElementSibling.appendChild(inputAlterar)
            event.target.previousElementSibling.previousElementSibling.appendChild(btnAlterar)
        
            //Altera a tarefa
            const alterar = document.querySelectorAll(".alterar");
            alterar.forEach(botao => {
                botao.addEventListener("click", (event) => {
                    const newTaskValue = document.querySelector(".inputNewTask").value
                    event.target.parentElement.textContent = newTaskValue
                    valueTask = newTaskValue
                })
            })
        });
    });
})

