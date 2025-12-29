import mongoose from "mongoose"

async function connection_data_base() {

    mongoose.connect("mongodb://localhost:27017/Registros")
    return mongoose.connection
    
}

export default connection_data_base;