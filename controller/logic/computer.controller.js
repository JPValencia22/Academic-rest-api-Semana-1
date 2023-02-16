/** Dto*/

const computerDto = require("../../model/dto/computer.dto");
const brandDto = require("../../model/dto/brand.dto");

//** Helpers */
const notHelper = require("../helpers/notifications.helpers");


exports.createComputer = (req, res, next)=>{
    let computer={
        brand : req.body.brand,
        Os: req.body.Os,
        reference: req.body.reference,
        memory: req.body.memory,
        storage: req.body.storage,
        color: req.body.color
    };
    computerDto.create(computer,(err, data)=>{
        if(err){
            return res.status(400).json({           // en la siguiente linea el profesor maneja estudiante video 2 min 48:59 dice que debe guardar nuevamente pero ya en el usuario
                                                    //pero no estoy muy seguro si en nuestro caso manejamos como usuario la marca o simplemente se deja en computador que es de la linea 10 a la 15
                error: err
            });                                     
        }
        let brand = {                           
            name: req.body.name,
            country: req.body.country,
            foundation: req.body.foundation,
            brandsValue: req.body.brandsValue
        };
        brandDto.save(brand,(err,brand)=>{

            if(err){
                return res.status(400).json({
                    error: err
                });           
            }

            notHelper.sendSMS(computer.reference);

            res.status(201).json({
                info: data
            })

        })

    })
};

exports.updateComputer = (req, res, next)=>{
    let computer={
        brand : req.body.brand,
        Os: req.body.Os,
        reference: req.body.reference,
        memory: req.body.memory,
        storage: req.body.storage,
        color: req.body.color
    };
    computerDto.updateComputer({_id: req.body.id}, std, computer,(err, data)=>{ 
        if(err){
            return res.status(400).json({           // en la siguiente linea el profesor maneja estudiante video 2 min 48:59 dice que debe guardar nuevamente pero ya en el usuario
                                                    //pero no estoy muy seguro si en nuestro caso manejamos como usuario la marca o simplemente se deja en computador que es de la linea 10 a la 15
                error: err
            });                                     
        }

            res.status(201).json({
                info: data
            })
    })
};

exports.getAll = (req, res, next)=>{

    computerDto.getAll({},(err, data)=>{ 
        if(err){
            return res.status(400).json({           // en la siguiente linea el profesor maneja estudiante video 2 min 48:59 dice que debe guardar nuevamente pero ya en el usuario
                                                    //pero no estoy muy seguro si en nuestro caso manejamos como usuario la marca o simplemente se deja en computador que es de la linea 10 a la 15
                error: err
            });                                     
        }

            res.status(200).json({
                info: data
            })
    })

    
};

exports.getByCode = (req, res, next)=>{

    computerDto.getByCode({code: req.params.code},(err, data)=>{ 
        if(err){
            return res.status(400).json({           // en la siguiente linea el profesor maneja estudiante video 2 min 48:59 dice que debe guardar nuevamente pero ya en el usuario
                                                    //pero no estoy muy seguro si en nuestro caso manejamos como usuario la marca o simplemente se deja en computador que es de la linea 10 a la 15
                error: err
            });                                     
        }

            res.status(200).json({
                info: data
            })
    })
    
};

exports.deleteComputer = () =>{
    computerDto.delete({id: req.body.id},(err, data)=>{ 
        if(err){
            return res.status(400).json({           // en la siguiente linea el profesor maneja estudiante video 2 min 48:59 dice que debe guardar nuevamente pero ya en el usuario
                                                    //pero no estoy muy seguro si en nuestro caso manejamos como usuario la marca o simplemente se deja en computador que es de la linea 10 a la 15
                error: err
            });                                     
        }

            res.status(204).json({
                info: data
            })
    })
}

    





