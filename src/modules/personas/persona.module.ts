import { Application } from "express";
import Route from "./route";

class PersonaModule{
    private route:Route
    constructor(app:Application ){
        this.route=new Route(app)

    }
}
export default PersonaModule;