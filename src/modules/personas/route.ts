import { Application } from "express";
import RouterController from "./routerController/persona.routerCrontoller";

class Route {
    private route :RouterController
    constructor(app:Application,route : RouterController = new RouterController){

        this.route=route
        this.routeConfig(app)
    }
    private routeConfig(app:Application){
        app.route("/personas").get(this.route.getPersonas)
        app.route("/persona").post(this.route.createPersona)
        app.route("/persona/:id").get(this.route.getID)
    }
}

export default Route;