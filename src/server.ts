import App from "./app";

    const app=new App();
    try {
         app.listen()
    } catch (error) {
        console.log(error)
    }


export default app;