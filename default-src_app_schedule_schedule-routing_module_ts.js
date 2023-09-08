"use strict";
(self["webpackChunkScheduler"] = self["webpackChunkScheduler"] || []).push([["default-src_app_schedule_schedule-routing_module_ts"],{

/***/ 4854:
/*!******************************!*\
  !*** ./src/app/constants.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Constants": () => (/* binding */ Constants)
/* harmony export */ });
class Constants {
  static #_ = this.CLEANER_STR = 'Cleaner';
}
;

/***/ }),

/***/ 718:
/*!*********************************************************!*\
  !*** ./src/app/schedule/schedule-function.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScheduleFunctionComponent": () => (/* binding */ ScheduleFunctionComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_models */ 3027);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 155);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services */ 9949);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);








function ScheduleFunctionComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Duties of ", ctx_r0.account.firstName, "");
  }
}
function ScheduleFunctionComponent_tbody_8_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const s_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", s_r4.userFunction, " ");
  }
}
function ScheduleFunctionComponent_tbody_8_tr_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function ScheduleFunctionComponent_tbody_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ScheduleFunctionComponent_tbody_8_tr_1_Template, 3, 1, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ScheduleFunctionComponent_tbody_8_tr_2_Template, 3, 0, "tr", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.userFunctions);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r1.userFunctions);
  }
}
class ScheduleFunctionComponent {
  constructor(accountService, alertService, formBuilder, route, router) {
    this.accountService = accountService;
    this.alertService = alertService;
    this.formBuilder = formBuilder;
    this.route = route;
    this.router = router;
    this.userFunctionIndexer = 0;
    this.userFunctions = null;
    this.functions = [];
    this.submitted = false;
    this.isLoggedAsAdmin = false;
    this.isLoaded = false;
    this.isLoggedAsAdmin = this.accountService.isAdmin();
  }
  ngOnInit() {
    this.form = this.formBuilder.group({
      function: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, this.functionValidator]]
    });
    this.id = this.route.snapshot.params['id'];
    this.accountService.getById(this.id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.first)()).subscribe({
      next: account => {
        this.account = account;
        this.isLoaded = true;
        this.accountService.getRoles().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.first)()).subscribe({
          next: value => {
            this.functions = value;
            this.userFunctions = account.userFunctions.slice();
            console.log(this.account + this.id);
            this.form.get('function').setValue(this.functions[0]);
            this.userFunctionIndexer = account.userFunctions.length > 0 ? parseInt(account.userFunctions[account.userFunctions.length - 1].id) : 0;
          },
          error: error => {
            this.alertService.error(error);
          }
        });
      },
      error: error => {
        this.alertService.error(error);
      }
    });
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.form.controls;
  }
  functionValidator(control) {
    if (control.value === '') {
      return {
        invalidFunction: true
      };
    }
    return null;
  }
  get isAdmin() {
    return this.account.role == _models__WEBPACK_IMPORTED_MODULE_0__.Role.Admin;
  }
  static #_ = this.ɵfac = function ScheduleFunctionComponent_Factory(t) {
    return new (t || ScheduleFunctionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_1__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_1__.AlertService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ScheduleFunctionComponent,
    selectors: [["ng-component"]],
    decls: 12,
    vars: 3,
    consts: [["class", "mb-3 col", 4, "ngIf"], [1, "card-body", 3, "formGroup"], [1, "border", "border-primary"], [1, "table", "table-striped"], [2, "width", "20%"], [4, "ngIf"], [1, "mb-3"], ["routerLink", "/schedule", 1, "btn", "btn-link"], [1, "mb-3", "col"], [4, "ngFor", "ngForOf"], ["colspan", "4", 1, "text-center"], [1, "spinner-border", "spinner-border-lg", "align-center"]],
    template: function ScheduleFunctionComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ScheduleFunctionComponent_div_0_Template, 3, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "form", 1)(2, "div", 2)(3, "table", 3)(4, "thead")(5, "tr")(6, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Duty");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, ScheduleFunctionComponent_tbody_8_Template, 3, 2, "tbody", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 6)(10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.functions);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective],
    encapsulation: 2
  });
}

/***/ }),

/***/ 6930:
/*!*******************************************************!*\
  !*** ./src/app/schedule/schedule-layout.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScheduleLayoutComponent": () => (/* binding */ ScheduleLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class ScheduleLayoutComponent {
  static #_ = this.ɵfac = function ScheduleLayoutComponent_Factory(t) {
    return new (t || ScheduleLayoutComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ScheduleLayoutComponent,
    selectors: [["ng-component"]],
    decls: 3,
    vars: 0,
    consts: [[1, "p-4"], [1, "container"]],
    template: function ScheduleLayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
    encapsulation: 2
  });
}

/***/ }),

/***/ 5275:
/*!*****************************************************!*\
  !*** ./src/app/schedule/schedule-list.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScheduleListComponent": () => (/* binding */ ScheduleListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_services */ 9949);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);




function ScheduleListComponent_label_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Choose Property for ", ctx_r0.account.firstName, "");
  }
}
function ScheduleListComponent_td_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 6)(1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Duties");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Schedules");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "function/", ctx_r1.account.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "schedules/", ctx_r1.account.id, "");
  }
}
class ScheduleListComponent {
  constructor(accountService) {
    this.accountService = accountService;
    //accounts: any[];
    this.account = this.accountService.accountValue;
  }
  ngOnInit() {
    if (this.account) {
      console.log(this.account.firstName);
    } else {
      console.log("account is NULL");
    }
  }
  static #_ = this.ɵfac = function ScheduleListComponent_Factory(t) {
    return new (t || ScheduleListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_0__.AccountService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ScheduleListComponent,
    selectors: [["ng-component"]],
    decls: 11,
    vars: 2,
    consts: [[1, "mb-3", "col"], [4, "ngIf"], [1, "table", "table-striped"], ["style", "white-space: nowrap", 4, "ngIf"], [1, "mb-3"], ["routerLink", "/profile", 1, "btn", "btn-link"], [2, "white-space", "nowrap"], [1, "btn", "btn-sm", "btn-primary", "mr-2", 3, "routerLink"]],
    template: function ScheduleListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "User Properties");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ScheduleListComponent_label_3_Template, 2, 1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "table", 2)(5, "tbody")(6, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ScheduleListComponent_td_7_Template, 6, 2, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 4)(9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.account);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.account);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink],
    encapsulation: 2
  });
}

/***/ }),

/***/ 2774:
/*!*****************************************************!*\
  !*** ./src/app/schedule/schedule-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScheduleRoutingModule": () => (/* binding */ ScheduleRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _schedule_function_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedule-function.component */ 718);
/* harmony import */ var _schedule_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schedule-layout.component */ 6930);
/* harmony import */ var _schedule_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./schedule-list.component */ 5275);
/* harmony import */ var _schedule_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./schedule.component */ 782);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);







const routes = [
//{ path: 'nav', component: ScheduleLayoutComponent },
{
  path: '',
  component: _schedule_layout_component__WEBPACK_IMPORTED_MODULE_1__.ScheduleLayoutComponent,
  children: [{
    path: '',
    component: _schedule_list_component__WEBPACK_IMPORTED_MODULE_2__.ScheduleListComponent
  }, {
    path: 'function/:id',
    component: _schedule_function_component__WEBPACK_IMPORTED_MODULE_0__.ScheduleFunctionComponent
  }, {
    path: 'schedules/:id',
    component: _schedule_component__WEBPACK_IMPORTED_MODULE_3__.ScheduleComponent
  }]
}];
class ScheduleRoutingModule {
  static #_ = this.ɵfac = function ScheduleRoutingModule_Factory(t) {
    return new (t || ScheduleRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: ScheduleRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ScheduleRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 782:
/*!************************************************!*\
  !*** ./src/app/schedule/schedule.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScheduleComponent": () => (/* binding */ ScheduleComponent)
/* harmony export */ });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_models */ 3027);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 155);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ 6908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _helpers_time_handler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/time.handler */ 8481);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/sort */ 2197);
/* harmony import */ var _microsoft_signalr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @microsoft/signalr */ 7930);
/* harmony import */ var _microsoft_signalr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @microsoft/signalr */ 4449);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants */ 4854);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services */ 9949);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/paginator */ 6060);



















const _c0 = ["paginator"];
function ScheduleComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 26)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Schedules for ", ctx_r0.account.firstName, "");
  }
}
function ScheduleComponent_div_5_option_6_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate3"](" ", ctx_r19.getDisplayDate(item_r18.date), "/", item_r18.userFunction, "/", item_r18.scheduleGroup, " ");
  }
}
function ScheduleComponent_div_5_option_6_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", ctx_r20.getDisplayDate(item_r18.date), "/", item_r18.userFunction, " ");
  }
}
function ScheduleComponent_div_5_option_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ScheduleComponent_div_5_option_6_span_1_Template, 2, 3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ScheduleComponent_div_5_option_6_span_2_Template, 2, 2, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r18.userFunction === "Cleaner");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r18.userFunction != "Cleaner");
  }
}
function ScheduleComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "div", 27)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Date/Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "select", 28, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, ScheduleComponent_div_5_option_6_Template, 3, 2, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.poolElements);
  }
}
function ScheduleComponent_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "span", 31);
  }
}
function ScheduleComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ScheduleComponent_mat_header_cell_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Date/Time ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ScheduleComponent_mat_cell_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const schedule_r23 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r6.getDisplayDate(schedule_r23.date), " ");
  }
}
function ScheduleComponent_mat_header_cell_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Duty ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ScheduleComponent_mat_cell_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const schedule_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", schedule_r24.userFunction, " ");
  }
}
function ScheduleComponent_mat_header_cell_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Team ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ScheduleComponent_mat_cell_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const schedule_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", schedule_r25.scheduleGroup, " ");
  }
}
function ScheduleComponent_mat_header_cell_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ScheduleComponent_mat_cell_34_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "span", 31);
  }
}
const _c1 = function (a0) {
  return {
    "disabled": a0
  };
};
function ScheduleComponent_mat_cell_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-cell")(1, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ScheduleComponent_mat_cell_34_Template_button_click_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r31);
      const row_r28 = restoredCtx.$implicit;
      const i_r26 = restoredCtx.index;
      const schedule_r27 = restoredCtx.$implicit;
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r30.onDeleteSchedule($event, row_r28, i_r26, schedule_r27));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ScheduleComponent_mat_cell_34_span_2_Template, 1, 0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r28 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](2, _c1, ctx_r12.isScheduleFromPast(row_r28) || row_r28.deleting));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", row_r28.deleting);
  }
}
function ScheduleComponent_mat_header_row_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "mat-header-row");
  }
}
const _c2 = function (a0) {
  return {
    hovered: a0
  };
};
function ScheduleComponent_mat_row_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-row", 36, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("mouseover", function ScheduleComponent_mat_row_36_Template_mat_row_mouseover_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r35);
      const row_r32 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](row_r32.hovered = true);
    })("mouseout", function ScheduleComponent_mat_row_36_Template_mat_row_mouseout_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r35);
      const row_r32 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](row_r32.hovered = false);
    })("click", function ScheduleComponent_mat_row_36_Template_mat_row_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r35);
      const row_r32 = restoredCtx.$implicit;
      const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](1);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r37.onRowSelected(row_r32, _r33));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](1, _c2, row_r32.hovered));
  }
}
const _c3 = function () {
  return [5, 10, 30, 50];
};
const COLUMNS_SCHEMA = [{
  key: "date",
  type: "Date",
  label: "DateTime"
}, {
  key: "userFunction",
  type: "text",
  label: "Duty"
}, {
  key: "scheduleGroup",
  type: "text",
  label: "Group"
}, {
  key: "action",
  type: "button",
  label: "Action"
}];
const VALID_TO_SERVICE_TIMEOUT = 1000 * 60 * 60 * 24; // 1 DAY
class ScheduleComponent {
  constructor(accountService, route, router, formBuilder, alertService, cdr) {
    this.route = route;
    this.router = router;
    this.formBuilder = formBuilder;
    this.alertService = alertService;
    this.cdr = cdr;
    this.CLEANER_STR = _constants__WEBPACK_IMPORTED_MODULE_4__.Constants.CLEANER_STR;
    this.schedules = [];
    this.scheduleIndexer = 0;
    this.userFunctionIndexer = 0;
    this.functions = [];
    this.submitted = false;
    this.isLoaded = false;
    this.addingSchedule = false;
    this.userFunctions = [];
    this.isAdding = false;
    this.isLoggedAsAdmin = false;
    this.date = new Date().toISOString().slice(0, 16);
    this.poolElements = [];
    this.isAddScheduleMode = false;
    this.displayedColumns = COLUMNS_SCHEMA.map(col => col.key);
    this.columnsSchema = COLUMNS_SCHEMA;
    this.color = 'primary';
    this.accountService = accountService;
    this.isLoggedAsAdmin = this.accountService.isAdmin();
    var tempStr = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl;
    /* const connection */
    this.connection = new _microsoft_signalr__WEBPACK_IMPORTED_MODULE_7__.HubConnectionBuilder().configureLogging(_microsoft_signalr__WEBPACK_IMPORTED_MODULE_8__.LogLevel.Information).withUrl(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl + '/update').build();
    this.connection.start().then(function () {
      console.log('SignalR Connected!');
    }).catch(function (err) {
      return console.error(err.toString());
    });
    this.connection.on("SendUpdate", id => {
      if (id != parseInt(this.id)) {
        console.log("Error");
      }
      /* TODO This used to cause a call to `GetById(int id)` with the id different then this.id
      Currently I am testing if this is still a problem after fix has been applied*/
      this.updateSchedulesAndPoolFromServer();
    });
  }
  ngAfterViewInit() {
    // Get the account for this id 
    this.accountService.getById(this.id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.first)()).subscribe({
      next: account => {
        this.accountService.getRoles().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.first)()).subscribe({
          next: value => {
            this.functions = value;
            this.initSchedules(account);
            // Initial sorting by date
            this.sort.sort({
              id: 'date',
              start: 'asc'
            });
            this.isLoaded = true;
            this.userFunctions = account.userFunctions.slice();
            this.account = account;
            this.scheduleIndexer = account.schedules.length > 0 ? parseInt(account.schedules[account.schedules.length - 1].id) : 0;
            this.userFunctionIndexer = account.userFunctions.length > 0 ? parseInt(account.userFunctions[account.userFunctions.length - 1].id) : 0;
            var aDateValid = this.form.controls['availableSchedule4Function'].valid;
            this.accountService.getAvailableSchedules(account.id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.first)()).subscribe({
              next: pollElements => {
                this.poolElements = pollElements.schedulePoolElements;
                if (this.poolElements.length != 0) {
                  this.form.get('availableSchedule4Function').setValue(this.getConcatPoolElement(this.poolElements[0]));
                }
              },
              error: error => {
                this.alertService.error(error);
              }
            });
          },
          error: error => {
            this.alertService.error(error);
          }
        });
      },
      error: error => {
        this.alertService.error(error);
      }
    });
  }
  ngOnInit() {
    this.accountService.account.subscribe(x => {
      if (x != null) {
        this.id = x.id;
      }
    });
    this.isAddScheduleMode = this.isLoggedAsAdmin; // If not admin then we are adding available dates
    this.form = this.formBuilder.group({
      availableSchedule4Function: [''],
      allDates: [false, '']
    });
  }
  getConcatPoolElement(poolElement) {
    if (this.poolElements[0].userFunction == this.CLEANER_STR) {
      return this.getDisplayDate(poolElement.date) + "/" + poolElement.userFunction + "/" + poolElement.scheduleGroup;
    } else {
      return this.getDisplayDate(poolElement.date) + "/" + poolElement.userFunction;
    }
  }
  ngOnDestroy() {
    console.log("Called");
  }
  /* I am not sure if we need 'input' parameter - keep it for now*/
  applyFilter(t, input) {
    const target = t;
    var filterValue = target.value;
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  onCheckboxChange(event) {
    this.updateSchedulesAndPoolFromServer();
  }
  functionValidator(control) {
    if (control.value === '') {
      return {
        invalidFunction: true
      };
    }
    return null;
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.form.controls;
  }
  onAddAvailableSchedule() {
    this.submitted = true;
    this.addingSchedule = true;
    // reset alerts on submit
    this.alertService.clear();
    /* Test
    var aDateValid = this.form.controls['availableSchedule4Function'].valid;
    */
    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }
    var schedule = this.createSchedule4DateAndFunction('availableSchedule4Function');
    if (schedule == null) {
      return;
    }
    this.isAdding = true;
    this.accountService.GetScheduleFromPool(this.account.id, schedule).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.first)()).subscribe({
      next: account => {
        this.addingSchedule = false;
        console.log(account);
        this.initSchedules(account);
        if (this.poolElements.length != 0) {
          this.form.get('availableSchedule4Function').setValue(this.getConcatPoolElement(this.poolElements[0]));
        }
        this.updateSchedulesAndPoolFromServer();
      },
      complete: () => {
        this.isAdding = false;
      },
      error: error => {
        this.addingSchedule = false;
        this.alertService.error(error);
        this.isAdding = false;
        this.updateSchedulesAndPoolFromServer();
      }
    });
  }
  updateSchedulesAndPoolFromServer() {
    this.accountService.getById(this.id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.first)()).subscribe({
      next: account => {
        this.initSchedules(account);
        this.accountService.getAvailableSchedules(account.id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.first)()).subscribe({
          next: pollElements => {
            console.log("Pool Elements:" + pollElements);
            this.poolElements = pollElements.schedulePoolElements;
            if (this.poolElements.length != 0) {
              this.form.get('availableSchedule4Function').setValue(this.getConcatPoolElement(this.poolElements[0]));
            }
          },
          error: error => {
            this.alertService.error(error);
          }
        });
      },
      error: error => {
        this.alertService.error(error);
      }
    });
  }
  createSchedule4DateAndFunction(dateFormControlName) {
    var dateAndFuncStr = this.form.controls[dateFormControlName].value;
    const array = dateAndFuncStr.split("/");
    var dateTimeStr = _helpers_time_handler__WEBPACK_IMPORTED_MODULE_3__.TimeHandler.displayStr2LocalIsoString(array[0]);
    var formDate = Date.parse(dateTimeStr);
    var formDateStr = array[0];
    var formFunction = array[1];
    var cleanerGroup = array[2];
    var sDate = this.reverseScheduleLookup(formDateStr);
    for (let index = 0; index < this.schedules.length; index++) {
      var scheduleDate = new Date(this.schedules[index].date);
      var scheduleTime = scheduleDate.getTime();
      var scheduleFunction = this.schedules[index].userFunction;
      if (scheduleTime == formDate && scheduleFunction == formFunction) {
        this.alertService.warn("You are already " + scheduleFunction + " for that date/time");
        return null;
      }
    }
    var localISOTime = _helpers_time_handler__WEBPACK_IMPORTED_MODULE_3__.TimeHandler.displayStr2LocalIsoString(formDateStr);
    var schedule = {
      id: (++this.scheduleIndexer).toString(),
      date: sDate /* localISOTime as any */,
      newDate: sDate /* localISOTime as any */,
      required: true,
      deleting: false,
      userAvailability: true,
      scheduleGroup: cleanerGroup,
      userFunction: formFunction,
      newUserFunction: formFunction
    };
    return schedule;
  }
  reverseScheduleLookup(dateStr) {
    for (let index = 0; index < this.poolElements.length; index++) {
      const schedule = this.poolElements[index];
      var dStr = this.getDisplayDate(schedule.date);
      if (dStr == dateStr) return schedule.date;
    }
    return null;
  }
  isScheduleFromPast(schedule) {
    var scheduleLocalDate = moment__WEBPACK_IMPORTED_MODULE_1__(moment__WEBPACK_IMPORTED_MODULE_1__.utc(schedule.date)).local().toDate(); // NEW CODE
    var scheduleLocalDateMs = scheduleLocalDate.getTime(); // NEW CODE 
    var localNowMs = Date.now();
    if (scheduleLocalDateMs - localNowMs < VALID_TO_SERVICE_TIMEOUT) {
      return true;
    }
    return false;
  }
  onDeleteSchedule(event, scheduleId, indx, schedule2Delete) {
    schedule2Delete.deleting = true;
    this.accountService.MoveSchedule2Pool(this.account.id, schedule2Delete).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.first)()).subscribe({
      next: account => {
        this.updateSchedulesAndPoolFromServer();
        this.schedules = account.schedules;
        schedule2Delete.deleting = false;
      },
      error: error => {
        this.alertService.error(error);
        this.updateSchedulesAndPoolFromServer();
        schedule2Delete.deleting = false;
      }
    });
  }
  onRowSelected(schedule, tr) {}
  initSchedules(account) {
    var schedules = [];
    var dLocalNow = new Date();
    var localNowMs = dLocalNow.getTime();
    //  Filter out values that are older then now if checkbox this.f['allDates'].value is false
    for (let index = 0; index < account.schedules.length; index++) {
      const schedule = account.schedules[index];
      var serverDate = schedule.date;
      var serverDateStr = serverDate.toString();
      var scheduleLocalDate = moment__WEBPACK_IMPORTED_MODULE_1__(moment__WEBPACK_IMPORTED_MODULE_1__.utc(schedule.date)).local().toDate(); // NEW CODE
      var scheduleLocalDateMs = scheduleLocalDate.getTime(); // NEW CODE
      // Check the schedule is at least 1 day before now
      if (this.f['allDates'].value || scheduleLocalDateMs - localNowMs > VALID_TO_SERVICE_TIMEOUT) {
        schedules.push(schedule);
      }
    }
    this.schedules = schedules.slice();
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTableDataSource(this.schedules);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  getDisplayDate(date) {
    return _helpers_time_handler__WEBPACK_IMPORTED_MODULE_3__.TimeHandler.getDateDisplayStrFromShortFormat(moment__WEBPACK_IMPORTED_MODULE_1__(moment__WEBPACK_IMPORTED_MODULE_1__.utc(date)).local().toDate());
  }
  get isAdmin() {
    return this.account.role == _models__WEBPACK_IMPORTED_MODULE_0__.Role.Admin;
  }
  static #_ = this.ɵfac = function ScheduleComponent_Factory(t) {
    return new (t || ScheduleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_5__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_5__.AlertService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: ScheduleComponent,
    selectors: [["app-schedule"]],
    viewQuery: function ScheduleComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_13__.MatSort, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
      }
    },
    decls: 43,
    vars: 16,
    consts: [["class", "mb-3 col", 4, "ngIf"], [3, "formGroup"], [4, "ngIf"], ["type", "button", 1, "btn", "btn-primary", 3, "ngClass", "click"], ["class", "spinner-border spinner-border-sm mr-1", 4, "ngIf"], ["type", "checkbox", "formControlName", "allDates", "id", "allDates", "name", "allDates", "value", "", 3, "change"], ["for", "allDates", 1, "ps-2"], ["class", "d-flex justify-content-center", 4, "ngIf"], [1, "color-sample", "mat-elevation-z3"], [1, "border"], ["matSort", "", 3, "dataSource"], ["table", ""], ["matColumnDef", "date"], ["mat-sort-header", "", 4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "userFunction"], ["matColumnDef", "scheduleGroup"], ["matColumnDef", "action"], [4, "matHeaderCellDef"], [4, "matHeaderRowDef"], [3, "ngClass", "mouseover", "mouseout", "click", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "length", "pageSizeOptions"], ["paginator", ""], [1, "mb-3"], ["routerLink", "/schedule", "disabled", "false", 1, "btn", "btn-link"], [1, "row", "mt-3"], [1, "mb-3", "col"], [1, "col"], ["formControlName", "availableSchedule4Function", 1, "form-select"], ["element", ""], [4, "ngFor", "ngForOf"], [1, "spinner-border", "spinner-border-sm", "mr-1"], [1, "d-flex", "justify-content-center"], [1, "spinner-border", "spinner-border-lg", "align-center"], ["mat-sort-header", ""], ["type", "button", 1, "btn", "btn-sm", "btn-danger", "btn-delete-account", 3, "ngClass", "click"], [3, "ngClass", "mouseover", "mouseout", "click"], ["tr", ""]],
    template: function ScheduleComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, ScheduleComponent_div_0_Template, 3, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "form", 1)(2, "fieldset")(3, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Available Dates:");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ScheduleComponent_div_5_Template, 7, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ScheduleComponent_Template_button_click_7_listener() {
          return ctx.onAddAvailableSchedule();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, ScheduleComponent_span_8_Template, 1, 0, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, " Add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "fieldset")(11, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Assigned Dates:");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function ScheduleComponent_Template_input_change_13_listener($event) {
          return ctx.onCheckboxChange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, ScheduleComponent_div_18_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 8)(20, "div", 9)(21, "mat-table", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](23, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, ScheduleComponent_mat_header_cell_24_Template, 2, 0, "mat-header-cell", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, ScheduleComponent_mat_cell_25_Template, 2, 1, "mat-cell", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](26, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, ScheduleComponent_mat_header_cell_27_Template, 2, 0, "mat-header-cell", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, ScheduleComponent_mat_cell_28_Template, 2, 1, "mat-cell", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](29, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, ScheduleComponent_mat_header_cell_30_Template, 2, 0, "mat-header-cell", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](31, ScheduleComponent_mat_cell_31_Template, 2, 1, "mat-cell", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](32, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](33, ScheduleComponent_mat_header_cell_33_Template, 2, 0, "mat-header-cell", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](34, ScheduleComponent_mat_cell_34_Template, 4, 4, "mat-cell", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](35, ScheduleComponent_mat_header_row_35_Template, 1, 0, "mat-header-row", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](36, ScheduleComponent_mat_row_36_Template, 2, 3, "mat-row", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](37, "mat-paginator", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "div", 23)(40, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](42, "div", 25);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isLoaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isLoggedAsAdmin);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](13, _c1, !ctx.form.controls["availableSchedule4Function"].valid || ctx.poolElements.length <= 0 || ctx.isAdding));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isAdding);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.account);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("background-color", ctx.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("length", ctx.schedules.length)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](15, _c3));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControlName, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatRow, _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__.MatSortHeader, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__.MatPaginator],
    styles: ["fieldset[_ngcontent-%COMP%] {\n  margin: 8px;\n  border: 1px solid silver;\n  padding: 8px;\n  border-radius: 4px;\n}\nlegend[_ngcontent-%COMP%] {\n  background-color: #000;\n  color: #fff;\n  padding: 3px 6px;\n}\n/*# sourceURL=webpack://./src/app/schedule/schedule.component.less */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2NoZWR1bGUvc2NoZWR1bGUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUVBO0VBQ0ksc0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFBSjtBQUNBOztHQUVHIiwic291cmNlc0NvbnRlbnQiOlsiZmllbGRzZXQge1xuICAgIG1hcmdpbjogOHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHNpbHZlcjtcbiAgICBwYWRkaW5nOiA4cHg7ICAgIFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxubGVnZW5kIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDNweCA2cHg7XG59XG4vKiogLm1hdC1jb2x1bW4tZGF0ZSB7XG4gICAgZmxleDogMCAwIDQwJTtcbn0gKi9cbi8vIC5tYXQtZm9vdGVyLXJvdyxcbi8vIC5tYXQtaGVhZGVyLXJvdyxcbi8vIC5tYXQtcm93IHtcbi8vICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbi8vICAgICBtaW4td2lkdGg6IDEwMCU7XG4vLyB9ICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=default-src_app_schedule_schedule-routing_module_ts.js.map