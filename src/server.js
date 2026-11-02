const http = require("http");
const { URL } = require("url");
const { searchProducts, paginate } = require("./products");
const { calculateTotal, applyDiscount, formatPrice } = require("./cart");
const { greet } = require("./users");

const PORT = process.env.PORT || 3000;

function send(res, status, body) {
  res.writeHead(status, { "Content-Type": "application/json" });
  res.end(JSON.stringify(body, null, 2));
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let data = "";
    req.on("data", (chunk) => (data += chunk));
    req.on("end", () => {
      try {
        resolve(data ? JSON.parse(data) : {});
      } catch (err) {
        reject(err);
      }
    });
  });
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`);

  try {
    // GET /products?q=laptop&page=1
    if (req.method === "GET" && url.pathname === "/products") {
      const q = url.searchParams.get("q") || "";
      const page = Number(url.searchParams.get("page") || 1);
      const results = paginate(searchProducts(q), page);
      return send(res, 200, { page, results });
    }

    // POST /cart/total  body: { "items": [{ "price": 10, "qty": 2 }], "discountPercent": 10 }
    if (req.method === "POST" && url.pathname === "/cart/total") {
      const body = await readBody(req);
      let total = calculateTotal(body.items || []);
      if (body.discountPercent) total = applyDiscount(total, body.discountPercent);
      return send(res, 200, { total: formatPrice(total) });
    }

    // GET /greet?name=Sam
    if (req.method === "GET" && url.pathname === "/greet") {
      const name = url.searchParams.get("name");
      return send(res, 200, { message: greet({ name }) });
    }

    send(res, 404, { error: "Not found" });
  } catch (err) {
    console.error(err);
    send(res, 500, { error: "Internal server error" });
  }
});

if (require.main === module) {
  server.listen(PORT, () => console.log(`Shop API running on http://localhost:${PORT}`));
}

module.exports = { server };
