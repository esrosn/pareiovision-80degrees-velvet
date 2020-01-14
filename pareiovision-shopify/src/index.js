import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Client from "shopify-buy";
import "./app.css";
import "../node_modules/tachyons/css/tachyons.min.css";

const client = Client.buildClient({
  storefrontAccessToken: "bab408ad0cdf58b10fba358077e2af05",
  domain: "pareiovision.myshopify.com"
});

ReactDOM.render(<App client={client} />, document.getElementById("root"));
