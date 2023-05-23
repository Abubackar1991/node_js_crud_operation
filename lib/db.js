var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'node_mysql_crud_db',
});
connection.connect(function (error) {
  if (!!error) {
    console.log(error);
  } else {
    console.log('Database Connected Successfully..!!');
  }
});

module.exports = connection;
