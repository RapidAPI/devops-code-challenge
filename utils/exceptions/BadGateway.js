function BadGateway(details = "Bad Gateway.") {
  this.value = 502;
  this.message = {
    title: "Bad Gateway",
    details
  };
}
BadGateway.prototype = Object.create(Error.prototype);
BadGateway.prototype.constructor = BadGateway;
module.exports = BadGateway;
