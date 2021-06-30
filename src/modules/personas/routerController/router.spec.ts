import supertest = require('supertest');
import app from "../../../server";
jest.useFakeTimers()

// app.listen() ;
const request: supertest.SuperTest<supertest.Test> = supertest(app.app);


(request.get('/personas') as supertest.Test)
    .expect('Content-Type', /json/)
    
    .expect(200)
    .end((err, res) => {
        if (err) throw err;
    });
