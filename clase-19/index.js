let {Schema, model} = require('mongoose');
let {connection, mongoose} = require('./config/database');
let {estudiantesCreateSchema} = require('./schemas/estudiantesSchemas');
const estudiantesSchema = new Schema(estudiantesCreateSchema);
const estudiantesModel = model("estudiantes", estudiantesSchema);

(async ()=>{
    const estudiantes = [
        { nombre: 'Pedro', apellido: 'Mei', edad: 21, dni: '31155898', curso: '1A', nota: 7 },
        { nombre: 'Ana', apellido: 'Gonzalez', edad: 32, dni: '27651878', curso: '1A', nota: 8 },
        { nombre: 'José', apellido: 'Picos', edad: 29, dni: '34554398', curso: '2A', nota: 6 },
        { nombre: 'Lucas', apellido: 'Blanco', edad: 22, dni: '30355874', curso: '3A', nota: 10 },
        { nombre: 'María', apellido: 'García', edad: 36, dni: '29575148', curso: '1A', nota: 9 },
        { nombre: 'Federico', apellido: 'Perez', edad: 41, dni: '320118321', curso: '2A', nota: 5 },
        { nombre: 'Tomas', apellido: 'Sierra', edad: 19, dni: '38654790', curso: '2B', nota: 4 },
        { nombre: 'Carlos', apellido: 'Fernández', edad: 33, dni: '26935670', curso: '3B', nota: 2 },
        { nombre: 'Fabio', apellido: 'Pieres', edad: 39, dni: '4315388', curso: '1B', nota: 9 },
        { nombre: 'Daniel', apellido: 'Gallo', edad: 25, dni: '37923460', curso: '3B', nota: 2 }
    ]
    try {
        const inserciones = [];
        for (const estudiante of estudiantes) {
            inserciones.push(estudiantesModel.create(estudiante));
        }
        const result = await Promise.allSettled(inserciones);
        let rejected = result.filter(element =>  element.status == "rejected")
        if (rejected.length > 0) {
            console.log("Falló", rejected);
        }else{
            console.log("Todo ok");
        }
        await mongoose.disconnect();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
});

//*Ejercicio 2

(async ()=>{
    try {
        //1.a
        let _1A = await estudiantesModel.find({}).sort({nombre:1});
        // console.log("Res 1)-a):", _1A);

        //1.b
        let _1B = await estudiantesModel.find({}).sort({edad: 1}).limit(1);
        // console.log("Res 1)-b):", _1B);
        
        //1.c
        let _1C = await estudiantesModel.find({curso:"2A"});
        // console.log("Res 1)-c):", _1C);
        
        //1.d
        let _1D = await estudiantesModel.find({}).sort({edad: 1}).limit(1).skip(1);
        // console.log("Res 1)-d):", _1D);
        
        //1.d
        let _1E = await estudiantesModel.find({}, {nombre:1, apellido:1, curso:1}).sort({apellido: -1});
        console.log("Res 1)-e):", _1E);
        
        //1.f
        let _1F = await estudiantesModel.find({nota: 10}, {nombre:1, apellido:1, curso:1});
        // console.log("Res 1)-f):", _1F);

        //1.g
        let _1G = await estudiantesModel.find({}, {nota:1, _id:0});
        let total = _1G.reduce((prev, current) =>{
            return prev + current.nota;
        }, 0);
        let promedio = total/_1G.length;
        console.log("Res 1)-g) Promedio:", promedio);

        //1.h
        let _1H = await estudiantesModel.find({curso:"1A"}, {nota:1, _id:0});
        let total2 = _1H.reduce((prev, current) =>{
            return prev + current.nota;
        }, 0);
        let promedio2 = total2/_1H.length;
        console.log("Res 1)-h) Promedio curso 1A:", promedio2);

    } catch (error) {
        console.log(error);
    }
});

//Ejercicio 3
(async ()=>{
    try {
        // let primera = await estudiantesModel.updateOne({nombre: "Lucas"},{dni: 20355875});
        // console.log("Respuesta 1:", primera);

        // let segunda = await estudiantesModel.updateMany({},{ingreso: false});
        // console.log("Respuesta 2:", segunda);

        // let tercera = await estudiantesModel.updateMany({curso: "1A"}, {ingreso: true});
        // console.log("Respuesta 3:", tercera);
        
        // let cuarta = await estudiantesModel.find({nota: {$gte: 4}}, {_id:0, __v:0});
        // console.log("Respuesta 4:", cuarta);

        // let quinta = await estudiantesModel.find({ingreso: true}, {_id:0, __v:0});
        // console.log("Respuesta 5:", quinta);

        // let sexta = await estudiantesModel.deleteMany({ingreso: true});
        // console.log("Respuesta 6:", sexta);
        
        let septima = await estudiantesModel.find({}, {__v:0});
        septima.forEach(estudiante => {
            console.log(JSON.stringify(estudiante), "FECHA DE CRACIÓN", new Date(estudiante._id.getTimestamp()).toLocaleDateString());
        });
        // console.log("Respuesta 7:", septima);

    } catch (error) {
        console.log(error);
    }
});