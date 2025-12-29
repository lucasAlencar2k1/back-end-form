import express from "express"
import usuarios from "../routes/usuariosRoute.js"

function route(app) {

    app.get("/", (req, res) => {
        res.status(200).send("Rota principal back-end.")
    })

    app.use(express.json(), usuarios)

}

export default route;