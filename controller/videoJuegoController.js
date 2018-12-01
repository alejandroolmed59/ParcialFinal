const mongoose= require('mongoose');
const videojuegoModel= require('../models/Videojuego');
var videojuegoC={};

videojuegoC.getAll=(function(req, res){
    videojuegoModel.find({}, function(err, datos){
        if(err){
            res.status(500).json({err});
        }else{
            console.log('Data obtenidad con exito')
            res.status(200).json({datos});
        }
    })
})

videojuegoC.registrar=(function(req, res){
    var obj= new videojuegoModel({
        Titulo: req.body.titulo,
        Desarrolladora: req.body.desarrolladora,
        Ign: req.body.ign
    });
    obj.save(function(err){
        if(err){
            res.status(500).json(err)
        }else{
            console.log('Se registro con exito');
            res.status(200).json(obj);
        }
    })

})
videojuegoC.buscarporId= (function(req, res){
    //console.log(req);
    var id= req.params.id;
    videojuegoModel.findById(id, function(err, juego){
        if(err){
            res.status(500).json({
                msj:'No fue encontrado el videojuego',
                err
            })
        }else{
            res.status(200).json({ok:true, juego});
        }
    })
});

videojuegoC.actualizar= (function(req, res){
    //console.log(req);
    var id= req.params.id;
    var actualizado={
        Titulo: req.body.titulo,
        Desarrolladora: req.body.desarrolladora,
        Ign: req.body.ign
    }
    videojuegoModel.findByIdAndUpdate(id, actualizado, function(err){
        if(err){
            res.status(500).json({msj:'No se pudo actualizar', err});
        }else{
            res.status(200).json({ok:true, actualizado});
        }
    })
});

videojuegoC.deletear= (function(req, res){
    //console.log(req);
    var id= req.params.id;

    videojuegoModel.findByIdAndDelete(id, function(err, eliminado){
        if(err){
            res.status(500).json({msj:'No se pudo eliminar ', err});
        }else{
            res.status(200).json({ok:true, eliminado});
        }
    })
});


module.exports=videojuegoC;