# switch-hack-demo

A tiny shop API (plain Node.js, no dependencies) used as the demo project for the
**Flip the Switch** hackathon. Customers report problems in team chat, and AI agents
triage them, reproduce bugs, open GitHub issues and review fixes.

## Run it

```bash
npm start      # starts on http://localhost:3000
npm test       # runs the tests
```

## Endpoints

| Method | Path | Example |
|---|---|---|
| GET | `/products` | `/products?q=Laptop&page=1` |
| POST | `/cart/total` | body: `{"items":[{"price":10,"qty":2}],"discountPercent":10}` |
| GET | `/greet` | `/greet?name=Sam` |

Requires Node.js 18 or newer.
