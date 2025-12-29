import Router from "express"
import UsuariosController from "../controller/UsuariosController.js"

const route = Router()

route.get("/usuarios", UsuariosController.get_all_users)
route.get("/usuarios/:id", UsuariosController.get_user_by_id)
route.post("/usuarios", UsuariosController.create_user)
route.put("/usuarios/:id", UsuariosController.update_user_info)
route.delete("/usuarios/:id", UsuariosController.delete_user_by_id)

export default route;