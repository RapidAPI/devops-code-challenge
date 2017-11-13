/* eslint-disable no-unused-vars, no-undef */
const chai      = require("chai");
const chaiHttp  = require("chai-http");
const server    = require("../index");

const should    = chai.should();
chai.use(chaiHttp);

describe("GET HELLO", () => {
  it("should return an 'hello' message on /hello GET", (done) => {
    chai.request(server)
      .get("/hello")
      .end((err, res) => {
        res.text.should.equal("Hello!");
        res.should.have.status(200);
        done();
      });
  });
});
