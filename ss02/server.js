const http = require("http");
const fs = require("fs");
const url = require("url");
const queryString = require("querystring");
const port = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, "Content-Type", "text/html", "charset=utf-8");
  // const getForm = fs.readFileSync("./views/get-form.html", "utf-8");
  // res.write(getForm);

  const postForm = fs.readFileSync("./views/post-form.html", "utf-8");
  res.write(postForm);
  res.end();

  const { query } = url.parse(req.url, true);
  let data = "";
  req
    .on("error", (err) => {
      console.log(err);
    })
    .on("data", (chunk) => {
      data += chunk.toString();
    })
    .on("end", () => {
      console.log(queryString.parse(data));
    });
});

server.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
