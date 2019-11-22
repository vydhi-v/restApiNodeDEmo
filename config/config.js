
'use strict';

var fs        = require('fs');

var config =
{
  "development": {
    "username": "yd_mysql_admin@yd-mysqldb-dev",
    "password": "Pwd_Pwd01",
    "database": "api_node_demo",
    "host": "yd-mysqldb-dev.mysql.database.azure.com",
    "dialect": "mysql",
    "dialectOptions":{
      "ssl": {      
        "ca": fs.readFileSync(__dirname + '/azure_mysql_ssl_key.pem')
      }
    }
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

module.exports = config;