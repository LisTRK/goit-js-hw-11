import{a as f,i as a,S as p}from"./assets/vendor-gAnSlmBJ.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const g="https://pixabay.com/api/",h="49287567-80da5b96f25a95ab41aa198b2",y=r=>f.get(g,{params:{key:h,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>(t.data.hits.length===0&&a.info({title:"No result",message:"No images found. Please try a different search.",position:"topRight"}),t.data.hits)).catch(t=>{throw a.error({title:"Error",message:"An error occurred while fetching images. Please try again later.",position:"topRight"}),console.error("error: ",t),t}),b={captionsData:"alt",captionDelay:250},c=document.querySelector(".gallery"),w=document.querySelector(".loader");let u=new p(".gallery a",b);function L(){c.innerHTML=""}function l(){w.classList.toggle("is-hidden")}const $=r=>{L(),l();const t=r.map(({tags:s,webformatURL:i,largeImageURL:e,likes:o,views:n,comments:d,downloads:m})=>`<a href="${e}"
        data-likes="${o}"
        data-views="${n}"
        data-comments="${d}"
        data-downloads="${m}">
        <img src="${i}" alt="${s}" title=""/></a>`).join("");c.insertAdjacentHTML("beforeend",t),u.refresh(),l()};u.on("shown.simplelightbox",function(){const r=document.querySelector(".sl-current .sl-image").parentElement,t=r.dataset.likes,s=r.dataset.views,i=r.dataset.comments,e=r.dataset.downloads;iziToast.show({title:"Image Info",message:`
            <ul style="list-style:none; padding-left:0;">
                <li>❤️ Likes: <b>${t}</b></li>
                <li>👁️ Views: <b>${s}</b></li>
                <li>💬 Comments: <b>${i}</b></li>
                <li>⬇️ Downloads: <b>${e}</b></li>
            </ul>
        `,position:"bottomRight",timeout:5e3,close:!1,progressBar:!0})});const q=document.querySelector("form"),E=document.querySelector(".input-form");q.addEventListener("submit",r=>{r.preventDefault();const t=E.value.trim();if(!t){a.warning({title:"Warning",message:"Enter a search query.",position:"topRight"});return}y(t).then(s=>$(s)).catch(s=>console.error(s))});
//# sourceMappingURL=index.js.map
