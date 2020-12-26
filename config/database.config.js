const mongoose = require("mongoose")

exports.connectDb = () => {
    const databaseUrl = "mongodb+srv://test:test123@cluster0.9kl2w.mongodb.net/learn?retryWrites=true&w=majority"
    const options = {useNewUrlParser: true, useUnifiedTopology: true}

    try {
        mongoose.connect(databaseUrl, options);
        console.info("Connection Established")
    } catch (error) {
        console.log(error)
        console.error("Database Connection failed")
        process.exit(1)
    }
}