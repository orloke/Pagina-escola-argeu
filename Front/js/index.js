const BASE_URL = 'https://api-escola-argeu.herokuapp.com'
const rowFuncionarios = document.querySelector('.row-funcionarios')
const row_avisos = document.querySelector('.row_avisos')
const loadFuncionarios = document.querySelector('.funcionarios_loader')
const loadAvisos = document.querySelector('.avisos_loader')

var ListarProfessores = async () => {
    const resposta = await fetch(`${BASE_URL}/professores`)
    const resJson = await resposta.json()
    loadFuncionarios.style.display = 'none'
    resJson.forEach(element => {
        rowFuncionarios.innerHTML+=
        `<div class="col">
        <div class="card text-center" >
            <img src="https://cdn.pixabay.com/photo/2016/03/26/17/45/teacher-1280966_960_720.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${element.nome}</h5>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#professor${element.id}">
                    Saiba mais
                </button>
            </div>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="professor${element.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">${element.nome}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p>${element.descricao}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>`
    });
}

var ListarAvisos = async () => {
    const resposta = await fetch(`${BASE_URL}/avisos`)
    const resJson = await resposta.json()
    loadAvisos.style.display = 'none'
    resJson.forEach(element => {
        row_avisos.innerHTML+=
        `<div class="col">
            <div class="card h-100 text-bg-primary">
                <div class="card-body">
                    <h5 class="card-title">${element.titulo}</h5>
                    <p class="card-text">${element.descricao}</p>
                </div>
            </div>
        </div>`
    });
}

ListarProfessores()
ListarAvisos()