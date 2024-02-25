"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_countdown_1 = require("react-countdown");
var endingDate = new Date("2024-02-09");
var CountDown = function () {
    return (react_1["default"].createElement(react_countdown_1["default"], { className: 'font-bold text-5xl text-yellow-300', date: endingDate }));
};
exports["default"] = CountDown;
