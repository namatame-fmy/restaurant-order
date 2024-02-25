'use client';
"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var react_1 = require("react");
var data = [
    {
        id: 1,
        title: "always fresh & always crispy & always hot",
        image: "/slide1.png"
    },
    {
        id: 2,
        title: "we deliver your order wherever you are in NY",
        image: "/slide2.png"
    },
    {
        id: 3,
        title: "the best pizza to share with your family",
        image: "/slide3.jpg"
    },
];
var Slider = function () {
    var _a = react_1.useState(0), currentSlide = _a[0], setCurrentSlide = _a[1];
    // useEffect(() => {
    //   const interval = setInterval(
    //     () => setCurrentSlide((prev) => (prev === data.length -1 ? 0 : prev + 1)),2000);
    //   return () => clearInterval(interval);
    // }, []);
    return (react_1["default"].createElement("div", { className: "flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50" },
        react_1["default"].createElement("div", { className: "flex-1 flex items-center justify-center flex-col gap-8 text-red-500 font-bold" },
            react_1["default"].createElement("h1", { className: "text-5xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl" }, data[currentSlide].title),
            react_1["default"].createElement("button", { className: "bg-red-500 text-white py-4 px-8" }, "Order Now")),
        react_1["default"].createElement("div", { className: "w-full flex-1 relative" },
            react_1["default"].createElement(image_1["default"], { src: data[currentSlide].image, alt: "", fill: true, className: "object-cover" }))));
};
exports["default"] = Slider;
