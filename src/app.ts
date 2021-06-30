import express,{ Application } from "express";
import morgan from "morgan";
import { Sequelize } from "sequelize-typescript";
import PersonaModule from "./modules/personas/persona.module";


 class App {
    public app: Application;

    constructor(private port? :number|string){
        this.app= express();
        this.middlewares();
        this.configure();
        this.dbConfig();
        this.injecModules();
        

    }
    public async listen (){
        this.app.listen(this.app.get("port"))
        console.log(`escuchando en el puesto ${this.app.get("port")}` )
    }
    private async middlewares (){
        this.app.use(morgan("dev"))
        this.app.use(express.json())
    }

    private async configure (){
        this.app.set("port",this.port || process.env.PORT ||3000)

    }

    private async dbConfig (){
        const db =new Sequelize({
            database:"persona",
            dialect:"mysql",
            host:"localhost",
            username:"root",
            models:[__dirname+"/modules/personas/model/"]
        })
        await this.dbConnect(db);
    }

    private async dbConnect(db:any  ){
        try {
            await db.authenticate()
            await db.sync({force:true})
            console.log("bd conectada")
        } catch (error) {
            console.log(error)
        }
    }

    private  injecModules (){
        const personaMudule= new PersonaModule(this.app)
    } 

}
export default App;