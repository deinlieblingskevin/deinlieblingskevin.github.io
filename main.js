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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _core_frame_app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/frame/app.component */ 174);
/* harmony import */ var _core_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/menu/menu.component */ 6070);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/shared.module */ 4466);
/* harmony import */ var _core_menu_button_menu_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/menu-button/menu-button.component */ 7209);
/* harmony import */ var _pages_pages_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/pages.module */ 8950);
/* harmony import */ var _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/footer/footer.component */ 1229);
/* harmony import */ var _core_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/dialog/dialog.service */ 4789);
/* harmony import */ var _core_dialog_modal_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/dialog/modal.module */ 8203);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);














class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_core_frame_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ providers: [_core_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_7__.DialogService], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__.BrowserAnimationsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
        _pages_pages_module__WEBPACK_IMPORTED_MODULE_5__.PagesModule,
        _core_dialog_modal_module__WEBPACK_IMPORTED_MODULE_8__.ModalModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_core_frame_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _core_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__.MenuComponent,
        _core_menu_button_menu_button_component__WEBPACK_IMPORTED_MODULE_4__.MenuButtonComponent,
        _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__.FooterComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__.BrowserAnimationsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
        _pages_pages_module__WEBPACK_IMPORTED_MODULE_5__.PagesModule,
        _core_dialog_modal_module__WEBPACK_IMPORTED_MODULE_8__.ModalModule] }); })();


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
function TableModalComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r4, " ");
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
TableModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TableModalComponent, selectors: [["table-modal"]], decls: 9, vars: 2, consts: [[1, "modal-header"], [1, "modal-title"], ["type", "button", "class", "close", "aria-label", "Close", 3, "click", 4, "ngIf"], [1, "modal-body"], [4, "ngFor", "ngForOf"], [1, "modal-footer"], ["type", "button", 3, "click"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"]], template: function TableModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Liste");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TableModalComponent_button_3_Template, 3, 0, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, TableModalComponent_div_5_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5)(7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TableModalComponent_Template_button_click_7_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Schlie\u00DFen");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.closeButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.list);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJsZS1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 1229:
/*!*************************************************!*\
  !*** ./src/app/core/footer/footer.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 0, vars: 0, template: function FooterComponent_Template(rf, ctx) { }, styles: [".footer_section[_ngcontent-%COMP%] {\n  width: 100%;\n  float: left;\n  background-color: #252525;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FBQUoiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5mb290ZXJfc2VjdGlvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI1MjUyNTtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG4iXX0= */"] });


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../menu/menu.component */ 6070);
/* harmony import */ var _menu_button_menu_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../menu-button/menu-button.component */ 7209);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../footer/footer.component */ 1229);






class AppComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        this.router.events.subscribe((ev) => {
            if (ev instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd) {
                window.scrollTo(0, 0);
            }
        });
    }
    showMenuChanged(event) {
        this.showMenu = event;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 7, vars: 2, consts: [[3, "showMenu", "showMenuChanged"], [1, "body-background"], [1, "hex-background"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-menu", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("showMenuChanged", function AppComponent_Template_app_menu_showMenuChanged_0_listener($event) { return ctx.showMenuChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "app-menu-button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("showMenuChanged", function AppComponent_Template_app_menu_button_showMenuChanged_1_listener($event) { return ctx.showMenuChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("showMenu", ctx.showMenu);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("showMenu", ctx.showMenu);
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _menu_menu_component__WEBPACK_IMPORTED_MODULE_0__.MenuComponent, _menu_button_menu_button_component__WEBPACK_IMPORTED_MODULE_1__.MenuButtonComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent], styles: [".row[class][_ngcontent-%COMP%] {\n  margin-left: 30px;\n  margin-right: 30px;\n}\n\n.row.row-slim[_ngcontent-%COMP%] {\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n}\n\n.col-slim[_ngcontent-%COMP%] {\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.container-fluid[_ngcontent-%COMP%] {\n  padding-top: 30px;\n}\n\n.body-background[_ngcontent-%COMP%] {\n  z-index: -2;\n  position: fixed;\n  height: 120%;\n  width: 100%;\n  top: 0;\n  background: var(--killer-bg-gradient);\n  background-position: -17px;\n  background-size: 120%;\n}\n\n.hex-background[_ngcontent-%COMP%] {\n  z-index: -1;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  background-image: var(--killer-bg-hex);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0EsMEJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7QUFDRjs7QUFFQztFQUVFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0VBQ0EscUNBQUE7RUFDQSwwQkFBQTtFQUNBLHFCQUFBO0FBQUg7O0FBR0M7RUFFQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSxzQ0FBQTtBQURGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3dbY2xhc3NdIHtcclxuICBtYXJnaW4tbGVmdDogMzBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi5yb3cucm93LXNsaW0ge1xyXG4gIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jb2wtc2xpbSB7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5jb250YWluZXItZmx1aWQge1xyXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xyXG59XHJcblxyXG4gLmJvZHktYmFja2dyb3VuZFxyXG4ge1xyXG4gICB6LWluZGV4Oi0yO1xyXG4gICBwb3NpdGlvbjpmaXhlZDtcclxuICAgaGVpZ2h0OiAxMjAlO1xyXG4gICB3aWR0aDoxMDAlO1xyXG4gICB0b3A6MDtcclxuICAgYmFja2dyb3VuZDogdmFyKC0ta2lsbGVyLWJnLWdyYWRpZW50KTtcclxuICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE3cHg7IC8vIFRPRE8gYW5pbWF0aW9uXHJcbiAgIGJhY2tncm91bmQtc2l6ZTogMTIwJTtcclxuIH1cclxuXHJcbiAuaGV4LWJhY2tncm91bmRcclxuIHsgICBcclxuICB6LWluZGV4Oi0xO1xyXG4gIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDoxMDAlO1xyXG4gIHRvcDowO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHZhcigtLWtpbGxlci1iZy1oZXgpO1xyXG4gfSJdfQ== */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class ComicComponent {
    constructor() { }
    ngOnInit() {
    }
}
ComicComponent.ɵfac = function ComicComponent_Factory(t) { return new (t || ComicComponent)(); };
ComicComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ComicComponent, selectors: [["app-comic"]], decls: 19, vars: 0, consts: [[1, "comic-struct", 2, "max-width", "1200px"], [1, "row"], [1, "comic-strip", "col-1"], [1, "comic-strip", "rot", "col-2"], [1, "comic-strip", "rot", "col-1"], [1, "comic-strip", "rot", "col-3"], [1, "row-2"], [2, "height", "100vH", "width", "100%", "max-width", "1200px"]], template: function ComicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "sdfsf");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "sdfsdfsf");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1)(7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "sdfsf");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "sdfsdfsf");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6)(12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "sdfsf");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "sdfsdfsf");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " ich bins\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".comic-struct[_ngcontent-%COMP%] {\n  position: -webkit-sticky;\n  position: sticky;\n  display: flex;\n  height: 100vh;\n  flex-direction: column;\n  width: 100%;\n  border: 5px solid wheat;\n  top: 0;\n}\n\n.comic-strip[_ngcontent-%COMP%] {\n  border: 5px solid wheat;\n}\n\n.col-1[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.col-2[_ngcontent-%COMP%] {\n  flex: 2;\n}\n\n.col-3[_ngcontent-%COMP%] {\n  flex: 3;\n}\n\n.col-4[_ngcontent-%COMP%] {\n  flex: 4;\n}\n\n.col-5[_ngcontent-%COMP%] {\n  flex: 5;\n}\n\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n}\n\n.row-2[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 2;\n}\n\n.rot[_ngcontent-%COMP%] {\n  background-color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbWljLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksd0JBQUE7RUFBQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxNQUFBO0FBRko7O0FBT0U7RUFDRSx1QkFBQTtBQUpKOztBQU9FO0VBQ0UsT0FBQTtBQUpKOztBQU9FO0VBQ0UsT0FBQTtBQUpKOztBQU9FO0VBQ0UsT0FBQTtBQUpKOztBQU9FO0VBQ0UsT0FBQTtBQUpKOztBQU9FO0VBQ0UsT0FBQTtBQUpKOztBQU9FO0VBQ0UsYUFBQTtFQUNBLE9BQUE7QUFKSjs7QUFPRTtFQUNFLGFBQUE7RUFDQSxPQUFBO0FBSko7O0FBTUU7RUFDRSxxQkFBQTtBQUhKIiwiZmlsZSI6ImNvbWljLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3R7XHJcbiAgICBcclxufVxyXG4uY29taWMtc3RydWN0IHtcclxuICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHdoZWF0O1xyXG4gICAgdG9wOjA7XHJcbiAgfVxyXG4gIFxyXG5cclxuICBcclxuICAuY29taWMtc3RyaXAge1xyXG4gICAgYm9yZGVyOiA1cHggc29saWQgd2hlYXQ7XHJcbiAgfVxyXG5cclxuICAuY29sLTEge1xyXG4gICAgZmxleDogMTtcclxuICB9XHJcbiAgXHJcbiAgLmNvbC0yIHtcclxuICAgIGZsZXg6IDI7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb2wtMyB7XHJcbiAgICBmbGV4OiAzO1xyXG4gIH1cclxuICBcclxuICAuY29sLTQge1xyXG4gICAgZmxleDogNDtcclxuICB9XHJcbiAgXHJcbiAgLmNvbC01IHtcclxuICAgIGZsZXg6IDU7XHJcbiAgfVxyXG4gIFxyXG4gIC5yb3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXg6IDE7XHJcbiAgfVxyXG4gIFxyXG4gIC5yb3ctMiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleDogMjtcclxuICB9XHJcbiAgLnJvdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgfVxyXG4gICJdfQ== */"] });


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
/* harmony import */ var _notMineGames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notMineGames */ 6314);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_pulse_pic_pulse_pic_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/pulse-pic/pulse-pic.component */ 4408);
/* harmony import */ var _shared_directives_shortcut_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/directives/shortcut.directive */ 851);










function FavoriteItemsComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "pulse-pic", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", item_r2.src)("title", item_r2.tagLine)("zoom", false);
} }
function FavoriteItemsComponent_ng_container_8_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "pulse-pic", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", item_r5.src)("title", item_r5.tagLine)("zoom", false);
} }
function FavoriteItemsComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Hab ich nicht, hat mir aber gefallen:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, FavoriteItemsComponent_ng_container_8_ng_container_5_Template, 2, 3, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r1.notMineGames);
} }
class FavoriteItemsComponent {
    constructor(_modal) {
        this._modal = _modal;
        this.showNotMine = true;
        this.favItems = _favoriteGames__WEBPACK_IMPORTED_MODULE_2__.favoriteGames;
        this.notMineGames = _notMineGames__WEBPACK_IMPORTED_MODULE_4__.coolGamesButNotMine;
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
FavoriteItemsComponent.ɵfac = function FavoriteItemsComponent_Factory(t) { return new (t || FavoriteItemsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_dialog_modal_modal__WEBPACK_IMPORTED_MODULE_0__.Modal)); };
FavoriteItemsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: FavoriteItemsComponent, selectors: [["favorite-items"]], hostBindings: function FavoriteItemsComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("resize", function FavoriteItemsComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresolveWindow"]);
    } }, inputs: { showNotMine: "showNotMine" }, decls: 9, vars: 2, consts: [[1, "items-container"], [4, "ngFor", "ngForOf"], [1, "line-container"], [1, "text-center"], ["clickShortCutKey", "KeyL", 1, "primary", 3, "click"], [4, "ngIf"], ["size", "md-dyn", 3, "src", "title", "zoom"]], template: function FavoriteItemsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Boardgames!");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, FavoriteItemsComponent_ng_container_3_Template, 2, 3, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 2)(5, "div", 3)(6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function FavoriteItemsComponent_Template_button_click_6_listener() { return ctx.openListModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Hier als Liste");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, FavoriteItemsComponent_ng_container_8_Template, 6, 1, "ng-container", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.filterItems());
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.showNotMine);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _shared_pulse_pic_pulse_pic_component__WEBPACK_IMPORTED_MODULE_5__.PulsePicComponent, _shared_directives_shortcut_directive__WEBPACK_IMPORTED_MODULE_6__.ShortCutDirective], styles: ["*[_ngcontent-%COMP%] {\n  flex: auto;\n}\n\n.items-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  overflow: hidden;\n  padding-top: 40px;\n}\n\n.items-container[_ngcontent-%COMP%]   pulse-pic[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n\n.break[_ngcontent-%COMP%] {\n  flex-basis: 100% !important;\n  height: 0;\n  margin-top: 30px;\n}\n\n.filter[_ngcontent-%COMP%] {\n  margin: 5px;\n  flex-wrap: wrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhdm9yaXRlLWl0ZW1zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtBQUNGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBQUY7O0FBRUU7RUFDRSxtQkFBQTtBQUFKOztBQUlBO0VBQ0UsMkJBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FBREYiLCJmaWxlIjoiZmF2b3JpdGUtaXRlbXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICBmbGV4OiBhdXRvO1xyXG59XHJcblxyXG5cclxuLml0ZW1zLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwYWRkaW5nLXRvcDogNDBweDtcclxuXHJcbiAgJiBwdWxzZS1waWMge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICB9XHJcbn1cclxuXHJcbi5icmVhayB7XHJcbiAgZmxleC1iYXNpczogMTAwJSAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMDtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcblxyXG4uZmlsdGVyIHtcclxuICBtYXJnaW46IDVweDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn0iXX0= */"] });


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
        src: 'https://cdn.idealo.com/folder/Product/6637/6/6637664/s1_produktbild_gross/rio-grande-games-dominion-einsteiger-bigbox.jpg',
        tagLine: 'Dominion (Alchemist, Gilden, Reiche Ernte)',
        category: _game_interface__WEBPACK_IMPORTED_MODULE_0__.CategoryEnum.Strategie,
        maxPlayer: 4
    },
    {
        src: 'https://bilder.buecher.de/produkte/43/43890/43890728n.jpg',
        tagLine: '7 Wonders Duel ',
        category: _game_interface__WEBPACK_IMPORTED_MODULE_0__.CategoryEnum.Strategie,
        maxPlayer: 2
    },
    {
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTycm8O3g7jXlHQ8dhlRm__PaklQvzR05k13ksAaRjZKjvPDNiT0POvSMnoBefMpxoKHdE&usqp=CAU',
        tagLine: '7 Wonders ',
        category: _game_interface__WEBPACK_IMPORTED_MODULE_0__.CategoryEnum.Strategie,
        maxPlayer: 7
    },
    {
        src: 'data:image/jpeg;base64,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',
        tagLine: '7 Wonders Erweiterung Leaders',
        category: _game_interface__WEBPACK_IMPORTED_MODULE_0__.CategoryEnum.Strategie,
        maxPlayer: 7
    },
    {
        src: 'data:image/webp;base64,UklGRuYPAABXRUJQVlA4INoPAAAwRwCdASqYAJgAPlEkjkWjoiES6448OAUEsQBoZIq9syUHx/no27/I/i7nDjVdeX6L+p/lL89v8h6zvMF/Vjpofzr/Gf5L2C/rb/vf9L7tf+x/Zn3P/sL7AH8s/qvq9/872LvQM/a70yP3B+Dj+8f7X9svgQ/ZH/4ewBvpG8PIn7omD+B/9d6FfTj8/65/6Twx+PmoF7M/0u/lgA/PP6v/yvSJ+D/53od9a/+F7gH6rf6n8zvif/a+Hp5L7AX87/rn+z/t35h/J5/3f6b0E/UvsGfzj+y/9j14PZb+5Hsi/sicUIXkc8NfyYmxulgutPjqkgDWVIa6HGSM6rmkVOFXsNJDKrgiZ7mQHy6N/aj/CRxtBNFlJPyhYfEdsZMqZaMLee0l48xYkrgBUo8CvwOm98COfYB+rP68He+S8rA5SAdNEWT2y/GzfH/Oank1EnNj8LlxraA0GD1IVflBamTL4jm0WWIOIUoI5UJBwOcBjT5Lye6Z03pB+nBy3qdGBDDkLIuJlxr6gFLbwE2FnG6Ndq4axlerUAOmf1z3wOZeo2xRhVgfLic7F0ckUti/P3OyvE1HnUmNmBNt1A522z8MSQ3crw9SWHv5/7671UgF50pRHx7hofgD7J4IfFuu3f8HqNPwqRMHtyL43eql5lDLrWkfmrL7sOcD5HZ1Iop+Oleiip+Ob3vybf5a/AIpwXDqtqp/8tzcfs4ysudULyj0rwuHD9GOg4B4TnkKBArILHTEdOI8L5NlVZ1eKL9e8nQQAAD+/cDDx+30387z5/duSUvsHkzWLYf7pTKY7PMxJW1NbcCFXsJDDL0X2NWhqffi/7HY7H59io6eb1FDonfYjfIQeaF6FtWXta0Ubos7P2ZqW/1RYc2kv42ulxu0HgCyZdIHcqx18hAf+xpErjynoVMyKyO2RGcrrJvwxOIkl9P6wgsjitU9aP6sCHtVsexNuLmuCu8eAX8JWsINdgF7TStBTzMrgbu/tr61OJqEX2BaFOzf/fnq3A/Lc9W+QcBgGvPICqMwjTabvkBoY2B/ZgW0ZeeBb6BQTFO0U2mxwRElEyU8BJRQCkk0uR6V7vhw2Nybhx21MP3idyi8gLJlg8G9+7PV76QEsf3hfqfswSgU6pZ/vzIebELUHEEIkoUEAYc/TVBbHEXpBfZJ/KWfvl+SWKHiVzyiChr/Xe0PX16EbTJxHHkM8xO77EtRavVFW/42hXRce2cAp1L7UOUFSbXr4R1EawkDHoC02VRv+p/fhNExIkFmRDKw870i9mdP/JypB6fHQdQzE0frhC8pY3Yx0ytUOJDlcv/3v2r/jvadEyIQKaw5PqtBHcevX2DO6DG077/Q8XB/5FZ/yXvQzwM+hBrFbOz1n/+Yf81N66jrGF7lt5VmXg/bz44RTolujUKEeaGB7i8A8hL6IatyqoPrFRLCpwQC9w8EHqoqZ2BvcuEf/QvwZ+L83LNwlSw4f6kCUgA0+JfQBLe3JaxlKPNLEvLYeiFUiwPteFaJIL2VNr8lX5phZ4avUiHZ8Nyn0Qg/ow2UpghUQGuHh7Psf/DIzDvfhXp3BfitjK2Kefw0cXrY5f+jHGIIiL9dPld/X3xxdXHqPH/U3YuynjtQF3UFm7JHePecGyA9Uijkn0T+aX5uf9lfl2eWDHKUz9p0Zj4PbN+UKRBvSjJIQ5I679P4SPb8/9VLu7jOIs4/pPhedIowXOA8hZvbtMGTgW4ZUIVksnd3xNC2hJfI4Kslg2fmA/eJWz/HhyLdtB8YieumIEEi2aA4ChhS9K2pIsZNVn/9JuXkZOP1BwVHAqoOf+e+YZFdK7DdStarmOJP1Hu4wvMxE0Io4vl6tjTsfKuAE1hp67HyZwBmKSCA6siLy+7LTueu60Gn4DnvyX4yUDdF//DPI7WteE9vniOXx+ucCcvKp5gaeVnCLs3gTQPgzRV62tloD4Al/I6/zLc/tj7TvocfDnxRuX2rv8HIq5QCHeePs03mmoTfmO481dQD2OQxO1gRDkGQN1emqDvYY4ien/YdxZv9A9ACBs95sQW3D+jnfLrR6HoQmL4ZUJuHRKsYrRQXldWSkLEkuUJ04enZ/bKsN81QUNyRRV7tqQSoWBPuzINdSm1zNj2+CLSdo2GU3k/ido2BkkamMfjLm9CCvtPizzA8sU7DrR3SE4LY4lJ/YM8jtUMs/S8Qi6rN4MQHLw1jrJj3gf8ycmpDuuHz/6SNDxQgHfmMLd4mX8oZ07doOsTLq5BhmsZsFax1EAszscbXOKo4gM4RSrgAD4kk4gYnR/ZLiZAuJnIsWk8TqfkJFmcS23I8o8aJA1viHw8eVFceGIw278j4k2gvueTWyte7PTb/twWxMiEztfOQWqKzTHXj4MNk1MGtkvExoJ2akrlSbINROS60Nb9RZ1biQyCApXBN3RSuGVEWa/PrFp27NPRGFPR25x3D3tkd1tU/YUl77X7ypPV1FQDjF2JxuBUXJm5DRmIzI7xlZRmYl5ONgyoTELmtg7taxzL2cmevnCD/zOwMAU6afYaRMAYJwXF8uMdi3m7Oa4xArp6AjOq2fdOYis+krIVQd5VjfCSwEbV+dc8auA6FRKgVkAl6QVZ+hB+qw0cLEObYSoQaPg0cf5hJwdOwHtTyVtXVk2bvPbhr1fhIwp8Au5fVMiIdjZUQCmVTiOHtguzfzjMd/3g42oRfmhL1B8YPHOBlXPLbqrTXR1LVCjGW8lxWK5SfBtdTycM20wLL7JgRBtU0zOjbBUpHx0l5DuRp7bM0J6xZPuxmrfWba7Uz41wTCi0994QKQ22bquv4x82ijz+Fu5MoWK8mL2Dvy68S92YzM00GN7R/j/eDxN4k5gdZ0Qzw29hKe0gj57ThfabLUYVKWdSIS9f7WFYKpBLsEjZuwbViZCCJYiYz5Mauf/5DzfAQodDyprf+XD3BzRTcr5RFmotCcT6Ry9DBXzfXMSK04TsrpZ9dozAkDv7hoGr1n887pMhxA5S19u6zt53qvCv/B+5g+El1AaeuhWlbo+ypED28RXBWJ5UzPXonqru/COVaLYz2yyt7o6ESfvYIkZtxD1VXlrvPpwDevPDtLgaNE9kxzw4Gg/uFJ5YiGIZyW18aEi5wzcgrTKIdKh5H/ihp9ePeYBFZt6Np/7Jqerwj9ieTYPrKHOm0bnrpLk+YJvIC9SQpn7z4N6g4QG+xN6FHZ03XzTe7YWoEzx+oGb4kGAUv8fdTzzI8jOb+DGMm2U13T58KgjnIErykgTXsW7vqdTunhi+boSuMgGf5w/asdTPieiczv6/WaYn2GPoTB0PTK+jTYcrhMM9J6+++Ju04Iiihz/qLhquELp4xmtk1bzdarHsaXXbrZrfRTHEiTEPSTYeiaLw0mvgdjw6QTwM+AH5Rn9Jymjr8rd8lNug+/mq/pu8IzHXL8BJxAxfMeDhUIzYsGwI+TKg5Bzc9XtQCaIWeMSQRPhRhafI8B+iUQBI+N5OUU+ywzfbEXJjFmAtdnzh/wah6QwXSfCwld6g9aalwbhTMS7nOtDVr/6RYYjUluas73SVLAvNAHlBFWtFCOTD/ux0U64a7sXo+Di9sSU9lLsh3LfVNW/hEfFxA6r9UHVGQ3Np4j7Prs5h5GSjp3s2xfEPIoz1vpqv8/zvcum+Uhvzloy+UAdcW7NRW6XTr8xCHDyFhunabN1ved8ArUYhrBSIurgbUtxMjaxHFFgfWeGNB3Fct9TAB2CswUfiTQtCVv+qJIrKyviEuUmaVEMHmXyENzFhm7kaAgMnfenta4f5J5+fiaEWJfs0mpA0Qf2tmCK9eTf2EzQebP9bkok7WlfDm436rMP8MEEchmJ1Kcgu3La3t1MWVMxZ0eXPVIbjJyq1Syaa9vthygdXgaBvmqR47D/CX2f2BNv++Udo5mlH618mm12El9Hkx97ZxjVnnKfGXDtzMH7PRvkVhNeFfB26tRP39GMVA1SQZERE8xWyejFMofa0Utyqws/Y15ecxX/1DI/YUkHvMjcd1Ya3ScpRVQCCHVm7iMt5nIN4t8jKaMtEWM3N+W+pWNc9oB5XnFZp/2bDPg0n7UcUHxT1qIwGSsnOnrPDH2NhD6fe5BtvSUTDW/DKGdHNQYRy1YB7mkj+Kn0jOG/2MSPMnrK3l+ZxjBcu816aInqbPza1qCn6fIKSWvtJBuRWAYjh/6yh6wze+Nc2Pq3FC8wP6b8z4DvZ7PL0IdYui3zM8xeg7GsBHyX6/6fTsazRntA7JRQqLFqlJqZO0Md9G/W6aMLpyom70AAdeiA4owiaFEghySo6gNssWFMmCL8XDO3sUHM7DJsd6BygGv74Z354FHlfEzsbD/ApS+5cHWfI+PO8Q/52xOhxJYmsWFtd2UZfeFk9rIK9Kehdl/piW7akOrD8/1RSdEwt1+kvFXZdTsiijKR/L+SqNLdl0T2m7/8kZnadK/3yWSM/xezf1X3Ca7RLkzQpMKcZITMfc9/WCRw+3+ClhM2mwjDhZ50X3yrT5C7p/6sBqpNi94kj+OL5EBzRlBrp8iZkvnyYHUFTPqeO1zYAaiXpj6GAMvYAJGt74HnNrHVG9uTARnM/5zMgB9AsC2ibEX1otpDFDYZarIyAfwj4z+6Y1DwlsOC6AvDQep534my7gmmQYtfcv1cGagKWJHR1r8RkAZhdeYnyhh19Ujy+4zHqPwfyX5A/x5IwQ0S+IHQ9r+3xPPJs/I04YM57v3fxVMjbYROMAN8CGbtogmbmzT1BkjcUhzc5wg/XItzZeBQhDRrwhQptJuS8Yq8thQjKIMC7ohEc/ojSNN6umY6HdRxTWH1rSUNeSawwHGeMQzmS1bZIFD9EAQuyRcX6WCRvSbPYAbv9zghKL2DM3vG45xTHSH8bqVdlSPPAbl1wPexoDmiEe4IcJxtHJ31x54EsnGKdzcAyBhky2pMn7UFqWa/uKFZWfqIbyXtIccgOj7XxJYRTz/z1ftznUw5oletXPgVS0zLNUDp25Oql/v5df5DCzL4aB/L3imkqxr4RMOi5TKNHOkf+dIV9RIjKtijB46l8XbpW7HTnwqemswgS7C8p0gpK2/8WjOVrEZ9vCVBCdNHds9gPyIcE47uF7B4p4o8qRsWMpDaWH7uAukaKDR4mvQbUY/yDq0DcHo4AByA+AOxH0+AQSlq2k1s2EIYFKFtJ8XSMpeqo/r0G4XjP/Ja2oenjrD9zjrpjHORgEm4rxYZ+KICURQ2c9LJDI1LbaWVUJ6oI0xwis5rFS2It/RHoFbwSnFmeum8xwl83h6RFkEwRfnGZNlNiha+K9wLMuDbMWtYkcWyLgXcs1pCTK4QG9jtiuqrFRopKVgTG00mRR9e0OR8A3uZez2yjNImWiP/uwQB97uDuMSKv79jErSRT7WRr/1K/Vg/ghOQCSXFgAAA==',
        tagLine: 'Tabu',
        category: _game_interface__WEBPACK_IMPORTED_MODULE_0__.CategoryEnum.Schnelligkeit,
        maxPlayer: -1
    },
    {
        src: 'data:image/jpeg;base64,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',
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
        src: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRz2wnZAThoipGf4og2lvhNVUG1zCWwtAeIjIAzyK-9XaIB4XlsGU9y2Fmfn9LqH-e-YFXqeAhh7g&usqp=CAc',
        tagLine: 'Mysterium',
        category: _game_interface__WEBPACK_IMPORTED_MODULE_0__.CategoryEnum.Strategie,
        maxPlayer: 7
    },
    {
        src: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSHCipPyhTEYtJUJkISZwsJ1B9LOvEgBxIZNYYK22d6db7fMNyJOg4iTzpVQayvh1bNvVIqdhjOXAi_QYU2sXOjNeEFY04Ei-6sjo4RX0Yc9-5r9gA3SQOhoQ&usqp=CAc',
        tagLine: '5 Minutes Dungeon',
        category: _game_interface__WEBPACK_IMPORTED_MODULE_0__.CategoryEnum.Strategie,
        maxPlayer: 2
    },
    {
        src: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRpUHWYEYYyTJwa9jqnCaIscL9-Qh6n8TTSgQipGwrrbJWn3iAlN6qQY65oQSwwlbSzi8H4WA5J4Osj&usqp=CAc',
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
        src: 'data:image/webp;base64,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',
        tagLine: 'Tempel des Schreckens',
        category: _game_interface__WEBPACK_IMPORTED_MODULE_0__.CategoryEnum.Bluff,
        maxPlayer: 2
    },
    {
        src: 'https://www.spiel-des-jahres.de/wp-content/uploads/2019/02/Codenames_HEIDELBERGER.jpg',
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
        src: 'data:image/jpeg;base64,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',
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
        src: 'data:image/jpeg;base64,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',
        tagLine: 'Catan - das Duell',
        category: _game_interface__WEBPACK_IMPORTED_MODULE_0__.CategoryEnum.Strategie,
        maxPlayer: 2
    },
    {
        src: 'data:image/jpeg;base64,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',
        tagLine: 'Phase 10',
        category: _game_interface__WEBPACK_IMPORTED_MODULE_0__.CategoryEnum.Strategie,
        maxPlayer: 6
    },
    {
        src: 'data:image/jpeg;base64,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',
        tagLine: 'Hornochse',
        category: _game_interface__WEBPACK_IMPORTED_MODULE_0__.CategoryEnum.Strategie,
        maxPlayer: 6
    },
    {
        src: 'data:image/jpeg;base64,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',
        tagLine: 'Hive',
        category: _game_interface__WEBPACK_IMPORTED_MODULE_0__.CategoryEnum.Strategie,
        maxPlayer: 2
    },
    {
        src: 'data:image/jpeg;base64,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',
        tagLine: 'Diamant',
        category: _game_interface__WEBPACK_IMPORTED_MODULE_0__.CategoryEnum.Bluff,
        maxPlayer: 4
    },
    {
        src: 'https://www.galeria.de/cf-img-product/49888212e81779e22d2d83995b60e4f5/1280',
        tagLine: 'Nobody\'s Perfect',
        category: _game_interface__WEBPACK_IMPORTED_MODULE_0__.CategoryEnum.Bluff,
        maxPlayer: -1
    },
    {
        src: 'data:image/jpeg;base64,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',
        tagLine: 'DODELIDO',
        category: _game_interface__WEBPACK_IMPORTED_MODULE_0__.CategoryEnum.Schnelligkeit,
        maxPlayer: -1
    },
    {
        src: 'data:image/jpeg;base64,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',
        tagLine: 'Risiko',
        category: _game_interface__WEBPACK_IMPORTED_MODULE_0__.CategoryEnum.Strategie,
        maxPlayer: -1
    },
    {
        src: 'data:image/jpeg;base64,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',
        tagLine: 'Scrabble',
        category: _game_interface__WEBPACK_IMPORTED_MODULE_0__.CategoryEnum.Strategie,
        maxPlayer: -1
    },
    {
        src: 'data:image/jpeg;base64,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',
        tagLine: 'Tick Tack Boom',
        category: _game_interface__WEBPACK_IMPORTED_MODULE_0__.CategoryEnum.Schnelligkeit,
        maxPlayer: -1
    },
    {
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSumdR0xRTlAt8s8qH-FyGeE_z-SgCKYmN74dm4nZYzK3-67yjLNSxVRSE5jqydGeKYK2Y&usqp=CAU',
        tagLine: 'Skipbo',
        category: _game_interface__WEBPACK_IMPORTED_MODULE_0__.CategoryEnum.Strategie,
        maxPlayer: 4
    },
    {
        src: 'data:image/jpeg;base64,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',
        tagLine: 'Cluedo',
        category: _game_interface__WEBPACK_IMPORTED_MODULE_0__.CategoryEnum.Strategie,
        maxPlayer: -1
    },
    {
        src: 'data:image/jpeg;base64,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',
        tagLine: 'Ligretto',
        category: _game_interface__WEBPACK_IMPORTED_MODULE_0__.CategoryEnum.Schnelligkeit,
        maxPlayer: -1
    },
    {
        src: 'https://pegasusshop.de/media/image/7e/92/8f/4250231734403_02_web.jpg',
        tagLine: 'Swindler',
        category: _game_interface__WEBPACK_IMPORTED_MODULE_0__.CategoryEnum.Strategie,
        maxPlayer: 4
    },
    {
        src: 'https://m.media-amazon.com/images/I/81+uXdi-rGL._AC_SY679_.jpg',
        tagLine: 'Clever hoch 3',
        category: _game_interface__WEBPACK_IMPORTED_MODULE_0__.CategoryEnum.Strategie,
        maxPlayer: 4
    },
    {
        src: 'https://images.thalia.media/00/-/ba85778cf2444584bef33da8c83896f5/wizard-kartenspiel.jpeg',
        tagLine: 'Wizard',
        category: _game_interface__WEBPACK_IMPORTED_MODULE_0__.CategoryEnum.Strategie,
        maxPlayer: 6
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

/***/ 6314:
/*!******************************************************!*\
  !*** ./src/app/pages/favorite-items/notMineGames.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "coolGamesButNotMine": () => (/* binding */ coolGamesButNotMine)
/* harmony export */ });
/* harmony import */ var _game_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.interface */ 2989);

const coolGamesButNotMine = [
    {
        src: 'https://cdn.idealo.com/folder/Product/5476/9/5476942/s1_produktbild_gross/pegasus-captain-sonar-deutsch.jpg',
        tagLine: 'Sonar',
        category: _game_interface__WEBPACK_IMPORTED_MODULE_0__.CategoryEnum.Strategie,
        maxPlayer: 6
    },
    {
        src: 'https://images.thalia.media/00/-/de2c03cfcb284db68fff3a7997c27c7b/clementoni-das-duell-um-die-geld.jpeg',
        tagLine: 'Duell um die Geld',
        category: _game_interface__WEBPACK_IMPORTED_MODULE_0__.CategoryEnum.Bluff,
        maxPlayer: 8
    },
    {
        src: 'data:image/jpeg;base64,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',
        tagLine: 'Werwolf',
        category: _game_interface__WEBPACK_IMPORTED_MODULE_0__.CategoryEnum.Bluff,
        maxPlayer: 8
    },
    {
        src: 'https://m.media-amazon.com/images/I/61VplzQ3tkL._AC_SL1500_.jpg',
        tagLine: 'Hochstapler',
        category: _game_interface__WEBPACK_IMPORTED_MODULE_0__.CategoryEnum.Bluff,
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

/***/ 2768:
/*!****************************************************!*\
  !*** ./src/app/pages/landing/landing.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingComponent": () => (/* binding */ LandingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class LandingComponent {
    constructor() { }
    ngOnInit() {
    }
}
LandingComponent.ɵfac = function LandingComponent_Factory(t) { return new (t || LandingComponent)(); };
LandingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingComponent, selectors: [["app-landing"]], decls: 12, vars: 0, consts: [[1, "dot"], [1, "typewriter"]], template: function LandingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br")(1, "br")(2, "br")(3, "br")(4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1)(6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Willkommen!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Hier findest du das Men\u00FC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "W\u00E4hl' doch was aus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } }, styles: [".dot[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15px;\n  right: 120px;\n  --c: var(--primary-color);\n  \n  --r: 10px;\n  \n  --s: 10px;\n  \n  width: 100px;\n  height: 100px;\n  display: inline-block;\n  margin: 20px;\n  --g: radial-gradient(circle closest-side, var(--c) 85%, transparent);\n  transition: -webkit-clip-path 1s;\n  transition: clip-path 1s;\n  transition: clip-path 1s, -webkit-clip-path 1s;\n  background: var(--g) calc(var(--s) / -2) 0/calc(var(--r) + var(--s)) var(--r) repeat-x, var(--g) 0 calc(var(--s) / -2)/var(--r) calc(var(--r) + var(--s)) repeat-y;\n  -webkit-clip-path: circle(6.1% at 0 100%);\n          clip-path: circle(6.1% at 0 100%);\n  -webkit-animation: clip-path-movement 4s forwards 8s;\n          animation: clip-path-movement 4s forwards 8s;\n}\n\n@-webkit-keyframes clip-path-movement {\n  from {\n    -webkit-clip-path: circle(6.1% at 0 100%);\n            clip-path: circle(6.1% at 0 100%);\n  }\n  99% {\n    -webkit-clip-path: circle(160.2% at 0 100%);\n            clip-path: circle(160.2% at 0 100%);\n  }\n  to {\n    -webkit-clip-path: none;\n            clip-path: none;\n  }\n}\n\n@keyframes clip-path-movement {\n  from {\n    -webkit-clip-path: circle(6.1% at 0 100%);\n            clip-path: circle(6.1% at 0 100%);\n  }\n  99% {\n    -webkit-clip-path: circle(160.2% at 0 100%);\n            clip-path: circle(160.2% at 0 100%);\n  }\n  to {\n    -webkit-clip-path: none;\n            clip-path: none;\n  }\n}\n\n.dot[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: calc(var(--r) / 2);\n  left: 100%;\n  width: 20px;\n  height: 20px;\n  transform: translateY(-50%);\n  background: var(--c);\n  -webkit-clip-path: polygon(0 0, 100% 50%, 0 100%);\n          clip-path: polygon(0 0, 100% 50%, 0 100%);\n}\n\n.typewriter[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  overflow: hidden;\n  \n  white-space: nowrap;\n  \n  margin: 0 auto;\n  \n  letter-spacing: 0.15em;\n  \n  visibility: hidden;\n  -webkit-animation: typing 3.5s steps(40, end) forwards;\n          animation: typing 3.5s steps(40, end) forwards;\n}\n\n.typewriter[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:nth-child(2) {\n  -webkit-animation-delay: 2s;\n          animation-delay: 2s;\n}\n\n.typewriter[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:nth-child(3) {\n  -webkit-animation-delay: 6s;\n          animation-delay: 6s;\n}\n\n\n\n@-webkit-keyframes typing {\n  from {\n    width: 0;\n    visibility: visible;\n  }\n  to {\n    width: 100%;\n    visibility: visible;\n  }\n}\n\n@keyframes typing {\n  from {\n    width: 0;\n    visibility: visible;\n  }\n  to {\n    width: 100%;\n    visibility: visible;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLDBCQUFBO0VBRUEsWUFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxvRUFBQTtFQUVBLGdDQUFBO0VBQUEsd0JBQUE7RUFBQSw4Q0FBQTtFQUNBLGtLQUNJO0VBR0EseUNBQUE7VUFBQSxpQ0FBQTtFQUNKLG9EQUFBO1VBQUEsNENBQUE7QUFKSjs7QUFPQTtFQUNJO0lBQU8seUNBQUE7WUFBQSxpQ0FBQTtFQUhUO0VBSUU7SUFBTSwyQ0FBQTtZQUFBLG1DQUFBO0VBRFI7RUFFRTtJQUFLLHVCQUFBO1lBQUEsZUFBQTtFQUNQO0FBQ0Y7O0FBTEE7RUFDSTtJQUFPLHlDQUFBO1lBQUEsaUNBQUE7RUFIVDtFQUlFO0lBQU0sMkNBQUE7WUFBQSxtQ0FBQTtFQURSO0VBRUU7SUFBSyx1QkFBQTtZQUFBLGVBQUE7RUFDUDtBQUNGOztBQUNBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaURBQUE7VUFBQSx5Q0FBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFBa0IsNERBQUE7RUFDbEIsbUJBQUE7RUFBcUIsdUNBQUE7RUFDckIsY0FBQTtFQUFnQixzREFBQTtFQUNoQixzQkFBQTtFQUF1QixxQkFBQTtFQUN2QixrQkFBQTtFQUNBLHNEQUFBO1VBQUEsOENBQUE7QUFLSjs7QUFISTtFQUVJLDJCQUFBO1VBQUEsbUJBQUE7QUFJUjs7QUFGSTtFQUVJLDJCQUFBO1VBQUEsbUJBQUE7QUFHUjs7QUFFRSxzQkFBQTs7QUFDQTtFQUNFO0lBQU8sUUFBQTtJQUFVLG1CQUFBO0VBR25CO0VBREU7SUFBSyxXQUFBO0lBRUQsbUJBQUE7RUFHTjtBQUNGOztBQVRFO0VBQ0U7SUFBTyxRQUFBO0lBQVUsbUJBQUE7RUFHbkI7RUFERTtJQUFLLFdBQUE7SUFFRCxtQkFBQTtFQUdOO0FBQ0YiLCJmaWxlIjoibGFuZGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kb3Qge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxNXB4O1xyXG4gICAgcmlnaHQ6IDEyMHB4O1xyXG4gICAgLS1jOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgIC8qIGNvbG9yICovXHJcbiAgICAtLXI6IDEwcHg7XHJcbiAgICAvKiBjaXJjbGUgc2l6ZSAqL1xyXG4gICAgLS1zOiAxMHB4O1xyXG4gICAgLyogc3BhY2UgYmV0dHdlbiBjaXJjbGVzICovXHJcblxyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjogMjBweDtcclxuICAgIC0tZzogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBjbG9zZXN0LXNpZGUsIHZhcigtLWMpIDg1JSwgdHJhbnNwYXJlbnQpO1xyXG4gICAgXHJcbiAgICB0cmFuc2l0aW9uOiBjbGlwLXBhdGggMXM7XHJcbiAgICBiYWNrZ3JvdW5kOlxyXG4gICAgICAgIHZhcigtLWcpIGNhbGModmFyKC0tcykvLTIpIDAvY2FsYyh2YXIoLS1yKSArIHZhcigtLXMpKSB2YXIoLS1yKSByZXBlYXQteCxcclxuICAgICAgICB2YXIoLS1nKSAwIGNhbGModmFyKC0tcykvLTIpL3ZhcigtLXIpIGNhbGModmFyKC0tcikgKyB2YXIoLS1zKSkgcmVwZWF0LXk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY2xpcC1wYXRoOiBjaXJjbGUoNi4xJSBhdCAwIDEwMCUpO1xyXG4gICAgYW5pbWF0aW9uOiBjbGlwLXBhdGgtbW92ZW1lbnQgNHMgZm9yd2FyZHMgOHM7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgY2xpcC1wYXRoLW1vdmVtZW50IHsgXHJcbiAgICBmcm9tIHsgY2xpcC1wYXRoOiBjaXJjbGUoNi4xJSBhdCAwIDEwMCUpOyB9XHJcbiAgICA5OSUgeyBjbGlwLXBhdGg6IGNpcmNsZSgxNjAuMiUgYXQgMCAxMDAlKTt9IFxyXG4gICAgdG8geyBjbGlwLXBhdGg6IG5vbmUgfSBcclxufVxyXG5cclxuLmRvdDo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogY2FsYyh2YXIoLS1yKS8yKTtcclxuICAgIGxlZnQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWMpO1xyXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMCwgMTAwJSA1MCUsIDAgMTAwJSk7XHJcbn1cclxuXHJcbi50eXBld3JpdGVyIGgyIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47IC8qIEVuc3VyZXMgdGhlIGNvbnRlbnQgaXMgbm90IHJldmVhbGVkIHVudGlsIHRoZSBhbmltYXRpb24gKi9cclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7IC8qIEtlZXBzIHRoZSBjb250ZW50IG9uIGEgc2luZ2xlIGxpbmUgKi9cclxuICAgIG1hcmdpbjogMCBhdXRvOyAvKiBHaXZlcyB0aGF0IHNjcm9sbGluZyBlZmZlY3QgYXMgdGhlIHR5cGluZyBoYXBwZW5zICovXHJcbiAgICBsZXR0ZXItc3BhY2luZzogLjE1ZW07IC8qIEFkanVzdCBhcyBuZWVkZWQgKi9cclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIGFuaW1hdGlvbjogdHlwaW5nIDMuNXMgc3RlcHMoNDAsIGVuZCkgZm9yd2FyZHM7XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgJjpudGgtY2hpbGQoMilcclxuICAgIHtcclxuICAgICAgICBhbmltYXRpb24tZGVsYXk6IDJzO1xyXG4gICAgfVxyXG4gICAgJjpudGgtY2hpbGQoMylcclxuICAgIHtcclxuICAgICAgICBhbmltYXRpb24tZGVsYXk6IDZzO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgfVxyXG4gIFxyXG4gIC8qIFRoZSB0eXBpbmcgZWZmZWN0ICovXHJcbiAgQGtleWZyYW1lcyB0eXBpbmcge1xyXG4gICAgZnJvbSB7IHdpZHRoOiAwOyB2aXNpYmlsaXR5OnZpc2libGU7XHJcbiAgICB9XHJcbiAgICB0byB7IHdpZHRoOiAxMDAlOyBcclxuICAgICAgICBcclxuICAgICAgICB2aXNpYmlsaXR5OnZpc2libGUgfVxyXG4gIH0iXX0= */"] });


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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _favorite_items_favorite_items_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./favorite-items/favorite-items.component */ 1149);
/* harmony import */ var _personal_personal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./personal/personal.component */ 6847);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./landing/landing.component */ 2768);
/* harmony import */ var _iceland_page_iceland_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./iceland-page/iceland-page.component */ 8700);
/* harmony import */ var _iceland_video_iceland_video_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./iceland-video/iceland-video.component */ 5728);
/* harmony import */ var _comic_comic_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comic/comic.component */ 4439);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);









class PagesModule {
}
PagesModule.ɵfac = function PagesModule_Factory(t) { return new (t || PagesModule)(); };
PagesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: PagesModule });
PagesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](PagesModule, { declarations: [_favorite_items_favorite_items_component__WEBPACK_IMPORTED_MODULE_0__.FavoriteItemsComponent,
        _personal_personal_component__WEBPACK_IMPORTED_MODULE_1__.PersonalComponent,
        _landing_landing_component__WEBPACK_IMPORTED_MODULE_3__.LandingComponent,
        _iceland_page_iceland_page_component__WEBPACK_IMPORTED_MODULE_4__.IcelandPageComponent,
        _iceland_video_iceland_video_component__WEBPACK_IMPORTED_MODULE_5__.IcelandVideoComponent,
        _comic_comic_component__WEBPACK_IMPORTED_MODULE_6__.ComicComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule], exports: [_favorite_items_favorite_items_component__WEBPACK_IMPORTED_MODULE_0__.FavoriteItemsComponent,
        _personal_personal_component__WEBPACK_IMPORTED_MODULE_1__.PersonalComponent,
        _landing_landing_component__WEBPACK_IMPORTED_MODULE_3__.LandingComponent,
        _iceland_page_iceland_page_component__WEBPACK_IMPORTED_MODULE_4__.IcelandPageComponent,
        _comic_comic_component__WEBPACK_IMPORTED_MODULE_6__.ComicComponent] }); })();


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var src_app_shared_factory_add_scroll_out_decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/factory/add-scroll-out.decorator */ 2472);
/* harmony import */ var src_app_shared_factory_animations_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/factory/animations.enum */ 778);
/* harmony import */ var src_app_shared_factory_random_function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/factory/random-function */ 7405);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_social_media_button_social_media_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/social-media-button/social-media-button.component */ 4969);
/* harmony import */ var _shared_pulse_pic_pulse_pic_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/pulse-pic/pulse-pic.component */ 4408);
/* harmony import */ var _shared_scroll_indicator_scroll_indicator_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/scroll-indicator/scroll-indicator.component */ 5314);
/* harmony import */ var _shared_scroll_show_scroll_show_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/scroll-show/scroll-show.component */ 5675);
/* harmony import */ var _shared_directives_shortcut_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/directives/shortcut.directive */ 851);
/* harmony import */ var _shared_directives_firework_btn_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/directives/firework-btn.directive */ 8128);
/* harmony import */ var _shared_directives_scroll_percent_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/directives/scroll-percent.directive */ 4838);
/* harmony import */ var _shared_parallex_panel_parallex_panel_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/parallex-panel/parallex-panel.component */ 8415);
/* harmony import */ var _shared_text_over_pic_text_over_pic_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/text-over-pic/text-over-pic.component */ 6932);
/* harmony import */ var _shared_hero_text_hero_text_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/hero-text/hero-text.component */ 8912);
/* harmony import */ var _shared_hero_bg_hero_bg_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/hero-bg/hero-bg.component */ 140);
/* harmony import */ var _favorite_items_favorite_items_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../favorite-items/favorite-items.component */ 1149);



















const _c0 = function (a0) { return { "darkest": a0 }; };
const _c1 = function () { return ["/iceland-video"]; };
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
PersonalComponent.ɵfac = function PersonalComponent_Factory(t) { return new (t || PersonalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.ActivatedRoute)); };
PersonalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({ type: PersonalComponent, selectors: [["app-personal"]], hostVars: 2, hostBindings: function PersonalComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("daytime", ctx.isDayTime);
    } }, decls: 149, vars: 14, consts: [[1, "scroll-indicator"], [1, "host", 3, "ngClass"], [1, "intro"], ["playsinline", "", "autoplay", "", "loop", "", "autobuffer", "", 3, "muted"], ["introvideo", ""], ["src", "../../../assets/videos/intro.mp4", "type", "video/mp4"], ["title", "Let's play a boardgame", "pictureUrl", "", "textclass", "text-2", "picAsBg", "true", 1, "custom"], ["textclass", "text-2", 3, "title", "pictureUrl"], ["textclass", "text-2", "picAsBg", "true", 3, "title", "pictureUrl"], [1, "height-vh-xl", "padding-top-xl"], ["src", "../../../assets/pictures/profile-pic.jpg"], [1, "line-container"], ["icon", "facebook", "url", "https://www.facebook.com/egner.kevin"], ["icon", "instagram", "url", "https://www.instagram.com/deinlieblingskevin"], [1, "fw-panel"], [3, "showNotMine"], [1, "column-line"], [1, "fancy-box", "fancy-box-center"], [2, "height", "50vH"], ["scrollPercent", "", 2, "height", "50vH", 3, "elementTopVisible"], [1, "center-container", "hero-container"], [3, "items", "withDescription"], ["slot", "template0"], ["src", "../../../assets/pictures/paris1.jpg"], ["src", "../../../assets/pictures/paris2.jpg"], ["slot", "template1"], ["src", "../../../assets/pictures/barc1.jpg"], ["src", "../../../assets/pictures/barc2.jpg"], ["src", "../../../assets/pictures/barc3.jpg"], ["slot", "template2"], [1, "row"], [1, "col-6"], ["size", "md", "src", "../../../assets/pictures/ice4.jpg"], ["size", "md", "src", "../../../assets/pictures/ice2.jpg"], ["src", "../../../assets/pictures/ice1.jpg"], [3, "routerLink"], ["routerLink", "/iceland"], ["src", "../../../assets/pictures/ice3.jpg"], [1, "text-right"], ["slot", "template3"], ["src", "../../../assets/pictures/prag2.jpg"], ["src", "../../../assets/pictures/parg1.jpg"], ["slot", "template4"], ["src", "../../../assets/pictures/rom1.jpg"], ["src", "../../../assets/pictures/rom2.jpg"], ["src", "../../../assets/pictures/rom3.jpg"], [1, "text-slide", 2, "background-color", "var(--theme-color)"], [1, "justified"], ["firework-click", "", "clickShortCutKey", "KeyV", 1, "primary"], [2, "height", "40vH"], ["scrollPercent", "", "classToAddWhenScrolledIn", "collision-animate", 2, "height", "30vH"], [2, "position", "relative"], [1, "hero-end"], ["background", "var(--main-light)", "height", "100vH", 3, "background"], [1, "personal-thanks-text"]], template: function PersonalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "app-scroll-indicator");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "div", 1)(3, "div", 2)(4, "video", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](6, "source", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7, " Ihr Browser unterst\u00FCtzt das Video Element nicht. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](8, "text-over-pic", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](9, "text-over-pic", 7)(10, "text-over-pic", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](11, "div", 9)(12, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](13, "Ich bin Kevin");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](14, "pulse-pic", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](16, "social-media-button", 12)(17, "social-media-button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](19, "favorite-items", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](20, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](21, "Wichtige Announcements!");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](22, "div", 16)(23, "div", 17)(24, "span")(25, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](26, "Hier k\u00F6nnte etwas total wichtiges stehen!");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](27, "div", 17)(28, "span")(29, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](30, "Was ist wei\u00DF und st\u00F6rt beim Essen?");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](32, "-'ne Lawine.");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](33, "div", 17)(34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](35, "\"Baguette!\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](36, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](37, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("elementTopVisible", function PersonalComponent_Template_div_elementTopVisible_37_listener() { return ctx.handleBgDarken(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](38, "div", 20)(39, "hero-text");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](40, " Ich zeige dir jetzt ein paar Impressionen aus meinen letzten Reisen. Get Ready! Sch\u00F6n weiter scrollen. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](41, "div", 20)(42, "hero-bg");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](43, " Also? READY??");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](45, " Dann scroll' weiter! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](46, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](47, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("elementTopVisible", function PersonalComponent_Template_div_elementTopVisible_47_listener() { return ctx.handleBgLighter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](48, "scroll-show", 21)(49, "div", 22)(50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](51, "In Paris habe ich Freunde besucht");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](52, "br")(53, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](54, "Wir hatten schon seit 2019 Tickets f\u00FCrs Moulin Rouge und endlich hat es Corona zugelassen");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](55, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](56, "Wir haben sehr viel gesehen. Den Eifelturm, die Katakomben, die Can-Can-Show im Moulin Rouge, den Arc de Triomphe, ...");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](57, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](58, "Auch kulinarisch hat mich Paris sehr \u00FCberzeugt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](59, "pulse-pic", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](60, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](61, "In Paris habe ich auch das erste Mal Champanger getrunken. Nat\u00FCrlich mit Blick auf den Eifelturm ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](62, "pulse-pic", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](63, "div", 25)(64, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](65, "Barcelona war eine sehr spontane Aktion. Miss C wollte gern auf ein 50s Rockabily-Festival und ich habe sie begleitet.");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](66, "pulse-pic", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](67, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](68, "Mir hat die Stadt ausgesprochen gut gefallen - sehr bunt und architektonisch sehr interessant. Auch das Essen fand ich klasse. (ich liebe die Chicken-Croquettas)");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](69, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](70, "In Barcelona habe ich angefangen mehr Videos statt Fotos zu machen, weil ich ein Videoprojekt machen wollte - das hat dann auch gut funktioniert.");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](71, "pulse-pic", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](72, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](73, "hier eins meiner Souvieniers:");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](74, "pulse-pic", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](75, "div", 29)(76, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](77, "\"Oh mein Gott. Wundersch\u00F6n\" war wohl der h\u00E4ufigste Ausruf meiner Bewunderung. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](78, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](79, " Erdbeben, Vulkanausbruch, Geysier, Schwefellandschaft, Gletscher, ... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](80, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](81, " Jeder Tag war magischer als der andere.");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](82, "div", 30)(83, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](84, "pulse-pic", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](85, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](86, "pulse-pic", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](87, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](88, "Camping. Auf das kann ich eigentlich gerne verzichten, aber weil es auf Island zu praktisch ist, lies es sich nicht vermeiden.");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](89, "pulse-pic", 34)(90, "br")(91, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](92, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](93, "Hier gehts zur Unterseite mit dem Video");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](94, "br")(95, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](96, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](97, "Hier gehts zur Unterseite mit der Reisekarte");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](98, "br")(99, "br")(100, "pulse-pic", 37)(101, "br")(102, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](103, "p", 38)(104, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](105, "Mein tollster Urlaub bisher.");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](106, "div", 39)(107, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](108, "Welcome back to praha!");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](109, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](110, "Zuletzt war ich 2014 in Prag. Dieses Mal mit der Absicht in zwei Horror-Escape-Rooms zu gehen.");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](111, "pulse-pic", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](112, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](113, "Die haben wir dann auch geschafft. Vom zweiten habe ich immer noch einen bleibenden Schaden.");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](114, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](115, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](116, "Nebenbei haben wir uns die sch\u00F6nsten Orte Prags angesehen - die John Lennon Wall ist nur eine davon.");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](117, "pulse-pic", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](118, "div", 42)(119, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](120, "Excuse me Sir, you sit on the Table!");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](121, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](122, "Im November ging es nach Rom - und zum Kolosseum.");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](123, "pulse-pic", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](124, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](125, "Wir haben sehr lecker gegessen und das Leben genossen.");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](126, "pulse-pic", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](127, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](128, "\"Sehr geehrte Damen und Herren, ich muss ihnen mitteilen, wir verlieren an H\u00F6he...\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](129, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](130, "\"... aber daf\u00FCr haben Sie ja bezahlt. Wir landen bald.\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](131, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](132, "Jaaa... witzig der Pilot beim R\u00FCckflug...");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](133, "pulse-pic", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](134, "div", 46)(135, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](136, " Der Ursprung f\u00FCr die heutigen Silvesterknaller liegt in China. Der chinesische M\u00F6nch Li Tian erfand im China der Tang-Dynastie das Schwarzpulver \u2013 und erweckte damit nicht nur den Gebrauch von Schusswaffen, sondern auch das Feuerwerk zum Leben. Mit dem damaligen \u201EBahzou\u201C wollten die Menschen b\u00F6se Geister vertreiben.");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](137, "button", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](138, "Klick hier");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](139, "div", 49)(140, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](141, "div", 51)(142, "div", 20)(143, "hero-text", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](144, " Das wars leider schon. ich hoffe dir hat meine gestylte Website gefallen. Dann bleibt mir nur zu sagen: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](145, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](146, "parallex-panel", 53)(147, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](148, "Danke f\u00FCrs Anschauen");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction1"](11, _c0, ctx.darkenBG));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("muted", "muted");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("title", ctx.title)("pictureUrl", ctx.pictureUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("title", ctx.title)("pictureUrl", ctx.pictureUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("showNotMine", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("items", ctx.scrollShowItems)("withDescription", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction0"](13, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("background", ctx.isDay ? "url('../../../assets/pictures/ice3.jpg')" : "url('../../../assets/pictures/rom1.jpg')");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.NgClass, _shared_social_media_button_social_media_button_component__WEBPACK_IMPORTED_MODULE_3__.SocialMediaButtonComponent, _shared_pulse_pic_pulse_pic_component__WEBPACK_IMPORTED_MODULE_4__.PulsePicComponent, _shared_scroll_indicator_scroll_indicator_component__WEBPACK_IMPORTED_MODULE_5__.ScrollIndicatorComponent, _shared_scroll_show_scroll_show_component__WEBPACK_IMPORTED_MODULE_6__.ScrollShowComponent, _shared_directives_shortcut_directive__WEBPACK_IMPORTED_MODULE_7__.ShortCutDirective, _shared_directives_firework_btn_directive__WEBPACK_IMPORTED_MODULE_8__.FireworkDirective, _shared_directives_scroll_percent_directive__WEBPACK_IMPORTED_MODULE_9__.ScrollPercentDirective, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterLinkWithHref, _shared_parallex_panel_parallex_panel_component__WEBPACK_IMPORTED_MODULE_10__.ParallexPanelComponent, _shared_text_over_pic_text_over_pic_component__WEBPACK_IMPORTED_MODULE_11__.TextOverPicComponent, _shared_hero_text_hero_text_component__WEBPACK_IMPORTED_MODULE_12__.HeroTextComponent, _shared_hero_bg_hero_bg_component__WEBPACK_IMPORTED_MODULE_13__.HeroBgComponent, _favorite_items_favorite_items_component__WEBPACK_IMPORTED_MODULE_14__.FavoriteItemsComponent], styles: ["[_nghost-%COMP%] {\n  margin-top: -60px;\n}\n\n.scroll-indicator[_ngcontent-%COMP%] {\n  position: fixed;\n  pointer-events: none;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 999;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  z-index: 80;\n}\n\n\n\n@media screen and (max-width: 1220px) {\n  parallex-layers[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\napp-scroll-indicator[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 100px;\n  right: 100px;\n  pointer-events: all;\n}\n\n@media only screen and (max-width: 1200px) {\n  .column-line[_ngcontent-%COMP%] {\n    grid-template-columns: none !important;\n  }\n}\n\n.column-line[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-column-gap: 10px;\n  color: var(--theme-color-white);\n}\n\n@media only screen and (min-width: 1200px) {\n  .column-line[_ngcontent-%COMP%]:first-child {\n    margin-left: 30px;\n  }\n  .column-line[_ngcontent-%COMP%]:last-child {\n    margin-right: 30px;\n  }\n}\n\ndiv[slot][_ngcontent-%COMP%] {\n  -webkit-backdrop-filter: blur(16px);\n          backdrop-filter: blur(16px);\n  padding: 30px;\n  background-color: var(--glass-bg-color);\n  box-shadow: 0 0 5px 10px var(--glass-item-box-shadow-color);\n}\n\n@media only screen and (min-width: 1200px) {\n  div[slot][_ngcontent-%COMP%] {\n    width: 70%;\n  }\n}\n\n@media only screen and (max-width: 1200px) {\n  div[slot][_ngcontent-%COMP%] {\n    width: 80%;\n  }\n}\n\n@media only screen and (max-width: 768px) {\n  div[slot][_ngcontent-%COMP%] {\n    width: 90%;\n  }\n}\n\ndiv[slot][_ngcontent-%COMP%]     pulse-pic .line-container {\n  padding: min(3vH, 15px) 0;\n}\n\n.parallex-section[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n}\n\n.megatron[_ngcontent-%COMP%] {\n  width: 823px;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  overflow: hidden;\n  z-index: 1;\n  margin: 0 auto;\n  background: var(--color-black);\n  transform: translateY(calc(50vh - 50% + var(--r-localnav-height) * 0.5));\n  padding: 1px;\n  border: 1px solid var(--color-black);\n  margin-top: 75vh;\n}\n\n.mega-text[_ngcontent-%COMP%] {\n  font-size: 56px;\n  line-height: 1.0714285714;\n  font-weight: 600;\n  letter-spacing: -0.005em;\n  font-family: SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif;\n}\n\n  .bg-push-up .parallex-section {\n  background-position: center !important;\n  background-position-y: -140px !important;\n}\n\n.personal-thanks-text[_ngcontent-%COMP%] {\n  background-color: var(--primary-color);\n  color: var(--theme-color-white);\n  font-size: 5vw;\n  font-weight: bold;\n  margin: 0 auto;\n  padding: 10px;\n  width: 120vW;\n  height: 100%;\n  text-align: center;\n  position: relative;\n  transform: rotate(334deg);\n}\n\n.slide-in-l[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 20vH;\n  text-align: right;\n}\n\n.slide-in-l[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: table-cell;\n  vertical-align: middle;\n  color: var(--theme-color-white);\n  padding: 10px;\n  font-size: min(6vW, 60px);\n}\n\n.slide-in-r[_ngcontent-%COMP%] {\n  right: 0;\n  top: 30vH;\n  text-align: left;\n}\n\n.slide-in-r[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: table-cell;\n  vertical-align: middle;\n  color: var(--theme-color-white);\n  padding: 10px;\n  font-size: min(6vW, 60px);\n}\n\n.flyer-text[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 40vW;\n  background-color: red;\n  display: table;\n  box-shadow: 10px 13px 40px -10px var(--color-black);\n}\n\n.flyer-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: serif !important;\n}\n\n  stroke-animation {\n  padding-top: 200px;\n  padding-right: 190px;\n}\n\n  scroll-show p {\n  color: var(--theme-color-white) !important;\n}\n\n.intro[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100vh;\n  background: url('intro-default.jpg') no-repeat left top scroll;\n  background-size: cover;\n  overflow: hidden;\n  -webkit-clip-path: inset(0);\n          clip-path: inset(0);\n}\n\n.intro[_ngcontent-%COMP%]::before {\n  content: \"\";\n  border: 2px solid rgba(255, 255, 255, 0.6588235294);\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: 16px;\n  z-index: 1;\n}\n\n.intro[_ngcontent-%COMP%]::after {\n  content: \"\";\n  border: 2px solid rgba(255, 255, 255, 0.2117647059);\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: 32px;\n}\n\n.intro[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  position: absolute;\n  margin: 0;\n  padding: 0;\n  top: 50%;\n  left: 50%;\n  min-width: 100%;\n  min-height: 100%;\n  width: auto;\n  height: auto;\n  transform: translate(-50%, -50%);\n}\n\n.intro[_ngcontent-%COMP%]   text-over-pic[_ngcontent-%COMP%] {\n  -webkit-clip-path: inset(0);\n          clip-path: inset(0);\n  position: fixed;\n  margin: 0;\n  padding: 0;\n  top: 50%;\n  left: 50%;\n  min-width: 100%;\n  min-height: 100%;\n  width: auto;\n  height: auto;\n  transform: translate(-50%, -50%);\n}\n\n[_nghost-%COMP%]  text-over-pic.custom .text-2 {\n  font-weight: 100;\n}\n\n@media (max-width: 510px) {\n  [_nghost-%COMP%]  text-over-pic.custom .text-2 {\n    font-weight: 100;\n    font-size: 45px;\n  }\n}\n\nhero-text[_ngcontent-%COMP%] {\n  max-width: 1000px;\n}\n\nhero-bg[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n[_nghost-%COMP%]     hero-text.hero-end article p {\n  background: linear-gradient(180deg, transparent, var(--hero-text-font-highlight), var(--hero-text-font-highlight), var(--theme-color-white), var(--hero-text-font-highlight), var(--hero-text-font-highlight), transparent);\n}\n\n.host[_ngcontent-%COMP%] {\n  transition: background-color 5s;\n}\n\n.darkest[_ngcontent-%COMP%] {\n  background-color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcnNvbmFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ssaUJBQUE7QUFDTDs7QUFFQTtFQUNJLGVBQUE7RUFDQSxvQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtVQUFBLGlCQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUdBLHlFQUFBOztBQUNBO0VBQ0k7SUFDSSxhQUFBO0VBQU47QUFDRjs7QUFJQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFFQSxtQkFBQTtBQUhKOztBQU1BO0VBQ0k7SUFDSSxzQ0FBQTtFQUhOO0FBQ0Y7O0FBTUE7RUFDSSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0FBSko7O0FBTUk7RUFFSTtJQUVJLGlCQUFBO0VBTlY7RUFRTTtJQUVJLGtCQUFBO0VBUFY7QUFDRjs7QUFXQTtFQW1CSSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLHVDQUFBO0VBRUEsMkRBQUE7QUEzQko7O0FBTVE7RUFESjtJQUdRLFVBQUE7RUFKVjtBQUNGOztBQU1RO0VBTko7SUFRUSxVQUFBO0VBSlY7QUFDRjs7QUFNUTtFQVhKO0lBYVEsVUFBQTtFQUpWO0FBQ0Y7O0FBY0k7RUFDSSx5QkFBQTtBQVpSOztBQWdCQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQWJKOztBQWdCQTtFQUNJLFlBQUE7RUFFQSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLDhCQUFBO0VBQ0Esd0VBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtBQWRKOztBQWlCQTtFQUNJLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1RkFBQTtBQWRKOztBQWlCQTtFQUNJLHNDQUFBO0VBQ0Esd0NBQUE7QUFkSjs7QUFrQkE7RUFDSSxzQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQWZKOztBQW1CRTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFFQSxpQkFBQTtBQWpCSjs7QUFrQkk7RUFDSSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsK0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7QUFoQlI7O0FBbUJFO0VBQ0UsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQWhCSjs7QUFrQkk7RUFDSSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsK0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7QUFoQlI7O0FBcUJFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsbURBQUE7QUFsQko7O0FBb0JJO0VBRUksNkJBQUE7QUFuQlI7O0FBdUJFO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtBQXBCSjs7QUF1QkU7RUFDRSwwQ0FBQTtBQXBCSjs7QUF1QkE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSw4REFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtVQUFBLG1CQUFBO0FBcEJKOztBQXNCSTtFQUNJLFdBQUE7RUFDQSxtREFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFwQlI7O0FBd0JJO0VBQ0ksV0FBQTtFQUNBLG1EQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FBdEJSOztBQXlCRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBRUEsZ0NBQUE7QUF2Qko7O0FBMEJFO0VBRUUsMkJBQUE7VUFBQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFFQSxnQ0FBQTtBQXpCSjs7QUErQkE7RUFDSSxnQkFBQTtBQTVCSjs7QUErQkU7RUFDRTtJQUNJLGdCQUFBO0lBQ0EsZUFBQTtFQTVCTjtBQUNGOztBQWdDQTtFQUNJLGlCQUFBO0FBOUJKOztBQWlDQTtFQUVJLFdBQUE7QUEvQko7O0FBbUNBO0VBQ0ksMk5BQUE7QUFoQ0o7O0FBMENBO0VBQ0ksK0JBQUE7QUF2Q0o7O0FBMENBO0VBQ0ksdUJBQUE7QUF2Q0oiLCJmaWxlIjoicGVyc29uYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdHtcclxuICAgICBtYXJnaW4tdG9wOiAtNjBweDtcclxuIH1cclxuXHJcbi5zY3JvbGwtaW5kaWNhdG9yeyAgICBcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgei1pbmRleDogOTk5O1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICB6LWluZGV4OjgwO1xyXG59XHJcblxyXG5cclxuLyogT24gc2NyZWVucyB0aGF0IGFyZSA2MDBweCBvciBsZXNzLCBzZXQgdGhlIGJhY2tncm91bmQgY29sb3IgdG8gb2xpdmUgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIyMHB4KSB7XHJcbiAgICBwYXJhbGxleC1sYXllcnN7XHJcbiAgICAgICAgZGlzcGxheTpub25lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG5hcHAtc2Nyb2xsLWluZGljYXRvciB7ICAgIFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAxMDBweDtcclxuICAgIHJpZ2h0OiAxMDBweDtcclxuICAgIFxyXG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpe1xyXG4gICAgLmNvbHVtbi1saW5le1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbi5jb2x1bW4tbGluZSB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcclxuICAgIGdyaWQtY29sdW1uLWdhcDogMTBweDtcclxuICAgIGNvbG9yOiB2YXIoLS10aGVtZS1jb2xvci13aGl0ZSk7XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpXHJcbiAgICB7XHJcbiAgICAgICAgJjpmaXJzdC1jaGlsZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6bGFzdC1jaGlsZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH0gICBcclxufVxyXG5cclxuZGl2W3Nsb3RdIHtcclxuICAgICYge1xyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAgICAgICAgIC8vIGh1Z2Ugc2NyZWVuXHJcbiAgICAgICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gICAgICAgICAgICAvLyBtZWRpdW0gc2NyZWVuIFxyXG4gICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgICAvLyBzbWFsbCBzY3JlZW5cclxuICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxNnB4KTtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1nbGFzcy1iZy1jb2xvcik7XHJcbiAgICBcclxuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggMTBweCB2YXIoLS1nbGFzcy1pdGVtLWJveC1zaGFkb3ctY29sb3IpO1xyXG5cclxuICAgIDo6bmctZGVlcCBwdWxzZS1waWMgLmxpbmUtY29udGFpbmVyIHtcclxuICAgICAgICBwYWRkaW5nOiBtaW4oM3ZILCAxNXB4KSAwO1xyXG4gICAgfVxyXG59XHJcblxyXG4ucGFyYWxsZXgtc2VjdGlvbntcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5tZWdhdHJvbntcclxuICAgIHdpZHRoOiA4MjNweDtcclxuXHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1ibGFjayk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoY2FsYyg1MHZoIC0gNTAlICsgdmFyKC0tci1sb2NhbG5hdi1oZWlnaHQpKjAuNSkpO1xyXG4gICAgcGFkZGluZzogMXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItYmxhY2spO1xyXG4gICAgbWFyZ2luLXRvcDogNzV2aDtcclxufVxyXG5cclxuLm1lZ2EtdGV4dHtcclxuICAgIGZvbnQtc2l6ZTogNTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjA3MTQyODU3MTQ7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAwNWVtO1xyXG4gICAgZm9udC1mYW1pbHk6IFNGIFBybyBEaXNwbGF5LFNGIFBybyBJY29ucyxIZWx2ZXRpY2EgTmV1ZSxIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZjtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5iZy1wdXNoLXVwIC5wYXJhbGxleC1zZWN0aW9ue1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IC0xNDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vLyBnbGVpY2hlIG1ldGhvZGUgd2llIG1pdCB0ZXh0LW92ZXItcGljIGNvbXBvbmVudGVcclxuLnBlcnNvbmFsLXRoYW5rcy10ZXh0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgY29sb3I6IHZhcigtLXRoZW1lLWNvbG9yLXdoaXRlKTtcclxuICAgIGZvbnQtc2l6ZTogNXZ3O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB3aWR0aDogMTIwdlc7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMzRkZWcpXHJcbiAgfVxyXG5cclxuXHJcbiAgLnNsaWRlLWluLWx7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OjA7XHJcbiAgICB0b3A6IDIwdkg7XHJcbiAgICBcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgJiA+IHNwYW57ICAgICAgICBcclxuICAgICAgICBkaXNwbGF5OnRhYmxlLWNlbGw7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246bWlkZGxlO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS10aGVtZS1jb2xvci13aGl0ZSk7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDsgICAgIFxyXG4gICAgICAgIGZvbnQtc2l6ZTogbWluKDZ2VywgNjBweCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5zbGlkZS1pbi1ye1xyXG4gICAgcmlnaHQ6MDtcclxuICAgIHRvcDogMzB2SDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7ICAgXHJcbiAgICBcclxuICAgICYgPiBzcGFueyAgICAgICAgXHJcbiAgICAgICAgZGlzcGxheTp0YWJsZS1jZWxsO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOm1pZGRsZTtcclxuICAgICAgICBjb2xvcjogdmFyKC0tdGhlbWUtY29sb3Itd2hpdGUpO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiBtaW4oNnZXLCA2MHB4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIFxyXG4gIC5mbHllci10ZXh0e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlOyAgICBcclxuICAgIHdpZHRoOiA0MHZXO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkOyAgICBcclxuICAgIGRpc3BsYXk6dGFibGU7ICAgIFxyXG4gICAgYm94LXNoYWRvdzogMTBweCAxM3B4IDQwcHggLTEwcHggdmFyKC0tY29sb3ItYmxhY2spO1xyXG5cclxuICAgICYgc3BhbiB7ICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9udC1mYW1pbHk6IHNlcmlmICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICA6Om5nLWRlZXAgc3Ryb2tlLWFuaW1hdGlvbntcclxuICAgIHBhZGRpbmctdG9wOiAyMDBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE5MHB4O1xyXG4gIH1cclxuXHJcbiAgOjpuZy1kZWVwIHNjcm9sbC1zaG93IHAge1xyXG4gICAgY29sb3I6IHZhcigtLXRoZW1lLWNvbG9yLXdoaXRlKSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbi5pbnRyb3tcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL3BpY3R1cmVzL2ludHJvLWRlZmF1bHQuanBnKSBuby1yZXBlYXQgbGVmdCB0b3Agc2Nyb2xsO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBjbGlwLXBhdGg6IGluc2V0KDApO1xyXG5cclxuICAgICY6OmJlZm9yZXtcclxuICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmZmZmYTg7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBtYXJnaW46IDE2cHg7XHJcbiAgICAgICAgei1pbmRleDoxO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAmOjphZnRlcntcclxuICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmZmZmMzY7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBtYXJnaW46IDMycHg7XHJcbiAgICB9XHJcblxyXG4gICYgdmlkZW97XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgfVxyXG5cclxuICAmIHRleHQtb3Zlci1waWN7XHJcbiAgICAgIFxyXG4gICAgY2xpcC1wYXRoOiBpbnNldCgwKTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB9XHJcblxyXG5cclxufVxyXG5cclxuOmhvc3Q6Om5nLWRlZXAgdGV4dC1vdmVyLXBpYy5jdXN0b20gLnRleHQtMntcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNTEwcHgpe1xyXG4gICAgOmhvc3Q6Om5nLWRlZXAgdGV4dC1vdmVyLXBpYy5jdXN0b20gLnRleHQtMntcclxuICAgICAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNDVweDtcclxuICAgICAgfVxyXG4gIH1cclxuXHJcblxyXG5oZXJvLXRleHQge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAwcHg7XHJcbn1cclxuXHJcbmhlcm8tYmd7XHJcbiAgICBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIGhlcm8tdGV4dC5oZXJvLWVuZCBhcnRpY2xlIHB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCBcclxuICAgIHRyYW5zcGFyZW50LCBcclxuICAgIHZhcigtLWhlcm8tdGV4dC1mb250LWhpZ2hsaWdodCksXHJcbiAgICB2YXIoLS1oZXJvLXRleHQtZm9udC1oaWdobGlnaHQpLFxyXG4gICAgdmFyKC0tdGhlbWUtY29sb3Itd2hpdGUpLFxyXG4gICAgdmFyKC0taGVyby10ZXh0LWZvbnQtaGlnaGxpZ2h0KSxcclxuICAgIHZhcigtLWhlcm8tdGV4dC1mb250LWhpZ2hsaWdodCksXHJcbiAgICAgdHJhbnNwYXJlbnQpO1xyXG59XHJcblxyXG4uaG9zdHtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgNXM7XHJcbn1cclxuXHJcbi5kYXJrZXN0e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbn0iXX0= */"] });
PersonalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__decorate)([
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
            console.log(this.classToAddWhenScrolledIn);
            if (this.classToAddWhenScrolledIn) {
                this._elementClass.push(this.classToAddWhenScrolledIn);
            }
        }
        /*
        TODO: noch nicht fertig - will eigentlich prozt angabe machen.
        if (rect.bottom < 0 || rect.top > (window.innerHeight || document.documentElement.clientHeight)) {
              return;
            }
        
            let calcer = rect.y;
            if (rect.y < 0) {
              calcer += rect.height;
            }
        
            let scrollPercentage = (calcer) / ((window.innerHeight || document.documentElement.clientHeight));
            scrollPercentage = (1 - scrollPercentage) * 100;
        
        
            console.log('im in: ' + scrollPercentage);*/
    }
}
ScrollPercentDirective.ɵfac = function ScrollPercentDirective_Factory(t) { return new (t || ScrollPercentDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef)); };
ScrollPercentDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ScrollPercentDirective, selectors: [["", "scrollPercent", ""]], hostVars: 2, hostBindings: function ScrollPercentDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function ScrollPercentDirective_scroll_HostBindingHandler($event) { return ctx.onScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.elementClass);
    } }, inputs: { classToAddWhenScrolledIn: "classToAddWhenScrolledIn" }, outputs: { elementTopVisible: "elementTopVisible" } });


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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", "", " ");
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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _directives_lazy_img_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../directives/lazy-img.directive */ 1076);
/* harmony import */ var _directives_img_preview_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../directives/img-preview.directive */ 9352);







const _c0 = function (a0) {
  return {
    "hidden": a0
  };
};

function PulsePicComponent__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "svg", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "path", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "text", 6)(5, "textPath", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("size-", ctx_r0.size, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](8, _c0, !_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 6, ctx_r0.showText)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.title, " ");
  }
}

function PulsePicComponent_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 8);
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("size-", ctx_r1.size, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r1.src, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}

function PulsePicComponent_img_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 9);
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("size-", ctx_r2.size, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r2.src, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}

class PulsePicComponent {
  constructor() {
    this.zoom = true;
    this.size = 'lg';
    this._showText = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(false);
  }

  get showText() {
    return this._showText.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(val => val && !!this.title));
  }

  hideTitle() {
    this._showText.next(false);
  }

  showTitle() {
    this._showText.next(true);
  }

}

PulsePicComponent.ɵfac = function PulsePicComponent_Factory(t) {
  return new (t || PulsePicComponent)();
};

PulsePicComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: PulsePicComponent,
  selectors: [["pulse-pic"]],
  inputs: {
    src: "src",
    title: "title",
    zoom: "zoom",
    size: "size"
  },
  decls: 4,
  vars: 3,
  consts: [[1, "line-container", 3, "mouseover", "mouseout"], ["viewBox", "0 0 80 80", 3, "class", "ngClass", 4, "ngIf"], ["preview", "", 3, "src", "class", 4, "ngIf"], [3, "src", "class", 4, "ngIf"], ["viewBox", "0 0 80 80", 3, "ngClass"], ["id", "svgCircle", "d", "\n                    M 40 40\n                    m -40, 0\n                    a 40,40 0 1,1 80,0\n                    a 40,40 0 1,1 -80,0\n                    "], ["width", "80"], [0, "xlink", "href", "#svgCircle"], ["preview", "", 3, "src"], [3, "src"]],
  template: function PulsePicComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mouseover", function PulsePicComponent_Template_div_mouseover_0_listener() {
        return ctx.showTitle();
      })("mouseout", function PulsePicComponent_Template_div_mouseout_0_listener() {
        return ctx.hideTitle();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, PulsePicComponent__svg_svg_1_Template, 7, 10, "svg", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, PulsePicComponent_img_2_Template, 1, 4, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, PulsePicComponent_img_3_Template, 1, 4, "img", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.zoom);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.zoom);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _directives_lazy_img_directive__WEBPACK_IMPORTED_MODULE_0__.LazyImgDirective, _directives_img_preview_directive__WEBPACK_IMPORTED_MODULE_1__.ImgPreviewDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe],
  styles: ["img[_ngcontent-%COMP%] {\n  height: calc(var(--size) * 1vW);\n  width: calc(var(--size) * 1vW);\n  max-height: calc(var(--size) * 1vH);\n  flex: 0;\n  -webkit-animation: img-pulse 6s infinite;\n          animation: img-pulse 6s infinite;\n  background-size: cover;\n  background-position: center;\n  aspect-ratio: 1/1;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\nimg.size-sm[_ngcontent-%COMP%] {\n  --size: 25;\n}\nimg.size-md[_ngcontent-%COMP%] {\n  --size: 40;\n}\n@media only screen and (min-width: 1200px) {\n  img.size-md-dyn[_ngcontent-%COMP%] {\n    --size: 20;\n  }\n}\n@media only screen and (max-width: 1200px) {\n  img.size-md-dyn[_ngcontent-%COMP%] {\n    --size: 30;\n  }\n}\n@media only screen and (max-width: 768px) {\n  img.size-md-dyn[_ngcontent-%COMP%] {\n    --size: 40;\n  }\n}\nimg.size-lg[_ngcontent-%COMP%] {\n  --size: 60;\n}\n@-webkit-keyframes img-pulse {\n  from, to {\n    -webkit-clip-path: circle(48.1% at 50% 50%);\n            clip-path: circle(48.1% at 50% 50%);\n  }\n  50% {\n    -webkit-clip-path: circle(50% at 50% 50%);\n            clip-path: circle(50% at 50% 50%);\n  }\n}\n@keyframes img-pulse {\n  from, to {\n    -webkit-clip-path: circle(48.1% at 50% 50%);\n            clip-path: circle(48.1% at 50% 50%);\n  }\n  50% {\n    -webkit-clip-path: circle(50% at 50% 50%);\n            clip-path: circle(50% at 50% 50%);\n  }\n}\n.pic-title[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 3;\n  color: white;\n  top: 50%;\n}\n.line-container[_ngcontent-%COMP%] {\n  position: relative;\n}\npath[_ngcontent-%COMP%] {\n  fill: transparent;\n}\n.box_rotate[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  overflow: hidden;\n}\nsvg[_ngcontent-%COMP%] {\n  position: absolute;\n  overflow: visible;\n  -webkit-animation: rotate 6s linear infinite;\n          animation: rotate 6s linear infinite;\n  filter: drop-shadow(0px 0px 8px white);\n  height: calc(var(--size) * 1vW);\n  width: calc(var(--size) * 1vW);\n  max-height: calc(var(--size) * 1vH);\n}\n@media only screen and (min-width: 1200px) {\n  svg.size-md-dyn[_ngcontent-%COMP%] {\n    --size: 20;\n  }\n}\n@media only screen and (max-width: 1200px) {\n  svg.size-md-dyn[_ngcontent-%COMP%] {\n    --size: 30;\n  }\n}\n@media only screen and (max-width: 768px) {\n  svg.size-md-dyn[_ngcontent-%COMP%] {\n    --size: 40;\n  }\n}\nsvg.size-lg[_ngcontent-%COMP%] {\n  --size: 60;\n}\ntext[_ngcontent-%COMP%], text[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  font-size: 16px;\n  letter-spacing: 1.15px;\n  fill: rgb(11, 120, 120);\n}\n@-webkit-keyframes rotate {\n  0% {\n    transform: rotate(360deg);\n  }\n  100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes rotate {\n  0% {\n    transform: rotate(360deg);\n  }\n  100% {\n    transform: rotate(0deg);\n  }\n}\n@media (max-width: 1200px) {\n  body[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n@media (max-width: 1150px) {\n  body[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n@media (max-width: 1024px) {\n  body[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .container[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n\n  .box[_ngcontent-%COMP%] {\n    height: 200px;\n    width: 100%;\n    max-width: 300px;\n    margin: 30px;\n  }\n}\n@media (max-width: 400px) {\n  .container[_ngcontent-%COMP%] {\n    padding: 0 15px;\n    justify-content: center;\n  }\n\n  .box[_ngcontent-%COMP%] {\n    height: 200px;\n    width: 100%;\n    max-width: 280px;\n    margin: 20px auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1bHNlLXBpYy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLCtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQ0FBQTtFQUNBLE9BQUE7RUFDQSx3Q0FBQTtVQUFBLGdDQUFBO0VBRUEsc0JBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQURKO0FBR0k7RUFDSSxVQUFBO0FBRFI7QUFHSTtFQUNHLFVBQUE7QUFEUDtBQUtRO0VBREo7SUFFUSxVQUFBO0VBRlY7QUFDRjtBQUdRO0VBSko7SUFLUSxVQUFBO0VBQVY7QUFDRjtBQUNRO0VBUEo7SUFRUSxVQUFBO0VBRVY7QUFDRjtBQUNJO0VBQ0ksVUFBQTtBQUNSO0FBR0E7RUFDSTtJQUNJLDJDQUFBO1lBQUEsbUNBQUE7RUFBTjtFQUVFO0lBQ0kseUNBQUE7WUFBQSxpQ0FBQTtFQUFOO0FBQ0Y7QUFOQTtFQUNJO0lBQ0ksMkNBQUE7WUFBQSxtQ0FBQTtFQUFOO0VBRUU7SUFDSSx5Q0FBQTtZQUFBLGlDQUFBO0VBQU47QUFDRjtBQUdBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7QUFESjtBQUlBO0VBQ0ksa0JBQUE7QUFESjtBQUtBO0VBQ0ksaUJBQUE7QUFGSjtBQTRCQztFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ00sa0JBQUE7RUFDQSxnQkFBQTtBQXpCUjtBQTJCQztFQUNPLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSw0Q0FBQTtVQUFBLG9DQUFBO0VBQ0Esc0NBQUE7RUFrQkQsK0JBQUE7RUFDQSw4QkFBQTtFQUNBLG1DQUFBO0FBekNQO0FBd0JVO0VBREE7SUFFSSxVQUFBO0VBckJaO0FBQ0Y7QUFzQlU7RUFKQTtJQUtJLFVBQUE7RUFuQlo7QUFDRjtBQW9CVTtFQVBBO0lBUUksVUFBQTtFQWpCWjtBQUNGO0FBb0JJO0VBQ0ksVUFBQTtBQWxCUjtBQTBCQzs7RUFFQyxlQUFBO0VBQ0Esc0JBQUE7RUFFRSx1QkFBQTtBQXhCSjtBQTRCQTtFQUNDO0lBQ0MseUJBQUE7RUF6QkE7RUEyQkQ7SUFDQyx1QkFBQTtFQXpCQTtBQUNGO0FBbUJBO0VBQ0M7SUFDQyx5QkFBQTtFQXpCQTtFQTJCRDtJQUNDLHVCQUFBO0VBekJBO0FBQ0Y7QUE0QkE7RUFDQztJQUNFLGVBQUE7RUExQkQ7QUFDRjtBQTZCQTtFQUNDO0lBQ0UsZUFBQTtFQTNCRDtBQUNGO0FBOEJBO0VBQ0U7SUFDQyxjQUFBO0VBNUJEOztFQThCQTtJQUNDLHVCQUFBO0VBM0JEOztFQTZCQTtJQUNFLGFBQUE7SUFDQSxXQUFBO0lBQ0EsZ0JBQUE7SUFDQSxZQUFBO0VBMUJGO0FBQ0Y7QUE2QkE7RUFHRTtJQUNFLGVBQUE7SUFDQSx1QkFBQTtFQTdCRjs7RUErQkE7SUFDRSxhQUFBO0lBQ0EsV0FBQTtJQUNBLGdCQUFBO0lBQ0EsaUJBQUE7RUE1QkY7QUFDRiIsImZpbGUiOiJwdWxzZS1waWMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1nIHtcclxuICAgIGhlaWdodDogIGNhbGModmFyKC0tc2l6ZSkgKiAxdlcpO1xyXG4gICAgd2lkdGg6ICBjYWxjKHZhcigtLXNpemUpICogMXZXKTtcclxuICAgIG1heC1oZWlnaHQ6ICBjYWxjKHZhcigtLXNpemUpICogMXZIKTtcclxuICAgIGZsZXg6IDA7XHJcbiAgICBhbmltYXRpb246IGltZy1wdWxzZSA2cyBpbmZpbml0ZTtcclxuICAgIFxyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGFzcGVjdC1yYXRpbzogMS8xO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcblxyXG4gICAgJi5zaXplLXNte1xyXG4gICAgICAgIC0tc2l6ZTogMjU7XHJcbiAgICB9IFxyXG4gICAgJi5zaXplLW1ke1xyXG4gICAgICAgLS1zaXplOiA0MDtcclxuICAgIH1cclxuXHJcbiAgICAmLnNpemUtbWQtZHlue1xyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7ICAgICAgXHJcbiAgICAgICAgICAgIC0tc2l6ZTogMjA7XHJcbiAgICAgICAgfSAgXHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHsgICAgICBcclxuICAgICAgICAgICAgLS1zaXplOiAzMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkgeyAgICAgIFxyXG4gICAgICAgICAgICAtLXNpemU6IDQwO1xyXG4gICAgICAgIH0gICBcclxuICAgIH1cclxuXHJcbiAgICAmLnNpemUtbGd7XHJcbiAgICAgICAgLS1zaXplOiA2MDsgICAgICAgIFxyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGltZy1wdWxzZSB7XHJcbiAgICBmcm9tLCB0byB7XHJcbiAgICAgICAgY2xpcC1wYXRoOiBjaXJjbGUoNDguMSUgYXQgNTAlIDUwJSk7XHJcbiAgICB9XHJcbiAgICA1MCUge1xyXG4gICAgICAgIGNsaXAtcGF0aDogY2lyY2xlKDUwLjAlIGF0IDUwJSA1MCUpO1xyXG4gICAgfVxyXG59XHJcblxyXG4ucGljLXRpdGxle1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMztcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgdG9wOjUwJTtcclxufVxyXG5cclxuLmxpbmUtY29udGFpbmVye1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5cclxucGF0aCB7XHJcbiAgICBmaWxsOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgXHJcblxyXG5AbWl4aW4gZmxleGJveCgpIHtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogLW1vei1ib3g7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG4gIEBtaXhpbiBqdXN0aWZ5LWNvbnRlbnQoJGp1c3RpZnkpIHtcclxuICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiAkanVzdGlmeTtcclxuICAgIC1tb3otanVzdGlmeS1jb250ZW50OiAkanVzdGlmeTtcclxuICAgIC1tcy1qdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5O1xyXG4gICAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeTtcclxuICAgIC1tcy1mbGV4LXBhY2s6ICRqdXN0aWZ5O1xyXG4gIH1cclxuICBAbWl4aW4gYWxpZ24taXRlbXMoJGFsaWduKSB7XHJcbiAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiAkYWxpZ247XHJcbiAgICAtbW96LWFsaWduLWl0ZW1zOiAkYWxpZ247XHJcbiAgICAtbXMtYWxpZ24taXRlbXM6ICRhbGlnbjtcclxuICAgIGFsaWduLWl0ZW1zOiAkYWxpZ247XHJcbiAgfVxyXG5cclxuXHJcblx0LmJveF9yb3RhdGUge1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRoZWlnaHQ6IDEwMCU7IFxyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cdH1cclxuXHRzdmcge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICAgICAgICBhbmltYXRpb246IHJvdGF0ZSA2cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMHB4IDhweCB3aGl0ZSk7XHJcbiAgICAgIFxyXG4gICAgICAgICAgJi5zaXplLW1kLWR5bntcclxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7ICAgICAgXHJcbiAgICAgICAgICAgICAgLS1zaXplOiAyMDtcclxuICAgICAgICAgIH0gIFxyXG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHsgICAgICBcclxuICAgICAgICAgICAgICAtLXNpemU6IDMwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkgeyAgICAgIFxyXG4gICAgICAgICAgICAgIC0tc2l6ZTogNDA7XHJcbiAgICAgICAgICB9ICAgXHJcbiAgICB9XHJcblxyXG4gICAgJi5zaXplLWxne1xyXG4gICAgICAgIC0tc2l6ZTogNjA7ICAgICAgICBcclxuICAgIH1cclxuICAgICAgIFxyXG4gICAgICAgaGVpZ2h0OiBjYWxjKHZhcigtLXNpemUpICogMXZXKTtcclxuICAgICAgIHdpZHRoOiBjYWxjKHZhcigtLXNpemUpICogMXZXKTtcclxuICAgICAgIG1heC1oZWlnaHQ6IGNhbGModmFyKC0tc2l6ZSkgKiAxdkgpO1xyXG4gICAgICAgIFxyXG5cdH1cclxuXHR0ZXh0LFxyXG4gIHRleHQgPiAqIHtcclxuXHRcdGZvbnQtc2l6ZTogMTZweDtcclxuXHRcdGxldHRlci1zcGFjaW5nOiAxLjE1cHg7XHJcbiAgICBcclxuICAgIGZpbGw6IHJnYigxMSwgMTIwLCAxMjApXHJcblx0fVxyXG5cclxuXHJcbkBrZXlmcmFtZXMgcm90YXRlIHtcclxuXHQwJSB7XHJcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG5cdH1cclxuXHQxMDAlIHtcclxuXHRcdHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG5cdH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gYm9keSB7XHJcbiAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMTUwcHgpIHtcclxuIGJvZHkge1xyXG4gICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgYm9keSB7XHJcbiAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICAuY29udGFpbmVyIHtcclxuXHQgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuICAuYm94IHtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgICBtYXJnaW46IDMwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcclxuICBib2R5IHtcclxuICB9XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbiAgLmJveCB7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDI4MHB4O1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgfVxyXG59Il19 */"]
});

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
        if (pos == max) {
            this.isVisible = false;
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
        console.log('scrolling');
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _alert_alert_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert/alert.component */ 8549);
/* harmony import */ var _social_media_button_social_media_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./social-media-button/social-media-button.component */ 4969);
/* harmony import */ var _pulse_pic_pulse_pic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pulse-pic/pulse-pic.component */ 4408);
/* harmony import */ var _scroll_indicator_scroll_indicator_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scroll-indicator/scroll-indicator.component */ 5314);
/* harmony import */ var _scroll_show_scroll_show_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scroll-show/scroll-show.component */ 5675);
/* harmony import */ var _directives_lazy_img_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directives/lazy-img.directive */ 1076);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app-routing.module */ 158);
/* harmony import */ var _parallex_panel_parallex_panel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./parallex-panel/parallex-panel.component */ 8415);
/* harmony import */ var _parallex_layers_parallex_layers_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./parallex-layers/parallex-layers.component */ 5554);
/* harmony import */ var _knockout_text_knockout_text_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./knockout-text/knockout-text.component */ 6971);
/* harmony import */ var _text_over_pic_text_over_pic_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./text-over-pic/text-over-pic.component */ 6932);
/* harmony import */ var _stroke_animate_stroke_animate_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./stroke-animate/stroke-animate.component */ 4090);
/* harmony import */ var _video_text_video_text_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./video-text/video-text.component */ 6039);
/* harmony import */ var _hero_text_hero_text_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./hero-text/hero-text.component */ 8912);
/* harmony import */ var _three_layer_three_layer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./three-layer/three-layer.component */ 8673);
/* harmony import */ var _directives_scroll_percent_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./directives/scroll-percent.directive */ 4838);
/* harmony import */ var _hero_bg_hero_bg_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./hero-bg/hero-bg.component */ 140);
/* harmony import */ var _directives_shortcut_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./directives/shortcut.directive */ 851);
/* harmony import */ var _directives_img_preview_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./directives/img-preview.directive */ 9352);
/* harmony import */ var _img_full_modal_img_full_modal_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./img-full-modal/img-full-modal.component */ 8874);
/* harmony import */ var _sponsors_sponsors_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./sponsors/sponsors.component */ 308);
/* harmony import */ var _directives_firework_btn_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./directives/firework-btn.directive */ 8128);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ 2560);



























class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__.BrowserModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormsModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_25__.CommonModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__.BrowserAnimationsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_6__.AppRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_alert_alert_component__WEBPACK_IMPORTED_MODULE_0__.AlertComponent,
        _social_media_button_social_media_button_component__WEBPACK_IMPORTED_MODULE_1__.SocialMediaButtonComponent,
        _pulse_pic_pulse_pic_component__WEBPACK_IMPORTED_MODULE_2__.PulsePicComponent,
        _scroll_indicator_scroll_indicator_component__WEBPACK_IMPORTED_MODULE_3__.ScrollIndicatorComponent,
        _scroll_show_scroll_show_component__WEBPACK_IMPORTED_MODULE_4__.ScrollShowComponent,
        _directives_lazy_img_directive__WEBPACK_IMPORTED_MODULE_5__.LazyImgDirective,
        _parallex_panel_parallex_panel_component__WEBPACK_IMPORTED_MODULE_7__.ParallexPanelComponent,
        _parallex_layers_parallex_layers_component__WEBPACK_IMPORTED_MODULE_8__.ParallexLayersComponent,
        _knockout_text_knockout_text_component__WEBPACK_IMPORTED_MODULE_9__.KnockoutTextComponent,
        _text_over_pic_text_over_pic_component__WEBPACK_IMPORTED_MODULE_10__.TextOverPicComponent,
        _stroke_animate_stroke_animate_component__WEBPACK_IMPORTED_MODULE_11__.StrokeAnimateComponent,
        _video_text_video_text_component__WEBPACK_IMPORTED_MODULE_12__.VideoTextComponent,
        _hero_text_hero_text_component__WEBPACK_IMPORTED_MODULE_13__.HeroTextComponent,
        _three_layer_three_layer_component__WEBPACK_IMPORTED_MODULE_14__.ThreeLayerComponent,
        _img_full_modal_img_full_modal_component__WEBPACK_IMPORTED_MODULE_19__.ImgFullModalComponent,
        _directives_scroll_percent_directive__WEBPACK_IMPORTED_MODULE_15__.ScrollPercentDirective,
        _hero_bg_hero_bg_component__WEBPACK_IMPORTED_MODULE_16__.HeroBgComponent,
        _directives_shortcut_directive__WEBPACK_IMPORTED_MODULE_17__.ShortCutDirective,
        _directives_firework_btn_directive__WEBPACK_IMPORTED_MODULE_21__.FireworkDirective,
        _directives_img_preview_directive__WEBPACK_IMPORTED_MODULE_18__.ImgPreviewDirective,
        _sponsors_sponsors_component__WEBPACK_IMPORTED_MODULE_20__.SponsorsComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__.BrowserModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormsModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_25__.CommonModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__.BrowserAnimationsModule], exports: [_social_media_button_social_media_button_component__WEBPACK_IMPORTED_MODULE_1__.SocialMediaButtonComponent,
        _alert_alert_component__WEBPACK_IMPORTED_MODULE_0__.AlertComponent,
        _pulse_pic_pulse_pic_component__WEBPACK_IMPORTED_MODULE_2__.PulsePicComponent,
        _scroll_indicator_scroll_indicator_component__WEBPACK_IMPORTED_MODULE_3__.ScrollIndicatorComponent,
        _scroll_show_scroll_show_component__WEBPACK_IMPORTED_MODULE_4__.ScrollShowComponent,
        _directives_lazy_img_directive__WEBPACK_IMPORTED_MODULE_5__.LazyImgDirective,
        _directives_shortcut_directive__WEBPACK_IMPORTED_MODULE_17__.ShortCutDirective,
        _directives_firework_btn_directive__WEBPACK_IMPORTED_MODULE_21__.FireworkDirective,
        _directives_scroll_percent_directive__WEBPACK_IMPORTED_MODULE_15__.ScrollPercentDirective,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_6__.AppRoutingModule,
        _parallex_panel_parallex_panel_component__WEBPACK_IMPORTED_MODULE_7__.ParallexPanelComponent,
        _parallex_layers_parallex_layers_component__WEBPACK_IMPORTED_MODULE_8__.ParallexLayersComponent,
        _knockout_text_knockout_text_component__WEBPACK_IMPORTED_MODULE_9__.KnockoutTextComponent,
        _text_over_pic_text_over_pic_component__WEBPACK_IMPORTED_MODULE_10__.TextOverPicComponent,
        _stroke_animate_stroke_animate_component__WEBPACK_IMPORTED_MODULE_11__.StrokeAnimateComponent,
        _video_text_video_text_component__WEBPACK_IMPORTED_MODULE_12__.VideoTextComponent,
        _hero_text_hero_text_component__WEBPACK_IMPORTED_MODULE_13__.HeroTextComponent,
        _three_layer_three_layer_component__WEBPACK_IMPORTED_MODULE_14__.ThreeLayerComponent,
        _hero_bg_hero_bg_component__WEBPACK_IMPORTED_MODULE_16__.HeroBgComponent,
        _img_full_modal_img_full_modal_component__WEBPACK_IMPORTED_MODULE_19__.ImgFullModalComponent,
        _sponsors_sponsors_component__WEBPACK_IMPORTED_MODULE_20__.SponsorsComponent] }); })();


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

/***/ 308:
/*!*******************************************************!*\
  !*** ./src/app/shared/sponsors/sponsors.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SponsorsComponent": () => (/* binding */ SponsorsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _directives_lazy_img_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../directives/lazy-img.directive */ 1076);




const _c0 = function (a0) {
  return {
    "special-item": a0
  };
};

function SponsorsComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Unterst\u00FCtzer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c0, item_r1.special));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", item_r1.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.name);
  }
}

class SponsorsComponent {
  constructor() {
    this.sponsors = [{
      name: 'Tjark V.',
      avatar: 'https://github.githubassets.com/images/modules/site/home-campaign/sponsors/curl.jpeg'
    }, {
      name: 'Constanze T.',
      avatar: 'https://github.githubassets.com/images/modules/site/home-campaign/sponsors/curl.jpeg'
    }, {
      name: 'Matthias S.',
      avatar: 'https://github.githubassets.com/images/modules/site/home-campaign/sponsors/curl.jpeg'
    }, {
      name: 'Sabine W.',
      avatar: 'https://github.githubassets.com/images/modules/site/home-campaign/sponsors/curl.jpeg'
    }, {
      name: 'Sie?',
      special: true,
      avatar: 'https://github.githubassets.com/images/modules/site/home-campaign/sponsors/curl.jpeg'
    }, {
      name: 'Wolfgang O.',
      avatar: 'https://github.githubassets.com/images/modules/site/home-campaign/sponsors/curl.jpeg'
    }, {
      name: 'Ursula W.',
      avatar: 'https://github.githubassets.com/images/modules/site/home-campaign/sponsors/curl.jpeg'
    }, {
      name: 'Matthias S.',
      avatar: 'https://github.githubassets.com/images/modules/site/home-campaign/sponsors/curl.jpeg'
    }, {
      name: 'Matthias S.',
      avatar: 'https://github.githubassets.com/images/modules/site/home-campaign/sponsors/curl.jpeg'
    }, {
      name: 'Ursula W.',
      avatar: 'https://github.githubassets.com/images/modules/site/home-campaign/sponsors/curl.jpeg'
    }, {
      name: 'Matthias S.',
      avatar: 'https://github.githubassets.com/images/modules/site/home-campaign/sponsors/curl.jpeg'
    }, {
      name: 'Matthias S.',
      avatar: 'https://github.githubassets.com/images/modules/site/home-campaign/sponsors/curl.jpeg'
    }];
  }

  ngOnInit() {}

}

SponsorsComponent.ɵfac = function SponsorsComponent_Factory(t) {
  return new (t || SponsorsComponent)();
};

SponsorsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: SponsorsComponent,
  selectors: [["sponsors"]],
  decls: 22,
  vars: 1,
  consts: [[1, "full-width-panel"], [1, "text"], ["href", "/sponsors", 1, ""], [1, "sponsor-sidebar"], [1, "sponsor-list"], ["class", "sponsor-item", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "sponsor-item", 3, "ngClass"], ["alt", "avatar", "width", "96", "height", "96", "decoding", "async", 1, "d-block", "rounded", 3, "src"], [1, "field-name"], [1, "fa", "fa-heart"]],
  template: function SponsorsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Werden Sie Mitglied");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Tragen Sie dazu bei, dass besondere Projekte wie die beliebten arch\u00E4ologischen Kindermitmachprogramme auf dem Regensburger B\u00FCrgerfest kostenfrei angeboten werden k\u00F6nnen.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br")(7, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Wir halten unsere Mitglieder \u00FCber alle Veranstaltungen von AktionKulturSozial auf dem Laufenden und laden sie mehrmals im Jahr zu exklusiven, von uns organisierten Aktivit\u00E4ten ein.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "br")(10, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " F\u00FCr nur 3 \u20AC im Monat (1 \u20AC erm\u00E4\u00DFigt) sind Sie dabei!");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div")(14, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Formular f\u00FCr Privatperson ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div")(17, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Als Firma Unterst\u00FCtzer von AKS werden ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 3)(20, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, SponsorsComponent_div_21_Template, 7, 5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.sponsors);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _directives_lazy_img_directive__WEBPACK_IMPORTED_MODULE_0__.LazyImgDirective],
  styles: [".full-width-panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  overflow: hidden;\n  justify-content: space-between;\n  background: linear-gradient(45deg, rgba(68, 68, 68, 0.5607843137), #111);\n  min-height: 100vH;\n  border: 1px solid rgba(68, 68, 68, 0.5607843137);\n  height: auto;\n}\n\n.text[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  padding: 40px;\n  display: flex;\n  flex-direction: column;\n  width: 50%;\n}\n\n.sponsor-item[_ngcontent-%COMP%] {\n  min-width: 200px;\n  border-radius: 0.25rem;\n  transition-delay: 0ms;\n  padding: 1.5rem;\n  margin: 0.5rem;\n  flex-direction: column;\n  display: flex;\n  border: 1px solid #dee2e6;\n}\n\n.sponsor-item.special-item[_ngcontent-%COMP%] {\n  background-color: rgb(81, 8, 8);\n}\n\n.sponsor-item[_ngcontent-%COMP%]:not(.special-item):hover {\n  background-color: rgb(54, 53, 53);\n}\n\n.sponsor-sidebar[_ngcontent-%COMP%] {\n  font-size: 20px !important;\n}\n\n.sponsor-sidebar[_ngcontent-%COMP%]   .sponsor-list[_ngcontent-%COMP%] {\n  transform: rotate(7deg);\n  max-height: 480px;\n  top: -128px;\n  display: flex;\n  position: absolute;\n  width: 800px;\n  right: -13vW;\n  flex-wrap: wrap;\n  padding-left: 60px;\n}\n\n.sponsor-sidebar[_ngcontent-%COMP%]   .sponsor-list[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(3n)::after {\n  flex-basis: 100%;\n  content: \"\";\n  height: 0;\n}\n\n.field-name[_ngcontent-%COMP%] {\n  padding: 4px;\n}\n\n@media (min-width: 1400px) {\n  .sponsor-list[_ngcontent-%COMP%] {\n    right: -5vW !important;\n  }\n}\n\n@media (max-width: 1200px) {\n  .full-width-panel[_ngcontent-%COMP%] {\n    flex-direction: column;\n    overflow: hidden;\n  }\n  .full-width-panel[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .sponsor-sidebar[_ngcontent-%COMP%] {\n    position: relative;\n    width: 100%;\n    overflow: hidden;\n    height: 600px;\n  }\n\n  .sponsor-list[_ngcontent-%COMP%] {\n    height: 600px;\n    width: 1000px !important;\n    padding-left: 0 !important;\n    right: 0 !important;\n    left: 9vW;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwb25zb3JzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0Esd0VBQUE7RUFDQSxpQkFBQTtFQUNBLGdEQUFBO0VBQ0EsWUFBQTtBQUZKOztBQU9BO0VBQ0ksOEJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtBQUpKOztBQVFBO0VBQ0ksZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQUxKOztBQU9JO0VBQ0ksK0JBQUE7QUFMUjs7QUFRSTtFQUNJLGlDQUFBO0FBTlI7O0FBVUE7RUFFSSwwQkFBQTtBQVJKOztBQVdDO0VBQ08sdUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQVRSOztBQVVRO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQVJaOztBQWFBO0VBQ0ksWUFBQTtBQVZKOztBQWFBO0VBRUk7SUFDSSxzQkFBQTtFQVhOO0FBQ0Y7O0FBZUE7RUFDSTtJQUNJLHNCQUFBO0lBQ0EsZ0JBQUE7RUFiTjtFQWVNO0lBQ0ksV0FBQTtFQWJWOztFQWdCRTtJQUNJLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLGdCQUFBO0lBQ0EsYUFBQTtFQWJOOztFQWdCRTtJQUNJLGFBQUE7SUFDQSx3QkFBQTtJQUNBLDBCQUFBO0lBQ0EsbUJBQUE7SUFDQSxTQUFBO0VBYk47QUFDRiIsImZpbGUiOiJzcG9uc29ycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcbi5mdWxsLXdpZHRoLXBhbmVsIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjNDQ0NDQ0OGYsICMxMTEpO1xyXG4gICAgbWluLWhlaWdodDogMTAwdkg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNDQ0NDQ0OGY7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcblxyXG4gICAgXHJcbn1cclxuXHJcbi50ZXh0IHtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmc6IDQwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOjUwJTtcclxuXHJcbn1cclxuXHJcbi5zcG9uc29yLWl0ZW17XHJcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcclxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDBtcztcclxuICAgIHBhZGRpbmc6IDEuNXJlbTtcclxuICAgIG1hcmdpbjogMC41cmVtO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xyXG5cclxuICAgICYuc3BlY2lhbC1pdGVte1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4MSwgOCwgOCk7XHJcbiAgICB9XHJcblxyXG4gICAgJjpub3QoLnNwZWNpYWwtaXRlbSk6aG92ZXJ7ICAgICAgICBcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTQsIDUzLCA1Myk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zcG9uc29yLXNpZGViYXJ7XHJcbiAgICBcclxuICAgIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgXHJcblxyXG4gJiAuc3BvbnNvci1saXN0IHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg3ZGVnKTtcclxuICAgICAgICBtYXgtaGVpZ2h0OiA0ODBweDtcclxuICAgICAgICB0b3A6IC0xMjhweDsgICAgICAgIFxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyAgICAgICAgXHJcbiAgICAgICAgd2lkdGg6IDgwMHB4O1xyXG4gICAgICAgIHJpZ2h0OiAtMTN2VztcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA2MHB4O1xyXG4gICAgICAgICYgOm50aC1jaGlsZCgzbik6OmFmdGVyIHtcclxuICAgICAgICAgICAgZmxleC1iYXNpczogMTAwJTtcclxuICAgICAgICAgICAgY29udGVudDonJztcclxuICAgICAgICAgICAgaGVpZ2h0OjA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uZmllbGQtbmFtZXtcclxuICAgIHBhZGRpbmc6IDRweDtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDE0MDBweCkge1xyXG5cclxuICAgIC5zcG9uc29yLWxpc3Qge1xyXG4gICAgICAgIHJpZ2h0OiAtNXZXICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAuZnVsbC13aWR0aC1wYW5lbCB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgICAgICAmIC50ZXh0e1xyXG4gICAgICAgICAgICB3aWR0aDoxMDAlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnNwb25zb3Itc2lkZWJhcnsgICAgICAgIFxyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIGhlaWdodDogNjAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnNwb25zb3ItbGlzdCB7XHJcbiAgICAgICAgaGVpZ2h0OiA2MDBweDtcclxuICAgICAgICB3aWR0aDogMTAwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgICBsZWZ0OiA5dlc7ICAgICAgXHJcbiAgICB9XHJcbn1cclxuIl19 */"]
});

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


function TextOverPicComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2)(1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("background-image: url('", ctx_r0.pictureUrl, "')");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.title, " ");
} }
function TextOverPicComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("background-image: url('", ctx_r1.pictureUrl, "')");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.textclass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.title, " ");
} }
class TextOverPicComponent {
    constructor() {
        this.textclass = 'text-1';
        this.picAsBg = false;
    }
}
TextOverPicComponent.ɵfac = function TextOverPicComponent_Factory(t) { return new (t || TextOverPicComponent)(); };
TextOverPicComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TextOverPicComponent, selectors: [["text-over-pic"]], inputs: { title: "title", pictureUrl: "pictureUrl", textclass: "textclass", picAsBg: "picAsBg" }, decls: 2, vars: 2, consts: [["class", "height-vh solid-container", 4, "ngIf"], ["class", "height-vh image-container", 3, "style", 4, "ngIf"], [1, "height-vh", "solid-container"], [1, "text-crop"], [1, "height-vh", "image-container"]], template: function TextOverPicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TextOverPicComponent_div_0_Template, 3, 4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TextOverPicComponent_div_1_Template, 3, 6, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.picAsBg);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.picAsBg);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], styles: [".image-container[_ngcontent-%COMP%], .solid-container[_ngcontent-%COMP%] {\n  -webkit-clip-path: inset(0);\n          clip-path: inset(0);\n  overflow: hidden;\n  position: relative;\n}\n\n.image-container[_ngcontent-%COMP%] {\n  background-position: center;\n  background-attachment: fixed;\n}\n\n.solid-container[_ngcontent-%COMP%] {\n  background: var(--theme-color);\n}\n\n.text-1[_ngcontent-%COMP%], .text-2[_ngcontent-%COMP%], .text-crop[_ngcontent-%COMP%] {\n  width: 70vW;\n  text-align: center;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  padding: 10px;\n  font-size: max(10vw, 70px);\n  font-weight: bold;\n  margin: 0 auto;\n  transform: translate(-50%, -50%);\n}\n\n@media (prefers-color-scheme: dark) {\n  .text-1[_ngcontent-%COMP%], .text-2[_ngcontent-%COMP%], .text-crop[_ngcontent-%COMP%] {\n    filter: drop-shadow(2px 4px 6px var(--theme-color-white));\n  }\n}\n\n.text-crop[_ngcontent-%COMP%] {\n  background-position: center;\n  text-fill-color: transparent;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  -webkit-background-clip: text;\n  color: var(--primary-color);\n}\n\n.text-crop[_ngcontent-%COMP%]::after {\n  content: none;\n}\n\n.text-1[_ngcontent-%COMP%] {\n  background-color: white;\n  color: black;\n  transform: translate(-50%, -50%);\n  mix-blend-mode: screen;\n  border-radius: 200px;\n}\n\n.text-2[_ngcontent-%COMP%] {\n  color: var(--theme-color-white);\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRleHQtb3Zlci1waWMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7O0VBRUUsMkJBQUE7VUFBQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFBRjs7QUFHQTtFQUVJLDJCQUFBO0VBQ0EsNEJBQUE7QUFESjs7QUFJRTtFQUNFLDhCQUFBO0FBREo7O0FBS0U7RUFFRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFDQSxnQ0FBQTtBQUpKOztBQU9FO0VBQ0U7SUFDRSx5REFBQTtFQUpKO0FBQ0Y7O0FBUUU7RUFDRSwyQkFBQTtFQUVBLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQkFBQTtFQUNBLDZCQUFBO0VBRUEsMkJBQUE7QUFSSjs7QUFVSTtFQUNFLGFBQUE7QUFSTjs7QUFhRTtFQUNFLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQVZKOztBQWFFO0VBQ0UsK0JBQUE7RUFDQSxpQkFBQTtBQVZKIiwiZmlsZSI6InRleHQtb3Zlci1waWMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmltYWdlLWNvbnRhaW5lcixcclxuLnNvbGlkLWNvbnRhaW5lcntcclxuICBjbGlwLXBhdGg6IGluc2V0KDApO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uaW1hZ2UtY29udGFpbmVyIHtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7ICAgIFxyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICB9XHJcblxyXG4gIC5zb2xpZC1jb250YWluZXJ7ICAgIFxyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtY29sb3IpO1xyXG4gIH1cclxuXHJcblxyXG4gIC50ZXh0LTEsLnRleHQtMiwgLnRleHQtY3JvcHtcclxuXHJcbiAgICB3aWR0aDogNzB2VztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogbWF4KDEwdncsIDcwcHgpO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcblxyXG4gICAgbWFyZ2luOiAwIGF1dG87ICAgXHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsgICAgXHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XHJcbiAgICAudGV4dC0xLC50ZXh0LTIsIC50ZXh0LWNyb3B7XHJcbiAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMnB4IDRweCA2cHggdmFyKC0tdGhlbWUtY29sb3Itd2hpdGUpKTtcclxuICAgIH1cclxuICB9XHJcbiAgICBcclxuXHJcbiAgLnRleHQtY3JvcHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuXHJcbiAgICB0ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICBcclxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuXHJcbiAgICAmOjphZnRlcntcclxuICAgICAgY29udGVudDogbm9uZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIFxyXG4gIC50ZXh0LTEge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIG1peC1ibGVuZC1tb2RlOiBzY3JlZW47XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMDBweDtcclxuICB9XHJcblxyXG4gIC50ZXh0LTJ7XHJcbiAgICBjb2xvcjogdmFyKC0tdGhlbWUtY29sb3Itd2hpdGUpO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4iXX0= */"] });


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