function BotaoExcluir() {
    var bookList = JSON.parse(localStorage.getItem('bookList'));
    for (let i = 0; i < bookList.length; i++) {
        let botao = document.getElementById(`botao${i}`);
        botao.addEventListener("click", () => {
            bookList.splice(i, 1);
            localStorage.bookList = JSON.stringify(bookList)
            document.location.reload()
        })
    }
}

export default BotaoExcluir;
