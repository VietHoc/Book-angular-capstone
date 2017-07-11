webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        redirectTo: '/home', pathMatch: 'full'
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-toolbar></app-toolbar>\n\n<router-outlet></router-outlet>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'book app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__book_book_module__ = __webpack_require__("../../../../../src/app/book/book.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__users_users_module__ = __webpack_require__("../../../../../src/app/users/users.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__auth_auth_module__ = __webpack_require__("../../../../../src/app/auth/auth.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__guards_logged_out_guard__ = __webpack_require__("../../../../../src/app/guards/logged-out.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__guards_logged_in_guard__ = __webpack_require__("../../../../../src/app/guards/logged-in.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__toolbar_toolbar_component__ = __webpack_require__("../../../../../src/app/toolbar/toolbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__auth_custom_option__ = __webpack_require__("../../../../../src/app/auth/custom-option.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_ng2_toastr__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var MATERIAL_IMPORTS = [
    __WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MdButtonModule */],
    __WEBPACK_IMPORTED_MODULE_6__angular_material__["b" /* MdButtonToggleModule */],
    __WEBPACK_IMPORTED_MODULE_6__angular_material__["c" /* MdCardModule */],
    __WEBPACK_IMPORTED_MODULE_6__angular_material__["d" /* MdCheckboxModule */],
    __WEBPACK_IMPORTED_MODULE_6__angular_material__["e" /* MdChipsModule */],
    __WEBPACK_IMPORTED_MODULE_6__angular_material__["f" /* MdCoreModule */],
    __WEBPACK_IMPORTED_MODULE_6__angular_material__["g" /* MdIconModule */],
    __WEBPACK_IMPORTED_MODULE_6__angular_material__["h" /* MdInputModule */],
    __WEBPACK_IMPORTED_MODULE_6__angular_material__["i" /* MdLineModule */],
    __WEBPACK_IMPORTED_MODULE_6__angular_material__["j" /* MdListModule */],
    __WEBPACK_IMPORTED_MODULE_6__angular_material__["k" /* MdMenuModule */],
    __WEBPACK_IMPORTED_MODULE_6__angular_material__["l" /* MdOptionModule */],
    __WEBPACK_IMPORTED_MODULE_6__angular_material__["m" /* MdProgressBarModule */],
    __WEBPACK_IMPORTED_MODULE_6__angular_material__["n" /* MdProgressSpinnerModule */],
    __WEBPACK_IMPORTED_MODULE_6__angular_material__["o" /* MdRadioModule */],
    __WEBPACK_IMPORTED_MODULE_6__angular_material__["p" /* MdRippleModule */],
    __WEBPACK_IMPORTED_MODULE_6__angular_material__["q" /* MdSelectModule */],
    __WEBPACK_IMPORTED_MODULE_6__angular_material__["r" /* MdSliderModule */],
    __WEBPACK_IMPORTED_MODULE_6__angular_material__["s" /* MdSlideToggleModule */],
    __WEBPACK_IMPORTED_MODULE_6__angular_material__["t" /* MdSnackBarModule */],
    __WEBPACK_IMPORTED_MODULE_6__angular_material__["u" /* MdTabsModule */],
    __WEBPACK_IMPORTED_MODULE_6__angular_material__["v" /* MdToolbarModule */],
    __WEBPACK_IMPORTED_MODULE_6__angular_material__["w" /* MdTooltipModule */]
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_16__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_17__toolbar_toolbar_component__["a" /* ToolbarComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            MATERIAL_IMPORTS,
            __WEBPACK_IMPORTED_MODULE_12__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_10__auth_auth_module__["a" /* AuthModule */],
            __WEBPACK_IMPORTED_MODULE_11__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_19_ng2_toastr_ng2_toastr__["ToastModule"].forRoot(),
            __WEBPACK_IMPORTED_MODULE_8__book_book_module__["a" /* BookModule */],
            __WEBPACK_IMPORTED_MODULE_9__users_users_module__["a" /* UsersModule */]
        ],
        exports: [
            MATERIAL_IMPORTS
        ],
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_4__angular_common__["APP_BASE_HREF"], useValue: '/' },
            { provide: __WEBPACK_IMPORTED_MODULE_4__angular_common__["LocationStrategy"], useClass: __WEBPACK_IMPORTED_MODULE_4__angular_common__["HashLocationStrategy"] },
            { provide: __WEBPACK_IMPORTED_MODULE_20_ng2_toastr__["ToastOptions"], useClass: __WEBPACK_IMPORTED_MODULE_18__auth_custom_option__["a" /* CustomOption */] },
            __WEBPACK_IMPORTED_MODULE_13__auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_14__guards_logged_out_guard__["a" /* LoggedOutGuard */],
            __WEBPACK_IMPORTED_MODULE_15__guards_logged_in_guard__["a" /* LoggedInGuard */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/auth/auth.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__guards_logged_out_guard__ = __webpack_require__("../../../../../src/app/guards/logged-out.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_component__ = __webpack_require__("../../../../../src/app/auth/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__signup_signup_component__ = __webpack_require__("../../../../../src/app/auth/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var MATERIAL_IMPORTS = [
    __WEBPACK_IMPORTED_MODULE_8__angular_material__["a" /* MdButtonModule */],
    __WEBPACK_IMPORTED_MODULE_8__angular_material__["b" /* MdButtonToggleModule */],
    __WEBPACK_IMPORTED_MODULE_8__angular_material__["c" /* MdCardModule */],
    __WEBPACK_IMPORTED_MODULE_8__angular_material__["d" /* MdCheckboxModule */],
    __WEBPACK_IMPORTED_MODULE_8__angular_material__["e" /* MdChipsModule */],
    __WEBPACK_IMPORTED_MODULE_8__angular_material__["f" /* MdCoreModule */],
    __WEBPACK_IMPORTED_MODULE_8__angular_material__["g" /* MdIconModule */],
    __WEBPACK_IMPORTED_MODULE_8__angular_material__["h" /* MdInputModule */],
    __WEBPACK_IMPORTED_MODULE_8__angular_material__["i" /* MdLineModule */],
    __WEBPACK_IMPORTED_MODULE_8__angular_material__["j" /* MdListModule */],
    __WEBPACK_IMPORTED_MODULE_8__angular_material__["k" /* MdMenuModule */],
    __WEBPACK_IMPORTED_MODULE_8__angular_material__["l" /* MdOptionModule */],
    __WEBPACK_IMPORTED_MODULE_8__angular_material__["m" /* MdProgressBarModule */],
    __WEBPACK_IMPORTED_MODULE_8__angular_material__["n" /* MdProgressSpinnerModule */],
    __WEBPACK_IMPORTED_MODULE_8__angular_material__["o" /* MdRadioModule */],
    __WEBPACK_IMPORTED_MODULE_8__angular_material__["p" /* MdRippleModule */],
    __WEBPACK_IMPORTED_MODULE_8__angular_material__["q" /* MdSelectModule */],
    __WEBPACK_IMPORTED_MODULE_8__angular_material__["r" /* MdSliderModule */],
    __WEBPACK_IMPORTED_MODULE_8__angular_material__["s" /* MdSlideToggleModule */],
    __WEBPACK_IMPORTED_MODULE_8__angular_material__["t" /* MdSnackBarModule */],
    __WEBPACK_IMPORTED_MODULE_8__angular_material__["u" /* MdTabsModule */],
    __WEBPACK_IMPORTED_MODULE_8__angular_material__["v" /* MdToolbarModule */],
    __WEBPACK_IMPORTED_MODULE_8__angular_material__["w" /* MdTooltipModule */]
];
var routes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_7__signup_signup_component__["a" /* SignupComponent */] }
];
var AuthModule = (function () {
    function AuthModule() {
    }
    return AuthModule;
}());
AuthModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */].forChild([
                {
                    path: '',
                    canActivateChild: [__WEBPACK_IMPORTED_MODULE_5__guards_logged_out_guard__["a" /* LoggedOutGuard */]],
                    children: routes
                }
            ]),
            MATERIAL_IMPORTS
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_7__signup_signup_component__["a" /* SignupComponent */]
        ]
    })
], AuthModule);

//# sourceMappingURL=auth.module.js.map

/***/ }),

/***/ "../../../../../src/app/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.base_url = 'https://shrouded-wildwood-57352.herokuapp.com';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        if (localStorage.getItem("auth_token") !== null)
            sessionStorage.setItem("auth_token", localStorage.getItem("auth_token"));
    }
    AuthService.prototype.isLoggedOut = function () {
        return !this.isLoggedIn();
    };
    AuthService.prototype.isLoggedIn = function () {
        return sessionStorage.getItem("auth_token") !== null;
    };
    AuthService.prototype.logIn = function (email, password, remember) {
        var _this = this;
        if (remember === void 0) { remember = false; }
        var params = [
            "email=" + email,
            "password=" + password
        ].join("&");
        var url = this.base_url + "/auth/login?" + params;
        return this.http.post(url, {}, { headers: this.headers })
            .map(function (res) {
            _this.save_auth_token(res, remember);
            return res;
        });
    };
    AuthService.prototype.signUp = function (name, email, password, passwordConfirmation) {
        var _this = this;
        var params = [
            "name=" + name,
            "email=" + email,
            "password=" + password,
            "password_confirmation=" + passwordConfirmation
        ].join("&");
        var url = this.base_url + "/signup?" + params;
        return this.http.post(url, {}, { headers: this.headers })
            .map(function (res) {
            _this.save_auth_token(res, false);
            return res;
        });
    };
    AuthService.prototype.getUserWithId = function (id) {
        var url = this.base_url + "/users/" + id + ".json";
        return this.http
            .get(url)
            .map(function (res) {
            return res.json().user;
        });
    };
    AuthService.prototype.getCurrentUser = function () {
        var url = this.base_url + "/get_current_user";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Authorization': "" + this.get_auth_token()
        });
        return this.http
            .post(url, {}, { headers: headers })
            .map(function (res) { return res.json().user; });
    };
    AuthService.prototype.logOut = function () {
        localStorage.clear();
        sessionStorage.clear();
        this.router.navigate(['/']);
    };
    AuthService.prototype.redirectAfterLogin = function () {
        var redirectUrl = localStorage.getItem("redirectUrl");
        var redirectTo = redirectUrl ? redirectUrl : '/';
        localStorage.removeItem("redirectUrl");
        this.router.navigate([redirectTo]);
    };
    AuthService.prototype.save_auth_token = function (res, remember) {
        if (remember)
            localStorage.setItem("auth_token", res.json().auth_token);
        sessionStorage.setItem("auth_token", res.json().auth_token);
        console.log("save auth token: ", localStorage.getItem("auth_token"));
    };
    AuthService.prototype.get_auth_token = function () {
        return sessionStorage.getItem("auth_token");
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthService);

var _a, _b;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/auth/custom-option.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ng2_toastr__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomOption; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var CustomOption = (function (_super) {
    __extends(CustomOption, _super);
    function CustomOption() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.animate = 'flyRight'; // you can override any options available
        _this.newestOnTop = true;
        _this.showCloseButton = true;
        _this.positionClass = 'toast-bottom-right';
        _this.toastLife = 10000;
        return _this;
    }
    return CustomOption;
}(__WEBPACK_IMPORTED_MODULE_0_ng2_toastr__["ToastOptions"]));

//# sourceMappingURL=custom-option.js.map

/***/ }),

/***/ "../../../../../src/app/auth/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui middle aligned center aligned grid\">\n  <div class=\"column\">\n    <h2 class=\"ui image header\">\n      <div class=\"content\">\n        Log-in to your account\n      </div>\n    </h2>\n    <form [formGroup]=\"loginForm\" (ngSubmit)=\"submit(loginForm.value)\" class=\"ui large form\">\n      <div *ngIf=\"loading\">\n        <md-progress-bar mode=\"query\"></md-progress-bar>\n      </div>\n       <app-error-label [control]=\"loginForm\"></app-error-label> \n      <div class=\"ui stacked secondary  segment\">\n        <div class=\"field\">\n          <label for=\"email\">Email</label>\n          <div class=\"ui left icon input\">\n            <i class=\"user icon\"></i>\n            <input \n              id=\"email\"\n              type=\"email\"\n              placeholder=\"email\"\n              formControlName=\"email\"\n              >\n          </div>\n           <app-error-label [control]=\"loginForm.get('email')\"></app-error-label> \n        </div>\n        <div class=\"field\">\n          <label for=\"password\">Password</label>\n          <div class=\"ui left icon input\">\n            <i class=\"lock icon\"></i>\n            <input \n              id=\"password\"\n              type=\"password\"\n              placeholder=\"\"\n              formControlName=\"password\"\n              >\n          </div>\n           <app-error-label [control]=\"loginForm.get('password')\"></app-error-label> \n        </div>\n\n        <!-- <div class=\"\">\n          <div class=\"ui checkbox\">\n            <input type=\"checkbox\" tabindex=\"0\" class=\"hidden\" formControlName=\"remember\">\n            <label>Remember me</label>\n          </div>\n        </div> -->\n\n        <md-checkbox formControlName=\"remember\">Remember me</md-checkbox>\n\n        <button class=\"ui positive basic button\" type=\"submit\">Submit</button>\n      </div>\n\n      <div class=\"ui error message\"></div>\n\n    </form>\n\n    <div class=\"ui message\">\n      You don't have account <a routerLink=\"/signup\">Register</a>\n    </div>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/auth/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body > .grid {\n  height: 100%; }\n\n.image {\n  margin-top: -100px; }\n\n.column {\n  max-width: 450px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_validations__ = __webpack_require__("../../../../../src/app/auth/my-validations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, fb) {
        this.authService = authService;
        this.fb = fb;
        this.loading = false;
        this.remember = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.fb.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__my_validations__["a" /* MyValidations */].cannotContainSpace
                ])],
            remember: [false]
        });
    };
    LoginComponent.prototype.submit = function (value) {
        this.toggleLoading();
        this.authService.logIn(value.email, value.password, value.remember)
            .subscribe(this.authService.redirectAfterLogin.bind(this.authService), this.afterFailedLogin.bind(this));
    };
    LoginComponent.prototype.afterFailedLogin = function (errors) {
        this.toggleLoading();
        var parsed_errors = JSON.parse(errors._body).errors;
        for (var attribute in this.loginForm.controls) {
            if (parsed_errors[attribute]) {
                this.loginForm.controls[attribute].setErrors(parsed_errors[attribute]);
            }
        }
        this.loginForm.setErrors(parsed_errors);
    };
    LoginComponent.prototype.toggleLoading = function () {
        this.loading = !this.loading;
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/auth/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/auth/login/login.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/auth/my-validations.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyValidations; });
var MyValidations = (function () {
    function MyValidations() {
    }
    MyValidations.cannotContainSpace = function (control) {
        if (control.value.indexOf(' ') >= 0)
            return { cannotContainSpace: true };
        return null;
    };
    return MyValidations;
}());

//# sourceMappingURL=my-validations.js.map

/***/ }),

/***/ "../../../../../src/app/auth/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui middle aligned center aligned grid\">\n  <div class=\"column\">\n    <h2 class=\"ui image header\">\n      <div class=\"content\">\n        Create an accout\n      </div>\n    </h2>\n    <form [formGroup]=\"signUpForm\" (ngSubmit)=\"submit(signUpForm.value)\" class=\"ui large form\">\n      <div *ngIf=\"loading\">\n        <md-progress-bar mode=\"query\"></md-progress-bar>\n      </div>\n      <div class=\"ui stacked secondary segment\">\n        <div class=\"field\">\n          <label for=\"name\">Name</label>\n          <div class=\"ui left icon input\">\n            <i class=\"user icon\"></i>\n            <input \n              id=\"name\"\n              type=\"name\"\n              placeholder=\"name\"\n              formControlName=\"name\"\n            >\n          </div>\n          <app-error-label [control]=\"signUpForm.get('email')\"></app-error-label>\n        </div>\n\n        <div class=\"field\">\n          <label for=\"email\">Email</label>\n          <div class=\"ui left icon input\">\n            <i class=\"user icon\"></i>\n            <input \n              id=\"email\"\n              type=\"email\"\n              placeholder=\"email\"\n              formControlName=\"email\"\n            >\n          </div>\n          <app-error-label [control]=\"signUpForm.get('email')\"></app-error-label>\n        </div>\n\n        <div class=\"field\">\n          <label for=\"password\">Password</label>\n          <div class=\"ui left icon input\">\n            <i class=\"lock icon\"></i>\n            <input \n              id=\"password\"\n              type=\"password\"\n              placeholder=\"\"\n              formControlName=\"password\"\n              >\n          </div>\n          <app-error-label [control]=\"signUpForm.get('password')\"></app-error-label>\n        </div>\n\n        <div class=\"field\">\n          <label for=\"passwordConfirmation\">Password confirmation</label>\n          <div class=\"ui left icon input\">\n            <i class=\"lock icon\"></i>\n            <input \n              id=\"passwordConfirmation\"\n              type=\"password\"\n              placeholder=\"\"\n    \n              formControlName=\"passwordConfirmation\"\n              >\n          </div>\n          <app-error-label [control]=\"signUpForm.get('passwordConfirmation')\"></app-error-label>\n        </div>\n        <button class=\"ui positive basic button\" [disabled]=\"signUpForm.invalid\" type=\"submit\" (click)=\"showInfo()\">Submit</button>\n      </div>  \n    </form>\n\n    <div class=\"ui message\">\n      Have an account? <a routerLink=\"/login\">Login</a>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/auth/signup/signup.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body > .grid {\n  height: 100%; }\n\n.image {\n  margin-top: -100px; }\n\n.column {\n  max-width: 450px; }\n\n.toast-title {\n  font-weight: 700; }\n\n.toast-message {\n  word-wrap: break-word; }\n\n.toast-message a, .toast-message label {\n  color: #fff; }\n\n.toast-message a:hover {\n  color: #ccc;\n  text-decoration: none; }\n\n.toast-close-button {\n  position: relative;\n  right: -.3em;\n  top: -.3em;\n  float: right;\n  font-size: 20px;\n  font-weight: 700;\n  color: #fff;\n  -webkit-text-shadow: 0 1px 0 #fff;\n  text-shadow: 0 1px 0 #fff;\n  opacity: .8; }\n\n.toast-close-button:focus, .toast-close-button:hover {\n  color: #000;\n  text-decoration: none;\n  cursor: pointer;\n  opacity: .4; }\n\nbutton.toast-close-button {\n  padding: 0;\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n  -webkit-appearance: none; }\n\n.toast-top-center {\n  top: 0;\n  right: 0;\n  width: 100%; }\n\n.toast-bottom-center {\n  bottom: 0;\n  right: 0;\n  width: 100%; }\n\n.toast-top-full-width {\n  top: 0;\n  right: 0;\n  width: 100%; }\n\n.toast-bottom-full-width {\n  bottom: 0;\n  right: 0;\n  width: 100%; }\n\n.toast-top-left {\n  top: 12px;\n  left: 12px; }\n\n.toast-top-right {\n  top: 12px;\n  right: 12px; }\n\n.toast-bottom-right {\n  right: 12px;\n  bottom: 12px; }\n\n.toast-bottom-left {\n  bottom: 12px;\n  left: 12px; }\n\n#toast-container {\n  pointer-events: none;\n  position: fixed;\n  z-index: 99999; }\n\n#toast-container * {\n  box-sizing: border-box; }\n\n#toast-container > div {\n  position: relative;\n  overflow: hidden;\n  margin: 0 0 6px;\n  padding: 15px 15px 15px 50px;\n  width: 300px;\n  border-radius: 3px 3px 3px 3px;\n  background-position: 15px;\n  background-repeat: no-repeat;\n  box-shadow: 0 0 12px #999;\n  color: #fff;\n  opacity: .8; }\n\n#toast-container > div.toast-custom {\n  padding: 15px;\n  color: #030303; }\n\n#toast-container > div.toast-custom .toast-close-button {\n  color: #999 !important; }\n\n#toast-container > :hover {\n  box-shadow: 0 0 12px #000;\n  opacity: 1;\n  cursor: pointer; }\n\n#toast-container > .toast-info {\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGwSURBVEhLtZa9SgNBEMc9sUxxRcoUKSzSWIhXpFMhhYWFhaBg4yPYiWCXZxBLERsLRS3EQkEfwCKdjWJAwSKCgoKCcudv4O5YLrt7EzgXhiU3/4+b2ckmwVjJSpKkQ6wAi4gwhT+z3wRBcEz0yjSseUTrcRyfsHsXmD0AmbHOC9Ii8VImnuXBPglHpQ5wwSVM7sNnTG7Za4JwDdCjxyAiH3nyA2mtaTJufiDZ5dCaqlItILh1NHatfN5skvjx9Z38m69CgzuXmZgVrPIGE763Jx9qKsRozWYw6xOHdER+nn2KkO+Bb+UV5CBN6WC6QtBgbRVozrahAbmm6HtUsgtPC19tFdxXZYBOfkbmFJ1VaHA1VAHjd0pp70oTZzvR+EVrx2Ygfdsq6eu55BHYR8hlcki+n+kERUFG8BrA0BwjeAv2M8WLQBtcy+SD6fNsmnB3AlBLrgTtVW1c2QN4bVWLATaIS60J2Du5y1TiJgjSBvFVZgTmwCU+dAZFoPxGEEs8nyHC9Bwe2GvEJv2WXZb0vjdyFT4Cxk3e/kIqlOGoVLwwPevpYHT+00T+hWwXDf4AJAOUqWcDhbwAAAAASUVORK5CYII=\") !important; }\n\n#toast-container > .toast-error {\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHOSURBVEhLrZa/SgNBEMZzh0WKCClSCKaIYOED+AAKeQQLG8HWztLCImBrYadgIdY+gIKNYkBFSwu7CAoqCgkkoGBI/E28PdbLZmeDLgzZzcx83/zZ2SSXC1j9fr+I1Hq93g2yxH4iwM1vkoBWAdxCmpzTxfkN2RcyZNaHFIkSo10+8kgxkXIURV5HGxTmFuc75B2RfQkpxHG8aAgaAFa0tAHqYFfQ7Iwe2yhODk8+J4C7yAoRTWI3w/4klGRgR4lO7Rpn9+gvMyWp+uxFh8+H+ARlgN1nJuJuQAYvNkEnwGFck18Er4q3egEc/oO+mhLdKgRyhdNFiacC0rlOCbhNVz4H9FnAYgDBvU3QIioZlJFLJtsoHYRDfiZoUyIxqCtRpVlANq0EU4dApjrtgezPFad5S19Wgjkc0hNVnuF4HjVA6C7QrSIbylB+oZe3aHgBsqlNqKYH48jXyJKMuAbiyVJ8KzaB3eRc0pg9VwQ4niFryI68qiOi3AbjwdsfnAtk0bCjTLJKr6mrD9g8iq/S/B81hguOMlQTnVyG40wAcjnmgsCNESDrjme7wfftP4P7SP4N3CJZdvzoNyGq2c/HWOXJGsvVg+RA/k2MC/wN6I2YA2Pt8GkAAAAASUVORK5CYII=\") !important; }\n\n#toast-container > .toast-success {\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADsSURBVEhLY2AYBfQMgf///3P8+/evAIgvA/FsIF+BavYDDWMBGroaSMMBiE8VC7AZDrIFaMFnii3AZTjUgsUUWUDA8OdAH6iQbQEhw4HyGsPEcKBXBIC4ARhex4G4BsjmweU1soIFaGg/WtoFZRIZdEvIMhxkCCjXIVsATV6gFGACs4Rsw0EGgIIH3QJYJgHSARQZDrWAB+jawzgs+Q2UO49D7jnRSRGoEFRILcdmEMWGI0cm0JJ2QpYA1RDvcmzJEWhABhD/pqrL0S0CWuABKgnRki9lLseS7g2AlqwHWQSKH4oKLrILpRGhEQCw2LiRUIa4lwAAAABJRU5ErkJggg==\") !important; }\n\n#toast-container > .toast-warning {\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGYSURBVEhL5ZSvTsNQFMbXZGICMYGYmJhAQIJAICYQPAACiSDB8AiICQQJT4CqQEwgJvYASAQCiZiYmJhAIBATCARJy+9rTsldd8sKu1M0+dLb057v6/lbq/2rK0mS/TRNj9cWNAKPYIJII7gIxCcQ51cvqID+GIEX8ASG4B1bK5gIZFeQfoJdEXOfgX4QAQg7kH2A65yQ87lyxb27sggkAzAuFhbbg1K2kgCkB1bVwyIR9m2L7PRPIhDUIXgGtyKw575yz3lTNs6X4JXnjV+LKM/m3MydnTbtOKIjtz6VhCBq4vSm3ncdrD2lk0VgUXSVKjVDJXJzijW1RQdsU7F77He8u68koNZTz8Oz5yGa6J3H3lZ0xYgXBK2QymlWWA+RWnYhskLBv2vmE+hBMCtbA7KX5drWyRT/2JsqZ2IvfB9Y4bWDNMFbJRFmC9E74SoS0CqulwjkC0+5bpcV1CZ8NMej4pjy0U+doDQsGyo1hzVJttIjhQ7GnBtRFN1UarUlH8F3xict+HY07rEzoUGPlWcjRFRr4/gChZgc3ZL2d8oAAAAASUVORK5CYII=\") !important; }\n\n#toast-container.toast-bottom-center > div, #toast-container.toast-top-center > div {\n  width: 300px;\n  margin: auto; }\n\n#toast-container.toast-bottom-full-width > div, #toast-container.toast-top-full-width > div {\n  width: 96%;\n  margin: auto; }\n\n.toast {\n  background-color: #fff;\n  pointer-events: auto; }\n\n.toast-success {\n  background-color: #51a351; }\n\n.toast-error {\n  background-color: #bd362f; }\n\n.toast-info {\n  background-color: #2f96b4; }\n\n.toast-warning {\n  background-color: #f89406; }\n\n.toast-progress {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  height: 4px;\n  background-color: #000;\n  opacity: .4; }\n\n@media (max-width: 240px) {\n  #toast-container > div {\n    padding: 8px 8px 8px 50px;\n    width: 11em; }\n  #toast-container .toast-close-button {\n    right: -.2em;\n    top: -.2em; } }\n\n@media (min-width: 241px) and (max-width: 480px) {\n  #toast-container > div {\n    padding: 8px 8px 8px 50px;\n    width: 18em; }\n  #toast-container .toast-close-button {\n    right: -.2em;\n    top: -.2em; } }\n\n@media (min-width: 481px) and (max-width: 768px) {\n  #toast-container > div {\n    padding: 15px 15px 15px 50px;\n    width: 25em; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_validations__ = __webpack_require__("../../../../../src/app/auth/my-validations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupComponent = (function () {
    function SignupComponent(authService, fb, toastr, vcr) {
        this.authService = authService;
        this.fb = fb;
        this.toastr = toastr;
        this.loading = false;
        this.signUpUser = {
            name: '',
            email: '',
            password: '',
            passwordConfirmation: ''
        };
        this.signUpForm = fb.group({
            name: ["", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]],
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required
                ])],
            password: ['',
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(6),
                    __WEBPACK_IMPORTED_MODULE_2__my_validations__["a" /* MyValidations */].cannotContainSpace
                ])
            ],
            passwordConfirmation: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]
        });
        this.toastr.setRootViewContainerRef(vcr);
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.submit = function (value) {
        this.toggleLoading();
        this.authService.signUp(value.name, value.email, value.password, value.passwordConfirmation)
            .subscribe(this.authService.redirectAfterLogin.bind(this.authService), this.afterFailedLogin.bind(this));
    };
    SignupComponent.prototype.showInfo = function () {
        this.toastr.info('Please check your email to activate your account!', 'Thank you!');
    };
    SignupComponent.prototype.afterFailedLogin = function (errors) {
        this.toggleLoading();
        var parsed_errors = JSON.parse(errors._body).errors;
        for (var attribute in this.signUpForm.controls) {
            if (parsed_errors[attribute]) {
                this.signUpForm.controls[attribute].setErrors(parsed_errors[attribute]);
            }
        }
        this.signUpForm.setErrors(parsed_errors);
    };
    SignupComponent.prototype.toggleLoading = function () {
        this.loading = !this.loading;
    };
    return SignupComponent;
}());
SignupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-signup',
        template: __webpack_require__("../../../../../src/app/auth/signup/signup.component.html"),
        styles: [__webpack_require__("../../../../../src/app/auth/signup/signup.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__["ToastsManager"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _d || Object])
], SignupComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ "../../../../../src/app/book/book.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Book; });
var Book = (function () {
    function Book(values) {
        if (values === void 0) { values = {}; }
        Object.assign(this, values);
    }
    return Book;
}());

//# sourceMappingURL=book.model.js.map

/***/ }),

/***/ "../../../../../src/app/book/book.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reading_reading_component__ = __webpack_require__("../../../../../src/app/book/reading/reading.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__index_index_component__ = __webpack_require__("../../../../../src/app/book/index/index.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var MATERIAL_IMPORTS = [
    __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MdButtonModule */],
    __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MdButtonToggleModule */],
    __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MdCardModule */],
    __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MdCheckboxModule */],
    __WEBPACK_IMPORTED_MODULE_4__angular_material__["e" /* MdChipsModule */],
    __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MdCoreModule */],
    __WEBPACK_IMPORTED_MODULE_4__angular_material__["g" /* MdIconModule */],
    __WEBPACK_IMPORTED_MODULE_4__angular_material__["h" /* MdInputModule */],
    __WEBPACK_IMPORTED_MODULE_4__angular_material__["i" /* MdLineModule */],
    __WEBPACK_IMPORTED_MODULE_4__angular_material__["j" /* MdListModule */],
    __WEBPACK_IMPORTED_MODULE_4__angular_material__["k" /* MdMenuModule */],
    __WEBPACK_IMPORTED_MODULE_4__angular_material__["l" /* MdOptionModule */],
    __WEBPACK_IMPORTED_MODULE_4__angular_material__["m" /* MdProgressBarModule */],
    __WEBPACK_IMPORTED_MODULE_4__angular_material__["n" /* MdProgressSpinnerModule */],
    __WEBPACK_IMPORTED_MODULE_4__angular_material__["o" /* MdRadioModule */],
    __WEBPACK_IMPORTED_MODULE_4__angular_material__["p" /* MdRippleModule */],
    __WEBPACK_IMPORTED_MODULE_4__angular_material__["q" /* MdSelectModule */],
    __WEBPACK_IMPORTED_MODULE_4__angular_material__["r" /* MdSliderModule */],
    __WEBPACK_IMPORTED_MODULE_4__angular_material__["s" /* MdSlideToggleModule */],
    __WEBPACK_IMPORTED_MODULE_4__angular_material__["t" /* MdSnackBarModule */],
    __WEBPACK_IMPORTED_MODULE_4__angular_material__["u" /* MdTabsModule */],
    __WEBPACK_IMPORTED_MODULE_4__angular_material__["v" /* MdToolbarModule */],
    __WEBPACK_IMPORTED_MODULE_4__angular_material__["w" /* MdTooltipModule */]
];
var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__index_index_component__["a" /* IndexComponent */] },
    { path: 'reading', component: __WEBPACK_IMPORTED_MODULE_5__reading_reading_component__["a" /* ReadingComponent */] }
];
var BookModule = (function () {
    function BookModule() {
    }
    return BookModule;
}());
BookModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            MATERIAL_IMPORTS,
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */].forChild([
                {
                    path: 'book',
                    children: routes
                }
            ])
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__reading_reading_component__["a" /* ReadingComponent */],
            __WEBPACK_IMPORTED_MODULE_6__index_index_component__["a" /* IndexComponent */]
        ]
    })
], BookModule);

//# sourceMappingURL=book.module.js.map

/***/ }),

/***/ "../../../../../src/app/book/book.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BookService = (function () {
    function BookService(http) {
        this.http = http;
        // private baseUrl = environment.api_url;
        this.booksUrl = 'http://localhost:3000/';
        this.books1Url = 'https://shrouded-wildwood-57352.herokuapp.com/';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
    }
    BookService.prototype.getBooks = function () {
        var params = [
            "user_id=2"
        ].join("&");
        var url = this.books1Url + "books.json?" + params;
        return this.http
            .get(url)
            .toPromise()
            .then(function (res) {
            return res.json().books;
        })
            .catch(this.handleError);
    };
    BookService.prototype.deleteBook = function (book) {
        var url = this.booksUrl + "books/" + book.id;
        return this.http
            .delete(url, { headers: this.headers })
            .toPromise()
            .catch(this.handleError);
    };
    BookService.prototype.download = function (id) {
        var params = [
            "" + id
        ].join("&");
        var url = this.booksUrl + "books/" + params;
        return this.http
            .get(url)
            .toPromise()
            .then(function (res) { })
            .catch(this.handleError);
    };
    BookService.prototype.uploadBook = function (book) {
        console.log("params-service", book);
        var params = [
            "user_id=2"
        ].join("&");
        var url = this.booksUrl + "books?" + params;
        return this.http
            .post(url, JSON.stringify(book), { headers: this.headers })
            .toPromise()
            .then(function (res) {
            return res;
        })
            .catch(this.handleError);
    };
    BookService.prototype.search = function (fileName, author, description) {
        var params = [
            "filename=" + fileName,
            "author=" + author,
            "description=" + description
        ].join("&");
        var url = this.books1Url + "searchs.json?" + params;
        return this.http
            .get(url)
            .toPromise()
            .then(function (res) {
            console.log(res.json());
            return res.json();
        })
            .catch(this.handleError);
    };
    BookService.prototype.handleError = function (error) {
        console.log('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    return BookService;
}());
BookService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], BookService);

var _a;
//# sourceMappingURL=book.service.js.map

/***/ }),

/***/ "../../../../../src/app/book/index/index.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"ui raised segment col-md-12\">\n      <form [formGroup]=\"searchForm\"\n          (ngSubmit)=\"onSubmit(searchForm.value)\"\n          class=\"ui form\">\n\n        <div class=\"field \">\n          <label for=\"fileNameInput\">Search Book-filename</label>\n          <input type=\"text\"\n                 id=\"fileNameInput\"\n                 placeholder=\"fileName\"\n                 [formControl]=\"searchForm.get('fileName')\"\n                 [(ngModel)]=\"fileName\">\n        </div>\n        <div class=\"field \">\n          <label for=\"authorInput\">Search Book-author</label>\n          <input type=\"text\"\n                 id=\"fileNameInput\"\n                 placeholder=\"author\"\n                 [formControl]=\"searchForm.get('author')\"\n                 [(ngModel)]=\"author\">\n        </div>\n        <div class=\"field \">\n          <label for=\"descriptionInput\">Search Book-description</label>\n          <input type=\"text\"\n                 id=\"descriptionInput\"\n                 placeholder=\"description\"\n                 [formControl]=\"searchForm.get('description')\"\n                 [(ngModel)]=\"description\">\n        </div>\n      </form>\n    </div>\n\n    <div>\n      <div *ngIf=\"(loading$ | async)\" class=\"col-md-12\">\n        <md-spinner></md-spinner>\n      </div>\n\n      <div *ngIf=\"!((loading$ | async) && searching)\" class=\"results\">\n        <h4>{{ header }}</h4>\n        <ul class=\"list-group\">\n          <button *ngFor=\"let result of this.results\" \n            class=\"list-group-item\" (click)=\"goToTask(result.list.list_id)\">\n            <p>FileName Book:   {{ result.filename }}</p>\n          </button>\n        </ul>\n      </div>\n    </div>\n  \n    <div>\n      <h2>Upload Book</h2>\n      <form (ngSubmit)=\"uploadBook(newBook)\" [formGroup]=\"form\">\n          <div *ngIf=\"loading\">\n              <md-progress-bar mode=\"query\"></md-progress-bar>\n          </div> \n          <div *ngIf=\"error\">\n              <h2>Error prohibited this document from being saved.</h2>\n          </div> \n          <div class=\"upload\">\n              <input  id=\"file\" \n                      type=\"file\" \n                      formControlName=\"file\"  \n                      (change)=\"onChange($event)\">\n          </div> \n          <div class=\"group\">\n              <input  type=\"submit\" \n                      class=\"button\" \n                      value=\"Upload\"\n                      [disabled]=\"!(form.valid)\"\n                      [ngClass]=\"{'disabled':!(form.valid)}\">\n          </div>\n      </form>\n\n      <h2>Listing books</h2>\n      <table>\n        <thead>\n          <tr>\n            <th>Title</th>\n            <th></th>\n            <th></th>\n          </tr>\n        </thead>\n\n        <tbody>\n            <tr *ngFor = \"let book of books\">\n              <td>{{book.filename}}</td>\n              <td><button type=\"button\" class=\"btn btn-success delete\" (click)=\"download(book.id)\">\n                      <i class=\"glyphicon glyphicon-download\"></i>\n                      <span>Download</span>\n                  </button>\n              </td>\n              <td><button type=\"button\" class=\"btn btn-danger delete\" (click)=\"deleteBook(book)\">\n                      <i class=\"glyphicon glyphicon-trash\"></i>\n                      <span>Delete</span>\n                  </button>\n              </td>\n            </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/book/index/index.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/book/index/index.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__book_service__ = __webpack_require__("../../../../../src/app/book/book.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__book_model__ = __webpack_require__("../../../../../src/app/book/book.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switch__ = __webpack_require__("../../../../rxjs/add/operator/switch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var IndexComponent = (function () {
    function IndexComponent(BookService, fb) {
        this.BookService = BookService;
        this.newBook = new __WEBPACK_IMPORTED_MODULE_3__book_model__["a" /* Book */]();
        this.error = null;
        //search
        this.searching = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.loading$ = new __WEBPACK_IMPORTED_MODULE_7_rxjs__["BehaviorSubject"](null);
        this.form = fb.group({
            file: []
        }),
            this.searchForm = fb.group({
                'fileName': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
                'author': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
                'description': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]
            });
    }
    ;
    IndexComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchForm.valueChanges
            .do(function () { return _this.loading$.next(true); })
            .debounceTime(1000)
            .subscribe(function (query) {
            _this.BookService.search(_this.fileName, _this.author, _this.description)
                .then(function (res) {
                _this.loading$.next(false);
                console.log(res);
                _this.header = res.found;
                _this.results = res.searchs;
            });
        });
        this.getBooks();
    };
    IndexComponent.prototype.onChange = function (event) {
        this.newBook = event.srcElement.files;
        console.log("onChange", this.newBook);
    };
    IndexComponent.prototype.getBooks = function () {
        var _this = this;
        this.BookService.getBooks()
            .then(function (books) {
            _this.books = books;
            console.log(_this.books);
        })
            .catch(function (error) { return _this.error = error; });
    };
    IndexComponent.prototype.deleteBook = function (book) {
        var _this = this;
        event.stopPropagation();
        this.BookService
            .deleteBook(book)
            .then(function () {
            _this.books = _this.books.filter(function (b) { return b.id !== book.id; });
        })
            .catch(function (error) { return _this.error = error; });
    };
    IndexComponent.prototype.download = function (id) {
        var _this = this;
        this.BookService.download(id)
            .then(function () { })
            .catch(function (error) { return _this.error = error; });
    };
    IndexComponent.prototype.uploadBook = function (book) {
        var _this = this;
        console.log("params-upload-comp", book);
        this.BookService
            .uploadBook(this.newBook)
            .then(function () {
            _this.getBooks();
            _this.newBook = new __WEBPACK_IMPORTED_MODULE_3__book_model__["a" /* Book */]();
        })
            .catch(function (error) { return _this.error = error; });
    };
    return IndexComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], IndexComponent.prototype, "searching", void 0);
IndexComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-index',
        template: __webpack_require__("../../../../../src/app/book/index/index.component.html"),
        styles: [__webpack_require__("../../../../../src/app/book/index/index.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__book_service__["a" /* BookService */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__book_service__["a" /* BookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__book_service__["a" /* BookService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === "function" && _c || Object])
], IndexComponent);

var _a, _b, _c;
//# sourceMappingURL=index.component.js.map

/***/ }),

/***/ "../../../../../src/app/book/reading/reading.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"main\">\n    <div id=\"titlebar\" *ngIf=\"title\">\n        <span id=\"book-title\">{{title}}</span>\n    </div>\n    <div id=\"prev\" class=\"arrow\" (click)=\"prevPage()\">‹</div>\n\n    <div id=\"area\"></div>\n    \n    <div id=\"next\" class=\"arrow\" (click)=\"nextPage()\">›</div>\n    <div id=\"divider\" class=\"show\"></div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/book/reading/reading.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  overflow: hidden;\n  padding: 0;\n  margin: 0;\n  background: #6b6b6b; }\n\n#main {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border-radius: 5px;\n  background: #fff;\n  overflow: hidden;\n  z-index: 2;\n  transition: -webkit-transform .2s ease-out;\n  transition: transform .2s ease-out;\n  transition: transform .2s ease-out, -webkit-transform .2s ease-out;\n  -ms-box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.08);\n  box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.08); }\n\n#main.open {\n  -webkit-transform: translate(300px, 0);\n  transform: translate(300px, 0); }\n\n#area {\n  position: relative;\n  z-index: 5;\n  width: 80%;\n  height: 80%;\n  margin: 0 auto;\n  max-width: 1250px;\n  overflow: hidden; }\n\n#area iframe {\n  border: 0;\n  height: 100% !important; }\n\n#prev {\n  left: 40px; }\n\n#next {\n  right: 40px; }\n\n.arrow {\n  position: absolute;\n  top: 50%;\n  margin-top: -32px;\n  font-size: 64px;\n  color: #E2E2E2;\n  font-family: arial,sans-serif;\n  font-weight: 700;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n      user-select: none; }\n\n.arrow:hover {\n  color: #777; }\n\n.arrow:active, .arrow.active {\n  color: #000; }\n\n#divider {\n  position: absolute;\n  width: 1px;\n  border-right: 1px #000 solid;\n  height: 82%;\n  z-index: 1;\n  left: 50%;\n  top: 10%;\n  opacity: .15;\n  box-shadow: -2px 0 15px black;\n  display: none; }\n\n#divider.show {\n  display: block; }\n\n#titlebar {\n  height: 8%;\n  min-height: 20px;\n  padding: 10px 0 10px 0;\n  margin: 0 50px 0 50px;\n  text-align: center;\n  color: #4f4f4f;\n  font-weight: 100;\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n  opacity: .5;\n  -webkit-transition: opacity .5s;\n  -moz-transition: opacity .5s; }\n\n#titlebar:hover {\n  opacity: 1; }\n\n#book-title {\n  font-weight: 600; }\n\n#title-seperator.hidden {\n  display: none; }\n\n@media only screen and (min-width: 901px) and (max-width: 1040px) {\n  #area {\n    width: 50%;\n    margin-left: 25%; }\n  #divider.show {\n    display: none; } }\n\n@media only screen and (min-width: 551px) and (max-width: 900px) {\n  #area {\n    width: 60%;\n    margin-left: 20%; }\n  #divider.show {\n    display: none; } }\n\n@media only screen and (max-width: 550px) {\n  #area {\n    width: 80%;\n    margin-left: 10%; }\n  #divider.show {\n    display: none; }\n  #prev {\n    left: 0; }\n  #next {\n    right: 0;\n    z-index: 550; }\n  .arrow {\n    height: 100%;\n    top: 72px;\n    width: 10%;\n    text-indent: -10000px; }\n  #main {\n    transition: -webkit-transform .2s ease-out;\n    transition: transform .2s ease-out;\n    transition: transform .2s ease-out, -webkit-transform .2s ease-out; }\n  #main.open {\n    -webkit-transform: translate(260px, 0);\n    transform: translate(260px, 0); }\n  #titlebar {\n    font-size: 10px;\n    margin: 0 50px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/book/reading/reading.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReadingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReadingComponent = (function () {
    function ReadingComponent() {
        this.title = null;
        // this.Book = new ePub("../../../../assets/moby-dick/");
        // this.Book = new ePub("../../../../assets/manh_trang_cuoi_rung__nguyen_minh_chau.epub");       
        this.Book = new ePub("../../../../assets/manh_trang_cuoi_rung__nguyen_minh_chau.epub_FILES/");
    }
    ReadingComponent.prototype.ngOnInit = function () {
        this.getTitle();
        this.renderTo("area");
    };
    ;
    ReadingComponent.prototype.prevPage = function () {
        this.Book.prevPage();
    };
    ;
    ReadingComponent.prototype.nextPage = function () {
        this.Book.nextPage();
    };
    ;
    ReadingComponent.prototype.getTitle = function () {
        var _this = this;
        this.Book.getMetadata().then(function (meta) {
            _this.title = meta.bookTitle + " – " + meta.creator;
        });
    };
    ReadingComponent.prototype.renderTo = function (id) {
        this.Book.renderTo(id);
    };
    return ReadingComponent;
}());
ReadingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-reading',
        template: __webpack_require__("../../../../../src/app/book/reading/reading.component.html"),
        styles: [__webpack_require__("../../../../../src/app/book/reading/reading.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ReadingComponent);

//# sourceMappingURL=reading.component.js.map

/***/ }),

/***/ "../../../../../src/app/guards/logged-in.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggedInGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoggedInGuard = (function () {
    function LoggedInGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LoggedInGuard.prototype.canActivate = function (next, state) {
        return this.canActivateChild(next, state);
    };
    LoggedInGuard.prototype.canActivateChild = function (next, state) {
        var url = state.url;
        if (this.authService.isLoggedIn()) {
            return true;
        }
        localStorage.setItem("redirectUrl", url);
        this.router.navigate(['/login']);
        return false;
    };
    return LoggedInGuard;
}());
LoggedInGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], LoggedInGuard);

var _a, _b;
//# sourceMappingURL=logged-in.guard.js.map

/***/ }),

/***/ "../../../../../src/app/guards/logged-out.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggedOutGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoggedOutGuard = (function () {
    function LoggedOutGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LoggedOutGuard.prototype.canActivate = function (next, state) {
        return true;
    };
    LoggedOutGuard.prototype.canActivateChild = function (next, state) {
        if (this.authService.isLoggedOut()) {
            return true;
        }
        this.router.navigate(['/']);
        return false;
    };
    return LoggedOutGuard;
}());
LoggedOutGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], LoggedOutGuard);

var _a, _b;
//# sourceMappingURL=logged-out.guard.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"jumbotron\">\n    <h1> Welcome</h1>\n    <p>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi feugiat, dolor a aliquam ultrices, turpis nisl maximus justo, nec semper augue dolor vitae orci. Curabitur egestas posuere mauris. Quisque varius erat ac pharetra posuere. Nulla faucibus, ex in dictum porta, dui sapien vehicula nulla, nec venenatis enim purus quis justo. Sed luctus luctus aliquet. Etiam tristique feugiat risus in hendrerit. Mauris lobortis dui nec blandit fermentum. Pellentesque placerat, nunc pellentesque fringilla convallis, elit elit ultricies urna, in vehicula arcu metus efficitur metus. Integer efficitur ipsum sit amet risus tristique, congue molestie massa euismod.\n    </p>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/models/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ "../../../../../src/app/shared/error-label.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorLabelComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ErrorLabelComponent = (function () {
    function ErrorLabelComponent() {
    }
    ErrorLabelComponent.prototype.ngOnInit = function () {
    };
    return ErrorLabelComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */]) === "function" && _a || Object)
], ErrorLabelComponent.prototype, "control", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], ErrorLabelComponent.prototype, "submitted", void 0);
ErrorLabelComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-error-label',
        template: "\n    <div *ngIf=\"control.errors && (control.dirty || control.touched)\" class=\"alert alert-danger\">\n      <div *ngFor=\"let error of (control.errors | errorMessages)\">\n        {{ error }}\n      </div>\n    </div>\n  "
    })
], ErrorLabelComponent);

var _a;
//# sourceMappingURL=error-label.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/error-messages.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorMessagesPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ErrorMessagesPipe = (function () {
    function ErrorMessagesPipe() {
    }
    ErrorMessagesPipe.prototype.transform = function (value) {
        if (Array.isArray(value)) {
            return value;
        }
        return this.parseErrorObject(value);
    };
    ErrorMessagesPipe.prototype.parseErrorObject = function (value) {
        var errors = [];
        for (var key in value) {
            if (this.knownErrors()[key]) {
                var error_messages = this.knownErrors()[key].call(this, value[key]);
                errors = errors.concat(error_messages);
            }
        }
        return errors;
    };
    ErrorMessagesPipe.prototype.knownErrors = function () {
        return {
            'pattern': this.patternError,
            'minlength': this.minLengthError,
            'maxlength': this.maxLengthError,
            'required': this.requiredError,
            'full_messages': this.fullMessages,
            'cannotContainSpace': this.cannotContainSpace,
        };
    };
    ErrorMessagesPipe.prototype.cannotContainSpace = function (_error) {
        return 'This field cannot contain spaces';
    };
    ErrorMessagesPipe.prototype.patternError = function (error) {
        return "Must match /" + error['requiredPattern'] + "/ pattern";
    };
    ErrorMessagesPipe.prototype.maxLengthError = function (error) {
        return "Must be shorter than " + (error['requiredLength'] + 1);
    };
    ErrorMessagesPipe.prototype.minLengthError = function (error) {
        return "Must be longer than " + (error['requiredLength'] - 1);
    };
    ErrorMessagesPipe.prototype.requiredError = function (_error) {
        return 'This field is required';
    };
    ErrorMessagesPipe.prototype.fullMessages = function (error) {
        return error;
    };
    return ErrorMessagesPipe;
}());
ErrorMessagesPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'errorMessages' })
], ErrorMessagesPipe);

//# sourceMappingURL=error-messages.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/shared/input-field.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <label [attr.for]=attribute>{{attribute}}</label>\n  <div class=\"ui left icon input\">\n    <i class={{icon}}></i>\n    <input id={{attribute}} type={{type}} [formControl]=\"control\" name={{type}} placeholder={{placeholder}}>\n  </div>\n  <app-error-label [control]=\"control\" [submitted]=\"submitted\"></app-error-label>\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/input-field.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputFieldComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InputFieldComponent = (function () {
    function InputFieldComponent() {
        this.type = 'text';
    }
    return InputFieldComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], InputFieldComponent.prototype, "attribute", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], InputFieldComponent.prototype, "placeholder", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], InputFieldComponent.prototype, "icon", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], InputFieldComponent.prototype, "type", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], InputFieldComponent.prototype, "submitted", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */]) === "function" && _a || Object)
], InputFieldComponent.prototype, "control", void 0);
InputFieldComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-input-field',
        template: __webpack_require__("../../../../../src/app/shared/input-field.component.html")
    })
], InputFieldComponent);

var _a;
//# sourceMappingURL=input-field.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__input_field_component__ = __webpack_require__("../../../../../src/app/shared/input-field.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__error_label_component__ = __webpack_require__("../../../../../src/app/shared/error-label.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__error_messages_pipe__ = __webpack_require__("../../../../../src/app/shared/error-messages.pipe.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__input_field_component__["a" /* InputFieldComponent */],
            __WEBPACK_IMPORTED_MODULE_4__error_label_component__["a" /* ErrorLabelComponent */],
            __WEBPACK_IMPORTED_MODULE_5__error_messages_pipe__["a" /* ErrorMessagesPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__input_field_component__["a" /* InputFieldComponent */],
            __WEBPACK_IMPORTED_MODULE_4__error_label_component__["a" /* ErrorLabelComponent */]
        ]
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ "../../../../../src/app/toolbar/toolbar.component.html":
/***/ (function(module, exports) {

module.exports = "<md-toolbar color=\"primary\">\n  <button md-button [routerLink]=\"['']\">Book App</button>\n  <span class=\"app-toolbar-filler\"></span>  \n  <button md-button [routerLink]=\"['/book']\">Books</button>\n  <button md-button routerLink=\"/login\" routerLinkActive=\"active\" \n          *ngIf=\"isLoggedOut()\">Login </button>\n  <button md-button routerLink=\"/signup\" routerLinkActive=\"active\" \n          *ngIf=\"isLoggedOut()\">Sign up</button>\n\n  <button \n    md-button \n    [mdMenuTriggerFor]=\"accountMenu\" \n    *ngIf=\"isLoggedIn()\"><md-icon>menu</md-icon> Account</button>\n</md-toolbar>\n\n<md-menu #accountMenu=\"mdMenu\">\n  <button md-menu-item (click)=\"goToUserProfile()\"> Profile </button>\n  <button md-menu-item> Settings </button>\n  <button md-menu-item (click)=\"logOut()\"> Log out</button>\n</md-menu>"

/***/ }),

/***/ "../../../../../src/app/toolbar/toolbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "md-toolbar {\n  margin-bottom: 4%; }\n  md-toolbar .app-toolbar-filler {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/toolbar/toolbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ToolbarComponent = (function () {
    function ToolbarComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ToolbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.isLoggedIn()) {
            this.authService.getCurrentUser()
                .subscribe(function (res) { return _this.current_user_id = res.id; });
        }
    };
    ToolbarComponent.prototype.isLoggedIn = function () {
        return this.authService.isLoggedIn();
    };
    ToolbarComponent.prototype.isLoggedOut = function () {
        return this.authService.isLoggedOut();
    };
    ToolbarComponent.prototype.logOut = function () {
        this.authService.logOut();
    };
    ToolbarComponent.prototype.goToUserProfile = function () {
        this.router.navigate(['/users', this.current_user_id]);
    };
    return ToolbarComponent;
}());
ToolbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-toolbar',
        template: __webpack_require__("../../../../../src/app/toolbar/toolbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/toolbar/toolbar.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], ToolbarComponent);

var _a, _b;
//# sourceMappingURL=toolbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/users/user-detail/user-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-12 col-md-6 col-sm-offset-0 col-md-offset-3 toppad\" >\n   \n   \n  <div class=\"panel panel-info\">\n    <div class=\"panel-heading\">\n      <h3 class=\"panel-title\">User profile</h3>\n    </div>\n    <div class=\"panel-body\">\n      <div class=\"row\">\n        <div class=\"col-md-3\" align=\"center\"> <img alt=\"User Pic\" [src]=\"data_user.avaSrc\" class=\"img-circle img-responsive\"> </div>\n        \n        <div class=\" col-md-9\"> \n          <table class=\"table table-user-information\">\n            <tbody>\n              <tr>\n                <td>Name:</td>\n                <td>{{data_user.name}}</td>\n              </tr>\n              <tr>\n                <td>Email:</td>\n                <td>{{data_user.email}}</td>\n              </tr>\n              <tr>\n                <td>Date of Birth</td>\n                <td></td>\n              </tr>\n              <tr>\n                <td>Gender</td>\n                <td></td>\n              </tr>\n              <tr>\n                <td>Home Address</td>\n                <td></td>\n              </tr>  \n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n    <div class=\"panel-footer\">\n      <span class=\"pull-right\">\n          <a data-original-title=\"Edit this user\" data-toggle=\"tooltip\" type=\"button\" class=\"btn btn-sm btn-warning\"><i class=\"glyphicon glyphicon-edit\"></i></a>\n          <a data-original-title=\"Remove this user\" data-toggle=\"tooltip\" type=\"button\" class=\"btn btn-sm btn-danger\"><i class=\"glyphicon glyphicon-remove\"></i></a>\n      </span>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/users/user-detail/user-detail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users/user-detail/user-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user__ = __webpack_require__("../../../../../src/app/models/user.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserDetailComponent = (function () {
    function UserDetailComponent(route, authService) {
        this.route = route;
        this.authService = authService;
        this.data_user = new __WEBPACK_IMPORTED_MODULE_3__models_user__["a" /* User */]();
    }
    UserDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.user_id = +params.id;
            _this.authService
                .getUserWithId(_this.user_id)
                .subscribe(function (res) { return _this.data_user = res; });
        });
    };
    return UserDetailComponent;
}());
UserDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user-detail',
        template: __webpack_require__("../../../../../src/app/users/user-detail/user-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/users/user-detail/user-detail.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], UserDetailComponent);

var _a, _b;
//# sourceMappingURL=user-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/users/users.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__guards_logged_in_guard__ = __webpack_require__("../../../../../src/app/guards/logged-in.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_detail_user_detail_component__ = __webpack_require__("../../../../../src/app/users/user-detail/user-detail.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: ':id', component: __WEBPACK_IMPORTED_MODULE_6__user_detail_user_detail_component__["a" /* UserDetailComponent */] }
];
var UsersModule = (function () {
    function UsersModule() {
    }
    return UsersModule;
}());
UsersModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */].forChild([
                {
                    path: 'users',
                    canActivateChild: [__WEBPACK_IMPORTED_MODULE_5__guards_logged_in_guard__["a" /* LoggedInGuard */]],
                    children: routes
                }
            ])
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_6__user_detail_user_detail_component__["a" /* UserDetailComponent */]]
    })
], UsersModule);

//# sourceMappingURL=users.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    app_base_href: '/',
    api_url: 'http://localhost:3000'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map