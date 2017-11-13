/**
 * @function getHello
 * @memberOf Example
 * @description Just an example that says hi
 * <p><i>GET /hello</i></p>
 * @returns res Hello
 * <p></p>
 */

module.exports = function (req, res) {
  res.status(200).send("Hello!");
};

