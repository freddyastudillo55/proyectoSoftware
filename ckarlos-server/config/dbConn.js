const moongose = require('mongoose')

const connectDB = async () => {
    try{
        await moongose.connect(process.env.DATABASE_URI)
    } catch (err) {
        console.log(err)
    }
}

module.exports = connectDB