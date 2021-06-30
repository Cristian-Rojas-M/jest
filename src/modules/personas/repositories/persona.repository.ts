import Persona from "../model/persona.model";


 class PersonaRepository {
    public async getAll():Promise<Persona[]>{
        const personas= await Persona.findAll();
        if(!personas){
            throw new Error("no se encontraron personas");
        }
        return personas;
    }

    public async updateId(){
        
    }

    public async create(name:string,lastName:string,age:number) :Promise<Persona>{
        const persona = await  Persona.create({name,lastName,age});
        
        if(!persona){
            throw new Error("no se creo la persona");
        }
        return persona;
        
    }
    public async delete(){
        
    }

    public async getId(id:string):Promise<Persona>{
        const persona = await Persona.findByPk(id);
        if(!persona){
            throw new Error("no exixte la persona");
        }
        return persona;
    }
}

export default PersonaRepository;