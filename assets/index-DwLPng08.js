(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`https://placehold.co/210x295`,t=async t=>{let n=`https://api.tvmaze.com/shows/${t}`,r=await fetch(n).then(e=>e.json());return{name:r.name,rating:r.rating,image:r.image?.medium??e}},n=async e=>{let t=`https://api.tvmaze.com/shows/${e}/episodes`,n=(await fetch(t).then(e=>e.json())).map(e=>({number:e.number,season:e.season,rating:e.rating.average}));return Object.groupBy(n,e=>e.season)},r=`32938`,i=await t(r),a=await n(r),o=document.querySelector(`header`),s=document.querySelector(`.episodes`);o.setHTMLUnsafe(`
  <img class="poster" src="${i.image}">
  <h1>${i.name}</h1>
`);var c=e=>`<div class="episode episode-${e.number} rating-${Math.floor(e.rating)}">${e.number}</div>`,l=(e,t)=>`
  <article class="season">
    <header class="season-header">T${t}</header>
    ${e.map(c).join(``)}
  </article>
`,u=Object.values(a).map((e,t)=>l(e,t+1));s.setHTMLUnsafe(u.join(``));