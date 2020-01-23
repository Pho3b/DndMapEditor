"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Timer = /** @class */ (function () {
    function Timer(seconds, element) {
        this.seconds = seconds;
        this.element = element;
        this.hideElement();
    }
    Timer.prototype.hideElement = function () {
        setTimeout(function () {
            this.element.style.display = "none";
        }, this.seconds);
    };
    return Timer;
}());
exports.default = Timer;
