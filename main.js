(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,n(o.key),o)}}function n(e){var n=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===t(n)?n:String(n)}var r=function(){function t(e){var r,o,i,u=this,a=e.data,c=e.templateSelector,s=e.handleCardClick,l=e.handleTrashClick,f=e.handleLikeButtonClick,p=e.handleDeleteLike,y=e.userId;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,i=function(){u._element.remove(),u._element=null},(o=n(o="deleteCard"))in r?Object.defineProperty(r,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[o]=i,this._title=a.name,this._image=a.link,this._id=a._id,this._likes=a.likes,this._owner=a.owner,this._ownerId=a.owner._id,this._userId=y,this._templateSelector=c,this._handleCardClick=s,this._handleTrashClick=l,this._handleLikeButtonClick=f,this._handleDeleteLike=p}var r,o;return r=t,(o=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".grid-places__item").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._likeButton=this._element.querySelector(".grid-places__like"),this._cardImage=this._element.querySelector(".grid-places__image"),this._trashBtn=this._element.querySelector(".grid-places__trash"),this._counter=this._element.querySelector(".grid-places__counter"),this._element.querySelector(".grid-places__text").textContent=this._title,this._counter.textContent="".concat(this._likes.length),this._cardImage.src=this._image,this._cardImage.alt=this._title,this._setEventListener(),this._likeClick(),this._removeTrashBtn(),this._element}},{key:"_likeClick",value:function(){this._hasLike()?this.putLike():this.deleteLike()}},{key:"_hasLike",value:function(){var t=this;return this._likes.find((function(e){return e._id===t._userId}))}},{key:"likeCount",value:function(t){this._counter.textContent="".concat(t.likes.length)}},{key:"putLike",value:function(){this._likeButton.classList.add("grid-places__like_active")}},{key:"deleteLike",value:function(){this._likeButton.classList.remove("grid-places__like_active")}},{key:"_removeTrashBtn",value:function(){this._ownerId!==this._userId&&this._trashBtn.remove()}},{key:"_setEventListener",value:function(){var t=this;this._likeButton.addEventListener("click",(function(){t._likeButton.classList.contains("grid-places__like_active")?t._handleDeleteLike():t._handleLikeButtonClick()})),this._trashBtn.addEventListener("click",(function(){t._handleTrashClick()})),this._cardImage.addEventListener("click",(function(){t._handleCardClick(t._title,t._image)}))}}])&&e(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),t}();function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,a(r.key),r)}}function u(t,e,n){return(e=a(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t){var e=function(t,e){if("object"!==o(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===o(e)?e:String(e)}var c=function(){function t(e,n){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),u(this,"_showInputError",(function(t,e){var n=r._formElement.querySelector("#".concat(t.id,"-error"));n.textContent=e,n.classList.add(r._errorClass)})),u(this,"_hideInputError",(function(t){var e=r._formElement.querySelector("#".concat(t.id,"-error"));e.textContent="",e.classList.remove(r._errorClass)})),u(this,"_checkInputValidity",(function(t){t.validity.valid?r._hideInputError(t):r._showInputError(t,t.validationMessage)})),this._formElement=n,this._errorClass=e.errorClass,this._inputSelector=e.inputSelector,this._inputErrorClass=e.inputErrorClass,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputList=Array.from(n.querySelectorAll(this._inputSelector)),this._errorList=Array.from(n.querySelectorAll(this._inputErrorClass)),this._buttonElement=n.querySelector(this._submitButtonSelector)}var e,n;return e=t,(n=[{key:"resetFormCondition",value:function(){var t=this;this._errorList.forEach((function(t){t.textContent=""})),this._inputList.forEach((function(e){e.classList.remove(t._errorClass)})),this._toggleButtonState()}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.disabled="disabled"):(this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.disabled="")}},{key:"_setEventListeners",value:function(){var t=this;this._toggleButtonState(),this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&i(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,f(r.key),r)}}function f(t){var e=function(t,e){if("object"!==s(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===s(e)?e:String(e)}var p=function(){function t(e,n){var r,o,i,u=this,a=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,i=function(t){t.forEach((function(t){u._renderer(t)}))},(o=f(o="renderItems"))in r?Object.defineProperty(r,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[o]=i,this._renderer=a,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"addItem",value:function(t){this._container.prepend(t)}}])&&l(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function h(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,v(r.key),r)}}function d(t,e,n){return(e=v(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function v(t){var e=function(t,e){if("object"!==y(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==y(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===y(e)?e:String(e)}var b=function(){function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),d(this,"setLoadText",(function(t){n._popupBtn.textContent=t})),d(this,"_handleEscClose",(function(t){"Escape"===t.key&&n.close()})),this._popup=document.querySelector(e),this._popupBtn=this._popup.querySelector(".popup__btn")}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var t=this;this._popup.addEventListener("mousedown",(function(e){(e.target.classList.contains("popup_opened")||e.target.classList.contains("popup__close-icon"))&&t.close()}))}}])&&h(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function _(t){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_(t)}function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==_(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==_(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===_(o)?o:String(o)),r)}var o}function g(){return g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=S(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},g.apply(this,arguments)}function S(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=C(t)););return t}function k(t,e){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},k(t,e)}function w(t,e){if(e&&("object"===_(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function C(t){return C=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},C(t)}var E=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&k(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=C(r);if(o){var n=C(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return w(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._handleFormSubmit=e,n._inputList=n._popup.querySelectorAll(".popup__input"),n._form=n._popup.querySelector(".form"),n}return e=u,(n=[{key:"close",value:function(){this._form.reset(),g(C(u.prototype),"close",this).call(this)}},{key:"_getInputValues",value:function(){var t={};return this._inputList.forEach((function(e){return t[e.name]=e.value})),t}},{key:"setEventListeners",value:function(){var t=this;g(C(u.prototype),"setEventListeners",this).call(this);var e=this._popupBtn.textContent;this._popupBtn.textContent="Сохранение...",this._form.addEventListener("submit",(function(n){n.preventDefault(),t._handleFormSubmit(t._getInputValues()).then((function(){return t.close()})).finally((function(){t._popupBtn.textContent=e}))}))}}])&&m(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(b);function j(t){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},j(t)}function O(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==j(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==j(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===j(o)?o:String(o)),r)}var o}function P(){return P="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=L(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},P.apply(this,arguments)}function L(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=B(t)););return t}function I(t,e){return I=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},I(t,e)}function T(t,e){if(e&&("object"===j(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function B(t){return B=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},B(t)}var R=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&I(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=B(r);if(o){var n=B(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return T(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._image=e._popup.querySelector(".popup__image"),e._title=e._popup.querySelector(".popup__image-caption"),e}return e=u,(n=[{key:"open",value:function(t,e){P(B(u.prototype),"open",this).call(this),this._image.src=e,this._image.alt=t,this._title.textContent=t}}])&&O(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(b);function q(t){return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},q(t)}function x(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==q(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==q(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===q(o)?o:String(o)),r)}var o}var U=function(){function t(e){var n=e.userNameInfo,r=e.aboutMeInfo,o=e.userAvatar;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._userNameInfo=document.querySelector(n),this._aboutMeInfo=document.querySelector(r),this._userAvatar=document.querySelector(o)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{userNameInfo:this._userNameInfo.textContent,aboutMeInfo:this._aboutMeInfo.textContent,userAvatar:this._userAvatar.src}}},{key:"setUserInfo",value:function(t){this._userNameInfo.textContent=t.name,this._aboutMeInfo.textContent=t.about,this.setUserAvatar(t)}},{key:"setUserAvatar",value:function(t){this._userAvatar.src=t.avatar}}])&&x(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function A(t){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},A(t)}function D(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==A(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==A(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===A(o)?o:String(o)),r)}var o}function N(){return N="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=z(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},N.apply(this,arguments)}function z(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=V(t)););return t}function F(t,e){return F=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},F(t,e)}function M(t,e){if(e&&("object"===A(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function V(t){return V=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},V(t)}var J=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&F(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=V(r);if(o){var n=V(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return M(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._btn=e._popup.querySelector(".popup__btn"),e}return e=u,(n=[{key:"setSubmitAction",value:function(t){this._handleFormSubmit=t}},{key:"setEventListeners",value:function(){var t=this;this._popup.addEventListener("submit",(function(e){e.preventDefault(),t._handleFormSubmit()})),N(V(u.prototype),"setEventListeners",this).call(this)}}])&&D(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(b);function H(t){return H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},H(t)}function G(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==H(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==H(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===H(o)?o:String(o)),r)}var o}var K,Q=new(function(){function t(e){var n=e.baseUrl,r=e.headers;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=n,this._headers=r.authorization}var e,n;return e=t,(n=[{key:"_checkResponse",value:function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}},{key:"getInitialCards",value:function(){return fetch(this._baseUrl+"/cards",{headers:{authorization:this._headers}}).then(this._checkResponse)}},{key:"getUsersData",value:function(){return fetch(this._baseUrl+"/users/me",{headers:{authorization:this._headers}}).then(this._checkResponse)}},{key:"setUsersData",value:function(t){return fetch(this._baseUrl+"/users/me",{method:"PATCH",body:JSON.stringify({name:t.username,about:t.aboutme}),headers:{authorization:this._headers,"Content-Type":"application/json"}}).then(this._checkResponse)}},{key:"deleteCards",value:function(t){return fetch(this._baseUrl+"/cards/"+t,{method:"DELETE",headers:{authorization:this._headers}}).then(this._checkResponse)}},{key:"setAvatar",value:function(t){return fetch(this._baseUrl+"/users/me/avatar",{method:"PATCH",body:JSON.stringify({avatar:t.avatar}),headers:{authorization:this._headers,"Content-Type":"application/json"}}).then(this._checkResponse)}},{key:"deleteLikeCards",value:function(t){return fetch(this._baseUrl+"/cards/"+t+"/likes",{method:"DELETE",headers:{authorization:this._headers}}).then(this._checkResponse)}},{key:"putLikeCards",value:function(t){return fetch(this._baseUrl+"/cards/"+t+"/likes",{method:"PUT",headers:{authorization:this._headers}}).then(this._checkResponse)}},{key:"createCard",value:function(t){return fetch(this._baseUrl+"/cards",{method:"POST",body:JSON.stringify({name:t.name,link:t.link}),headers:{authorization:this._headers,"Content-Type":"application/json"}}).then(this._checkResponse)}}])&&G(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-59",headers:{authorization:"e15929fa-973c-4224-8a02-043832be46fc","Content-Type":"application/json"}}),W={inputSelector:".popup__input",submitButtonSelector:".popup__btn",inactiveButtonClass:"popup__btn_inactive",inputErrorClass:".popup__error",errorClass:"popup__input_error"},X=document.querySelector(".profile__edit-button"),Y=document.querySelector(".popup__form-profile"),Z=document.querySelector(".popup__input_field_name"),$=document.querySelector(".popup__input_field_aboutme"),tt=document.querySelector(".profile__add-button"),et=document.querySelector(".popup__form-card"),nt=(document.querySelector(".grid-places"),document.querySelector(".profile__photo")),rt=document.querySelector(".popup__form-avatar"),ot=new U({userNameInfo:".profile__title",aboutMeInfo:".profile__subtitle",userAvatar:".profile__photo"});Promise.all([Q.getUsersData(),Q.getInitialCards()]).then((function(t){var e=t[0],n=t[1];K=e._id,ot.setUserInfo(e),yt.renderItems(n.reverse())})).catch((function(t){console.log(t)}));var it=new J(".popup_card-delite");it.setEventListeners(),X.addEventListener("click",(function(){st.open(),at.resetFormCondition();var t=ot.getUserInfo();Z.value=t.userNameInfo,$.value=t.aboutMeInfo})),tt.addEventListener("click",(function(){pt.open(),ut.resetFormCondition()})),nt.addEventListener("click",(function(){lt.open(),ct.resetFormCondition()}));var ut=new c(W,et);ut.enableValidation();var at=new c(W,Y);at.enableValidation();var ct=new c(W,rt);ct.enableValidation();var st=new E(".popup_profile",(function(t){return Q.setUsersData(t).then((function(t){ot.setUserInfo(t)})).catch((function(t){console.log(t)}))}));st.setEventListeners();var lt=new E(".popup_avatar-edit",(function(t){return ct.resetFormCondition(),Q.setAvatar(t).then((function(t){ot.setUserAvatar(t),lt.close()})).catch((function(t){console.log(t)}))}));lt.setEventListeners();var ft=new R(".popup_picture");ft.setEventListeners();var pt=new E(".popup_card",(function(t){return ut.resetFormCondition(),Q.createCard(t).then((function(t){var e=[t];yt.renderItems(e)})).catch((function(t){console.log(t)}))}));pt.setEventListeners();var yt=new p({renderer:function(t){yt.addItem(function(t){var e=new r({userId:K,data:t,templateSelector:"#card-template",handleCardClick:function(){ft.open(t.name,t.link)},handleTrashClick:function(){it.open(),it.setSubmitAction((function(){Q.deleteCards(t._id).then((function(t){e.deleteCard(t),it.close()})).then(it.setLoadText("Удаление...")).catch((function(t){console.log(t)})).finally((function(){it.setLoadText("Да")}))}))},handleLikeButtonClick:function(){Q.putLikeCards(t._id).then((function(t){e.putLike(),e.likeCount(t)})).catch((function(t){console.log(t)}))},handleDeleteLike:function(){Q.deleteLikeCards(t._id).then((function(n){e.deleteLike(t._id),e.likeCount(n)})).catch((function(t){console.log(t)}))}});return e.generateCard()}(t))}},".grid-places")})();