object-reduce
=======

object reduce for the browser and node.js


```javascript
var objectReduce = require("@nathanfaucett/object-reduce");


objectReduce({
        a: 0,
        b: 1,
        c: 2
    },
    function(currentValue, value) {
        return currentValue + value;
    }
) === 3;
```
