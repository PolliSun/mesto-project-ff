(()=>{"use strict";function e(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",n),e.addEventListener("click",r)}function t(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",n),e.removeEventListener("click",r)}function n(e){"Escape"===e.key&&t(document.querySelector(".popup_is-opened"))}function r(e){var n=e.target.closest(".popup");e.target===n&&t(n)}function o(e,t,n,r,o,i,a,u){var l=n.cloneNode(!0),s=l.querySelector(".card__image"),d=l.querySelector(".card__title"),f=l.querySelector(".card__like-counter"),p=l.querySelector(".card__delete-button"),m=l.querySelector(".card__like-button");return s.src=e.link,s.alt=e.name,d.textContent=e.name,c(e,f),function(e,t,n){e.some((function(e){return e._id===t}))&&n.classList.add("card__like-button_is-active")}(e.likes,t,m),function(e,t,n,r,o){t===e.owner._id?(r.style.display="block",r.addEventListener("click",(function(){o(e._id,n)}))):r.remove()}(e,t,l,p,a),s.addEventListener("click",(function(){i(e.link,e.name)})),m.addEventListener("click",(function(){var n=m.classList.contains("card__like-button_is-active")?o:r;!function(e,t,n,r,o){r(e).then((function(e){var r=e.likes.some((function(e){return e._id===o}));t.classList.toggle("card__like-button_is-active",r),c(e,n)})).catch((function(e){console.error(e)}))}(e._id,m,f,n,t)})),l}function c(e,t){t.textContent=e.likes.length,t.classList.toggle("card__like-counter_is-active",e.likes.length>0)}var i=function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n),o.classList.remove(r),o.textContent=""},a=function(e,t){e.disabled=!0,e.classList.add(t)},u=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove(n)):a(t,n)},l=function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);a(r,t.inactiveButtonClass),n.forEach((function(n){i(e,n,t.inputErrorClass,t.errorClass)}))},s={baseUrl:"https://nomoreparties.co/v1/wff-cohort-8",headers:{authorization:"d7287e75-1c82-476e-9556-0f39d2e9b17b","Content-Type":"application/json"}},d=function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))};function f(e,t){return fetch(e,t).then(d)}var p,m,v,_=function(e){return f("".concat(s.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:s.headers})},y=function(e){return f("".concat(s.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:s.headers})},h=function(e){return f("".concat(s.baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:s.headers})},b=document.forms["edit-profile"],S=document.forms["new-place"],k=document.forms["edit-avatar"],E=document.forms["delete-card"],g=document.querySelector(".popup_type_image"),L=document.querySelector(".profile__title"),q=document.querySelector(".profile__description"),C=document.querySelector(".profile__image"),A=document.querySelector(".profile__edit-button"),x=document.querySelector(".profile__add-button"),U=document.querySelector(".popup_type_edit"),w=document.querySelector(".popup_type_new-card"),j=document.querySelector(".popup_type_avatar"),O=document.querySelector(".popup_type_delete-card"),T=g.querySelector(".popup__image"),B=document.querySelector(".places__list"),P=document.querySelector("#card-template").content.querySelector(".places__item"),D=g.querySelector(".popup__caption"),I={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},M=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Сохранить",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"Сохранение...";t.textContent=e?r:n};function N(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Сохранение...";t.preventDefault();var r=t.submitter,o=r.textContent;M(!0,r,o,n),e().then((function(){t.target.reset()})).catch((function(e){console.log(e)})).finally((function(){M(!1,r,o)}))}function J(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var V=function(e){var t=e.name,n=e.about,r=e.avatar;L.textContent=t,q.textContent=n,C.style.backgroundImage="url(".concat(r,")")},H=function(){b.elements.name.value=L.textContent,b.elements.description.value=q.textContent,k.link.value=C.style.backgroundImage.slice(5,-2)};function z(t,n){T.src=t,T.alt=n,D.textContent=n,e(g)}function $(t,n){e(O),m=t,v=n}document.querySelectorAll(".popup__close").forEach((function(e){e.addEventListener("click",(function(){return t(e.closest(".popup"))}))})),A.addEventListener("click",(function(){H(),l(b,I),e(U)})),b.addEventListener("submit",(function(e){N((function(){return(e={name:b.elements.name.value,about:b.elements.description.value},f("".concat(s.baseUrl,"/users/me"),{method:"PATCH",headers:s.headers,body:JSON.stringify({name:e.name,about:e.about})})).then((function(e){V(e),t(U)}));var e}),e)})),C.addEventListener("click",(function(){H(),l(k,I),e(j)})),k.addEventListener("submit",(function(e){N((function(){return(e=k.link.value,f("".concat(s.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:s.headers,body:JSON.stringify({avatar:e})})).then((function(e){V(e),t(j)}));var e}),e)})),x.addEventListener("click",(function(){S.reset(),l(S,I),e(w)})),S.addEventListener("submit",(function(e){N((function(){var e,n,r;return(e={name:S.elements["place-name"].value,link:S.elements.link.value},n=e.name,r=e.link,f("".concat(s.baseUrl,"/cards"),{method:"POST",headers:s.headers,body:JSON.stringify({name:n,link:r})})).then((function(e){B.prepend(o(e,p,P,y,h,z,$)),S.reset(),t(w)}))}),e)})),E.addEventListener("submit",(function(e){e.preventDefault(),function(e,t,n,r,o){n(e).then((function(){t.remove(),r(o)})).catch((function(e){console.error(e)}))}(m,v,_,t,O)})),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){t.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t,n,r,o,c){var l=Array.from(e.querySelectorAll(t)),s=e.querySelector(n);u(l,s,r),e.addEventListener("reset",(function(){a(s,r)})),l.forEach((function(t){t.addEventListener("input",(function(){!function(e,t,n,r){t.setCustomValidity(""),t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?i(e,t,n,r):function(e,t,n,r,o){var c=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r),c.textContent=n,c.classList.add(o)}(e,t,t.validationMessage,n,r)}(e,t,o,c),u(l,s,r)}))}))}(t,e.inputSelector,e.submitButtonSelector,e.inactiveButtonClass,e.inputErrorClass,e.errorClass)}))}(I),Promise.all([f("".concat(s.baseUrl,"/users/me"),{headers:s.headers}),f("".concat(s.baseUrl,"/cards"),{headers:s.headers})]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,i,a=[],u=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=c.call(n)).done)&&(a.push(r.value),a.length!==t);u=!0);}catch(e){l=!0,o=e}finally{try{if(!u&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(l)throw o}}return a}}(t,n)||function(e,t){if(e){if("string"==typeof e)return J(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?J(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=r[0],i=r[1];V(c),p=c._id,function(e,t,n){n.forEach((function(n){e.append(o(n,t,P,y,h,z,$))}))}(B,c._id,i)})).catch((function(e){console.log(e)}))})();