const winston          = require("winston");
const winstonWrapper   = require("winston-meta-wrapper");
const config           = require("config");
require("winston-logstash");

let logger;

if (!process.env.NODE_ENV || process.env.NODE_ENV === "local") {
  logger = new (winston.Logger)({
    transports: [
      new (winston.transports.Console)()
    ],
    exitOnError: false
  });
} else {
  logger = new (winston.Logger)({
    transports: [
      new (winston.transports.Logstash)({
        host: config.get("Logstash.Host"),
        port: config.get("Logstash.Port"),
        max_connect_retries: -1,
        node_name: config.get("ServiceName"),
        level: config.get("Logger.LogLevel")
      })
    ],
    exitOnError: false
  });
  logger = winstonWrapper(logger);
  // add meta data to log
  logger.addMeta({
    environment: process.env.NODE_ENV
  });
}

module.exports = logger;
