/**
 * Created by sohel on 12/28/16.
 */

var redis = require("redis"),
  client = redis.createClient();

// if you'd like to select database 3, instead of 0 (default), call
// client.select(3, function() { /* ... */ });

client.on("error", function (err) {
  console.log("Error " + err);
});

client.hmget("myhashkey", function(err, obj) {
  console.log(obj);
});

//client.hmset("myhashkey:sohel@gmail.com",{a:1, b:2, c:'xxx'})
//
// client.getKey("myhashkey", function (data) {
//   console.log(data);
//
// });