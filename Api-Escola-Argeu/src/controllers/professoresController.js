const Professores = require('../models/Professores')

const professoresController = {
    async listar(req, res){
        try {
            const listaProfessores = await Professores.findAll()
            if (listaProfessores.length == 0) {
                return res.status(200).json('Não há professores cadastrados!')
            }
            res.status(200).json(listaProfessores)
        } catch (error) {
            console.error('Houve algum erro. Entre em contato com o administrador do sistema. Erro: ', error);
        }
        
    },

    async cadastrar(req,res){
        try {
            console.log(req.file);
            const {nome, cpf, descricao} = req.body
            const cpfProfessor = await Professores.findAll({where:{cpf}})
            if (cpfProfessor.length != 0) {
                return res.status(400).json('CPF já cadastrado')
            }
            const cadastrarProfessor = await Professores.create({nome, cpf, descricao, imagem: req.file.path})
            res.status(201).json(cadastrarProfessor)
        } catch (error) {
            console.error('Houve algum erro. Entre em contato com o administrador do sistema. Erro: ', error);
        }
    },
    async atualizar(req,res){
        try {
            const { id } = req.params
            const {nome, cpf, descricao} = req.body
            await Professores.update({nome, cpf, descricao},{
                where:{
                    id
                }
            })
            res.status(201).json('Atualizado!')
        } catch (error) {
            console.error('Houve algum erro. Entre em contato com o administrador do sistema. Erro: ', error);
        }
    },
    async deletar(req,res){
        try {
            const { id } = req.params
            await Professores.destroy({where:{id}})
            res.status(400).json('Deletado!')
        } catch (error) {
            console.error('Houve algum erro. Entre em contato com o administrador do sistema. Erro: ', error);
        }
    },
}

module.exports = professoresController