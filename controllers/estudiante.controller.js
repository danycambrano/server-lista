import models from '../models';


export default{
    AddEstudiante: async(req,res,next)=>{
        try{
            const {
                matricula,
                nombre,
                apellidos,
                email
            }=req.body;

            const estudiante= new models.Estudiante({
                matricula,
                nombre,
                apellidos,
                email
            });

            const reg= await estudiante.save();
            res.status(200).json(reg);
        }catch(e){
            res.status(500).send({
                message: 'Ocurrio un eror en el servidor de BD'
            });
            next(e);
        }
    },

    ListEstudiantes: async(req,res,next)=>{
        try{
            const estudiantes= await models.Estudiante.find();
            res.json(estudiantes);
        }catch(e){
            res.status(500).send({
                message: 'Ocurrio un eror en el servidor de BD'
            });
            next(e);
        }
    },

    DelEstudiante: async(req,res,next)=>{
        try{
            const reg= await models.Estudiante.findByIdAndDelete(req.params.id);
            res.status(200).json(reg);
        }catch(e){
            res.status(500).send({
                message: 'Ocurrio un eror en el servidor de BD'
            });
            next(e);
        }
    },

    UpEstudiante: async (req,res,next)=>{
        try{
            const {
                matricula,
                nombre,
                apellidos,
                email
            }=req.body;

            const estudiante= {
                matricula,
                nombre,
                apellidos,
                email
            };
const reg=await models.Estudiante.findByIdAndUpdate(req.params.id, estudiante);
res.status(200).json(reg);

        }catch(e){
            res.status(500).send({
                message: 'Ocurrio un eror en el servidor de BD'
            });
            next(e);
        }
    },

    OneEstudiante: async (req,res,next)=>{
        try{
            const reg= await models.Estudiante.findById(req.params.id);
            if(!reg){
                res.status(400).send({
                    message: 'El registro no existe'
                });
            }else{
                res.status(200).json(reg);
            }
        }catch(e){
            res.status(500).send({
                message: 'Ocurrio un eror en el servidor de BD'
            });
            next(e);
        }
       
    }
}