const mongoose= require('mongoose');
const videojuegoModel= require('../models/Videojuego');
var videojuegoC={};

videojuegoC.getAll=(function(req, res){
    videojuegoModel.find({}, function(err, datos){
        if(err){
            res.status(500).json({status:500, err});
        }else{
            console.log('Data obtenidad con exito')
            res.status(200).json({status:200, datos});
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
            res.status(500).json({status:500, err})
        }else{
            console.log('Se registro con exito');
            res.status(200).json({status:200, obj});
        }
    })

})
videojuegoC.buscarporId= (function(req, res){
    //console.log(req);
    var id= req.params.id;
    videojuegoModel.findById(id, function(err, juego){
        if(err || juego==null){
            res.status(500).json({
                msj:'No fue encontrado el videojuego',
                err,
                status:500
            })
        }else{
            res.status(200).json({status:200, juego});
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
            res.status(500).json({msj:'No se pudo actualizar', err, status:500});
        }else{
            res.status(200).json({status:200, actualizado});
        }
    })
});

videojuegoC.deletear= (function(req, res){
    //console.log(req);
    var id= req.params.id;

    videojuegoModel.findByIdAndDelete(id, function(err, eliminado){
        if(err){
            res.status(500).json({msj:'No se pudo eliminar ', err, status:500});
        }else{
            res.status(200).json({status:200, eliminado});
        }
    })
});


module.exports=videojuegoC;