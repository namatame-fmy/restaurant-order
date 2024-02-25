"use client";
"use strict";

exports.__esModule = true;

var image_1 = require("next/image");

var link_1 = require("next/link");

var react_1 = require("react");

var links = [{
  id: 1,
  title: "Homepage",
  url: "/"
}, {
  id: 2,
  title: "Menu",
  url: "/menu"
}, {
  id: 3,
  title: "Working Hours",
  url: "/"
}, {
  id: 4,
  title: "Contact",
  url: "/"
}];

var Menu = function Menu() {
  var _a = react_1.useState(false),
      open = _a[0],
      setOpen = _a[1];

  return react_1["default"].createElement("div", null, !open ? react_1["default"].createElement(image_1["default"], {
    className: 'cursor-pointer',
    src: "/open.png",
    alt: '',
    width: 20,
    height: 20,
    onClick: function onClick() {
      return setOpen(true);
    }
  }) : react_1["default"].createElement(image_1["default"], {
    className: 'cursor-pointer',
    src: "/close.png",
    alt: '',
    width: 20,
    height: 20,
    onClick: function onClick() {
      return setOpen(false);
    }
  }), react_1["default"].createElement("div", {
    className: 'bg-red-500 text-white'
  }, links.map(function (item) {
    return react_1["default"].createElement(link_1["default"], {
      href: item.url,
      key: item.id
    }, item.title);
  })));
};

exports["default"] = Menu;