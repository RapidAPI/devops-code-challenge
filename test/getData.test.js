/* eslint-disable no-unused-vars, no-undef */
const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../index");

const should = chai.should();
chai.use(chaiHttp);

describe("GET DATA", () => {
  it("should return a 404 when no entity is found", (done) => {
    const expected = {
      errors: [
        {
          status: 404,
          title: "Not Found",
          details: "Entity with id 1 not found."
        }
      ]
    };

    chai.request(server)
      .get("/getData/1")
      .end((err, res) => {
        res.should.have.status(404);
        err.response.body.errors.should.deep.equal(expected.errors);
        done();
      });
  });

  it("should return a 502 Bad Gatway when there is a DB error", (done) => {
    const expected = {
      errors: [
        {
          status: 502,
          title: "Bad Gateway",
          details: "Database Error"
        }
      ]
    };
    chai.request(server)
      .get("/getData/5")
      .end((err, res) => {
        res.should.have.status(502);
        err.response.body.errors.should.deep.equal(expected.errors);
        done();
      });
  });

  it("should return an entity", (done) => {
    const expected = { username: "Spyes" };

    chai.request(server)
      .get("/getData/15")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.data.should.deep.equal(expected);
        done();
      });
  });
});
