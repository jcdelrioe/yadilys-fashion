(()=>{"use strict";const a={results:[{id:1,name:"Guayaquileña",tallas:"S - M - L - XL",descripcion:"Confeccionada en tela bramante, en combinacion celeste y blanco, adornados con encaje blanco",image:"../../dist/images/vestido01-RB.png"},{id:2,name:"Criolla bonita",tallas:"S - M - L - XL",descripcion:"Confeccionada en tela de seda estampada, adornados con encaje rojo",image:"../../dist/images/vestido02-RB.png"},{id:3,name:"Día de la tierra",tallas:"S - M - L - XL",descripcion:"Confeccionada en tela de seda estampada, adornados con encaje verde",image:"../../dist/images/vestido03-RB.png"},{id:4,name:"Montubia bonita",tallas:"S - M - L - XL",descripcion:"Confeccionada en tela de seda estampada, adornados con encaje negro",image:"../../dist/images/vestido04-RB.png"},{id:5,name:"Campecina bonita",tallas:"S - M - L - XL",descripcion:"Confeccionada en tela de hilo, combinado con una blusa blanca adornada con encaje rojo",image:"../../dist/images/vestido05-RB.png"},{id:6,name:"Danza española",tallas:"S - M - L - XL",descripcion:"Confeccionada en tela de hilo, adornada con encaje rojo y blanco",image:"../../dist/images/vestido06-RB.png"},{id:7,name:"Pollera Colorada",tallas:"S - M - L - XL",descripcion:"Confeccionada en tela zeus e hilo, adornada con encaje rojo y blanco",image:"../../dist/images/vestido07-RB.png"}]},n=async n=>n?a.results[n-1]:a,e=()=>location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/",i=()=>'\n    <div class="Error404">\n      <h2>Error 404</h2>\n    </div>\n  ',s={"/":async()=>`\n    <div class="Characters">\n      ${(await n()).results.map((a=>`\n        <article class="Character-item">\n          <a href="#/${a.id}/">\n            <img src="${a.image}" alt="${a.name}" loading="lazy">\n            <h2>${a.name}</h2>\n          </a>\n        </article>\n      `)).join("")}\n    </div>\n  `,"/:id":async()=>{const a=e(),i=await n(a);return`\n    <div class="Characters-inner">\n      <article class="Characters-card">\n        <img src="${i.image}" alt="${i.name}" loading="lazy">\n        <h2>${i.name}</h2>\n      </article>\n      <article class="Characters-card">\n        <h3>Tallas: <span>${i.tallas}</span></h3>\n        <h3>Descripción: <span>${i.descripcion}</span></h3>\n      </article>\n    </div>\n  `},"/contact":"Contact"},o=async()=>{const a=document.getElementById("header"),n=document.getElementById("content");a.innerHTML=await'\n    <div class="Header-main">\n      <div class="Header-logo">\n        <h1>\n          <a href="/">Yadily´s Fashion</a>\n        </h1>\n      </div>\n      <h1>Alquiler de vestidos tradicionales</h1>\n      <div class="Header-nav">\n        <a href="#/about/">About</a>\n      </div>\n    </div>\n  ';let o=e(),d=await(a=>a.length<=3?"/"===a?a:"/:id":`/${a}`)(o),c=s[d]?s[d]:i;n.innerHTML=await c()};window.addEventListener("load",o),window.addEventListener("hashchange",o)})();