const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;


describe('Server', () => {
  describe('Get /', () => {
    it('should return hello world response', (done) => {
      request(app)
      .get('/')
      .expect(404)
      .expect((res) => {
        expect(res.body).toInclude({
          error: 'Page Not Found.'
        });
      })
      // .expect('Hello World!')
      .end(done);
    });
  });

  describe('Get /users', () => {
    it('should return my user object', (done) => {
      request(app)
      .get('/users')
      .expect(200)
      .expect((res) => {
        expect(res.body).toInclude({
          name: 'Ezra Chiang',
          age: '23'
        });
      })
      .end(done);
    });
  });
});
