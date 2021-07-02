//aqui vamos a validar con el modulo Joi nested objects and arreglos
const Joi = require('joi');

const arrayString=['Banana','Apple','Cheese'];
const arrayObject=[{example:'Example'},{example:'Example2'}];
const userInput = {personalInfo:{
    streetAddress:'2247512',
    city:'Santo Domingo',
    state:'f1'
},preferences:arrayObject}

//para poder crear validar el objeto de userInput dividiremos el schema en dos uno para personalInfo y otro para preferences
//asi se hace mucho mas facil trabajar
//si tienes un objetos muy complicado o lo que vas a validar es muy complejo dividelo en diferentes schemas
const personalInfoSchema=Joi.object().keys({
    streetAddress:Joi.string().trim().required(),
    city:Joi.string().trim().required(),
    state:Joi.string().trim().length(2).required()
});
//esto es para validar un array
//const preferencesSchema = Joi.array().items(Joi.string()); esto es para arreglos que sean string
const preferencesSchema = Joi.array().items(Joi.object().keys({
    example:Joi.string().required()
}));

const schema = Joi.object().keys({
    personalInfo:personalInfoSchema,
    preferences:preferencesSchema
});

Joi.validate(userInput,schema,(err,result)=>{
    if(err)
        console.log(err)
    else    
        console.log(result)
});
