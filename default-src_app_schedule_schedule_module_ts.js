"use strict";
(self["webpackChunkScheduler"] = self["webpackChunkScheduler"] || []).push([["default-src_app_schedule_schedule_module_ts"],{

/***/ 8588:
/*!****************************************************!*\
  !*** ./src/app/schedule/nav-schedule.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavScheduleComponent": () => (/* binding */ NavScheduleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_services */ 9949);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



class NavScheduleComponent {
  constructor(s) {
    this.SendingRefresh2Server = "Nothing";
    this.service = s;
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function NavScheduleComponent_Factory(t) {
    return new (t || NavScheduleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_0__.AccountService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: NavScheduleComponent,
    selectors: [["app-nav-schedule"]],
    decls: 5,
    vars: 0,
    consts: [[1, "admin-nav", "navbar", "navbar-expand", "navbar-light"], [1, "container", "d-flex", "justify-content-end"], [1, "container"]],
    template: function NavScheduleComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Refreshing: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 7911:
/*!*********************************************!*\
  !*** ./src/app/schedule/schedule.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScheduleModule": () => (/* binding */ ScheduleModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _schedule_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedule.component */ 782);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _schedule_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schedule-routing.module */ 2774);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _schedule_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./schedule-list.component */ 5275);
/* harmony import */ var _schedule_function_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./schedule-function.component */ 718);
/* harmony import */ var _schedule_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./schedule-layout.component */ 6930);
/* harmony import */ var _nav_schedule_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nav-schedule.component */ 8588);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var src_app_material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/material/material.module */ 898);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sort */ 2197);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/paginator */ 6060);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/datepicker */ 2298);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular-material-components/datetime-picker */ 820);
/* harmony import */ var _angular_material_components_moment_adapter__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular-material-components/moment-adapter */ 3047);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);






















class ScheduleModule {
  static #_ = this.ɵfac = function ScheduleModule_Factory(t) {
    return new (t || ScheduleModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
    type: ScheduleModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, _schedule_routing_module__WEBPACK_IMPORTED_MODULE_1__.ScheduleRoutingModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule, src_app_material_material_module__WEBPACK_IMPORTED_MODULE_6__.MaterialModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSortModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTableModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__.MatPaginatorModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButtonModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__.MatNativeDateModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInputModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatFormFieldModule, _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_19__.NgxMatDatetimePickerModule, _angular_material_components_moment_adapter__WEBPACK_IMPORTED_MODULE_20__.NgxMatMomentModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_21__.MatSelectModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](ScheduleModule, {
    declarations: [_schedule_component__WEBPACK_IMPORTED_MODULE_0__.ScheduleComponent, _schedule_list_component__WEBPACK_IMPORTED_MODULE_2__.ScheduleListComponent, _schedule_function_component__WEBPACK_IMPORTED_MODULE_3__.ScheduleFunctionComponent, _schedule_layout_component__WEBPACK_IMPORTED_MODULE_4__.ScheduleLayoutComponent, _nav_schedule_component__WEBPACK_IMPORTED_MODULE_5__.NavScheduleComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, _schedule_routing_module__WEBPACK_IMPORTED_MODULE_1__.ScheduleRoutingModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule, src_app_material_material_module__WEBPACK_IMPORTED_MODULE_6__.MaterialModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSortModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTableModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__.MatPaginatorModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButtonModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__.MatNativeDateModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInputModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatFormFieldModule, _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_19__.NgxMatDatetimePickerModule, _angular_material_components_moment_adapter__WEBPACK_IMPORTED_MODULE_20__.NgxMatMomentModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_21__.MatSelectModule],
    exports: [_schedule_component__WEBPACK_IMPORTED_MODULE_0__.ScheduleComponent]
  });
})();

/***/ }),

/***/ 3047:
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@angular-material-components/moment-adapter/fesm2020/angular-material-components-moment-adapter.mjs ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

var moment__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NGX_MAT_MOMENT_DATE_ADAPTER_OPTIONS": () => (/* binding */ NGX_MAT_MOMENT_DATE_ADAPTER_OPTIONS),
/* harmony export */   "NGX_MAT_MOMENT_DATE_ADAPTER_OPTIONS_FACTORY": () => (/* binding */ NGX_MAT_MOMENT_DATE_ADAPTER_OPTIONS_FACTORY),
/* harmony export */   "NGX_MAT_MOMENT_FORMATS": () => (/* binding */ NGX_MAT_MOMENT_FORMATS),
/* harmony export */   "NgxMatMomentAdapter": () => (/* binding */ NgxMatMomentAdapter),
/* harmony export */   "NgxMatMomentModule": () => (/* binding */ NgxMatMomentModule),
/* harmony export */   "NgxMomentDateModule": () => (/* binding */ NgxMomentDateModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 6908);
/* harmony import */ var _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-material-components/datetime-picker */ 820);







/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const moment = moment__WEBPACK_IMPORTED_MODULE_0__ || /*#__PURE__*/ (moment__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (moment__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(moment__WEBPACK_IMPORTED_MODULE_0__, 2)));
/** InjectionToken for moment date adapter to configure options. */
const NGX_MAT_MOMENT_DATE_ADAPTER_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('NGX_MAT_MOMENT_DATE_ADAPTER_OPTIONS', {
  providedIn: 'root',
  factory: NGX_MAT_MOMENT_DATE_ADAPTER_OPTIONS_FACTORY
});
/** @docs-private */
function NGX_MAT_MOMENT_DATE_ADAPTER_OPTIONS_FACTORY() {
  return {
    useUtc: false
  };
}
/** Creates an array and fills it with values. */
function range(length, valueFunction) {
  const valuesArray = Array(length);
  for (let i = 0; i < length; i++) {
    valuesArray[i] = valueFunction(i);
  }
  return valuesArray;
}
/** Adapts Moment.js Dates for use with Angular Material. */
class NgxMatMomentAdapter extends _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_2__.NgxMatDateAdapter {
  constructor(dateLocale, _options) {
    super();
    this._options = _options;
    this.setLocale(dateLocale || moment.locale());
  }
  setLocale(locale) {
    super.setLocale(locale);
    let momentLocaleData = moment.localeData(locale);
    this._localeData = {
      firstDayOfWeek: momentLocaleData.firstDayOfWeek(),
      longMonths: momentLocaleData.months(),
      shortMonths: momentLocaleData.monthsShort(),
      dates: range(31, i => this.createDate(2017, 0, i + 1).format('D')),
      longDaysOfWeek: momentLocaleData.weekdays(),
      shortDaysOfWeek: momentLocaleData.weekdaysShort(),
      narrowDaysOfWeek: momentLocaleData.weekdaysMin()
    };
  }
  getYear(date) {
    return this.clone(date).year();
  }
  getMonth(date) {
    return this.clone(date).month();
  }
  getDate(date) {
    return this.clone(date).date();
  }
  getDayOfWeek(date) {
    return this.clone(date).day();
  }
  getMonthNames(style) {
    // Moment.js doesn't support narrow month names, so we just use short if narrow is requested.
    return style == 'long' ? this._localeData.longMonths : this._localeData.shortMonths;
  }
  getDateNames() {
    return this._localeData.dates;
  }
  getDayOfWeekNames(style) {
    if (style == 'long') {
      return this._localeData.longDaysOfWeek;
    }
    if (style == 'short') {
      return this._localeData.shortDaysOfWeek;
    }
    return this._localeData.narrowDaysOfWeek;
  }
  getYearName(date) {
    return this.clone(date).format('YYYY');
  }
  getFirstDayOfWeek() {
    return this._localeData.firstDayOfWeek;
  }
  getNumDaysInMonth(date) {
    return this.clone(date).daysInMonth();
  }
  clone(date) {
    return date.clone().locale(this.locale);
  }
  createDate(year, month, date) {
    // Moment.js will create an invalid date if any of the components are out of bounds, but we
    // explicitly check each case so we can throw more descriptive errors.
    if (month < 0 || month > 11) {
      throw Error(`Invalid month index "${month}". Month index has to be between 0 and 11.`);
    }
    if (date < 1) {
      throw Error(`Invalid date "${date}". Date has to be greater than 0.`);
    }
    const result = this._createMoment({
      year,
      month,
      date
    }).locale(this.locale);
    // If the result isn't valid, the date must have been out of bounds for this month.
    if (!result.isValid()) {
      throw Error(`Invalid date "${date}" for month with index "${month}".`);
    }
    return result;
  }
  today() {
    return this._createMoment().locale(this.locale);
  }
  parse(value, parseFormat) {
    if (value && typeof value == 'string') {
      return this._createMoment(value, parseFormat, this.locale);
    }
    return value ? this._createMoment(value).locale(this.locale) : null;
  }
  format(date, displayFormat) {
    date = this.clone(date);
    if (!this.isValid(date)) {
      throw Error('MomentDateAdapter: Cannot format invalid date.');
    }
    return date.format(displayFormat);
  }
  addCalendarYears(date, years) {
    return this.clone(date).add({
      years
    });
  }
  addCalendarMonths(date, months) {
    return this.clone(date).add({
      months
    });
  }
  addCalendarDays(date, days) {
    return this.clone(date).add({
      days
    });
  }
  toIso8601(date) {
    return this.clone(date).format();
  }
  /**
   * Returns the given value if given a valid Moment or null. Deserializes valid ISO 8601 strings
   * (https://www.ietf.org/rfc/rfc3339.txt) and valid Date objects into valid Moments and empty
   * string into null. Returns an invalid date for all other values.
   */
  deserialize(value) {
    let date;
    if (value instanceof Date) {
      date = this._createMoment(value).locale(this.locale);
    } else if (this.isDateInstance(value)) {
      // Note: assumes that cloning also sets the correct locale.
      return this.clone(value);
    }
    if (typeof value === 'string') {
      if (!value) {
        return null;
      }
      date = this._createMoment(value, moment.ISO_8601).locale(this.locale);
    }
    if (date && this.isValid(date)) {
      return this._createMoment(date).locale(this.locale);
    }
    return super.deserialize(value);
  }
  isDateInstance(obj) {
    return moment.isMoment(obj);
  }
  isValid(date) {
    return this.clone(date).isValid();
  }
  invalid() {
    return moment.invalid();
  }
  getHour(date) {
    return date.hours();
  }
  getMinute(date) {
    return date.minutes();
  }
  getSecond(date) {
    return date.seconds();
  }
  setHour(date, value) {
    date.hours(value);
  }
  setMinute(date, value) {
    date.minutes(value);
  }
  setSecond(date, value) {
    date.seconds(value);
  }
  /** Creates a Moment instance while respecting the current UTC settings. */
  _createMoment(date, format, locale) {
    const {
      strict,
      useUtc
    } = this._options || {};
    return useUtc ? moment.utc(date, format, locale, strict) : moment(date, format, locale, strict);
  }
}
/** @nocollapse */
NgxMatMomentAdapter.ɵfac = function NgxMatMomentAdapter_Factory(t) {
  return new (t || NgxMatMomentAdapter)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MAT_DATE_LOCALE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](NGX_MAT_MOMENT_DATE_ADAPTER_OPTIONS, 8));
};
/** @nocollapse */
NgxMatMomentAdapter.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: NgxMatMomentAdapter,
  factory: NgxMatMomentAdapter.ɵfac
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxMatMomentAdapter, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MAT_DATE_LOCALE]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [NGX_MAT_MOMENT_DATE_ADAPTER_OPTIONS]
      }]
    }];
  }, null);
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const DEFAULT_DATE_INPUT = 'l, LTS';
const NGX_MAT_MOMENT_FORMATS = {
  parse: {
    dateInput: DEFAULT_DATE_INPUT
  },
  display: {
    dateInput: DEFAULT_DATE_INPUT,
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  }
};

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class NgxMomentDateModule {}
/** @nocollapse */
NgxMomentDateModule.ɵfac = function NgxMomentDateModule_Factory(t) {
  return new (t || NgxMomentDateModule)();
};
/** @nocollapse */
NgxMomentDateModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: NgxMomentDateModule
});
/** @nocollapse */
NgxMomentDateModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  providers: [{
    provide: _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_2__.NgxMatDateAdapter,
    useClass: NgxMatMomentAdapter,
    deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MAT_DATE_LOCALE, NGX_MAT_MOMENT_DATE_ADAPTER_OPTIONS]
  }]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxMomentDateModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      providers: [{
        provide: _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_2__.NgxMatDateAdapter,
        useClass: NgxMatMomentAdapter,
        deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MAT_DATE_LOCALE, NGX_MAT_MOMENT_DATE_ADAPTER_OPTIONS]
      }]
    }]
  }], null, null);
})();
class NgxMatMomentModule {}
/** @nocollapse */
NgxMatMomentModule.ɵfac = function NgxMatMomentModule_Factory(t) {
  return new (t || NgxMatMomentModule)();
};
/** @nocollapse */
NgxMatMomentModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: NgxMatMomentModule
});
/** @nocollapse */
NgxMatMomentModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  providers: [{
    provide: _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_2__.NGX_MAT_DATE_FORMATS,
    useValue: NGX_MAT_MOMENT_FORMATS
  }],
  imports: [NgxMomentDateModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxMatMomentModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      imports: [NgxMomentDateModule],
      providers: [{
        provide: _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_2__.NGX_MAT_DATE_FORMATS,
        useValue: NGX_MAT_MOMENT_FORMATS
      }]
    }]
  }], null, null);
})();

/*
 * Public API Surface of ngx-mat-moment-adapter
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=default-src_app_schedule_schedule_module_ts.js.map