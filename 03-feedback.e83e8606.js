function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},n=t.parcelRequire4c75;null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},t.parcelRequire4c75=n);var a=n("kEUo3");const l=document.querySelector(".feedback-form"),s={email:"",message:""};if(i("feedback-form-state")){const e=i("feedback-form-state");f(e.email,e.message),l.firstElementChild.firstElementChild.value=s.email,l.firstElementChild.nextElementSibling.firstElementChild.value=s.message}function i(e){try{const t=localStorage.getItem(e);return null!==t&&JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}}function f(e,t){s.email=e,s.message=t}l.addEventListener("input",e(a).throttle((e=>{s[e.target.name]=e.target.value,function(e,t){try{const r=JSON.stringify(t);localStorage.setItem(e,r)}catch(e){console.error("Set state error: ",e.message)}}("feedback-form-state",s)})),500),l.addEventListener("submit",(e=>{e.preventDefault(),i("feedback-form-state")&&(console.log(s),function(e){try{localStorage.removeItem(e)}catch(e){console.error("Remove state error: ",e.message)}}("feedback-form-state")),f("",""),l.reset()}));
//# sourceMappingURL=03-feedback.e83e8606.js.map
