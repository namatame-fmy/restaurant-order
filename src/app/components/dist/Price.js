'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Price = function (_a) {
    var price = _a.price, id = _a.id, options = _a.options;
    var _b = react_1.useState(price), total = _b[0], setTotal = _b[1];
    var _c = react_1.useState(1), quantity = _c[0], setQuantity = _c[1];
    var _d = react_1.useState(0), selected = _d[0], setSelected = _d[1];
    react_1.useEffect(function () {
        setTotal(quantity * (options ? price + options[selected].additionalPrice : price));
    }, [quantity, selected, options, price]);
    return (react_1["default"].createElement("div", { className: 'flex flex-col gap-4' },
        react_1["default"].createElement("h2", { className: 'text-2xl font-bold' },
            "$",
            total.toFixed(2)),
        react_1["default"].createElement("div", { className: "flex gap-4" }, options === null || options === void 0 ? void 0 : options.map(function (option, index) { return (react_1["default"].createElement("button", { key: option.title, className: 'min-w-[6rem] p-2 ring-1 ring-red-400 rounded-md', style: {
                background: selected === index ? "rgb(248 113 113)" : "white",
                color: selected === index ? "white" : "red"
            }, onClick: function () { return setSelected(index); } }, option.title)); })),
        react_1["default"].createElement("div", { className: "flex justify-between items-center" },
            react_1["default"].createElement("div", { className: "flex justify-between w-full p-3 ring-1 ring-red-500" },
                react_1["default"].createElement("span", null, "Quantity"),
                react_1["default"].createElement("div", { className: 'flex gap-4 items-center' },
                    react_1["default"].createElement("button", { onClick: function () { return setQuantity(function (prev) { return (prev > 1 ? prev - 1 : 1); }); } }, '<'),
                    react_1["default"].createElement("span", null, quantity),
                    react_1["default"].createElement("button", { onClick: function () { return setQuantity(function (prev) { return (prev < 9 ? prev + 1 : 9); }); } }, '>'))),
            react_1["default"].createElement("button", { className: 'uppercasee w-56 bg-red-500 text-white p-3 ring-1 ring-red-500' }, "Add to Cart"))));
};
exports["default"] = Price;
