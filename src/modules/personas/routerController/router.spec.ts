import request from "supertest";
import App from "../../../app";
import helpers from "../../../helpers";
import Persona from "../model/persona.model";
const app = new App();

describe("test module persona ", () => {
  beforeAll(async () => {
    await helpers();
    await Persona.create({ name: "cristian", lastName: "rojas", age: 22 });
  });

  afterAll(() => {});

  describe("router get ", () => {
    it("Request /personas should return count personas", async () => {
      const cont = await Persona.count();
      const result = await request(app.app).get("/personas");
      expect(result.status).toBe(200);
      expect(result.body.length).toBe(cont);
    });

    it("Request /personas should return id", async () => {
      const cont = await Persona.count();
      const result = await request(app.app).get(`/persona/1`);
      expect(result.status).toBe(200);
      expect(result.body.name).toBe("cristian");
      console.log(result.error)
    });

    
  });
  describe("router personas post ",()=>{
    it("return error falta datos" ,async ()=>{
        const result = await request(app.app)
      .post("/persona")
      .send({ name: "cristian", lastName: "rojas" })
      .set("Accept", "application/json");
    expect(result.status).toBe(400);
    expect(result.text).toStrictEqual("falta datos")
    
    })

    it("Request /persona create persona", async () => {
    const result = await request(app.app)
      .post("/persona")
      .send({ name: "cristian", lastName: "rojas", age: 24 })
      .set("Accept", "application/json");
    expect(result.status).toBe(200);
    // expect(result.text).toBe('[]');
  });
  })
  
});
