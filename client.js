const net = require("net");

const conn = net.createConnection({
  host: "localhost", // change to IP address of computer, more on that below
  port: 50541,
});

conn.setEncoding("utf8"); // interpret data as text
