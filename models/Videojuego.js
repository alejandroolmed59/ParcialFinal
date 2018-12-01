var mongoose= require('mongoose');
var Schema = mongoose.Schema;

const videoJuegoSchema= new Schema({
    Titulo: {
        type:String
    },
    Desarrolladora:{
        type:String
    },
    Ign:{
        type: String
    }
})
module.exports= mongoose.model('videojuego',videoJuegoSchema);