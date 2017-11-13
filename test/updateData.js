/* eslint-disable no-unused-vars, no-undef */
const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../index");

const should = chai.should();
chai.use(chaiHttp);

describe("UPDATE DATA", () => {
  it("should return a 204 when data is successfuly updated", (done) => {
    chai.request(server)
      .put("/updateData/5")
      .send({ username: "Spyes23" })
      .end((err, res) => {
        res.should.have.status(204);
        res.body.should.deep.equal({});
        done();
      });
  });
});
