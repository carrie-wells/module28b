webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/context */ "./components/context.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index */ "./pages/index.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_7__);



var _jsxFileName = "c:\\MIT xPRO\\Module 28B\\Setting Up GraphQL with Apollo\\pages\\_app.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







function MyApp(props) {
  _s();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_components_context__WEBPACK_IMPORTED_MODULE_4__["default"]),
      cart = _useContext.cart,
      addItem = _useContext.addItem,
      removeItem = _useContext.removeItem,
      user = _useContext.user,
      setUser = _useContext.setUser;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    cart: cart
  }),
      state = _useState[0],
      setState = _useState[1];

  var Component = props.Component,
      pageProps = props.pageProps;

  setUser = function setUser(user) {
    alert("hello");
    setState({
      user: user
    });
  };

  addItem = function addItem(item) {
    var items = state.cart.items; //check for item already in cart
    //if not in cart, add item if item is found increase quanity ++

    var foundItem = true;

    if (items.length > 0) {
      foundItem = items.find(function (i) {
        return i.id === item.id;
      });
      if (!foundItem) foundItem = false;
    } else {
      foundItem = false;
    }

    console.log("Found Item value: ".concat(JSON.stringify(foundItem))); // if item is not new, add to cart, set quantity to 1

    if (!foundItem) {
      //set quantity property to 1
      var temp = JSON.parse(JSON.stringify(item));
      temp.quantity = 1;
      var newCart = {
        items: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(state.cart.items), [temp]),
        total: state.cart.total + item.price
      };
      setState({
        cart: newCart
      });
      console.log("Total items: ".concat(JSON.stringify(newCart)));
    } else {
      // we already have it so just increase quantity ++
      console.log("Total so far:  ".concat(state.cart.total));
      newCart = {
        items: items.map(function (item) {
          if (item.id === foundItem.id) {
            return Object.assign({}, item, {
              quantity: item.quantity + 1
            });
          } else {
            return item;
          }
        }),
        total: state.cart.total + item.price
      };
    }

    setState({
      cart: newCart
    }); // problem is this is not updated yet

    console.log("state reset to cart:".concat(JSON.stringify(state)));
  };

  removeItem = function removeItem(item) {
    var items = state.cart.items; //check for item already in cart

    var foundItem = items.find(function (i) {
      return i.id === item.id;
    });

    if (foundItem.quantity > 1) {
      var newCart = {
        items: items.map(function (item) {
          if (item.id === foundItem.id) {
            return Object.assign({}, item, {
              quantity: item.quantity - 1
            });
          } else {
            return item;
          }
        }),
        total: state.cart.total - item.price
      }; //console.log(`NewCart after remove: ${JSON.stringify(newCart)}`)
    } else {
      // only 1 in the cart so remove the whole item
      console.log("Try remove item ".concat(JSON.stringify(foundItem)));
      var index = items.findIndex(function (i) {
        return i.id === foundItem.id;
      });
      items.splice(index, 1);
      var newCart = {
        items: items,
        total: state.cart.total - item.price
      };
    }

    setState({
      cart: newCart
    });
  };

  return __jsx(_components_context__WEBPACK_IMPORTED_MODULE_4__["default"].Provider, {
    value: {
      cart: state.cart,
      addItem: addItem,
      removeItem: removeItem,
      isAuthenticated: false,
      user: null,
      setUser: function setUser() {}
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }
  }, __jsx("link", {
    rel: "stylesheet",
    href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
    integrity: "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm",
    crossOrigin: "anonymous",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }
  })), __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }
  }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 11
    }
  }))));
}

_s(MyApp, "qHQMttOq1zPRCjIIZxRYE6VYkS4=");

_c = MyApp;
/* harmony default export */ __webpack_exports__["default"] = (MyApp);

var _c;

$RefreshReg$(_c, "MyApp");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJNeUFwcCIsInByb3BzIiwidXNlQ29udGV4dCIsIkFwcENvbnRleHQiLCJjYXJ0IiwiYWRkSXRlbSIsInJlbW92ZUl0ZW0iLCJ1c2VyIiwic2V0VXNlciIsInVzZVN0YXRlIiwic3RhdGUiLCJzZXRTdGF0ZSIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImFsZXJ0IiwiaXRlbSIsIml0ZW1zIiwiZm91bmRJdGVtIiwibGVuZ3RoIiwiZmluZCIsImkiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5IiwidGVtcCIsInBhcnNlIiwicXVhbnRpdHkiLCJuZXdDYXJ0IiwidG90YWwiLCJwcmljZSIsIm1hcCIsIk9iamVjdCIsImFzc2lnbiIsImluZGV4IiwiZmluZEluZGV4Iiwic3BsaWNlIiwiaXNBdXRoZW50aWNhdGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsU0FBU0EsS0FBVCxDQUFlQyxLQUFmLEVBQXFCO0FBQUE7O0FBQUEsb0JBQzRCQyx3REFBVSxDQUFDQywyREFBRCxDQUR0QztBQUFBLE1BQ2RDLElBRGMsZUFDZEEsSUFEYztBQUFBLE1BQ1RDLE9BRFMsZUFDVEEsT0FEUztBQUFBLE1BQ0RDLFVBREMsZUFDREEsVUFEQztBQUFBLE1BQ1dDLElBRFgsZUFDV0EsSUFEWDtBQUFBLE1BQ2lCQyxPQURqQixlQUNpQkEsT0FEakI7O0FBQUEsa0JBRU1DLHNEQUFRLENBQUM7QUFBQ0wsUUFBSSxFQUFDQTtBQUFOLEdBQUQsQ0FGZDtBQUFBLE1BRVpNLEtBRlk7QUFBQSxNQUVOQyxRQUZNOztBQUFBLE1BR1hDLFNBSFcsR0FHY1gsS0FIZCxDQUdYVyxTQUhXO0FBQUEsTUFHQUMsU0FIQSxHQUdjWixLQUhkLENBR0FZLFNBSEE7O0FBTW5CTCxTQUFPLEdBQUcs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O0FBQUN6QixVQUFJLEVBQUVNLEtBQUssQ0FBQ04sSUFBYjtBQUFtQkMsYUFBTyxFQUFFQSxPQUE1QjtBQUFxQ0MsZ0JBQVUsRUFBRUEsVUFBakQ7QUFBNERnQyxxQkFBZSxFQUFDLEtBQTVFO0FBQWtGL0IsVUFBSSxFQUFDLElBQXZGO0FBQTRGQyxhQUFPLEVBQUMsbUJBQUksQ0FBRTtBQUExRyxLQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxPQUFHLEVBQUMsWUFETjtBQUVFLFFBQUksRUFBQyx1RUFGUDtBQUdFLGFBQVMsRUFBQyx5RUFIWjtBQUlFLGVBQVcsRUFBQyxXQUpkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBVUUsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxTQUFELHlGQUFlSyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FESixDQVZGLENBREY7QUFrQkQ7O0dBL0ZRYixLOztLQUFBQSxLO0FBa0dNQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjg5OTI1ZDU4ZjUzNTg4ZWEwYzJjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IEFwcENvbnRleHQgZnJvbSBcIi4uL2NvbXBvbmVudHMvY29udGV4dFwiO1xuaW1wb3J0IEhvbWUgZnJvbSBcIi4vaW5kZXhcIlxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXRcIlxuaW1wb3J0IENvb2tpZSBmcm9tIFwianMtY29va2llXCJcblxuXG5mdW5jdGlvbiBNeUFwcChwcm9wcyl7XG4gIHZhciB7Y2FydCxhZGRJdGVtLHJlbW92ZUl0ZW0sIHVzZXIsIHNldFVzZXJ9ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KVxuICBjb25zdCBbc3RhdGUsc2V0U3RhdGVdID0gdXNlU3RhdGUoe2NhcnQ6Y2FydH0pO1xuICBjb25zdCB7IENvbXBvbmVudCwgcGFnZVByb3BzIH0gPSBwcm9wcztcbiAgXG4gIFxuICBzZXRVc2VyID0gKHVzZXIpID0+IHtcbiAgICBhbGVydChcImhlbGxvXCIpO1xuICAgIHNldFN0YXRlKHsgdXNlciB9KTtcbiAgfTtcbiAgYWRkSXRlbSA9IChpdGVtKSA9PiB7XG4gICAgbGV0IHsgaXRlbXMgfSA9IHN0YXRlLmNhcnQ7XG4gICAgLy9jaGVjayBmb3IgaXRlbSBhbHJlYWR5IGluIGNhcnRcbiAgICAvL2lmIG5vdCBpbiBjYXJ0LCBhZGQgaXRlbSBpZiBpdGVtIGlzIGZvdW5kIGluY3JlYXNlIHF1YW5pdHkgKytcbiAgICBsZXQgZm91bmRJdGVtID0gdHJ1ZTtcbiAgICBpZihpdGVtcy5sZW5ndGggPiAwKXtcbiAgICAgIGZvdW5kSXRlbSA9IGl0ZW1zLmZpbmQoKGkpID0+IGkuaWQgPT09IGl0ZW0uaWQpO1xuICAgICBcbiAgICAgIGlmKCFmb3VuZEl0ZW0pIGZvdW5kSXRlbSA9IGZhbHNlO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgZm91bmRJdGVtID0gZmFsc2U7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGBGb3VuZCBJdGVtIHZhbHVlOiAke0pTT04uc3RyaW5naWZ5KGZvdW5kSXRlbSl9YClcbiAgICAvLyBpZiBpdGVtIGlzIG5vdCBuZXcsIGFkZCB0byBjYXJ0LCBzZXQgcXVhbnRpdHkgdG8gMVxuICAgIGlmICghZm91bmRJdGVtKSB7XG4gICAgICAvL3NldCBxdWFudGl0eSBwcm9wZXJ0eSB0byAxXG4gICAgXG4gICAgICBsZXQgdGVtcCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoaXRlbSkpO1xuICAgICAgdGVtcC5xdWFudGl0eSA9IDE7XG4gICAgICB2YXIgbmV3Q2FydCA9IHtcbiAgICAgICAgICBpdGVtczogWy4uLnN0YXRlLmNhcnQuaXRlbXMsdGVtcF0sXG4gICAgICAgICAgdG90YWw6IHN0YXRlLmNhcnQudG90YWwgKyBpdGVtLnByaWNlLFxuICAgICAgfVxuICAgICAgc2V0U3RhdGUoe2NhcnQ6bmV3Q2FydH0pXG4gICAgICBjb25zb2xlLmxvZyhgVG90YWwgaXRlbXM6ICR7SlNPTi5zdHJpbmdpZnkobmV3Q2FydCl9YClcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gd2UgYWxyZWFkeSBoYXZlIGl0IHNvIGp1c3QgaW5jcmVhc2UgcXVhbnRpdHkgKytcbiAgICAgIGNvbnNvbGUubG9nKGBUb3RhbCBzbyBmYXI6ICAke3N0YXRlLmNhcnQudG90YWx9YClcbiAgICAgIG5ld0NhcnQ9IHtcbiAgICAgICAgICBpdGVtczogaXRlbXMubWFwKChpdGVtKSA9PntcbiAgICAgICAgICAgIGlmKGl0ZW0uaWQgPT09IGZvdW5kSXRlbS5pZCl7XG4gICAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBpdGVtLCB7IHF1YW50aXR5OiBpdGVtLnF1YW50aXR5ICsgMSB9KVxuICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgICAgfX0pLFxuICAgICAgICAgIHRvdGFsOiBzdGF0ZS5jYXJ0LnRvdGFsICsgaXRlbS5wcmljZSxcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXRTdGF0ZSh7Y2FydDogbmV3Q2FydH0pOyAgLy8gcHJvYmxlbSBpcyB0aGlzIGlzIG5vdCB1cGRhdGVkIHlldFxuICAgIGNvbnNvbGUubG9nKGBzdGF0ZSByZXNldCB0byBjYXJ0OiR7SlNPTi5zdHJpbmdpZnkoc3RhdGUpfWApXG4gICAgIFxuICB9O1xuICByZW1vdmVJdGVtID0gKGl0ZW0pID0+IHtcbiAgICBsZXQgeyBpdGVtcyB9ID0gc3RhdGUuY2FydDtcbiAgICAvL2NoZWNrIGZvciBpdGVtIGFscmVhZHkgaW4gY2FydFxuICAgIGNvbnN0IGZvdW5kSXRlbSA9IGl0ZW1zLmZpbmQoKGkpID0+IGkuaWQgPT09IGl0ZW0uaWQpO1xuICAgIGlmIChmb3VuZEl0ZW0ucXVhbnRpdHkgPiAxKSB7XG4gICAgICB2YXIgbmV3Q2FydCA9IHtcbiAgICAgICAgaXRlbXM6IGl0ZW1zLm1hcCgoaXRlbSkgPT57XG4gICAgICAgIGlmKGl0ZW0uaWQgPT09IGZvdW5kSXRlbS5pZCl7XG4gICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGl0ZW0sIHsgcXVhbnRpdHk6IGl0ZW0ucXVhbnRpdHkgLSAxIH0pXG4gICAgICAgICB9ZWxzZXtcbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICB9fSksXG4gICAgICB0b3RhbDogc3RhdGUuY2FydC50b3RhbCAtIGl0ZW0ucHJpY2UsXG4gICAgICB9XG4gICAgICAvL2NvbnNvbGUubG9nKGBOZXdDYXJ0IGFmdGVyIHJlbW92ZTogJHtKU09OLnN0cmluZ2lmeShuZXdDYXJ0KX1gKVxuICAgIH0gZWxzZSB7IC8vIG9ubHkgMSBpbiB0aGUgY2FydCBzbyByZW1vdmUgdGhlIHdob2xlIGl0ZW1cbiAgICAgIGNvbnNvbGUubG9nKGBUcnkgcmVtb3ZlIGl0ZW0gJHtKU09OLnN0cmluZ2lmeShmb3VuZEl0ZW0pfWApXG4gICAgICBjb25zdCBpbmRleCA9IGl0ZW1zLmZpbmRJbmRleCgoaSkgPT4gaS5pZCA9PT0gZm91bmRJdGVtLmlkKTtcbiAgICAgIGl0ZW1zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB2YXIgbmV3Q2FydD0geyBpdGVtczogaXRlbXMsIHRvdGFsOiBzdGF0ZS5jYXJ0LnRvdGFsIC0gaXRlbS5wcmljZSB9IFxuICAgIH1cbiAgICBzZXRTdGF0ZSh7Y2FydDpuZXdDYXJ0fSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxBcHBDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7Y2FydDogc3RhdGUuY2FydCwgYWRkSXRlbTogYWRkSXRlbSwgcmVtb3ZlSXRlbTogcmVtb3ZlSXRlbSxpc0F1dGhlbnRpY2F0ZWQ6ZmFsc2UsdXNlcjpudWxsLHNldFVzZXI6KCk9Pnt9fX0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC4wLjAvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCJcbiAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtR241Mzg0eHFRMWFvV1hBKzA1OFJYUHhQZzZmeTRJV3ZUTmgwRTI2M1htRmNKbFNBd2lHZ0ZBVy9kQWlTNkpYbVwiXG4gICAgICAgICAgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIlxuICAgICAgICAvPlxuICAgICAgPC9IZWFkPlxuICAgIFxuICAgICAgPExheW91dD5cbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L0xheW91dD5cblxuICAgIDwvQXBwQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbiAgXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwic291cmNlUm9vdCI6IiJ9