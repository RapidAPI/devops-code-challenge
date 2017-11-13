function NotFound(details = "Entity not found.") {
  this.value = 404;
  this.message = {
    title: "Not Found",
    details
  };
}
NotFound.prototype = Object.create(Error.prototype);
NotFound.prototype.constructor = NotFound;
module.exports = NotFound;
