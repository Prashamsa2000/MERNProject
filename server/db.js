const mongoose=require('mongoose')
const Mongo_URI="mongodb://localhost:27017/mernproject"


const dbConnect=()=>{
    mongoose.connect(Mongo_URI)
    .then(()=>{
        console.log("conn");
        
    })
}

module.exports=dbConnect