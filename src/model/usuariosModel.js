import mongoose from "mongoose"

const usuarios_schema = new mongoose.Schema({      
    email: { type: String },
    password: { type: String }
}, { versionKey: false })

const usuarios = mongoose.model("usuarios", usuarios_schema)

export default usuarios;