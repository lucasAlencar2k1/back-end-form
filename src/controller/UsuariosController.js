import usuarios from "../model/usuariosModel.js"

class UsuariosController {

    static async get_all_users(req, res) {
        try {
            const lista = await usuarios.find({})
            res.status(200).send(lista)
        } catch(error) {
            res.status(500).send("Falha ao buscar registros!!!")
        }
    }

    static async get_user_by_id(req, res) {
        try {
            const id = req.params.id
            const usuario_encontrado = await usuarios.findById(id)
            res.status(200).json(usuario_encontrado)
        } catch(error) {
            res.status(500).send("Falha ao buscar usuário!!!")
        }
    }

    static async create_user(req, res) {
        try {
            const body = req.body
            await usuarios.create(body)
            res.status(201).send("Usuário criado.")
        } catch(error) {
            res.status(500).send("Falha ao criar usuário!!!")
        }
    }

    static async update_user_info(req, res) {
        try {
            const id = req.params.id
            const body = req.body
            await usuarios.findByIdAndUpdate(id, body)
            res.status(200).send("Informações atualizadas.")
        } catch(error) {
            res.status(500).send("Falha ao atualizar dados do usuário!!!")
        }
    }

    static async delete_user_by_id(req, res) {
        try {
            const id = req.params.id
            await usuarios.findByIdAndDelete(id)
            res.status(200).send("Usuário removido.")
        } catch(error) {
            res.status(500).send("Falha ao remover usuário!!!")
        }
    }

}

export default UsuariosController;