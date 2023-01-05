"use strict";
exports.__esModule = true;
exports.AbstractCacheAlgo = void 0;
// ! This is the main memory - check this:
var mainMemory = [
    [, ,]
];
var currentColumn = 0; //* This is a pointer for the current column.
//* abstract class AbstractCacheAlgo
var AbstractCacheAlgo = /** @class */ (function () {
    // ! check if it is necessary: 
    function AbstractCacheAlgo(key, value) {
        this.key = key;
        this.value = value;
    }
    AbstractCacheAlgo.prototype.getElement = function (index) {
        return mainMemory[index][currentColumn];
    };
    ;
    AbstractCacheAlgo.prototype.setElement = function (index, value) {
        if (mainMemory[index][currentColumn]) {
            this.removeElement(index);
            this.setElement(index, value);
        }
        else {
            mainMemory[index][currentColumn] = value;
            return index;
        }
        return undefined;
    };
    AbstractCacheAlgo.prototype.removeElement = function (index) {
        //* If there was something to remove:
        if (mainMemory[index][currentColumn]) {
            mainMemory[index][currentColumn] = null;
            return true;
            //* If there was no remove:
        }
        else {
            return false;
        }
    };
    return AbstractCacheAlgo;
}());
exports.AbstractCacheAlgo = AbstractCacheAlgo;
//* concrete classes that implement caching
