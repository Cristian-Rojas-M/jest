import PersonaRepository from "../repositories/persona.repository";

class BusinessCrontroller{
    private repository:PersonaRepository
    constructor(repository :PersonaRepository = new PersonaRepository){
        this.repository=repository;
    }
    public async create(name:string ,lastName:string,age:number){
        return this.repository.create(name,lastName,age);
        
    }

    public async getAll(){
        return this.repository.getAll();
    }

    public async getId(id:string){
        return this.repository.getId(id);
    }


}
export default BusinessCrontroller;