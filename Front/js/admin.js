const BASE_URL = 'https://api-escola-argeu.herokuapp.com/professores'
const rowFuncionarios = document.querySelector('.row-funcionarios')
const loadFuncionarios = document.querySelector('.c-loader')
const nome_cadastrar = document.querySelector('.nome_cadastrar')
const form_cadastrar = document.querySelector('.form_cadastrar')
const cargo_cadastrar = document.querySelector('.cargo_cadastrar')
const cpf_cadastrar = document.querySelector('.cpf_cadastrar')
const descricao_cadastrar = document.querySelector('.descricao_cadastrar')


var Listar = async () => {
    const resposta = await fetch(`${BASE_URL}`)
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
                    opções
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
                    <form class = 'p-3'>
                        <div class="">
                            <label for="exampleInputEmail1" class="form-label">Nome</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="nome" value = ${element.nome}>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Cargo</label>
                            <input type="text" class="form-control" id="exampleInputEmail2" aria-describedby="cargo" value = ${element.cargo}>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Descrição</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3">${element.descricao}</textarea>

                        </div>
                        <button class="btn btn-primary">Atualizar</button>
                        <button class="btn btn-danger">Deletar</button>
                    </form>
                </div>
            </div>
        </div>
    </div>`
    });
}

form_cadastrar.onsubmit = async (e) =>{
    e.preventDefault()
    try {
        dataraw = {
            'nome': nome_cadastrar.value,
            'descricao': descricao_cadastrar.value,
            'cpf': cpf_cadastrar.value,
            'cargo': cargo_cadastrar.value
        }

        const option = {
            method: 'POST',
            body: JSON.stringify(dataraw),
            headers:{
                'Content-Type': 'application/json',
            },
        }

        const resposta = await fetch(BASE_URL,option)
        if(resposta.status != '201'){
            return alert('Ocorreu algum erro. ' + await resposta.json())
        }
        alert('Funcionário cadastrado!')
        window.reload

    } catch (error) {
        alert('Algum erro está ocorrendo. Informe o administrador do site \nErro: '+error) 
    }
}


Listar()