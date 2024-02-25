"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var react_1 = require("react");
var CountDown_1 = require("./CountDown");
var Offer = function () {
    return (react_1["default"].createElement("div", { className: "bg-black h-screen flex flex-col md:flex-row md:justify-between md:bg-[url('/offerBg.png')] md:h-[70vh]" },
        react_1["default"].createElement("div", { className: "flex-1 flex flex-col justify-center items-center text-center gap-8 p-6" },
            react_1["default"].createElement("h1", { className: "text-white text-5xl font-bold xl:text-6xl" }, "Delicious Burger & French Fry"),
            react_1["default"].createElement("p", { className: "text-white xl:text-xl" }, "Progressively simplify effective e-toilers and process-centric methods of empowerment. Quickly pontificate parallel."),
            react_1["default"].createElement(CountDown_1["default"], null),
            react_1["default"].createElement("button", { className: "bg-red-500 text-white rounded-md py-3 px-6" }, "Order Now")),
        react_1["default"].createElement("div", { className: "flex-1 w-full relative md:h-full" },
            react_1["default"].createElement(image_1["default"], { src: "/offerProduct.png", alt: "", fill: true, className: "object-contain" }))));
};
exports["default"] = Offer;
