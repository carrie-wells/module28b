webpackHotUpdate_N_E("pages/login",{

/***/ "./components/auth.js":
/*!****************************!*\
  !*** ./components/auth.js ***!
  \****************************/
/*! exports provided: registerUser, login, logout, withAuthSync */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerUser", function() { return registerUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withAuthSync", function() { return withAuthSync; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);


var _this = undefined,
    _jsxFileName = "c:\\MIT xPRO\\Module 28B\\Setting Up GraphQL with Apollo\\components\\auth.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/* /lib/auth.js */




var API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337"; //register a new user

var registerUser = function registerUser(username, email, password) {
  //prevent function from being ran on the server
  if (false) {}

  return new Promise(function (resolve, reject) {
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.post("".concat(API_URL, "/auth/local/register"), {
      username: username,
      email: email,
      password: password
    }).then(function (res) {
      //set token response from Strapi for server validation
      js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set("token", res.data.jwt); //resolve the promise to set loading to false in SignUp form

      resolve(res); //redirect back to home page for restaurance selection

      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push("/");
    })["catch"](function (error) {
      //reject the promise and pass the error object back to the form
      reject(error);
    });
  });
};
var login = function login(identifier, password) {
  //prevent function from being ran on the server
  if (false) {}

  return new Promise(function (resolve, reject) {
    alert("login 1");
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.post("".concat(API_URL, "/auth/local/"), {
      identifier: identifier,
      password: password
    }).then(function (res) {
      alert("login 2" + JSON.stringify(res.data.jwt)); //set token response from Strapi for server validation

      js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set("token", res.data.jwt); //resolve the promise to set loading to false in SignUp form

      resolve(res); //redirect back to home page for restaurance selection

      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push("/");
    })["catch"](function (error) {
      alert("login error" + JSON.stringify(error)); //reject the promise and pass the error object back to the form

      reject(error);
    });
  });
};
var logout = function logout() {
  //remove token and user cookie
  js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.remove("token");
  delete window.__user; // sync logout between multiple windows

  window.localStorage.setItem("logout", Date.now()); //redirect to the home page

  next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push("/");
}; //Higher Order Component to wrap our pages and logout simultaneously logged in tabs
// THIS IS NOT USED in the tutorial, only provided if you wanted to implement

var withAuthSync = function withAuthSync(Component) {
  var _s = $RefreshSig$();

  var Wrapper = function Wrapper(props) {
    _s();

    var syncLogout = function syncLogout(event) {
      if (event.key === "logout") {
        next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push("/login");
      }
    };

    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
      window.addEventListener("storage", syncLogout);
      return function () {
        window.removeEventListener("storage", syncLogout);
        window.localStorage.removeItem("logout");
      };
    }, []);
    return __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 12
      }
    }));
  };

  _s(Wrapper, "OD7bBpZva5O2jO+Puf00hKivP7c=");

  if (Component.getInitialProps) {
    Wrapper.getInitialProps = Component.getInitialProps;
  }

  return Wrapper;
};

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdXRoLmpzIl0sIm5hbWVzIjpbIkFQSV9VUkwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX1VSTCIsInJlZ2lzdGVyVXNlciIsInVzZXJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiYXhpb3MiLCJwb3N0IiwidGhlbiIsInJlcyIsIkNvb2tpZSIsInNldCIsImRhdGEiLCJqd3QiLCJSb3V0ZXIiLCJwdXNoIiwiZXJyb3IiLCJsb2dpbiIsImlkZW50aWZpZXIiLCJhbGVydCIsIkpTT04iLCJzdHJpbmdpZnkiLCJsb2dvdXQiLCJyZW1vdmUiLCJ3aW5kb3ciLCJfX3VzZXIiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiRGF0ZSIsIm5vdyIsIndpdGhBdXRoU3luYyIsIkNvbXBvbmVudCIsIldyYXBwZXIiLCJwcm9wcyIsInN5bmNMb2dvdXQiLCJldmVudCIsImtleSIsInVzZUVmZmVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVtb3ZlSXRlbSIsImdldEluaXRpYWxQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsT0FBTyxHQUFHQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsbUJBQVosSUFBbUMsdUJBQW5ELEMsQ0FFQTs7QUFDTyxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxRQUFELEVBQVdDLEtBQVgsRUFBa0JDLFFBQWxCLEVBQStCO0FBQ3pEO0FBQ0EsYUFBbUMsRUFFbEM7O0FBQ0QsU0FBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDQyxnREFBSyxDQUNGQyxJQURILFdBQ1daLE9BRFgsMkJBQzBDO0FBQUVLLGNBQVEsRUFB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LE1BQUMsU0FBRCx5RkFBZVAsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQVA7QUFDRCxHQWpCRDs7QUFEeUMsS0FDbkNELE9BRG1DOztBQW9CekMsTUFBSUQsU0FBUyxDQUFDVSxlQUFkLEVBQStCO0FBQzdCVCxXQUFPLENBQUNTLGVBQVIsR0FBMEJWLFNBQVMsQ0FBQ1UsZUFBcEM7QUFDRDs7QUFFRCxTQUFPVCxPQUFQO0FBQ0QsQ0F6Qk0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uNjcxOWYwMzQ3OWU0ODJlNWRiMmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC9saWIvYXV0aC5qcyAqL1xuXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgQ29va2llIGZyb20gXCJqcy1jb29raWVcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuY29uc3QgQVBJX1VSTCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkwgfHwgXCJodHRwOi8vbG9jYWxob3N0OjEzMzdcIjtcblxuLy9yZWdpc3RlciBhIG5ldyB1c2VyXG5leHBvcnQgY29uc3QgcmVnaXN0ZXJVc2VyID0gKHVzZXJuYW1lLCBlbWFpbCwgcGFzc3dvcmQpID0+IHtcbiAgLy9wcmV2ZW50IGZ1bmN0aW9uIGZyb20gYmVpbmcgcmFuIG9uIHRoZSBzZXJ2ZXJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBheGlvc1xuICAgICAgLnBvc3QoYCR7QVBJX1VSTH0vYXV0aC9sb2NhbC9yZWdpc3RlcmAsIHsgdXNlcm5hbWUsIGVtYWlsLCBwYXNzd29yZCB9KVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAvL3NldCB0b2tlbiByZXNwb25zZSBmcm9tIFN0cmFwaSBmb3Igc2VydmVyIHZhbGlkYXRpb25cbiAgICAgICAgQ29va2llLnNldChcInRva2VuXCIsIHJlcy5kYXRhLmp3dCk7XG5cbiAgICAgICAgLy9yZXNvbHZlIHRoZSBwcm9taXNlIHRvIHNldCBsb2FkaW5nIHRvIGZhbHNlIGluIFNpZ25VcCBmb3JtXG4gICAgICAgIHJlc29sdmUocmVzKTtcbiAgICAgICAgLy9yZWRpcmVjdCBiYWNrIHRvIGhvbWUgcGFnZSBmb3IgcmVzdGF1cmFuY2Ugc2VsZWN0aW9uXG4gICAgICAgIFJvdXRlci5wdXNoKFwiL1wiKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIC8vcmVqZWN0IHRoZSBwcm9taXNlIGFuZCBwYXNzIHRoZSBlcnJvciBvYmplY3QgYmFjayB0byB0aGUgZm9ybVxuICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvZ2luID0gKGlkZW50aWZpZXIsIHBhc3N3b3JkKSA9PiB7XG4gIC8vcHJldmVudCBmdW5jdGlvbiBmcm9tIGJlaW5nIHJhbiBvbiB0aGUgc2VydmVyXG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBhbGVydChcImxvZ2luIDFcIik7XG4gICAgYXhpb3NcbiAgICAgIC5wb3N0KGAke0FQSV9VUkx9L2F1dGgvbG9jYWwvYCwgeyBpZGVudGlmaWVyLCBwYXNzd29yZCB9KVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBhbGVydChcImxvZ2luIDJcIiArIEpTT04uc3RyaW5naWZ5KHJlcy5kYXRhLmp3dCkpO1xuICAgICAgICAvL3NldCB0b2tlbiByZXNwb25zZSBmcm9tIFN0cmFwaSBmb3Igc2VydmVyIHZhbGlkYXRpb25cbiAgICAgICAgQ29va2llLnNldChcInRva2VuXCIsIHJlcy5kYXRhLmp3dCk7XG5cbiAgICAgICAgLy9yZXNvbHZlIHRoZSBwcm9taXNlIHRvIHNldCBsb2FkaW5nIHRvIGZhbHNlIGluIFNpZ25VcCBmb3JtXG4gICAgICAgIHJlc29sdmUocmVzKTtcbiAgICAgICAgLy9yZWRpcmVjdCBiYWNrIHRvIGhvbWUgcGFnZSBmb3IgcmVzdGF1cmFuY2Ugc2VsZWN0aW9uXG4gICAgICAgIFJvdXRlci5wdXNoKFwiL1wiKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGFsZXJ0KFwibG9naW4gZXJyb3JcIiArIEpTT04uc3RyaW5naWZ5KGVycm9yKSk7XG4gICAgICAgIC8vcmVqZWN0IHRoZSBwcm9taXNlIGFuZCBwYXNzIHRoZSBlcnJvciBvYmplY3QgYmFjayB0byB0aGUgZm9ybVxuICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvZ291dCA9ICgpID0+IHtcbiAgLy9yZW1vdmUgdG9rZW4gYW5kIHVzZXIgY29va2llXG4gIENvb2tpZS5yZW1vdmUoXCJ0b2tlblwiKTtcbiAgZGVsZXRlIHdpbmRvdy5fX3VzZXI7XG4gIC8vIHN5bmMgbG9nb3V0IGJldHdlZW4gbXVsdGlwbGUgd2luZG93c1xuICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsb2dvdXRcIiwgRGF0ZS5ub3coKSk7XG4gIC8vcmVkaXJlY3QgdG8gdGhlIGhvbWUgcGFnZVxuICBSb3V0ZXIucHVzaChcIi9cIik7XG59O1xuXG4vL0hpZ2hlciBPcmRlciBDb21wb25lbnQgdG8gd3JhcCBvdXIgcGFnZXMgYW5kIGxvZ291dCBzaW11bHRhbmVvdXNseSBsb2dnZWQgaW4gdGFic1xuLy8gVEhJUyBJUyBOT1QgVVNFRCBpbiB0aGUgdHV0b3JpYWwsIG9ubHkgcHJvdmlkZWQgaWYgeW91IHdhbnRlZCB0byBpbXBsZW1lbnRcbmV4cG9ydCBjb25zdCB3aXRoQXV0aFN5bmMgPSAoQ29tcG9uZW50KSA9PiB7XG4gIGNvbnN0IFdyYXBwZXIgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBzeW5jTG9nb3V0ID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQua2V5ID09PSBcImxvZ291dFwiKSB7XG4gICAgICAgIFJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzdG9yYWdlXCIsIHN5bmNMb2dvdXQpO1xuXG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInN0b3JhZ2VcIiwgc3luY0xvZ291dCk7XG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImxvZ291dFwiKTtcbiAgICAgIH07XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIDxDb21wb25lbnQgey4uLnByb3BzfSAvPjtcbiAgfTtcblxuICBpZiAoQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcykge1xuICAgIFdyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcztcbiAgfVxuXG4gIHJldHVybiBXcmFwcGVyO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=