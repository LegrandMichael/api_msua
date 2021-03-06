import { expect, BASE_URL, server } from './setup';

describe('Messages', () => {
    it('Afficher la page des messages', () => {
        server
            .get(`${BASE_URL}/messages`)
            .expect(200)
            .end((err, res) => {
                expect(res.status).to.equal(200);
                expect(res.body.messages).to.be.instanceOf(Array);
                res.body.messages.forEach((m) => {
                    expect(m).to.have.property('name');
                    expect(m).to.have.property('message');
                });
            });
    });

    it('Ajouter un message', () => {
        const data = { name: 'some name', message: 'new message' };
        server
            .post(`${BASE_URL}/messages`)
            .send(data)
            .expect(200)
            .end((err, res) => {
                expect(res.status).to.equal(200);
                expect(res.body.messages).to.be.instanceOf(Array);
                res.body.messages.forEach((m) => {
                    expect(m).to.have.property('id');
                    expect(m).to.have.property('name', data.name);
                    expect(m).to.have.property('message', `MODIFICATION : ${data.message}`);
                });
            });
    });
});
