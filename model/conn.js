const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/crud'

mongoose.connect(url,  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)

.then(()=>{
    console.log("Connected to Mongoose")
})
.catch((err)=>{
    console.log("Error in connecting mongoose")
})
mongoose.Promise = global.Promise
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'))
module.exports = {db, mongoose}