import supertest from 'supertest';
import { app } from '../server';
describe('user', () => {
    describe('POST /users/create', () => {
        //supertest return a promise so i add async
        it('should create user and return JSON', async () => {
            const data = {
                    name: "winner jest",
                    email: "testjest@yopmail.com", 
                    tableNumber: 13
                };
           await supertest(app)
                        .post('/users/create')
                        .send(data)
                        .set('Accept', 'application/json')
                        .expect(201);
                        
        });
    });
});