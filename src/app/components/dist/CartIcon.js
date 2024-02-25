"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var link_1 = require("next/link");
var react_1 = require("react");
var CartIcon = function () {
    return (react_1["default"].createElement(link_1["default"], { href: "/cart", className: 'flex items-center justify-between gap-4ss' },
        react_1["default"].createElement("div", { className: 'relative w-8 h-8 md:w-5 md:h-5' },
            react_1["default"].createElement(image_1["default"], { src: "/cart.png", alt: '', fill: true })),
        react_1["default"].createElement("span", null, "Cart (3)")));
};
exports["default"] = CartIcon;
