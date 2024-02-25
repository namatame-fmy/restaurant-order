"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var react_1 = require("react");
var Footer = function () {
    return (react_1["default"].createElement("div", { className: 'h-12 md:h-24 p-4 lg:px-20 xl:px-40 text-red-500 flex items-center justify-between' },
        react_1["default"].createElement(link_1["default"], { href: "/", className: 'font-bold text-xl' }, "MASSIMO"),
        react_1["default"].createElement("p", null, "\u00A9\uFE0E ALL RIGHTS RESERVED")));
};
exports["default"] = Footer;
