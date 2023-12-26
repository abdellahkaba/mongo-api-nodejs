const mongoose = require("mongoose")

//La chaîne de connexion à la base de donnée
const connectDB = async () => {
    try{
        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.MONGO_URI).then(() => console.log("Connection reussi à la base de donnée"))

    }catch(err) {
        console.log(err);
        process.exit();
    }

}

module.exports = connectDB;