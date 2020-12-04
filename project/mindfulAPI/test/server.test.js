const server = require("../server");
const chai = require("chai");
const chaiHttp = require("chai-http");

const { expect } = chai;
chai.use(chaiHttp);
describe("Testing server", () => {
    it("gets user", done => {
        chai
            .request(server)
            .get("/getUser")
            .end((err, res) => {
                expect(res).to.have.status(200);
                done();
            });
    });

    it("checks to see if updating time limits works", done => {
        chai
            .request(server)
            .get("/updateLimits")
            .end((err, res) => {
                expect(res).to.have.status(200);
                done();
            });
    });

    it("checks to see if updating counter", done => {
        chai
            .request(server)
            .get("/updateCounter")
            .end((err, res) => {
                expect(res).to.have.status(200);
                done();
            });
    });
});