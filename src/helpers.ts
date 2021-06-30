import { Sequelize } from 'sequelize-typescript';
const helpers =async () =>{
    const db =new Sequelize({
            database:"persona",
            dialect:"mysql",
            host:"localhost",
            username:"root",
            models:[__dirname+"/modules/personas/model/"]
        })
        await db.authenticate()
        await db.sync({force:true})
}


export default helpers;