import React from 'react';
import BotaoExcluir from './BotaoExcluir';
import listaLivros from './listaLivros.json';

const divStyle = {
    backgroundColor: 'black',
    color: 'white'
};

const styleButton = {
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
    padding: '0.5em',
    borderRadius: '8px'
};

const styleWidth = {
    minWidth: '100%'
}


function Principal() {
    return (
        <table style={styleWidth}>
            <thead>
                <tr style={divStyle}>
                    <td>Título</td>
                    <td>Resumo</td>
                    <td>Editora</td>
                    <td>Autor</td>
                </tr>
            </thead>
            <tbody>
                <Auxiliar />
            </tbody>
        </table>
    )
}

function Auxiliar() {
    if (localStorage.bookList) {
        var bookList = JSON.parse(localStorage.getItem('bookList'));
    }
    else {
        localStorage.bookList = JSON.stringify(listaLivros.livros);
    }

    let passaLista = [];
    for (let i = 0; i < bookList.length; i++) {
        passaLista.push(
            <tr id={bookList[i].id}>
                <td><p className='m-1'>{bookList[i].titulo}</p><button id={"botao" + i} className="mb-2" style={styleButton} onClick={BotaoExcluir}>Excluir</button></td>
                <td><p>{bookList[i].resumo}</p></td>
                <td><p>{bookList[i].editora}</p></td>
                <td><ul><li>{bookList[i].autor}</li></ul></td>
            </tr>
        )
    }
    return (
        passaLista
    )

}

export default Principal;
