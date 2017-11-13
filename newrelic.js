const config   = require("config");

/**
 * New Relic agent configuration.
 *
 * See lib/config.default.js in the agent distribution for a more complete
 * description of configuration variables and their potential values.
 */
exports.config = {
  /**
   * Array of application names.
   */
  app_name: [`${config.get("ServiceName")}-${process.env.NODE_ENV}`],
  /**
   * Your New Relic license key.
   */
  license_key: "8c7bcc4578c022a44e29ba79b9b850fe8dc1026a",
  logging: {
    /**
     * Level at which to log. 'trace' is most useful to New Relic when diagnosing
     * issues with the agent, 'info' and higher will impose the least overhead on
     * production applications.
     */
    level: process.env.NODE_ENV === "production" ? "info" : "trace"
  }
};
