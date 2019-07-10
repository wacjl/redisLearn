var redis = require("redis");

var client = redis.createClient(6379, "127.0.0.1");
client.on("error", function(err) {
  console.log("Error " + err);
});

// 1 键值对
client.set("color", "red", redis.print);
client.get("color", function(err, value) {
  if (err) throw err;
  console.log("Got: " + value);
  client.quit();
});

console.log(1);
client.hmset(
  "kitty",
  {
    age: "2-year-old",
    sex: "male"
  },
  redis.print
);
client.del("kitty4");

client.rpush("kitty4", [1, 2]);

client.lrange("kitty4", 0, -1, function(err, lists) {
  console.log("client.lrange , err ,lists: ", err, lists);
});

client.hget("kitty", "age", function(err, value) {
  if (err) throw err;
  console.log("kitty is " + value);
});

client.hkeys("kitty", function(err, keys) {
  if (err) throw err;
  keys.forEach(function(key, i) {
    console.log(key, i);
  });
  client.quit();
});
