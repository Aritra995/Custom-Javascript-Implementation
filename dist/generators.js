"use strict";

var _marked = /*#__PURE__*/regeneratorRuntime.mark(g1);

function g1() {
    return regeneratorRuntime.wrap(function g1$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    console.log('Hello');
                    _context.next = 3;
                    return 'Yield 1 Ran....';

                case 3:
                    console.log('World');
                    _context.next = 6;
                    return 'Yield 2 Ran....';

                case 6:
                    return _context.abrupt('return', 'Returned....');

                case 7:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked, this);
}
var g = g1();
/* 
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);
 */

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = g[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var val = _step.value;

        console.log(val);
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}