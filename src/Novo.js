import BotaoIncluir from "./BotaoIncluir";


const layoutForm = {
    maxWidth: "70%"
}

function Novo() {
    return (
        <div className="ms-5">
            <h1 class="my-3">Dados do Livro</h1>
            <form className="d-flex flex-column" style={layoutForm}>
                <label for="id">Id:</label>
                <input id="id" type="number" className="mb-4 form-control" required></input>

                <label for="titulo">Título:</label>
                <input id="titulo" type="text" className="mb-4 form-control"></input>

                <label for="resumo">Resmo:</label>
                <textarea id="resumo" className="mb-4 form-control"></textarea>

                <label for="editora">Editora:</label>
                <input id="editora" type="text" className="mb-4 form-control"></input>

                <label for="autor">Autor</label>
                <input id="autor" type="text" className="mb-4 form-control"></input>
            </form>
            <button className="rounded bg-primary text-light border border-1 p-2" id="botao-incluir" onClick={() => {
                let inputId = document.getElementById('id').value;
                if (inputId === "") {
                    alert('Você precisa preencher todos os campos!')
                }
                else (BotaoIncluir())
            }}>Salvar Dados</button>
        </div>
    )
};

export default Novo;