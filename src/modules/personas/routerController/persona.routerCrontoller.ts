import BusinessCrontroller from "../businessController/persona.businessCrontroller";
import {Response , Request} from "express";

class RouterController{
    private business :BusinessCrontroller
    constructor(business : BusinessCrontroller = new BusinessCrontroller){
        this.business=business;
    }
    public getPersonas= async (req:Request, res :Response )=>{
        try {
            const personas=await this.business.getAll();
            res.status(200).json(personas)
        } catch (error) {
            res.status(400).json(error.message)
        }
        
    }

    public createPersona = async(req:Request, res :Response) =>{
        const {name,lastName,age}=req.body;
        
        if(!name || !lastName||!age){
            return res.status(400).send("falta datos")
        }
        try {
            const persona =await this.business.create(name,lastName,age);
            res.status(200).json(persona)
        } catch (error) {
            res.status(400).json(error.message)
        }
    }

    public getID = async(req:Request, res :Response) =>{
        const {id}=req.params;
        
        if(!id){
            return res.status(400).send("falta id")
        }
        try {
            const persona =await this.business.getId(id)
            res.status(200).json(persona)
        } catch (error) {
            res.status(400).json(error.message)
        }
    }

    // public getMessage= async (req:Request, res :Response)=>{
    //     try {
    //     res.status(200).json({data: 'Pong!'})
            
    //     } catch (error) {
    //         res.status(400).json({error:error.message})
    //     }
    // }
}
export default RouterController;