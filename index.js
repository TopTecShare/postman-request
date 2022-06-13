const http = require("http");
const url = require("url");
const request = require("postman-request");

const proxyRequest = (req, res) => {
  // const queryData = url.parse(req.url, true).query; // queryData.url
  console.log(req.url);
  const headers = { ...Object.fromEntries(req.headers) };
  console.log(headers);
  console.log("hi");
  try {
    if (req.url) {
      request({
        url: req.url.substring(1),
      })
        .on("error", (e) => {
          res.end("An error ");
        })
        .pipe(res);
    } else {
      res.end("url");
    }
  } catch (e) {
    console.log(e);
  }
};

http.createServer(proxyRequest).listen(7000);
