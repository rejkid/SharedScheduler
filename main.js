(self["webpackChunkScheduler"] = self["webpackChunkScheduler"] || []).push([["main"],{

/***/ 3041:
/*!************************************************!*\
  !*** ./src/app/_components/alert.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertComponent": () => (/* binding */ AlertComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_models */ 3027);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services */ 9949);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);






function AlertComponent_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AlertComponent_div_0_div_2_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const alert_r2 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.removeAlert(alert_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const alert_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx_r1.cssClasses(alert_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", alert_r2.message, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
  }
}
function AlertComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1)(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AlertComponent_div_0_div_2_Template, 4, 4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.alerts);
  }
}
//import { Alert, AlertType } from '@app/_models';
//import { AlertService } from '@app/_services';
class AlertComponent {
  constructor(router, alertService) {
    this.router = router;
    this.alertService = alertService;
    this.id = 'default-alert';
    this.fade = true;
    this.alerts = [];
  }
  ngOnInit() {
    // subscribe to new alert notifications
    this.alertSubscription = this.alertService.onAlert(this.id).subscribe(alert => {
      // clear alerts when an empty alert is received
      if (!alert.message) {
        // filter out alerts without 'keepAfterRouteChange' flag
        this.alerts = this.alerts.filter(x => x.keepAfterRouteChange);
        // remove 'keepAfterRouteChange' flag on the rest
        this.alerts.forEach(x => delete x.keepAfterRouteChange);
        return;
      }
      // add alert to array
      this.alerts.push(alert);
      // auto close alert if required
      if (alert.autoClose) {
        setTimeout(() => this.removeAlert(alert), 3000);
      }
    });
    // clear alerts on location change
    this.routeSubscription = this.router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationStart) {
        this.alertService.clear(this.id);
      }
    });
  }
  ngOnDestroy() {
    // unsubscribe to avoid memory leaks
    this.alertSubscription.unsubscribe();
    this.routeSubscription.unsubscribe();
  }
  removeAlert(alert) {
    // check if already removed to prevent error on auto close
    if (!this.alerts.includes(alert)) return;
    if (this.fade) {
      // fade out alert
      alert.fade = true;
      // remove alert after faded out
      setTimeout(() => {
        this.alerts = this.alerts.filter(x => x !== alert);
      }, 250);
    } else {
      // remove alert
      this.alerts = this.alerts.filter(x => x !== alert);
    }
  }
  cssClasses(alert) {
    if (!alert) {
      return null;
    }
    const classes = ['alert', 'alert-dismissable'];
    const alertTypeClass = {
      [_models__WEBPACK_IMPORTED_MODULE_0__.AlertType.Success]: 'alert alert-success',
      [_models__WEBPACK_IMPORTED_MODULE_0__.AlertType.Error]: 'alert alert-danger',
      [_models__WEBPACK_IMPORTED_MODULE_0__.AlertType.Info]: 'alert alert-info',
      [_models__WEBPACK_IMPORTED_MODULE_0__.AlertType.Warning]: 'alert alert-warning'
    };
    classes.push(alertTypeClass[alert.type]);
    if (alert.fade) {
      classes.push('fade');
    }
    return classes.join(' ');
  }
  static #_ = this.ɵfac = function AlertComponent_Factory(t) {
    return new (t || AlertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_1__.AlertService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: AlertComponent,
    selectors: [["alert"]],
    inputs: {
      id: "id",
      fade: "fade"
    },
    decls: 1,
    vars: 1,
    consts: [["class", "container", 4, "ngIf"], [1, "container"], [1, "m-3"], [3, "class", 4, "ngFor", "ngForOf"], [1, "close", 3, "click"], [3, "innerHTML"]],
    template: function AlertComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, AlertComponent_div_0_Template, 3, 1, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.alerts.length);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf],
    encapsulation: 2
  });
}

/***/ }),

/***/ 3130:
/*!**************************************!*\
  !*** ./src/app/_components/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertComponent": () => (/* reexport safe */ _alert_component__WEBPACK_IMPORTED_MODULE_0__.AlertComponent)
/* harmony export */ });
/* harmony import */ var _alert_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.component */ 3041);


/***/ }),

/***/ 3402:
/*!*********************************************!*\
  !*** ./src/app/_helpers/app.initializer.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appInitializer": () => (/* binding */ appInitializer)
/* harmony export */ });
function appInitializer(accountService) {
  return () => new Promise(resolve => {
    // attempt to refresh token on app start up to auto authenticate
    //alert("Failed refreshing");
    accountService.refreshToken().subscribe({
      next: value => {
        console.log("appInitializer successful: " + value.firstName, value.lastName, value.email);
      },
      error: error => {
        console.log("Error in appInitializer");
      }
    }).add(resolve);
  }).then(message => {
    console.log("appInitializer in then");
  }).catch(message => {
    console.log("Error in appInitializer in catch");
  });
}
/* export function appInitializer(accountService: AccountService) {
      // attempt to refresh token on app start up to auto authenticate
      return () => accountService.refreshToken();
} */

/***/ }),

/***/ 5197:
/*!****************************************!*\
  !*** ./src/app/_helpers/auth.guard.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_services */ 9949);




class AuthGuard {
  constructor(router, accountService) {
    this.router = router;
    this.accountService = accountService;
  }
  canActivate(route, state) {
    console.log("Parent Path in AuthGuard: " + route.parent.url);
    console.log("Configured Path in AuthGuard: " + this.getConfiguredUrl(route));
    console.log("Resolved Path in AuthGuard: " + this.getResolvedUrl(route));
    console.log("URL from Window Location: " + window.location.href);
    const account = this.accountService.accountValue;
    if (account) {
      // check if route is restricted by role
      if (route.data['roles'] && !route.data['roles'].includes(account.role)) {
        // role not authorized so redirect to home page
        this.router.navigate(['/']);
        console.log("Going to home page");
        return false;
      }
      // authorized so return true
      console.log("Authorized - Going to path: " + this.getResolvedUrl(route));
      return true;
    }
    console.log("not logged in so redirect to login page ");
    // not logged in so redirect to login page with the return url 
    this.router.navigate(['/account/login'], {
      queryParams: {
        returnUrl: state.url
      }
    });
    return false;
  }
  getConfiguredUrl(route) {
    return '/' + route.pathFromRoot.filter(v => v.routeConfig).map(v => v.routeConfig.path).join('/');
  }
  getResolvedUrl(route) {
    let url = route.pathFromRoot.map(v => v.url.map(segment => segment.toString()).join('/')).join('/');
    const queryParam = route.queryParamMap;
    if (queryParam.keys.length > 0) {
      url += '?' + queryParam.keys.map(key => queryParam.getAll(key).map(value => key + '=' + value).join('&')).join('&');
    }
    return url;
  }
  getResolvedUrlFromChildren(route) {
    let url = route.pathFromRoot.map(v => v.url.map(segment => segment.toString()).join('/')).join('/');
    const queryParam = route.queryParamMap;
    if (queryParam.keys.length > 0) {
      url += '?' + queryParam.keys.map(key => queryParam.getAll(key).map(value => key + '=' + value).join('&')).join('&');
    }
    return url;
  }
  static #_ = this.ɵfac = function AuthGuard_Factory(t) {
    return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services__WEBPACK_IMPORTED_MODULE_0__.AccountService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: AuthGuard,
    factory: AuthGuard.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 7901:
/*!***********************************************!*\
  !*** ./src/app/_helpers/error.interceptor.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorInterceptor": () => (/* binding */ ErrorInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 3158);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_services */ 9949);





class ErrorInterceptor {
  constructor(accountService) {
    this.accountService = accountService;
  }
  intercept(request, next) {
    return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(err => {
      if ([401, 403].includes(err.status) && this.accountService.accountValue) {
        // auto logout if 401 or 403 response returned from api
        this.accountService.logout();
      }
      const erro = err && err.error && err.error.message || err.statusText;
      console.error("ErrorInterceptor: " + erro);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => erro);
    }));
  }
  static #_ = this.ɵfac = function ErrorInterceptor_Factory(t) {
    return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services__WEBPACK_IMPORTED_MODULE_0__.AccountService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: ErrorInterceptor,
    factory: ErrorInterceptor.ɵfac
  });
}

/***/ }),

/***/ 9067:
/*!***********************************!*\
  !*** ./src/app/_helpers/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* reexport safe */ _auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard),
/* harmony export */   "ErrorInterceptor": () => (/* reexport safe */ _error_interceptor__WEBPACK_IMPORTED_MODULE_2__.ErrorInterceptor),
/* harmony export */   "JwtInterceptor": () => (/* reexport safe */ _jwt_interceptor__WEBPACK_IMPORTED_MODULE_3__.JwtInterceptor),
/* harmony export */   "MustMatch": () => (/* reexport safe */ _must_match_validator__WEBPACK_IMPORTED_MODULE_4__.MustMatch),
/* harmony export */   "appInitializer": () => (/* reexport safe */ _app_initializer__WEBPACK_IMPORTED_MODULE_0__.appInitializer)
/* harmony export */ });
/* harmony import */ var _app_initializer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.initializer */ 3402);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.guard */ 5197);
/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error.interceptor */ 7901);
/* harmony import */ var _jwt_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jwt.interceptor */ 1084);
/* harmony import */ var _must_match_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./must-match.validator */ 496);






/***/ }),

/***/ 1084:
/*!*********************************************!*\
  !*** ./src/app/_helpers/jwt.interceptor.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JwtInterceptor": () => (/* binding */ JwtInterceptor)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services */ 9949);




class JwtInterceptor {
  constructor(accountService) {
    this.accountService = accountService;
  }
  intercept(request, next) {
    // add auth header with jwt if account is logged in and request is to the api url
    const account = this.accountService.accountValue;
    const isLoggedIn = account && account.jwtToken;
    const isApiUrl = request.url.startsWith(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl);
    if (isLoggedIn && isApiUrl) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${account.jwtToken}`
        }
      });
    }
    return next.handle(request);
  }
  static #_ = this.ɵfac = function JwtInterceptor_Factory(t) {
    return new (t || JwtInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services__WEBPACK_IMPORTED_MODULE_1__.AccountService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: JwtInterceptor,
    factory: JwtInterceptor.ɵfac
  });
}

/***/ }),

/***/ 496:
/*!**************************************************!*\
  !*** ./src/app/_helpers/must-match.validator.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MustMatch": () => (/* binding */ MustMatch)
/* harmony export */ });
// custom validator to check that two fields match
function MustMatch(controlName, matchingControlName) {
  return formGroup => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];
    if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
      // return if another validator has already found an error on the matchingControl
      return;
    }
    // set error on matchingControl if validation fails
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({
        mustMatch: true
      });
    } else {
      matchingControl.setErrors(null);
    }
  };
}

/***/ }),

/***/ 8481:
/*!******************************************!*\
  !*** ./src/app/_helpers/time.handler.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimeHandler": () => (/* binding */ TimeHandler)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ 6908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);



const dateFormat = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.dateTimeFormat}`;
const shortDateFormat = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.shortDateTimeFormat}`;
class TimeHandler {
  constructor() {}
  static dateValidator(AC) {
    if (AC && AC.value && !moment__WEBPACK_IMPORTED_MODULE_1__(AC.value, `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.dateFormat}`, true).isValid()) {
      return {
        'dateVaidator': true
      };
    }
    return null;
  }
  static displayStr2LocalIsoString(dateStr) {
    var date = moment__WEBPACK_IMPORTED_MODULE_1__(dateStr, dateFormat).toDate();
    var zoneOffset = date.getTimezoneOffset();
    var localISOTime = new Date(date.getTime() - zoneOffset * 60 * 1000).toISOString(); // Local time in ISO format
    return localISOTime.replace("Z", "");
  }
  static displayStr2Date(dateStr) {
    var date = moment__WEBPACK_IMPORTED_MODULE_1__(dateStr, dateFormat).toDate();
    var zoneOffset = date.getTimezoneOffset();
    return new Date(date.getTime() - zoneOffset * 60 * 1000); // Local time in ISO format
  }

  static localDateStr2LocalDate(dateStr) {
    var date = moment__WEBPACK_IMPORTED_MODULE_1__(dateStr, dateFormat).toDate();
    var zoneOffset = date.getTimezoneOffset();
    return new Date(date.getTime() + zoneOffset * 60 * 1000); // Local time in ISO format
  }

  static getDateDisplayStrFromFormat(date) {
    return moment__WEBPACK_IMPORTED_MODULE_1__(date).format(dateFormat);
  }
  static getDateDisplayStrFromShortFormat(date) {
    return moment__WEBPACK_IMPORTED_MODULE_1__(date).format(shortDateFormat);
  }
  static getDatetimeLocaleFromDisplayDate(date) {
    return TimeHandler.displayStr2LocalIsoString(TimeHandler.getDateDisplayStrFromFormat(date));
  }
  static convertServerDate2Local(date) {
    return moment__WEBPACK_IMPORTED_MODULE_1__(moment__WEBPACK_IMPORTED_MODULE_1__.utc(date)).local().toDate();
  }
  static #_ = this.ɵfac = function TimeHandler_Factory(t) {
    return new (t || TimeHandler)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: TimeHandler,
    factory: TimeHandler.ɵfac
  });
}

/***/ }),

/***/ 9469:
/*!************************************!*\
  !*** ./src/app/_models/account.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Account": () => (/* binding */ Account)
/* harmony export */ });
class Account {
  constructor() {
    this.schedules = [];
    this.userFunctions = [];
  }
}

/***/ }),

/***/ 4653:
/*!**********************************!*\
  !*** ./src/app/_models/alert.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Alert": () => (/* binding */ Alert),
/* harmony export */   "AlertType": () => (/* binding */ AlertType)
/* harmony export */ });
class Alert {
  constructor(init) {
    this.id = "";
    this.type = 0;
    this.message = "";
    this.autoClose = false;
    this.keepAfterRouteChange = false;
    this.fade = false;
    Object.assign(this, init);
  }
}
var AlertType;
(function (AlertType) {
  AlertType[AlertType["Success"] = 0] = "Success";
  AlertType[AlertType["Error"] = 1] = "Error";
  AlertType[AlertType["Info"] = 2] = "Info";
  AlertType[AlertType["Warning"] = 3] = "Warning";
})(AlertType || (AlertType = {}));

/***/ }),

/***/ 3027:
/*!**********************************!*\
  !*** ./src/app/_models/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Account": () => (/* reexport safe */ _account__WEBPACK_IMPORTED_MODULE_0__.Account),
/* harmony export */   "Alert": () => (/* reexport safe */ _alert__WEBPACK_IMPORTED_MODULE_1__.Alert),
/* harmony export */   "AlertType": () => (/* reexport safe */ _alert__WEBPACK_IMPORTED_MODULE_1__.AlertType),
/* harmony export */   "Role": () => (/* reexport safe */ _role__WEBPACK_IMPORTED_MODULE_2__.Role)
/* harmony export */ });
/* harmony import */ var _account__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account */ 9469);
/* harmony import */ var _alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert */ 4653);
/* harmony import */ var _role__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./role */ 3224);




/***/ }),

/***/ 3224:
/*!*********************************!*\
  !*** ./src/app/_models/role.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Role": () => (/* binding */ Role)
/* harmony export */ });
var Role;
(function (Role) {
  Role["User"] = "User";
  Role["Admin"] = "Admin";
})(Role || (Role = {}));

/***/ }),

/***/ 7110:
/*!**********************************************!*\
  !*** ./src/app/_services/account.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountService": () => (/* binding */ AccountService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 2313);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_models */ 3027);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);



//import { environment } from '@environments/environment';





const baseUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl}/accounts`;
class AccountService {
  constructor(router, http) {
    this.router = router;
    this.http = http;
    this.accountSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
    this.account = this.accountSubject.asObservable();
  }
  get accountValue() {
    return this.accountSubject.value;
  }
  login(email, password, dob) {
    return this.http.post(`${baseUrl}/authenticate`, {
      email,
      password,
      dob
    }, {
      withCredentials: true
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(account => {
      //const body = account.body;
      this.accountSubject.next(account);
      this.startRefreshTokenTimer();
      return account;
    }));
  }
  /* An alternate way*/
  /*     login(email: string, password: string, dob: string) {
          return this.http.post<Account>(`${baseUrl}/authenticate`, { email, password, dob }, { withCredentials: true })
              .pipe(tap(account => {
                  this.accountSubject.next(account);
                  this.startRefreshTokenTimer();
                  return account;
              }))
      }
   */
  logout() {
    this.http.post(`${baseUrl}/revoke-token`, {}, {
      withCredentials: true
    }).subscribe();
    this.stopRefreshTokenTimer();
    this.accountSubject.next(null);
    this.router.navigate(['/account/login']);
  }
  refreshToken() {
    return this.http.post(`${baseUrl}/refresh-token`, {/* headers: headers */}, {
      withCredentials: true
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(account => {
      this.accountSubject.next(account);
      const cookie = document.cookie;
      this.startRefreshTokenTimer();
      return account;
    }));
  }
  register(account) {
    return this.http.post(`${baseUrl}/register`, account);
  }
  verifyEmail(token, dob) {
    return this.http.post(`${baseUrl}/verify-email`, {
      token,
      dob
    });
  }
  forgotPassword(email, dob) {
    console.log("forgotPassword called");
    return this.http.post(`${baseUrl}/forgot-password`, {
      email,
      dob
    });
  }
  validateResetToken(token, dob) {
    console.log("validateResetToken called");
    return this.http.post(`${baseUrl}/validate-reset-token`, {
      token,
      dob
    });
  }
  resetPassword(token, password, confirmPassword) {
    console.log("resetPassword called");
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders().set('Referrer-Policy', 'no-referrer');
    return this.http.post(`${baseUrl}/reset-password`, {
      token,
      password,
      confirmPassword
    }, {
      'headers': headers
    });
  }
  getAll() {
    return this.http.get(baseUrl);
  }
  getById(id) {
    return this.http.get(`${baseUrl}/${id}`);
  }
  getAllDates() {
    return this.http.get(`${baseUrl}/all-dates`);
  }
  GetTeamsByFunctionForDate(dateStr) {
    return this.http.get(`${baseUrl}/teams-for-date/${dateStr}`);
  }
  getAvailableSchedules(id) {
    return this.http.get(`${baseUrl}/available_schedules/${id}`);
  }
  getAllAvailableSchedules() {
    return this.http.get(`${baseUrl}/all-available_schedules`);
  }
  addSchedule(id, schedule) {
    return this.http.put(`${baseUrl}/add-schedule/${id}`, schedule);
  }
  updateSchedule(id, schedule) {
    return this.http.post(`${baseUrl}/update-schedule/${id}`, schedule).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(account => {
      // update the current account if it was updated
      if (account.id === this.accountValue.id) {
        // publish updated account to subscribers
        account = {
          ...this.accountValue,
          ...account
        };
        this.accountSubject.next(account);
      }
      return account;
    }));
  }
  deleteSchedule(id, schedule) {
    return this.http.post(`${baseUrl}/delete-schedule/${id}`, schedule);
  }
  addFunction(id, userFunction) {
    return this.http.put(`${baseUrl}/add-function/${id}`, userFunction);
  }
  deleteFunction(id, userFunction) {
    return this.http.post(`${baseUrl}/delete-function/${id}`, userFunction);
  }
  deletePoolElement(id, email, userFunction) {
    return this.http.post(`${baseUrl}/remove-pool-element/${id}/${email}/${userFunction}`, "");
  }
  MoveSchedule2Pool(id, schedule) {
    return this.http.post(`${baseUrl}/move-schedule-to-pool/${id}`, schedule);
  }
  GetScheduleFromPool(id, schedule) {
    return this.http.post(`${baseUrl}/get-schedule-from-pool/${id}`, schedule);
  }
  create(params) {
    return this.http.post(baseUrl, params);
  }
  update(id, params) {
    return this.http.put(`${baseUrl}/${id}`, params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(account => {
      // update the current account if it was updated
      if (account.id === this.accountValue.id) {
        // publish updated account to subscribers
        account = {
          ...this.accountValue,
          ...account
        };
        this.accountSubject.next(account);
      }
      return account;
    }));
  }
  delete(id) {
    return this.http.delete(`${baseUrl}/${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.finalize)(() => {
      // auto logout if the logged in account was deleted
      if (id === this.accountValue.id) this.logout();
    }));
  }
  isAdmin() {
    return this.accountValue && this.accountValue.role === _models__WEBPACK_IMPORTED_MODULE_0__.Role.Admin;
  }
  startRefreshTokenTimer() {
    // HEADER:ALGORITHM & TOKEN TYPE
    // parse json object from base64 encoded jwt token
    var header = JSON.parse(atob(this.accountValue.jwtToken.split('.')[0]));
    // PAYLOAD:DATA
    // parse json object from base64 encoded jwt token
    const payload = JSON.parse(atob(this.accountValue.jwtToken.split('.')[1]));
    // VERIFY SIGNATURE
    // parse json object from base64 encoded jwt token
    const signature = this.accountValue.jwtToken.split('.')[2];
    // VERIFY SIGNATURE
    // parse json object from base64 encoded jwt token
    //const jwtSignature = JSON.parse(atob(this.accountValue.jwtToken.split('.')[2]));
    // parse json object from base64 encoded jwt token
    const jwtToken = JSON.parse(atob(this.accountValue.jwtToken.split('.')[1]));
    // set a timeout to refresh the token a minute before it expires
    const expires = new Date(jwtToken.exp * 1000);
    const timeout = expires.getTime() - Date.now() - 60 * 1000;
    this.refreshTokenTimeout = setTimeout(() => this.refreshToken().subscribe(), timeout);
  }
  // private string hmacSha256(string data, string secret) {
  //     try {
  //         byte[] hash = secret.getBytes(StandardCharsets.UTF_8);
  //         Mac sha256Hmac = Mac.getInstance("HmacSHA256");
  //         SecretKeySpec secretKey = new SecretKeySpec(hash, "HmacSHA256");
  //         sha256Hmac.init(secretKey);
  //         byte[] signedBytes = sha256Hmac.doFinal(data.getBytes(StandardCharsets.UTF_8));
  //         return encode(signedBytes);
  //     } catch (NoSuchAlgorithmException | InvalidKeyException ex) {
  //         Logger.getLogger(JWebToken.class.getName()).log(Level.SEVERE, ex.getMessage(), ex);
  //         return null;
  //     }
  // }
  stopRefreshTokenTimer() {
    clearTimeout(this.refreshTokenTimeout);
  }
  getRoles() {
    return this.http.get(`${baseUrl}/role-configuration`);
  }
  static #_ = this.ɵfac = function AccountService_Factory(t) {
    return new (t || AccountService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
    token: AccountService,
    factory: AccountService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 1585:
/*!********************************************!*\
  !*** ./src/app/_services/alert.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertService": () => (/* binding */ AlertService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 116);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_models */ 3027);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




class AlertService {
  constructor() {
    this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.defaultId = 'default-alert';
  }
  // enable subscribing to alerts observable
  onAlert(id = this.defaultId) {
    return this.subject.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.filter)(x => x && x.id === id));
  }
  // convenience methods
  success(message, options) {
    this.alert(new _models__WEBPACK_IMPORTED_MODULE_0__.Alert({
      ...options,
      type: _models__WEBPACK_IMPORTED_MODULE_0__.AlertType.Success,
      message
    }));
  }
  error(message, options) {
    this.alert(new _models__WEBPACK_IMPORTED_MODULE_0__.Alert({
      ...options,
      type: _models__WEBPACK_IMPORTED_MODULE_0__.AlertType.Error,
      message
    }));
  }
  info(message, options) {
    this.alert(new _models__WEBPACK_IMPORTED_MODULE_0__.Alert({
      ...options,
      type: _models__WEBPACK_IMPORTED_MODULE_0__.AlertType.Info,
      message
    }));
  }
  warn(message, options) {
    this.alert(new _models__WEBPACK_IMPORTED_MODULE_0__.Alert({
      ...options,
      type: _models__WEBPACK_IMPORTED_MODULE_0__.AlertType.Warning,
      message
    }));
  }
  // core alert method
  alert(alert) {
    alert.id = alert.id || this.defaultId;
    alert.autoClose = alert.autoClose === undefined ? true : alert.autoClose;
    this.subject.next(alert);
  }
  // clear alerts
  clear(id = this.defaultId) {
    this.subject.next(new _models__WEBPACK_IMPORTED_MODULE_0__.Alert({
      id
    }));
  }
  static #_ = this.ɵfac = function AlertService_Factory(t) {
    return new (t || AlertService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: AlertService,
    factory: AlertService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 9949:
/*!************************************!*\
  !*** ./src/app/_services/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountService": () => (/* reexport safe */ _account_service__WEBPACK_IMPORTED_MODULE_0__.AccountService),
/* harmony export */   "AlertService": () => (/* reexport safe */ _alert_service__WEBPACK_IMPORTED_MODULE_1__.AlertService)
/* harmony export */ });
/* harmony import */ var _account_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account.service */ 7110);
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert.service */ 1585);



/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _floating_schedules_floating_schedules_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./floating-schedules/floating-schedules.component */ 2456);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ 3456);
/* harmony import */ var _raport_for_date_raport_for_date_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./raport-for-date/raport-for-date.component */ 8026);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_helpers */ 9067);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_models */ 3027);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);








const accountModule = () => __webpack_require__.e(/*! import() */ "src_app_account_account_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./account/account.module */ 3879)).then(x => x.AccountModule);
const adminModule = () => __webpack_require__.e(/*! import() */ "src_app_admin_admin_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./admin/admin.module */ 7095)).then(x => x.AdminModule);
const profileModule = () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_schedule_schedule-routing_module_ts"), __webpack_require__.e("default-src_app_schedule_schedule_module_ts"), __webpack_require__.e("src_app_profile_profile_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./profile/profile.module */ 4523)).then(x => x.ProfileModule);
const scheduleModule = () => __webpack_require__.e(/*! import() */ "default-src_app_schedule_schedule-routing_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./schedule/schedule-routing.module */ 2774)).then(x => x.ScheduleRoutingModule);
const routes = [{
  path: '',
  component: _home__WEBPACK_IMPORTED_MODULE_1__.HomeComponent,
  canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_3__.AuthGuard]
}, {
  path: 'account',
  loadChildren: accountModule
}, {
  path: 'profile',
  loadChildren: profileModule,
  canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_3__.AuthGuard]
}, {
  path: 'admin',
  loadChildren: adminModule,
  canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
  data: {
    roles: [_models__WEBPACK_IMPORTED_MODULE_4__.Role.Admin]
  }
}, {
  path: 'schedule',
  loadChildren: scheduleModule
}, {
  path: 'report',
  component: _raport_for_date_raport_for_date_component__WEBPACK_IMPORTED_MODULE_2__.RaportForDateComponent
}, {
  path: 'floating',
  component: _floating_schedules_floating_schedules_component__WEBPACK_IMPORTED_MODULE_0__.FloatingSchedulesComponent
},
// otherwise redirect to home
{
  path: '**',
  redirectTo: ''
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forRoot(routes, {}), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_models */ 3027);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_services */ 9949);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_alert_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_components/alert.component */ 3041);






function AppComponent_nav_1_a_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function AppComponent_nav_1_a_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "User");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function AppComponent_nav_1_a_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Report");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function AppComponent_nav_1_a_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Unattended");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
const _c0 = function () {
  return {
    exact: true
  };
};
function AppComponent_nav_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nav", 4)(1, "div", 5)(2, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, AppComponent_nav_1_a_6_Template, 2, 0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, AppComponent_nav_1_a_7_Template, 2, 0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, AppComponent_nav_1_a_8_Template, 2, 0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, AppComponent_nav_1_a_9_Template, 2, 0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_nav_1_Template_a_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r6.logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](5, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.account.role === ctx_r0.Role.Admin);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.account.role === ctx_r0.Role.User);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.account.role === ctx_r0.Role.Admin);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.account.role === ctx_r0.Role.Admin);
  }
}
function AppComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
const _c1 = function (a0) {
  return {
    "bg-light": a0
  };
};
class AppComponent {
  constructor(accountService) {
    this.accountService = accountService;
    this.isLoaded = false;
    this.Role = _models__WEBPACK_IMPORTED_MODULE_0__.Role;
    this.account = null;
    this.accountService.account.subscribe(x => {
      this.account = x;
      this.isLoaded = true;
    });
  }
  logout() {
    this.accountService.logout();
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_1__.AccountService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app"]],
    decls: 6,
    vars: 5,
    consts: [[1, "app-container", 3, "ngClass"], ["class", "navbar navbar-expand navbar-dark bg-dark", 4, "ngIf"], ["class", "d-flex justify-content-center", 4, "ngIf"], ["name", "subnav"], [1, "navbar", "navbar-expand", "navbar-dark", "bg-dark"], [1, "navbar-nav"], ["routerLink", "/", "routerLinkActive", "active", 1, "nav-item", "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/profile", "routerLinkActive", "active", 1, "nav-item", "nav-link"], ["routerLink", "/admin", "routerLinkActive", "active", "class", "nav-item nav-link", 4, "ngIf"], ["routerLink", "/schedule", "routerLinkActive", "active", "class", "nav-item nav-link", 4, "ngIf"], ["routerLink", "/report", "routerLinkActive", "active", "class", "nav-item nav-link", 4, "ngIf"], ["routerLink", "/floating", "routerLinkActive", "active", "class", "nav-item nav-link", 4, "ngIf"], ["routerLink", "/logout", 1, "nav-item", "nav-link", 3, "click"], ["routerLink", "/admin", "routerLinkActive", "active", 1, "nav-item", "nav-link"], ["routerLink", "/schedule", "routerLinkActive", "active", 1, "nav-item", "nav-link"], ["routerLink", "/report", "routerLinkActive", "active", 1, "nav-item", "nav-link"], ["routerLink", "/floating", "routerLinkActive", "active", 1, "nav-item", "nav-link"], [1, "d-flex", "justify-content-center"], [1, "spinner-border", "spinner-border-lg", "align-center"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AppComponent_nav_1_Template, 12, 6, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AppComponent_div_2_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "router-outlet", 3)(4, "alert")(5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c1, ctx.account));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.account);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.account && !ctx.isLoaded);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkActive, _components_alert_component__WEBPACK_IMPORTED_MODULE_2__.AlertComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_helpers */ 9067);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_services */ 9949);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_components */ 3130);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home */ 3456);
/* harmony import */ var _raport_for_date_raport_for_date_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./raport-for-date/raport-for-date.component */ 8026);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _floating_schedules_floating_schedules_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./floating-schedules/floating-schedules.component */ 2456);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./material/material.module */ 898);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/sort */ 2197);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/paginator */ 6060);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/datepicker */ 2298);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular-material-components/datetime-picker */ 820);
/* harmony import */ var _order_by_date_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./order-by-date.pipe */ 9277);




// used to create fake backend
//import { fakeBackendProvider } from './_helpers';























;
class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
    providers: [{
      provide: _angular_core__WEBPACK_IMPORTED_MODULE_10__.APP_INITIALIZER,
      useFactory: _helpers__WEBPACK_IMPORTED_MODULE_1__.appInitializer,
      multi: true,
      deps: [_services__WEBPACK_IMPORTED_MODULE_2__.AccountService]
    }, {
      provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HTTP_INTERCEPTORS,
      useClass: _helpers__WEBPACK_IMPORTED_MODULE_1__.JwtInterceptor,
      multi: true
    }, {
      provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HTTP_INTERCEPTORS,
      useClass: _helpers__WEBPACK_IMPORTED_MODULE_1__.ErrorInterceptor,
      multi: true
    }
    //{provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}} ,   
    //{provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {floatLabel: 'always'}}    
    // provider used to create fake backend
    //fakeBackendProvider
    // ng build --configuration production  --aot --base-href="/scheduler/"
    // keytool -delete -alias tomcat -keystore localhost-rsa.jks
    // keytool -list -keystore localhost-rsa.jks
    // keytool -genkeypair -alias tomcat -keyalg RSA -keysize 4096 -validity 720 -keystore localhost-rsa.jks -storepass changeit -keypass changeit -ext SAN=dns:rejkid.hopto.org,ip:49.187.112.232
    // keytool -exportcert -keystore localhost-rsa.jks -alias tomcat -file localhost.crt
    ],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__.BrowserAnimationsModule, _material_material_module__WEBPACK_IMPORTED_MODULE_8__.MaterialModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__.MatSortModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatTableModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__.MatPaginatorModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_20__.MatButtonModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_22__.MatNativeDateModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_23__.MatInputModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__.MatFormFieldModule, _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_25__.NgxMatDatetimePickerModule, _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_25__.NgxMatNativeDateModule, _material_material_module__WEBPACK_IMPORTED_MODULE_8__.MaterialModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__.MatSortModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatTableModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__.MatPaginatorModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_20__.MatButtonModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent, _components__WEBPACK_IMPORTED_MODULE_4__.AlertComponent, _home__WEBPACK_IMPORTED_MODULE_5__.HomeComponent, _raport_for_date_raport_for_date_component__WEBPACK_IMPORTED_MODULE_6__.RaportForDateComponent, _floating_schedules_floating_schedules_component__WEBPACK_IMPORTED_MODULE_7__.FloatingSchedulesComponent, _order_by_date_pipe__WEBPACK_IMPORTED_MODULE_9__.OrderByDatePipe],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__.BrowserAnimationsModule, _material_material_module__WEBPACK_IMPORTED_MODULE_8__.MaterialModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__.MatSortModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatTableModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__.MatPaginatorModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_20__.MatButtonModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_22__.MatNativeDateModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_23__.MatInputModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__.MatFormFieldModule, _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_25__.NgxMatDatetimePickerModule, _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_25__.NgxMatNativeDateModule],
    exports: [_material_material_module__WEBPACK_IMPORTED_MODULE_8__.MaterialModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__.MatSortModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatTableModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__.MatPaginatorModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_20__.MatButtonModule]
  });
})();

/***/ }),

/***/ 2456:
/*!********************************************************************!*\
  !*** ./src/app/floating-schedules/floating-schedules.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FloatingSchedulesComponent": () => (/* binding */ FloatingSchedulesComponent)
/* harmony export */ });
/* harmony import */ var _microsoft_signalr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @microsoft/signalr */ 7930);
/* harmony import */ var _microsoft_signalr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @microsoft/signalr */ 4449);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 155);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _helpers_time_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_helpers/time.handler */ 8481);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 6908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services */ 9949);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);








function FloatingSchedulesComponent_div_2_tbody_13_tr_1_td_9_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "span", 12);
  }
}
function FloatingSchedulesComponent_div_2_tbody_13_tr_1_td_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 9)(1, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FloatingSchedulesComponent_div_2_tbody_13_tr_1_td_9_Template_button_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8);
      const s_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r6.onDeletePoolElement($event, s_r3.id, s_r3.email, s_r3.userFunction));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, FloatingSchedulesComponent_div_2_tbody_13_tr_1_td_9_span_2_Template, 1, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const s_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", s_r3.deleting);
  }
}
function FloatingSchedulesComponent_div_2_tbody_13_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, FloatingSchedulesComponent_div_2_tbody_13_tr_1_td_9_Template, 4, 1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const s_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", s_r3.email, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r2.getDisplayDate(s_r3.date), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](s_r3.userFunction);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](s_r3.scheduleGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.isLoggedAsAdmin);
  }
}
function FloatingSchedulesComponent_div_2_tbody_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, FloatingSchedulesComponent_div_2_tbody_13_tr_1_Template, 10, 5, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.poolElements);
  }
}
function FloatingSchedulesComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 3)(1, "table", 4)(2, "thead")(3, "tr")(4, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Duty");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Team");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, FloatingSchedulesComponent_div_2_tbody_13_Template, 2, 1, "tbody", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.poolElements);
  }
}
class FloatingSchedulesComponent {
  constructor(accountService, alertService) {
    this.accountService = accountService;
    this.alertService = alertService;
    this.isLoaded = false;
    this.poolElements = [];
    this.isLoggedAsAdmin = false;
    this.isLoggedAsAdmin = this.accountService.isAdmin();
    const connection = new _microsoft_signalr__WEBPACK_IMPORTED_MODULE_5__.HubConnectionBuilder().configureLogging(_microsoft_signalr__WEBPACK_IMPORTED_MODULE_6__.LogLevel.Information).withUrl(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + '/update').build();
    connection.start().then(function () {
      console.log('SignalR Connected!');
    }).catch(function (err) {
      return console.error(err.toString());
    });
    connection.on("SendUpdate", id => {
      this.updateSchedulesFromServer();
    });
  }
  ngOnInit() {
    this.updateSchedulesFromServer();
  }
  updateSchedulesFromServer() {
    this.accountService.getAllAvailableSchedules().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.first)()).subscribe({
      next: pollElements => {
        this.poolElements = pollElements.schedulePoolElements;
        this.isLoaded = true;
      },
      error: error => {
        this.alertService.error(error);
      }
    });
  }
  onDeletePoolElement(event, scheduleId, email, userFunction) {
    let poolElement = this.getPoolElementById(scheduleId);
    if (poolElement == null) return; // Nothing to delete, should never happen
    poolElement.deleting = true;
    this.accountService.deletePoolElement(scheduleId, email, userFunction).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.first)()).subscribe({
      next: schedulePoolElement => {
        console.log(schedulePoolElement.email);
        this.accountService.getAllAvailableSchedules().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.first)()).subscribe({
          next: pollElements => {
            this.poolElements = pollElements.schedulePoolElements;
            this.isLoaded = true;
            poolElement.deleting = false;
          },
          error: error => {
            this.alertService.error(error);
            poolElement.deleting = false;
          }
        });
      },
      error: error => {
        this.alertService.error(error);
      }
    });
  }
  getPoolElementById(poolId) {
    for (let index = 0; index < this.poolElements.length; index++) {
      const element = this.poolElements[index];
      if (element.id === poolId) {
        return element;
      }
    }
    return null;
  }
  getDisplayDate(date) {
    // var str = TimeHandler.getDateDisplayStrFromFormat(date);
    // return TimeHandler.getDateDisplayStrFromFormat(date);
    return _helpers_time_handler__WEBPACK_IMPORTED_MODULE_1__.TimeHandler.getDateDisplayStrFromFormat(moment__WEBPACK_IMPORTED_MODULE_2__(moment__WEBPACK_IMPORTED_MODULE_2__.utc(date)).local().toDate());
  }
  static #_ = this.ɵfac = function FloatingSchedulesComponent_Factory(t) {
    return new (t || FloatingSchedulesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__.AlertService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: FloatingSchedulesComponent,
    selectors: [["app-floating-schedules"]],
    decls: 3,
    vars: 1,
    consts: [[1, "p-4"], [1, "container"], ["class", "border border-primary", 4, "ngIf"], [1, "border", "border-primary"], ["id", "scheduledTable", 1, "table", "table-striped"], [2, "width", "20%"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["style", "white-space: nowrap", 4, "ngIf"], [2, "white-space", "nowrap"], ["type", "button", 1, "btn", "btn-sm", "btn-danger", "btn-delete-account", 3, "click"], ["class", "spinner-border spinner-border-sm mr-1", 4, "ngIf"], [1, "spinner-border", "spinner-border-sm", "mr-1"]],
    template: function FloatingSchedulesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, FloatingSchedulesComponent_div_2_Template, 14, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isLoaded);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 5067:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_services */ 9949);


class HomeComponent {
  constructor(accountService) {
    this.accountService = accountService;
    this.account = this.accountService.accountValue;
  }
  static #_ = this.ɵfac = function HomeComponent_Factory(t) {
    return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_0__.AccountService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: HomeComponent,
    selectors: [["ng-component"]],
    decls: 4,
    vars: 1,
    consts: [[1, "p-4"], [1, "container"]],
    template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Hi ", ctx.account.firstName, "!");
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 3456:
/*!*******************************!*\
  !*** ./src/app/home/index.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* reexport safe */ _home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent)
/* harmony export */ });
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ 5067);


/***/ }),

/***/ 898:
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialModule": () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);







class MaterialModule {
  static #_ = this.ɵfac = function MaterialModule_Factory(t) {
    return new (t || MaterialModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: MaterialModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButtonModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__.MatToolbarModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButtonModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__.MatToolbarModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButtonModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__.MatToolbarModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableModule],
    exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButtonModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__.MatToolbarModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableModule]
  });
})();

/***/ }),

/***/ 9277:
/*!***************************************!*\
  !*** ./src/app/order-by-date.pipe.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderByDatePipe": () => (/* binding */ OrderByDatePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class OrderByDatePipe {
  transform(array, property, order) {
    if (!Array.isArray(array) || !property) {
      return array;
    }
    // Use index signatures
    if (property == "date") {
      array.sort((a, b) => {
        const dateA = new Date(a[property]);
        const dateB = new Date(b[property]);
        if (order === 'asc') {
          return dateA.getTime() - dateB.getTime();
        } else {
          return dateB.getTime() - dateA.getTime();
        }
      });
      return array;
    } else if (property == "function") {
      array.sort((a, b) => {
        if (order === 'asc') {
          if (a[property] > b[property]) return 1;
          if (a[property] < b[property]) return -1;
          return 0;
        } else {
          if (a[property] < b[property]) return 1;
          if (a[property] > b[property]) return -1;
          return 0;
        }
      });
      return array;
    } else {
      return array;
    }
  }
  static #_ = this.ɵfac = function OrderByDatePipe_Factory(t) {
    return new (t || OrderByDatePipe)();
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "orderByDate",
    type: OrderByDatePipe,
    pure: true
  });
}

/***/ }),

/***/ 8026:
/*!**************************************************************!*\
  !*** ./src/app/raport-for-date/raport-for-date.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RaportForDateComponent": () => (/* binding */ RaportForDateComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 155);
/* harmony import */ var _helpers_time_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_helpers/time.handler */ 8481);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 6908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services */ 9949);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _order_by_date_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../order-by-date.pipe */ 9277);










function RaportForDateComponent_div_1_option_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const date_r5 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", date_r5, "/", ctx_r2.getDayStrFromDate(date_r5), "");
  }
}
function RaportForDateComponent_div_1_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Date must be valid ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function RaportForDateComponent_div_1_fieldset_16_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const user_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", user_r8.function, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", user_r8.firstName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", user_r8.scheduleGroup, " ");
  }
}
function RaportForDateComponent_div_1_fieldset_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "fieldset")(1, "legend");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 14)(4, "table", 15)(5, "thead")(6, "tr")(7, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Duty");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "User");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Team");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, RaportForDateComponent_div_1_fieldset_16_tr_15_Template, 7, 3, "tr", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const team_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", team_r6.function, " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", team_r6.users);
  }
}
function RaportForDateComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 2)(1, "form", 3)(2, "div", 4)(3, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Dates:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function RaportForDateComponent_div_1_Template_input_change_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r9.onCheckboxChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "All");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "select", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function RaportForDateComponent_div_1_Template_select_ngModelChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r11.onSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Choose ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Choose here");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, RaportForDateComponent_div_1_option_14_Template, 2, 2, "option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, RaportForDateComponent_div_1_div_15_Template, 2, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, RaportForDateComponent_div_1_fieldset_16_Template, 16, 2, "fieldset", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](17, "orderByDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.futureScheduleDateStrings);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.f["dates"].dirty && ctx_r0.f["dates"].hasError("invalidDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](17, 4, ctx_r0.teams, "function", "asc"));
  }
}
class RaportForDateComponent {
  constructor(accountService, formBuilder) {
    this.accountService = accountService;
    this.formBuilder = formBuilder;
    this.list = [];
    this.futureScheduleDateStrings = [];
    this.isLoaded = false;
    this.isUsersLoaded = false;
    this.users = [];
    this.teams = [];
    this.scheduleDateTime = [];
  }
  ngOnInit() {
    this.form = this.formBuilder.group({
      dates: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, this.dateValidator]],
      allDates: [false, '']
    });
    this.getAllDates();
  }
  onCheckboxChange(event) {
    this.getAllDates();
    this.teams = []; // Remove all current teams - we have new set of dates
  }

  get f() {
    return this.form.controls;
  }
  reverseScheduleLookup(dateStr) {
    for (let index = 0; index < this.scheduleDateTime.length; index++) {
      const scheduleDateTime = this.scheduleDateTime[index];
      var dStr = this.getDateDisplayStr(scheduleDateTime.date);
      if (dStr == dateStr) return scheduleDateTime.date;
    }
    return null;
  }
  onSelected(value) {
    this.dateSelected = value;
    if (this.futureScheduleDateStrings.length <= 0) return;
    var selectedDate = this.form.get('dates').value;
    var selectedDateInParseFormat = moment__WEBPACK_IMPORTED_MODULE_2__(selectedDate, `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.dateTimeFormat}`);
    if (isNaN(Date.parse(selectedDateInParseFormat.toString() /* selectedDate */)))
      // If Date is invalid then return (e.g. "Choose here")
      return;
    this.users = [];
    const array = selectedDate.split("/");
    var date = this.reverseScheduleLookup(array[0]);
    this.accountService.GetTeamsByFunctionForDate(date).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.first)()).subscribe({
      next: dateFunctionTeams => {
        this.teams = dateFunctionTeams.dateFunctionTeams;
        for (let index = 0; index < this.teams.length; index++) {
          var user = this.teams[index].users;
          console.log(this.teams[index]);
          for (let i = 0; i < this.teams[index].users.length; i++) {
            this.users.push(this.teams[index].users[i]);
          }
          console.log(this.users);
        }
      },
      error: error => {
        console.log();
      }
    });
  }
  getAllDates() {
    this.futureScheduleDateStrings = [];
    this.list = [];
    this.accountService.getAllDates().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.first)()).subscribe({
      next: value => {
        this.scheduleDateTime = value.scheduleDateTimes;
        for (let index = 0; index < value.scheduleDateTimes.length; index++) {
          // Add server side date
          this.list.push(value.scheduleDateTimes[index].date);
        }
        this.list.sort(function (a, b) {
          if (a > b) return 1;
          if (a < b) return -1;
          return 0;
        });
        for (let index = 0; index < this.list.length; index++) {
          var tNowLocalMs = Date.now();
          const scheduleServerDate = this.list[index];
          var scheduleLocalDate = moment__WEBPACK_IMPORTED_MODULE_2__(moment__WEBPACK_IMPORTED_MODULE_2__.utc(scheduleServerDate)).local().toDate();
          var scheduleLocalMs = scheduleLocalDate.getTime();
          if (this.f['allDates'].value || scheduleLocalMs > tNowLocalMs) {
            this.futureScheduleDateStrings.push(this.getDateDisplayStr(scheduleServerDate));
          }
        }
        this.isLoaded = true;
      },
      error: error => {
        console.log();
      }
    });
  }
  getDayStrFromDate(dateStr) {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var date = _helpers_time_handler__WEBPACK_IMPORTED_MODULE_0__.TimeHandler.displayStr2Date(dateStr);
    return days[date.getDay()];
  }
  getDateDisplayStr(date) {
    return _helpers_time_handler__WEBPACK_IMPORTED_MODULE_0__.TimeHandler.getDateDisplayStrFromFormat(moment__WEBPACK_IMPORTED_MODULE_2__(moment__WEBPACK_IMPORTED_MODULE_2__.utc(date)).local().toDate());
  }
  dateValidator(control) {
    var test = control.value.match(/^\d/);
    if (!test) {
      return {
        invalidDate: true
      };
    }
    return null;
  }
  static #_ = this.ɵfac = function RaportForDateComponent_Factory(t) {
    return new (t || RaportForDateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: RaportForDateComponent,
    selectors: [["app-raport-test"]],
    decls: 2,
    vars: 1,
    consts: [[1, "p-4"], ["class", "container", 4, "ngIf"], [1, "container"], [3, "formGroup"], [1, "mb-3"], ["for", "dates", 1, "me-2"], ["type", "checkbox", "formControlName", "allDates", "id", "allDates", "name", "allDates", "value", "", 1, "ms-5", 3, "change"], ["for", "allDates", 1, "ps-2"], ["formControlName", "dates", 1, "form-select", 3, "ngModelChange"], ["dates", ""], ["value", "", "selected", "", "hidden", ""], [4, "ngFor", "ngForOf"], ["class", "alert alert-danger", 4, "ngIf"], [1, "alert", "alert-danger"], [1, "border", "border-primary"], ["id", "scheduledTable", 1, "table", "table-striped"], [2, "width", "30%"], [2, "width", "10%"]],
    template: function RaportForDateComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, RaportForDateComponent_div_1_Template, 18, 8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.futureScheduleDateStrings);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _order_by_date_pipe__WEBPACK_IMPORTED_MODULE_4__.OrderByDatePipe],
    styles: ["#designer-host[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100vh;\n}\nfieldset[_ngcontent-%COMP%] {\n  margin: 8px;\n  border: 1px solid silver;\n  padding: 8px;\n  border-radius: 4px;\n}\nlegend[_ngcontent-%COMP%] {\n  background-color: #000;\n  color: #fff;\n  padding: 3px 6px;\n}\n/*# sourceURL=webpack://./src/app/raport-for-date/raport-for-date.component.less */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcmFwb3J0LWZvci1kYXRlL3JhcG9ydC1mb3ItZGF0ZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FBQ0o7QUFDRTtFQUNFLFdBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUNKO0FBRUE7RUFDSSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUFKIiwic291cmNlc0NvbnRlbnQiOlsiI2Rlc2lnbmVyLWhvc3Qge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwdmg7XG4gIH1cbiAgZmllbGRzZXQge1xuICAgIG1hcmdpbjogOHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHNpbHZlcjtcbiAgICBwYWRkaW5nOiA4cHg7ICAgIFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxubGVnZW5kIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDNweCA2cHg7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false,
  dateTimeFormat: 'DD-MM-YYYY HH:mm',
  dateFormat: 'DD-MM-YYYY',
  shortDateTimeFormat: 'DD.MM.YY HH:mm',
  //apiUrl: 'https://49.176.185.39:4000'
  //apiUrl: 'https://oloaschedulemebackend.azurewebsites.net/',
  //apiUrl: 'http://localhost:4000',
  //apiUrl: 'http://rejkid.hopto.org:4000'
  apiUrl: 'https://192.168.0.19:4000',
  //baseUrl: 'https://rejkid.hopto.org:4000',
  //baseUrl: 'https://oloaschedulemebackend.azurewebsites.net/'
  //baseUrl: 'http://localhost:4000'
  baseUrl: 'https://192.168.0.19:4000'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown .
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ }),

/***/ 6700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 8685,
	"./af.js": 8685,
	"./ar": 254,
	"./ar-dz": 4312,
	"./ar-dz.js": 4312,
	"./ar-kw": 2614,
	"./ar-kw.js": 2614,
	"./ar-ly": 8630,
	"./ar-ly.js": 8630,
	"./ar-ma": 8674,
	"./ar-ma.js": 8674,
	"./ar-sa": 9032,
	"./ar-sa.js": 9032,
	"./ar-tn": 4730,
	"./ar-tn.js": 4730,
	"./ar.js": 254,
	"./az": 3052,
	"./az.js": 3052,
	"./be": 150,
	"./be.js": 150,
	"./bg": 3069,
	"./bg.js": 3069,
	"./bm": 3466,
	"./bm.js": 3466,
	"./bn": 8516,
	"./bn-bd": 557,
	"./bn-bd.js": 557,
	"./bn.js": 8516,
	"./bo": 6273,
	"./bo.js": 6273,
	"./br": 9588,
	"./br.js": 9588,
	"./bs": 9815,
	"./bs.js": 9815,
	"./ca": 3331,
	"./ca.js": 3331,
	"./cs": 1320,
	"./cs.js": 1320,
	"./cv": 2219,
	"./cv.js": 2219,
	"./cy": 8266,
	"./cy.js": 8266,
	"./da": 6427,
	"./da.js": 6427,
	"./de": 7435,
	"./de-at": 2871,
	"./de-at.js": 2871,
	"./de-ch": 2994,
	"./de-ch.js": 2994,
	"./de.js": 7435,
	"./dv": 2357,
	"./dv.js": 2357,
	"./el": 5649,
	"./el.js": 5649,
	"./en-au": 9961,
	"./en-au.js": 9961,
	"./en-ca": 9878,
	"./en-ca.js": 9878,
	"./en-gb": 3924,
	"./en-gb.js": 3924,
	"./en-ie": 864,
	"./en-ie.js": 864,
	"./en-il": 1579,
	"./en-il.js": 1579,
	"./en-in": 940,
	"./en-in.js": 940,
	"./en-nz": 6181,
	"./en-nz.js": 6181,
	"./en-sg": 4301,
	"./en-sg.js": 4301,
	"./eo": 5291,
	"./eo.js": 5291,
	"./es": 4529,
	"./es-do": 3764,
	"./es-do.js": 3764,
	"./es-mx": 2584,
	"./es-mx.js": 2584,
	"./es-us": 3425,
	"./es-us.js": 3425,
	"./es.js": 4529,
	"./et": 5203,
	"./et.js": 5203,
	"./eu": 678,
	"./eu.js": 678,
	"./fa": 3483,
	"./fa.js": 3483,
	"./fi": 6262,
	"./fi.js": 6262,
	"./fil": 2521,
	"./fil.js": 2521,
	"./fo": 4555,
	"./fo.js": 4555,
	"./fr": 3131,
	"./fr-ca": 8239,
	"./fr-ca.js": 8239,
	"./fr-ch": 1702,
	"./fr-ch.js": 1702,
	"./fr.js": 3131,
	"./fy": 267,
	"./fy.js": 267,
	"./ga": 3821,
	"./ga.js": 3821,
	"./gd": 1753,
	"./gd.js": 1753,
	"./gl": 4074,
	"./gl.js": 4074,
	"./gom-deva": 2762,
	"./gom-deva.js": 2762,
	"./gom-latn": 5969,
	"./gom-latn.js": 5969,
	"./gu": 2809,
	"./gu.js": 2809,
	"./he": 5402,
	"./he.js": 5402,
	"./hi": 315,
	"./hi.js": 315,
	"./hr": 410,
	"./hr.js": 410,
	"./hu": 8288,
	"./hu.js": 8288,
	"./hy-am": 7928,
	"./hy-am.js": 7928,
	"./id": 1334,
	"./id.js": 1334,
	"./is": 6959,
	"./is.js": 6959,
	"./it": 4864,
	"./it-ch": 1124,
	"./it-ch.js": 1124,
	"./it.js": 4864,
	"./ja": 6141,
	"./ja.js": 6141,
	"./jv": 9187,
	"./jv.js": 9187,
	"./ka": 2136,
	"./ka.js": 2136,
	"./kk": 4332,
	"./kk.js": 4332,
	"./km": 8607,
	"./km.js": 8607,
	"./kn": 4305,
	"./kn.js": 4305,
	"./ko": 234,
	"./ko.js": 234,
	"./ku": 6003,
	"./ku.js": 6003,
	"./ky": 5061,
	"./ky.js": 5061,
	"./lb": 2786,
	"./lb.js": 2786,
	"./lo": 6183,
	"./lo.js": 6183,
	"./lt": 29,
	"./lt.js": 29,
	"./lv": 4169,
	"./lv.js": 4169,
	"./me": 8577,
	"./me.js": 8577,
	"./mi": 8177,
	"./mi.js": 8177,
	"./mk": 337,
	"./mk.js": 337,
	"./ml": 5260,
	"./ml.js": 5260,
	"./mn": 2325,
	"./mn.js": 2325,
	"./mr": 4695,
	"./mr.js": 4695,
	"./ms": 5334,
	"./ms-my": 7151,
	"./ms-my.js": 7151,
	"./ms.js": 5334,
	"./mt": 3570,
	"./mt.js": 3570,
	"./my": 7963,
	"./my.js": 7963,
	"./nb": 8028,
	"./nb.js": 8028,
	"./ne": 6638,
	"./ne.js": 6638,
	"./nl": 302,
	"./nl-be": 6782,
	"./nl-be.js": 6782,
	"./nl.js": 302,
	"./nn": 3501,
	"./nn.js": 3501,
	"./oc-lnc": 563,
	"./oc-lnc.js": 563,
	"./pa-in": 869,
	"./pa-in.js": 869,
	"./pl": 5302,
	"./pl.js": 5302,
	"./pt": 9687,
	"./pt-br": 4884,
	"./pt-br.js": 4884,
	"./pt.js": 9687,
	"./ro": 9107,
	"./ro.js": 9107,
	"./ru": 3627,
	"./ru.js": 3627,
	"./sd": 355,
	"./sd.js": 355,
	"./se": 3427,
	"./se.js": 3427,
	"./si": 1848,
	"./si.js": 1848,
	"./sk": 4590,
	"./sk.js": 4590,
	"./sl": 184,
	"./sl.js": 184,
	"./sq": 6361,
	"./sq.js": 6361,
	"./sr": 8965,
	"./sr-cyrl": 1287,
	"./sr-cyrl.js": 1287,
	"./sr.js": 8965,
	"./ss": 5456,
	"./ss.js": 5456,
	"./sv": 451,
	"./sv.js": 451,
	"./sw": 7558,
	"./sw.js": 7558,
	"./ta": 1356,
	"./ta.js": 1356,
	"./te": 3693,
	"./te.js": 3693,
	"./tet": 1243,
	"./tet.js": 1243,
	"./tg": 2500,
	"./tg.js": 2500,
	"./th": 5768,
	"./th.js": 5768,
	"./tk": 7761,
	"./tk.js": 7761,
	"./tl-ph": 5780,
	"./tl-ph.js": 5780,
	"./tlh": 9590,
	"./tlh.js": 9590,
	"./tr": 3807,
	"./tr.js": 3807,
	"./tzl": 3857,
	"./tzl.js": 3857,
	"./tzm": 654,
	"./tzm-latn": 8806,
	"./tzm-latn.js": 8806,
	"./tzm.js": 654,
	"./ug-cn": 845,
	"./ug-cn.js": 845,
	"./uk": 9232,
	"./uk.js": 9232,
	"./ur": 7052,
	"./ur.js": 7052,
	"./uz": 7967,
	"./uz-latn": 2233,
	"./uz-latn.js": 2233,
	"./uz.js": 7967,
	"./vi": 8615,
	"./vi.js": 8615,
	"./x-pseudo": 2320,
	"./x-pseudo.js": 2320,
	"./yo": 1313,
	"./yo.js": 1313,
	"./zh-cn": 4490,
	"./zh-cn.js": 4490,
	"./zh-hk": 5910,
	"./zh-hk.js": 5910,
	"./zh-mo": 8262,
	"./zh-mo.js": 8262,
	"./zh-tw": 4223,
	"./zh-tw.js": 4223
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 6700;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map