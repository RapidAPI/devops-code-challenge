/* eslint-disable no-unused-vars, no-undef */
const chai      = require("chai");
const chaiHttp  = require("chai-http");
const server    = require("../index");

const should    = chai.should();
chai.use(chaiHttp);

describe("GET POW", () => {
  it("should return the square of the given number /pow/:num GET", (done) => {
    chai.request(server)
      .get("/pow/4")
      .end((err, res) => {
        res.text.should.equal("16");
        res.should.have.status(200);
        done();
      });
  });

  it("should return 400 status when parameter is not a number", (done) => {
    chai.request(server)
      .get("/pow/a")
      .end((err, res) => {
        err.should.have.status(400);
        done();
      });
  });

  it("should return a meaningful error message when parameter is invalid", (done) => {
    const expected = {
      errors: [
        {
          status: 400,
          title: "Bad Parameter",
          details: "\"num\" must be less than or equal to 10"
        },
        {
          status: 400,
          title: "Bad Parameter",
          details: "\"float\" must be a boolean"
        }

      ]
    };
    chai.request(server)
      .get("/pow/40?float=test")
      .end((err, res) => {
        err.response.body.should.deep.equal(expected);
        err.should.have.status(400);
        done();
      });
  });
});
