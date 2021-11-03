let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);

describe('GET necessary files', () => {
    it('should return GET status 200 OK for root directory', (done) => {
        chai.request(server)
        .get('/')
        .end((err, res) => {
            res.should.have.status(200);
            done();
        });
    });
    it('should return GET status 200 OK for /api/v1/dht1 directory', (done) => {
      chai.request(server)
      .get('/api/v1/dht1')
      .end((err, res) => {
          res.should.have.status(200);
          done();
      });
  });
});