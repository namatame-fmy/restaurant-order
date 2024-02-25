"use client";
"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var link_1 = require("next/link");
var react_1 = require("react");
var CartIcon_1 = require("./CartIcon");
var links = [
    { id: 1, title: "Homepage", url: "/" },
    { id: 2, title: "Menu", url: "/menu" },
    { id: 3, title: "Working Hours", url: "/" },
    { id: 4, title: "Contact", url: "/" },
];
var Menu = function () {
    var _a = react_1.useState(false), open = _a[0], setOpen = _a[1];
    var user = false;
    return (react_1["default"].createElement("div", null,
        !open ? (react_1["default"].createElement(image_1["default"], { className: 'cursor-pointer', src: "/open.png", alt: '', width: 20, height: 20, onClick: function () { return setOpen(true); } })) : (react_1["default"].createElement(image_1["default"], { className: 'cursor-pointer', src: "/close.png", alt: '', width: 20, height: 20, onClick: function () { return setOpen(false); } })),
        open && (react_1["default"].createElement("div", { className: 'bg-red-500 text-white absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center text-3xl' },
            links.map(function (item) { return (react_1["default"].createElement(link_1["default"], { href: item.url, key: item.id, onClick: function () { return setOpen(false); } }, item.title)); }),
            !user ? (react_1["default"].createElement(link_1["default"], { href: "/login", onClick: function () { return setOpen(false); } }, "Login")) : (react_1["default"].createElement(link_1["default"], { href: "/orders", onClick: function () { return setOpen(false); } }, "Order")),
            react_1["default"].createElement(link_1["default"], { href: "/cart", onClick: function () { return setOpen(false); } },
                react_1["default"].createElement(CartIcon_1["default"], null))))));
};
exports["default"] = Menu;
