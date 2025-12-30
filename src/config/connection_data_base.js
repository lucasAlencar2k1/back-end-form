import mongoose from "mongoose"

async function connection_data_base() {

    mongoose.connect(process.env.CONNECTION_DATABASE)
    return mongoose.connection
    
}

export default connection_data_base;