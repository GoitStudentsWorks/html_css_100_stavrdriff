(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function m(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerpolicy&&(l.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?l.credentials="include":r.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(r){if(r.ep)return;r.ep=!0;const l=m(r);fetch(r.href,l)}})();document.addEventListener("DOMContentLoaded",()=>{const t={openSelector:"is-open",bodyBlocked:"is-blocked",interactiveElements:"input, button, a, textarea, iframe, select",mobileMenu:"js-mobile-menu",mobileMenuTrigger:'[data-action="mobileMenuTrigger"]'},u=()=>{const o=document.querySelector(`.${t.mobileMenu}`),e=[...document.querySelectorAll(t.mobileMenuTrigger)],n=document.querySelector("body");!o||!e.length||e.forEach(c=>{c.addEventListener("click",s=>{o.classList.toggle(t.openSelector),n.classList.toggle(t.bodyBlocked),r(t.openSelector,t.mobileMenu)})})},m=()=>{const o=[...document.querySelectorAll(t.modalTrigger)];o.length&&o.forEach((e,n)=>{e.addEventListener("click",()=>{a(e,n,t.openSelector),r(t.openSelector,t.modal)})})},a=(o,e,n)=>{const c=[...document.querySelectorAll(`.${t.modal}`)];if(!c.length)return;document.querySelector("body").classList.toggle(t.bodyBlocked),c.forEach((i,f)=>{i.classList.remove(n),f==e&&!o.closest(`.${n}`)&&i.classList.add(n)})},r=(o,e)=>{const n=[...document.querySelectorAll(`.${e}`)];n.length&&n.forEach(c=>{const s=[...c.querySelectorAll(t.interactiveElements)],i=[...document.querySelectorAll(t.interactiveElements)];let f=[];i.forEach(g=>{g.closest(`.${e}`)||f.push(g)}),l(s,o,f)})},l=(o,e,n)=>{o.forEach(c=>{c.closest(`.${e}`)?(c.setAttribute("tabindex","0"),n.forEach(s=>{s.setAttribute("tabindex","-1")})):(c.setAttribute("tabindex","-1"),n.forEach(s=>{s.setAttribute("tabindex","0")}))})},d=()=>{window.addEventListener("click",o=>{const{target:e}=o,n=document.querySelector(`.${t.mobileMenu}.${t.openSelector}`);if(!n)return;const c=n.querySelector(t.mobileMenuTrigger),s=!e.closest(`.${t.mobileMenu}`),i=!e.closest(".burger");s&&i&&c.click()})},b=o=>{const e=document.getElementById(o);e&&window.scrollTo({left:0,behavior:"smooth",top:e.offsetTop})},y=o=>{if(!o)return;const e=document.querySelector(`.${t.mobileMenu}`);e.classList.contains(t.openSelector)&&e.querySelector(t.mobileMenuTrigger).click()};(()=>{const o=[...document.querySelectorAll('[href*="#"]')];o.length&&o.forEach(e=>{const n=e.getAttribute("href").split("#",[2]).slice(1);n.length&&e.addEventListener("click",c=>{c.preventDefault(),b(n),y(e)})})})(),u(),m(),d()});
//# sourceMappingURL=commonHelpers.js.map
