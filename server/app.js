/**
 * The Server Can be configured and created here...
 *
 * You can find the JSON Data file here in the Data module. Feel free to impliment a framework if needed.
 */

/*
-- This is the product data, you can view it in the file itself for more details 
{
    "_id": "019",
    "isActive": "false",
    "price": "23.00",
    "picture": "/img/products/N16501_430.png",
    "name": "Damage Reverse Thickening Conditioner",
    "about": "Dolor voluptate velit consequat duis. Aute ad officia fugiat esse anim exercitation voluptate excepteur pariatur sit culpa duis qui esse. Labore amet ad eu veniam nostrud minim labore aliquip est sint voluptate nostrud reprehenderit. Ipsum nostrud culpa consequat reprehenderit.",
    "tags": [
        "ojon",
        "conditioner"
    ]
}
*/
// Libs
const express = require("express");
const bodyParser = require("body-parser");
var _ = require("underscore");
var cors = require("cors");

// Vars
const app = express();
const data = require("./data");
const http = require("http");
const url = require("url");
const hostname = "localhost";
const port = 3035;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

/**
 * Start the Node Server Here...
 *
 * The http.createServer() method creates a new server that listens at the specified port.
 * The requestListener function (function (req, res)) is executed each time the server gets a request.
 * The Request object 'req' represents the request to the server.
 * The ServerResponse object 'res' represents the writable stream back to the client.
 */

const products = JSON.parse(JSON.stringify(data));

app.get("/", function (req, res) {
  res.send(`Server running on ${hostname}:${port}`);
});

// http://localhost:3035/products/
app.get("/products", function (req, res) {
  res.send(products);
});

//http://localhost:3035/products/search?q=oil
app.get("/products/search", function (req, res) {
  const params = req.query;
  const key = params.q;
  const output = _.filter(products, function (myObject) {
    return (
      (myObject.name.toLowerCase().indexOf(key.toLowerCase()) != -1 ||
        myObject.about.toLowerCase().indexOf(key.toLowerCase()) != -1 ||
        myObject.tags.indexOf(key.toLowerCase()) != -1) &&
      myObject.isActive == "true"
    );
  });
  res.send(output);
});

app.listen(port, function (err) {
  console.log(`[Server running on ${hostname}:${port}]`);
  if (err) {
    console.log(err);
  }
});
