"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var image_1 = require("next/image");
var react_1 = require("react");
var getData = function () { return __awaiter(void 0, void 0, void 0, function () {
    var res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch("http://localhost:3000/api/products", {
                    cache: "no-store"
                })];
            case 1:
                res = _a.sent();
                if (!res.ok) {
                    throw new Error("Failed");
                }
                return [2 /*return*/, res.json()];
        }
    });
}); };
var Featured = function () { return __awaiter(void 0, void 0, void 0, function () {
    var featuredProducts;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, getData()];
            case 1:
                featuredProducts = _a.sent();
                return [2 /*return*/, (react_1["default"].createElement("div", { className: 'w-screen overflow-x-scroll text-red-500' },
                        react_1["default"].createElement("div", { className: "w-max flex" }, featuredProducts.map(function (item) { return (react_1["default"].createElement("div", { key: item.id, className: "w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]" },
                            item.img && (react_1["default"].createElement("div", { className: "relative flex-1 w-full hover:rotate-[60deg] transition-all duration-500" },
                                react_1["default"].createElement(image_1["default"], { src: item.img, alt: "", fill: true, className: 'object-contain' }))),
                            react_1["default"].createElement("div", { className: "flex-1 flex flex-col items-center justify-center text-center gap-4" },
                                react_1["default"].createElement("h1", { className: "text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl" }, item.title),
                                react_1["default"].createElement("p", { className: 'p-4 2xl:p-8' }, item.desc),
                                react_1["default"].createElement("span", { className: 'text-xl font-bold' },
                                    "$",
                                    item.price),
                                react_1["default"].createElement("button", { className: 'bg-red-500 text-white p-2 rounded-md' }, "Add to cart")))); }))))];
        }
    });
}); };
exports["default"] = Featured;
