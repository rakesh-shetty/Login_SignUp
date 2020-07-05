const mongoose = require('mongoose')

const setupDB = () => {
    mongoose.connect('mongodb://localhost:27017/simplilearn-assessment',{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
        .then(() => {
            console.log('Connected to DB')
        })
        .catch((err) => {
            console.log(err)
        })
}

module.exports = setupDB


