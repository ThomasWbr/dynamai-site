const tarefas = [
    { id: 1, titulo: "Lavar o carro", concluida: true },
    { id: 2, titulo: "Estudar React", concluida: false },
    { id: 3, titulo: "Levar o lixo pra fora", concluida: false},
    { id: 4, titulo: "Limpar o quarto", concluida: true}
];

function ListaTarefas() {
    return (
        <ul>
            {tarefas.map((tarefa) => (
                <li key={tarefa.id} style={{ textDecoration: tarefa.concluida ? "line-through" : "none" }}>
                    {tarefa.titulo}
                </li>
            ))}
        </ul>
    );
}

export default ListaTarefas