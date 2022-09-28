import supertest from 'supertest';
import { app } from '../server';



describe('user', () => {
  /*  describe('POST /users/create', () => {
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


    describe('POST /users/update/:userId', () => {
        it('should update user by Id and return user edit in JSON', async () => {
            const data = {
                name: "Jest2022",
                email: "jesta@yopmail.com",
                tableNumber: 456
            };
            await supertest(app)
                    .post('/users/update/63319e3e478d8b37e214197e')
                    .send(data)
                    .set('Accept', 'application/json')
                    .expect(200);
        });
    });*/

    describe('GET /users/all', () => {
        it('should return all users', async () => {

            await supertest(app)
                    .get('/users/all')
                    .set('Accept', 'application/json')
                    .expect(200);
        });

    });
});