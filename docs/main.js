(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\habdul\Source\Haseeb\Projects\Interactive-Comments-Section\src\main.ts */"zUnb");


/***/ }),

/***/ "2wdl":
/*!****************************************************************!*\
  !*** ./src/app/comments-section/comments-section.component.ts ***!
  \****************************************************************/
/*! exports provided: CommentsSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsSectionComponent", function() { return CommentsSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _comments_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../comments.service */ "matb");
/* harmony import */ var _components_modal_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/modal/modal.service */ "7oEI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/modal/modal.component */ "7aL3");
/* harmony import */ var _components_form_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/form/form.component */ "x83m");
/* harmony import */ var _components_card_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/card/card.component */ "lXt9");







function CommentsSectionComponent_ng_container_0_div_1_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "app-card", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("update", function CommentsSectionComponent_ng_container_0_div_1_div_2_div_1_Template_app_card_update_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](4); return ctx_r6.updateComment($event); })("delete", function CommentsSectionComponent_ng_container_0_div_1_div_2_div_1_Template_app_card_delete_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](4); return ctx_r8.onDeleteComment($event); })("vote", function CommentsSectionComponent_ng_container_0_div_1_div_2_div_1_Template_app_card_vote_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r7); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](4); return ctx_r9.updateScore($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const reply_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("comment", reply_r5)("currentUser", ctx_r4.currentUser);
} }
function CommentsSectionComponent_ng_container_0_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, CommentsSectionComponent_ng_container_0_div_1_div_2_div_1_Template, 2, 2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const comment_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", comment_r2.replies);
} }
function CommentsSectionComponent_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "app-card", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("update", function CommentsSectionComponent_ng_container_0_div_1_Template_app_card_update_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r11.updateComment($event); })("delete", function CommentsSectionComponent_ng_container_0_div_1_Template_app_card_delete_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r13.onDeleteComment($event); })("vote", function CommentsSectionComponent_ng_container_0_div_1_Template_app_card_vote_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r12); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r14.updateScore($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, CommentsSectionComponent_ng_container_0_div_1_div_2_Template, 2, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const comment_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("comment", comment_r2)("currentUser", ctx_r1.currentUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", comment_r2.replies.length > 0);
} }
function CommentsSectionComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, CommentsSectionComponent_ng_container_0_div_1_Template, 3, 3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "app-form", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("add", function CommentsSectionComponent_ng_container_0_Template_app_form_add_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r15.addComment($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r0.comments);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("currentUser", ctx_r0.currentUser);
} }
class CommentsSectionComponent {
    constructor(commentService, modalService) {
        this.commentService = commentService;
        this.modalService = modalService;
    }
    ngOnInit() {
        this.currentUser = this.commentService.getUser();
        this.getAllComments();
    }
    getAllComments() {
        this.comments = this.commentService.getComments();
        console.log(this.comments);
    }
    addComment(newComment) {
        this.comments = this.commentService.addComment(newComment);
    }
    updateComment(comment) {
        this.commentService.updateComment(comment);
    }
    onDeleteComment(comment) {
        this.commentToDelete = comment;
        this.modalService.open('deleteModal');
    }
    deleteComment() {
        this.comments = this.commentService.deleteComment(this.commentToDelete);
        this.onCancel();
    }
    onCancel() {
        this.modalService.close('deleteModal');
    }
    updateScore(comment) {
        this.updateComment(comment);
    }
}
CommentsSectionComponent.??fac = function CommentsSectionComponent_Factory(t) { return new (t || CommentsSectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_comments_service__WEBPACK_IMPORTED_MODULE_1__["CommentsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_components_modal_modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"])); };
CommentsSectionComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: CommentsSectionComponent, selectors: [["app-comments-section"]], decls: 11, vars: 1, consts: [[4, "ngIf"], ["id", "deleteModal"], [1, "fw-500", "modal-title"], [1, "modal-context"], [1, "update__btns", "d-flex"], [1, "btn", "bg-grayish-blue", "btn-secondary-fill", 3, "click"], [1, "btn", "bg-soft-red", "btn-delete-fill", 3, "click"], ["class", "comments", 4, "ngFor", "ngForOf"], [3, "currentUser", "add"], [1, "comments"], [3, "comment", "currentUser", "update", "delete", "vote"], ["class", "replies", 4, "ngIf"], [1, "replies"], [4, "ngFor", "ngForOf"]], template: function CommentsSectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, CommentsSectionComponent_ng_container_0_Template, 3, 2, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "modal", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Delete comment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Are you sure you want to delete this comment? This will remove the comment and can't be undone.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CommentsSectionComponent_Template_button_click_7_listener() { return ctx.onCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "NO, CANCEL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CommentsSectionComponent_Template_button_click_9_listener() { return ctx.deleteComment(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "YES, DELETE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.comments);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_4__["ModalComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _components_form_form_component__WEBPACK_IMPORTED_MODULE_5__["FormComponent"], _components_card_card_component__WEBPACK_IMPORTED_MODULE_6__["CardComponent"]], styles: [".replies[_ngcontent-%COMP%] {\n  margin-left: 0;\n  border-left: 2px solid #B22222;\n  padding-left: 1rem;\n}\n@media screen and (min-width: 780px) {\n  .replies[_ngcontent-%COMP%] {\n    margin-left: 2.6875rem;\n    padding-left: 2.7rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNvbW1lbnRzLXNlY3Rpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsOEJBQUE7RUFFQSxrQkFBQTtBQUFKO0FBRUk7RUFOSjtJQU9RLHNCQUFBO0lBQ0Esb0JBQUE7RUFDTjtBQUNGIiwiZmlsZSI6ImNvbW1lbnRzLXNlY3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVwbGllcyB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjQjIyMjIyO1xuICAgIDtcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3ODBweCkge1xuICAgICAgICBtYXJnaW4tbGVmdDogMi42ODc1cmVtO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIuN3JlbTtcbiAgICB9XG59Il19 */"] });


/***/ }),

/***/ "7aL3":
/*!*****************************************************!*\
  !*** ./src/app/components/modal/modal.component.ts ***!
  \*****************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal.service */ "7oEI");


const _c0 = ["*"];
class ModalComponent {
    constructor(modalService, elementRef) {
        this.modalService = modalService;
        this.elementRef = elementRef;
        this.element = elementRef.nativeElement;
    }
    ngOnInit() {
        // ensure id attribute exists
        if (!this.id) {
            console.error('modal must have an id');
            return;
        }
        document.body.appendChild(this.element);
        this.element.addEventListener('click', elementRef => {
            if (elementRef.target.className == 'modal') {
                this.close();
            }
        });
        this.modalService.add(this);
    }
    ngOnDestroy() {
        this.modalService.remove(this.id);
        this.element.remove();
    }
    open() {
        this.element.style.display = 'block';
        document.body.classList.add('modal-open');
    }
    close() {
        this.element.style.display = 'none';
        document.body.classList.remove('modal-open');
    }
}
ModalComponent.??fac = function ModalComponent_Factory(t) { return new (t || ModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_modal_service__WEBPACK_IMPORTED_MODULE_1__["ModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
ModalComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ModalComponent, selectors: [["modal"]], inputs: { id: "id" }, ngContentSelectors: _c0, decls: 4, vars: 0, consts: [[1, "modal"], [1, "modal-body"], [1, "modal-background"]], template: function ModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????projectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????projection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "div", 2);
    } }, styles: ["modal {\n  /* modals are hidden by default */\n  display: none;\n}\nmodal .modal {\n  /* modal container fixed across whole screen */\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: grid;\n  place-items: center;\n  padding: 0 1rem;\n  /* z-index must be higher than .jw-modal-background */\n  z-index: 1000;\n  /* enables scrolling for tall modals */\n  overflow: auto;\n}\nmodal .modal .modal-body {\n  padding: 2rem;\n  background: #fff;\n  max-width: 30rem;\n  border-radius: 8px;\n}\nmodal .modal .modal-body .modal-title {\n  font-size: 1.25rem;\n}\nmodal .modal .modal-body .modal-context {\n  margin: 20px 0;\n  line-height: 24px;\n}\nmodal .modal-background {\n  /* modal background fixed across whole screen */\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  /* semi-transparent black  */\n  background-color: #000;\n  opacity: 0.5;\n  /* z-index must be below .jw-modal and above everything else  */\n  z-index: 900;\n}\nbody.modal-open {\n  /* body overflow is hidden to hide main scrollbar when modal window is open */\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlDQUFBO0VBQ0EsYUFBQTtBQUNKO0FBQ0k7RUFDSSw4Q0FBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHFEQUFBO0VBQ0EsYUFBQTtFQUVBLHNDQUFBO0VBQ0EsY0FBQTtBQUFSO0FBRVE7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQVo7QUFFWTtFQUNJLGtCQUFBO0FBQWhCO0FBR1k7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7QUFEaEI7QUFNSTtFQUNJLCtDQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFFQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUVBLCtEQUFBO0VBQ0EsWUFBQTtBQU5SO0FBVUE7RUFDSSw2RUFBQTtFQUNBLGdCQUFBO0FBUEoiLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtb2RhbCB7XG4gICAgLyogbW9kYWxzIGFyZSBoaWRkZW4gYnkgZGVmYXVsdCAqL1xuICAgIGRpc3BsYXk6IG5vbmU7XG5cbiAgICAubW9kYWwge1xuICAgICAgICAvKiBtb2RhbCBjb250YWluZXIgZml4ZWQgYWNyb3NzIHdob2xlIHNjcmVlbiAqL1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMCAxcmVtO1xuICAgICAgICAvKiB6LWluZGV4IG11c3QgYmUgaGlnaGVyIHRoYW4gLmp3LW1vZGFsLWJhY2tncm91bmQgKi9cbiAgICAgICAgei1pbmRleDogMTAwMDtcblxuICAgICAgICAvKiBlbmFibGVzIHNjcm9sbGluZyBmb3IgdGFsbCBtb2RhbHMgKi9cbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG5cbiAgICAgICAgLm1vZGFsLWJvZHkge1xuICAgICAgICAgICAgcGFkZGluZzogMnJlbTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDMwcmVtO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuXG4gICAgICAgICAgICAubW9kYWwtdGl0bGUge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm1vZGFsLWNvbnRleHQge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMjBweCAwO1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLm1vZGFsLWJhY2tncm91bmQge1xuICAgICAgICAvKiBtb2RhbCBiYWNrZ3JvdW5kIGZpeGVkIGFjcm9zcyB3aG9sZSBzY3JlZW4gKi9cbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGxlZnQ6IDA7XG5cbiAgICAgICAgLyogc2VtaS10cmFuc3BhcmVudCBibGFjayAgKi9cbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgICAgICAgb3BhY2l0eTogMC41MDtcblxuICAgICAgICAvKiB6LWluZGV4IG11c3QgYmUgYmVsb3cgLmp3LW1vZGFsIGFuZCBhYm92ZSBldmVyeXRoaW5nIGVsc2UgICovXG4gICAgICAgIHotaW5kZXg6IDkwMDtcbiAgICB9XG59XG5cbmJvZHkubW9kYWwtb3BlbiB7XG4gICAgLyogYm9keSBvdmVyZmxvdyBpcyBoaWRkZW4gdG8gaGlkZSBtYWluIHNjcm9sbGJhciB3aGVuIG1vZGFsIHdpbmRvdyBpcyBvcGVuICovXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn0iXX0= */"], encapsulation: 2 });


/***/ }),

/***/ "7oEI":
/*!***************************************************!*\
  !*** ./src/app/components/modal/modal.service.ts ***!
  \***************************************************/
/*! exports provided: ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ModalService {
    constructor() {
        this.modals = [];
    }
    add(modal) {
        // add modal to array of active modals
        this.modals.push(modal);
    }
    remove(id) {
        // remove modal from array of active modals
        this.modals = this.modals.filter(x => x.id !== id);
    }
    open(id) {
        // open modal specified by id
        const modal = this.modals.find(x => x.id === id);
        modal.open();
    }
    close(id) {
        // close modal specified by id
        const modal = this.modals.find(x => x.id === id);
        modal.close();
    }
}
ModalService.??fac = function ModalService_Factory(t) { return new (t || ModalService)(); };
ModalService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: ModalService, factory: ModalService.??fac, providedIn: 'root' });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: false
};


/***/ }),

/***/ "Kkxo":
/*!*****************************************************************!*\
  !*** ./src/app/components/vote-button/vote-button.component.ts ***!
  \*****************************************************************/
/*! exports provided: VoteButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoteButtonComponent", function() { return VoteButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class VoteButtonComponent {
    constructor() {
        this.voted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    voteUp() {
        this.countVote('up');
        this.voteCount.push(this.vote);
        this.countVote('up');
        this.voted.emit(this.vote);
    }
    voteDown() {
        this.countVote('down');
        this.voteCount.push(this.vote);
        this.countVote('down');
        this.voted.emit(this.vote);
    }
    countVote(vote) {
        if (vote === 'up') {
            this.vote++;
        }
        else {
            this.vote--;
        }
    }
}
VoteButtonComponent.??fac = function VoteButtonComponent_Factory(t) { return new (t || VoteButtonComponent)(); };
VoteButtonComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: VoteButtonComponent, selectors: [["app-vote-button"]], inputs: { vote: "vote", comment: "comment", currentUser: "currentUser" }, outputs: { voted: "voted" }, decls: 7, vars: 1, consts: [[1, "btn__votes"], [1, "upvote", "text-light-grayish-blue", 3, "click"], [1, "fa-solid", "fa-plus"], [1, "text-blue", "fw-500"], [1, "downvote", "text-light-grayish-blue", 3, "click"], [1, "fa-solid", "fa-minus"]], template: function VoteButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function VoteButtonComponent_Template_a_click_1_listener() { return ctx.voteUp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function VoteButtonComponent_Template_a_click_5_listener() { return ctx.voteDown(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.vote);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2b3RlLWJ1dHRvbi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "MAUC":
/*!*************************************************!*\
  !*** ./src/app/helper/pipe/time-passed.pipe.ts ***!
  \*************************************************/
/*! exports provided: TimePassed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimePassed", function() { return TimePassed; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class TimePassed {
    transform(time) {
        let createdAt = new Date(time);
        let getMs = (new Date().getTime() - createdAt.getTime()) / 1000;
        let ago = "";
        // with less than 1 minute return 1m
        if (getMs < 60) {
            ago = "sec ago";
            // with less than 1 hour return mins
        }
        else if (getMs < 3600 && getMs > 60) {
            ago = Math.floor(getMs / 60) + " min ago";
            // with less than 1 day return hour 
        }
        else if (getMs < 86400 && getMs > 3600) {
            ago = Math.floor(getMs / 3600) + " hour ago";
        }
        // with less than 1 week  return day
        else if (getMs < 604800 && getMs > 86400) {
            ago = Math.floor(getMs / 86400) + " day ago";
        }
        // with less than 1 month return weeks
        else if (getMs < 2419200 && getMs > 604800) {
            ago = Math.floor(getMs / 604800) + " weeks ago";
        }
        // with less than 1 year return month
        else if (getMs < 31104000 && getMs > 2419200) {
            ago = Math.floor(getMs / 2419200) + " month ago";
        }
        // with more than 1 year return year
        else {
            ago = Math.floor(getMs / 3.154e7) + " year ago";
        }
        return ago;
    }
}
TimePassed.??fac = function TimePassed_Factory(t) { return new (t || TimePassed)(); };
TimePassed.??pipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????definePipe"]({ name: "getPassedTime", type: TimePassed, pure: true });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _comments_section_comments_section_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comments-section/comments-section.component */ "2wdl");


class AppComponent {
    constructor() {
        this.title = 'InteractiveCommentsSection';
    }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[1, "container"], [1, "header"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, " Interactive Comment Section ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "app-comments-section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_comments_section_comments_section_component__WEBPACK_IMPORTED_MODULE_1__["CommentsSectionComponent"]], styles: [".header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 50px;\n  color: #B22222;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFDSiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgIGNvbG9yOiNCMjIyMjI7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/components.module */ "j1ZV");
/* harmony import */ var _comments_section_comments_section_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comments-section/comments-section.component */ "2wdl");
/* harmony import */ var _comments_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comments.service */ "matb");
/* harmony import */ var ngx_timeago__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-timeago */ "twue");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








class AppModule {
}
AppModule.??fac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????defineInjector"]({ providers: [
        _comments_service__WEBPACK_IMPORTED_MODULE_4__["CommentsService"],
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__["ComponentsModule"],
            ngx_timeago__WEBPACK_IMPORTED_MODULE_5__["TimeagoModule"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
        _comments_section_comments_section_component__WEBPACK_IMPORTED_MODULE_3__["CommentsSectionComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _components_components_module__WEBPACK_IMPORTED_MODULE_2__["ComponentsModule"], ngx_timeago__WEBPACK_IMPORTED_MODULE_5__["TimeagoModule"]] }); })();


/***/ }),

/***/ "j0EZ":
/*!***********************************!*\
  !*** ./src/assets/json/data.json ***!
  \***********************************/
/*! exports provided: currentUser, comments, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"currentUser\":{\"image\":{\"png\":\"./assets/images/avatars/yoda.png\"},\"username\":\"yoda\"},\"comments\":[{\"id\":1,\"content\":\"Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.\",\"createdAt\":\"2022-04-10T13:49:51.141Z\",\"score\":12,\"user\":{\"image\":{\"png\":\"./assets/images/avatars/leiaskywalker.png\"},\"username\":\"leiaskywalker\"},\"replies\":[]},{\"id\":2,\"content\":\"Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into Angular as well soon. Perhaps you can give me an insight on where I can learn Angular? Thanks!\",\"createdAt\":\"2022-05-14T13:49:51.141Z\",\"score\":5,\"user\":{\"image\":{\"png\":\"./assets/images/avatars/lukeskywalker.png\"},\"username\":\"lukeskywalker\"},\"replies\":[{\"id\":3,\"content\":\"If you're looking to kick start your career, search no further. React is all you need. Welcome to the Dark Side.\",\"createdAt\":\"2022-06-01T13:49:51.141Z\",\"score\":4,\"replyingTo\":\"lukeskywalker\",\"user\":{\"image\":{\"png\":\"./assets/images/avatars/vader.png\"},\"username\":\"vader\"}},{\"id\":4,\"content\":\"Chillax, my Padawans. Much to learn, you have. The fundamentals of HTML, CSS, and JS,  I'd recommend focusing on. It's very tempting to jump ahead but lay a solid foundation first. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stays constant.\",\"createdAt\":\"2022-06-02T13:49:51.141Z\",\"score\":2,\"replyingTo\":\"vader\",\"user\":{\"image\":{\"png\":\"./assets/images/avatars/yoda.png\"},\"username\":\"yoda\"}}]}]}");

/***/ }),

/***/ "j1ZV":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card/card.component */ "lXt9");
/* harmony import */ var _vote_button_vote_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vote-button/vote-button.component */ "Kkxo");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form/form.component */ "x83m");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _helper_pipe_time_passed_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helper/pipe/time-passed.pipe */ "MAUC");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal/modal.component */ "7aL3");
/* harmony import */ var ngx_timeago__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-timeago */ "twue");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");









class ComponentsModule {
}
ComponentsModule.??fac = function ComponentsModule_Factory(t) { return new (t || ComponentsModule)(); };
ComponentsModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["????defineNgModule"]({ type: ComponentsModule });
ComponentsModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["????defineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            ngx_timeago__WEBPACK_IMPORTED_MODULE_7__["TimeagoModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["????setNgModuleScope"](ComponentsModule, { declarations: [_card_card_component__WEBPACK_IMPORTED_MODULE_1__["CardComponent"],
        _vote_button_vote_button_component__WEBPACK_IMPORTED_MODULE_2__["VoteButtonComponent"],
        _form_form_component__WEBPACK_IMPORTED_MODULE_3__["FormComponent"],
        _helper_pipe_time_passed_pipe__WEBPACK_IMPORTED_MODULE_5__["TimePassed"],
        _modal_modal_component__WEBPACK_IMPORTED_MODULE_6__["ModalComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        ngx_timeago__WEBPACK_IMPORTED_MODULE_7__["TimeagoModule"]], exports: [_card_card_component__WEBPACK_IMPORTED_MODULE_1__["CardComponent"],
        _vote_button_vote_button_component__WEBPACK_IMPORTED_MODULE_2__["VoteButtonComponent"],
        _form_form_component__WEBPACK_IMPORTED_MODULE_3__["FormComponent"],
        _modal_modal_component__WEBPACK_IMPORTED_MODULE_6__["ModalComponent"]] }); })();


/***/ }),

/***/ "lXt9":
/*!***************************************************!*\
  !*** ./src/app/components/card/card.component.ts ***!
  \***************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _vote_button_vote_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vote-button/vote-button.component */ "Kkxo");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../form/form.component */ "x83m");
/* harmony import */ var ngx_timeago__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-timeago */ "twue");







function CardComponent_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "YOU");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function CardComponent_a_14_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CardComponent_a_14_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r7.onReply(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Reply");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function CardComponent_ng_template_15_a_4_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CardComponent_ng_template_15_a_4_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r10.onEdit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, " Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function CardComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CardComponent_ng_template_15_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r12.onDelete(ctx_r12.comment); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, CardComponent_ng_template_15_a_4_Template, 3, 0, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r3.onEditMode);
} }
function CardComponent_p_17_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("@", ctx_r14.comment.replyingTo, "");
} }
function CardComponent_p_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, CardComponent_p_17_span_1_Template, 2, 1, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r4.comment.replyingTo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r4.comment.content, " ");
} }
function CardComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "textarea", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function CardComponent_div_18_Template_textarea_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r15.commentToUpdate = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CardComponent_div_18_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r17.onCancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CardComponent_div_18_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r16); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r18.updateComment(ctx_r18.comment); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r5.commentToUpdate);
} }
function CardComponent_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "app-form", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("onReplyMode", function CardComponent_ng_container_19_Template_app_form_onReplyMode_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r19.onReply($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("currentUser", ctx_r6.currentUser)("replyingTo", ctx_r6.comment);
} }
class CardComponent {
    constructor() {
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.vote = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.commentToUpdate = "";
        this.onEditMode = false;
        this.showForm = false;
    }
    ngOnInit() {
        this.commentToUpdate = this.comment.content;
    }
    onDelete(comment) {
        this.delete.emit(comment);
    }
    onEdit() {
        this.onEditMode = !this.onEditMode;
    }
    onCancel() {
        this.commentToUpdate = this.comment.content;
        this.onEditMode = false;
    }
    updateComment(comment) {
        if (this.commentToUpdate == "" || this.commentToUpdate == undefined) {
            return;
        }
        comment.content = this.commentToUpdate.trim();
        this.update.emit(comment);
        this.onEditMode = false;
    }
    onVote(vote) {
        this.comment.score = vote;
        this.vote.emit(this.comment);
    }
    onReply(e) {
        this.showForm = !this.showForm;
    }
    ngOnDestroy() {
        clearInterval();
    }
}
CardComponent.??fac = function CardComponent_Factory(t) { return new (t || CardComponent)(); };
CardComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: CardComponent, selectors: [["app-card"]], inputs: { comment: "comment", currentUser: "currentUser" }, outputs: { update: "update", delete: "delete", vote: "vote" }, decls: 20, vars: 13, consts: [[1, "card", "bg-white", "d-flex"], [1, "card__vote"], [3, "vote", "currentUser", "voted"], [1, "card__content"], [1, "card__header", "d-flex"], [1, "card__image"], ["alt", "comment.user.username", 3, "src"], [1, "card__name", "text-dark-blue", "fw-500"], ["class", "bg-blue text-white you", 4, "ngIf"], [1, "card__buttons"], ["class", "btn-reply text-blue fw-500", 3, "click", 4, "ngIf", "ngIfElse"], ["editDeleteBtns", ""], ["class", "card__text", 4, "ngIf"], [4, "ngIf"], [1, "bg-blue", "text-white", "you"], [1, "btn-reply", "text-blue", "fw-500", 3, "click"], [1, "fa-solid", "fa-reply"], [1, "btn-edit-delete"], [1, "btn-delete", "text-soft-red", "fw-500", 3, "click"], [1, "fa-solid", "fa-trash"], ["class", "btn-edit text-blue fw-500", 3, "click", 4, "ngIf"], [1, "btn-edit", "text-blue", "fw-500", 3, "click"], [1, "fa-solid", "fa-pen"], [1, "card__text"], ["class", "text-blue fw-500", 4, "ngIf"], [1, "text-blue", "fw-500"], [1, "reply__form"], ["placeholder", "Type a comment here...", "name", "reply", "id", "reply", "cols", "100", "rows", "10", 1, "text-area", "text-grayish-blue", "ff-rubik", "text-area--comment", 3, "ngModel", "ngModelChange"], [1, "update__btns"], [1, "btn", "btn-outline--primary", 3, "click"], [1, "btn", "bg-blue", 3, "click"], [3, "currentUser", "replyingTo", "onReplyMode"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "app-vote-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("voted", function CardComponent_Template_app_vote_button_voted_2_listener($event) { return ctx.onVote($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, CardComponent_p_9_Template, 2, 0, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](12, "timeago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, CardComponent_a_14_Template, 4, 0, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, CardComponent_ng_template_15_Template, 5, 1, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](17, CardComponent_p_17_Template, 3, 2, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](18, CardComponent_div_18_Template, 8, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](19, CardComponent_ng_container_19_Template, 2, 2, "ng-container", 13);
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("vote", ctx.comment.score)("currentUser", ctx.currentUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", ctx.comment.user.image.png, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.comment.user.username, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.comment.user.username === ctx.currentUser.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](12, 11, ctx.comment.createdAt));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.comment.user.username !== ctx.currentUser.username)("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.onEditMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.onEditMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.showForm);
    } }, directives: [_vote_button_vote_button_component__WEBPACK_IMPORTED_MODULE_1__["VoteButtonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _form_form_component__WEBPACK_IMPORTED_MODULE_4__["FormComponent"]], pipes: [ngx_timeago__WEBPACK_IMPORTED_MODULE_5__["TimeagoPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJkLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "matb":
/*!*************************************!*\
  !*** ./src/app/comments.service.ts ***!
  \*************************************/
/*! exports provided: CommentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsService", function() { return CommentsService; });
/* harmony import */ var _assets_json_data_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/json/data.json */ "j0EZ");
var _assets_json_data_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../assets/json/data.json */ "j0EZ", 1);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


const commentsStorageName = "comments";
const userStorageName = "user";
class CommentsService {
    constructor() {
        this.comments = JSON.parse(localStorage.getItem(commentsStorageName)) || _assets_json_data_json__WEBPACK_IMPORTED_MODULE_0__["comments"];
        this.user = JSON.parse(localStorage.getItem(userStorageName)) || _assets_json_data_json__WEBPACK_IMPORTED_MODULE_0__["currentUser"];
    }
    // get user
    getUser() {
        return this.user;
    }
    // get all comments
    getComments() {
        return [...this.comments];
    }
    // add a new comment
    addComment(newComment, id) {
        if (id) {
            let comment = this.findComment(id);
            let index = this.findCommentIndex(comment);
            this.comments[index].replies.push(newComment);
        }
        else {
            this.comments.push(newComment);
        }
        return this.updateStorage();
    }
    // update  comment
    updateComment(updatedComment) {
        let index = this.findCommentIndex(updatedComment);
        this.comments[index] = updatedComment;
        return this.updateStorage();
    }
    // delete comment
    deleteComment(newComment) {
        if (newComment.replyingTo) {
            let repliedToThisComment = this.findComment(newComment.comment_id);
            let index = this.findCommentIndex(repliedToThisComment);
            let insertComment = repliedToThisComment.replies.filter(reply => { return reply.id !== newComment.id; });
            repliedToThisComment.replies = insertComment;
            this.comments[index] = repliedToThisComment;
        }
        else {
            this.comments = this.comments.filter(comment => { return comment.id !== newComment.id; });
        }
        return this.updateStorage();
    }
    // update storage after operation
    updateStorage() {
        localStorage.setItem(commentsStorageName, JSON.stringify(this.comments));
        return this.getComments();
    }
    findCommentIndex(comment) {
        return this.comments.indexOf(comment);
    }
    findComment(id) {
        return this.comments.filter(comment => { return comment.id === id; })[0];
    }
}
CommentsService.??fac = function CommentsService_Factory(t) { return new (t || CommentsService)(); };
CommentsService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({ token: CommentsService, factory: CommentsService.??fac, providedIn: 'root' });


/***/ }),

/***/ "x83m":
/*!***************************************************!*\
  !*** ./src/app/components/form/form.component.ts ***!
  \***************************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_comments_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/comments.service */ "matb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




const _c0 = ["textarea"];
class FormComponent {
    constructor(commentService) {
        this.commentService = commentService;
        this.add = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onReplyMode = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        if (this.replyingTo) {
            this.comment = `@${this.replyingTo.user.username} `;
        }
    }
    ngAfterViewInit() {
        if (this.replyingTo) {
            this.textarea.nativeElement.focus();
        }
    }
    addComment() {
        if (this.comment === "" || this.comment == undefined) {
            return;
        }
        const prevalue = {
            id: Date.now(),
            content: this.comment.trim(),
            createdAt: new Date().toString(),
            user: this.currentUser,
            score: 0,
            vote: {
                score: 0,
            },
        };
        if (this.replyingTo) {
            let comment_id = this.replyingTo.comment_id ? this.replyingTo.comment_id : this.replyingTo.id;
            prevalue.content = this.comment.replace(`@${this.replyingTo.user.username} `, '');
            let reply = Object.assign(Object.assign({}, prevalue), { replyingTo: this.replyingTo.user.username, comment_id: comment_id });
            this.commentService.addComment(reply, comment_id);
            this.onReplyMode.emit(reply);
        }
        else {
            let newComment = Object.assign(Object.assign({}, prevalue), { replies: [] });
            this.add.emit(newComment);
        }
        this.comment = "";
    }
}
FormComponent.??fac = function FormComponent_Factory(t) { return new (t || FormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_comments_service__WEBPACK_IMPORTED_MODULE_1__["CommentsService"])); };
FormComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: FormComponent, selectors: [["app-form"]], viewQuery: function FormComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.textarea = _t.first);
    } }, inputs: { currentUser: "currentUser", replyingTo: "replyingTo" }, outputs: { add: "add", onReplyMode: "onReplyMode" }, decls: 9, vars: 4, consts: [[1, "reply", "d-grid", "bg-white"], [1, "reply__image"], [3, "src", "alt"], [1, "reply__form"], ["name", "reply", "id", "reply", "cols", "30", "rows", "10", 1, "text-area", "text-grayish-blue", "ff-rubik", 3, "placeholder", "ngModel", "ngModelChange"], ["textarea", ""], [1, "reply__btn"], [1, "btn", "bg-blue", 3, "click"]], template: function FormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "textarea", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function FormComponent_Template_textarea_ngModelChange_4_listener($event) { return ctx.comment = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function FormComponent_Template_button_click_7_listener() { return ctx.addComment(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "SEND");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", ctx.currentUser.image.png, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"])("alt", ctx.currentUser.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("placeholder", ctx.replyingTo ? "" : "Type a comment here...")("ngModel", ctx.comment);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map