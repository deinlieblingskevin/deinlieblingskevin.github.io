"use strict";
(self["webpackChunkhomepageApp"] = self["webpackChunkhomepageApp"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _pages_favorite_items_favorite_items_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/favorite-items/favorite-items.component */ 1149);
/* harmony import */ var _pages_iceland_page_iceland_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/iceland-page/iceland-page.component */ 8700);
/* harmony import */ var _pages_personal_personal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/personal/personal.component */ 6847);
/* harmony import */ var _pages_iceland_video_iceland_video_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/iceland-video/iceland-video.component */ 5728);
/* harmony import */ var _pages_comic_comic_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/comic/comic.component */ 4439);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);








const routes = [
    { path: '', component: _pages_personal_personal_component__WEBPACK_IMPORTED_MODULE_2__.PersonalComponent },
    { path: 'favoriteItems', component: _pages_favorite_items_favorite_items_component__WEBPACK_IMPORTED_MODULE_0__.FavoriteItemsComponent },
    { path: 'me', component: _pages_personal_personal_component__WEBPACK_IMPORTED_MODULE_2__.PersonalComponent },
    { path: 'iceland', component: _pages_iceland_page_iceland_page_component__WEBPACK_IMPORTED_MODULE_1__.IcelandPageComponent },
    { path: 'iceland-video', component: _pages_iceland_video_iceland_video_component__WEBPACK_IMPORTED_MODULE_3__.IcelandVideoComponent },
    { path: 'comic', component: _pages_comic_comic_component__WEBPACK_IMPORTED_MODULE_4__.ComicComponent },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forRoot(routes, { scrollPositionRestoration: 'disabled' }), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] }); })();


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _core_frame_app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/frame/app.component */ 174);
/* harmony import */ var _core_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/menu/menu.component */ 6070);
/* harmony import */ var _core_menu_button_menu_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/menu-button/menu-button.component */ 7209);
/* harmony import */ var _pages_pages_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/pages.module */ 8950);
/* harmony import */ var _core_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/dialog/dialog.service */ 4789);
/* harmony import */ var _core_dialog_modal_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/dialog/modal.module */ 8203);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);












class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_core_frame_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [_core_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_5__.DialogService], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule,
        _pages_pages_module__WEBPACK_IMPORTED_MODULE_4__.PagesModule,
        _core_dialog_modal_module__WEBPACK_IMPORTED_MODULE_6__.ModalModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_core_frame_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _core_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__.MenuComponent,
        _core_menu_button_menu_button_component__WEBPACK_IMPORTED_MODULE_3__.MenuButtonComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule,
        _pages_pages_module__WEBPACK_IMPORTED_MODULE_4__.PagesModule,
        _core_dialog_modal_module__WEBPACK_IMPORTED_MODULE_6__.ModalModule] }); })();


/***/ }),

/***/ 4789:
/*!***********************************************!*\
  !*** ./src/app/core/dialog/dialog.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DialogService": () => (/* binding */ DialogService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _modal_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal/modal */ 7992);


/**
 * DialogService is a helper service for showing localized dialogs.
 * Verwendung
 *
  public onClick() {
    const modalOptions: ModalOptions = { backdrop: true, size: 'lg' };
    this.dialogService.showConfirm('Hallo', 'Title', modalOptions)
  }
 */
class DialogService {
    constructor(modalService) {
        this.modalService = modalService;
    }
    /**
     * showConfirm shows a localized confirm dialog.
     * The translated texts can be overwritten in the MrModalOptions param
     * @param message {string} The message
     * @param title  {string} The title
     * @param options {MrModalOptions} Options for the config dialog
     */
    showConfirm(message, title, options = {}) {
        const mergedOptions = {
            translations: {
                yes: 'Ja',
                no: 'Nein'
            },
            ...options
        };
        return this.modalService.showConfirm(message, title, mergedOptions);
    }
    /**
     * showMessage shows a localized message dialog.
     * The translated text can be overwritten in the MrModalOptions param
     * @param message {string} The message.
     * @param title  {string} The title.
     * @param icon {'success' | 'info' | 'warning' | 'danger'} The icon, which should be displayed
     * @param options {MrModalOptions} Options for the message dialog
     */
    showMessage(message, title, icon, options) {
        const mergedOptions = {
            translations: {
                close: this.translations['general.ok']
            },
            ...options
        };
        return this.modalService.showMessage(message, title, icon, mergedOptions);
    }
}
DialogService.ɵfac = function DialogService_Factory(t) { return new (t || DialogService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_modal_modal__WEBPACK_IMPORTED_MODULE_0__.Modal)); };
DialogService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DialogService, factory: DialogService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8203:
/*!*********************************************!*\
  !*** ./src/app/core/dialog/modal.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalModule": () => (/* binding */ ModalModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _modal_modal_backdrop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal/modal-backdrop */ 1276);
/* harmony import */ var _modal_modal_window__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal/modal-window */ 800);
/* harmony import */ var _modal_message_box_window__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal/message-box-window */ 3955);
/* harmony import */ var _modal_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal/modal */ 7992);
/* harmony import */ var _modal_modal_stack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal/modal-stack */ 3786);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);
/* harmony import */ var _modal_table_modal_table_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal/table-modal/table-modal.component */ 2980);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);









class ModalModule {
}
ModalModule.ɵfac = function ModalModule_Factory(t) { return new (t || ModalModule)(); };
ModalModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: ModalModule });
ModalModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [_modal_modal__WEBPACK_IMPORTED_MODULE_3__.Modal, _modal_modal_stack__WEBPACK_IMPORTED_MODULE_4__.ModalStack], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](ModalModule, { declarations: [_modal_modal_backdrop__WEBPACK_IMPORTED_MODULE_0__.ModalBackdrop, _modal_modal_window__WEBPACK_IMPORTED_MODULE_1__.ModalWindow, _modal_message_box_window__WEBPACK_IMPORTED_MODULE_2__.MessageBoxWindow, _modal_table_modal_table_modal_component__WEBPACK_IMPORTED_MODULE_6__.TableModalComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule] }); })();


/***/ }),

/***/ 3955:
/*!*********************************************************!*\
  !*** ./src/app/core/dialog/modal/message-box-window.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessageBoxWindow": () => (/* binding */ MessageBoxWindow)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _modal_ref__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-ref */ 4181);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_directives_shortcut_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/directives/shortcut.directive */ 851);





function MessageBoxWindow_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MessageBoxWindow_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.activeModal.dismiss("Cross click")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} }
function MessageBoxWindow_div_5_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function MessageBoxWindow_div_5_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function MessageBoxWindow_div_5_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function MessageBoxWindow_div_5_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function MessageBoxWindow_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10)(1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MessageBoxWindow_div_5_span_2_Template, 2, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, MessageBoxWindow_div_5_span_3_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, MessageBoxWindow_div_5_span_4_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, MessageBoxWindow_div_5_span_5_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.icon === "success");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.icon === "info");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.icon === "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.icon === "danger");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx_r1.getDescription(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
function MessageBoxWindow_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 26);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx_r2.getDescription(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
function MessageBoxWindow_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 27)(1, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MessageBoxWindow_div_7_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r11.confirm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MessageBoxWindow_div_7_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r13.dismiss()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.translations.yes);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r3.translations.no, "");
} }
function MessageBoxWindow_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 30)(1, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MessageBoxWindow_div_8_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r14.close()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r4.translations.close);
} }
class MessageBoxWindow {
    constructor(activeModal, sanitized) {
        this.activeModal = activeModal;
        this.sanitized = sanitized;
        this.translations = {
            close: 'Schließen',
            no: 'Nein',
            yes: 'Ja'
        };
    }
    getDescription() {
        return this.sanitized.bypassSecurityTrustHtml(this.description);
    }
    dismiss() {
        this.activeModal.dismiss(false);
    }
    confirm() {
        this.activeModal.close(true);
    }
    close() {
        this.activeModal.close();
    }
}
MessageBoxWindow.ɵfac = function MessageBoxWindow_Factory(t) { return new (t || MessageBoxWindow)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_modal_ref__WEBPACK_IMPORTED_MODULE_0__.ActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.DomSanitizer)); };
MessageBoxWindow.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MessageBoxWindow, selectors: [["app-modal-content"]], decls: 9, vars: 6, consts: [[1, "modal-header"], [1, "modal-title"], ["type", "button", "class", "close", "aria-label", "Close", 3, "click", 4, "ngIf"], [1, "modal-body"], ["class", "row", 4, "ngIf"], [3, "innerHTML", 4, "ngIf"], ["class", "modal-footer center-items", 4, "ngIf"], ["class", "modal-footer", 4, "ngIf"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "row"], [1, "col-1"], ["style", "color: #BDC700;", 4, "ngIf"], ["style", "color: #bfdaec", 4, "ngIf"], ["style", "color: #ef6500", 4, "ngIf"], ["style", "color: #d4003c", 4, "ngIf"], [1, "col-11"], [2, "margin-left", "15px", 3, "innerHTML"], [2, "color", "#BDC700"], [1, "msb-icon", "fa", "fa-check-circle"], [2, "color", "#bfdaec"], [1, "msb-icon", "fa", "fa-info-circle"], [2, "color", "#ef6500"], [1, "msb-icon", "fa", "fa-exclamation-triangle"], [2, "color", "#d4003c"], [1, "msb-icon", "fa", "fa-times-circle"], [3, "innerHTML"], [1, "modal-footer", "center-items"], ["type", "button", "clickShortCutKey", "KeyJ", 1, "primary", 3, "click"], ["type", "button", "clickShortCutKey", "KeyN", 3, "click"], [1, "modal-footer"], ["type", "button", 3, "click"]], template: function MessageBoxWindow_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, MessageBoxWindow_button_3_Template, 3, 0, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, MessageBoxWindow_div_5_Template, 8, 5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, MessageBoxWindow_div_6_Template, 1, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, MessageBoxWindow_div_7_Template, 5, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, MessageBoxWindow_div_8_Template, 3, 1, "div", 7);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.closeButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.icon);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.icon);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.confirmButton && ctx.dismissButton && !ctx.closeButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.confirmButton && !ctx.dismissButton && ctx.closeButton);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _shared_directives_shortcut_directive__WEBPACK_IMPORTED_MODULE_1__.ShortCutDirective], styles: [".msb-icon[_ngcontent-%COMP%] {\n\t\t\t\tfont-size: 50px;\n\t\t\t}\n\t\t\t.modal-body[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t}"] });


/***/ }),

/***/ 1276:
/*!*****************************************************!*\
  !*** ./src/app/core/dialog/modal/modal-backdrop.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalBackdrop": () => (/* binding */ ModalBackdrop)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class ModalBackdrop {
}
ModalBackdrop.ɵfac = function ModalBackdrop_Factory(t) { return new (t || ModalBackdrop)(); };
ModalBackdrop.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalBackdrop, selectors: [["modal-backdrop"]], hostVars: 2, hostBindings: function ModalBackdrop_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("modal-backdrop fade show" + (ctx.backdropClass ? " " + ctx.backdropClass : ""));
    } }, inputs: { backdropClass: "backdropClass" }, decls: 0, vars: 0, template: function ModalBackdrop_Template(rf, ctx) { }, encapsulation: 2 });


/***/ }),

/***/ 1774:
/*!************************************************************!*\
  !*** ./src/app/core/dialog/modal/modal-dismiss-reasons.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalDismissReasons": () => (/* binding */ ModalDismissReasons)
/* harmony export */ });
var ModalDismissReasons;
(function (ModalDismissReasons) {
    ModalDismissReasons[ModalDismissReasons["BACKDROP_CLICK"] = 0] = "BACKDROP_CLICK";
    ModalDismissReasons[ModalDismissReasons["ESC"] = 1] = "ESC";
})(ModalDismissReasons || (ModalDismissReasons = {}));


/***/ }),

/***/ 4181:
/*!************************************************!*\
  !*** ./src/app/core/dialog/modal/modal-ref.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActiveModal": () => (/* binding */ ActiveModal),
/* harmony export */   "ContentRef": () => (/* binding */ ContentRef),
/* harmony export */   "ModalRef": () => (/* binding */ ModalRef)
/* harmony export */ });
class ContentRef {
    constructor(nodes, viewRef, componentRef) {
        this.nodes = nodes;
        this.viewRef = viewRef;
        this.componentRef = componentRef;
    }
}
/**
 * A reference to an active (currently opened) modal. Instances of this class
 * can be injected into components passed as modal content.
 */
class ActiveModal {
    /**
     * Can be used to close a modal, passing an optional result.
     */
    close(result) { }
    /**
     * Can be used to dismiss a modal, passing an optional reason.
     */
    dismiss(reason) { }
}
/**
 * A reference to a newly opened modal.
 */
class ModalRef {
    constructor(_windowCmptRef, _contentRef, _backdropCmptRef, _beforeDismiss) {
        this._windowCmptRef = _windowCmptRef;
        this._contentRef = _contentRef;
        this._backdropCmptRef = _backdropCmptRef;
        this._beforeDismiss = _beforeDismiss;
        _windowCmptRef.instance.dismissEvent.subscribe((reason) => { this.dismiss(reason); });
        this.result = new Promise((resolve, reject) => {
            this._resolve = resolve;
            this._reject = reject;
        });
        this.result.then(null, () => { });
    }
    /**
     * The instance of component used as modal's content.
     * Undefined when a TemplateRef is used as modal's content.
     */
    get componentInstance() {
        if (this._contentRef.componentRef) {
            return this._contentRef.componentRef.instance;
        }
    }
    // only needed to keep TS1.8 compatibility
    set componentInstance(instance) { }
    /**
     * Can be used to close a modal, passing an optional result.
     */
    close(result) {
        if (this._windowCmptRef) {
            this._resolve(result);
            this._removeModalElements();
        }
    }
    /**
     * Can be used to dismiss a modal, passing an optional reason.
     */
    dismiss(reason) {
        if (this._windowCmptRef) {
            if (!this._beforeDismiss || this._beforeDismiss() !== false) {
                this._reject(reason);
                this._removeModalElements();
            }
        }
    }
    _removeModalElements() {
        const windowNativeEl = this._windowCmptRef.location.nativeElement;
        windowNativeEl.parentNode.removeChild(windowNativeEl);
        this._windowCmptRef.destroy();
        if (this._backdropCmptRef) {
            const backdropNativeEl = this._backdropCmptRef.location.nativeElement;
            backdropNativeEl.parentNode.removeChild(backdropNativeEl);
            this._backdropCmptRef.destroy();
        }
        if (this._contentRef && this._contentRef.viewRef) {
            this._contentRef.viewRef.destroy();
        }
        this._windowCmptRef = null;
        this._backdropCmptRef = null;
        this._contentRef = null;
    }
}


/***/ }),

/***/ 3786:
/*!**************************************************!*\
  !*** ./src/app/core/dialog/modal/modal-stack.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalStack": () => (/* binding */ ModalStack)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _modal_backdrop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-backdrop */ 1276);
/* harmony import */ var _modal_window__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-window */ 800);
/* harmony import */ var _modal_ref__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-ref */ 4181);

// tslint:disable-next-line:import-spacing





class ModalStack {
    constructor(_applicationRef, _injector, _componentFactoryResolver, document) {
        this._applicationRef = _applicationRef;
        this._injector = _injector;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._windowAttributes = ['backdrop', 'centered', 'keyboard', 'size', 'windowClass'];
        this._backdropAttributes = ['backdropClass'];
        this._document = document;
    }
    open(moduleCFR, contentInjector, content, options) {
        const containerEl = this.isDefined(options.container) ? this._document.querySelector(options.container) : this._document.body;
        if (!containerEl) {
            throw new Error(`The specified modal container "${options.container || 'body'}" was not found in the DOM.`);
        }
        const activeModal = new _modal_ref__WEBPACK_IMPORTED_MODULE_2__.ActiveModal();
        const contentRef = this._getContentRef(moduleCFR, options.injector || contentInjector, content, activeModal);
        const backdropCmptRef = options.backdrop !== false ? this._attachBackdrop(containerEl) : null;
        const windowCmptRef = this._attachWindowComponent(containerEl, contentRef);
        const ngbModalRef = new _modal_ref__WEBPACK_IMPORTED_MODULE_2__.ModalRef(windowCmptRef, contentRef, backdropCmptRef, options.beforeDismiss);
        activeModal.close = (result) => { ngbModalRef.close(result); };
        activeModal.dismiss = (reason) => { ngbModalRef.dismiss(reason); };
        this._applyWindowOptions(windowCmptRef.instance, options);
        if (backdropCmptRef && backdropCmptRef.instance) {
            this._applyBackdropOptions(backdropCmptRef.instance, options);
        }
        return ngbModalRef;
    }
    _attachBackdrop(containerEl) {
        const backdropFactory = this._componentFactoryResolver.resolveComponentFactory(_modal_backdrop__WEBPACK_IMPORTED_MODULE_0__.ModalBackdrop);
        const backdropCmptRef = backdropFactory.create(this._injector);
        this._applicationRef.attachView(backdropCmptRef.hostView);
        containerEl.appendChild(backdropCmptRef.location.nativeElement);
        return backdropCmptRef;
    }
    _attachWindowComponent(containerEl, contentRef) {
        const windowFactory = this._componentFactoryResolver.resolveComponentFactory(_modal_window__WEBPACK_IMPORTED_MODULE_1__.ModalWindow);
        const windowCmptRef = windowFactory.create(this._injector, contentRef.nodes);
        this._applicationRef.attachView(windowCmptRef.hostView);
        containerEl.appendChild(windowCmptRef.location.nativeElement);
        return windowCmptRef;
    }
    _applyWindowOptions(windowInstance, options) {
        this._windowAttributes.forEach((optionName) => {
            if (this.isDefined(options[optionName])) {
                windowInstance[optionName] = options[optionName];
            }
        });
    }
    _applyBackdropOptions(backdropInstance, options) {
        this._backdropAttributes.forEach((optionName) => {
            if (this.isDefined(options[optionName])) {
                backdropInstance[optionName] = options[optionName];
            }
        });
    }
    _getContentRef(moduleCFR, contentInjector, content, context) {
        if (!content) {
            return new _modal_ref__WEBPACK_IMPORTED_MODULE_2__.ContentRef([]);
        }
        else if (content instanceof _angular_core__WEBPACK_IMPORTED_MODULE_3__.TemplateRef) {
            return this._createFromTemplateRef(content, context);
        }
        else if (this.isString(content)) {
            return this._createFromString(content);
        }
        else {
            return this._createFromComponent(moduleCFR, contentInjector, content, context);
        }
    }
    _createFromTemplateRef(content, context) {
        const viewRef = content.createEmbeddedView(context);
        this._applicationRef.attachView(viewRef);
        return new _modal_ref__WEBPACK_IMPORTED_MODULE_2__.ContentRef([viewRef.rootNodes], viewRef);
    }
    _createFromString(content) {
        const component = this._document.createTextNode(`${content}`);
        return new _modal_ref__WEBPACK_IMPORTED_MODULE_2__.ContentRef([[component]]);
    }
    _createFromComponent(moduleCFR, contentInjector, content, context) {
        const contentCmptFactory = moduleCFR.resolveComponentFactory(content);
        const modalContentInjector = _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injector.create([{ provide: _modal_ref__WEBPACK_IMPORTED_MODULE_2__.ActiveModal, useValue: context }], contentInjector);
        const componentRef = contentCmptFactory.create(modalContentInjector);
        this._applicationRef.attachView(componentRef.hostView);
        return new _modal_ref__WEBPACK_IMPORTED_MODULE_2__.ContentRef([[componentRef.location.nativeElement]], componentRef.hostView, componentRef);
    }
    isDefined(value) {
        return value !== undefined && value !== null;
    }
    isString(value) {
        return typeof value === 'string';
    }
}
ModalStack.ɵfac = function ModalStack_Factory(t) { return new (t || ModalStack)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ApplicationRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ComponentFactoryResolver), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT)); };
ModalStack.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ModalStack, factory: ModalStack.ɵfac });


/***/ }),

/***/ 800:
/*!***************************************************!*\
  !*** ./src/app/core/dialog/modal/modal-window.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalWindow": () => (/* binding */ ModalWindow)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _modal_dismiss_reasons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-dismiss-reasons */ 1774);

// tslint:disable-next-line:import-spacing



const _c0 = ["*"];
class ModalWindow {
    constructor(document, _elRef, _renderer) {
        this._elRef = _elRef;
        this._renderer = _renderer;
        this.backdrop = true;
        this.keyboard = true;
        // tslint:disable-next-line:no-output-rename
        this.dismissEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this._document = document;
    }
    backdropClick($event) {
        if (this.backdrop === true && this._elRef.nativeElement === $event.target) {
            this.dismiss(_modal_dismiss_reasons__WEBPACK_IMPORTED_MODULE_0__.ModalDismissReasons.BACKDROP_CLICK);
        }
    }
    escKey($event) {
        if (this.keyboard && !$event.defaultPrevented) {
            this.dismiss(_modal_dismiss_reasons__WEBPACK_IMPORTED_MODULE_0__.ModalDismissReasons.ESC);
        }
    }
    dismiss(reason) { this.dismissEvent.emit(reason); }
    ngOnInit() {
        this._elWithFocus = this._document.activeElement;
        this._renderer.addClass(this._document.body, 'modal-open');
    }
    ngAfterViewInit() {
        if (!this._elRef.nativeElement.contains(document.activeElement)) {
            this._elRef.nativeElement['focus'].apply(this._elRef.nativeElement, []);
        }
    }
    ngOnDestroy() {
        const body = this._document.body;
        const elWithFocus = this._elWithFocus;
        let elementToFocus;
        if (elWithFocus && elWithFocus['focus'] && body.contains(elWithFocus)) {
            elementToFocus = elWithFocus;
        }
        else {
            elementToFocus = body;
        }
        elementToFocus['focus'].apply(elementToFocus, []);
        this._elWithFocus = null;
        this._renderer.removeClass(body, 'modal-open');
    }
}
ModalWindow.ɵfac = function ModalWindow_Factory(t) { return new (t || ModalWindow)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2)); };
ModalWindow.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ModalWindow, selectors: [["modal-window"]], hostAttrs: ["role", "dialog", "tabindex", "-1"], hostVars: 2, hostBindings: function ModalWindow_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup.esc", function ModalWindow_keyup_esc_HostBindingHandler($event) { return ctx.escKey($event); })("click", function ModalWindow_click_HostBindingHandler($event) { return ctx.backdropClick($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("modal fade show d-block" + (ctx.windowClass ? " " + ctx.windowClass : ""));
    } }, inputs: { backdrop: "backdrop", centered: "centered", keyboard: "keyboard", size: "size", windowClass: "windowClass" }, outputs: { dismissEvent: "dismiss" }, ngContentSelectors: _c0, decls: 3, vars: 2, consts: [["role", "document"], [1, "modal-content"]], template: function ModalWindow_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("modal-dialog" + (ctx.size ? " modal-" + ctx.size : "") + (ctx.centered ? " modal-dialog-centered" : ""));
    } }, encapsulation: 2 });


/***/ }),

/***/ 7992:
/*!********************************************!*\
  !*** ./src/app/core/dialog/modal/modal.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Modal": () => (/* binding */ Modal),
/* harmony export */   "modalOptionDefaultCenter": () => (/* binding */ modalOptionDefaultCenter),
/* harmony export */   "modalOptionExtraLargeAndCenter": () => (/* binding */ modalOptionExtraLargeAndCenter),
/* harmony export */   "modalOptionLargeAndCenter": () => (/* binding */ modalOptionLargeAndCenter)
/* harmony export */ });
/* harmony import */ var _message_box_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message-box-window */ 3955);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _modal_stack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-stack */ 3786);



/**
 * default settings for modals
 */
const modalOptionDefaultCenter = {
    size: 'sm',
    centered: true,
    backdrop: 'static'
};
/**
 * Settings for large and center modals
 */
const modalOptionLargeAndCenter = {
    size: 'lg',
    centered: true,
    backdrop: 'static'
};
/**
 * Settings for extra large and center modals
 */
const modalOptionExtraLargeAndCenter = {
    size: 'full',
    centered: true,
    backdrop: 'static'
};
/**
 *
  const modalRef=this._modal.open(OperationCountInSequenceModalComponent,modalOptionDefaultCenter);
modalRef.componentInstance.xxxx = xxxx
 */
class Modal {
    constructor(_moduleCFR, _injector, _modalStack) {
        this._moduleCFR = _moduleCFR;
        this._injector = _injector;
        this._modalStack = _modalStack;
    }
    open(content, options = {}) {
        return this._modalStack.open(this._moduleCFR, this._injector, content, options);
    }
    showConfirm(message, title, options = {}) {
        options.backdrop = 'static';
        const modalRef = this._modalStack.open(this._moduleCFR, this._injector, _message_box_window__WEBPACK_IMPORTED_MODULE_0__.MessageBoxWindow, options);
        const msbWnd = modalRef.componentInstance;
        msbWnd.description = message;
        msbWnd.title = title;
        msbWnd.confirmButton = true;
        msbWnd.dismissButton = true;
        if (options.translations && options.translations.yes) {
            msbWnd.translations.yes = options.translations.yes;
        }
        if (options.translations && options.translations.no) {
            msbWnd.translations.no = options.translations.no;
        }
        return modalRef.result;
    }
    showMessage(message, title, icon, options) {
        if (!options) {
            options = {};
        }
        const modalRef = this._modalStack.open(this._moduleCFR, this._injector, _message_box_window__WEBPACK_IMPORTED_MODULE_0__.MessageBoxWindow, options);
        const msbWnd = modalRef.componentInstance;
        msbWnd.description = message;
        msbWnd.title = title;
        msbWnd.closeButton = true;
        msbWnd.icon = icon;
        if (options.translations && options.translations.close) {
            msbWnd.translations.close = options.translations.close;
        }
        return modalRef.result;
    }
}
Modal.ɵfac = function Modal_Factory(t) { return new (t || Modal)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ComponentFactoryResolver), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_modal_stack__WEBPACK_IMPORTED_MODULE_1__.ModalStack)); };
Modal.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: Modal, factory: Modal.ɵfac });


/***/ }),

/***/ 2980:
/*!************************************************************************!*\
  !*** ./src/app/core/dialog/modal/table-modal/table-modal.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TableModalComponent": () => (/* binding */ TableModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _modal_ref__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modal-ref */ 4181);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);



function TableModalComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TableModalComponent_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.activeModal.dismiss("Cross click")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} }
function TableModalComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r4, "");
} }
class TableModalComponent {
    constructor(activeModal) {
        this.activeModal = activeModal;
        this.closeButton = true;
    }
    close() {
        this.activeModal.close();
    }
}
TableModalComponent.ɵfac = function TableModalComponent_Factory(t) { return new (t || TableModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_modal_ref__WEBPACK_IMPORTED_MODULE_0__.ActiveModal)); };
TableModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TableModalComponent, selectors: [["table-modal"]], decls: 10, vars: 2, consts: [[1, "modal-header"], [1, "modal-title"], ["type", "button", "class", "close", "aria-label", "Close", 3, "click", 4, "ngIf"], [1, "modal-body"], [4, "ngFor", "ngForOf"], [1, "modal-footer"], ["type", "button", 3, "click"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"]], template: function TableModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Liste");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TableModalComponent_button_3_Template, 3, 0, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3)(5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, TableModalComponent_span_6_Template, 3, 1, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5)(8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TableModalComponent_Template_button_click_8_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Schlie\u00DFen");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.closeButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.list);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJsZS1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 174:
/*!*********************************************!*\
  !*** ./src/app/core/frame/app.component.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../menu/menu.component */ 6070);
/* harmony import */ var _menu_button_menu_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../menu-button/menu-button.component */ 7209);





class AppComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        this.router.events.subscribe((ev) => {
            if (ev instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationEnd) {
                window.scrollTo(0, 0);
            }
        });
    }
    showMenuChanged(event) {
        this.showMenu = event;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 2, consts: [[3, "showMenu", "showMenuChanged"], [1, "body-background"], [1, "hex-background"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-menu", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("showMenuChanged", function AppComponent_Template_app_menu_showMenuChanged_0_listener($event) { return ctx.showMenuChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "app-menu-button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("showMenuChanged", function AppComponent_Template_app_menu_button_showMenuChanged_1_listener($event) { return ctx.showMenuChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("showMenu", ctx.showMenu);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("showMenu", ctx.showMenu);
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _menu_menu_component__WEBPACK_IMPORTED_MODULE_0__.MenuComponent, _menu_button_menu_button_component__WEBPACK_IMPORTED_MODULE_1__.MenuButtonComponent], styles: [".row[class][_ngcontent-%COMP%] {\n  margin-left: 30px;\n  margin-right: 30px;\n}\n\n.row.row-slim[_ngcontent-%COMP%] {\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n}\n\n.col-slim[_ngcontent-%COMP%] {\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.container-fluid[_ngcontent-%COMP%] {\n  padding-top: 30px;\n}\n\n.body-background[_ngcontent-%COMP%] {\n  z-index: -2;\n  position: fixed;\n  height: 120%;\n  width: 100%;\n  top: 0;\n  background: var(--killer-bg-gradient);\n  background-position: -17px;\n  background-size: 120%;\n}\n\n.hex-background[_ngcontent-%COMP%] {\n  z-index: -1;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  background-image: var(--killer-bg-hex);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0EsMEJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7QUFDRjs7QUFFQztFQUVFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0VBQ0EscUNBQUE7RUFDQSwwQkFBQTtFQUNBLHFCQUFBO0FBQUg7O0FBR0M7RUFFQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSxzQ0FBQTtBQURGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3dbY2xhc3NdIHtcclxuICBtYXJnaW4tbGVmdDogMzBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi5yb3cucm93LXNsaW0ge1xyXG4gIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jb2wtc2xpbSB7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5jb250YWluZXItZmx1aWQge1xyXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xyXG59XHJcblxyXG4gLmJvZHktYmFja2dyb3VuZFxyXG4ge1xyXG4gICB6LWluZGV4Oi0yO1xyXG4gICBwb3NpdGlvbjpmaXhlZDtcclxuICAgaGVpZ2h0OiAxMjAlO1xyXG4gICB3aWR0aDoxMDAlO1xyXG4gICB0b3A6MDtcclxuICAgYmFja2dyb3VuZDogdmFyKC0ta2lsbGVyLWJnLWdyYWRpZW50KTtcclxuICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE3cHg7IC8vIFRPRE8gYW5pbWF0aW9uXHJcbiAgIGJhY2tncm91bmQtc2l6ZTogMTIwJTtcclxuIH1cclxuXHJcbiAuaGV4LWJhY2tncm91bmRcclxuIHsgICBcclxuICB6LWluZGV4Oi0xO1xyXG4gIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDoxMDAlO1xyXG4gIHRvcDowO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHZhcigtLWtpbGxlci1iZy1oZXgpO1xyXG4gfSJdfQ== */"] });


/***/ }),

/***/ 7209:
/*!***********************************************************!*\
  !*** ./src/app/core/menu-button/menu-button.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuButtonComponent": () => (/* binding */ MenuButtonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);



const _c0 = function (a0) { return { "opened": a0 }; };
const _c1 = function (a0) { return { "active": a0 }; };
class MenuButtonComponent {
    constructor() {
        this.showMenuChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnInit() {
    }
    toggleMenue() {
        this.showMenu = !this.showMenu;
        this.showMenuChanged.emit(this.showMenu);
    }
}
MenuButtonComponent.ɵfac = function MenuButtonComponent_Factory(t) { return new (t || MenuButtonComponent)(); };
MenuButtonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuButtonComponent, selectors: [["app-menu-button"]], inputs: { showMenu: "showMenu" }, outputs: { showMenuChanged: "showMenuChanged" }, decls: 6, vars: 7, consts: [[1, "btn-menu", 3, "ngClass", "click"], ["width", "70", "height", "70", "viewBox", "0 0 100 100"], ["d", "M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058", 1, "close-button", "line1"], ["d", "M 20,50 H 80", 1, "close-button", "line2"], ["d", "M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942", 1, "close-button", "line3"], [1, "menu-bg-animation", 3, "ngClass"]], template: function MenuButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuButtonComponent_Template_button_click_0_listener() { return ctx.toggleMenue(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 2)(3, "path", 3)(4, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.showMenu));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", ctx.showMenu);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, ctx.showMenu));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass], styles: [".btn-menu[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  margin: 0;\n  padding: 0;\n  z-index: 9999;\n}\n.btn-menu[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  flex: 1;\n  z-index: 9999;\n}\n.menu-bg-animation[_ngcontent-%COMP%] {\n  background-color: var(--menu-default-bg-color);\n  width: 90px;\n  height: 90px;\n  opacity: 0.8;\n  transition: all 0.7s ease;\n  top: -12px;\n  right: -12px;\n  position: fixed;\n  z-index: 99 !important;\n  border-radius: 100%;\n}\n@media only screen and (max-width: 768px) {\n  .menu-bg-animation.active[_ngcontent-%COMP%] {\n    transform: scale(25);\n    opacity: 1;\n    background-color: var(--primary-color);\n  }\n}\n@media only screen and (min-width: 768px) {\n  .menu-bg-animation.active[_ngcontent-%COMP%] {\n    transform: scale(50);\n    opacity: 1;\n    background-color: var(--primary-color);\n  }\n}\n.close-button[_ngcontent-%COMP%] {\n  fill: none;\n  stroke: var(--primary-color);\n  stroke-width: 1;\n  transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1), stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.opened[_ngcontent-%COMP%]   .close-button[_ngcontent-%COMP%] {\n  stroke: var(--menu-default-bg-color);\n}\n.line1[_ngcontent-%COMP%] {\n  stroke-dasharray: 60 207;\n  stroke-width: 6;\n}\n.line2[_ngcontent-%COMP%] {\n  stroke-dasharray: 60 60;\n  stroke-width: 6;\n}\n.line3[_ngcontent-%COMP%] {\n  stroke-dasharray: 60 207;\n  stroke-width: 6;\n}\n.opened[_ngcontent-%COMP%]   .line1[_ngcontent-%COMP%] {\n  stroke-dasharray: 90 207;\n  stroke-dashoffset: -134;\n  stroke-width: 6;\n}\n.opened[_ngcontent-%COMP%]   .line2[_ngcontent-%COMP%] {\n  stroke-dasharray: 1 60;\n  stroke-dashoffset: -30;\n  stroke-width: 6;\n}\n.opened[_ngcontent-%COMP%]   .line3[_ngcontent-%COMP%] {\n  stroke-dasharray: 90 207;\n  stroke-dashoffset: -134;\n  stroke-width: 6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUtYnV0dG9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QUFDRjtBQUNFO0VBQ0UsT0FBQTtFQUNBLGFBQUE7QUFDSjtBQUlBO0VBQ0UsOENBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFERjtBQUdFO0VBQ0U7SUFDRSxvQkFBQTtJQUNBLFVBQUE7SUFDQSxzQ0FBQTtFQURKO0FBQ0Y7QUFJRTtFQUNFO0lBQ0Usb0JBQUE7SUFDQSxVQUFBO0lBQ0Esc0NBQUE7RUFGSjtBQUNGO0FBT0E7RUFDRSxVQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0VBQ0EscUhBQUE7QUFKRjtBQVFBO0VBQ0Usb0NBQUE7QUFMRjtBQVFBO0VBQ0Usd0JBQUE7RUFDQSxlQUFBO0FBTEY7QUFRQTtFQUNFLHVCQUFBO0VBQ0EsZUFBQTtBQUxGO0FBUUE7RUFDRSx3QkFBQTtFQUNBLGVBQUE7QUFMRjtBQVFBO0VBQ0Usd0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUFMRjtBQVFBO0VBQ0Usc0JBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUFMRjtBQVFBO0VBQ0Usd0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUFMRiIsImZpbGUiOiJtZW51LWJ1dHRvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4tbWVudSB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luOjA7XHJcbiAgcGFkZGluZzogMDtcclxuICB6LWluZGV4OiA5OTk5O1xyXG5cclxuICAmIHN2ZyB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgei1pbmRleDogOTk5OTtcclxuICB9XHJcbn1cclxuXHJcblxyXG4ubWVudS1iZy1hbmltYXRpb24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lbnUtZGVmYXVsdC1iZy1jb2xvcik7XHJcbiAgd2lkdGg6IDkwcHg7XHJcbiAgaGVpZ2h0OiA5MHB4O1xyXG4gIG9wYWNpdHk6IDAuODtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjdzIGVhc2U7XHJcbiAgdG9wOiAtMTJweDtcclxuICByaWdodDogLTEycHg7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHotaW5kZXg6IDk5ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgJi5hY3RpdmUge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDI1KTtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAmLmFjdGl2ZSB7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoNTApO1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG4uY2xvc2UtYnV0dG9uIHtcclxuICBmaWxsOiBub25lO1xyXG4gIHN0cm9rZTogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgc3Ryb2tlLXdpZHRoOiAxO1xyXG4gIHRyYW5zaXRpb246IHN0cm9rZS1kYXNoYXJyYXkgNjAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSxcclxuICAgIHN0cm9rZS1kYXNob2Zmc2V0IDYwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XHJcbn1cclxuXHJcbi5vcGVuZWQgLmNsb3NlLWJ1dHRvbiB7XHJcbiAgc3Ryb2tlOiB2YXIoLS1tZW51LWRlZmF1bHQtYmctY29sb3IpO1xyXG59XHJcblxyXG4ubGluZTEge1xyXG4gIHN0cm9rZS1kYXNoYXJyYXk6IDYwIDIwNztcclxuICBzdHJva2Utd2lkdGg6IDY7XHJcbn1cclxuXHJcbi5saW5lMiB7XHJcbiAgc3Ryb2tlLWRhc2hhcnJheTogNjAgNjA7XHJcbiAgc3Ryb2tlLXdpZHRoOiA2O1xyXG59XHJcblxyXG4ubGluZTMge1xyXG4gIHN0cm9rZS1kYXNoYXJyYXk6IDYwIDIwNztcclxuICBzdHJva2Utd2lkdGg6IDY7XHJcbn1cclxuXHJcbi5vcGVuZWQgLmxpbmUxIHtcclxuICBzdHJva2UtZGFzaGFycmF5OiA5MCAyMDc7XHJcbiAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0xMzQ7XHJcbiAgc3Ryb2tlLXdpZHRoOiA2O1xyXG59XHJcblxyXG4ub3BlbmVkIC5saW5lMiB7XHJcbiAgc3Ryb2tlLWRhc2hhcnJheTogMSA2MDtcclxuICBzdHJva2UtZGFzaG9mZnNldDogLTMwO1xyXG4gIHN0cm9rZS13aWR0aDogNjtcclxufVxyXG5cclxuLm9wZW5lZCAubGluZTMge1xyXG4gIHN0cm9rZS1kYXNoYXJyYXk6IDkwIDIwNztcclxuICBzdHJva2UtZGFzaG9mZnNldDogLTEzNDtcclxuICBzdHJva2Utd2lkdGg6IDY7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 6070:
/*!*********************************************!*\
  !*** ./src/app/core/menu/menu.component.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuComponent": () => (/* binding */ MenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);




const _c0 = function (a0) { return { "hide": a0 }; };
class MenuComponent {
    constructor() {
        this.showMenuChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnInit() {
    }
    toggleMenue() {
        this.showMenu = !this.showMenu;
        this.showMenuChanged.emit(this.showMenu);
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(); };
MenuComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-menu"]], inputs: { showMenu: "showMenu" }, outputs: { showMenuChanged: "showMenuChanged" }, decls: 13, vars: 3, consts: [[1, "sidebar", 3, "ngClass"], [3, "click"], ["routerLink", "/me", 1, "menu"], ["routerLink", "/favoriteItems", 1, "menu"], ["routerLink", "/iceland", 1, "menu"], ["routerLink", "/iceland-video", 1, "menu"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_div_click_1_listener() { return ctx.toggleMenue(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Who i am!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_div_click_4_listener() { return ctx.toggleMenue(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "What i like!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_div_click_7_listener() { return ctx.toggleMenue(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "My Iceland Map!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_div_click_10_listener() { return ctx.toggleMenue(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "My Video from Iceland");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, !ctx.showMenu));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref], styles: [".sidebar[_ngcontent-%COMP%] {\n  position: fixed;\n  padding-top: 30px;\n  height: 90vH;\n  z-index: 999;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  flex-direction: column;\n  transition: 0.8s;\n  opacity: 100;\n  visibility: visible;\n}\n\n.hide[_ngcontent-%COMP%] {\n  transition: 0.1s;\n  opacity: 0;\n  visibility: hidden;\n}\n\n.sidebar[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  color: var(--menu-text-color);\n  font-weight: lighter;\n  font-size: min(10vw, 70px);\n  mix-blend-mode: luminosity;\n}\n\n.sidebar[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n  color: var(--menu-text-color-hover);\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUdBO0VBQ0UsNkJBQUE7RUFDQSxvQkFBQTtFQUNBLDBCQUFBO0VBQ0EsMEJBQUE7QUFBRjs7QUFHQTtFQUNFLG1DQUFBO0VBQ0EscUJBQUE7QUFBRiIsImZpbGUiOiJtZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGViYXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBwYWRkaW5nLXRvcDogMzBweDtcclxuICBoZWlnaHQ6IDkwdkg7XHJcbiAgei1pbmRleDogOTk5O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHRyYW5zaXRpb246IDAuOHM7XHJcbiAgb3BhY2l0eTogMTAwO1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuXHJcbi5oaWRlIHtcclxuICB0cmFuc2l0aW9uOiAwLjFzO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG5cclxufVxyXG5cclxuLnNpZGViYXI+ZGl2PmEge1xyXG4gIGNvbG9yOiB2YXIoLS1tZW51LXRleHQtY29sb3IpO1xyXG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gIGZvbnQtc2l6ZTogdW5xdW90ZShcIm1pbigxMHZ3LCA3MHB4KVwiKTtcclxuICBtaXgtYmxlbmQtbW9kZTogbHVtaW5vc2l0eTtcclxufVxyXG5cclxuLnNpZGViYXI+ZGl2PmE6aG92ZXIge1xyXG4gIGNvbG9yOiB2YXIoLS1tZW51LXRleHQtY29sb3ItaG92ZXIpO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufSJdfQ== */"] });


/***/ }),

/***/ 4439:
/*!************************************************!*\
  !*** ./src/app/pages/comic/comic.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComicComponent": () => (/* binding */ ComicComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_directives_scroll_percent_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/directives/scroll-percent.directive */ 4838);



function ComicComponent_div_76_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("elementTopVisible", function ComicComponent_div_76_Template_div_elementTopVisible_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const index_r2 = restoredCtx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.handleBg(index_r2)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function () { return []; };
class ComicComponent {
    constructor() { }
    ngOnInit() {
    }
    handleBg(index) {
        const element = document.getElementsByClassName('comic-strip')[index];
        element.classList.remove('cloak');
    }
}
ComicComponent.ɵfac = function ComicComponent_Factory(t) { return new (t || ComicComponent)(); };
ComicComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ComicComponent, selectors: [["app-comic"]], decls: 79, vars: 2, consts: [[1, "comic-struct", 2, "max-width", "1200px", "overflow", "hidden"], [1, "row"], [1, "comic-strip", "cloak", "col-1"], [2, "height", "100%", "width", "100%"], [1, "sunburst"], [1, "outer"], [1, "comic-strip", "cloak", "col-2"], [1, "bubbles"], [1, "bubble"], [1, "comic-strip", "cloak", "col-3"], [1, "row-2"], [1, "comic-strip", "col-1", "row"], ["style", "height: 100vH;", "scrollPercent", "", 3, "elementTopVisible", 4, "ngFor", "ngForOf"], [2, "height", "100vH", "width", "100%", "max-width", "1200px", "display", "flex", "justify-content", "center", "padding-top", "40%"], ["scrollPercent", "", 2, "height", "100vH", 3, "elementTopVisible"]], template: function ComicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "b")(7, "b")(8, "b")(9, "b")(10, "b")(11, "b")(12, "b")(13, "b")(14, "b")(15, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 6)(17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "div", 8)(19, "div", 8)(20, "div", 8)(21, "div", 8)(22, "div", 8)(23, "div", 8)(24, "div", 8)(25, "div", 8)(26, "div", 8)(27, "div", 8)(28, "div", 8)(29, "div", 8)(30, "div", 8)(31, "div", 8)(32, "div", 8)(33, "div", 8)(34, "div", 8)(35, "div", 8)(36, "div", 8)(37, "div", 8)(38, "div", 8)(39, "div", 8)(40, "div", 8)(41, "div", 8)(42, "div", 8)(43, "div", 8)(44, "div", 8)(45, "div", 8)(46, "div", 8)(47, "div", 8)(48, "div", 8)(49, "div", 8)(50, "div", 8)(51, "div", 8)(52, "div", 8)(53, "div", 8)(54, "div", 8)(55, "div", 8)(56, "div", 8)(57, "div", 8)(58, "div", 8)(59, "div", 8)(60, "div", 8)(61, "div", 8)(62, "div", 8)(63, "div", 8)(64, "div", 8)(65, "div", 8)(66, "div", 8)(67, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "div", 2)(70, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](72, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "div", 2)(75, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](76, ComicComponent_div_76_Template, 1, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, " ich bins\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0).constructor(8));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _shared_directives_scroll_percent_directive__WEBPACK_IMPORTED_MODULE_0__.ScrollPercentDirective], styles: ["[_nghost-%COMP%] {\n  display: grid;\n  place-items: center;\n}\n\n.comic-struct[_ngcontent-%COMP%] {\n  position: -webkit-sticky;\n  position: sticky;\n  display: flex;\n  height: 100vh;\n  flex-direction: column;\n  width: 100%;\n  border: 5px solid wheat;\n  top: 0;\n}\n\n.comic-strip[_ngcontent-%COMP%] {\n  border: 5px solid wheat;\n  transition: opacity 1s, background-color 1s;\n  position: relative;\n}\n\n.cloak[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n.cloak[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.col-1[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.col-2[_ngcontent-%COMP%] {\n  flex: 2;\n}\n\n.col-3[_ngcontent-%COMP%] {\n  flex: 3;\n}\n\n.col-4[_ngcontent-%COMP%] {\n  flex: 4;\n}\n\n.col-5[_ngcontent-%COMP%] {\n  flex: 5;\n}\n\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n}\n\n.row-2[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 2;\n}\n\n.bubbles[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n\n.bubble[_ngcontent-%COMP%] {\n  position: absolute;\n  left: var(--bubble-left-offset);\n  bottom: -75%;\n  display: block;\n  width: var(--bubble-radius);\n  height: var(--bubble-radius);\n  border-radius: 50%;\n  -webkit-animation: float-up var(--bubble-float-duration) var(--bubble-float-delay) ease-in infinite;\n          animation: float-up var(--bubble-float-duration) var(--bubble-float-delay) ease-in infinite;\n}\n\n.bubble[_ngcontent-%COMP%]::before {\n  position: absolute;\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: hsla(183deg, 94%, 76%, 0.3);\n  border-radius: inherit;\n  -webkit-animation: var(--bubble-sway-type) var(--bubble-sway-duration) var(--bubble-sway-delay) ease-in-out alternate infinite;\n          animation: var(--bubble-sway-type) var(--bubble-sway-duration) var(--bubble-sway-delay) ease-in-out alternate infinite;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(0) {\n  --bubble-left-offset: 93vw;\n  --bubble-radius: 10vw;\n  --bubble-float-duration: 6s;\n  --bubble-sway-duration: 5s;\n  --bubble-float-delay: 4s;\n  --bubble-sway-delay: 2s;\n  --bubble-sway-type: sway-left-to-right;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(1) {\n  --bubble-left-offset: 12vw;\n  --bubble-radius: 2vw;\n  --bubble-float-duration: 11s;\n  --bubble-sway-duration: 4s;\n  --bubble-float-delay: 4s;\n  --bubble-sway-delay: 1s;\n  --bubble-sway-type: sway-left-to-right;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(2) {\n  --bubble-left-offset: 45vw;\n  --bubble-radius: 7vw;\n  --bubble-float-duration: 7s;\n  --bubble-sway-duration: 6s;\n  --bubble-float-delay: 4s;\n  --bubble-sway-delay: 2s;\n  --bubble-sway-type: sway-right-to-left;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(3) {\n  --bubble-left-offset: 30vw;\n  --bubble-radius: 2vw;\n  --bubble-float-duration: 9s;\n  --bubble-sway-duration: 6s;\n  --bubble-float-delay: 0s;\n  --bubble-sway-delay: 2s;\n  --bubble-sway-type: sway-left-to-right;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(4) {\n  --bubble-left-offset: 18vw;\n  --bubble-radius: 8vw;\n  --bubble-float-duration: 10s;\n  --bubble-sway-duration: 6s;\n  --bubble-float-delay: 2s;\n  --bubble-sway-delay: 3s;\n  --bubble-sway-type: sway-left-to-right;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(5) {\n  --bubble-left-offset: 78vw;\n  --bubble-radius: 3vw;\n  --bubble-float-duration: 12s;\n  --bubble-sway-duration: 5s;\n  --bubble-float-delay: 3s;\n  --bubble-sway-delay: 3s;\n  --bubble-sway-type: sway-right-to-left;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(6) {\n  --bubble-left-offset: 51vw;\n  --bubble-radius: 5vw;\n  --bubble-float-duration: 10s;\n  --bubble-sway-duration: 4s;\n  --bubble-float-delay: 3s;\n  --bubble-sway-delay: 4s;\n  --bubble-sway-type: sway-right-to-left;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(7) {\n  --bubble-left-offset: 33vw;\n  --bubble-radius: 10vw;\n  --bubble-float-duration: 6s;\n  --bubble-sway-duration: 4s;\n  --bubble-float-delay: 2s;\n  --bubble-sway-delay: 2s;\n  --bubble-sway-type: sway-left-to-right;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(8) {\n  --bubble-left-offset: 66vw;\n  --bubble-radius: 1vw;\n  --bubble-float-duration: 10s;\n  --bubble-sway-duration: 4s;\n  --bubble-float-delay: 0s;\n  --bubble-sway-delay: 1s;\n  --bubble-sway-type: sway-left-to-right;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(9) {\n  --bubble-left-offset: 91vw;\n  --bubble-radius: 8vw;\n  --bubble-float-duration: 7s;\n  --bubble-sway-duration: 6s;\n  --bubble-float-delay: 2s;\n  --bubble-sway-delay: 4s;\n  --bubble-sway-type: sway-right-to-left;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(10) {\n  --bubble-left-offset: 89vw;\n  --bubble-radius: 3vw;\n  --bubble-float-duration: 12s;\n  --bubble-sway-duration: 6s;\n  --bubble-float-delay: 3s;\n  --bubble-sway-delay: 0s;\n  --bubble-sway-type: sway-right-to-left;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(11) {\n  --bubble-left-offset: 72vw;\n  --bubble-radius: 9vw;\n  --bubble-float-duration: 9s;\n  --bubble-sway-duration: 6s;\n  --bubble-float-delay: 0s;\n  --bubble-sway-delay: 0s;\n  --bubble-sway-type: sway-right-to-left;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(12) {\n  --bubble-left-offset: 90vw;\n  --bubble-radius: 5vw;\n  --bubble-float-duration: 10s;\n  --bubble-sway-duration: 4s;\n  --bubble-float-delay: 1s;\n  --bubble-sway-delay: 0s;\n  --bubble-sway-type: sway-left-to-right;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(13) {\n  --bubble-left-offset: 37vw;\n  --bubble-radius: 1vw;\n  --bubble-float-duration: 8s;\n  --bubble-sway-duration: 6s;\n  --bubble-float-delay: 1s;\n  --bubble-sway-delay: 1s;\n  --bubble-sway-type: sway-left-to-right;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(14) {\n  --bubble-left-offset: 54vw;\n  --bubble-radius: 1vw;\n  --bubble-float-duration: 11s;\n  --bubble-sway-duration: 6s;\n  --bubble-float-delay: 2s;\n  --bubble-sway-delay: 3s;\n  --bubble-sway-type: sway-left-to-right;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(15) {\n  --bubble-left-offset: 51vw;\n  --bubble-radius: 3vw;\n  --bubble-float-duration: 12s;\n  --bubble-sway-duration: 5s;\n  --bubble-float-delay: 1s;\n  --bubble-sway-delay: 0s;\n  --bubble-sway-type: sway-left-to-right;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(16) {\n  --bubble-left-offset: 18vw;\n  --bubble-radius: 4vw;\n  --bubble-float-duration: 8s;\n  --bubble-sway-duration: 5s;\n  --bubble-float-delay: 2s;\n  --bubble-sway-delay: 4s;\n  --bubble-sway-type: sway-left-to-right;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(17) {\n  --bubble-left-offset: 17vw;\n  --bubble-radius: 6vw;\n  --bubble-float-duration: 10s;\n  --bubble-sway-duration: 4s;\n  --bubble-float-delay: 1s;\n  --bubble-sway-delay: 3s;\n  --bubble-sway-type: sway-right-to-left;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(18) {\n  --bubble-left-offset: 14vw;\n  --bubble-radius: 5vw;\n  --bubble-float-duration: 11s;\n  --bubble-sway-duration: 6s;\n  --bubble-float-delay: 4s;\n  --bubble-sway-delay: 2s;\n  --bubble-sway-type: sway-left-to-right;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(19) {\n  --bubble-left-offset: 39vw;\n  --bubble-radius: 6vw;\n  --bubble-float-duration: 8s;\n  --bubble-sway-duration: 5s;\n  --bubble-float-delay: 3s;\n  --bubble-sway-delay: 4s;\n  --bubble-sway-type: sway-right-to-left;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(20) {\n  --bubble-left-offset: 18vw;\n  --bubble-radius: 7vw;\n  --bubble-float-duration: 8s;\n  --bubble-sway-duration: 5s;\n  --bubble-float-delay: 1s;\n  --bubble-sway-delay: 0s;\n  --bubble-sway-type: sway-right-to-left;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(21) {\n  --bubble-left-offset: 2vw;\n  --bubble-radius: 2vw;\n  --bubble-float-duration: 6s;\n  --bubble-sway-duration: 4s;\n  --bubble-float-delay: 4s;\n  --bubble-sway-delay: 0s;\n  --bubble-sway-type: sway-left-to-right;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(22) {\n  --bubble-left-offset: 12vw;\n  --bubble-radius: 9vw;\n  --bubble-float-duration: 8s;\n  --bubble-sway-duration: 6s;\n  --bubble-float-delay: 4s;\n  --bubble-sway-delay: 0s;\n  --bubble-sway-type: sway-right-to-left;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(23) {\n  --bubble-left-offset: 28vw;\n  --bubble-radius: 1vw;\n  --bubble-float-duration: 11s;\n  --bubble-sway-duration: 4s;\n  --bubble-float-delay: 4s;\n  --bubble-sway-delay: 2s;\n  --bubble-sway-type: sway-right-to-left;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(24) {\n  --bubble-left-offset: 59vw;\n  --bubble-radius: 10vw;\n  --bubble-float-duration: 11s;\n  --bubble-sway-duration: 4s;\n  --bubble-float-delay: 0s;\n  --bubble-sway-delay: 4s;\n  --bubble-sway-type: sway-left-to-right;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(25) {\n  --bubble-left-offset: 29vw;\n  --bubble-radius: 1vw;\n  --bubble-float-duration: 7s;\n  --bubble-sway-duration: 6s;\n  --bubble-float-delay: 1s;\n  --bubble-sway-delay: 3s;\n  --bubble-sway-type: sway-left-to-right;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(26) {\n  --bubble-left-offset: 37vw;\n  --bubble-radius: 5vw;\n  --bubble-float-duration: 11s;\n  --bubble-sway-duration: 6s;\n  --bubble-float-delay: 2s;\n  --bubble-sway-delay: 2s;\n  --bubble-sway-type: sway-left-to-right;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(27) {\n  --bubble-left-offset: 17vw;\n  --bubble-radius: 4vw;\n  --bubble-float-duration: 8s;\n  --bubble-sway-duration: 5s;\n  --bubble-float-delay: 0s;\n  --bubble-sway-delay: 0s;\n  --bubble-sway-type: sway-left-to-right;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(28) {\n  --bubble-left-offset: 11vw;\n  --bubble-radius: 3vw;\n  --bubble-float-duration: 6s;\n  --bubble-sway-duration: 4s;\n  --bubble-float-delay: 1s;\n  --bubble-sway-delay: 4s;\n  --bubble-sway-type: sway-right-to-left;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(29) {\n  --bubble-left-offset: 37vw;\n  --bubble-radius: 2vw;\n  --bubble-float-duration: 10s;\n  --bubble-sway-duration: 4s;\n  --bubble-float-delay: 3s;\n  --bubble-sway-delay: 2s;\n  --bubble-sway-type: sway-left-to-right;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(30) {\n  --bubble-left-offset: 36vw;\n  --bubble-radius: 7vw;\n  --bubble-float-duration: 11s;\n  --bubble-sway-duration: 6s;\n  --bubble-float-delay: 1s;\n  --bubble-sway-delay: 3s;\n  --bubble-sway-type: sway-left-to-right;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(31) {\n  --bubble-left-offset: 78vw;\n  --bubble-radius: 7vw;\n  --bubble-float-duration: 10s;\n  --bubble-sway-duration: 6s;\n  --bubble-float-delay: 3s;\n  --bubble-sway-delay: 2s;\n  --bubble-sway-type: sway-right-to-left;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(32) {\n  --bubble-left-offset: 41vw;\n  --bubble-radius: 3vw;\n  --bubble-float-duration: 6s;\n  --bubble-sway-duration: 6s;\n  --bubble-float-delay: 2s;\n  --bubble-sway-delay: 0s;\n  --bubble-sway-type: sway-left-to-right;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(33) {\n  --bubble-left-offset: 17vw;\n  --bubble-radius: 9vw;\n  --bubble-float-duration: 12s;\n  --bubble-sway-duration: 6s;\n  --bubble-float-delay: 4s;\n  --bubble-sway-delay: 2s;\n  --bubble-sway-type: sway-left-to-right;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(34) {\n  --bubble-left-offset: 73vw;\n  --bubble-radius: 2vw;\n  --bubble-float-duration: 10s;\n  --bubble-sway-duration: 5s;\n  --bubble-float-delay: 0s;\n  --bubble-sway-delay: 3s;\n  --bubble-sway-type: sway-right-to-left;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(35) {\n  --bubble-left-offset: 7vw;\n  --bubble-radius: 8vw;\n  --bubble-float-duration: 11s;\n  --bubble-sway-duration: 6s;\n  --bubble-float-delay: 2s;\n  --bubble-sway-delay: 0s;\n  --bubble-sway-type: sway-right-to-left;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(36) {\n  --bubble-left-offset: 95vw;\n  --bubble-radius: 1vw;\n  --bubble-float-duration: 9s;\n  --bubble-sway-duration: 5s;\n  --bubble-float-delay: 3s;\n  --bubble-sway-delay: 2s;\n  --bubble-sway-type: sway-right-to-left;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(37) {\n  --bubble-left-offset: 34vw;\n  --bubble-radius: 4vw;\n  --bubble-float-duration: 12s;\n  --bubble-sway-duration: 5s;\n  --bubble-float-delay: 4s;\n  --bubble-sway-delay: 4s;\n  --bubble-sway-type: sway-right-to-left;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(38) {\n  --bubble-left-offset: 18vw;\n  --bubble-radius: 4vw;\n  --bubble-float-duration: 9s;\n  --bubble-sway-duration: 6s;\n  --bubble-float-delay: 1s;\n  --bubble-sway-delay: 4s;\n  --bubble-sway-type: sway-left-to-right;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(39) {\n  --bubble-left-offset: 27vw;\n  --bubble-radius: 1vw;\n  --bubble-float-duration: 11s;\n  --bubble-sway-duration: 6s;\n  --bubble-float-delay: 3s;\n  --bubble-sway-delay: 2s;\n  --bubble-sway-type: sway-left-to-right;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(40) {\n  --bubble-left-offset: 75vw;\n  --bubble-radius: 1vw;\n  --bubble-float-duration: 8s;\n  --bubble-sway-duration: 6s;\n  --bubble-float-delay: 4s;\n  --bubble-sway-delay: 3s;\n  --bubble-sway-type: sway-right-to-left;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(41) {\n  --bubble-left-offset: 56vw;\n  --bubble-radius: 8vw;\n  --bubble-float-duration: 7s;\n  --bubble-sway-duration: 6s;\n  --bubble-float-delay: 4s;\n  --bubble-sway-delay: 3s;\n  --bubble-sway-type: sway-right-to-left;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(42) {\n  --bubble-left-offset: 77vw;\n  --bubble-radius: 9vw;\n  --bubble-float-duration: 11s;\n  --bubble-sway-duration: 6s;\n  --bubble-float-delay: 3s;\n  --bubble-sway-delay: 1s;\n  --bubble-sway-type: sway-right-to-left;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(43) {\n  --bubble-left-offset: 17vw;\n  --bubble-radius: 8vw;\n  --bubble-float-duration: 6s;\n  --bubble-sway-duration: 5s;\n  --bubble-float-delay: 4s;\n  --bubble-sway-delay: 4s;\n  --bubble-sway-type: sway-right-to-left;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(44) {\n  --bubble-left-offset: 1vw;\n  --bubble-radius: 5vw;\n  --bubble-float-duration: 9s;\n  --bubble-sway-duration: 5s;\n  --bubble-float-delay: 4s;\n  --bubble-sway-delay: 0s;\n  --bubble-sway-type: sway-right-to-left;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(45) {\n  --bubble-left-offset: 39vw;\n  --bubble-radius: 3vw;\n  --bubble-float-duration: 12s;\n  --bubble-sway-duration: 5s;\n  --bubble-float-delay: 0s;\n  --bubble-sway-delay: 0s;\n  --bubble-sway-type: sway-left-to-right;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(46) {\n  --bubble-left-offset: 99vw;\n  --bubble-radius: 9vw;\n  --bubble-float-duration: 12s;\n  --bubble-sway-duration: 6s;\n  --bubble-float-delay: 4s;\n  --bubble-sway-delay: 4s;\n  --bubble-sway-type: sway-left-to-right;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(47) {\n  --bubble-left-offset: 79vw;\n  --bubble-radius: 5vw;\n  --bubble-float-duration: 9s;\n  --bubble-sway-duration: 5s;\n  --bubble-float-delay: 0s;\n  --bubble-sway-delay: 4s;\n  --bubble-sway-type: sway-right-to-left;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(48) {\n  --bubble-left-offset: 9vw;\n  --bubble-radius: 10vw;\n  --bubble-float-duration: 10s;\n  --bubble-sway-duration: 4s;\n  --bubble-float-delay: 4s;\n  --bubble-sway-delay: 4s;\n  --bubble-sway-type: sway-right-to-left;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(49) {\n  --bubble-left-offset: 24vw;\n  --bubble-radius: 6vw;\n  --bubble-float-duration: 6s;\n  --bubble-sway-duration: 4s;\n  --bubble-float-delay: 0s;\n  --bubble-sway-delay: 3s;\n  --bubble-sway-type: sway-right-to-left;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(50) {\n  --bubble-left-offset: 100vw;\n  --bubble-radius: 5vw;\n  --bubble-float-duration: 11s;\n  --bubble-sway-duration: 4s;\n  --bubble-float-delay: 1s;\n  --bubble-sway-delay: 0s;\n  --bubble-sway-type: sway-right-to-left;\n}\n\n@-webkit-keyframes float-up {\n  to {\n    transform: translateY(-175vh);\n  }\n}\n\n@keyframes float-up {\n  to {\n    transform: translateY(-175vh);\n  }\n}\n\n@-webkit-keyframes sway-left-to-right {\n  from {\n    transform: translateX(-100%);\n  }\n  to {\n    transform: translateX(100%);\n  }\n}\n\n@keyframes sway-left-to-right {\n  from {\n    transform: translateX(-100%);\n  }\n  to {\n    transform: translateX(100%);\n  }\n}\n\n@-webkit-keyframes sway-right-to-left {\n  from {\n    transform: translateX(100%);\n  }\n  to {\n    transform: translateX(-100%);\n  }\n}\n\n@keyframes sway-right-to-left {\n  from {\n    transform: translateX(100%);\n  }\n  to {\n    transform: translateX(-100%);\n  }\n}\n\n.sunburst[_ngcontent-%COMP%] {\n  width: 1352px;\n  height: 670px;\n  margin: -11px -11px -11px -11px;\n  overflow: hidden;\n  background: #fec983;\n}\n\n.sunburst[_ngcontent-%COMP%]   .outer[_ngcontent-%COMP%] {\n  width: 2000px;\n  height: 910px;\n  padding-top: 1090px;\n  margin: -700px 0 0 -340px;\n  -webkit-animation-name: rotate1;\n  -webkit-animation-duration: 2s;\n  -webkit-animation-iteration-count: infinite;\n  -webkit-animation-timing-function: linear;\n  -moz-animation-name: rotate1;\n  -moz-animation-duration: 2s;\n  -moz-animation-iteration-count: infinite;\n  -moz-animation-timing-function: linear;\n}\n\n.sunburst[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: block;\n  width: 0;\n  height: 0;\n  border-width: 90px 1000px;\n  margin: -180px 0 0 0;\n  border-color: transparent #fb985d;\n  border-style: solid;\n}\n\n.sunburst[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]:nth-child(1) {\n  -webkit-transform: rotate(20deg);\n  -moz-transform: rotate(20deg);\n}\n\n.sunburst[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]:nth-child(2) {\n  -webkit-transform: rotate(40deg);\n  -moz-transform: rotate(40deg);\n}\n\n.sunburst[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]:nth-child(3) {\n  -webkit-transform: rotate(60deg);\n  -moz-transform: rotate(60deg);\n}\n\n.sunburst[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]:nth-child(4) {\n  -webkit-transform: rotate(80deg);\n  -moz-transform: rotate(80deg);\n}\n\n.sunburst[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]:nth-child(5) {\n  -webkit-transform: rotate(100deg);\n  -moz-transform: rotate(100deg);\n}\n\n.sunburst[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]:nth-child(6) {\n  -webkit-transform: rotate(120deg);\n  -moz-transform: rotate(120deg);\n}\n\n.sunburst[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]:nth-child(7) {\n  -webkit-transform: rotate(140deg);\n  -moz-transform: rotate(140deg);\n}\n\n.sunburst[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]:nth-child(8) {\n  -webkit-transform: rotate(160deg);\n  -moz-transform: rotate(160deg);\n}\n\n.sunburst[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]:nth-child(9) {\n  -webkit-transform: rotate(180deg);\n  -moz-transform: rotate(180deg);\n}\n\n@-webkit-keyframes rotate1 {\n  from {\n    -webkit-transform: rotate(0deg);\n  }\n  to {\n    -webkit-transform: rotate(20deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbWljLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDSSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLE1BQUE7QUFDSjs7QUFJRTtFQUNFLHVCQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQkFBQTtBQURKOztBQUlFO0VBQ0UsdUJBQUE7QUFESjs7QUFFSTtFQUNFLFVBQUE7QUFBTjs7QUFnQkU7RUFDRSxPQUFBO0FBYko7O0FBZ0JFO0VBQ0UsT0FBQTtBQWJKOztBQWdCRTtFQUNFLE9BQUE7QUFiSjs7QUFnQkU7RUFDRSxPQUFBO0FBYko7O0FBZ0JFO0VBQ0UsT0FBQTtBQWJKOztBQWdCRTtFQUNFLGFBQUE7RUFDQSxPQUFBO0FBYko7O0FBZ0JFO0VBQ0UsYUFBQTtFQUNBLE9BQUE7QUFiSjs7QUE4QkU7RUFFRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUE1Qko7O0FBK0JFO0VBQ0Usa0JBQUE7RUFDQSwrQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUdBQUE7VUFBQSwyRkFBQTtBQTVCSjs7QUE4Qkk7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUNBQUE7RUFDQSxzQkFBQTtFQUNBLDhIQUFBO1VBQUEsc0hBQUE7QUE1Qk47O0FBZ0NNO0VBQ0UsMEJBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsMEJBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0NBQUE7QUE5QlI7O0FBdUJNO0VBQ0UsMEJBQUE7RUFDQSxvQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMEJBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0NBQUE7QUFyQlI7O0FBY007RUFDRSwwQkFBQTtFQUNBLG9CQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQ0FBQTtBQVpSOztBQUtNO0VBQ0UsMEJBQUE7RUFDQSxvQkFBQTtFQUNBLDJCQUFBO0VBQ0EsMEJBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0NBQUE7QUFIUjs7QUFKTTtFQUNFLDBCQUFBO0VBQ0Esb0JBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNDQUFBO0FBTVI7O0FBYk07RUFDRSwwQkFBQTtFQUNBLG9CQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQ0FBQTtBQWVSOztBQXRCTTtFQUNFLDBCQUFBO0VBQ0Esb0JBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNDQUFBO0FBd0JSOztBQS9CTTtFQUNFLDBCQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNDQUFBO0FBaUNSOztBQXhDTTtFQUNFLDBCQUFBO0VBQ0Esb0JBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNDQUFBO0FBMENSOztBQWpETTtFQUNFLDBCQUFBO0VBQ0Esb0JBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNDQUFBO0FBbURSOztBQTFETTtFQUNFLDBCQUFBO0VBQ0Esb0JBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNDQUFBO0FBNERSOztBQW5FTTtFQUNFLDBCQUFBO0VBQ0Esb0JBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNDQUFBO0FBcUVSOztBQTVFTTtFQUNFLDBCQUFBO0VBQ0Esb0JBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNDQUFBO0FBOEVSOztBQXJGTTtFQUNFLDBCQUFBO0VBQ0Esb0JBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNDQUFBO0FBdUZSOztBQTlGTTtFQUNFLDBCQUFBO0VBQ0Esb0JBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNDQUFBO0FBZ0dSOztBQXZHTTtFQUNFLDBCQUFBO0VBQ0Esb0JBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNDQUFBO0FBeUdSOztBQWhITTtFQUNFLDBCQUFBO0VBQ0Esb0JBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNDQUFBO0FBa0hSOztBQXpITTtFQUNFLDBCQUFBO0VBQ0Esb0JBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNDQUFBO0FBMkhSOztBQWxJTTtFQUNFLDBCQUFBO0VBQ0Esb0JBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNDQUFBO0FBb0lSOztBQTNJTTtFQUNFLDBCQUFBO0VBQ0Esb0JBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNDQUFBO0FBNklSOztBQXBKTTtFQUNFLDBCQUFBO0VBQ0Esb0JBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNDQUFBO0FBc0pSOztBQTdKTTtFQUNFLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNDQUFBO0FBK0pSOztBQXRLTTtFQUNFLDBCQUFBO0VBQ0Esb0JBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNDQUFBO0FBd0tSOztBQS9LTTtFQUNFLDBCQUFBO0VBQ0Esb0JBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNDQUFBO0FBaUxSOztBQXhMTTtFQUNFLDBCQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNDQUFBO0FBMExSOztBQWpNTTtFQUNFLDBCQUFBO0VBQ0Esb0JBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNDQUFBO0FBbU1SOztBQTFNTTtFQUNFLDBCQUFBO0VBQ0Esb0JBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNDQUFBO0FBNE1SOztBQW5OTTtFQUNFLDBCQUFBO0VBQ0Esb0JBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNDQUFBO0FBcU5SOztBQTVOTTtFQUNFLDBCQUFBO0VBQ0Esb0JBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNDQUFBO0FBOE5SOztBQXJPTTtFQUNFLDBCQUFBO0VBQ0Esb0JBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNDQUFBO0FBdU9SOztBQTlPTTtFQUNFLDBCQUFBO0VBQ0Esb0JBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNDQUFBO0FBZ1BSOztBQXZQTTtFQUNFLDBCQUFBO0VBQ0Esb0JBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNDQUFBO0FBeVBSOztBQWhRTTtFQUNFLDBCQUFBO0VBQ0Esb0JBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNDQUFBO0FBa1FSOztBQXpRTTtFQUNFLDBCQUFBO0VBQ0Esb0JBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNDQUFBO0FBMlFSOztBQWxSTTtFQUNFLDBCQUFBO0VBQ0Esb0JBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNDQUFBO0FBb1JSOztBQTNSTTtFQUNFLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNDQUFBO0FBNlJSOztBQXBTTTtFQUNFLDBCQUFBO0VBQ0Esb0JBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNDQUFBO0FBc1NSOztBQTdTTTtFQUNFLDBCQUFBO0VBQ0Esb0JBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNDQUFBO0FBK1NSOztBQXRUTTtFQUNFLDBCQUFBO0VBQ0Esb0JBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNDQUFBO0FBd1RSOztBQS9UTTtFQUNFLDBCQUFBO0VBQ0Esb0JBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNDQUFBO0FBaVVSOztBQXhVTTtFQUNFLDBCQUFBO0VBQ0Esb0JBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNDQUFBO0FBMFVSOztBQWpWTTtFQUNFLDBCQUFBO0VBQ0Esb0JBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNDQUFBO0FBbVZSOztBQTFWTTtFQUNFLDBCQUFBO0VBQ0Esb0JBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNDQUFBO0FBNFZSOztBQW5XTTtFQUNFLDBCQUFBO0VBQ0Esb0JBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNDQUFBO0FBcVdSOztBQTVXTTtFQUNFLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNDQUFBO0FBOFdSOztBQXJYTTtFQUNFLDBCQUFBO0VBQ0Esb0JBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNDQUFBO0FBdVhSOztBQTlYTTtFQUNFLDBCQUFBO0VBQ0Esb0JBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNDQUFBO0FBZ1lSOztBQXZZTTtFQUNFLDBCQUFBO0VBQ0Esb0JBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNDQUFBO0FBeVlSOztBQWhaTTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNDQUFBO0FBa1pSOztBQXpaTTtFQUNFLDBCQUFBO0VBQ0Esb0JBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNDQUFBO0FBMlpSOztBQWxhTTtFQUNFLDJCQUFBO0VBQ0Esb0JBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNDQUFBO0FBb2FSOztBQS9aRTtFQUNFO0lBQ0UsNkJBQUE7RUFrYUo7QUFDRjs7QUFyYUU7RUFDRTtJQUNFLDZCQUFBO0VBa2FKO0FBQ0Y7O0FBL1pFO0VBQ0U7SUFDRSw0QkFBQTtFQWlhSjtFQTlaRTtJQUNFLDJCQUFBO0VBZ2FKO0FBQ0Y7O0FBdmFFO0VBQ0U7SUFDRSw0QkFBQTtFQWlhSjtFQTlaRTtJQUNFLDJCQUFBO0VBZ2FKO0FBQ0Y7O0FBN1pFO0VBQ0U7SUFDRSwyQkFBQTtFQStaSjtFQTVaRTtJQUNFLDRCQUFBO0VBOFpKO0FBQ0Y7O0FBcmFFO0VBQ0U7SUFDRSwyQkFBQTtFQStaSjtFQTVaRTtJQUNFLDRCQUFBO0VBOFpKO0FBQ0Y7O0FBM1pFO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUE2Wko7O0FBM1pJO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsK0JBQUE7RUFDQSw4QkFBQTtFQUNBLDJDQUFBO0VBQ0EseUNBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0Esd0NBQUE7RUFDQSxzQ0FBQTtBQThaSjs7QUE1Wkk7RUFDQSxjQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQkFBQTtBQStaSjs7QUE3Wkk7RUFBMkIsZ0NBQUE7RUFBa0MsNkJBQUE7QUFrYWpFOztBQWphSTtFQUEyQixnQ0FBQTtFQUFrQyw2QkFBQTtBQXNhakU7O0FBcmFJO0VBQTJCLGdDQUFBO0VBQWtDLDZCQUFBO0FBMGFqRTs7QUF6YUk7RUFBMkIsZ0NBQUE7RUFBa0MsNkJBQUE7QUE4YWpFOztBQTdhSTtFQUEyQixpQ0FBQTtFQUFrQyw4QkFBQTtBQWtiakU7O0FBamJJO0VBQTJCLGlDQUFBO0VBQWtDLDhCQUFBO0FBc2JqRTs7QUFyYkk7RUFBMkIsaUNBQUE7RUFBa0MsOEJBQUE7QUEwYmpFOztBQXpiSTtFQUEyQixpQ0FBQTtFQUFrQyw4QkFBQTtBQThiakU7O0FBN2JJO0VBQTJCLGlDQUFBO0VBQWtDLDhCQUFBO0FBa2NqRTs7QUFqY0k7RUFDSTtJQUFPLCtCQUFBO0VBcWNiO0VBcGNNO0lBQU8sZ0NBQUE7RUF1Y2I7QUFDRiIsImZpbGUiOiJjb21pYy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0e1xyXG4gIGRpc3BsYXk6Z3JpZDtcclxuICBwbGFjZS1pdGVtczogY2VudGVyOyAgICBcclxufVxyXG5cclxuLmNvbWljLXN0cnVjdCB7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IDVweCBzb2xpZCB3aGVhdDtcclxuICAgIHRvcDowO1xyXG4gIH1cclxuICBcclxuXHJcbiAgXHJcbiAgLmNvbWljLXN0cmlwIHtcclxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHdoZWF0O1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcywgYmFja2dyb3VuZC1jb2xvciAxcztcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gIH1cclxuXHJcbiAgLmNsb2Fre1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAmICoge1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgXHJcbiAgLy8gLmNsb2FrOmJlZm9yZSB7XHJcbiAgLy8gICBjb250ZW50OiBcIlwiO1xyXG4gIC8vICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIC8vICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgLy8gICB0b3A6IDA7XHJcbiAgLy8gICBib3R0b206IDA7XHJcbiAgLy8gICBsZWZ0OiAwO1xyXG4gIC8vICAgcmlnaHQ6IDA7XHJcbiAgLy8gICB6LWluZGV4OiAxO1xyXG4gIC8vIH1cclxuXHJcbiAgLmNvbC0xIHtcclxuICAgIGZsZXg6IDE7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb2wtMiB7XHJcbiAgICBmbGV4OiAyO1xyXG4gIH1cclxuICBcclxuICAuY29sLTMge1xyXG4gICAgZmxleDogMztcclxuICB9XHJcbiAgXHJcbiAgLmNvbC00IHtcclxuICAgIGZsZXg6IDQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb2wtNSB7XHJcbiAgICBmbGV4OiA1O1xyXG4gIH1cclxuICBcclxuICAucm93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4OiAxO1xyXG4gIH1cclxuICBcclxuICAucm93LTIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXg6IDI7XHJcbiAgfVxyXG4gIFxyXG5cclxuICAkYnViYmxlLWNvdW50OiA1MDtcclxuICAkc3dheS10eXBlOiBcInN3YXktbGVmdC10by1yaWdodFwiLCBcInN3YXktcmlnaHQtdG8tbGVmdFwiO1xyXG4gIFxyXG4gIEBmdW5jdGlvbiByYW5kb21fcmFuZ2UoJG1pbiwgJG1heCkge1xyXG4gICAgJHJhbmQ6IHJhbmRvbSgpO1xyXG4gICAgJHJhbmRvbV9yYW5nZTogJG1pbiArIGZsb29yKCRyYW5kICogKCgkbWF4IC0gJG1pbikgKyAxKSk7XHJcbiAgICBAcmV0dXJuICRyYW5kb21fcmFuZ2U7XHJcbiAgfVxyXG4gIFxyXG4gIEBmdW5jdGlvbiBzYW1wbGUoJGxpc3QpIHtcclxuICAgIEByZXR1cm4gbnRoKCRsaXN0LCByYW5kb20obGVuZ3RoKCRsaXN0KSkpO1xyXG4gIH1cclxuICBcclxuICAuYnViYmxlcyB7XHJcbiAgIFxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuICBcclxuICAuYnViYmxlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IHZhcigtLWJ1YmJsZS1sZWZ0LW9mZnNldCk7XHJcbiAgICBib3R0b206IC03NSU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiB2YXIoLS1idWJibGUtcmFkaXVzKTtcclxuICAgIGhlaWdodDogdmFyKC0tYnViYmxlLXJhZGl1cyk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBhbmltYXRpb246IGZsb2F0LXVwIHZhcigtLWJ1YmJsZS1mbG9hdC1kdXJhdGlvbikgdmFyKC0tYnViYmxlLWZsb2F0LWRlbGF5KSBlYXNlLWluIGluZmluaXRlO1xyXG4gIFxyXG4gICAgJjo6YmVmb3JlIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBjb250ZW50OiAnJztcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBiYWNrZ3JvdW5kOiBoc2xhKDE4MywgOTQlLCA3NiUsIDAuMyk7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XHJcbiAgICAgIGFuaW1hdGlvbjogdmFyKC0tYnViYmxlLXN3YXktdHlwZSkgdmFyKC0tYnViYmxlLXN3YXktZHVyYXRpb24pIHZhcigtLWJ1YmJsZS1zd2F5LWRlbGF5KSBlYXNlLWluLW91dCBhbHRlcm5hdGUgaW5maW5pdGU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBAZm9yICRpIGZyb20gMCB0aHJvdWdoICRidWJibGUtY291bnQge1xyXG4gICAgICAmOm50aC1jaGlsZCgjeyRpfSkge1xyXG4gICAgICAgIC0tYnViYmxlLWxlZnQtb2Zmc2V0OiAje3JhbmRvbV9yYW5nZSgwdncsIDEwMHZ3KX07XHJcbiAgICAgICAgLS1idWJibGUtcmFkaXVzOiAje3JhbmRvbV9yYW5nZSgxdncsIDEwdncpfTtcclxuICAgICAgICAtLWJ1YmJsZS1mbG9hdC1kdXJhdGlvbjogI3tyYW5kb21fcmFuZ2UoNnMsIDEycyl9O1xyXG4gICAgICAgIC0tYnViYmxlLXN3YXktZHVyYXRpb246ICN7cmFuZG9tX3JhbmdlKDRzLCA2cyl9O1xyXG4gICAgICAgIC0tYnViYmxlLWZsb2F0LWRlbGF5OiAje3JhbmRvbV9yYW5nZSgwcywgNHMpfTtcclxuICAgICAgICAtLWJ1YmJsZS1zd2F5LWRlbGF5OiAje3JhbmRvbV9yYW5nZSgwcywgNHMpfTtcclxuICAgICAgICAtLWJ1YmJsZS1zd2F5LXR5cGU6ICN7c2FtcGxlKCRzd2F5LXR5cGUpfTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIGZsb2F0LXVwIHtcclxuICAgIHRvIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xNzV2aCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgc3dheS1sZWZ0LXRvLXJpZ2h0IHtcclxuICAgIGZyb20ge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgdG8ge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgc3dheS1yaWdodC10by1sZWZ0IHtcclxuICAgIGZyb20ge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICB0byB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc3VuYnVyc3Qge1xyXG4gICAgd2lkdGg6IDEzNTJweDtcclxuICAgIGhlaWdodDogNjcwcHg7XHJcbiAgICBtYXJnaW46LTExcHggLTExcHggLTExcHggLTExcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZDogI2ZlYzk4MztcclxuICAgIH1cclxuICAgIC5zdW5idXJzdCAub3V0ZXIge1xyXG4gICAgd2lkdGg6IDIwMDBweDtcclxuICAgIGhlaWdodDogOTEwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTA5MHB4O1xyXG4gICAgbWFyZ2luOiAtNzAwcHggMCAwIC0zNDBweDtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZTE7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjoycztcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDppbmZpbml0ZTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpsaW5lYXI7XHJcbiAgICAtbW96LWFuaW1hdGlvbi1uYW1lOiByb3RhdGUxO1xyXG4gICAgLW1vei1hbmltYXRpb24tZHVyYXRpb246MnM7XHJcbiAgICAtbW96LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6aW5maW5pdGU7XHJcbiAgICAtbW96LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246bGluZWFyO1xyXG4gICAgfVxyXG4gICAgLnN1bmJ1cnN0IGIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMDtcclxuICAgIGJvcmRlci13aWR0aDogOTBweCAxMDAwcHg7XHJcbiAgICBtYXJnaW46IC0xODBweCAwIDAgMDtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgI2ZiOTg1ZDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICB9XHJcbiAgICAuc3VuYnVyc3QgYjpudGgtY2hpbGQoMSkgeyAtd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMjBkZWcpOyAgLW1vei10cmFuc2Zvcm06cm90YXRlKDIwZGVnKTsgIH1cclxuICAgIC5zdW5idXJzdCBiOm50aC1jaGlsZCgyKSB7IC13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0MGRlZyk7ICAtbW96LXRyYW5zZm9ybTpyb3RhdGUoNDBkZWcpOyAgfVxyXG4gICAgLnN1bmJ1cnN0IGI6bnRoLWNoaWxkKDMpIHsgLXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDYwZGVnKTsgIC1tb3otdHJhbnNmb3JtOnJvdGF0ZSg2MGRlZyk7ICB9XHJcbiAgICAuc3VuYnVyc3QgYjpudGgtY2hpbGQoNCkgeyAtd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoODBkZWcpOyAgLW1vei10cmFuc2Zvcm06cm90YXRlKDgwZGVnKTsgIH1cclxuICAgIC5zdW5idXJzdCBiOm50aC1jaGlsZCg1KSB7IC13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxMDBkZWcpOyAtbW96LXRyYW5zZm9ybTpyb3RhdGUoMTAwZGVnKTsgfVxyXG4gICAgLnN1bmJ1cnN0IGI6bnRoLWNoaWxkKDYpIHsgLXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDEyMGRlZyk7IC1tb3otdHJhbnNmb3JtOnJvdGF0ZSgxMjBkZWcpOyB9XHJcbiAgICAuc3VuYnVyc3QgYjpudGgtY2hpbGQoNykgeyAtd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMTQwZGVnKTsgLW1vei10cmFuc2Zvcm06cm90YXRlKDE0MGRlZyk7IH1cclxuICAgIC5zdW5idXJzdCBiOm50aC1jaGlsZCg4KSB7IC13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxNjBkZWcpOyAtbW96LXRyYW5zZm9ybTpyb3RhdGUoMTYwZGVnKTsgfVxyXG4gICAgLnN1bmJ1cnN0IGI6bnRoLWNoaWxkKDkpIHsgLXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDE4MGRlZyk7IC1tb3otdHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpOyB9XHJcbiAgICBALXdlYmtpdC1rZXlmcmFtZXMgcm90YXRlMSB7XHJcbiAgICAgICAgZnJvbSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuICAgICAgICB0byAgIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyMGRlZyk7IH1cclxuICAgIH1cclxuICAgIEAtbW96LWtleWZyYW1lcyByb3RhdGUxIHtcclxuICAgICAgICBmcm9tIHsgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxyXG4gICAgICAgIHRvICAgeyAtbW96LXRyYW5zZm9ybTogcm90YXRlKDIwZGVnKTsgfVxyXG4gICAgfSJdfQ== */"] });


/***/ }),

/***/ 1149:
/*!******************************************************************!*\
  !*** ./src/app/pages/favorite-items/favorite-items.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavoriteItemsComponent": () => (/* binding */ FavoriteItemsComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_dialog_modal_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/dialog/modal/modal */ 7992);
/* harmony import */ var src_app_core_dialog_modal_table_modal_table_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/dialog/modal/table-modal/table-modal.component */ 2980);
/* harmony import */ var _favoriteGames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./favoriteGames */ 5088);
/* harmony import */ var _game_interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game.interface */ 2989);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_pulse_pic_pulse_pic_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/pulse-pic/pulse-pic.component */ 4408);
/* harmony import */ var _shared_directives_shortcut_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/directives/shortcut.directive */ 851);









function FavoriteItemsComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "pulse-pic", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", item_r1.src)("title", item_r1.tagLine)("zoom", false);
} }
class FavoriteItemsComponent {
    constructor(_modal) {
        this._modal = _modal;
        this.showNotMine = true;
        this.favItems = _favoriteGames__WEBPACK_IMPORTED_MODULE_2__.favoriteGames;
    }
    enumKeys() {
        var keys = Object.keys(_game_interface__WEBPACK_IMPORTED_MODULE_3__.CategoryEnum);
        return keys.slice(keys.length / 2);
    }
    ;
    onResize() {
        this.calculateBreakIndex();
    }
    ngOnInit() {
        this.calculateBreakIndex();
    }
    filterItems() {
        return this.favItems;
        return this.favItems.filter(p => !this.filterCategory || p.category == this.filterCategory?.key);
    }
    setFilter(category) {
        if (this.filterCategory === category) {
            this.filterCategory = null;
        }
        else {
            this.filterCategory = category;
        }
    }
    openListModal() {
        const modalRef = this._modal.open(src_app_core_dialog_modal_table_modal_table_modal_component__WEBPACK_IMPORTED_MODULE_1__.TableModalComponent, src_app_core_dialog_modal_modal__WEBPACK_IMPORTED_MODULE_0__.modalOptionLargeAndCenter);
        modalRef.componentInstance.list = this.favItems.map((item) => item.tagLine);
    }
    calculateBreakIndex() {
        this.breakIndex = window.innerWidth < 1000 ? (window.innerWidth < 768 ? (window.innerWidth < 550 ? 2 : 3) : 4) : 5;
    }
}
FavoriteItemsComponent.ɵfac = function FavoriteItemsComponent_Factory(t) { return new (t || FavoriteItemsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_dialog_modal_modal__WEBPACK_IMPORTED_MODULE_0__.Modal)); };
FavoriteItemsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: FavoriteItemsComponent, selectors: [["favorite-items"]], hostBindings: function FavoriteItemsComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("resize", function FavoriteItemsComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresolveWindow"]);
    } }, inputs: { showNotMine: "showNotMine" }, decls: 8, vars: 1, consts: [[1, "items-container"], [4, "ngFor", "ngForOf"], [1, "line-container"], [1, "text-center"], ["clickShortCutKey", "KeyL", 1, "primary", 3, "click"], ["size", "md-dyn", 3, "src", "title", "zoom"]], template: function FavoriteItemsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Boardgames!");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, FavoriteItemsComponent_ng_container_3_Template, 2, 3, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 2)(5, "div", 3)(6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function FavoriteItemsComponent_Template_button_click_6_listener() { return ctx.openListModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Hier als Liste");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.filterItems());
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _shared_pulse_pic_pulse_pic_component__WEBPACK_IMPORTED_MODULE_4__.PulsePicComponent, _shared_directives_shortcut_directive__WEBPACK_IMPORTED_MODULE_5__.ShortCutDirective], styles: ["*[_ngcontent-%COMP%] {\n  flex: auto;\n}\n\n.items-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  overflow: hidden;\n  padding-top: 40px;\n}\n\n.items-container[_ngcontent-%COMP%]   pulse-pic[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n\n.break[_ngcontent-%COMP%] {\n  flex-basis: 100% !important;\n  height: 0;\n  margin-top: 30px;\n}\n\n.filter[_ngcontent-%COMP%] {\n  margin: 5px;\n  flex-wrap: wrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhdm9yaXRlLWl0ZW1zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtBQUNGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBQUY7O0FBRUU7RUFDRSxtQkFBQTtBQUFKOztBQUlBO0VBQ0UsMkJBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FBREYiLCJmaWxlIjoiZmF2b3JpdGUtaXRlbXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICBmbGV4OiBhdXRvO1xyXG59XHJcblxyXG5cclxuLml0ZW1zLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwYWRkaW5nLXRvcDogNDBweDtcclxuXHJcbiAgJiBwdWxzZS1waWMge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICB9XHJcbn1cclxuXHJcbi5icmVhayB7XHJcbiAgZmxleC1iYXNpczogMTAwJSAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMDtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcblxyXG4uZmlsdGVyIHtcclxuICBtYXJnaW46IDVweDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 5088:
/*!*******************************************************!*\
  !*** ./src/app/pages/favorite-items/favoriteGames.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "favoriteGames": () => (/* binding */ favoriteGames)
/* harmony export */ });
/* harmony import */ var _game_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.interface */ 2989);

const folder = '../../../assets/games/';
const favoriteGames = [
    {
        src: folder + 'dominion.JPG',
        tagLine: 'Dominion (Alchemist, Gilden, Reiche Ernte)',
        category: _game_interface__WEBPACK_IMPORTED_MODULE_0__.CategoryEnum.Strategie,
        maxPlayer: 4
    },
    {
        src: folder + '7wduel.JPG',
        tagLine: '7 Wonders Duel ',
        category: _game_interface__WEBPACK_IMPORTED_MODULE_0__.CategoryEnum.Strategie,
        maxPlayer: 2
    },
    {
        src: folder + '7w.JPG',
        tagLine: '7 Wonders ',
        category: _game_interface__WEBPACK_IMPORTED_MODULE_0__.CategoryEnum.Strategie,
        maxPlayer: 7
    },
    {
        src: folder + '7wleaders.JPG',
        tagLine: '7 Wonders Erweiterung Leaders',
        category: _game_interface__WEBPACK_IMPORTED_MODULE_0__.CategoryEnum.Strategie,
        maxPlayer: 7
    },
    {
        src: folder + 'tabu.JPG',
        tagLine: 'Tabu',
        category: _game_interface__WEBPACK_IMPORTED_MODULE_0__.CategoryEnum.Schnelligkeit,
        maxPlayer: -1
    },
    {
        src: folder + 'villainious-grundspiel.jpg',
        tagLine: 'Villainious Grundspiel',
        category: _game_interface__WEBPACK_IMPORTED_MODULE_0__.CategoryEnum.Strategie,
        maxPlayer: 4
    },
    {
        src: folder + 'v-rot.JPG',
        tagLine: 'Villainious - Rote Erweiterung',
        category: _game_interface__WEBPACK_IMPORTED_MODULE_0__.CategoryEnum.Strategie,
        maxPlayer: 4
    },
    {
        src: folder + 'v-lila.JPG',
        tagLine: 'Villainious - Lila Erweiterung',
        category: _game_interface__WEBPACK_IMPORTED_MODULE_0__.CategoryEnum.Strategie,
        maxPlayer: 4
    },
    {
        src: folder + 'v-gelb.JPG',
        tagLine: 'Villainious - Gelbe Erweiterung',
        category: _game_interface__WEBPACK_IMPORTED_MODULE_0__.CategoryEnum.Strategie,
        maxPlayer: 4
    },
    {
        src: folder + 'v-orange.JPG',
        tagLine: 'Villainious - Orange Erweiterung',
        category: _game_interface__WEBPACK_IMPORTED_MODULE_0__.CategoryEnum.Strategie,
        maxPlayer: 4
    },
    {
        src: folder + 'v-zinober.JPG',
        tagLine: 'Villainious - Dunkel Orange Ext.',
        category: _game_interface__WEBPACK_IMPORTED_MODULE_0__.CategoryEnum.Strategie,
        maxPlayer: 4
    },
    {
        src: folder + 'mysterium.JPG',
        tagLine: 'Mysterium',
        category: _game_interface__WEBPACK_IMPORTED_MODULE_0__.CategoryEnum.Strategie,
        maxPlayer: 7
    },
    {
        src: folder + '5mindungeon.JPG',
        tagLine: '5 Minutes Dungeon',
        category: _game_interface__WEBPACK_IMPORTED_MODULE_0__.CategoryEnum.Strategie,
        maxPlayer: 2
    },
    {
        src: folder + '5minmystery.JPG',
        tagLine: '5 Minutes Mystery',
        category: _game_interface__WEBPACK_IMPORTED_MODULE_0__.CategoryEnum.Strategie,
        maxPlayer: 2
    },
    {
        src: folder + 'blokus.JPG',
        tagLine: 'Blokus',
        category: _game_interface__WEBPACK_IMPORTED_MODULE_0__.CategoryEnum.Strategie,
        maxPlayer: 2
    },
    {
        src: folder + 'tempel.JPG',
        tagLine: 'Tempel des Schreckens',
        category: _game_interface__WEBPACK_IMPORTED_MODULE_0__.CategoryEnum.Bluff,
        maxPlayer: 2
    },
    {
        src: folder + 'codenames.JPG',
        tagLine: 'Codenames',
        category: _game_interface__WEBPACK_IMPORTED_MODULE_0__.CategoryEnum.Strategie,
        maxPlayer: 2
    },
    {
        src: folder + 'roborally.JPG',
        tagLine: 'Roborally',
        category: _game_interface__WEBPACK_IMPORTED_MODULE_0__.CategoryEnum.Strategie,
        maxPlayer: 6
    },
    {
        src: folder + 'munchkin.JPG',
        tagLine: 'Munchkin',
        category: _game_interface__WEBPACK_IMPORTED_MODULE_0__.CategoryEnum.Strategie,
        maxPlayer: -1
    },
    {
        src: folder + 'bang.JPG',
        tagLine: 'Bang',
        category: _game_interface__WEBPACK_IMPORTED_MODULE_0__.CategoryEnum.Strategie,
        maxPlayer: -1
    },
    {
        src: folder + 'catanduell.JPG',
        tagLine: 'Catan - das Duell',
        category: _game_interface__WEBPACK_IMPORTED_MODULE_0__.CategoryEnum.Strategie,
        maxPlayer: 2
    },
    {
        src: folder + 'phase10.JPG',
        tagLine: 'Phase 10',
        category: _game_interface__WEBPACK_IMPORTED_MODULE_0__.CategoryEnum.Strategie,
        maxPlayer: 6
    },
    {
        src: folder + 'hornochse.JPG',
        tagLine: 'Hornochse',
        category: _game_interface__WEBPACK_IMPORTED_MODULE_0__.CategoryEnum.Strategie,
        maxPlayer: 6
    },
    {
        src: folder + 'hive.JPG',
        tagLine: 'Hive',
        category: _game_interface__WEBPACK_IMPORTED_MODULE_0__.CategoryEnum.Strategie,
        maxPlayer: 2
    },
    {
        src: folder + 'diamant.JPG',
        tagLine: 'Diamant',
        category: _game_interface__WEBPACK_IMPORTED_MODULE_0__.CategoryEnum.Bluff,
        maxPlayer: 4
    },
    {
        src: folder + 'nobodysperfect.JPG',
        tagLine: 'Nobody\'s Perfect',
        category: _game_interface__WEBPACK_IMPORTED_MODULE_0__.CategoryEnum.Bluff,
        maxPlayer: -1
    },
    {
        src: folder + 'doodelidoo.JPG',
        tagLine: 'DODELIDO',
        category: _game_interface__WEBPACK_IMPORTED_MODULE_0__.CategoryEnum.Schnelligkeit,
        maxPlayer: -1
    },
    {
        src: folder + 'risiko.JPG',
        tagLine: 'Risiko',
        category: _game_interface__WEBPACK_IMPORTED_MODULE_0__.CategoryEnum.Strategie,
        maxPlayer: -1
    },
    {
        src: folder + 'scrabble.JPG',
        tagLine: 'Scrabble',
        category: _game_interface__WEBPACK_IMPORTED_MODULE_0__.CategoryEnum.Strategie,
        maxPlayer: -1
    },
    {
        src: folder + 'ticktackboom.JPG',
        tagLine: 'Tick Tack Boom',
        category: _game_interface__WEBPACK_IMPORTED_MODULE_0__.CategoryEnum.Schnelligkeit,
        maxPlayer: -1
    },
    {
        src: folder + 'skipbo.JPG',
        tagLine: 'Skipbo',
        category: _game_interface__WEBPACK_IMPORTED_MODULE_0__.CategoryEnum.Strategie,
        maxPlayer: 4
    },
    {
        src: folder + 'cluedo.JPG',
        tagLine: 'Cluedo',
        category: _game_interface__WEBPACK_IMPORTED_MODULE_0__.CategoryEnum.Strategie,
        maxPlayer: -1
    },
    {
        src: folder + 'ligretto.JPG',
        tagLine: 'Ligretto',
        category: _game_interface__WEBPACK_IMPORTED_MODULE_0__.CategoryEnum.Schnelligkeit,
        maxPlayer: -1
    },
    {
        src: folder + 'swindler.JPG',
        tagLine: 'Swindler',
        category: _game_interface__WEBPACK_IMPORTED_MODULE_0__.CategoryEnum.Strategie,
        maxPlayer: 4
    },
    {
        src: folder + 'clever3.JPG',
        tagLine: 'Clever hoch 3',
        category: _game_interface__WEBPACK_IMPORTED_MODULE_0__.CategoryEnum.Strategie,
        maxPlayer: 4
    },
    {
        src: folder + 'wizard.JPG',
        tagLine: 'Wizard',
        category: _game_interface__WEBPACK_IMPORTED_MODULE_0__.CategoryEnum.Strategie,
        maxPlayer: 6
    },
    {
        src: folder + 'taverne.JPG',
        tagLine: 'Taverne',
        category: _game_interface__WEBPACK_IMPORTED_MODULE_0__.CategoryEnum.Strategie,
        maxPlayer: 4
    },
    {
        src: folder + 'unoflip.JPG',
        tagLine: 'Uno Flip',
        category: _game_interface__WEBPACK_IMPORTED_MODULE_0__.CategoryEnum.Strategie,
        maxPlayer: 10
    },
    {
        src: folder + 'maus.JPG',
        tagLine: 'Maus & Mystik',
        category: _game_interface__WEBPACK_IMPORTED_MODULE_0__.CategoryEnum.Strategie,
        maxPlayer: 4
    },
    {
        src: folder + 'betrayal.JPG',
        tagLine: 'Betrayal at the House on the Hill',
        category: _game_interface__WEBPACK_IMPORTED_MODULE_0__.CategoryEnum.Strategie,
        maxPlayer: 6
    },
    {
        src: folder + 'hochstapler.JPG',
        tagLine: 'Hochstapler',
        category: _game_interface__WEBPACK_IMPORTED_MODULE_0__.CategoryEnum.Strategie,
        maxPlayer: 6
    },
    {
        src: folder + 'sonar.JPG',
        tagLine: 'Capatain Sonar',
        category: _game_interface__WEBPACK_IMPORTED_MODULE_0__.CategoryEnum.Strategie,
        maxPlayer: 8
    },
];
/*

{
  src: '',
  tagLine: '',
  category: CategoryEnum.Strategie,
  maxPlayer: -1
},

*/ 


/***/ }),

/***/ 2989:
/*!********************************************************!*\
  !*** ./src/app/pages/favorite-items/game.interface.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryEnum": () => (/* binding */ CategoryEnum)
/* harmony export */ });
var CategoryEnum;
(function (CategoryEnum) {
    CategoryEnum[CategoryEnum["Strategie"] = 0] = "Strategie";
    CategoryEnum[CategoryEnum["Bluff"] = 1] = "Bluff";
    CategoryEnum[CategoryEnum["Schnelligkeit"] = 2] = "Schnelligkeit";
})(CategoryEnum || (CategoryEnum = {}));


/***/ }),

/***/ 8700:
/*!**************************************************************!*\
  !*** ./src/app/pages/iceland-page/iceland-page.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IcelandPageComponent": () => (/* binding */ IcelandPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class IcelandPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
IcelandPageComponent.ɵfac = function IcelandPageComponent_Factory(t) { return new (t || IcelandPageComponent)(); };
IcelandPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IcelandPageComponent, selectors: [["app-iceland-page"]], decls: 1, vars: 0, consts: [["src", "https://www.google.com/maps/d/embed?mid=1zBMUpYqxThLFixJbSeSMIq-N3QjCTXo&ehbc=2E312F", "width", "640", "height", "480"]], template: function IcelandPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "iframe", 0);
    } }, styles: ["iframe[_ngcontent-%COMP%] {\n  height: calc(100vH - 60px);\n  padding-top: 30px;\n  width: 100vW;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImljZWxhbmQtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBQ0oiLCJmaWxlIjoiaWNlbGFuZC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaWZyYW1lIHtcclxuICAgIGhlaWdodDogY2FsYygxMDB2SCAtIDYwcHgpO1xyXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICB3aWR0aDogMTAwdlc7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 5728:
/*!****************************************************************!*\
  !*** ./src/app/pages/iceland-video/iceland-video.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IcelandVideoComponent": () => (/* binding */ IcelandVideoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class IcelandVideoComponent {
    constructor() { }
    ngOnInit() {
    }
}
IcelandVideoComponent.ɵfac = function IcelandVideoComponent_Factory(t) { return new (t || IcelandVideoComponent)(); };
IcelandVideoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IcelandVideoComponent, selectors: [["app-iceland-video"]], decls: 1, vars: 0, consts: [["src", "https://drive.google.com/file/d/1RQ7_NPxWwDKAUReacZEMZFFrxjvnSZNX/preview", "width", "640", "height", "480", "allow", "autoplay"]], template: function IcelandVideoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "iframe", 0);
    } }, styles: ["iframe[_ngcontent-%COMP%] {\n  height: calc(100vH - 60px);\n  padding-top: 30px;\n  width: 100vW;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImljZWxhbmQtdmlkZW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUNKIiwiZmlsZSI6ImljZWxhbmQtdmlkZW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpZnJhbWUge1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZIIC0gNjBweCk7XHJcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgIHdpZHRoOiAxMDB2VztcclxufSJdfQ== */"] });


/***/ }),

/***/ 8950:
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagesModule": () => (/* binding */ PagesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _favorite_items_favorite_items_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./favorite-items/favorite-items.component */ 1149);
/* harmony import */ var _personal_personal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./personal/personal.component */ 6847);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var _iceland_page_iceland_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./iceland-page/iceland-page.component */ 8700);
/* harmony import */ var _iceland_video_iceland_video_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./iceland-video/iceland-video.component */ 5728);
/* harmony import */ var _comic_comic_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comic/comic.component */ 4439);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);








class PagesModule {
}
PagesModule.ɵfac = function PagesModule_Factory(t) { return new (t || PagesModule)(); };
PagesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: PagesModule });
PagesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](PagesModule, { declarations: [_favorite_items_favorite_items_component__WEBPACK_IMPORTED_MODULE_0__.FavoriteItemsComponent,
        _personal_personal_component__WEBPACK_IMPORTED_MODULE_1__.PersonalComponent,
        _iceland_page_iceland_page_component__WEBPACK_IMPORTED_MODULE_3__.IcelandPageComponent,
        _iceland_video_iceland_video_component__WEBPACK_IMPORTED_MODULE_4__.IcelandVideoComponent,
        _comic_comic_component__WEBPACK_IMPORTED_MODULE_5__.ComicComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule], exports: [_favorite_items_favorite_items_component__WEBPACK_IMPORTED_MODULE_0__.FavoriteItemsComponent,
        _personal_personal_component__WEBPACK_IMPORTED_MODULE_1__.PersonalComponent,
        _iceland_page_iceland_page_component__WEBPACK_IMPORTED_MODULE_3__.IcelandPageComponent,
        _comic_comic_component__WEBPACK_IMPORTED_MODULE_5__.ComicComponent] }); })();


/***/ }),

/***/ 6847:
/*!******************************************************!*\
  !*** ./src/app/pages/personal/personal.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PersonalComponent": () => (/* binding */ PersonalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var src_app_shared_factory_add_scroll_out_decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/factory/add-scroll-out.decorator */ 2472);
/* harmony import */ var src_app_shared_factory_animations_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/factory/animations.enum */ 778);
/* harmony import */ var src_app_shared_factory_random_function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/factory/random-function */ 7405);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_social_media_button_social_media_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/social-media-button/social-media-button.component */ 4969);
/* harmony import */ var _shared_pulse_pic_pulse_pic_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/pulse-pic/pulse-pic.component */ 4408);
/* harmony import */ var _shared_scroll_indicator_scroll_indicator_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/scroll-indicator/scroll-indicator.component */ 5314);
/* harmony import */ var _shared_scroll_show_scroll_show_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/scroll-show/scroll-show.component */ 5675);
/* harmony import */ var _shared_text_over_pic_text_over_pic_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/text-over-pic/text-over-pic.component */ 6932);
/* harmony import */ var _shared_hero_text_hero_text_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/hero-text/hero-text.component */ 8912);
/* harmony import */ var _shared_hero_bg_hero_bg_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/hero-bg/hero-bg.component */ 140);
/* harmony import */ var _shared_directives_shortcut_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/directives/shortcut.directive */ 851);
/* harmony import */ var _shared_directives_firework_btn_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/directives/firework-btn.directive */ 8128);
/* harmony import */ var _shared_directives_scroll_percent_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/directives/scroll-percent.directive */ 4838);
/* harmony import */ var _shared_directives_visible_with_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/directives/visible-with.directive */ 6489);
/* harmony import */ var _shared_directives_scroll_property_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/directives/scroll-property.directive */ 693);
/* harmony import */ var _favorite_items_favorite_items_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../favorite-items/favorite-items.component */ 1149);




















function PersonalComponent_favorite_items_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "favorite-items", 55);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("showNotMine", false);
} }
function PersonalComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "div", 56);
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵstyleMapInterpolate1"]("--item: ", item_r5, "");
} }
const _c0 = function (a0) { return { "darkest": a0 }; };
const _c1 = function () { return [1, 2, 3, 4, 5]; };
const _c2 = function () { return ["/iceland-video"]; };
let PersonalComponent = class PersonalComponent {
    constructor(route) {
        this.route = route;
        this.isDayTime = false;
        this.cheat = false;
        this.scrollShowItems = [
            {
                backgroundText: 'Paris',
                foregorundText: 'Ein Leben wie Gott in Frankreich',
            },
            {
                backgroundText: 'Barcelona',
                foregorundText: 'Hat er Berlin gesagt',
            },
            {
                backgroundText: 'Iceland',
                foregorundText: 'Oh mein Gott. Wunderschön.',
            },
            {
                backgroundText: 'Praha',
                foregorundText: 'Krass, Krasser, The Chamber',
            },
            {
                backgroundText: 'Rome',
                foregorundText: 'Vino, Pinsa & Stones',
            }
        ];
        this.darkenBG = false;
        const now = new Date();
        if (now.getHours() < 6 || now.getHours() >= 17) {
            this.isDay = false;
        }
        else {
            this.isDay = true;
            this.isDayTime = true;
        }
        const pictureName = this.isDay ? 'day' : 'night';
        const random = (0,src_app_shared_factory_random_function__WEBPACK_IMPORTED_MODULE_2__.getRandom)(1, 3);
        this.pictureUrl = '../../../assets/pictures/' + pictureName + random + '.jpg';
    }
    get title() {
        return this.isDay ? 'Guten Tag' : 'Guten Abend';
    }
    ngOnInit() {
    }
    handleBgDarken() {
        this.darkenBG = true;
    }
    handleBgLighter() {
        this.darkenBG = false;
    }
};
PersonalComponent.ɵfac = function PersonalComponent_Factory(t) { return new (t || PersonalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_17__.ActivatedRoute)); };
PersonalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineComponent"]({ type: PersonalComponent, selectors: [["app-personal"]], hostVars: 2, hostBindings: function PersonalComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵclassProp"]("daytime", ctx.isDayTime);
    } }, decls: 147, vars: 21, consts: [[1, "scroll-indicator"], [1, "host", 3, "ngClass"], [1, "pre-intro"], ["title", "Let's play a boardgame", "pictureUrl", "", "textclass", "text-2", "picAsBg", "true", 1, "custom"], [1, "intro"], ["playsinline", "", "autoplay", "", "loop", "", "autobuffer", "", 3, "muted"], ["introvideo", ""], ["src", "../../../assets/videos/intro.mp4", "type", "video/mp4"], ["textclass", "text-2", 3, "title", "pictureUrl"], ["textclass", "text-2", "picAsBg", "true", 3, "title", "pictureUrl"], ["scrollProperty", "--scroll", 1, "textboom", 2, "height", "200vH"], [1, "height-vh-xl", "padding-top-xl"], ["src", "../../../assets/pictures/profile-pic.jpg"], [1, "line-container"], ["icon", "facebook", "url", "https://www.facebook.com/egner.kevin"], ["icon", "instagram", "url", "https://www.instagram.com/deinlieblingskevin"], [1, "fw-panel"], ["gamesWrapper", ""], [3, "showNotMine", 4, "visibleWith"], [2, "height", "50vH"], [1, "transition-arrow-container"], ["scrollProperty", "--scale", 2, "font-size", "40px", "scale", "var(--scale)", 3, "minPercent", "maxPercent", "minValue", "maxValue"], [2, "white-space", "nowrap", "font-weight", "bold"], ["class", "transition-arrow-container__arrow", 3, "style", 4, "ngFor", "ngForOf"], ["scrollPercent", "", 2, "height", "50vH", 3, "elementTopVisible"], [1, "center-container", "hero-container"], ["scrollShowWrapper", ""], [3, "items", "withDescription"], ["slot", "template0"], ["src", "../../../assets/pictures/paris1.jpg"], ["src", "../../../assets/pictures/paris2.jpg"], ["slot", "template1"], ["src", "../../../assets/pictures/barc1.jpg"], ["src", "../../../assets/pictures/barc2.jpg"], ["src", "../../../assets/pictures/barc3.jpg"], ["slot", "template2"], [1, "row"], [1, "col-6"], ["size", "md", "src", "../../../assets/pictures/ice4.jpg"], ["size", "md", "src", "../../../assets/pictures/ice2.jpg"], ["src", "../../../assets/pictures/ice1.jpg"], [3, "routerLink"], ["routerLink", "/iceland"], ["src", "../../../assets/pictures/ice3.jpg"], [1, "text-right"], ["slot", "template3"], ["src", "../../../assets/pictures/prag2.jpg"], ["src", "../../../assets/pictures/parg1.jpg"], ["slot", "template4"], ["src", "../../../assets/pictures/rom1.jpg"], ["src", "../../../assets/pictures/rom2.jpg"], ["src", "../../../assets/pictures/rom3.jpg"], [1, "text-slide", 2, "background-color", "var(--theme-color)"], [1, "justified"], ["firework-click", "", "clickShortCutKey", "KeyV", 1, "primary"], [3, "showNotMine"], [1, "transition-arrow-container__arrow"]], template: function PersonalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "app-scroll-indicator");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "div", 1)(3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](4, "text-over-pic", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "div", 4)(6, "video", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](8, "source", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](9, " Ihr Browser unterst\u00FCtzt das Video Element nicht. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](10, "text-over-pic", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](11, "text-over-pic", 8)(12, "text-over-pic", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](13, "div", 10)(14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](15, "Angular Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](17, "Web-Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](19, "Regensburg");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](21, "Passion");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](22, "div", 11)(23, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](24, "Ich bin Kevin");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](25, "pulse-pic", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](27, "social-media-button", 14)(28, "social-media-button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](29, "div", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](31, PersonalComponent_favorite_items_31_Template, 1, 1, "favorite-items", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](32, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](33, "div", 20)(34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](35, " Was ich kann, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](37, " mache ich ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](38, "div", 21)(39, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](40, " selbst ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](41, PersonalComponent_div_41_Template, 1, 3, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](42, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("elementTopVisible", function PersonalComponent_Template_div_elementTopVisible_42_listener() { return ctx.handleBgDarken(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](43, "div", 25)(44, "hero-text");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](45, " Ich zeige dir jetzt ein paar Impressionen aus meinen letzten Reisen. Get Ready! Sch\u00F6n weiter scrollen. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](46, "div", 25)(47, "hero-bg");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](48, " Also? READY??");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](49, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](50, " Dann scroll' weiter! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](51, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](52, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("elementTopVisible", function PersonalComponent_Template_div_elementTopVisible_52_listener() { return ctx.handleBgLighter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](53, "div", null, 26)(55, "scroll-show", 27)(56, "div", 28)(57, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](58, "In Paris habe ich Freunde besucht");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](59, "br")(60, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](61, "Wir hatten schon seit 2019 Tickets f\u00FCrs Moulin Rouge und endlich hat es Corona zugelassen");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](62, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](63, "Wir haben sehr viel gesehen. Den Eifelturm, die Katakomben, die Can-Can-Show im Moulin Rouge, den Arc de Triomphe, ...");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](64, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](65, "Auch kulinarisch hat mich Paris sehr \u00FCberzeugt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](66, "pulse-pic", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](67, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](68, "In Paris habe ich auch das erste Mal Champanger getrunken. Nat\u00FCrlich mit Blick auf den Eifelturm ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](69, "pulse-pic", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](70, "div", 31)(71, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](72, "Barcelona war eine sehr spontane Aktion. Miss C wollte gern auf ein 50s Rockabily-Festival und ich habe sie begleitet.");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](73, "pulse-pic", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](74, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](75, "Mir hat die Stadt ausgesprochen gut gefallen - sehr bunt und architektonisch sehr interessant. Auch das Essen fand ich klasse. (ich liebe die Chicken-Croquettas)");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](76, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](77, "In Barcelona habe ich angefangen mehr Videos statt Fotos zu machen, weil ich ein Videoprojekt machen wollte - das hat dann auch gut funktioniert.");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](78, "pulse-pic", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](79, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](80, "hier eins meiner Souvieniers:");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](81, "pulse-pic", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](82, "div", 35)(83, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](84, "\"Oh mein Gott. Wundersch\u00F6n\" war wohl der h\u00E4ufigste Ausruf meiner Bewunderung. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](85, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](86, " Erdbeben, Vulkanausbruch, Geysier, Schwefellandschaft, Gletscher, ... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](87, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](88, " Jeder Tag war magischer als der andere.");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](89, "div", 36)(90, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](91, "pulse-pic", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](92, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](93, "pulse-pic", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](94, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](95, "Camping. Auf das kann ich eigentlich gerne verzichten, aber weil es auf Island zu praktisch ist, lies es sich nicht vermeiden.");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](96, "pulse-pic", 40)(97, "br")(98, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](99, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](100, "Hier gehts zur Unterseite mit dem Video");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](101, "br")(102, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](103, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](104, "Hier gehts zur Unterseite mit der Reisekarte");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](105, "br")(106, "br")(107, "pulse-pic", 43)(108, "br")(109, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](110, "p", 44)(111, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](112, "Mein tollster Urlaub bisher.");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](113, "div", 45)(114, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](115, "Welcome back to praha!");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](116, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](117, "Zuletzt war ich 2014 in Prag. Dieses Mal mit der Absicht in zwei Horror-Escape-Rooms zu gehen.");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](118, "pulse-pic", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](119, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](120, "Die haben wir dann auch geschafft. Vom zweiten habe ich immer noch einen bleibenden Schaden.");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](121, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](122, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](123, "Nebenbei haben wir uns die sch\u00F6nsten Orte Prags angesehen - die John Lennon Wall ist nur eine davon. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](124, "pulse-pic", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](125, "div", 48)(126, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](127, "Excuse me Sir, you sit on the Table!");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](128, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](129, "Im November ging es nach Rom - und zum Kolosseum.");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](130, "pulse-pic", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](131, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](132, "Wir haben sehr lecker gegessen und das Leben genossen.");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](133, "pulse-pic", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](134, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](135, "\"Sehr geehrte Damen und Herren, ich muss ihnen mitteilen, wir verlieren an H\u00F6he...\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](136, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](137, "\"... aber daf\u00FCr haben Sie ja bezahlt. Wir landen bald.\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](138, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](139, "Jaaa... witzig der Pilot beim R\u00FCckflug...");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](140, "pulse-pic", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](141, "div", 52)(142, "p", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](143, " Der Ursprung f\u00FCr die heutigen Silvesterknaller liegt in China. Der chinesische M\u00F6nch Li Tian erfand im China der Tang-Dynastie das Schwarzpulver \u2013 und erweckte damit nicht nur den Gebrauch von Schusswaffen, sondern auch das Feuerwerk zum Leben. Mit dem damaligen \u201EBahzou\u201C wollten die Menschen b\u00F6se Geister vertreiben.");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](144, "button", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](145, "Klick hier");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](146, "text-over-pic", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction1"](17, _c0, ctx.darkenBG));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("muted", "muted");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("title", ctx.title)("pictureUrl", ctx.pictureUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("title", ctx.title)("pictureUrl", ctx.pictureUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("visibleWith", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("minPercent", 10)("maxPercent", 80)("minValue", 0.5)("maxValue", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction0"](19, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("items", ctx.scrollShowItems)("withDescription", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction0"](20, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("title", "Danke f\u00FCrs Anschauen")("pictureUrl", ctx.pictureUrl);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgForOf, _shared_social_media_button_social_media_button_component__WEBPACK_IMPORTED_MODULE_3__.SocialMediaButtonComponent, _shared_pulse_pic_pulse_pic_component__WEBPACK_IMPORTED_MODULE_4__.PulsePicComponent, _shared_scroll_indicator_scroll_indicator_component__WEBPACK_IMPORTED_MODULE_5__.ScrollIndicatorComponent, _shared_scroll_show_scroll_show_component__WEBPACK_IMPORTED_MODULE_6__.ScrollShowComponent, _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterLinkWithHref, _shared_text_over_pic_text_over_pic_component__WEBPACK_IMPORTED_MODULE_7__.TextOverPicComponent, _shared_hero_text_hero_text_component__WEBPACK_IMPORTED_MODULE_8__.HeroTextComponent, _shared_hero_bg_hero_bg_component__WEBPACK_IMPORTED_MODULE_9__.HeroBgComponent, _shared_directives_shortcut_directive__WEBPACK_IMPORTED_MODULE_10__.ShortCutDirective, _shared_directives_firework_btn_directive__WEBPACK_IMPORTED_MODULE_11__.FireworkDirective, _shared_directives_scroll_percent_directive__WEBPACK_IMPORTED_MODULE_12__.ScrollPercentDirective, _shared_directives_visible_with_directive__WEBPACK_IMPORTED_MODULE_13__.VisibleWithDirective, _shared_directives_scroll_property_directive__WEBPACK_IMPORTED_MODULE_14__.ScrollPropertyDirective, _favorite_items_favorite_items_component__WEBPACK_IMPORTED_MODULE_15__.FavoriteItemsComponent], styles: ["[_nghost-%COMP%] {\n  margin-top: -60px;\n}\n\n.scroll-indicator[_ngcontent-%COMP%] {\n  position: fixed;\n  pointer-events: none;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 999;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  z-index: 80;\n}\n\n\n\n@media screen and (max-width: 1220px) {\n  parallex-layers[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\napp-scroll-indicator[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 100px;\n  right: 100px;\n  pointer-events: all;\n}\n\n@media only screen and (max-width: 1200px) {\n  .column-line[_ngcontent-%COMP%] {\n    grid-template-columns: none !important;\n  }\n}\n\n.column-line[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-column-gap: 10px;\n  color: var(--theme-color-white);\n}\n\n@media only screen and (min-width: 1200px) {\n  .column-line[_ngcontent-%COMP%]:first-child {\n    margin-left: 30px;\n  }\n  .column-line[_ngcontent-%COMP%]:last-child {\n    margin-right: 30px;\n  }\n}\n\ndiv[slot][_ngcontent-%COMP%] {\n  -webkit-backdrop-filter: blur(16px);\n          backdrop-filter: blur(16px);\n  padding: 30px;\n  background-color: var(--glass-bg-color);\n  box-shadow: 0 0 5px 10px var(--glass-item-box-shadow-color);\n}\n\n@media only screen and (min-width: 1200px) {\n  div[slot][_ngcontent-%COMP%] {\n    width: 70%;\n  }\n}\n\n@media only screen and (max-width: 1200px) {\n  div[slot][_ngcontent-%COMP%] {\n    width: 80%;\n  }\n}\n\n@media only screen and (max-width: 768px) {\n  div[slot][_ngcontent-%COMP%] {\n    width: 90%;\n  }\n}\n\ndiv[slot][_ngcontent-%COMP%]     pulse-pic .line-container {\n  padding: min(3vH, 15px) 0;\n}\n\n.parallex-section[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n}\n\n.megatron[_ngcontent-%COMP%] {\n  width: 823px;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  overflow: hidden;\n  z-index: 1;\n  margin: 0 auto;\n  background: var(--color-black);\n  transform: translateY(calc(50vh - 50% + var(--r-localnav-height) * 0.5));\n  padding: 1px;\n  border: 1px solid var(--color-black);\n  margin-top: 75vh;\n}\n\n.mega-text[_ngcontent-%COMP%] {\n  font-size: 56px;\n  line-height: 1.0714285714;\n  font-weight: 600;\n  letter-spacing: -0.005em;\n  font-family: SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif;\n}\n\n  .bg-push-up .parallex-section {\n  background-position: center !important;\n  background-position-y: -140px !important;\n}\n\n.personal-thanks-text[_ngcontent-%COMP%] {\n  background-color: var(--primary-color);\n  color: var(--theme-color-white);\n  font-size: 5vw;\n  font-weight: bold;\n  margin: 0 auto;\n  padding: 10px;\n  width: 120vW;\n  height: 100%;\n  text-align: center;\n  position: relative;\n  transform: rotate(334deg);\n}\n\n.slide-in-l[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 20vH;\n  text-align: right;\n}\n\n.slide-in-l[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: table-cell;\n  vertical-align: middle;\n  color: var(--theme-color-white);\n  padding: 10px;\n  font-size: min(6vW, 60px);\n}\n\n.slide-in-r[_ngcontent-%COMP%] {\n  right: 0;\n  top: 30vH;\n  text-align: left;\n}\n\n.slide-in-r[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: table-cell;\n  vertical-align: middle;\n  color: var(--theme-color-white);\n  padding: 10px;\n  font-size: min(6vW, 60px);\n}\n\n.flyer-text[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 40vW;\n  background-color: red;\n  display: table;\n  box-shadow: 10px 13px 40px -10px var(--color-black);\n}\n\n.flyer-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: serif !important;\n}\n\n  stroke-animation {\n  padding-top: 200px;\n  padding-right: 190px;\n}\n\n  scroll-show p {\n  color: var(--theme-color-white) !important;\n}\n\n.pre-intro[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1;\n  background-color: var(--theme-color);\n  background-size: cover;\n  overflow: hidden;\n  -webkit-clip-path: inset(0);\n          clip-path: inset(0);\n  -webkit-animation-name: fade-animation;\n          animation-name: fade-animation;\n  -webkit-animation-duration: 5s;\n          animation-duration: 5s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-iteration-count: 1;\n          animation-iteration-count: 1;\n  -webkit-animation-direction: normal;\n          animation-direction: normal;\n}\n\n.pre-intro[_ngcontent-%COMP%]   text-over-pic[_ngcontent-%COMP%] {\n  -webkit-clip-path: inset(0);\n          clip-path: inset(0);\n  position: fixed;\n  margin: 0;\n  padding: 0;\n  top: 50%;\n  left: 50%;\n  min-width: 100%;\n  min-height: 100%;\n  width: auto;\n  height: auto;\n  transform: translate(-50%, -50%);\n}\n\n\n\n.textboom[_ngcontent-%COMP%] {\n  position: relative;\n  --scroll: 0;\n  --my-scroll: calc(var(--scroll) - 1);\n  overflow: hidden;\n  -webkit-clip-path: inset(0);\n          clip-path: inset(0);\n}\n\n.textboom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  position: fixed;\n  font-weight: bold;\n  white-space: nowrap;\n}\n\n.textboom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(4) {\n  font-size: 90px;\n  left: calc(var(--my-scroll) * 100 * 20px);\n  top: 10vH;\n  white-space: nowrap;\n  opacity: 0.5;\n}\n\n.textboom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(1) {\n  font-size: 90px;\n  left: calc(var(--my-scroll) * 100 * 8px);\n  top: 30vH;\n  white-space: nowrap;\n  opacity: 0.8;\n}\n\n.textboom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(2) {\n  font-size: 60px;\n  right: calc(var(--my-scroll) * 100 * 10px);\n  top: 60vH;\n  white-space: nowrap;\n  opacity: 0.6;\n}\n\n.textboom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(3) {\n  font-size: 120px;\n  left: calc(var(--my-scroll) * 100 * 16px);\n  \n  top: 75vH;\n  opacity: 0.4;\n}\n\n\n\n.transition-arrow-container[_ngcontent-%COMP%] {\n  overflow-y: visible;\n  overflow-x: clip;\n  position: relative;\n  height: 150vH;\n  padding-top: 30vH;\n  font-size: 40px;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n}\n\n.transition-arrow-container[_ngcontent-%COMP%]::after {\n  content: \"\";\n  background-color: black;\n  width: 100vW;\n  height: 70vH;\n  position: absolute;\n  bottom: -30vH;\n}\n\n.transition-arrow-container__arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  top: calc((6 - var(--item)) * -50px);\n  transform: translateX(-50%);\n  z-index: -1;\n  width: 0;\n  height: 0;\n  border-left: 60vW solid transparent;\n  border-right: 60vW solid transparent;\n  border-bottom: 60vW solid black;\n}\n\n.transition-arrow-container__arrow[_ngcontent-%COMP%]:nth-of-type(2) {\n  border-bottom-color: #609491;\n}\n\n.transition-arrow-container__arrow[_ngcontent-%COMP%]:nth-of-type(3) {\n  border-bottom-color: #346360;\n}\n\n.transition-arrow-container__arrow[_ngcontent-%COMP%]:nth-of-type(4) {\n  border-bottom-color: #194240;\n}\n\n.transition-arrow-container__arrow[_ngcontent-%COMP%]:nth-of-type(5) {\n  border-bottom-color: #0a2422;\n}\n\n@-webkit-keyframes fade-animation {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n@keyframes fade-animation {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n.intro[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100vh;\n  background: url('intro-default.jpg') no-repeat left top scroll;\n  background-size: cover;\n  overflow: hidden;\n  -webkit-clip-path: inset(0);\n          clip-path: inset(0);\n}\n\n.intro[_ngcontent-%COMP%]::before {\n  content: \"\";\n  border: 2px solid rgba(255, 255, 255, 0.6588235294);\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: 16px;\n  z-index: 1;\n}\n\n.intro[_ngcontent-%COMP%]::after {\n  content: \"\";\n  border: 2px solid rgba(255, 255, 255, 0.2117647059);\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: 32px;\n}\n\n.intro[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  position: absolute;\n  margin: 0;\n  padding: 0;\n  top: 50%;\n  left: 50%;\n  min-width: 100%;\n  min-height: 100%;\n  width: auto;\n  height: auto;\n  transform: translate(-50%, -50%);\n}\n\n.intro[_ngcontent-%COMP%]   text-over-pic[_ngcontent-%COMP%] {\n  -webkit-clip-path: inset(0);\n          clip-path: inset(0);\n  position: fixed;\n  margin: 0;\n  padding: 0;\n  top: 50%;\n  left: 50%;\n  min-width: 100%;\n  min-height: 100%;\n  width: auto;\n  height: auto;\n  transform: translate(-50%, -50%);\n}\n\n[_nghost-%COMP%]  text-over-pic.custom .text-2 {\n  font-weight: 100;\n}\n\n@media (max-width: 510px) {\n  [_nghost-%COMP%]  text-over-pic.custom .text-2 {\n    font-weight: 100;\n    font-size: 45px;\n  }\n}\n\nhero-text[_ngcontent-%COMP%] {\n  max-width: 1000px;\n}\n\nhero-bg[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n[_nghost-%COMP%]     hero-text.hero-end article p {\n  background: linear-gradient(180deg, transparent, var(--hero-text-font-highlight), var(--hero-text-font-highlight), var(--theme-color-white), var(--hero-text-font-highlight), var(--hero-text-font-highlight), transparent);\n}\n\n.host[_ngcontent-%COMP%] {\n  transition: background-color 5s;\n}\n\n.darkest[_ngcontent-%COMP%] {\n  background-color: black;\n  transition: background-color 1s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcnNvbmFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ssaUJBQUE7QUFDTDs7QUFFQTtFQUNJLGVBQUE7RUFDQSxvQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtVQUFBLGlCQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUdBLHlFQUFBOztBQUNBO0VBQ0k7SUFDSSxhQUFBO0VBQU47QUFDRjs7QUFJQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFFQSxtQkFBQTtBQUhKOztBQU1BO0VBQ0k7SUFDSSxzQ0FBQTtFQUhOO0FBQ0Y7O0FBTUE7RUFDSSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0FBSko7O0FBTUk7RUFFSTtJQUVJLGlCQUFBO0VBTlY7RUFRTTtJQUVJLGtCQUFBO0VBUFY7QUFDRjs7QUFXQTtFQW1CSSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLHVDQUFBO0VBRUEsMkRBQUE7QUEzQko7O0FBTVE7RUFESjtJQUdRLFVBQUE7RUFKVjtBQUNGOztBQU1RO0VBTko7SUFRUSxVQUFBO0VBSlY7QUFDRjs7QUFNUTtFQVhKO0lBYVEsVUFBQTtFQUpWO0FBQ0Y7O0FBY0k7RUFDSSx5QkFBQTtBQVpSOztBQWdCQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQWJKOztBQWdCQTtFQUNJLFlBQUE7RUFFQSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLDhCQUFBO0VBQ0Esd0VBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtBQWRKOztBQWlCQTtFQUNJLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1RkFBQTtBQWRKOztBQWlCQTtFQUNJLHNDQUFBO0VBQ0Esd0NBQUE7QUFkSjs7QUFrQkE7RUFDSSxzQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQWZKOztBQW1CRTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFFQSxpQkFBQTtBQWpCSjs7QUFrQkk7RUFDSSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsK0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7QUFoQlI7O0FBbUJFO0VBQ0UsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQWhCSjs7QUFrQkk7RUFDSSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsK0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7QUFoQlI7O0FBcUJFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsbURBQUE7QUFsQko7O0FBb0JJO0VBRUksNkJBQUE7QUFuQlI7O0FBdUJFO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtBQXBCSjs7QUF1QkU7RUFDRSwwQ0FBQTtBQXBCSjs7QUF1QkE7RUFDSSxrQkFBQTtFQUVBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBRUEsb0NBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7VUFBQSxtQkFBQTtFQUNBLHNDQUFBO1VBQUEsOEJBQUE7RUFDQSw4QkFBQTtVQUFBLHNCQUFBO0VBQ0EsdUNBQUE7VUFBQSwrQkFBQTtFQUNBLHFDQUFBO1VBQUEsNkJBQUE7RUFDQSxvQ0FBQTtVQUFBLDRCQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtBQXRCSjs7QUF3Qkk7RUFFSSwyQkFBQTtVQUFBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGdDQUFBO0FBdkJSOztBQTJCQSxZQUFBOztBQUNBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO1VBQUEsbUJBQUE7QUF4Qko7O0FBeUJJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUF2QlI7O0FBeUJJO0VBQ0ksZUFBQTtFQUNBLHlDQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQXZCUjs7QUF5Qkk7RUFDSSxlQUFBO0VBQ0Esd0NBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBdkJSOztBQTBCSTtFQUNJLGVBQUE7RUFDQSwwQ0FBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUF4QlI7O0FBMkJJO0VBQ0ksZ0JBQUE7RUFDQSx5Q0FBQTtFQUNBLHdCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUF6QlI7O0FBZ0NBLFdBQUE7O0FBQ0E7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUE3Qko7O0FBK0JJO0VBQ0ksV0FBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUE3QlI7O0FBaUNBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0Esb0NBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLG1DQUFBO0VBQ0Esb0NBQUE7RUFDQSwrQkFBQTtBQTlCSjs7QUFpQ0E7RUFDSSw0QkFBQTtBQTlCSjs7QUFpQ0E7RUFDSSw0QkFBQTtBQTlCSjs7QUFpQ0E7RUFDSSw0QkFBQTtBQTlCSjs7QUFpQ0E7RUFDSSw0QkFBQTtBQTlCSjs7QUFpQ0E7RUFDSTtJQUFNLFVBQUE7RUE3QlI7RUE4QkU7SUFBTSxVQUFBO0VBM0JSO0FBQ0Y7O0FBd0JBO0VBQ0k7SUFBTSxVQUFBO0VBN0JSO0VBOEJFO0lBQU0sVUFBQTtFQTNCUjtBQUNGOztBQTZCQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLDhEQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO1VBQUEsbUJBQUE7QUEzQko7O0FBNkJJO0VBQ0ksV0FBQTtFQUNBLG1EQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQTNCUjs7QUErQkk7RUFDSSxXQUFBO0VBQ0EsbURBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUE3QlI7O0FBZ0NFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFFQSxnQ0FBQTtBQTlCSjs7QUFpQ0U7RUFFRSwyQkFBQTtVQUFBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGdDQUFBO0FBaENKOztBQXNDQTtFQUNJLGdCQUFBO0FBbkNKOztBQXNDRTtFQUNFO0lBQ0ksZ0JBQUE7SUFDQSxlQUFBO0VBbkNOO0FBQ0Y7O0FBdUNBO0VBQ0ksaUJBQUE7QUFyQ0o7O0FBd0NBO0VBRUksV0FBQTtBQXRDSjs7QUEwQ0E7RUFDSSwyTkFBQTtBQXZDSjs7QUFpREE7RUFDSSwrQkFBQTtBQTlDSjs7QUFpREE7RUFDSSx1QkFBQTtFQUNBLCtCQUFBO0FBOUNKIiwiZmlsZSI6InBlcnNvbmFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3R7XHJcbiAgICAgbWFyZ2luLXRvcDogLTYwcHg7XHJcbiB9XHJcblxyXG4uc2Nyb2xsLWluZGljYXRvcnsgICAgXHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHotaW5kZXg6IDk5OTtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgei1pbmRleDo4MDtcclxufVxyXG5cclxuXHJcbi8qIE9uIHNjcmVlbnMgdGhhdCBhcmUgNjAwcHggb3IgbGVzcywgc2V0IHRoZSBiYWNrZ3JvdW5kIGNvbG9yIHRvIG9saXZlICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMjBweCkge1xyXG4gICAgcGFyYWxsZXgtbGF5ZXJze1xyXG4gICAgICAgIGRpc3BsYXk6bm9uZTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuYXBwLXNjcm9sbC1pbmRpY2F0b3IgeyAgICBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMTAwcHg7XHJcbiAgICByaWdodDogMTAwcHg7XHJcbiAgICBcclxuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KXtcclxuICAgIC5jb2x1bW4tbGluZXtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcblxyXG4uY29sdW1uLWxpbmUge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XHJcbiAgICBncmlkLWNvbHVtbi1nYXA6IDEwcHg7XHJcbiAgICBjb2xvcjogdmFyKC0tdGhlbWUtY29sb3Itd2hpdGUpO1xyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KVxyXG4gICAge1xyXG4gICAgICAgICY6Zmlyc3QtY2hpbGRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOmxhc3QtY2hpbGRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICAgICAgICB9XHJcbiAgICB9ICAgXHJcbn1cclxuXHJcbmRpdltzbG90XSB7XHJcbiAgICAmIHtcclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gICAgICAgICAgICAvLyBodWdlIHNjcmVlblxyXG4gICAgICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAgICAgICAgICAgLy8gbWVkaXVtIHNjcmVlbiBcclxuICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgICAgLy8gc21hbGwgc2NyZWVuXHJcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTZweCk7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ2xhc3MtYmctY29sb3IpO1xyXG4gICAgXHJcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4IDEwcHggdmFyKC0tZ2xhc3MtaXRlbS1ib3gtc2hhZG93LWNvbG9yKTtcclxuXHJcbiAgICA6Om5nLWRlZXAgcHVsc2UtcGljIC5saW5lLWNvbnRhaW5lciB7XHJcbiAgICAgICAgcGFkZGluZzogbWluKDN2SCwgMTVweCkgMDtcclxuICAgIH1cclxufVxyXG5cclxuLnBhcmFsbGV4LXNlY3Rpb257XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ubWVnYXRyb257XHJcbiAgICB3aWR0aDogODIzcHg7XHJcblxyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgIHRvcDogMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItYmxhY2spO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKGNhbGMoNTB2aCAtIDUwJSArIHZhcigtLXItbG9jYWxuYXYtaGVpZ2h0KSowLjUpKTtcclxuICAgIHBhZGRpbmc6IDFweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWJsYWNrKTtcclxuICAgIG1hcmdpbi10b3A6IDc1dmg7XHJcbn1cclxuXHJcbi5tZWdhLXRleHR7XHJcbiAgICBmb250LXNpemU6IDU2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS4wNzE0Mjg1NzE0O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMDVlbTtcclxuICAgIGZvbnQtZmFtaWx5OiBTRiBQcm8gRGlzcGxheSxTRiBQcm8gSWNvbnMsSGVsdmV0aWNhIE5ldWUsSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuYmctcHVzaC11cCAucGFyYWxsZXgtc2VjdGlvbntcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiAtMTQwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLy8gZ2xlaWNoZSBtZXRob2RlIHdpZSBtaXQgdGV4dC1vdmVyLXBpYyBjb21wb25lbnRlXHJcbi5wZXJzb25hbC10aGFua3MtdGV4dCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgIGNvbG9yOiB2YXIoLS10aGVtZS1jb2xvci13aGl0ZSk7XHJcbiAgICBmb250LXNpemU6IDV2dztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgd2lkdGg6IDEyMHZXO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzM0ZGVnKVxyXG4gIH1cclxuXHJcblxyXG4gIC5zbGlkZS1pbi1se1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDowO1xyXG4gICAgdG9wOiAyMHZIO1xyXG4gICAgXHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICYgPiBzcGFueyAgICAgICAgXHJcbiAgICAgICAgZGlzcGxheTp0YWJsZS1jZWxsO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOm1pZGRsZTtcclxuICAgICAgICBjb2xvcjogdmFyKC0tdGhlbWUtY29sb3Itd2hpdGUpO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7ICAgICBcclxuICAgICAgICBmb250LXNpemU6IG1pbig2dlcsIDYwcHgpO1xyXG4gICAgfVxyXG4gIH1cclxuICAuc2xpZGUtaW4tcntcclxuICAgIHJpZ2h0OjA7XHJcbiAgICB0b3A6IDMwdkg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0OyAgIFxyXG4gICAgXHJcbiAgICAmID4gc3BhbnsgICAgICAgIFxyXG4gICAgICAgIGRpc3BsYXk6dGFibGUtY2VsbDtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXRoZW1lLWNvbG9yLXdoaXRlKTtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogbWluKDZ2VywgNjBweCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBcclxuICAuZmx5ZXItdGV4dHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgICAgXHJcbiAgICB3aWR0aDogNDB2VztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDsgICAgXHJcbiAgICBkaXNwbGF5OnRhYmxlOyAgICBcclxuICAgIGJveC1zaGFkb3c6IDEwcHggMTNweCA0MHB4IC0xMHB4IHZhcigtLWNvbG9yLWJsYWNrKTtcclxuXHJcbiAgICAmIHNwYW4geyAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBzZXJpZiAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgOjpuZy1kZWVwIHN0cm9rZS1hbmltYXRpb257XHJcbiAgICBwYWRkaW5nLXRvcDogMjAwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxOTBweDtcclxuICB9XHJcblxyXG4gIDo6bmctZGVlcCBzY3JvbGwtc2hvdyBwIHtcclxuICAgIGNvbG9yOiB2YXIoLS10aGVtZS1jb2xvci13aGl0ZSkgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4ucHJlLWludHJve1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgXHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB6LWluZGV4OiAxO1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRoZW1lLWNvbG9yKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgY2xpcC1wYXRoOiBpbnNldCgwKTtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBmYWRlLWFuaW1hdGlvbjtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogNXM7XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xyXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7IC8vb2RlciBhbHRlcm5hdGVcclxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XHJcbiAgICBhbmltYXRpb24tZGlyZWN0aW9uOiBub3JtYWw7XHJcblxyXG4gICAgJiB0ZXh0LW92ZXItcGlje1xyXG4gICAgICBcclxuICAgICAgICBjbGlwLXBhdGg6IGluc2V0KDApO1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgIH1cclxufVxyXG5cclxuLyoqKioqKioqKioqL1xyXG4udGV4dGJvb20ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLS1zY3JvbGw6IDA7XHJcbiAgICAtLW15LXNjcm9sbDogY2FsYyh2YXIoLS1zY3JvbGwpIC0gMSk7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgY2xpcC1wYXRoOiBpbnNldCgwKTtcclxuICAgICYgcCB7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB9XHJcbiAgICAmIHA6bnRoLWNoaWxkKDQpIHsgICAgICAgIFxyXG4gICAgICAgIGZvbnQtc2l6ZTogOTBweDsgICAgICAgIFxyXG4gICAgICAgIGxlZnQ6IGNhbGModmFyKC0tbXktc2Nyb2xsKSAqIDEwMCAqIDIwcHgpO1xyXG4gICAgICAgIHRvcDogMTB2SDtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIG9wYWNpdHk6IC41O1xyXG4gICAgfVxyXG4gICAgJiBwOm50aC1jaGlsZCgxKSB7ICAgICAgICBcclxuICAgICAgICBmb250LXNpemU6IDkwcHg7ICAgICAgICBcclxuICAgICAgICBsZWZ0OiBjYWxjKHZhcigtLW15LXNjcm9sbCkgKiAxMDAgKiA4cHgpO1xyXG4gICAgICAgIHRvcDogMzB2SDtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIG9wYWNpdHk6IC44O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmIHA6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICBmb250LXNpemU6IDYwcHg7ICAgICAgICBcclxuICAgICAgICByaWdodDogY2FsYyh2YXIoLS1teS1zY3JvbGwpICogMTAwICogMTBweCk7XHJcbiAgICAgICAgdG9wOiA2MHZIO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgb3BhY2l0eTogLjY7XHJcbiAgICB9XHJcbiAgICBcclxuICAgICYgcDpudGgtY2hpbGQoMykge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTIwcHg7ICAgICAgICBcclxuICAgICAgICBsZWZ0OiBjYWxjKHZhcigtLW15LXNjcm9sbCkgKiAxMDAgKiAxNnB4KTtcclxuICAgICAgICAvKmxlZXJ6ZWljaGVuIHdpY2h0aWchISovXHJcbiAgICAgICAgdG9wOiA3NXZIO1xyXG4gICAgICAgIG9wYWNpdHk6IC40O1xyXG4gICAgfVxyXG4gICBcclxufVxyXG5cclxuIFxyXG5cclxuLyoqKioqKioqKiovXHJcbi50cmFuc2l0aW9uLWFycm93LWNvbnRhaW5lciB7XHJcbiAgICBvdmVyZmxvdy15OiB2aXNpYmxlO1xyXG4gICAgb3ZlcmZsb3cteDogY2xpcDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMTUwdkg7XHJcbiAgICBwYWRkaW5nLXRvcDogMzB2SDtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICY6OmFmdGVye1xyXG4gICAgICAgIGNvbnRlbnQ6Jyc7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICAgICAgd2lkdGg6IDEwMHZXO1xyXG4gICAgICAgIGhlaWdodDogNzB2SDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOi0zMHZIO1xyXG4gICAgfVxyXG59XHJcblxyXG4udHJhbnNpdGlvbi1hcnJvdy1jb250YWluZXJfX2Fycm93IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRvcDogY2FsYygoNiAtIHZhcigtLWl0ZW0pICkgICogLTUwcHgpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMDtcclxuICAgIGJvcmRlci1sZWZ0OiA2MHZXIHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiA2MHZXIHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogNjB2VyBzb2xpZCBibGFjaztcclxufVxyXG5cclxuLnRyYW5zaXRpb24tYXJyb3ctY29udGFpbmVyX19hcnJvdzpudGgtb2YtdHlwZSgyKSB7XHJcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjNjA5NDkxO1xyXG59XHJcblxyXG4udHJhbnNpdGlvbi1hcnJvdy1jb250YWluZXJfX2Fycm93Om50aC1vZi10eXBlKDMpIHtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICMzNDYzNjA7XHJcbn1cclxuXHJcbi50cmFuc2l0aW9uLWFycm93LWNvbnRhaW5lcl9fYXJyb3c6bnRoLW9mLXR5cGUoNCkge1xyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzE5NDI0MDtcclxufVxyXG5cclxuLnRyYW5zaXRpb24tYXJyb3ctY29udGFpbmVyX19hcnJvdzpudGgtb2YtdHlwZSg1KSB7XHJcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjMGEyNDIyO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGUtYW5pbWF0aW9uIHtcclxuICAgIDAlICAge29wYWNpdHk6IDF9XHJcbiAgICAxMDAlIHtvcGFjaXR5OiAwfVxyXG4gIH1cclxuXHJcbi5pbnRyb3tcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL3BpY3R1cmVzL2ludHJvLWRlZmF1bHQuanBnKSBuby1yZXBlYXQgbGVmdCB0b3Agc2Nyb2xsO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBjbGlwLXBhdGg6IGluc2V0KDApO1xyXG5cclxuICAgICY6OmJlZm9yZXtcclxuICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmZmZmYTg7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBtYXJnaW46IDE2cHg7XHJcbiAgICAgICAgei1pbmRleDoxO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAmOjphZnRlcntcclxuICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmZmZmMzY7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBtYXJnaW46IDMycHg7XHJcbiAgICB9XHJcblxyXG4gICYgdmlkZW97XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgfVxyXG5cclxuICAmIHRleHQtb3Zlci1waWN7XHJcbiAgICAgIFxyXG4gICAgY2xpcC1wYXRoOiBpbnNldCgwKTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB9XHJcblxyXG5cclxufVxyXG5cclxuOmhvc3Q6Om5nLWRlZXAgdGV4dC1vdmVyLXBpYy5jdXN0b20gLnRleHQtMntcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNTEwcHgpe1xyXG4gICAgOmhvc3Q6Om5nLWRlZXAgdGV4dC1vdmVyLXBpYy5jdXN0b20gLnRleHQtMntcclxuICAgICAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNDVweDtcclxuICAgICAgfVxyXG4gIH1cclxuXHJcblxyXG5oZXJvLXRleHQge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAwcHg7XHJcbn1cclxuXHJcbmhlcm8tYmd7XHJcbiAgICBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIGhlcm8tdGV4dC5oZXJvLWVuZCBhcnRpY2xlIHB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCBcclxuICAgIHRyYW5zcGFyZW50LCBcclxuICAgIHZhcigtLWhlcm8tdGV4dC1mb250LWhpZ2hsaWdodCksXHJcbiAgICB2YXIoLS1oZXJvLXRleHQtZm9udC1oaWdobGlnaHQpLFxyXG4gICAgdmFyKC0tdGhlbWUtY29sb3Itd2hpdGUpLFxyXG4gICAgdmFyKC0taGVyby10ZXh0LWZvbnQtaGlnaGxpZ2h0KSxcclxuICAgIHZhcigtLWhlcm8tdGV4dC1mb250LWhpZ2hsaWdodCksXHJcbiAgICAgdHJhbnNwYXJlbnQpO1xyXG59XHJcblxyXG4uaG9zdHtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgNXM7XHJcbn1cclxuXHJcbi5kYXJrZXN0e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzO1xyXG59Il19 */"] });
PersonalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_19__.__decorate)([
    (0,src_app_shared_factory_add_scroll_out_decorator__WEBPACK_IMPORTED_MODULE_0__.AddScrollOut)(300, [src_app_shared_factory_animations_enum__WEBPACK_IMPORTED_MODULE_1__.AnimationEnum.testclass])
], PersonalComponent);



/***/ }),

/***/ 8549:
/*!*************************************************!*\
  !*** ./src/app/shared/alert/alert.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertComponent": () => (/* binding */ AlertComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);



function AlertComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlertComponent_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.closeHandler()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} }
const _c0 = ["*"];
class AlertComponent {
    constructor() {
        this.dismissible = false;
        this.type = 'info';
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    closeHandler() { this.close.emit(null); }
}
AlertComponent.ɵfac = function AlertComponent_Factory(t) { return new (t || AlertComponent)(); };
AlertComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlertComponent, selectors: [["alert"]], inputs: { dismissible: "dismissible", type: "type" }, outputs: { close: "close" }, ngContentSelectors: _c0, decls: 4, vars: 5, consts: [["role", "alert"], ["type", "button", "class", "close", "aria-label", "Close", 3, "click", 4, "ngIf"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"]], template: function AlertComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AlertComponent_button_3_Template, 3, 0, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("alert alert-" + ctx.type + (ctx.dismissible ? " alert-dismissible" : ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("tail-icon fa " + (ctx.type === "success" ? "fa-check-circle" : "") + (ctx.type === "info" ? "fa-info-circle" : "") + (ctx.type === "muted" ? "fa-bell-o" : "") + (ctx.type === "warn" ? "fa-exclamation-triangle" : "") + (ctx.type === "danger" ? "fa-exclamation-circle" : ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dismissible);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], styles: [".alert[_ngcontent-%COMP%] {\n  -webkit-clip-path: inset(0px 0px 0px 0px);\n          clip-path: inset(0px 0px 0px 0px);\n  background: linear-gradient(45deg, #006AB3, lightgray);\n  background: linear-gradient(45deg, var(--bg-color, #006AB3), lightgray);\n  background-color: #006AB3;\n  background-color: var(--bg-color, #006AB3);\n  position: relative;\n  color: white;\n  margin: 0;\n  border: 0;\n  padding: 15px 15px 15px 90px;\n  border-radius: 0;\n}\n.alert[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: -140px;\n  bottom: 0;\n  width: 200px;\n  transform-origin: 100% 100%;\n  transform: skewx(17deg);\n  mix-blend-mode: overlay;\n  background: gray;\n  box-shadow: white 15px 0px 0, lightgray 30px 0px 0;\n}\n.alert[_ngcontent-%COMP%]   i.tail-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 15px;\n  top: 10px;\n  font-size: 30px;\n  color: white;\n  mix-blend-mode: overlay;\n}\n.alert[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: inherit;\n}\n.alert[_ngcontent-%COMP%]   .alert-link[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.alert[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%], .alert[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.alert[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%]    + p[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n.alert-dismissable[_ngcontent-%COMP%], .alert-dismissible[_ngcontent-%COMP%] {\n  padding-right: 35px;\n}\n.alert-dismissable[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%], .alert-dismissible[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  position: relative;\n  top: -2px;\n  right: -21px;\n  color: inherit;\n}\n.alert-danger[_ngcontent-%COMP%] {\n  --bg-color: #D4003C;\n}\n.alert-danger[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  text-decoration: none;\n}\n.alert-danger[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .alert-danger[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus, .alert-danger[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active, .alert-danger[_ngcontent-%COMP%]   a.focus[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  background-color: #B7B7B7;\n  background-color: transparent;\n}\n.alert-danger[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 10px;\n}\n.alert-danger[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  padding-top: 10px;\n}\n.alert-muted[_ngcontent-%COMP%] {\n  --bg-color: #f1f1f1;\n  border-right: 2px solid #E4E4E4;\n  color: #B7B7B7;\n}\n.alert-info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n.alert-success[_ngcontent-%COMP%] {\n  --bg-color: #BDC700;\n}\n.alert-warn[_ngcontent-%COMP%] {\n  --bg-color: #EF6500;\n}\n.alert-editor[_ngcontent-%COMP%] {\n  padding-right: 16px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsZXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UseUNBQUE7VUFBQSxpQ0FBQTtFQUNBLHNEQUFBO0VBQUEsdUVBQUE7RUFDQSx5QkFBQTtFQUFBLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0FBQUY7QUFFSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLHVCQUFBO0VBRUEsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtEQUFBO0FBRFI7QUFLTTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FBSFI7QUFNSTtFQUNFLGFBQUE7RUFDQSxjQUFBO0FBSE47QUFJSTtFQUNFLGlCQUFBO0FBRE47QUFFSTs7RUFFRSxnQkFBQTtBQUNOO0FBQUk7RUFDRSxlQUFBO0FBR047QUFERTs7RUFFRSxtQkFBQTtBQUlKO0FBSEk7O0VBRUUsa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFNTjtBQUhNO0VBQ0UsbUJBQUE7QUFNUjtBQUpRO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0FBT1Y7QUFOVTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtFQUNBLDZCQUFBO0FBU1o7QUFSUTtFQUNFLHFCQUFBO0VBQ0EsYUFBQTtBQVdWO0FBVlE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0FBYVY7QUFYTTtFQUNFLG1CQUFBO0VBRUEsK0JBQUE7RUFDQSxjQUFBO0FBYVI7QUFWSztFQUNLLDBCQUFBO0FBYVY7QUFWTTtFQUNFLG1CQUFBO0FBYVI7QUFUTTtFQUNFLG1CQUFBO0FBWVI7QUFUTTtFQUNFLDhCQUFBO0FBWVIiLCJmaWxlIjoiYWxlcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmFsZXJ0IHtcclxuICBjbGlwLXBhdGg6IGluc2V0KDBweCAwcHggMHB4IDBweCk7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAgdmFyKC0tYmctY29sb3IsIzAwNkFCMyksIGxpZ2h0Z3JheSk7ICAgIFxyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yLCMwMDZBQjMpO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGJvcmRlcjogMDtcclxuICBwYWRkaW5nOiAxNXB4IDE1cHggMTVweCA5MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcblxyXG4gICAgJjo6YmVmb3JlIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogLTE0MHB4O1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAxMDAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2tld3goMTdkZWcpO1xyXG4gICAgXHJcbiAgICAgICAgbWl4LWJsZW5kLW1vZGU6IG92ZXJsYXk7XHJcbiAgICAgICAgYmFja2dyb3VuZDogZ3JheTtcclxuICAgICAgICBib3gtc2hhZG93OiB3aGl0ZSAxNXB4IDBweCAwLCBcclxuICAgICAgICAgICAgICAgICAgICAgbGlnaHRncmF5IDMwcHggMHB4IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYgaS50YWlsLWljb24ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAxNXB4O1xyXG4gICAgICAgIHRvcDogMTBweDtcclxuICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIG1peC1ibGVuZC1tb2RlOiBvdmVybGF5O1xyXG4gICAgICB9O1xyXG4gICB9XHJcbiAgICAuYWxlcnQgaDQge1xyXG4gICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICBjb2xvcjogaW5oZXJpdDsgfVxyXG4gICAgLmFsZXJ0IC5hbGVydC1saW5rIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cclxuICAgIC5hbGVydCA+IHAsXHJcbiAgICAuYWxlcnQgPiB1bCB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7IH1cclxuICAgIC5hbGVydCA+IHAgKyBwIHtcclxuICAgICAgbWFyZ2luLXRvcDogNXB4OyB9XHJcbiAgXHJcbiAgLmFsZXJ0LWRpc21pc3NhYmxlLFxyXG4gIC5hbGVydC1kaXNtaXNzaWJsZSB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzNXB4OyB9XHJcbiAgICAuYWxlcnQtZGlzbWlzc2FibGUgLmNsb3NlLFxyXG4gICAgLmFsZXJ0LWRpc21pc3NpYmxlIC5jbG9zZSB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgdG9wOiAtMnB4O1xyXG4gICAgICByaWdodDogLTIxcHg7XHJcbiAgICAgIGNvbG9yOiBpbmhlcml0OyB9XHJcbiAgXHJcblxyXG4gICAgICAuYWxlcnQtZGFuZ2VyIHtcclxuICAgICAgICAtLWJnLWNvbG9yOiAjRDQwMDNDO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgLmFsZXJ0LWRhbmdlciBhIHtcclxuICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XHJcbiAgICAgICAgICAuYWxlcnQtZGFuZ2VyIGE6aG92ZXIsIC5hbGVydC1kYW5nZXIgYTpmb2N1cywgLmFsZXJ0LWRhbmdlciBhOmFjdGl2ZSwgLmFsZXJ0LWRhbmdlciBhLmZvY3VzIHtcclxuICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNCN0I3Qjc7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyB9XHJcbiAgICAgICAgLmFsZXJ0LWRhbmdlciB1bCB7XHJcbiAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4OyB9XHJcbiAgICAgICAgLmFsZXJ0LWRhbmdlciBsaSB7XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDsgfVxyXG4gICAgICBcclxuICAgICAgLmFsZXJ0LW11dGVkIHtcclxuICAgICAgICAtLWJnLWNvbG9yOiAjZjFmMWYxO1xyXG4gICAgXHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgI0U0RTRFNDtcclxuICAgICAgICBjb2xvcjogI0I3QjdCNzsgXHJcbiAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAuYWxlcnQtaW5mbyBhIHtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyBcclxuICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuYWxlcnQtc3VjY2VzcyB7XHJcbiAgICAgICAgLS1iZy1jb2xvcjogI0JEQzcwMDsgXHJcbiAgICBcclxuICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuYWxlcnQtd2FybiB7XHJcbiAgICAgICAgLS1iZy1jb2xvcjogI0VGNjUwMDsgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5hbGVydC1lZGl0b3Ige1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDE2cHggIWltcG9ydGFudDsgfVxyXG4gICAgIl19 */"], changeDetection: 0 });


/***/ }),

/***/ 8128:
/*!*************************************************************!*\
  !*** ./src/app/shared/directives/firework-btn.directive.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FireworkDirective": () => (/* binding */ FireworkDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class FireworkDirective {
    constructor(host, render) {
        this.host = host;
        this.render = render;
    }
    onClick(event) {
        // in e.key steht 'e' oder 'E' // in e.code steht KeyE und es ist immer E
        event.preventDefault();
        if (!this.host.nativeElement.disabled) {
            this.host.nativeElement.click();
            const child = document.createElement('div');
            child.classList.add('pyro');
            this.render.appendChild(this.host.nativeElement, child);
            // remove the new element after 2 seconds
            setTimeout(function () {
                let element = this.host.nativeElement.querySelector('.pyro');
                element.remove();
            }.bind(this), 2000);
        }
        else {
            const child = document.createElement('div');
            child.classList.add('click-not-allowed');
            this.render.appendChild(this.host.nativeElement, child);
            // remove the new element after 2 seconds
            setTimeout(function () {
                let element = this.host.nativeElement.querySelector('.click-not-allowed');
                element.remove();
            }.bind(this), 2000);
        }
    }
}
FireworkDirective.ɵfac = function FireworkDirective_Factory(t) { return new (t || FireworkDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2)); };
FireworkDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: FireworkDirective, selectors: [["", "firework-click", ""]], hostBindings: function FireworkDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FireworkDirective_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } } });


/***/ }),

/***/ 4338:
/*!***************************************************************!*\
  !*** ./src/app/shared/directives/focus-priority.directive.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FocusPriorityDirective": () => (/* binding */ FocusPriorityDirective)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5398);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 3910);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);



/**
 * Used to set the focus primary to this element on Tab-Click. Cannot be together with second of this kind
 */
class FocusPriorityDirective {
    constructor(el) {
        this.el = el;
        this.elementClass = '';
        this.focusable = true;
    }
    /**
     * Sets the focus to this element and sets timer to block the function for the next 3 seconds
     * @param event
     */
    onKeyDown(event) {
        if (this.focusable) {
            this.el.nativeElement.focus();
            event.preventDefault();
            this.setActivate(false);
            (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.timer)(3000).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1)).subscribe(() => this.setActivate(true));
        }
    }
    setActivate(isActive) {
        this.focusable = isActive;
        this.elementClass = isActive ? '' : 'focus-priority-paused';
    }
}
FocusPriorityDirective.ɵfac = function FocusPriorityDirective_Factory(t) { return new (t || FocusPriorityDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef)); };
FocusPriorityDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: FocusPriorityDirective, selectors: [["", "focusPriority", ""]], hostVars: 2, hostBindings: function FocusPriorityDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keydown.Tab", function FocusPriorityDirective_keydown_Tab_HostBindingHandler($event) { return ctx.onKeyDown($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveDocument"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.elementClass);
    } } });


/***/ }),

/***/ 9352:
/*!************************************************************!*\
  !*** ./src/app/shared/directives/img-preview.directive.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImgPreviewDirective": () => (/* binding */ ImgPreviewDirective)
/* harmony export */ });
/* harmony import */ var src_app_core_dialog_modal_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/dialog/modal/modal */ 7992);
/* harmony import */ var _img_full_modal_img_full_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img-full-modal/img-full-modal.component */ 8874);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




class ImgPreviewDirective {
    constructor(host, modal) {
        this.host = host;
        this.modal = modal;
    }
    onClick() {
        const modalRef = this.modal.open(_img_full_modal_img_full_modal_component__WEBPACK_IMPORTED_MODULE_1__.ImgFullModalComponent, src_app_core_dialog_modal_modal__WEBPACK_IMPORTED_MODULE_0__.modalOptionExtraLargeAndCenter);
        modalRef.componentInstance.imgSrc = this.host.nativeElement.src;
    }
}
ImgPreviewDirective.ɵfac = function ImgPreviewDirective_Factory(t) { return new (t || ImgPreviewDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_dialog_modal_modal__WEBPACK_IMPORTED_MODULE_0__.Modal)); };
ImgPreviewDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: ImgPreviewDirective, selectors: [["", "preview", ""]], hostBindings: function ImgPreviewDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ImgPreviewDirective_click_HostBindingHandler() { return ctx.onClick(); });
    } } });


/***/ }),

/***/ 1076:
/*!*********************************************************!*\
  !*** ./src/app/shared/directives/lazy-img.directive.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LazyImgDirective": () => (/* binding */ LazyImgDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class LazyImgDirective {
    constructor({ nativeElement }) {
        const supports = 'loading' in HTMLImageElement.prototype;
        if (supports) {
            nativeElement.setAttribute('loading', 'lazy');
        }
    }
}
LazyImgDirective.ɵfac = function LazyImgDirective_Factory(t) { return new (t || LazyImgDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef)); };
LazyImgDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: LazyImgDirective, selectors: [["img"]] });


/***/ }),

/***/ 4838:
/*!***************************************************************!*\
  !*** ./src/app/shared/directives/scroll-percent.directive.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScrollPercentDirective": () => (/* binding */ ScrollPercentDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);


/**
 Eine directive, die ein output feuert, sobald die spitze des hosts sichtbar ist.
 Sichtbar heißt wirklich die ersten pixel sind im scrollbereich

 diese componente wird ein bisschen missbraucht
 
 Verwendung
 <div style="height: 50vH" scrollPercent (elementTopVisible)="handleBgLighter()">

 */
class ScrollPercentDirective {
    constructor(el) {
        this.el = el;
        this._elementClass = [];
        this.elementTopVisible = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.eventHasBeenEmitted = false;
    }
    get elementClass() {
        return this._elementClass.join(' ');
    }
    set(val) {
        this._elementClass = val.split(' ');
    }
    onScroll() {
        const rect = this.el.nativeElement.getBoundingClientRect();
        // feuer das event, wenn die spitze dieses elements sichtbar ist
        if (!this.eventHasBeenEmitted && rect.top < (window.innerHeight || document.documentElement.clientHeight)) {
            this.eventHasBeenEmitted = true;
            this.elementTopVisible.emit();
            if (this.classToAddWhenScrolledIn) {
                this._elementClass.push(this.classToAddWhenScrolledIn);
            }
        }
    }
}
ScrollPercentDirective.ɵfac = function ScrollPercentDirective_Factory(t) { return new (t || ScrollPercentDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef)); };
ScrollPercentDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ScrollPercentDirective, selectors: [["", "scrollPercent", ""]], hostVars: 2, hostBindings: function ScrollPercentDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function ScrollPercentDirective_scroll_HostBindingHandler($event) { return ctx.onScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.elementClass);
    } }, inputs: { classToAddWhenScrolledIn: "classToAddWhenScrolledIn" }, outputs: { elementTopVisible: "elementTopVisible" } });


/***/ }),

/***/ 693:
/*!****************************************************************!*\
  !*** ./src/app/shared/directives/scroll-property.directive.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScrollPropertyDirective": () => (/* binding */ ScrollPropertyDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

/*
min und max percentage sind die limits -> 20^= 0 und bei 40% ->2 größer wirds nicht.
<div scrollProperty="scale" [minValue]="0.5" [maxValue]="2" [minPercent]="20" [maxPercent]="40"></div>
<div scrollProperty="transform" [minValue]="0.8" [maxValue]="1"></div>

Man kann auch die css variable vom container setzen und im element verwenden:
<div class="container"  scrollProperty="--scale" [minPercent]="40"
        [maxPercent]="60" [minValue]="0.5" [maxValue]="2">
        <div style="font-size: 40px; scale: var(--scale)">

        ich kann das jetzt auch in eine css variable verwandeln die mir genau die prozente gibt und als var weiterverwenden

*/
class ScrollPropertyDirective {
    constructor(el) {
        this.el = el;
        this.isLimited = false;
    }
    onScroll(event) {
        const el = this.el.nativeElement;
        const viewportHeight = window.innerHeight;
        const elTop = el.getBoundingClientRect().top;
        const elBottom = el.getBoundingClientRect().bottom;
        const elementHeight = this.el.nativeElement.offsetHeight;
        if (elTop + elementHeight >= 0 && elTop <= viewportHeight) {
            const value = this.calc(elTop, viewportHeight);
            this.el.nativeElement.style.setProperty(this.propertyName, `${value}${this.postFix ?? ''}`);
        }
    }
    calc(elTop, viewportHeight) {
        const minValue = this.minValue;
        const maxValue = this.maxValue;
        let percentage = ((viewportHeight - elTop) / viewportHeight) * 100;
        if (!this.minValue && !this.maxValue) {
            return percentage / 100;
        }
        if (this.isLimited) {
            percentage = percentage > 100 ? 100 : percentage;
        }
        const minPercentage = this.minPercent ?? 0;
        const maxPercentage = this.maxPercent ?? 100;
        if (percentage <= minPercentage) {
            return minValue;
        }
        else if (percentage >= maxPercentage) {
            return maxValue;
        }
        else {
            const rangePercentage = (percentage - minPercentage) / (maxPercentage - minPercentage);
            return minValue + rangePercentage * (maxValue - minValue);
        }
    }
}
ScrollPropertyDirective.ɵfac = function ScrollPropertyDirective_Factory(t) { return new (t || ScrollPropertyDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef)); };
ScrollPropertyDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ScrollPropertyDirective, selectors: [["", "scrollProperty", ""]], hostBindings: function ScrollPropertyDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function ScrollPropertyDirective_scroll_HostBindingHandler($event) { return ctx.onScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, inputs: { propertyName: ["scrollProperty", "propertyName"], minValue: "minValue", maxValue: "maxValue", postFix: "postFix", minPercent: "minPercent", maxPercent: "maxPercent", isLimited: "isLimited" } });


/***/ }),

/***/ 851:
/*!*********************************************************!*\
  !*** ./src/app/shared/directives/shortcut.directive.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShortCutDirective": () => (/* binding */ ShortCutDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

/**
  Gibt einem Button einen ShortCut
  Mit ALT + Shortcut wird er aufgerufen
  Unter der haube ruft die directive Click auf

  Mit alt wird ein Tooltip angezeigt

  verwendung:
  <componente clickShortCutKey="Enter" isFocusTarget="true"

  isFocusTarget setzt dann einmalig den focus
 */
class ShortCutDirective {
    constructor(host, render) {
        this.host = host;
        this.render = render;
        this.elementClass = 'btn-shortcut';
    }
    onKeyDown(event) {
        if (event.altKey) {
            this.host.nativeElement.classList.add('btn-shortcut-tooltip');
        }
    }
    onKeyUp(event) {
        // in e.key steht 'e' oder 'E' // in e.code steht KeyE und es ist immer E
        if (event.code === this.clickShortCutKey && event.altKey) { // oder e.ctrlKey?
            event.preventDefault();
            this.host.nativeElement.classList.remove('btn-shortcut-tooltip');
            if (!this.host.nativeElement.disabled) {
                this.host.nativeElement.click();
                const child = document.createElement('div');
                child.classList.add('pyro');
                this.render.appendChild(this.host.nativeElement, child);
                // remove the new element after 2 seconds
                setTimeout(function () {
                    let element = this.host.nativeElement.querySelector('.pyro');
                    element.remove();
                }.bind(this), 2000);
            }
            else {
                const child = document.createElement('div');
                child.classList.add('shortcut-not-allowed');
                this.render.appendChild(this.host.nativeElement, child);
                // remove the new element after 2 seconds
                setTimeout(function () {
                    let element = this.host.nativeElement.querySelector('.shortcut-not-allowed');
                    element.remove();
                }.bind(this), 2000);
            }
        }
        if (event.code === 'AltLeft') {
            event.preventDefault();
            this.host.nativeElement.classList.remove('btn-shortcut-tooltip');
        }
    }
    ngAfterContentInit() {
        if (this.isFocusTarget) {
            this.host.nativeElement.focus();
        }
    }
}
ShortCutDirective.ɵfac = function ShortCutDirective_Factory(t) { return new (t || ShortCutDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2)); };
ShortCutDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ShortCutDirective, selectors: [["", "clickShortCutKey", ""]], hostVars: 2, hostBindings: function ShortCutDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function ShortCutDirective_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("keyup", function ShortCutDirective_keyup_HostBindingHandler($event) { return ctx.onKeyUp($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.elementClass);
    } }, inputs: { clickShortCutKey: "clickShortCutKey", isFocusTarget: "isFocusTarget" } });


/***/ }),

/***/ 8409:
/*!*********************************************************!*\
  !*** ./src/app/shared/directives/visibility.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VisibilityService": () => (/* binding */ VisibilityService)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5828);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 2160);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6312);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 2378);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 9193);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 522);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 8759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 3298);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);




// https://stackblitz.com/edit/angular-ry8svj?file=src%2Fapp%2Fvisibility.service.ts
class VisibilityService {
    constructor(document) {
        this.pageVisible$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.concat)((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.defer)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(!document.hidden)), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.fromEvent)(document, 'visibilitychange').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((e) => !document.hidden)));
    }
    elementInSight(element) {
        const el = element.nativeElement;
        const elementVisible$ = rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable.create((observer) => {
            const intersectionObserver = new IntersectionObserver((entries) => {
                // if (!entries[0].isIntersecting) {
                //   console.log('Elvis has LEFT the building ');
                // } else {
                //   console.log('Elvis has ENTERED the building ');
                // }
                observer.next(entries);
            });
            intersectionObserver.observe(el);
            return () => { intersectionObserver.disconnect(); };
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.mergeMap)((entries) => entries), // wäre eigentlich IntersectionObserverEntry
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((entry) => entry.isIntersecting), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)((entry) => console.log(entry)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.distinctUntilChanged)());
        const elementInSight$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.combineLatest)(this.pageVisible$, elementVisible$, (pageVisible, elementVisible) => pageVisible && elementVisible).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.distinctUntilChanged)());
        return elementInSight$;
    }
}
VisibilityService.ɵfac = function VisibilityService_Factory(t) { return new (t || VisibilityService)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT)); };
VisibilityService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjectable"]({ token: VisibilityService, factory: VisibilityService.ɵfac });


/***/ }),

/***/ 6489:
/*!*************************************************************!*\
  !*** ./src/app/shared/directives/visible-with.directive.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VisibleWithDirective": () => (/* binding */ VisibleWithDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 8759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 9151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 3910);
/* harmony import */ var _visibility_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./visibility.service */ 8409);




/*
Verwendung:

<div #wrapper style="height: 100vH">
  <hello [name]="name" *visibleWith="wrapper"></hello>
</div>
*/
class VisibleWithDirective {
    constructor(templateRef, viewContainer, visibilityService) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.visibilityService = visibilityService;
    }
    set visibleWith(element) {
        this.visibilityService
            .elementInSight(new _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef(element))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)((visible) => console.log(visible)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)((visible) => visible), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1))
            .subscribe(() => {
            this.viewContainer.createEmbeddedView(this.templateRef);
        });
    }
    hideElement() { }
    showElement() { }
}
VisibleWithDirective.ɵfac = function VisibleWithDirective_Factory(t) { return new (t || VisibleWithDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_visibility_service__WEBPACK_IMPORTED_MODULE_0__.VisibilityService)); };
VisibleWithDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: VisibleWithDirective, selectors: [["", "visibleWith", ""]], inputs: { visibleWith: "visibleWith" } });


/***/ }),

/***/ 2472:
/*!************************************************************!*\
  !*** ./src/app/shared/factory/add-scroll-out.decorator.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddScrollOut": () => (/* binding */ AddScrollOut)
/* harmony export */ });
/* harmony import */ var scroll_out__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! scroll-out */ 6105);
/* harmony import */ var scroll_out__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(scroll_out__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Decorator Function for Components
 * Automatically adds the scrollOut
 *
 * How to use?
 * in der ziel-komponente hinzufügen:
 * @AddScrollOut([AnimationEnum.BounceIn])
 *
 * in den Wunsch html elementen
 *  data-scroll="out" hinzufügen
 *
 * @param animationClass the class to be added to the element
 */
function AddScrollOut(offset = 0, animationClasses = []) {
    return function (constructor) {
        const originalngAfterContentInit = constructor.prototype.ngAfterContentInit;
        constructor.prototype.ngAfterContentInit = function () {
            scroll_out__WEBPACK_IMPORTED_MODULE_0__({
                offset: offset,
                onShown(el) {
                    animationClasses.forEach(cssClass => {
                        el.classList.remove(cssClass);
                    });
                    animationClasses.forEach(cssClass => {
                        el.classList.add(cssClass);
                    });
                },
                onHidden: function (el) {
                    // hide the element initially
                }
            });
            // call the original function
            originalngAfterContentInit && typeof originalngAfterContentInit === 'function' && originalngAfterContentInit.apply(this, arguments);
        };
    };
}


/***/ }),

/***/ 778:
/*!***************************************************!*\
  !*** ./src/app/shared/factory/animations.enum.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnimationEnum": () => (/* binding */ AnimationEnum)
/* harmony export */ });
/**
 * Animationen um im css class name keinen tippfehler zu machen
 */
var AnimationEnum;
(function (AnimationEnum) {
    AnimationEnum["BounceIn"] = "scroll-bounce-in";
    AnimationEnum["Fade"] = "fade";
    AnimationEnum["testclass"] = "testclass";
})(AnimationEnum || (AnimationEnum = {}));


/***/ }),

/***/ 7405:
/*!***************************************************!*\
  !*** ./src/app/shared/factory/random-function.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRandom": () => (/* binding */ getRandom)
/* harmony export */ });
function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}


/***/ }),

/***/ 140:
/*!*****************************************************!*\
  !*** ./src/app/shared/hero-bg/hero-bg.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeroBgComponent": () => (/* binding */ HeroBgComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

const _c0 = ["container"];
const _c1 = ["*"];
class HeroBgComponent {
    constructor() {
        this.backgroundPosition = "-10%";
    }
    onScroll() {
        const rect = this.container.nativeElement.parentElement.getBoundingClientRect();
        const scrollPercentage = ((rect.top) / ((window.innerHeight || document.documentElement.clientHeight))) * 100;
        this.backgroundPosition = `calc(-30% - ${scrollPercentage / 1.2}%)`;
    }
}
HeroBgComponent.ɵfac = function HeroBgComponent_Factory(t) { return new (t || HeroBgComponent)(); };
HeroBgComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeroBgComponent, selectors: [["hero-bg"]], viewQuery: function HeroBgComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.container = _t.first);
    } }, hostBindings: function HeroBgComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function HeroBgComponent_scroll_HostBindingHandler($event) { return ctx.onScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, inputs: { text: "text", src: "src" }, ngContentSelectors: _c1, decls: 7, vars: 4, consts: [[2, "will-change", "background-position-y"], ["container", ""], [1, "first"], [1, "second"]], template: function HeroBgComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "article", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "article", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-position-y", ctx.backgroundPosition);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", "", "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", "", "\n");
    } }, styles: ["[_nghost-%COMP%] {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n\narticle.first[_ngcontent-%COMP%] {\n  height: 300vH;\n  width: 100%;\n  padding-top: 300px;\n  background: radial-gradient(circle at 50% 10%, black, black 40%, rgb(5, 67, 67) 60%, teal 70%, rgb(2, 147, 147) 80%, rgb(39, 208, 208) 90%);\n  background-attachment: scroll;\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n}\n\narticle.second[_ngcontent-%COMP%] {\n  height: 300vH;\n  width: 100%;\n  padding-top: 300px;\n  background: radial-gradient(circle at 50% 110%, black, black 40%, rgb(5, 67, 67) 60%, teal 70%, rgb(2, 147, 147) 80%, rgb(39, 208, 208) 90%);\n  background-attachment: scroll;\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n}\n\np[_ngcontent-%COMP%] {\n  color: black;\n  text-align: center;\n  font-size: min(10vw, 70px);\n  position: -webkit-sticky;\n  position: sticky;\n  transform: translateY(-50%);\n  top: 50%;\n  padding: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlcm8tYmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSx5QkFBQTtLQUFBLHNCQUFBO1VBQUEsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSwySUFBQTtFQUVBLDZCQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtBQURGOztBQU1BO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDRJQUFBO0VBRUEsNkJBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0FBSkY7O0FBT0E7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0FBSkYiLCJmaWxlIjoiaGVyby1iZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuXHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbmFydGljbGUuZmlyc3Qge1xyXG4gIGhlaWdodDogMzAwdkg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy10b3A6IDMwMHB4O1xyXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgNTAlIDEwJSwgYmxhY2ssIGJsYWNrIDQwJSwgcmdiKDUsIDY3LCA2NykgNjAlLCB0ZWFsIDcwJSwgcmdiKDIsIDE0NywgMTQ3KSA4MCUsIHJnYigzOSwgMjA4LCAyMDgpIDkwJSk7XHJcblxyXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogc2Nyb2xsO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcblxyXG5cclxufVxyXG5cclxuYXJ0aWNsZS5zZWNvbmQge1xyXG4gIGhlaWdodDogMzAwdkg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy10b3A6IDMwMHB4O1xyXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgNTAlIDExMCUsIGJsYWNrLCBibGFjayA0MCUsIHJnYig1LCA2NywgNjcpIDYwJSwgdGVhbCA3MCUsIHJnYigyLCAxNDcsIDE0NykgODAlLCByZ2IoMzksIDIwOCwgMjA4KSA5MCUpO1xyXG5cclxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IHNjcm9sbDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG59XHJcblxyXG5wIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogbWluKDEwdncsIDcwcHgpO1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIHRvcDogNTAlO1xyXG4gIHBhZGRpbmc6IDEwJTtcclxufSJdfQ== */"] });


/***/ }),

/***/ 8912:
/*!*********************************************************!*\
  !*** ./src/app/shared/hero-text/hero-text.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeroTextComponent": () => (/* binding */ HeroTextComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

const _c0 = ["container"];
const _c1 = ["*"];
class HeroTextComponent {
    constructor() {
        this.backgroundPosition = "-10%";
    }
    onScroll() {
        const rect = this.container.nativeElement.parentElement.getBoundingClientRect();
        const scrollPercentage = ((rect.top) / ((window.innerHeight || document.documentElement.clientHeight))) * 100;
        this.backgroundPosition = `calc(-30% - ${scrollPercentage / 1.2}%)`;
    }
}
HeroTextComponent.ɵfac = function HeroTextComponent_Factory(t) { return new (t || HeroTextComponent)(); };
HeroTextComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeroTextComponent, selectors: [["hero-text"]], viewQuery: function HeroTextComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.container = _t.first);
    } }, hostBindings: function HeroTextComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function HeroTextComponent_scroll_HostBindingHandler($event) { return ctx.onScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, inputs: { text: "text", src: "src" }, ngContentSelectors: _c1, decls: 4, vars: 2, consts: [[2, "will-change", "background-position-y"], ["container", ""]], template: function HeroTextComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article")(1, "p", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-position-y", ctx.backgroundPosition);
    } }, styles: ["[_nghost-%COMP%] {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n\narticle[_ngcontent-%COMP%] {\n  height: 300vH;\n  padding-top: 300px;\n}\n\narticle[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, transparent, var(--primary-color), var(--primary-color), var(--hero-text-font-highlight), var(--primary-color), var(--primary-color), transparent);\n  text-align: center;\n  background-attachment: scroll !important;\n  font-size: min(10vw, 70px);\n  -webkit-background-clip: text !important;\n  -webkit-text-fill-color: transparent !important;\n  position: -webkit-sticky;\n  position: sticky;\n  background-repeat: no-repeat !important;\n  background-size: 100% 600vH !important;\n  transform: translateY(-50%) !important;\n  top: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlcm8tdGV4dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLHlCQUFBO0tBQUEsc0JBQUE7VUFBQSxpQkFBQTtBQUFKOztBQUdBO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0FBQUo7O0FBRUk7RUFDSSxzTEFBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7RUFDQSwwQkFBQTtFQUNBLHdDQUFBO0VBQ0EsK0NBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsdUNBQUE7RUFDQSxzQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsUUFBQTtBQUFSIiwiZmlsZSI6Imhlcm8tdGV4dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0e1xyXG4gICAgXHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuYXJ0aWNsZSB7XHJcbiAgICBoZWlnaHQ6MzAwdkg7XHJcbiAgICBwYWRkaW5nLXRvcDogMzAwcHg7XHJcblxyXG4gICAgJiBwIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCB0cmFuc3BhcmVudCwgdmFyKC0tcHJpbWFyeS1jb2xvciksIHZhcigtLXByaW1hcnktY29sb3IpLCB2YXIoLS1oZXJvLXRleHQtZm9udC1oaWdobGlnaHQpLCB2YXIoLS1wcmltYXJ5LWNvbG9yKSx2YXIoLS1wcmltYXJ5LWNvbG9yKSwgdHJhbnNwYXJlbnQpO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IHNjcm9sbCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiBtaW4oMTB2dywgNzBweCk7XHJcbiAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQgIWltcG9ydGFudDtcclxuICAgICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgICAgICBwb3NpdGlvbjpzdGlja3k7ICAgICAgICBcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0ICFpbXBvcnRhbnQ7ICAgICAgICBcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgNjAwdkggIWltcG9ydGFudDtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgIWltcG9ydGFudDtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgIH1cclxuICB9IFxyXG4iXX0= */"] });


/***/ }),

/***/ 8874:
/*!*******************************************************************!*\
  !*** ./src/app/shared/img-full-modal/img-full-modal.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImgFullModalComponent": () => (/* binding */ ImgFullModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_core_dialog_modal_modal_ref__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/dialog/modal/modal-ref */ 4181);
/* harmony import */ var _directives_lazy_img_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../directives/lazy-img.directive */ 1076);



class ImgFullModalComponent {
    constructor(activeModal) {
        this.activeModal = activeModal;
    }
    /**
      * closes the modal
      */
    close() {
        this.activeModal.close();
    }
}
ImgFullModalComponent.ɵfac = function ImgFullModalComponent_Factory(t) { return new (t || ImgFullModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_dialog_modal_modal_ref__WEBPACK_IMPORTED_MODULE_0__.ActiveModal)); };
ImgFullModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ImgFullModalComponent, selectors: [["img-full-modal"]], inputs: { imgSrc: "imgSrc" }, decls: 9, vars: 1, consts: [[1, "modal-header"], [1, "modal-title"], ["aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "line-container"], [3, "src"]], template: function ImgFullModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Bild ansicht");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ImgFullModalComponent_Template_button_click_3_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4)(7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.imgSrc, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    } }, dependencies: [_directives_lazy_img_directive__WEBPACK_IMPORTED_MODULE_1__.LazyImgDirective], styles: ["img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 70vH;\n}\n\n.close[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltZy1mdWxsLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSw2QkFBQTtFQUNBLFNBQUE7QUFDSiIsImZpbGUiOiJpbWctZnVsbC1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZ3sgICAgXHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtaGVpZ2h0OiA3MHZIO1xyXG59XHJcblxyXG4uY2xvc2V7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogMTtcclxufSJdfQ== */"] });


/***/ }),

/***/ 6971:
/*!*****************************************************************!*\
  !*** ./src/app/shared/knockout-text/knockout-text.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KnockoutTextComponent": () => (/* binding */ KnockoutTextComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class KnockoutTextComponent {
    constructor() { }
    ngOnInit() {
    }
}
KnockoutTextComponent.ɵfac = function KnockoutTextComponent_Factory(t) { return new (t || KnockoutTextComponent)(); };
KnockoutTextComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: KnockoutTextComponent, selectors: [["knockout-text"]], decls: 12, vars: 0, consts: [[1, "height-vh", 2, "position", "relative"], [1, "knockout"], ["width", "100%", "height", "100%", 1, "knockout-text-container"], ["width", "100%", "height", "100%", "fill", "#000", "x", "0", "y", "0", "fill-opacity", "1", "mask", "url(#knockout-text)", 1, "knockout-text-bg"], ["id", "knockout-text"], ["width", "100%", "height", "100%", "fill", "#fff", "x", "0", "y", "0"], ["x", "50%", "y", "30%", "fill", "#000", "text-anchor", "middle"], ["x", "50%", "y", "60%", "fill", "#000", "text-anchor", "middle"], ["x", "50%", "y", "90%", "fill", "#000", "text-anchor", "middle"]], template: function KnockoutTextComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "rect", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mask", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "rect", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "text", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Mama Said");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "text", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Knock You");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "text", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } }, styles: [".knockout[_ngcontent-%COMP%] {\n  \n  height: 100vh;\n  width: 100%;\n  \n  background-image: url('barc2.jpg');\n  text-transform: uppercase;\n}\n\n\n\ntext[_ngcontent-%COMP%]:nth-child(2) {\n  font-size: 15em;\n}\n\ntext[_ngcontent-%COMP%]:nth-child(3) {\n  font-size: 15em;\n}\n\ntext[_ngcontent-%COMP%]:nth-child(4) {\n  font-size: 15em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImtub2Nrb3V0LXRleHQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyQ0FBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0RBQUE7RUFFQSxrQ0FBQTtFQUNBLHlCQUFBO0FBQUo7O0FBR0UsNENBQUE7O0FBRUE7RUFDRSxlQUFBO0FBREo7O0FBSUU7RUFDRSxlQUFBO0FBREo7O0FBSUU7RUFDRSxlQUFBO0FBREoiLCJmaWxlIjoia25vY2tvdXQtdGV4dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5rbm9ja291dCB7XHJcbiAgICAvKiBFbnN1cmUgdGhlIGJvdHRvbSBsYXllciBpcyBmdWxsIHNjcmVlbiAqL1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLyogQWRkIGEgY29sb3JmdWwgdGV4dHVyZSBhbmQgY3V0b20gZm9udC1zdHlsaW5nICovXHJcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgI2ZmNGU1MCAsICNmOWQ0MjMpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogIHVybCgnLi4vLi4vLi4vYXNzZXRzL3BpY3R1cmVzL2JhcmMyLmpwZycpO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB9XHJcbiAgXHJcbiAgLyogS25vY2tvdXQgdGV4dCBmb250IHNpemluZyBmb3IgZWFjaCBsaW5lICovXHJcbiAgXHJcbiAgdGV4dDpudGgtY2hpbGQoMikge1xyXG4gICAgZm9udC1zaXplOiAxNWVtO1xyXG4gIH1cclxuICBcclxuICB0ZXh0Om50aC1jaGlsZCgzKSB7XHJcbiAgICBmb250LXNpemU6IDE1ZW07XHJcbiAgfVxyXG4gIFxyXG4gIHRleHQ6bnRoLWNoaWxkKDQpIHtcclxuICAgIGZvbnQtc2l6ZTogMTVlbTtcclxuICB9Il19 */"] });


/***/ }),

/***/ 5554:
/*!*********************************************************************!*\
  !*** ./src/app/shared/parallex-layers/parallex-layers.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ParallexLayersComponent": () => (/* binding */ ParallexLayersComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _directives_lazy_img_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../directives/lazy-img.directive */ 1076);


class ParallexLayersComponent {
    constructor() {
        this.isDayTime = false;
    }
    get title() {
        return this.isDay ? 'Guten Tag' : 'Guten Abend';
    }
    ngOnInit() {
        const now = new Date();
        if (now.getHours() < 6 || now.getHours() >= 17) {
            this.isDay = false;
        }
        else {
            this.isDay = true;
            this.isDayTime = true;
        }
        this.onScroll();
    }
    onScroll() {
        //if (window.scrollY > 1200) return;
        //   return
        //   //   if (window.scrollY > 260) return;
        //   // }
        //   // else {
        //   //   if (window.scrollY > 400) return;
        // }
        let parent = document.getElementById("parallax-container");
        let children = parent.querySelectorAll('div[parallax-item]');
        for (let i = 0; i < children.length; i++) {
            children[i].style.top = -1 * (window.pageYOffset * (i + 1) / children.length) + (400 / (2 * (i + 1))) + 'px';
        }
    }
}
ParallexLayersComponent.ɵfac = function ParallexLayersComponent_Factory(t) { return new (t || ParallexLayersComponent)(); };
ParallexLayersComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ParallexLayersComponent, selectors: [["parallex-layers"]], hostVars: 2, hostBindings: function ParallexLayersComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scroll", function ParallexLayersComponent_scroll_HostBindingHandler($event) { return ctx.onScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("daytime", ctx.isDayTime);
    } }, decls: 16, vars: 1, consts: [["id", "parallax-container"], ["parallax-background", "", 2, "background", "url(../../../assets/pictures/sky.jpeg)"], ["id", "text", 2, "top", "100px", "z-index", "49"], ["parallax-item", ""], ["src", "../../../assets/pictures/landing-bg.png", 1, "iceland"], ["src", "../../../assets/pictures/barc1T.png", 1, "barc"], ["src", "../../../assets/pictures/rom1T.png", 1, "rom"], ["src", "../../../assets/pictures/parisT.png", 1, "paris"], ["parallax-foreground", ""], ["src", "../../../assets/pictures/landing1.png", 1, "watchman"]], template: function ParallexLayersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br")(5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.title, "");
    } }, dependencies: [_directives_lazy_img_directive__WEBPACK_IMPORTED_MODULE_0__.LazyImgDirective], styles: [".watchman[_ngcontent-%COMP%] {\n  position: -webkit-sticky;\n  position: sticky;\n  left: 20%;\n  top: 30vH;\n  z-index: 60;\n  width: max(80vW, 200px);\n  text-align: right;\n}\n\n.rom[_ngcontent-%COMP%] {\n  margin-top: 200px;\n  width: max(100vW, 400px);\n  left: -30%;\n  position: absolute;\n}\n\n.barc[_ngcontent-%COMP%] {\n  width: max(100vW, 400px);\n  position: absolute;\n  left: -30px;\n}\n\n.paris[_ngcontent-%COMP%] {\n  width: max(100vW, 400px);\n  max-width: 80%;\n  right: -10%;\n  position: absolute;\n}\n\n.iceland[_ngcontent-%COMP%] {\n  width: 100%;\n  top: 200px;\n}\n\n#parallax-container[_ngcontent-%COMP%] {\n  --parallax-height: 170vH;\n  display: block;\n  height: var(--parallax-height);\n  -webkit-clip-path: inset(0);\n          clip-path: inset(0);\n}\n\n#parallax-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n#parallax-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  height: var(--parallax-height);\n  width: 100%;\n}\n\n#parallax-container[_ngcontent-%COMP%]   div[parallax-item][_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 2;\n}\n\n#parallax-container[_ngcontent-%COMP%]   div[parallax-foreground][_ngcontent-%COMP%] {\n  top: 10px;\n  position: -webkit-sticky;\n  position: sticky;\n  z-index: 3;\n}\n\n#parallax-container[_ngcontent-%COMP%]   div[parallax-background][_ngcontent-%COMP%] {\n  top: 0;\n  position: fixed;\n  z-index: 1;\n  background-repeat: no-repeat !important;\n  background-size: cover !important;\n  background-position: center !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcmFsbGV4LWxheWVycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5SUE7RUFDSSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQXhJSjs7QUFzSkE7RUFDSSxpQkFBQTtFQUNBLHdCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBbkpKOztBQXFKQTtFQUNJLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBbEpKOztBQXFKQTtFQUNJLHdCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQWxKSjs7QUFxSkE7RUFDSSxXQUFBO0VBQ0EsVUFBQTtBQWxKSjs7QUFzSkE7RUFDSSx3QkFBQTtFQUNBLGNBQUE7RUFDQSw4QkFBQTtFQUNBLDJCQUFBO1VBQUEsbUJBQUE7QUFuSko7O0FBcUpJO0VBQ0ksV0FBQTtBQW5KUjs7QUFzSkk7RUFJSSw4QkFBQTtFQUNBLFdBQUE7QUF2SlI7O0FBeUpRO0VBQ0ksZUFBQTtFQUNBLFVBQUE7QUF2Slo7O0FBMEpRO0VBQ0ksU0FBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxVQUFBO0FBeEpaOztBQTJKUTtFQUNJLE1BQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLHVDQUFBO0VBQ0EsaUNBQUE7RUFDQSxzQ0FBQTtBQXpKWiIsImZpbGUiOiJwYXJhbGxleC1sYXllcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAubGFuZGluZy1jb250YWluZXJ7XHJcbi8vICAgICBoZWlnaHQ6MTAwdkg7IFxyXG4vLyAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuLy8gICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbi8vICAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcblxyXG4vLyAgICAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogMzAwcHg7XHJcbi8vICAgICBwZXJzcGVjdGl2ZTogMThweDsgXHJcblxyXG4vLyAgICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAgLyogSUUgYW5kIEVkZ2UgKi9cclxuLy8gICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTsgIC8qIEZpcmVmb3ggKi9cclxuXHJcbi8vICAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbi8vICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLy8gLmxhbmRpbmctZ3JvdXB7XHJcbi8vICAgICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbi8vICAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkOyAgICBcclxuLy8gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuLy8gfVxyXG5cclxuLy8gLmxhbmRpbmctcGlje1xyXG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAvLyB0b3A6IDI1MHB4OyAvKmZhbGxiYWNrKi9cclxuLy8gICAgIHRvcDogODB2SDtcclxuLy8gICAgIGxlZnQ6IDA7XHJcbi8vICAgICByaWdodDogMDtcclxuLy8gICAgIGJvdHRvbTogMDtcclxuXHJcbi8vICAgICBjb2xvcjogd2hpdGU7XHJcbi8vICAgICBmb250LXNpemU6MjAwcHggIWltcG9ydGFudDtcclxuXHJcbi8vICAgICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuNXM7XHJcbi8vICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cztcclxuLy8gfVxyXG5cclxuXHJcbi8vIC5sYW5kaW5nLXBpYy0tZm9yZXtcclxuLy8gICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDkwcHgpIHNjYWxlKC43KTtcclxuLy8gICAgIHotaW5kZXg6IDE7XHJcbi8vICAgICBjb2xvcjogcmVkO1xyXG4vLyAgICAvLyB0b3A6IDIyODFweDtcclxuLy8gICAgIGxlZnQ6IDMwdlc7XHJcbi8vICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooNnB4KSBzY2FsZSgwLjQpO1xyXG4vLyAgICAgcG9zaXRpb246c3RpY2t5O1xyXG4vLyB9XHJcblxyXG4vLyAubGFuZGluZy1waWMtLWJhc2V7XHJcbi8vICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuLy8gICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuLy8gICAgIHotaW5kZXg6MjsgICAgXHJcbi8vICAgICBjb2xvcjogcHVycGxlO1xyXG4vLyAgICAgLy90b3A6IDIxMzBweDtcclxuLy8gICAgIGxlZnQ6IDYwdlc7XHJcbi8vIH1cclxuXHJcbi8vIC5sYW5kaW5nLXBpYy0tYmFja3tcclxuLy8gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0zMDBweCkgc2NhbGUoMik7XHJcbi8vICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTUxcHgpIHNjYWxlKDIpO1xyXG4vLyAvLyB0b3A6IDExNjhweDtcclxuLy8gICAgIHotaW5kZXg6IDM7ICAgIFxyXG4vLyAgICAgY29sb3I6IHllbGxvdztcclxuLy8gfVxyXG5cclxuXHJcblxyXG4vLyAubGFuZGluZy1waWMtLWRlZXB7XHJcbi8vICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigtNjAwcHgpIHNjYWxlKDMpO1xyXG4vLyAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0xODlweCkgc2NhbGUoMyk7XHJcbi8vICAgICB6LWluZGV4OiA0O1xyXG4vLyAgICAgY29sb3I6IGdyZWVuO1xyXG4vLyAgICAgdG9wOiAwcHg7XHJcbi8vICAgICAgJiBpbWd7XHJcbi8vICAgICAgICAgIHdpZHRoOjE0MCU7XHJcbi8vICAgICAgfVxyXG4vLyB9XHJcblxyXG4vLyAvLyAtLS0tLS0tLS0tLS0tLVxyXG5cclxuLy8gc2VjdGlvbiBpbWd7XHJcbi8vICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuLy8gICAgIHRvcDowO1xyXG4vLyAgICAgbGVmdDowJTtcclxuLy8gICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgaGVpZ2h0OjEwMCU7XHJcbi8vICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuLy8gfVxyXG5cclxuLy8gc2VjdGlvbntcclxuLy8gICAgIGhlaWdodDogMTcwdkg7XHJcbi8vICAgICBvdmVyZmxvdzpoaWRkZW47XHJcbi8vICAgICB3aWR0aDogMTAwJTtcclxuLy8gfVxyXG5cclxuLy8gI3RleHR7XHJcbi8vICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbi8vICAgICBjb2xvcjogd2hpdGU7XHJcbi8vICAgICBmb250LXNpemU6IDYwcHg7XHJcbi8vICAgICB6LWluZGV4OjEwMDtcclxuLy8gfVxyXG5cclxuLy8gLmNhbnZhczpiZWZvcmV7XHJcbi8vICAgICBjb250ZW50OiAnJztcclxuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICAgIGJvdHRvbTowO1xyXG4vLyAgICAgd2lkdGg6MTAwJTtcclxuLy8gICAgIGhlaWdodDoyMDBweDtcclxuLy8gICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsdmFyKC0tbWFpbi1saWdodCksIHRyYW5zcGFyZW50KTtcclxuLy8gICAgIHotaW5kZXg6MTAwMDtcclxuLy8gfVxyXG4vLyA6aG9zdDpub3QoLmRheXRpbWUpOmFmdGVye1xyXG4vLyAgICAgY29udGVudDogJyc7XHJcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgICBib3R0b206MDtcclxuLy8gICAgIG9wYWNpdHk6IDAuNTtcclxuLy8gICAgIHRvcDowO1xyXG4vLyAgICAgd2lkdGg6MTAwJTtcclxuLy8gICAgIGhlaWdodDoxNTB2SDtcclxuLy8gICAgIG1peC1ibGVuZC1tb2RlOiBjb2xvcjtcclxuLy8gICAgIGJhY2tncm91bmQ6IHZhcigtLW1haW4tbGlnaHQpO1xyXG4vLyAgICAgei1pbmRleDo5OTk5O1xyXG4vLyB9XHJcblxyXG4vLyAjZm9yZWdyb3VuZDJcclxuLy8ge1xyXG4vLyAgICAgdG9wOiAzODBweDtcclxuLy8gICAgIHotaW5kZXg6NTA7XHJcbi8vICAgICBtYXgtd2lkdGg6IDEwMHZXO1xyXG5cclxuLy8gICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTIwcHgpIHsgICAgICAgIFxyXG4vLyAgICAgICAgIHRvcDogMjYwcHg7XHJcbi8vICAgICAgfVxyXG4vLyB9XHJcblxyXG4ud2F0Y2htYW4ge1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgIGxlZnQ6IDIwJTtcclxuICAgIHRvcDozMHZIO1xyXG4gICAgei1pbmRleDogNjA7XHJcbiAgICB3aWR0aDogbWF4KDgwdlcsIDIwMHB4KTtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG5cclxuLy8gLmNhbnZhc3tcclxuLy8gICAgIGhlaWdodDogMTYwdkg7IFxyXG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlOyBcclxuLy8gICAgIHdpZHRoOjEwMCU7XHJcblxyXG4vLyAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MjBweCkgeyAgICAgICAgXHJcbi8vICAgICAgICAgaGVpZ2h0OiAxMzZ2SDtcclxuLy8gICAgICB9XHJcbi8vIH1cclxuXHJcbi5yb20ge1xyXG4gICAgbWFyZ2luLXRvcDoyMDBweDtcclxuICAgIHdpZHRoOiBtYXgoMTAwdlcsIDQwMHB4KTtcclxuICAgIGxlZnQ6IC0zMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuLmJhcmMge1xyXG4gICAgd2lkdGg6IG1heCgxMDB2VywgNDAwcHgpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDotMzBweDtcclxufVxyXG5cclxuLnBhcmlzIHtcclxuICAgIHdpZHRoOiBtYXgoMTAwdlcsIDQwMHB4KTtcclxuICAgIG1heC13aWR0aDogODAlO1xyXG4gICAgcmlnaHQ6IC0xMCU7ICAgIFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4uaWNlbGFuZHtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICB0b3A6MjAwcHg7XHJcbn1cclxuXHJcblxyXG4jcGFyYWxsYXgtY29udGFpbmVyIHtcclxuICAgIC0tcGFyYWxsYXgtaGVpZ2h0OiAxNzB2SDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaGVpZ2h0OiB2YXIoLS1wYXJhbGxheC1oZWlnaHQpO1xyXG4gICAgY2xpcC1wYXRoOiBpbnNldCgwKTtcclxuXHJcbiAgICAmIGgxIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAmIGRpdiB7XHJcbiAgICAgICAgLy8gYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCAhaW1wb3J0YW50O1xyXG4gICAgICAgIC8vIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcclxuICAgICAgICAvLyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgICBoZWlnaHQ6IHZhcigtLXBhcmFsbGF4LWhlaWdodCk7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgICZbcGFyYWxsYXgtaXRlbV0ge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmW3BhcmFsbGF4LWZvcmVncm91bmRdIHtcclxuICAgICAgICAgICAgdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgICAgICAgICB6LWluZGV4OiAzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJltwYXJhbGxheC1iYWNrZ3JvdW5kXSB7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ 8415:
/*!*******************************************************************!*\
  !*** ./src/app/shared/parallex-panel/parallex-panel.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ParallexPanelComponent": () => (/* binding */ ParallexPanelComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


const _c0 = function (a0, a1, a2, a3) { return { "height": a0, "z-index": a1, "color": a2, "background-image": a3 }; };
const _c1 = function (a0) { return { "height": a0 }; };
const _c2 = ["*"];
class ParallexPanelComponent {
    constructor() { }
    ngOnInit() {
        if (!this.height) {
            this.height = '50vH';
        }
        if (!this.zIndex) {
            this.zIndex = '1';
        }
        if (!this.color) {
            this.color = 'white';
        }
        if (!this.background) {
            this.background = 'transparent';
        }
    }
}
ParallexPanelComponent.ɵfac = function ParallexPanelComponent_Factory(t) { return new (t || ParallexPanelComponent)(); };
ParallexPanelComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ParallexPanelComponent, selectors: [["parallex-panel"]], inputs: { height: "height", zIndex: "zIndex", color: "color", background: "background" }, ngContentSelectors: _c2, decls: 5, vars: 10, consts: [[1, "parallex-section", 3, "ngStyle"], [1, "fixed"], [3, "ngStyle"]], template: function ParallexPanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](3, _c0, ctx.height, ctx.zIndex, ctx.color, ctx.background));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", "", "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c1, ctx.height));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle], styles: ["[_nghost-%COMP%] {\n  height: 100vH;\n  width: 100%;\n  position: relative;\n}\n\n.parallex-section[_ngcontent-%COMP%] {\n  text-align: center;\n  position: absolute;\n  width: 100%;\n  clip: rect(0, auto, auto, 0);\n  background-size: cover !important;\n  background-position: center !important;\n  background-attachment: fixed !important;\n}\n\n.parallex-section[_ngcontent-%COMP%]   .fixed[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: var(--font-size);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcmFsbGV4LXBhbmVsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNDO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUFMOztBQUdDO0VBQ0csa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLGlDQUFBO0VBQ0Esc0NBQUE7RUFDQSx1Q0FBQTtBQUFKOztBQUVJO0VBQ0ksZUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSwyQkFBQTtBQUFSIiwiZmlsZSI6InBhcmFsbGV4LXBhbmVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiA6aG9zdHtcclxuICAgICBoZWlnaHQ6MTAwdkg7XHJcbiAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gfVxyXG5cclxuIC5wYXJhbGxleC1zZWN0aW9uIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgY2xpcDogcmVjdCgwLCBhdXRvLCBhdXRvLCAwKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDsgICAgXHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQgIWltcG9ydGFudDtcclxuXHJcbiAgICAmIC5maXhlZCB7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZSk7XHJcbiAgICB9XHJcbiB9Il19 */"] });


/***/ }),

/***/ 4408:
/*!*********************************************************!*\
  !*** ./src/app/shared/pulse-pic/pulse-pic.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PulsePicComponent": () => (/* binding */ PulsePicComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _directives_img_preview_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../directives/img-preview.directive */ 9352);
/* harmony import */ var _directives_lazy_img_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../directives/lazy-img.directive */ 1076);




function PulsePicComponent_ng_container_1__svg_svg_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "svg", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "path", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "text", 7)(4, "textPath", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("size-", ctx_r3.size, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r3.title, " ");
} }
function PulsePicComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, PulsePicComponent_ng_container_1__svg_svg_1_Template, 6, 5, "svg", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.title);
} }
function PulsePicComponent_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 9);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("size-", ctx_r1.size, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r1.src, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function PulsePicComponent_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 10);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("size-", ctx_r2.size, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r2.src, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
class PulsePicComponent {
    constructor() {
        this.zoom = true;
        this.size = 'lg';
    }
    toggleTitle() {
        this.showText != this.showText;
    }
    hideTitle() {
        this.showText = false;
    }
    showTitle() {
        this.showText = true;
    }
}
PulsePicComponent.ɵfac = function PulsePicComponent_Factory(t) { return new (t || PulsePicComponent)(); };
PulsePicComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PulsePicComponent, selectors: [["pulse-pic"]], inputs: { src: "src", title: "title", zoom: "zoom", size: "size" }, decls: 4, vars: 3, consts: [[1, "line-container", 3, "click", "mouseover", "mouseout"], [4, "ngIf"], ["preview", "", 3, "src", "class", 4, "ngIf"], [3, "src", "class", 4, "ngIf"], ["viewBox", "0 0 80 80", 3, "class", 4, "ngIf"], ["viewBox", "0 0 80 80"], ["id", "svgCircle", "d", "\n                        M 40 40\n                        m -40, 0\n                        a 40,40 0 1,1 80,0\n                        a 40,40 0 1,1 -80,0\n                        "], ["width", "80"], [0, "xlink", "href", "#svgCircle"], ["preview", "", 3, "src"], [3, "src"]], template: function PulsePicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PulsePicComponent_Template_div_click_0_listener() { return ctx.toggleTitle(); })("mouseover", function PulsePicComponent_Template_div_mouseover_0_listener() { return ctx.showTitle(); })("mouseout", function PulsePicComponent_Template_div_mouseout_0_listener() { return ctx.hideTitle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, PulsePicComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, PulsePicComponent_img_2_Template, 1, 4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, PulsePicComponent_img_3_Template, 1, 4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showText);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.zoom);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.zoom);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _directives_img_preview_directive__WEBPACK_IMPORTED_MODULE_0__.ImgPreviewDirective, _directives_lazy_img_directive__WEBPACK_IMPORTED_MODULE_1__.LazyImgDirective], styles: ["img[_ngcontent-%COMP%] {\n  height: calc(var(--size) * 1vW);\n  width: calc(var(--size) * 1vW);\n  max-height: calc(var(--size) * 1vH);\n  flex: 0;\n  -webkit-animation: img-pulse 6s infinite;\n          animation: img-pulse 6s infinite;\n  background-size: cover;\n  background-position: center;\n  aspect-ratio: 1/1;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\nimg.size-sm[_ngcontent-%COMP%] {\n  --size: 25;\n}\nimg.size-md[_ngcontent-%COMP%] {\n  --size: 40;\n}\n@media only screen and (min-width: 1200px) {\n  img.size-md-dyn[_ngcontent-%COMP%] {\n    --size: 20;\n  }\n}\n@media only screen and (max-width: 1200px) {\n  img.size-md-dyn[_ngcontent-%COMP%] {\n    --size: 30;\n  }\n}\n@media only screen and (max-width: 768px) {\n  img.size-md-dyn[_ngcontent-%COMP%] {\n    --size: 40;\n  }\n}\nimg.size-lg[_ngcontent-%COMP%] {\n  --size: 60;\n}\n@-webkit-keyframes img-pulse {\n  from, to {\n    -webkit-clip-path: circle(48.1% at 50% 50%);\n            clip-path: circle(48.1% at 50% 50%);\n  }\n  50% {\n    -webkit-clip-path: circle(50% at 50% 50%);\n            clip-path: circle(50% at 50% 50%);\n  }\n}\n@keyframes img-pulse {\n  from, to {\n    -webkit-clip-path: circle(48.1% at 50% 50%);\n            clip-path: circle(48.1% at 50% 50%);\n  }\n  50% {\n    -webkit-clip-path: circle(50% at 50% 50%);\n            clip-path: circle(50% at 50% 50%);\n  }\n}\n.pic-title[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 3;\n  color: white;\n  top: 50%;\n}\n.line-container[_ngcontent-%COMP%] {\n  position: relative;\n}\npath[_ngcontent-%COMP%] {\n  fill: transparent;\n}\n.box_rotate[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  overflow: hidden;\n}\nsvg[_ngcontent-%COMP%] {\n  position: absolute;\n  overflow: visible;\n  -webkit-animation: rotate 6s linear infinite;\n          animation: rotate 6s linear infinite;\n  filter: drop-shadow(0px 0px 8px white);\n  height: calc(var(--size) * 1vW);\n  width: calc(var(--size) * 1vW);\n  max-height: calc(var(--size) * 1vH);\n}\n@media only screen and (min-width: 1200px) {\n  svg.size-md-dyn[_ngcontent-%COMP%] {\n    --size: 20;\n  }\n}\n@media only screen and (max-width: 1200px) {\n  svg.size-md-dyn[_ngcontent-%COMP%] {\n    --size: 30;\n  }\n}\n@media only screen and (max-width: 768px) {\n  svg.size-md-dyn[_ngcontent-%COMP%] {\n    --size: 40;\n  }\n}\nsvg.size-lg[_ngcontent-%COMP%] {\n  --size: 60;\n}\ntext[_ngcontent-%COMP%], text[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  font-size: 16px;\n  letter-spacing: 1.15px;\n  fill: rgb(11, 120, 120);\n}\n@-webkit-keyframes rotate {\n  0% {\n    transform: rotate(360deg);\n  }\n  100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes rotate {\n  0% {\n    transform: rotate(360deg);\n  }\n  100% {\n    transform: rotate(0deg);\n  }\n}\n@media (max-width: 1200px) {\n  body[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n@media (max-width: 1150px) {\n  body[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n@media (max-width: 1024px) {\n  body[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .container[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n\n  .box[_ngcontent-%COMP%] {\n    height: 200px;\n    width: 100%;\n    max-width: 300px;\n    margin: 30px;\n  }\n}\n@media (max-width: 400px) {\n  .container[_ngcontent-%COMP%] {\n    padding: 0 15px;\n    justify-content: center;\n  }\n\n  .box[_ngcontent-%COMP%] {\n    height: 200px;\n    width: 100%;\n    max-width: 280px;\n    margin: 20px auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1bHNlLXBpYy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLCtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQ0FBQTtFQUNBLE9BQUE7RUFDQSx3Q0FBQTtVQUFBLGdDQUFBO0VBRUEsc0JBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQURKO0FBR0k7RUFDSSxVQUFBO0FBRFI7QUFHSTtFQUNHLFVBQUE7QUFEUDtBQUtRO0VBREo7SUFFUSxVQUFBO0VBRlY7QUFDRjtBQUdRO0VBSko7SUFLUSxVQUFBO0VBQVY7QUFDRjtBQUNRO0VBUEo7SUFRUSxVQUFBO0VBRVY7QUFDRjtBQUNJO0VBQ0ksVUFBQTtBQUNSO0FBR0E7RUFDSTtJQUNJLDJDQUFBO1lBQUEsbUNBQUE7RUFBTjtFQUVFO0lBQ0kseUNBQUE7WUFBQSxpQ0FBQTtFQUFOO0FBQ0Y7QUFOQTtFQUNJO0lBQ0ksMkNBQUE7WUFBQSxtQ0FBQTtFQUFOO0VBRUU7SUFDSSx5Q0FBQTtZQUFBLGlDQUFBO0VBQU47QUFDRjtBQUdBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7QUFESjtBQUlBO0VBQ0ksa0JBQUE7QUFESjtBQUtBO0VBQ0ksaUJBQUE7QUFGSjtBQTRCQztFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ00sa0JBQUE7RUFDQSxnQkFBQTtBQXpCUjtBQTJCQztFQUNPLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSw0Q0FBQTtVQUFBLG9DQUFBO0VBQ0Esc0NBQUE7RUFrQkQsK0JBQUE7RUFDQSw4QkFBQTtFQUNBLG1DQUFBO0FBekNQO0FBd0JVO0VBREE7SUFFSSxVQUFBO0VBckJaO0FBQ0Y7QUFzQlU7RUFKQTtJQUtJLFVBQUE7RUFuQlo7QUFDRjtBQW9CVTtFQVBBO0lBUUksVUFBQTtFQWpCWjtBQUNGO0FBb0JJO0VBQ0ksVUFBQTtBQWxCUjtBQTBCQzs7RUFFQyxlQUFBO0VBQ0Esc0JBQUE7RUFFRSx1QkFBQTtBQXhCSjtBQTRCQTtFQUNDO0lBQ0MseUJBQUE7RUF6QkE7RUEyQkQ7SUFDQyx1QkFBQTtFQXpCQTtBQUNGO0FBbUJBO0VBQ0M7SUFDQyx5QkFBQTtFQXpCQTtFQTJCRDtJQUNDLHVCQUFBO0VBekJBO0FBQ0Y7QUE0QkE7RUFDQztJQUNFLGVBQUE7RUExQkQ7QUFDRjtBQTZCQTtFQUNDO0lBQ0UsZUFBQTtFQTNCRDtBQUNGO0FBOEJBO0VBQ0U7SUFDQyxjQUFBO0VBNUJEOztFQThCQTtJQUNDLHVCQUFBO0VBM0JEOztFQTZCQTtJQUNFLGFBQUE7SUFDQSxXQUFBO0lBQ0EsZ0JBQUE7SUFDQSxZQUFBO0VBMUJGO0FBQ0Y7QUE2QkE7RUFHRTtJQUNFLGVBQUE7SUFDQSx1QkFBQTtFQTdCRjs7RUErQkE7SUFDRSxhQUFBO0lBQ0EsV0FBQTtJQUNBLGdCQUFBO0lBQ0EsaUJBQUE7RUE1QkY7QUFDRiIsImZpbGUiOiJwdWxzZS1waWMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1nIHtcclxuICAgIGhlaWdodDogIGNhbGModmFyKC0tc2l6ZSkgKiAxdlcpO1xyXG4gICAgd2lkdGg6ICBjYWxjKHZhcigtLXNpemUpICogMXZXKTtcclxuICAgIG1heC1oZWlnaHQ6ICBjYWxjKHZhcigtLXNpemUpICogMXZIKTtcclxuICAgIGZsZXg6IDA7XHJcbiAgICBhbmltYXRpb246IGltZy1wdWxzZSA2cyBpbmZpbml0ZTtcclxuICAgIFxyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGFzcGVjdC1yYXRpbzogMS8xO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcblxyXG4gICAgJi5zaXplLXNte1xyXG4gICAgICAgIC0tc2l6ZTogMjU7XHJcbiAgICB9IFxyXG4gICAgJi5zaXplLW1ke1xyXG4gICAgICAgLS1zaXplOiA0MDtcclxuICAgIH1cclxuXHJcbiAgICAmLnNpemUtbWQtZHlue1xyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7ICAgICAgXHJcbiAgICAgICAgICAgIC0tc2l6ZTogMjA7XHJcbiAgICAgICAgfSAgXHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHsgICAgICBcclxuICAgICAgICAgICAgLS1zaXplOiAzMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkgeyAgICAgIFxyXG4gICAgICAgICAgICAtLXNpemU6IDQwO1xyXG4gICAgICAgIH0gICBcclxuICAgIH1cclxuXHJcbiAgICAmLnNpemUtbGd7XHJcbiAgICAgICAgLS1zaXplOiA2MDsgICAgICAgIFxyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGltZy1wdWxzZSB7XHJcbiAgICBmcm9tLCB0byB7XHJcbiAgICAgICAgY2xpcC1wYXRoOiBjaXJjbGUoNDguMSUgYXQgNTAlIDUwJSk7XHJcbiAgICB9XHJcbiAgICA1MCUge1xyXG4gICAgICAgIGNsaXAtcGF0aDogY2lyY2xlKDUwLjAlIGF0IDUwJSA1MCUpO1xyXG4gICAgfVxyXG59XHJcblxyXG4ucGljLXRpdGxle1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMztcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgdG9wOjUwJTtcclxufVxyXG5cclxuLmxpbmUtY29udGFpbmVye1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5cclxucGF0aCB7XHJcbiAgICBmaWxsOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgXHJcblxyXG5AbWl4aW4gZmxleGJveCgpIHtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogLW1vei1ib3g7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG4gIEBtaXhpbiBqdXN0aWZ5LWNvbnRlbnQoJGp1c3RpZnkpIHtcclxuICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiAkanVzdGlmeTtcclxuICAgIC1tb3otanVzdGlmeS1jb250ZW50OiAkanVzdGlmeTtcclxuICAgIC1tcy1qdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5O1xyXG4gICAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeTtcclxuICAgIC1tcy1mbGV4LXBhY2s6ICRqdXN0aWZ5O1xyXG4gIH1cclxuICBAbWl4aW4gYWxpZ24taXRlbXMoJGFsaWduKSB7XHJcbiAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiAkYWxpZ247XHJcbiAgICAtbW96LWFsaWduLWl0ZW1zOiAkYWxpZ247XHJcbiAgICAtbXMtYWxpZ24taXRlbXM6ICRhbGlnbjtcclxuICAgIGFsaWduLWl0ZW1zOiAkYWxpZ247XHJcbiAgfVxyXG5cclxuXHJcblx0LmJveF9yb3RhdGUge1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRoZWlnaHQ6IDEwMCU7IFxyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cdH1cclxuXHRzdmcge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICAgICAgICBhbmltYXRpb246IHJvdGF0ZSA2cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMHB4IDhweCB3aGl0ZSk7XHJcbiAgICAgIFxyXG4gICAgICAgICAgJi5zaXplLW1kLWR5bntcclxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7ICAgICAgXHJcbiAgICAgICAgICAgICAgLS1zaXplOiAyMDtcclxuICAgICAgICAgIH0gIFxyXG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHsgICAgICBcclxuICAgICAgICAgICAgICAtLXNpemU6IDMwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkgeyAgICAgIFxyXG4gICAgICAgICAgICAgIC0tc2l6ZTogNDA7XHJcbiAgICAgICAgICB9ICAgXHJcbiAgICB9XHJcblxyXG4gICAgJi5zaXplLWxne1xyXG4gICAgICAgIC0tc2l6ZTogNjA7ICAgICAgICBcclxuICAgIH1cclxuICAgICAgIFxyXG4gICAgICAgaGVpZ2h0OiBjYWxjKHZhcigtLXNpemUpICogMXZXKTtcclxuICAgICAgIHdpZHRoOiBjYWxjKHZhcigtLXNpemUpICogMXZXKTtcclxuICAgICAgIG1heC1oZWlnaHQ6IGNhbGModmFyKC0tc2l6ZSkgKiAxdkgpO1xyXG4gICAgICAgIFxyXG5cdH1cclxuXHR0ZXh0LFxyXG4gIHRleHQgPiAqIHtcclxuXHRcdGZvbnQtc2l6ZTogMTZweDtcclxuXHRcdGxldHRlci1zcGFjaW5nOiAxLjE1cHg7XHJcbiAgICBcclxuICAgIGZpbGw6IHJnYigxMSwgMTIwLCAxMjApXHJcblx0fVxyXG5cclxuXHJcbkBrZXlmcmFtZXMgcm90YXRlIHtcclxuXHQwJSB7XHJcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG5cdH1cclxuXHQxMDAlIHtcclxuXHRcdHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG5cdH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gYm9keSB7XHJcbiAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMTUwcHgpIHtcclxuIGJvZHkge1xyXG4gICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgYm9keSB7XHJcbiAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICAuY29udGFpbmVyIHtcclxuXHQgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuICAuYm94IHtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgICBtYXJnaW46IDMwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcclxuICBib2R5IHtcclxuICB9XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbiAgLmJveCB7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDI4MHB4O1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgfVxyXG59Il19 */"] });


/***/ }),

/***/ 5314:
/*!***********************************************************************!*\
  !*** ./src/app/shared/scroll-indicator/scroll-indicator.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScrollIndicatorComponent": () => (/* binding */ ScrollIndicatorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


function ScrollIndicatorComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function ScrollIndicatorComponent_div_0_Template_div_mouseenter_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onMouseOver()); })("mouseleave", function ScrollIndicatorComponent_div_0_Template_div_mouseleave_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r3.onMouseOut()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 4)(4, "path", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
} }
class ScrollIndicatorComponent {
    constructor() {
        this.hover = false;
        this.isVisible = false;
    }
    onWindowScroll() {
        //In chrome and some browser scroll is given to body tag
        let pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
        let max = document.documentElement.scrollHeight;
        // pos/max will give you the distance between scroll bottom and and bottom of screen in percentage.
        if (pos + 200 >= max) {
            this.isVisible = false;
            this.hover = false; // hard set
        }
        else {
            this.isVisible = true;
        }
    }
    onMouseOver() {
        if (!this.hover) {
            this.hover = true;
            this.pageScrollDown();
        }
    }
    onMouseOut() {
        this.hover = false;
    }
    pageScrollDown() {
        if (this.hover) {
            window.scrollBy({
                top: 100,
                left: 0,
                behavior: 'smooth'
            });
            setTimeout(() => {
                this.pageScrollDown();
            }, 200);
        }
    }
}
ScrollIndicatorComponent.ɵfac = function ScrollIndicatorComponent_Factory(t) { return new (t || ScrollIndicatorComponent)(); };
ScrollIndicatorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ScrollIndicatorComponent, selectors: [["app-scroll-indicator"]], hostBindings: function ScrollIndicatorComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function ScrollIndicatorComponent_scroll_HostBindingHandler($event) { return ctx.onWindowScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 1, vars: 1, consts: [["class", "scrolldown-container", 3, "mouseenter", "mouseleave", 4, "ngIf"], [1, "scrolldown-container", 3, "mouseenter", "mouseleave"], [1, "scrolldown-btn"], ["version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "width", "50px", "height", "80px", "viewbox", "0 0 50 80", "enable-background", "new 0 0 50 80", 0, "xml", "space", "preserve"], ["fill", "rgb(1, 175, 175)", "d", "M24.752,79.182c-0.397,0-0.752-0.154-1.06-0.463L2.207,57.234c-0.306-0.305-0.458-0.656-0.458-1.057                  s0.152-0.752,0.458-1.059l2.305-2.305c0.309-0.309,0.663-0.461,1.06-0.461c0.398,0,0.752,0.152,1.061,0.461l18.119,18.119                  l18.122-18.119c0.306-0.309,0.657-0.461,1.057-0.461c0.402,0,0.753,0.152,1.059,0.461l2.306,2.305                  c0.308,0.307,0.461,0.658,0.461,1.059s-0.153,0.752-0.461,1.057L25.813,78.719C25.504,79.027,25.15,79.182,24.752,79.182z", 1, "first-path"], ["fill", "rgb(1, 175, 175)", "d", "M24.752,58.25c-0.397,0-0.752-0.154-1.06-0.463L2.207,36.303c-0.306-0.304-0.458-0.655-0.458-1.057                  c0-0.4,0.152-0.752,0.458-1.058l2.305-2.305c0.309-0.308,0.663-0.461,1.06-0.461c0.398,0,0.752,0.153,1.061,0.461l18.119,18.12                  l18.122-18.12c0.306-0.308,0.657-0.461,1.057-0.461c0.402,0,0.753,0.153,1.059,0.461l2.306,2.305                  c0.308,0.306,0.461,0.657,0.461,1.058c0,0.401-0.153,0.753-0.461,1.057L25.813,57.787C25.504,58.096,25.15,58.25,24.752,58.25z", 1, "second-path"]], template: function ScrollIndicatorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ScrollIndicatorComponent_div_0_Template, 5, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isVisible);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], styles: [".scrolldown-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.scrolldown-btn[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 100px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  bottom: auto;\n  right: auto;\n  transform: translateX(-50%) translateY(-50%);\n  text-align: center;\n}\n\nsvg[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: auto;\n}\n\npath.first-path[_ngcontent-%COMP%] {\n  -webkit-animation: scrollanim 1s ease-in-out infinite;\n          animation: scrollanim 1s ease-in-out infinite;\n  -webkit-animation-delay: 0.8s;\n          animation-delay: 0.8s;\n}\n\npath.second-path[_ngcontent-%COMP%] {\n  -webkit-animation: scrollanim2 1s ease-in-out infinite;\n          animation: scrollanim2 1s ease-in-out infinite;\n}\n\n@-webkit-keyframes scrollanim {\n  0% {\n    -webkit-transform: translate(0, -40px);\n    opacity: 0;\n  }\n  60% {\n    -webkit-transform: translate(0, 0);\n    opacity: 0.8;\n  }\n}\n\n@keyframes scrollanim {\n  0% {\n    transform: translate(0, -40px);\n    opacity: 0;\n  }\n  60% {\n    transform: translate(0, 0);\n    opacity: 0.8;\n  }\n}\n\n@-webkit-keyframes scrollanim2 {\n  0% {\n    -webkit-transform: translate(0, -40px);\n    opacity: 0;\n  }\n  60% {\n    -webkit-transform: translate(0, 0px);\n    opacity: 0.6;\n  }\n}\n\n@keyframes scrollanim2 {\n  0% {\n    transform: translate(0, -40px);\n    opacity: 0;\n  }\n  60% {\n    transform: translate(0, 0px);\n    opacity: 0.6;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcm9sbC1pbmRpY2F0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBRUUsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFLQSw0Q0FBQTtFQUNBLGtCQUFBO0FBQUY7O0FBSUE7RUFFRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFGRjs7QUFNRTtFQUNFLHFEQUFBO1VBQUEsNkNBQUE7RUFDQSw2QkFBQTtVQUFBLHFCQUFBO0FBSEo7O0FBTUU7RUFDRSxzREFBQTtVQUFBLDhDQUFBO0FBSko7O0FBU0E7RUFDRTtJQUNFLHNDQUFBO0lBQ0EsVUFBQTtFQU5GO0VBU0E7SUFDRSxrQ0FBQTtJQUNBLFlBQUE7RUFQRjtBQUNGOztBQXNCQTtFQUNFO0lBS0UsOEJBQUE7SUFDQSxVQUFBO0VBVkY7RUFhQTtJQUtFLDBCQUFBO0lBQ0EsWUFBQTtFQVhGO0FBQ0Y7O0FBY0E7RUFDRTtJQUNFLHNDQUFBO0lBQ0EsVUFBQTtFQVpGO0VBZUE7SUFDRSxvQ0FBQTtJQUNBLFlBQUE7RUFiRjtBQUNGOztBQTRCQTtFQUNFO0lBS0UsOEJBQUE7SUFDQSxVQUFBO0VBaEJGO0VBbUJBO0lBS0UsNEJBQUE7SUFDQSxZQUFBO0VBakJGO0FBQ0YiLCJmaWxlIjoic2Nyb2xsLWluZGljYXRvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY3JvbGxkb3duLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uc2Nyb2xsZG93bi1idG4ge1xyXG5cclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgYm90dG9tOiBhdXRvO1xyXG4gIHJpZ2h0OiBhdXRvO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5cclxuc3ZnIHtcclxuXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG5cclxucGF0aCB7XHJcbiAgJi5maXJzdC1wYXRoIHtcclxuICAgIGFuaW1hdGlvbjogc2Nyb2xsYW5pbSAxcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMC44cztcclxuICB9XHJcblxyXG4gICYuc2Vjb25kLXBhdGgge1xyXG4gICAgYW5pbWF0aW9uOiBzY3JvbGxhbmltMiAxcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2Nyb2xsYW5pbSB7XHJcbiAgMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNDBweCk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuXHJcbiAgNjAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbiAgfVxyXG59XHJcblxyXG5ALW1vei1rZXlmcmFtZXMgc2Nyb2xsYW5pbSB7XHJcbiAgMCUge1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNDBweCk7XHJcbiAgICBvcGFjaXR5OiAwXHJcbiAgfVxyXG5cclxuICA2MCUge1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcclxuICAgIG9wYWNpdHk6IDAuOFxyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzY3JvbGxhbmltIHtcclxuICAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC00MHB4KTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTQwcHgpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC00MHB4KTtcclxuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC00MHB4KTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC00MHB4KTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG5cclxuICA2MCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XHJcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gIH1cclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHNjcm9sbGFuaW0yIHtcclxuICAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC00MHB4KTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG5cclxuICA2MCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwcHgpO1xyXG4gICAgb3BhY2l0eTogMC42O1xyXG4gIH1cclxufVxyXG5cclxuQC1tb3ota2V5ZnJhbWVzIHNjcm9sbGFuaW0yIHtcclxuICAwJSB7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC00MHB4KTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG5cclxuICA2MCUge1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwcHgpO1xyXG4gICAgb3BhY2l0eTogMC42O1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzY3JvbGxhbmltMiB7XHJcbiAgMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNDBweCk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC00MHB4KTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNDBweCk7XHJcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNDBweCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNDBweCk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuXHJcbiAgNjAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMHB4KTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMHB4KTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwcHgpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMHB4KTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDBweCk7XHJcbiAgICBvcGFjaXR5OiAwLjY7XHJcbiAgfVxyXG59Il19 */"] });


/***/ }),

/***/ 5675:
/*!*************************************************************!*\
  !*** ./src/app/shared/scroll-show/scroll-show.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScrollShowComponent": () => (/* binding */ ScrollShowComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


function ScrollShowComponent_ng_container_2_div_7_ng_content_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 0, ["*ngSwitchCase", "0"]);
} }
function ScrollShowComponent_ng_container_2_div_7_ng_content_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 1, ["*ngSwitchCase", "1"]);
} }
function ScrollShowComponent_ng_container_2_div_7_ng_content_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 2, ["*ngSwitchCase", "2"]);
} }
function ScrollShowComponent_ng_container_2_div_7_ng_content_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 3, ["*ngSwitchCase", "3"]);
} }
function ScrollShowComponent_ng_container_2_div_7_ng_content_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 4, ["*ngSwitchCase", "4"]);
} }
function ScrollShowComponent_ng_container_2_div_7_ng_content_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 5, ["*ngSwitchCase", "5"]);
} }
function ScrollShowComponent_ng_container_2_div_7_ng_content_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 6, ["*ngSwitchCase", "6"]);
} }
function ScrollShowComponent_ng_container_2_div_7_ng_content_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 7, ["*ngSwitchCase", "7"]);
} }
function ScrollShowComponent_ng_container_2_div_7_ng_content_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 8, ["*ngSwitchCase", "8"]);
} }
function ScrollShowComponent_ng_container_2_div_7_ng_content_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 9, ["*ngSwitchCase", "9"]);
} }
function ScrollShowComponent_ng_container_2_div_7_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
function ScrollShowComponent_ng_container_2_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8)(1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ScrollShowComponent_ng_container_2_div_7_ng_content_2_Template, 1, 0, "ng-content", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ScrollShowComponent_ng_container_2_div_7_ng_content_3_Template, 1, 0, "ng-content", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ScrollShowComponent_ng_container_2_div_7_ng_content_4_Template, 1, 0, "ng-content", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ScrollShowComponent_ng_container_2_div_7_ng_content_5_Template, 1, 0, "ng-content", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ScrollShowComponent_ng_container_2_div_7_ng_content_6_Template, 1, 0, "ng-content", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ScrollShowComponent_ng_container_2_div_7_ng_content_7_Template, 1, 0, "ng-content", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ScrollShowComponent_ng_container_2_div_7_ng_content_8_Template, 1, 0, "ng-content", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ScrollShowComponent_ng_container_2_div_7_ng_content_9_Template, 1, 0, "ng-content", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ScrollShowComponent_ng_container_2_div_7_ng_content_10_Template, 1, 0, "ng-content", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ScrollShowComponent_ng_container_2_div_7_ng_content_11_Template, 1, 0, "ng-content", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ScrollShowComponent_ng_container_2_div_7_div_12_Template, 1, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 9);
} }
function ScrollShowComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 3)(2, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScrollShowComponent_ng_container_2_Template_span_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const i_r2 = restoredCtx.index; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r16.scrollToTemplate(i_r2)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScrollShowComponent_ng_container_2_Template_span_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const i_r2 = restoredCtx.index; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r18.scrollToTemplate(i_r2)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ScrollShowComponent_ng_container_2_div_7_Template, 13, 11, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.backgroundText);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.foregorundText);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.withDescription === true);
} }
const _c0 = [[["", "slot", "template0"]], [["", "slot", "template1"]], [["", "slot", "template2"]], [["", "slot", "template3"]], [["", "slot", "template4"]], [["", "slot", "template5"]], [["", "slot", "template6"]], [["", "slot", "template7"]], [["", "slot", "template8"]], [["", "slot", "template9"]]];
const _c1 = ["[slot=template0]", "[slot=template1]", "[slot=template2]", "[slot=template3]", "[slot=template4]", "[slot=template5]", "[slot=template6]", "[slot=template7]", "[slot=template8]", "[slot=template9]"];
class ScrollShowComponent {
    constructor() { }
    ngOnInit() {
        if (this.items?.length > 10) {
            alert('Mehr als 10 Elemente zeigt die Seite nicht so schön an, sorry');
        }
        else if (this.withDescription && this.items?.length > 5) {
            alert('Mehr als 5 Elemente zeigt die Seite nicht so schön an, sorry.');
        }
    }
    scrollToTemplate(index) {
        document.querySelector("[slot=template" + index + "]").scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}
ScrollShowComponent.ɵfac = function ScrollShowComponent_Factory(t) { return new (t || ScrollShowComponent)(); };
ScrollShowComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ScrollShowComponent, selectors: [["scroll-show"]], inputs: { items: "items", withDescription: "withDescription" }, ngContentSelectors: _c1, decls: 4, vars: 1, consts: [[1, "starter"], [4, "ngFor", "ngForOf"], [1, "breaker"], [1, "sticky"], [1, "bg", 3, "click"], [1, "fg", 3, "click"], [1, "bumper"], ["class", "description", 4, "ngIf"], [1, "description"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"]], template: function ScrollShowComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ScrollShowComponent_ng_container_2_Template, 8, 3, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgSwitchDefault], styles: ["[_nghost-%COMP%] {\n  --font-size-lg: max(5vh, 40px);\n  --font-size-bg: min(10vh,20vW);\n  --bumper-bg: -5vH;\n}\n\n.starter[_ngcontent-%COMP%] {\n  top: 0;\n  height: 70vh;\n  padding-top: 0px;\n  margin-top: 8VH;\n}\n\n.breaker[_ngcontent-%COMP%] {\n  top: 15vh;\n  height: 100vh;\n  text-align: center;\n  position: relative;\n  z-index: -99;\n}\n\n.description[_ngcontent-%COMP%] {\n  padding-bottom: 40vH;\n  padding-left: 25px;\n  color: var(--font-color);\n  font-weight: lighter;\n  font-size: min(10vw, 70x);\n}\n\n@media (min-width: 1000px) {\n  \n  [_nghost-%COMP%] {\n    --font-size-bg: 20vh;\n    --bumper-bg: -12vH;\n  }\n}\n\n\n\nol[_ngcontent-%COMP%] {\n  list-style: none;\n  counter-reset: days-counter;\n  font-size: var(--font-size);\n  position: relative;\n  padding: 0;\n  \n  \n  \n  \n  \n}\n\nol[_ngcontent-%COMP%]   li.sticky[_ngcontent-%COMP%]   span.fg[_ngcontent-%COMP%] {\n  text-align: center;\n  \n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  color: var(--primary-color);\n  \n  z-index: 5;\n}\n\nol[_ngcontent-%COMP%]   li.sticky[_ngcontent-%COMP%]   div.bumper[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n\nol[_ngcontent-%COMP%]   li.sticky[_ngcontent-%COMP%]:hover   span.bg[_ngcontent-%COMP%] {\n  z-index: -4;\n  position: absolute;\n  opacity: 0.2;\n  font-size: var(--font-size-bg);\n  font-family: \"Major Mono Display\", monospace;\n  color: var(--primary-color);\n}\n\nol[_ngcontent-%COMP%]   li.sticky[_ngcontent-%COMP%]   span.bg[_ngcontent-%COMP%] {\n  color: var(--scroll-show-sticky-bg-color);\n  z-index: -5;\n  position: absolute;\n  opacity: 0.2;\n  font-size: var(--font-size-bg);\n  font-family: \"Major Mono Display\", monospace;\n  top: var(--bumper-bg);\n}\n\nol[_ngcontent-%COMP%]   li.sticky[_ngcontent-%COMP%]:hover   span.fg[_ngcontent-%COMP%] {\n  color: var(--theme-color-white);\n}\n\nol[_ngcontent-%COMP%]   li.sticky[_ngcontent-%COMP%]:nth-child(odd)   span.bg[_ngcontent-%COMP%] {\n  left: 0%;\n}\n\nol[_ngcontent-%COMP%]   li.sticky[_ngcontent-%COMP%] {\n  position: -webkit-sticky;\n  position: sticky;\n}\n\nol[_ngcontent-%COMP%]   li.sticky[_ngcontent-%COMP%]:nth-child(even)   span.bg[_ngcontent-%COMP%] {\n  right: 0%;\n}\n\n.bg[_ngcontent-%COMP%], .fg[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n\n\nol[_ngcontent-%COMP%]   li.sticky[_ngcontent-%COMP%]:nth-child(0) {\n  top: -4.5vh;\n  height: 107.5vh;\n}\n\nol[_ngcontent-%COMP%]   li.sticky[_ngcontent-%COMP%]:nth-child(1) {\n  top: 3vh;\n  height: 100vh;\n}\n\nol[_ngcontent-%COMP%]   li.sticky[_ngcontent-%COMP%]:nth-child(2) {\n  top: 10.5vh;\n  height: 92.5vh;\n}\n\nol[_ngcontent-%COMP%]   li.sticky[_ngcontent-%COMP%]:nth-child(3) {\n  top: 18vh;\n  height: 85vh;\n}\n\nol[_ngcontent-%COMP%]   li.sticky[_ngcontent-%COMP%]:nth-child(4) {\n  top: 25.5vh;\n  height: 77.5vh;\n}\n\nol[_ngcontent-%COMP%]   li.sticky[_ngcontent-%COMP%]:nth-child(5) {\n  top: 33vh;\n  height: 70vh;\n}\n\nol[_ngcontent-%COMP%]   li.sticky[_ngcontent-%COMP%]:nth-child(6) {\n  top: 40.5vh;\n  height: 62.5vh;\n}\n\nol[_ngcontent-%COMP%]   li.sticky[_ngcontent-%COMP%]:nth-child(7) {\n  top: 48vh;\n  height: 55vh;\n}\n\nol[_ngcontent-%COMP%]   li.sticky[_ngcontent-%COMP%]:nth-child(8) {\n  top: 55.5vh;\n  height: 47.5vh;\n}\n\nol[_ngcontent-%COMP%]   li.sticky[_ngcontent-%COMP%]:nth-child(9) {\n  top: 63vh;\n  height: 40vh;\n}\n\nol[_ngcontent-%COMP%]   li.sticky[_ngcontent-%COMP%]:nth-child(10) {\n  top: 70.5vh;\n  height: 32.5vh;\n}\n\nol[_ngcontent-%COMP%]   li.sticky[_ngcontent-%COMP%]:nth-child(11) {\n  top: 78vh;\n  height: 25vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcm9sbC1zaG93LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOEJBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxNQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsU0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUdBO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtBQUFGOztBQUdBO0VBRUUsY0FBQTtFQUNBO0lBQ0Usb0JBQUE7SUFDQSxrQkFBQTtFQURGO0FBQ0Y7O0FBSUEseURBQUE7O0FBQ0E7RUFDRSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFFQSxpQ0FBQTtFQWlCQSxvR0FBQTtFQXNCQSw4Q0FBQTtFQUtBLDBFQUFBO0VBT0EsdUZBQUE7QUFsREY7O0FBQUU7RUFDRSxrQkFBQTtFQUNBLHVDQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsOEVBQUE7RUFDQSxVQUFBO0FBRUo7O0FBQ0U7RUFDRSxhQUFBO0FBQ0o7O0FBSUU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSw0Q0FBQTtFQUNBLDJCQUFBO0FBRko7O0FBS0U7RUFDRSx5Q0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLDRDQUFBO0VBQ0EscUJBQUE7QUFISjs7QUFRRTtFQUNFLCtCQUFBO0FBTko7O0FBV0U7RUFDRSxRQUFBO0FBVEo7O0FBY0U7RUFDRSx3QkFBQTtFQUFBLGdCQUFBO0FBWko7O0FBZUU7RUFDRSxTQUFBO0FBYko7O0FBa0JBOztFQUVFLGVBQUE7QUFmRjs7QUErQkE7O0dBQUE7O0FBSUU7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQTdCSjs7QUEyQkU7RUFDRSxRQUFBO0VBQ0EsYUFBQTtBQXhCSjs7QUFzQkU7RUFDRSxXQUFBO0VBQ0EsY0FBQTtBQW5CSjs7QUFpQkU7RUFDRSxTQUFBO0VBQ0EsWUFBQTtBQWRKOztBQVlFO0VBQ0UsV0FBQTtFQUNBLGNBQUE7QUFUSjs7QUFPRTtFQUNFLFNBQUE7RUFDQSxZQUFBO0FBSko7O0FBRUU7RUFDRSxXQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUhFO0VBQ0UsU0FBQTtFQUNBLFlBQUE7QUFNSjs7QUFSRTtFQUNFLFdBQUE7RUFDQSxjQUFBO0FBV0o7O0FBYkU7RUFDRSxTQUFBO0VBQ0EsWUFBQTtBQWdCSjs7QUFsQkU7RUFDRSxXQUFBO0VBQ0EsY0FBQTtBQXFCSjs7QUF2QkU7RUFDRSxTQUFBO0VBQ0EsWUFBQTtBQTBCSiIsImZpbGUiOiJzY3JvbGwtc2hvdy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAtLWZvbnQtc2l6ZS1sZzogbWF4KDV2aCwgNDBweCk7ICBcclxuICAtLWZvbnQtc2l6ZS1iZzogbWluKDEwdmgsMjB2Vyk7XHJcbiAgLS1idW1wZXItYmc6IC01dkg7XHJcbn1cclxuXHJcbi5zdGFydGVyIHtcclxuICB0b3A6IDA7XHJcbiAgaGVpZ2h0OiA3MHZoO1xyXG4gIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgbWFyZ2luLXRvcDogOFZIO1xyXG59XHJcblxyXG4uYnJlYWtlciB7XHJcbiAgdG9wOiAjeygoMSAtIDEpICogNy41KSArIDE1dmh9O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAtOTk7XHJcbn1cclxuXHJcblxyXG4uZGVzY3JpcHRpb24ge1xyXG4gIHBhZGRpbmctYm90dG9tOiA0MHZIO1xyXG4gIHBhZGRpbmctbGVmdDogMjVweDtcclxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XHJcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgZm9udC1zaXplOiBtaW4oMTB2dywgNzB4KTtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDEwMDBweCkge1xyXG5cclxuICAvKiBmdWxsc2NyZWVuKi9cclxuICA6aG9zdCB7XHJcbiAgICAtLWZvbnQtc2l6ZS1iZzogMjB2aDtcclxuICAgIC0tYnVtcGVyLWJnOiAtMTJ2SDtcclxuICB9XHJcbn1cclxuXHJcbi8qIHJlcGxhY2UgdGhlIGRlZmF1bHQgbGlzdC1zdHlsZSB3aXRoIGEgY3VzdG9tIGNvdW50ZXIgKi9cclxub2wge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgY291bnRlci1yZXNldDogZGF5cy1jb3VudGVyO1xyXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplKTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZzogMDtcclxuXHJcbiAgLyogaW5jcmVtZW50IHRoZSBjdXN0b20gY291bnRlciAqL1xyXG4gICYgbGkuc3RpY2t5IHNwYW4uZmcge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLyogY2VudGVyIHRoZSBjb250ZW50IGluIHRoZSB2aWV3cG9ydCAqL1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgLyogcG9zaXRpb24gcmVsYXRpdmUgdG8gYWJzb2x1dGUgcG9zaXRpb24gdGhlIHBzZXVkbyBlbGVtZW50IGJlaGluZCB0aGUgdGV4dCAqL1xyXG4gICAgei1pbmRleDogNTtcclxuICB9XHJcblxyXG4gICYgbGkuc3RpY2t5IGRpdi5idW1wZXIge1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICB9XHJcblxyXG4gIC8qIGRpc3BsYXkgdGhlIGN1c3RvbSBjb3VudGVyIHdpdGggdGhlIDpiZWZvcmUgcHNldWRvIGVsZW1lbnQsIGluIHRoZSB2ZXJ5IGNlbnRlciBvZiB0aGUgbGlzdCBpdGVtICovXHJcblxyXG4gICYgbGkuc3RpY2t5OmhvdmVyIHNwYW4uYmcge1xyXG4gICAgei1pbmRleDogLTQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBvcGFjaXR5OiAwLjI7XHJcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1iZyk7XHJcbiAgICBmb250LWZhbWlseTogJ01ham9yIE1vbm8gRGlzcGxheScsIG1vbm9zcGFjZTtcclxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICB9XHJcblxyXG4gICYgbGkuc3RpY2t5IHNwYW4uYmcge1xyXG4gICAgY29sb3I6IHZhcigtLXNjcm9sbC1zaG93LXN0aWNreS1iZy1jb2xvcik7XHJcbiAgICB6LWluZGV4OiAtNTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG9wYWNpdHk6IDAuMjtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWJnKTtcclxuICAgIGZvbnQtZmFtaWx5OiAnTWFqb3IgTW9ubyBEaXNwbGF5JywgbW9ub3NwYWNlO1xyXG4gICAgdG9wOiB2YXIoLS1idW1wZXItYmcpO1xyXG5cclxuICB9XHJcblxyXG4gIC8qIGFkZGVkIGJvbnVzLCBhIG1vcmUgY2hyaXN0bWFzLXkgc2VsZWN0aW9uICovXHJcbiAgJiBsaS5zdGlja3k6aG92ZXIgc3Bhbi5mZyB7XHJcbiAgICBjb2xvcjogdmFyKC0tdGhlbWUtY29sb3Itd2hpdGUpO1xyXG4gIH1cclxuXHJcbiAgLyogcG9zaXRpb24gdGhlIGN1c3RvbSBjb3VudGVyIHRvIHRoZSBsZWZ0L3JpZ2h0IGZvciBvZGQvZXZlbiBsaXN0IGl0ZW1zICovXHJcblxyXG4gICYgbGkuc3RpY2t5Om50aC1jaGlsZChvZGQpIHNwYW4uYmcge1xyXG4gICAgbGVmdDogMCU7XHJcbiAgICAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyMCUsIDAlKTtcclxuICB9XHJcblxyXG4gIC8qIGFkZCBwb3NpdGlvbiBzdGlja3kgYW5kIHBvc2l0aW9uIGVhY2ggc3Vic2VxdWVudCBsaXN0IGl0ZW0gNy41dmggZnJvbSB0aGUgcHJldmlvdXMgKi9cclxuICAmIGxpLnN0aWNreSB7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIH1cclxuXHJcbiAgJiBsaS5zdGlja3k6bnRoLWNoaWxkKGV2ZW4pIHNwYW4uYmcge1xyXG4gICAgcmlnaHQ6IDAlO1xyXG4gICAgLy8gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0yMCUsIDAlKTtcclxuICB9XHJcbn1cclxuXHJcbi5iZyxcclxuLmZnIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICBvbCBsaTpudGgtY2hpbGQob2RkKSBzcGFuLmJnIHtcclxuICAgIC8vICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAwJSk7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICBvbCBsaTpudGgtY2hpbGQoZXZlbikgc3Bhbi5iZyB7XHJcbiAgICAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XHJcbiAgfVxyXG59XHJcblxyXG4vKiAhIGhhdmUgdGhlIGxpc3QgaXRlbXMgb2NjdXB5IGVub3VnaCB2ZXJ0aWNhbCBzcGFjZSB0byBjb3ZlciAodmlld3BvcnQgLSB2ZXJ0aWNhbCBvZmZzZXQpXHJcbiAgb3RoZXJ3aXNlIHRoZSBlbGVtZW50cyB3b3VsZCBjb2xsYXBzZSB0byB0aGUgdG9wIG9uY2UgdGhlIHBhZ2UgcmVhY2hlcyB0aGUgbGFzdCBpdGVtXHJcbiAgKi9cclxuQGZvciAkY291bnRlciBmcm9tIDAgdGhyb3VnaCAxMSB7XHJcbiAgb2wgbGkuc3RpY2t5Om50aC1jaGlsZCgjeyRjb3VudGVyfSkge1xyXG4gICAgdG9wOiAjeygoJGNvdW50ZXIgLSAxKSAqIDcuNSkgKyAzdmh9O1xyXG4gICAgaGVpZ2h0OiAjezEwMHZoIC0gKCRjb3VudGVyIC0gMSkgKiA3LjV2aH07XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _alert_alert_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert/alert.component */ 8549);
/* harmony import */ var _social_media_button_social_media_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./social-media-button/social-media-button.component */ 4969);
/* harmony import */ var _pulse_pic_pulse_pic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pulse-pic/pulse-pic.component */ 4408);
/* harmony import */ var _scroll_indicator_scroll_indicator_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scroll-indicator/scroll-indicator.component */ 5314);
/* harmony import */ var _scroll_show_scroll_show_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scroll-show/scroll-show.component */ 5675);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app-routing.module */ 158);
/* harmony import */ var _parallex_panel_parallex_panel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parallex-panel/parallex-panel.component */ 8415);
/* harmony import */ var _parallex_layers_parallex_layers_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./parallex-layers/parallex-layers.component */ 5554);
/* harmony import */ var _knockout_text_knockout_text_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./knockout-text/knockout-text.component */ 6971);
/* harmony import */ var _text_over_pic_text_over_pic_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./text-over-pic/text-over-pic.component */ 6932);
/* harmony import */ var _stroke_animate_stroke_animate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./stroke-animate/stroke-animate.component */ 4090);
/* harmony import */ var _video_text_video_text_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./video-text/video-text.component */ 6039);
/* harmony import */ var _hero_text_hero_text_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./hero-text/hero-text.component */ 8912);
/* harmony import */ var _three_layer_three_layer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./three-layer/three-layer.component */ 8673);
/* harmony import */ var _hero_bg_hero_bg_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./hero-bg/hero-bg.component */ 140);
/* harmony import */ var _img_full_modal_img_full_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./img-full-modal/img-full-modal.component */ 8874);
/* harmony import */ var _directives_visibility_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./directives/visibility.service */ 8409);
/* harmony import */ var _directives_shortcut_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./directives/shortcut.directive */ 851);
/* harmony import */ var _directives_firework_btn_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./directives/firework-btn.directive */ 8128);
/* harmony import */ var _directives_focus_priority_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./directives/focus-priority.directive */ 4338);
/* harmony import */ var _directives_img_preview_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./directives/img-preview.directive */ 9352);
/* harmony import */ var _directives_lazy_img_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./directives/lazy-img.directive */ 1076);
/* harmony import */ var _directives_scroll_percent_directive__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./directives/scroll-percent.directive */ 4838);
/* harmony import */ var _directives_scroll_property_directive__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./directives/scroll-property.directive */ 693);
/* harmony import */ var _directives_visible_with_directive__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./directives/visible-with.directive */ 6489);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/core */ 2560);






























class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdefineInjector"]({ providers: [_directives_visibility_service__WEBPACK_IMPORTED_MODULE_16__.VisibilityService], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_26__.BrowserModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_27__.FormsModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_28__.CommonModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_29__.BrowserAnimationsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_5__.AppRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_alert_alert_component__WEBPACK_IMPORTED_MODULE_0__.AlertComponent,
        _social_media_button_social_media_button_component__WEBPACK_IMPORTED_MODULE_1__.SocialMediaButtonComponent,
        _pulse_pic_pulse_pic_component__WEBPACK_IMPORTED_MODULE_2__.PulsePicComponent,
        _scroll_indicator_scroll_indicator_component__WEBPACK_IMPORTED_MODULE_3__.ScrollIndicatorComponent,
        _scroll_show_scroll_show_component__WEBPACK_IMPORTED_MODULE_4__.ScrollShowComponent,
        _parallex_panel_parallex_panel_component__WEBPACK_IMPORTED_MODULE_6__.ParallexPanelComponent,
        _parallex_layers_parallex_layers_component__WEBPACK_IMPORTED_MODULE_7__.ParallexLayersComponent,
        _knockout_text_knockout_text_component__WEBPACK_IMPORTED_MODULE_8__.KnockoutTextComponent,
        _text_over_pic_text_over_pic_component__WEBPACK_IMPORTED_MODULE_9__.TextOverPicComponent,
        _stroke_animate_stroke_animate_component__WEBPACK_IMPORTED_MODULE_10__.StrokeAnimateComponent,
        _video_text_video_text_component__WEBPACK_IMPORTED_MODULE_11__.VideoTextComponent,
        _hero_text_hero_text_component__WEBPACK_IMPORTED_MODULE_12__.HeroTextComponent,
        _three_layer_three_layer_component__WEBPACK_IMPORTED_MODULE_13__.ThreeLayerComponent,
        _img_full_modal_img_full_modal_component__WEBPACK_IMPORTED_MODULE_15__.ImgFullModalComponent,
        _hero_bg_hero_bg_component__WEBPACK_IMPORTED_MODULE_14__.HeroBgComponent,
        _directives_shortcut_directive__WEBPACK_IMPORTED_MODULE_17__.ShortCutDirective,
        _directives_firework_btn_directive__WEBPACK_IMPORTED_MODULE_18__.FireworkDirective,
        _directives_img_preview_directive__WEBPACK_IMPORTED_MODULE_20__.ImgPreviewDirective,
        _directives_lazy_img_directive__WEBPACK_IMPORTED_MODULE_21__.LazyImgDirective,
        _directives_scroll_percent_directive__WEBPACK_IMPORTED_MODULE_22__.ScrollPercentDirective,
        _directives_visible_with_directive__WEBPACK_IMPORTED_MODULE_24__.VisibleWithDirective,
        _directives_focus_priority_directive__WEBPACK_IMPORTED_MODULE_19__.FocusPriorityDirective,
        _directives_scroll_property_directive__WEBPACK_IMPORTED_MODULE_23__.ScrollPropertyDirective], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_26__.BrowserModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_27__.FormsModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_28__.CommonModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_29__.BrowserAnimationsModule], exports: [_social_media_button_social_media_button_component__WEBPACK_IMPORTED_MODULE_1__.SocialMediaButtonComponent,
        _alert_alert_component__WEBPACK_IMPORTED_MODULE_0__.AlertComponent,
        _pulse_pic_pulse_pic_component__WEBPACK_IMPORTED_MODULE_2__.PulsePicComponent,
        _scroll_indicator_scroll_indicator_component__WEBPACK_IMPORTED_MODULE_3__.ScrollIndicatorComponent,
        _scroll_show_scroll_show_component__WEBPACK_IMPORTED_MODULE_4__.ScrollShowComponent,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__.AppRoutingModule,
        _parallex_panel_parallex_panel_component__WEBPACK_IMPORTED_MODULE_6__.ParallexPanelComponent,
        _parallex_layers_parallex_layers_component__WEBPACK_IMPORTED_MODULE_7__.ParallexLayersComponent,
        _knockout_text_knockout_text_component__WEBPACK_IMPORTED_MODULE_8__.KnockoutTextComponent,
        _text_over_pic_text_over_pic_component__WEBPACK_IMPORTED_MODULE_9__.TextOverPicComponent,
        _stroke_animate_stroke_animate_component__WEBPACK_IMPORTED_MODULE_10__.StrokeAnimateComponent,
        _video_text_video_text_component__WEBPACK_IMPORTED_MODULE_11__.VideoTextComponent,
        _hero_text_hero_text_component__WEBPACK_IMPORTED_MODULE_12__.HeroTextComponent,
        _three_layer_three_layer_component__WEBPACK_IMPORTED_MODULE_13__.ThreeLayerComponent,
        _hero_bg_hero_bg_component__WEBPACK_IMPORTED_MODULE_14__.HeroBgComponent,
        _img_full_modal_img_full_modal_component__WEBPACK_IMPORTED_MODULE_15__.ImgFullModalComponent,
        _directives_shortcut_directive__WEBPACK_IMPORTED_MODULE_17__.ShortCutDirective,
        _directives_firework_btn_directive__WEBPACK_IMPORTED_MODULE_18__.FireworkDirective,
        _directives_img_preview_directive__WEBPACK_IMPORTED_MODULE_20__.ImgPreviewDirective,
        _directives_lazy_img_directive__WEBPACK_IMPORTED_MODULE_21__.LazyImgDirective,
        _directives_scroll_percent_directive__WEBPACK_IMPORTED_MODULE_22__.ScrollPercentDirective,
        _directives_visible_with_directive__WEBPACK_IMPORTED_MODULE_24__.VisibleWithDirective,
        _directives_focus_priority_directive__WEBPACK_IMPORTED_MODULE_19__.FocusPriorityDirective,
        _directives_scroll_property_directive__WEBPACK_IMPORTED_MODULE_23__.ScrollPropertyDirective] }); })();


/***/ }),

/***/ 4969:
/*!*****************************************************************************!*\
  !*** ./src/app/shared/social-media-button/social-media-button.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SocialMediaButtonComponent": () => (/* binding */ SocialMediaButtonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


class SocialMediaButtonComponent {
    constructor() { }
    openUrl() {
        window.open(this.url, '_blank').focus();
    }
}
SocialMediaButtonComponent.ɵfac = function SocialMediaButtonComponent_Factory(t) { return new (t || SocialMediaButtonComponent)(); };
SocialMediaButtonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SocialMediaButtonComponent, selectors: [["social-media-button"]], inputs: { url: "url", icon: "icon" }, decls: 2, vars: 1, consts: [[3, "click"], [1, "menu", 3, "ngClass"]], template: function SocialMediaButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SocialMediaButtonComponent_Template_div_click_0_listener() { return ctx.openUrl(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "fa-brands fa-" + ctx.icon);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass], styles: ["div[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\na[_ngcontent-%COMP%] {\n  color: var(--menu-text-color);\n  padding: 15px;\n  font-size: 45px;\n}\n\na[_ngcontent-%COMP%]:hover {\n  color: var(--menu-text-color-hover);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvY2lhbC1tZWRpYS1idXR0b24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQ0FBQTtBQUNKIiwiZmlsZSI6InNvY2lhbC1tZWRpYS1idXR0b24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5hIHtcclxuICAgIGNvbG9yOiB2YXIoLS1tZW51LXRleHQtY29sb3IpO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGZvbnQtc2l6ZTogNDVweDtcclxufVxyXG5cclxuYTpob3ZlciB7XHJcbiAgICBjb2xvcjogdmFyKC0tbWVudS10ZXh0LWNvbG9yLWhvdmVyKTtcclxufSJdfQ== */"] });


/***/ }),

/***/ 4090:
/*!*******************************************************************!*\
  !*** ./src/app/shared/stroke-animate/stroke-animate.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StrokeAnimateComponent": () => (/* binding */ StrokeAnimateComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


const _c0 = ["path"];
const _c1 = ["container"];
class StrokeAnimateComponent {
    constructor() {
        this.timer = (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.timer)(100 * (this.speed || 1), 100 * (this.speed || 1));
        this.timer.subscribe(() => this.fillup());
    }
    ngAfterViewInit() {
        this.pathLength = this.path.nativeElement.getTotalLength();
        this.path.nativeElement.style.strokeDasharray = this.pathLength;
        this.path.nativeElement.style.strokeDashoffset = this.pathLength;
        this.maxPathLength = this.pathLength;
    }
    onScroll() {
        const rect = this.container.nativeElement.parentElement.getBoundingClientRect();
        const scrollPercentage = (rect.top) / ((window.innerHeight || document.documentElement.clientHeight));
        if (scrollPercentage < 0 || scrollPercentage > 1) {
            return;
        }
        const drawLength = this.pathLength * scrollPercentage;
        this.maxPathLength = drawLength;
    }
    fillup() {
        if (this.path) {
            if (this.path.nativeElement.style.strokeDashoffset > this.maxPathLength) {
                this.path.nativeElement.style.strokeDashoffset -= (this.strike || 10);
            }
        }
    }
}
StrokeAnimateComponent.ɵfac = function StrokeAnimateComponent_Factory(t) { return new (t || StrokeAnimateComponent)(); };
StrokeAnimateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: StrokeAnimateComponent, selectors: [["stroke-animate"]], viewQuery: function StrokeAnimateComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.path = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.container = _t.first);
    } }, hostBindings: function StrokeAnimateComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scroll", function StrokeAnimateComponent_scroll_HostBindingHandler($event) { return ctx.onScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    } }, inputs: { speed: "speed", strike: "strike" }, decls: 9, vars: 0, consts: [["id", "container", 1, "stroke-container"], ["container", ""], ["viewBox", "0 0 529 1482", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["id", "theMask", "maskUnits", "userSpaceOnUse"], ["id", "maskPath", "d", "M361.5 202C400.5 148.5 447.4 34.2 323 4.99998C198.6 -24.2 89.1667 124.167 50 202C52.1667 218.167 62.9 255.4 88.5 275C120.5 299.5 260.5 295 253 302.5C245.5 310 367 382 236 546.5C105 711 65 677.5 50 618C35 558.5 43.5 450.5 22.5 449C1.50001 447.5 -52.5 345.5 172 328.5C396.5 311.5 149 217 289.5 246C430 275 341.5 568 410 600C478.5 632 660.5 848.5 361.5 879C147.998 900.779 297.701 976.492 359.708 984.332C371.52 985.825 382.444 980.468 392.133 973.548L447.5 934C477.5 916.5 514.8 945.1 494 987.5C468 1040.5 428 1128 442 1146C456 1164 326 1310.5 289.5 1313.5C253 1316.5 282 1481.5 308 1481.5", "fill", "none", "stroke", "white", "stroke-linecap", "round", "stroke-miterlimit", "10", "stroke-width", "5", 2, "will-change", "strokeDashoffset"], ["path", ""], ["id", "maskReveal", "mask", "url(#theMask)"], ["d", "M361.5 202C400.5 148.5 447.4 34.2 323 4.99998C198.6 -24.2 89.1667 124.167 50 202C52.1667 218.167 62.9 255.4 88.5 275C120.5 299.5 260.5 295 253 302.5C245.5 310 367 382 236 546.5C105 711 65 677.5 50 618C35 558.5 43.5 450.5 22.5 449C1.50001 447.5 -52.5 345.5 172 328.5C396.5 311.5 149 217 289.5 246C430 275 341.5 568 410 600C478.5 632 660.5 848.5 361.5 879C147.998 900.779 297.701 976.492 359.708 984.332C371.52 985.825 382.444 980.468 392.133 973.548L447.5 934C477.5 916.5 514.8 945.1 494 987.5C468 1040.5 428 1128 442 1146C456 1164 326 1310.5 289.5 1313.5C253 1316.5 282 1481.5 308 1481.5", "stroke", "#F00303", "stroke-width", "5", "stroke-dasharray", "10 10", "stroke-linecap", "round", "stroke-miterlimit", "10"]], template: function StrokeAnimateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "svg", 2)(3, "defs")(4, "mask", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "path", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "g", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } }, styles: [".stroke-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n  height: 100%;\n  width: 100%;\n  text-align: center;\n}\n.stroke-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cm9rZS1hbmltYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUFKO0FBRUk7RUFDSSxxQkFBQTtFQUNBLFlBQUE7QUFBUiIsImZpbGUiOiJzdHJva2UtYW5pbWF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIC5zdHJva2UtY29udGFpbmVye1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICB0b3A6MDtcclxuICAgIGxlZnQ6MDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICYgc3Zne1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ 6932:
/*!*****************************************************************!*\
  !*** ./src/app/shared/text-over-pic/text-over-pic.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextOverPicComponent": () => (/* binding */ TextOverPicComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _directives_scroll_property_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../directives/scroll-property.directive */ 693);



function TextOverPicComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3)(1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMapInterpolate1"]("background-image: url('", ctx_r0.pictureUrl, "'); background-position-y: calc(18% - calc(var(--add) * 100))");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.title, " ");
} }
function TextOverPicComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMapInterpolate1"]("background-image: url('", ctx_r1.pictureUrl, "'); background-position-y: calc(3% - calc(var(--add) * 100));");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r1.textclass);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r1.title, " ");
} }
class TextOverPicComponent {
    constructor() {
        this.textclass = 'text-1';
        this.picAsBg = false;
    }
}
TextOverPicComponent.ɵfac = function TextOverPicComponent_Factory(t) { return new (t || TextOverPicComponent)(); };
TextOverPicComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TextOverPicComponent, selectors: [["text-over-pic"]], inputs: { title: "title", pictureUrl: "pictureUrl", textclass: "textclass", picAsBg: "picAsBg" }, decls: 3, vars: 2, consts: [["scrollProperty", "--add", "postFix", "px"], ["class", "height-vh solid-container", 4, "ngIf"], ["class", "height-vh image-container", 3, "style", 4, "ngIf"], [1, "height-vh", "solid-container"], [1, "text-crop"], [1, "height-vh", "image-container"]], template: function TextOverPicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TextOverPicComponent_div_1_Template, 3, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TextOverPicComponent_div_2_Template, 3, 6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.picAsBg);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.picAsBg);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _directives_scroll_property_directive__WEBPACK_IMPORTED_MODULE_0__.ScrollPropertyDirective], styles: [".image-container[_ngcontent-%COMP%], .solid-container[_ngcontent-%COMP%] {\n  -webkit-clip-path: inset(0);\n          clip-path: inset(0);\n  overflow: hidden;\n  position: relative;\n}\n\n.image-container[_ngcontent-%COMP%] {\n  background-position: center;\n  background-attachment: fixed;\n}\n\n.solid-container[_ngcontent-%COMP%] {\n  background: var(--theme-color);\n}\n\n.text-1[_ngcontent-%COMP%], .text-2[_ngcontent-%COMP%], .text-crop[_ngcontent-%COMP%] {\n  width: 70vW;\n  text-align: center;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  padding: 10px;\n  font-size: max(10vw, 70px);\n  font-weight: bold;\n  margin: 0 auto;\n  transform: translate(-50%, -50%);\n}\n\n@media (prefers-color-scheme: dark) {\n  .text-1[_ngcontent-%COMP%], .text-2[_ngcontent-%COMP%], .text-crop[_ngcontent-%COMP%] {\n    filter: drop-shadow(2px 4px 6px var(--theme-color-white));\n  }\n}\n\n.text-crop[_ngcontent-%COMP%] {\n  background-position: center;\n  text-fill-color: transparent;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  -webkit-background-clip: text;\n  color: var(--primary-color);\n}\n\n.text-crop[_ngcontent-%COMP%]::after {\n  content: none;\n}\n\n.text-1[_ngcontent-%COMP%] {\n  background-color: white;\n  color: black;\n  transform: translate(-50%, -50%);\n  mix-blend-mode: screen;\n  border-radius: 200px;\n}\n\n.text-2[_ngcontent-%COMP%] {\n  color: var(--theme-color-white);\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRleHQtb3Zlci1waWMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7O0VBRUUsMkJBQUE7VUFBQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFBRjs7QUFHQTtFQUVJLDJCQUFBO0VBQ0EsNEJBQUE7QUFESjs7QUFJRTtFQUNFLDhCQUFBO0FBREo7O0FBS0U7RUFFRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFDQSxnQ0FBQTtBQUpKOztBQU9FO0VBQ0U7SUFDRSx5REFBQTtFQUpKO0FBQ0Y7O0FBUUU7RUFDRSwyQkFBQTtFQUVBLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQkFBQTtFQUNBLDZCQUFBO0VBRUEsMkJBQUE7QUFSSjs7QUFVSTtFQUNFLGFBQUE7QUFSTjs7QUFhRTtFQUNFLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQVZKOztBQWFFO0VBQ0UsK0JBQUE7RUFDQSxpQkFBQTtBQVZKIiwiZmlsZSI6InRleHQtb3Zlci1waWMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmltYWdlLWNvbnRhaW5lcixcclxuLnNvbGlkLWNvbnRhaW5lcntcclxuICBjbGlwLXBhdGg6IGluc2V0KDApO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uaW1hZ2UtY29udGFpbmVyIHtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7ICAgIFxyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICB9XHJcblxyXG4gIC5zb2xpZC1jb250YWluZXJ7ICAgIFxyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtY29sb3IpO1xyXG4gIH1cclxuXHJcblxyXG4gIC50ZXh0LTEsLnRleHQtMiwgLnRleHQtY3JvcHtcclxuXHJcbiAgICB3aWR0aDogNzB2VztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogbWF4KDEwdncsIDcwcHgpO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcblxyXG4gICAgbWFyZ2luOiAwIGF1dG87ICAgXHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsgICAgXHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XHJcbiAgICAudGV4dC0xLC50ZXh0LTIsIC50ZXh0LWNyb3B7XHJcbiAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMnB4IDRweCA2cHggdmFyKC0tdGhlbWUtY29sb3Itd2hpdGUpKTtcclxuICAgIH1cclxuICB9XHJcbiAgICBcclxuXHJcbiAgLnRleHQtY3JvcHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuXHJcbiAgICB0ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICBcclxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuXHJcbiAgICAmOjphZnRlcntcclxuICAgICAgY29udGVudDogbm9uZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIFxyXG4gIC50ZXh0LTEge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIG1peC1ibGVuZC1tb2RlOiBzY3JlZW47XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMDBweDtcclxuICB9XHJcblxyXG4gIC50ZXh0LTJ7XHJcbiAgICBjb2xvcjogdmFyKC0tdGhlbWUtY29sb3Itd2hpdGUpO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4iXX0= */"] });


/***/ }),

/***/ 8673:
/*!*************************************************************!*\
  !*** ./src/app/shared/three-layer/three-layer.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThreeLayerComponent": () => (/* binding */ ThreeLayerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class ThreeLayerComponent {
    constructor() { }
    ngOnInit() {
    }
}
ThreeLayerComponent.ɵfac = function ThreeLayerComponent_Factory(t) { return new (t || ThreeLayerComponent)(); };
ThreeLayerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ThreeLayerComponent, selectors: [["three-layer"]], decls: 47, vars: 0, consts: [[1, "parallax"], ["id", "group1", 1, "parallax__group"], [1, "parallax__layer", "parallax__layer--base"], [1, "title"], ["id", "group2", 1, "parallax__group"], [1, "parallax__layer", "parallax__layer--back"], ["id", "group3", 1, "parallax__group"], [1, "parallax__layer", "parallax__layer--fore"], ["id", "group4", 1, "parallax__group"], [1, "parallax__layer", "parallax__layer--deep"], ["id", "group5", 1, "parallax__group"], ["id", "group6", 1, "parallax__group"], ["id", "group7", 1, "parallax__group"]], template: function ThreeLayerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Base Layer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4)(6, "div", 2)(7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Base Layer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5)(10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Background Layer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6)(13, "div", 7)(14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Foreground Layer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2)(17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Base Layer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8)(20, "div", 2)(21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Base Layer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 5)(24, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Background Layer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9)(27, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Deep Background Layer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 10)(30, "div", 7)(31, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Foreground Layer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 2)(34, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Base Layer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 11)(37, "div", 5)(38, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Background Layer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 2)(41, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Base Layer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 12)(44, "div", 2)(45, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Base Layer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } }, styles: [".forefront-element[_ngcontent-%COMP%] {\n  transform: translateZ(999px) scale(0.7);\n  z-index: 1;\n}\n\n.base-element[_ngcontent-%COMP%] {\n  transform: translateZ(0);\n  z-index: 4;\n}\n\n.background-element[_ngcontent-%COMP%] {\n  transform: translateZ(-999px) scale(2);\n  z-index: 3;\n}\n\n\n\n.parallax[_ngcontent-%COMP%] {\n  height: 500px;\n  \n  height: 100vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n  perspective: 300px;\n}\n\n.parallax__group[_ngcontent-%COMP%] {\n  position: relative;\n  height: 500px;\n  \n  height: 100vh;\n  transform-style: preserve-3d;\n}\n\n.parallax__layer[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\n.parallax__layer--fore[_ngcontent-%COMP%] {\n  transform: translateZ(90px) scale(0.7);\n  z-index: 1;\n}\n\n.parallax__layer--base[_ngcontent-%COMP%] {\n  transform: translateZ(0);\n  z-index: 4;\n}\n\n.parallax__layer--back[_ngcontent-%COMP%] {\n  transform: translateZ(-300px) scale(2);\n  z-index: 3;\n}\n\n.parallax__layer--deep[_ngcontent-%COMP%] {\n  transform: translateZ(-600px) scale(3);\n  z-index: 2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRocmVlLWxheWVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksdUNBQUE7RUFDQSxVQUFBO0FBQ0o7O0FBRUU7RUFFRSx3QkFBQTtFQUNBLFVBQUE7QUFDSjs7QUFFRTtFQUVFLHNDQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUVFOytDQUFBOztBQUdBO0VBQ0UsYUFBQTtFQUFlLGdDQUFBO0VBQ2YsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxrQkFBQTtBQUNKOztBQUVFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQWUsZ0NBQUE7RUFDZixhQUFBO0VBRUEsNEJBQUE7QUFFSjs7QUFDRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQUVKOztBQUNFO0VBRUUsc0NBQUE7RUFDQSxVQUFBO0FBRUo7O0FBQ0U7RUFFRSx3QkFBQTtFQUNBLFVBQUE7QUFFSjs7QUFDRTtFQUVFLHNDQUFBO0VBQ0EsVUFBQTtBQUVKOztBQUNFO0VBRUUsc0NBQUE7RUFDQSxVQUFBO0FBRUoiLCJmaWxlIjoidGhyZWUtbGF5ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9yZWZyb250LWVsZW1lbnQge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooOTk5cHgpIHNjYWxlKC43KTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWig5OTlweCkgc2NhbGUoLjcpO1xyXG4gICAgei1pbmRleDogMTtcclxuICB9XHJcblxyXG4gIC5iYXNlLWVsZW1lbnQge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgICB6LWluZGV4OiA0O1xyXG4gIH1cclxuXHJcbiAgLmJhY2tncm91bmQtZWxlbWVudCB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigtOTk5cHgpIHNjYWxlKDIpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC05OTlweCkgc2NhbGUoMik7XHJcbiAgICB6LWluZGV4OiAzO1xyXG4gIH1cclxuXHJcbiAgLyogUGFyYWxsYXggYmFzZSBzdHlsZXNcclxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbiAgLnBhcmFsbGF4IHtcclxuICAgIGhlaWdodDogNTAwcHg7IC8qIGZhbGxiYWNrIGZvciBvbGRlciBicm93c2VycyAqL1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAtd2Via2l0LXBlcnNwZWN0aXZlOiAzMDBweDtcclxuICAgIHBlcnNwZWN0aXZlOiAzMDBweDtcclxuICB9XHJcblxyXG4gIC5wYXJhbGxheF9fZ3JvdXAge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiA1MDBweDsgLyogZmFsbGJhY2sgZm9yIG9sZGVyIGJyb3dzZXJzICovXHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICB9XHJcblxyXG4gIC5wYXJhbGxheF9fbGF5ZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gIH1cclxuXHJcbiAgLnBhcmFsbGF4X19sYXllci0tZm9yZSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWig5MHB4KSBzY2FsZSguNyk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooOTBweCkgc2NhbGUoLjcpO1xyXG4gICAgei1pbmRleDogMTtcclxuICB9XHJcblxyXG4gIC5wYXJhbGxheF9fbGF5ZXItLWJhc2Uge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgICB6LWluZGV4OiA0O1xyXG4gIH1cclxuXHJcbiAgLnBhcmFsbGF4X19sYXllci0tYmFjayB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigtMzAwcHgpIHNjYWxlKDIpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0zMDBweCkgc2NhbGUoMik7XHJcbiAgICB6LWluZGV4OiAzO1xyXG4gIH1cclxuXHJcbiAgLnBhcmFsbGF4X19sYXllci0tZGVlcCB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigtNjAwcHgpIHNjYWxlKDMpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC02MDBweCkgc2NhbGUoMyk7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gIH1cclxuIl19 */"] });


/***/ }),

/***/ 6039:
/*!***********************************************************!*\
  !*** ./src/app/shared/video-text/video-text.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VideoTextComponent": () => (/* binding */ VideoTextComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class VideoTextComponent {
    constructor() { }
    ngOnInit() {
    }
}
VideoTextComponent.ɵfac = function VideoTextComponent_Factory(t) { return new (t || VideoTextComponent)(); };
VideoTextComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VideoTextComponent, selectors: [["video-text"]], inputs: { text: "text", videoSrc: "videoSrc" }, decls: 8, vars: 4, consts: [[1, "wrapper"], ["muted", "", "loop", "", "autoplay", "", 1, "clipped-video"], [3, "src"], ["height", "100%", "width", "100%"], ["id", "text-overlay", "width", "100%", "height", "100%"], ["id", "title", "x", "0", "y", "0", "dy", "1.58em"]], template: function VideoTextComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "video", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "source", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 3)(4, "clipPath", 4)(5, "text", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.videoSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.text);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", "", "\n", "", "");
    } }, styles: ["video[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n}\n\n.clipped-video[_ngcontent-%COMP%] {\n  -webkit-clip-path: url(#text-overlay);\n  clip-path: url(#text-overlay);\n}\n\nsvg[_ngcontent-%COMP%] {\n  display: block;\n  top: 0;\n}\n\ntext[_ngcontent-%COMP%] {\n  font-family: sans-serif;\n  font-weight: bold;\n  font-size: 18vw;\n}\n\n.wrapper[_ngcontent-%COMP%] {\n  -webkit-clip-path: inset(0);\n          clip-path: inset(0);\n  height: 100vH;\n  background-color: white;\n  flex: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZGVvLXRleHQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUFKOztBQUVFO0VBQ0UscUNBQUE7RUFDQSw2QkFBQTtBQUNKOztBQUNFO0VBQ0UsY0FBQTtFQUNBLE1BQUE7QUFFSjs7QUFBRTtFQUNFLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBR0o7O0FBREU7RUFDRSwyQkFBQTtVQUFBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsT0FBQTtBQUlKIiwiZmlsZSI6InZpZGVvLXRleHQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxudmlkZW8ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG4gIC5jbGlwcGVkLXZpZGVvIHtcclxuICAgIC13ZWJraXQtY2xpcC1wYXRoOiB1cmwoI3RleHQtb3ZlcmxheSk7XHJcbiAgICBjbGlwLXBhdGg6IHVybCgjdGV4dC1vdmVybGF5KTtcclxuICB9XHJcbiAgc3ZnIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdG9wOiAwO1xyXG4gIH1cclxuICB0ZXh0IHtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE4dnc7XHJcbiAgfVxyXG4gIC53cmFwcGVye1xyXG4gICAgY2xpcC1wYXRoOiBpbnNldCgwKTtcclxuICAgIGhlaWdodDogMTAwdkg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGZsZXg6MTtcclxuICB9Il19 */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map