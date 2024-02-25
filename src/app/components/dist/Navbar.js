"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var react_1 = require("react");
var Menu_1 = require("./Menu");
var CartIcon_1 = require("./CartIcon");
var image_1 = require("next/image");
var Navbar = function () {
    var user = false;
    return (react_1["default"].createElement("div", { className: 'h-12 text-red-500 p-4 flex items-center justify-between border-b-2 border-b-red-500 uppercase md:h-24 lg:px-20  xl:px-40' },
        react_1["default"].createElement("div", { className: "hidden md:flex gap-4 flex-1" },
            react_1["default"].createElement(link_1["default"], { href: "/" }, "Homepage"),
            react_1["default"].createElement(link_1["default"], { href: "/menu" }, "Menu"),
            react_1["default"].createElement(link_1["default"], { href: "/" }, "Contact")),
        react_1["default"].createElement("div", { className: 'text-xl md:font-bold flex-1 md:text-center' },
            react_1["default"].createElement(link_1["default"], { href: "/" }, "Massimo")),
        react_1["default"].createElement("div", { className: 'md:hidden' },
            react_1["default"].createElement(Menu_1["default"], null)),
        react_1["default"].createElement("div", { className: "hidden md:flex gap-4 items-center justify-end flex-1" },
            react_1["default"].createElement("div", { className: "md:absolute top-3 r-2  lg:static flex items-center gap-2 cursor-pointer  bg-orange-300 px-1 rounded-md" },
                react_1["default"].createElement(image_1["default"], { src: "/phone.png", alt: '', width: 20, height: 20 }),
                react_1["default"].createElement("span", null, "123 456 78")),
            !user ? (react_1["default"].createElement(link_1["default"], { href: "/login" }, "Login")) : (react_1["default"].createElement(link_1["default"], { href: "/orders" }, "Orders")),
            react_1["default"].createElement(CartIcon_1["default"], null))));
};
exports["default"] = Navbar;
