"use strict";
exports.__esModule = true;
var serialport_1 = require("serialport");
var SerialParser = /** @class */ (function () {
    function SerialParser() {
        var _this = this;
        this._accumulator = '';
        this._lightState = 0;
        this.add = function (input) {
            _this._accumulator += input;
            //console.log(this.accumulator);
            if (_this.checkIsDone()) {
                console.log(_this.lightState);
                _this.reset();
            }
        };
        this.checkIsDone = function () {
            var result = _this._accumulator.match(/(?<key>\w*): (?<value>\d{1,})/);
            if (result) {
                if (result.groups)
                    if (result.groups.value)
                        _this._lightState = Number.parseInt(result.groups.value);
            }
            return result;
        };
        this.reset = function () {
            _this._accumulator = '';
        };
    }
    Object.defineProperty(SerialParser.prototype, "lightState", {
        get: function () {
            return this._lightState;
        },
        enumerable: true,
        configurable: true
    });
    return SerialParser;
}());
var port = new serialport_1["default"]("/dev/ttyS3", {
    baudRate: 9600
});
var parser = new SerialParser();
port.on('data', function (data) {
    data = data.toString('utf-8');
    parser.add(data);
});
