(()=>{"use strict";var e={};function t(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",r),e.addEventListener("click",o)}function n(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",r),e.removeEventListener("click",o)}function r(e){"Escape"===e.key&&n(document.querySelector(".popup_is-opened"))}function o(e){var t=e.target.closest(".popup");e.target===t&&n(t)}function c(e,t,n,r,o,c,i,u){var l=n.cloneNode(!0),s=l.querySelector(".card__image"),d=l.querySelector(".card__title"),p=l.querySelector(".card__like-counter"),f=l.querySelector(".card__delete-button"),m=l.querySelector(".card__like-button");return s.src=e.link,s.alt=e.name,d.textContent=e.name,a(e,p),function(e,t,n){e.some((function(e){return e._id===t}))&&n.classList.add("card__like-button_is-active")}(e.likes,t,m),function(e,t,n,r,o){t===e.owner._id?(r.style.display="block",r.addEventListener("click",(function(){o(e._id,n)}))):r.remove()}(e,t,l,f,i),s.addEventListener("click",(function(){c(e.link,e.name)})),m.addEventListener("click",(function(){var n=m.classList.contains("card__like-button_is-active")?o:r;!function(e,t,n,r,o){r(e).then((function(e){var r=e.likes.some((function(e){return e._id===o}));t.classList.toggle("card__like-button_is-active",r),a(e,n)})).catch((function(e){console.error(e)}))}(e._id,m,p,n,t)})),l}function a(e,t){t.textContent=e.likes.length,t.classList.toggle("card__like-counter_is-active",e.likes.length>0)}e.p="";var i=function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n),o.classList.remove(r),o.textContent=""},u=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove(n)):(t.disabled=!0,t.classList.add(n))},l=function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector));e.querySelector(t.submitButtonSelector).classList.add(t.inactiveButtonClass),n.forEach((function(n){i(e,n,t.inputErrorClass,t.errorClass)}))},s={baseUrl:"https://nomoreparties.co/v1/wff-cohort-8",headers:{authorization:"d7287e75-1c82-476e-9556-0f39d2e9b17b","Content-Type":"application/json"}},d=function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))},p=function(e){return fetch("".concat(s.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:s.headers}).then(d)},f=function(e){return fetch("".concat(s.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:s.headers}).then(d)},m=function(e){return fetch("".concat(s.baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:s.headers}).then(d)};function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}e.p,e.p,e.p,e.p;var v,y,h,b=document.querySelector(".profile__title"),S=document.querySelector(".profile__description"),k=document.querySelector(".profile__image"),q=document.forms["edit-profile"],E=q.querySelector(".popup__button"),L=document.querySelector(".popup_type_edit"),g=document.querySelector(".profile__edit-button"),C=document.forms["new-place"],A=C.querySelector(".popup__button"),x=document.querySelector(".popup_type_new-card"),U=document.querySelector(".profile__add-button"),w=document.forms["edit-avatar"],j=w.querySelector(".popup__button"),O=document.querySelector(".popup_type_avatar"),T=document.forms["delete-card"],D=document.querySelector(".popup_type_delete-card"),B=G(L),P=G(x),I=G(O),M=document.querySelector(".places__list"),N=document.querySelector("#card-template").content.querySelector(".places__item"),J=document.querySelector(".popup_type_image"),V=J.querySelector(".popup__image"),H=J.querySelector(".popup__caption"),z=function(e){var t=e.name,n=e.about,r=e.avatar;b.textContent=t,S.textContent=n,k.style.backgroundImage="url(".concat(r,")")},$={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},F=function(e,t){t.textContent=e?"Сохранение...":"Сохранить"};function G(e){return e.querySelector(".popup__form")}document.querySelectorAll(".popup__close").forEach((function(e){e.addEventListener("click",(function(){return n(e.closest(".popup"))}))}));var K=function(){q.elements.name.value=b.textContent,q.elements.description.value=S.textContent,w.link.value=k.style.backgroundImage.slice(5,-2)};function Q(e,n){V.src=e,V.alt=n,H.textContent=n,t(J)}function R(e,n){t(D),y=e,h=n}g.addEventListener("click",(function(){K(),l(B,$),t(L)})),B.addEventListener("submit",(function(e){var t;e.preventDefault(),F(!0,E),(t={name:q.elements.name.value,about:q.elements.description.value},fetch("".concat(s.baseUrl,"/users/me"),{method:"PATCH",headers:s.headers,body:JSON.stringify({name:t.name,about:t.about})}).then(d)).then((function(e){z(e),n(L)})).catch((function(e){console.log(e)})).finally((function(){F(!1,E)}))})),k.addEventListener("click",(function(){K(),l(I,$),t(O)})),I.addEventListener("submit",(function(e){var t;e.preventDefault(),F(!0,j),(t=w.link.value,fetch("".concat(s.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:s.headers,body:JSON.stringify({avatar:t})}).then(d)).then((function(e){z(e),n(O)})).catch((function(e){console.log(e)})).finally((function(){F(!1,j)}))})),U.addEventListener("click",(function(){C.reset(),l(P,$),t(x)})),P.addEventListener("submit",(function(e){var t,r,o;e.preventDefault(),F(!0,A),(t={name:C.elements["place-name"].value,link:C.elements.link.value},r=t.name,o=t.link,fetch("".concat(s.baseUrl,"/cards"),{method:"POST",headers:s.headers,body:JSON.stringify({name:r,link:o})}).then(d)).then((function(e){M.prepend(c(e,v,N,f,m,Q,R)),C.reset(),n(x)})).catch((function(e){console.log(e)})).finally((function(){F(!1,A)}))})),T.addEventListener("submit",(function(e){e.preventDefault(),function(e,t,n,r,o){n(e).then((function(){t.remove(),r(o)})).catch((function(e){console.error(e)}))}(y,h,p,n,D)})),Promise.all([fetch("".concat(s.baseUrl,"/users/me"),{headers:s.headers}).then(d),fetch("".concat(s.baseUrl,"/cards"),{headers:s.headers}).then(d)]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,a,i=[],u=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=c.call(n)).done)&&(i.push(r.value),i.length!==t);u=!0);}catch(e){l=!0,o=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return _(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],a=r[1];z(o),v=o._id,function(e,t,n){n.forEach((function(n){e.append(c(n,t,N,f,m,Q,R))}))}(M,o._id,a)})).catch((function(e){console.log(e)})),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){t.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t,n,r,o,c){var a=Array.from(e.querySelectorAll(t)),l=e.querySelector(n);u(a,l,r),a.forEach((function(t){t.addEventListener("input",(function(){!function(e,t,n,r){t.setCustomValidity(""),t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?i(e,t,n,r):function(e,t,n,r,o){var c=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r),c.textContent=n,c.classList.add(o)}(e,t,t.validationMessage,n,r)}(e,t,o,c),u(a,l,r)}))}))}(t,e.inputSelector,e.submitButtonSelector,e.inactiveButtonClass,e.inputErrorClass,e.errorClass)}))}($)})();