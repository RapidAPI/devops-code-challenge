## NodeJS Seed Project

### Contains:
- Express
- ESLint
- Winston logger
- Body-Parser
- NewRelic
- fs
- Config
- Pre-commit

### Health check (For load balancers, etc)
GET HOST:PORT/ping should return 200 { payload: "pong" }

### Steps after clone:
1. Change the service name in config/default.json. e.g. "ServiceName": "Seed" -> "ServiceName": "Discussions"


### Changelog
- **13/6/2017** - Initial commit