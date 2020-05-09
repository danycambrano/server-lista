import mongoose, {Schema} from 'mongoose';

const estudiante= new Schema({
    matricula:{type:String},
    nombre: {type: String},
    apellidos: {type: String},
    email: {type:String},
    createdAt:{type: Date, default: Date.now}    
});

const Estudiante = mongoose.model('estudiantes',estudiante);
export default Estudiante;