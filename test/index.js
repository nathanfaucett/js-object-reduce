var tape = require("tape"),
    objectReduce = require("..");


tape("objectReduce(object, callback[, initialValue]) applies a function against an accumulator and each value of the object (from left-to-right) to reduce it to a single value", function(assert) {
    assert.equals(
        objectReduce({
            a: 0,
            b: 1,
            c: 2
        }, function(currentValue, value) {
            return currentValue + value;
        }),
        3
    );
    assert.end();
});
