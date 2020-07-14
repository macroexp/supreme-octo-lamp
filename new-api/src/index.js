"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
exports.__esModule = true;
var express_1 = require("express");
var cors_1 = require("cors");
var app = express_1["default"]();
app.use(express_1["default"].json());
app.use(cors_1["default"]());
app.get('/', function (req, res) {
    res.send("Poopdddddddddddddd");
});
app.get('/:name', function (req, res) {
    res.send("Poopdddddddddddddd" + req.params.name);
});
app.post('/:name', function (req, res) {
    console.log('working');
    res.send(__assign({}, req.body, { yourname: req.params.name }));
});
var server = app.listen(7000, function () {
    console.log('Listening on port 7000');
});
