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

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_components_context__WEBPACK_IMPORTED_MODULE_4__["default"]).setUser = function (user) {
    alert("content in app.js");
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
      setUser: function setUser() {
        alert("hello");
      }
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

_s(MyApp, "rZM5cbJEa/QqAz6/rfd1LdIXMfo=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJNeUFwcCIsInByb3BzIiwidXNlQ29udGV4dCIsIkFwcENvbnRleHQiLCJjYXJ0IiwiYWRkSXRlbSIsInJlbW92ZUl0ZW0iLCJ1c2VyIiwic2V0VXNlciIsInVzZVN0YXRlIiwic3RhdGUiLCJzZXRTdGF0ZSIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImFsZXJ0IiwiaXRlbSIsIml0ZW1zIiwiZm91bmRJdGVtIiwibGVuZ3RoIiwiZmluZCIsImkiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5IiwidGVtcCIsInBhcnNlIiwicXVhbnRpdHkiLCJuZXdDYXJ0IiwidG90YWwiLCJwcmljZSIsIm1hcCIsIk9iamVjdCIsImFzc2lnbiIsImluZGV4IiwiZmluZEluZGV4Iiwic3BsaWNlIiwiaXNBdXRoZW50aWNhdGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsU0FBU0EsS0FBVCxDQUFlQyxLQUFmLEVBQXFCO0FBQUE7O0FBQUEsb0JBQzRCQyx3REFBVSxDQUFDQywyREFBRCxDQUR0QztBQUFBLE1BQ2RDLElBRGMsZUFDZEEsSUFEYztBQUFBLE1BQ1RDLE9BRFMsZUFDVEEsT0FEUztBQUFBLE1BQ0RDLFVBREMsZUFDREEsVUFEQztBQUFBLE1BQ1dDLElBRFgsZUFDV0EsSUFEWDtBQUFBLE1BQ2lCQyxPQURqQixlQUNpQkEsT0FEakI7O0FBQUEsa0JBRU1DLHNEQUFRLENBQUM7QUFBQ0wsUUFBSSxFQUFDQTtBQUFOLEdBQUQsQ0FGZDtBQUFBLE1BRVpNLEtBRlk7QUFBQSxNQUVOQyxRQUZNOztBQUFBLE1BR1hDLFNBSFcsR0FHY1gsS0FIZCxDQUdYVyxTQUhXO0FBQUEsTUFHQUMsU0FIQSxHQUdjWixLQUhkLENBR0FZLFNBSEE7O0FBTW5CWCwwREFBVSxDQUFD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LDJEQUFELENBQVksUUFBWjtBQUFxQixTQUFLLEVBQUU7QUFBQ3pCLFVBQUksRUFBRU0sS0FBSyxDQUFDTixJQUFiO0FBQW1CQyxhQUFPLEVBQUVBLE9BQTVCO0FBQXFDQyxnQkFBVSxFQUFFQSxVQUFqRDtBQUE0RGdDLHFCQUFlLEVBQUMsS0FBNUU7QUFBa0YvQixVQUFJLEVBQUMsSUFBdkY7QUFBNEZDLGFBQU8sRUFBQyxtQkFBSTtBQUFDTSxhQUFLLENBQUMsT0FBRCxDQUFMO0FBQWU7QUFBeEgsS0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsT0FBRyxFQUFDLFlBRE47QUFFRSxRQUFJLEVBQUMsdUVBRlA7QUFHRSxhQUFTLEVBQUMseUVBSFo7QUFJRSxlQUFXLEVBQUMsV0FKZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQVVFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsU0FBRCx5RkFBZUQsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREosQ0FWRixDQURGO0FBa0JEOztHQS9GUWIsSzs7S0FBQUEsSztBQWtHTUEsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5lMDlmZWQwNGI4NTRmNTIxOGQ5My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBBcHBDb250ZXh0IGZyb20gXCIuLi9jb21wb25lbnRzL2NvbnRleHRcIjtcbmltcG9ydCBIb21lIGZyb20gXCIuL2luZGV4XCJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0XCJcbmltcG9ydCBDb29raWUgZnJvbSBcImpzLWNvb2tpZVwiXG5cblxuZnVuY3Rpb24gTXlBcHAocHJvcHMpe1xuICB2YXIge2NhcnQsYWRkSXRlbSxyZW1vdmVJdGVtLCB1c2VyLCBzZXRVc2VyfSA9IHVzZUNvbnRleHQoQXBwQ29udGV4dClcbiAgY29uc3QgW3N0YXRlLHNldFN0YXRlXSA9IHVzZVN0YXRlKHtjYXJ0OmNhcnR9KTtcbiAgY29uc3QgeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9ID0gcHJvcHM7XG4gIFxuICBcbiAgdXNlQ29udGV4dChBcHBDb250ZXh0KS5zZXRVc2VyID0gKHVzZXIpID0+IHtcbiAgICBhbGVydChcImNvbnRlbnQgaW4gYXBwLmpzXCIpXG4gICAgc2V0U3RhdGUoeyB1c2VyIH0pO1xuICB9O1xuICBhZGRJdGVtID0gKGl0ZW0pID0+IHtcbiAgICBsZXQgeyBpdGVtcyB9ID0gc3RhdGUuY2FydDtcbiAgICAvL2NoZWNrIGZvciBpdGVtIGFscmVhZHkgaW4gY2FydFxuICAgIC8vaWYgbm90IGluIGNhcnQsIGFkZCBpdGVtIGlmIGl0ZW0gaXMgZm91bmQgaW5jcmVhc2UgcXVhbml0eSArK1xuICAgIGxldCBmb3VuZEl0ZW0gPSB0cnVlO1xuICAgIGlmKGl0ZW1zLmxlbmd0aCA+IDApe1xuICAgICAgZm91bmRJdGVtID0gaXRlbXMuZmluZCgoaSkgPT4gaS5pZCA9PT0gaXRlbS5pZCk7XG4gICAgIFxuICAgICAgaWYoIWZvdW5kSXRlbSkgZm91bmRJdGVtID0gZmFsc2U7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICBmb3VuZEl0ZW0gPSBmYWxzZTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coYEZvdW5kIEl0ZW0gdmFsdWU6ICR7SlNPTi5zdHJpbmdpZnkoZm91bmRJdGVtKX1gKVxuICAgIC8vIGlmIGl0ZW0gaXMgbm90IG5ldywgYWRkIHRvIGNhcnQsIHNldCBxdWFudGl0eSB0byAxXG4gICAgaWYgKCFmb3VuZEl0ZW0pIHtcbiAgICAgIC8vc2V0IHF1YW50aXR5IHByb3BlcnR5IHRvIDFcbiAgICBcbiAgICAgIGxldCB0ZW1wID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShpdGVtKSk7XG4gICAgICB0ZW1wLnF1YW50aXR5ID0gMTtcbiAgICAgIHZhciBuZXdDYXJ0ID0ge1xuICAgICAgICAgIGl0ZW1zOiBbLi4uc3RhdGUuY2FydC5pdGVtcyx0ZW1wXSxcbiAgICAgICAgICB0b3RhbDogc3RhdGUuY2FydC50b3RhbCArIGl0ZW0ucHJpY2UsXG4gICAgICB9XG4gICAgICBzZXRTdGF0ZSh7Y2FydDpuZXdDYXJ0fSlcbiAgICAgIGNvbnNvbGUubG9nKGBUb3RhbCBpdGVtczogJHtKU09OLnN0cmluZ2lmeShuZXdDYXJ0KX1gKVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyB3ZSBhbHJlYWR5IGhhdmUgaXQgc28ganVzdCBpbmNyZWFzZSBxdWFudGl0eSArK1xuICAgICAgY29uc29sZS5sb2coYFRvdGFsIHNvIGZhcjogICR7c3RhdGUuY2FydC50b3RhbH1gKVxuICAgICAgbmV3Q2FydD0ge1xuICAgICAgICAgIGl0ZW1zOiBpdGVtcy5tYXAoKGl0ZW0pID0+e1xuICAgICAgICAgICAgaWYoaXRlbS5pZCA9PT0gZm91bmRJdGVtLmlkKXtcbiAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGl0ZW0sIHsgcXVhbnRpdHk6IGl0ZW0ucXVhbnRpdHkgKyAxIH0pXG4gICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgICB9fSksXG4gICAgICAgICAgdG90YWw6IHN0YXRlLmNhcnQudG90YWwgKyBpdGVtLnByaWNlLFxuICAgICAgICB9XG4gICAgfVxuICAgIHNldFN0YXRlKHtjYXJ0OiBuZXdDYXJ0fSk7ICAvLyBwcm9ibGVtIGlzIHRoaXMgaXMgbm90IHVwZGF0ZWQgeWV0XG4gICAgY29uc29sZS5sb2coYHN0YXRlIHJlc2V0IHRvIGNhcnQ6JHtKU09OLnN0cmluZ2lmeShzdGF0ZSl9YClcbiAgICAgXG4gIH07XG4gIHJlbW92ZUl0ZW0gPSAoaXRlbSkgPT4ge1xuICAgIGxldCB7IGl0ZW1zIH0gPSBzdGF0ZS5jYXJ0O1xuICAgIC8vY2hlY2sgZm9yIGl0ZW0gYWxyZWFkeSBpbiBjYXJ0XG4gICAgY29uc3QgZm91bmRJdGVtID0gaXRlbXMuZmluZCgoaSkgPT4gaS5pZCA9PT0gaXRlbS5pZCk7XG4gICAgaWYgKGZvdW5kSXRlbS5xdWFudGl0eSA+IDEpIHtcbiAgICAgIHZhciBuZXdDYXJ0ID0ge1xuICAgICAgICBpdGVtczogaXRlbXMubWFwKChpdGVtKSA9PntcbiAgICAgICAgaWYoaXRlbS5pZCA9PT0gZm91bmRJdGVtLmlkKXtcbiAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgaXRlbSwgeyBxdWFudGl0eTogaXRlbS5xdWFudGl0eSAtIDEgfSlcbiAgICAgICAgIH1lbHNle1xuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgIH19KSxcbiAgICAgIHRvdGFsOiBzdGF0ZS5jYXJ0LnRvdGFsIC0gaXRlbS5wcmljZSxcbiAgICAgIH1cbiAgICAgIC8vY29uc29sZS5sb2coYE5ld0NhcnQgYWZ0ZXIgcmVtb3ZlOiAke0pTT04uc3RyaW5naWZ5KG5ld0NhcnQpfWApXG4gICAgfSBlbHNlIHsgLy8gb25seSAxIGluIHRoZSBjYXJ0IHNvIHJlbW92ZSB0aGUgd2hvbGUgaXRlbVxuICAgICAgY29uc29sZS5sb2coYFRyeSByZW1vdmUgaXRlbSAke0pTT04uc3RyaW5naWZ5KGZvdW5kSXRlbSl9YClcbiAgICAgIGNvbnN0IGluZGV4ID0gaXRlbXMuZmluZEluZGV4KChpKSA9PiBpLmlkID09PSBmb3VuZEl0ZW0uaWQpO1xuICAgICAgaXRlbXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIHZhciBuZXdDYXJ0PSB7IGl0ZW1zOiBpdGVtcywgdG90YWw6IHN0YXRlLmNhcnQudG90YWwgLSBpdGVtLnByaWNlIH0gXG4gICAgfVxuICAgIHNldFN0YXRlKHtjYXJ0Om5ld0NhcnR9KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEFwcENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3tjYXJ0OiBzdGF0ZS5jYXJ0LCBhZGRJdGVtOiBhZGRJdGVtLCByZW1vdmVJdGVtOiByZW1vdmVJdGVtLGlzQXV0aGVudGljYXRlZDpmYWxzZSx1c2VyOm51bGwsc2V0VXNlcjooKT0+e2FsZXJ0KFwiaGVsbG9cIil9fX0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC4wLjAvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCJcbiAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtR241Mzg0eHFRMWFvV1hBKzA1OFJYUHhQZzZmeTRJV3ZUTmgwRTI2M1htRmNKbFNBd2lHZ0ZBVy9kQWlTNkpYbVwiXG4gICAgICAgICAgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIlxuICAgICAgICAvPlxuICAgICAgPC9IZWFkPlxuICAgIFxuICAgICAgPExheW91dD5cbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L0xheW91dD5cblxuICAgIDwvQXBwQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbiAgXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwic291cmNlUm9vdCI6IiJ9