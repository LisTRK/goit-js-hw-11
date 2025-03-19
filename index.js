import{a as p,i as l,S as f}from"./assets/vendor-zn2RWmSy.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const g="https://pixabay.com/api/",h="49287567-80da5b96f25a95ab41aa198b2",b=r=>p.get(g,{params:{key:h,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data.hits).catch(t=>{throw l.error({title:"Error",message:"An error occurred while fetching images. Please try again later.",position:"topRight"}),console.error("error: ",t),t}),y={captionsData:"alt",captionDelay:250},c=document.querySelector(".gallery");let u=new f(".gallery a",y);function w(){c.innerHTML=""}const L=r=>{w();const t=r.map(({tags:s,webformatURL:i,largeImageURL:e,likes:o,views:n,comments:d,downloads:m})=>`<li>
        <a class="gallery-item" href="${e}">
          <div class="photo-card">
            <img src="${i}" alt="${s}" />
            <div class="info">
              <p><b>Likes:</b> ${o}</p>
              <p><b>Views:</b> ${n}</p>
              <p><b>Comments:</b> ${d}</p>
              <p><b>Downloads:</b> ${m}</p>
            </div>
          </div>
        </a>
        </li>`).join("");c.insertAdjacentHTML("beforeend",t),u.refresh()};u.on("shown.simplelightbox",function(){const r=document.querySelector(".sl-current .sl-image").parentElement,t=r.dataset.likes,s=r.dataset.views,i=r.dataset.comments,e=r.dataset.downloads;iziToast.show({title:"Image Info",message:`
            <ul >
                <li>❤️ Likes: <b>${t}</b></li>
                <li>👁️ Views: <b>${s}</b></li>
                <li>💬 Comments: <b>${i}</b></li>
                <li>⬇️ Downloads: <b>${e}</b></li>
            </ul>
        `,position:"bottomRight",timeout:5e3,close:!1,progressBar:!0})});const $=document.querySelector("form"),v=document.querySelector(".input-form"),q=document.querySelector(".loader");function a(){q.classList.toggle("is-hidden")}$.addEventListener("submit",r=>{r.preventDefault();const t=v.value.trim();if(!t){l.warning({title:"Warning",message:"Enter a search query.",position:"topRight"});return}a(),b(t).then(s=>{if(s.length===0){l.info({title:"No result",message:"No images found. Please try a different search.",position:"topRight"}),a();return}L(s),a()}).catch(s=>{console.error(s),a()})});
//# sourceMappingURL=index.js.map
