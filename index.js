/* eslint-disable */
if (process.env.NODE_ENV === "production" || process.env.NODE_ENV === "staging") {
  require("newrelic");
  require("@newrelic/native-metrics");
}

const config      = require("config");
const compression = require('compression')
const Express     = require("express");
const fs          = require("fs");
const logger      = require("./utils/logger");
const cluster     = require('cluster');
const numCPUs     = require('os').cpus().length;

const app         = new Express();
const port        = process.env.PORT || config.get("DefaultPort");


if (cluster.isMaster) {
  logger.info(`[${config.get("ServiceName")}] - Master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }


} else {

  app.use(compression());

  global.logger = logger;

  app.get("/ping", (req, res) => {
    res.status(200).send({payload: "pong"});
  });

  fs.readdirSync("./modules")
    .filter(file => (file.indexOf(".") !== 0))
    .forEach((file) => {
      require(`./modules/${file}/${file}.routes.js`)(app); // eslint-disable-line
    });

  app.listen(port, (error) => {
    if (error) {
      logger.error("Error");
    } else {
      logger.info(`[${config.get("ServiceName")}] - Running on port ${port}`);
    }
  });
}