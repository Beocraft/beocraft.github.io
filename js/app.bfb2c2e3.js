(function(){"use strict";var t={1685:function(t,e,n){var a=n(9242),l=n(3396),r=n(7139),u=n(4870);const o={class:"border-black"},i={class:"center"};var s=(0,l.aZ)({__name:"App",setup(t){const e=(new Date).getFullYear();return(t,n)=>{const a=(0,l.up)("router-link"),s=(0,l.up)("router-view");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("nav",null,[(0,l._)("div",o,[(0,l.Wm)(a,{to:"/"},{default:(0,l.w5)((()=>[(0,l.Uk)("Home")])),_:1}),(0,l.Uk)(" | "),(0,l.Wm)(a,{to:"/online"},{default:(0,l.w5)((()=>[(0,l.Uk)("Online")])),_:1}),(0,l.Uk)(" | "),(0,l.Wm)(a,{to:"/about"},{default:(0,l.w5)((()=>[(0,l.Uk)("About")])),_:1}),(0,l.Uk)(" | "),(0,l.Wm)(a,{to:"/join"},{default:(0,l.w5)((()=>[(0,l.Uk)("Join Now")])),_:1})])]),(0,l.Wm)(s),(0,l._)("footer",i,[(0,l._)("p",null,"© "+(0,r.zw)((0,u.SU)(e))+" Beocraft - All rights reserved",1)])],64)}}}),c=n(89);const d=(0,c.Z)(s,[["__scopeId","data-v-7f98a1b8"]]);var p=d,h=n(2483),_=(n(7658),n(4161));const v=_.Z.create({baseURL:"https://api.pequla.com/guildcache",headers:{Accept:"application/json"},validateStatus:function(t){return 200===t}});class f{static async retrieveAll(){return await v.get("/data")}static async retrieveByUuid(t){return await v.get("/data/uuid/"+t)}static async retrieveStats(){return await v.get("/data/stats")}static async updatePlayer(t){return await v.post("/sync/player/"+t)}static async updateAll(){return await v.post("/sync/all")}}const m={class:"home"},w={key:0},g={key:1,id:"player-table",class:"center"},y=(0,l._)("tr",null,[(0,l._)("th",null,"icon"),(0,l._)("th",null,"minecraft"),(0,l._)("th",null,"discord"),(0,l._)("th",null,"created_at"),(0,l._)("th",null,"cached_at"),(0,l._)("th",null,"actions")],-1),b={class:"icon"},k=["src"],D=["src"],z={class:"minecraft"},A={class:"discord"},U={class:"created_at"},j={class:"cached_at"},O=["onClick"],H=["onClick"];var C=(0,l.aZ)({__name:"HomeView",setup(t){const e=(0,u.iH)(),n=(0,u.iH)(),a=(0,h.tv)();function o(){f.retrieveAll().then((t=>e.value=t.data)),f.retrieveStats().then((t=>n.value=t.data))}function i(t){const e=new Date(t);return`${s(e.getHours())}:${s(e.getMinutes())} ${s(e.getDate())}-${s(e.getMonth())}-${e.getFullYear()}`}function s(t){return String(t).padStart(2,"0")}function c(t){a.push({path:"/details/"+t})}function d(t){f.updatePlayer(t).then((t=>o()))}(0,l.wF)((()=>o()));const p=setInterval(o,15e3);return(0,l.Jd)((()=>clearInterval(p))),(t,a)=>((0,l.wg)(),(0,l.iD)("div",m,[n.value?((0,l.wg)(),(0,l.iD)("h3",w,"Displaying total of "+(0,r.zw)(n.value.count)+" players from "+(0,r.zw)(n.value.guilds.count)+" different guilds",1)):(0,l.kq)("",!0),e.value?((0,l.wg)(),(0,l.iD)("table",g,[y,((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.value,(t=>((0,l.wg)(),(0,l.iD)("tr",null,[(0,l._)("td",b,[(0,l._)("img",{src:t.avatar},null,8,k),(0,l._)("img",{src:`https://crafatar.com/avatars/${t.uuid}`},null,8,D)]),(0,l._)("td",z,(0,r.zw)(t.name),1),(0,l._)("td",A,(0,r.zw)(t.nickname),1),(0,l._)("td",U,(0,r.zw)(i(t.createdAt)),1),(0,l._)("td",j,(0,r.zw)(i(t.cachedAt)),1),(0,l._)("td",null,[(0,l._)("button",{type:"button",class:"details",onClick:e=>c(t.uuid)},"details",8,O),(0,l._)("button",{type:"button",class:"update",onClick:e=>d(t.uuid)},"update",8,H)])])))),256))])):(0,l.kq)("",!0)]))}});const S=C;var Z=S;const $=_.Z.create({baseURL:"https://link.samifying.com/api",headers:{Accept:"application/json"},validateStatus:function(t){return 200===t}});class x{static async retrieveStatus(){return $.get("/status/play.beocraft.net")}}const I={key:0,class:"online"},J={key:0,class:"center"},P=(0,l._)("tr",null,[(0,l._)("th",null,"icon"),(0,l._)("th",null,"name"),(0,l._)("th",null,"uuid"),(0,l._)("th",null,"action")],-1),q=["src"],F=["onClick"];var N=(0,l.aZ)({__name:"OnlineView",setup(t){const e=(0,u.iH)(),n=(0,h.tv)();function a(){x.retrieveStatus().then((t=>e.value=t.data))}(0,l.wF)((()=>a()));const o=setInterval(a,3e3);function i(t){n.push({path:"/details/"+t.replaceAll("-","")})}return(0,l.Jd)((()=>clearInterval(o))),(t,n)=>e.value?((0,l.wg)(),(0,l.iD)("div",I,[(0,l._)("h3",null,"Currently "+(0,r.zw)(e.value.players.online)+" out of "+(0,r.zw)(e.value.players.max)+" players online",1),e.value.players.sample?((0,l.wg)(),(0,l.iD)("table",J,[P,((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.value.players.sample,(t=>((0,l.wg)(),(0,l.iD)("tr",null,[(0,l._)("td",null,[(0,l._)("img",{src:`https://crafatar.com/avatars/${t.id}`},null,8,q)]),(0,l._)("td",null,(0,r.zw)(t.name),1),(0,l._)("td",null,(0,r.zw)(t.id),1),(0,l._)("td",null,[(0,l._)("button",{type:"button",onClick:e=>i(t.id)},"details",8,F)])])))),256))])):(0,l.kq)("",!0)])):(0,l.kq)("",!0)}});const B=N;var W=B;const Y={class:"notfound"},L=(0,l._)("h1",null,"Not found",-1),T=(0,l._)("p",null,"Sorry seams like the page doesn't exist",-1),V=[L,T];function M(t,e){return(0,l.wg)(),(0,l.iD)("div",Y,V)}const E={},K=(0,c.Z)(E,[["render",M]]);var R=K;const X={class:"details"},G=(0,l._)("h3",null,"Player details",-1),Q={key:0,class:"center"},tt=(0,l._)("th",null,"icon",-1),et=["src"],nt=["src"],at=(0,l._)("th",null,"name",-1),lt=(0,l._)("th",null,"uuid",-1),rt=(0,l._)("th",null,"discord_id",-1),ut=(0,l._)("th",null,"tag",-1),ot=(0,l._)("th",null,"nickanme",-1),it=(0,l._)("th",null,"guild_id",-1),st=(0,l._)("th",null,"skin",-1),ct=["src"],dt=(0,l._)("th",null,"created_at",-1),pt=(0,l._)("th",null,"cached_at",-1),ht={key:1};var _t=(0,l.aZ)({__name:"DetailsView",setup(t){const e=(0,h.yj)(),n=e.params.uuid,a=(0,u.iH)();return f.retrieveByUuid(n).then((t=>{a.value=t.data})),(t,e)=>((0,l.wg)(),(0,l.iD)("div",X,[G,a.value?((0,l.wg)(),(0,l.iD)("table",Q,[(0,l._)("tr",null,[tt,(0,l._)("td",null,[(0,l._)("img",{src:a.value.avatar},null,8,et),(0,l._)("img",{src:`https://crafatar.com/avatars/${a.value.uuid}`},null,8,nt)])]),(0,l._)("tr",null,[at,(0,l._)("td",null,(0,r.zw)(a.value.name),1)]),(0,l._)("tr",null,[lt,(0,l._)("td",null,(0,r.zw)(a.value.uuid),1)]),(0,l._)("tr",null,[rt,(0,l._)("td",null,(0,r.zw)(a.value.discordId),1)]),(0,l._)("tr",null,[ut,(0,l._)("td",null,(0,r.zw)(a.value.tag),1)]),(0,l._)("tr",null,[ot,(0,l._)("td",null,(0,r.zw)(a.value.nickname),1)]),(0,l._)("tr",null,[it,(0,l._)("td",null,(0,r.zw)(a.value.guildId),1)]),(0,l._)("tr",null,[st,(0,l._)("td",null,[(0,l._)("img",{src:`https://crafatar.com/renders/body/${a.value.uuid}`,class:"skin"},null,8,ct)])]),(0,l._)("tr",null,[dt,(0,l._)("td",null,(0,r.zw)(a.value.createdAt),1)]),(0,l._)("tr",null,[pt,(0,l._)("td",null,(0,r.zw)(a.value.cachedAt),1)])])):((0,l.wg)(),(0,l.iD)("p",ht,"No data found for player "+(0,r.zw)((0,u.SU)(n)),1))]))}});const vt=_t;var ft=vt;const mt={class:"about"},wt=(0,l.uE)('<h3>Beocraft - The Vanilla SMP</h3><table class="center"><tr><th>Here is a short list of server features:</th></tr><tr><td>Java 1.19.4</td></tr><tr><td>Chunk claims (/chunk)</td></tr><tr><td>/tpa /home /spawn /back</td></tr><tr><td>Fast Leaf Decay</td></tr><tr><td>Dragon drops elytra</td></tr><tr><td>Phantoms don&#39;t spawn</td></tr><tr><td>No creaper, ghast and enderman grief</td></tr><tr><td>Bats drop membranes</td></tr><tr><td>Hosted 24/7 in London on Intel Xeon 1220Lv2</td></tr><tr><td>Discord based authentication and webhooks</td></tr></table>',2);function gt(t,e){const n=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)("div",mt,[wt,(0,l._)("p",null,[(0,l.Wm)(n,{to:"/join"},{default:(0,l.w5)((()=>[(0,l.Uk)("Join our Discord server")])),_:1})])])}const yt={},bt=(0,c.Z)(yt,[["render",gt]]);var kt=bt;const Dt={class:"join"},zt=(0,l._)("h3",null,"You will be redirect to our Discord server",-1),At=(0,l._)("p",null,[(0,l.Uk)("If the redirect did not work please use "),(0,l._)("a",{href:"https://discord.gg/q3ZNyDeCcA"},"this link")],-1),Ut=(0,l._)("iframe",{src:"https://discord.com/widget?id=1088934690385317928&theme=dark",width:"350",height:"500",allowtransparency:"true",frameborder:"0",sandbox:"allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts",class:"center"},null,-1),jt=[zt,At,Ut];var Ot=(0,l.aZ)({__name:"JoinView",setup(t){const e=setTimeout((()=>{window.location.href="https://discord.gg/q3ZNyDeCcA"}),5e3);return(0,l.Jd)((()=>clearTimeout(e))),(t,e)=>((0,l.wg)(),(0,l.iD)("div",Dt,jt))}});const Ht=Ot;var Ct=Ht;const St=[{path:"/",name:"home",component:Z,meta:{title:"Home"}},{path:"/about",name:"about",component:kt,meta:{title:"About"}},{path:"/online",name:"online",component:W,meta:{title:"Online"}},{path:"/join",name:"join",component:Ct,meta:{title:"Join"}},{path:"/details/:uuid",name:"UserData",component:ft,meta:{title:"User"}},{path:"/status",redirect:"/online"},{path:"/home",redirect:"/"},{path:"/invite",redirect:"/join"},{path:"/:catchAll(.*)",name:"notfound",component:R,meta:{title:"Not Found"}}],Zt=(0,h.p7)({history:(0,h.PO)("/"),routes:St});Zt.beforeEach(((t,e,n)=>{t.meta.title&&(document.title=`${t.meta.title} :: Beocraft`),n()}));var $t=Zt;(0,a.ri)(p).use($t).mount("#app")}},e={};function n(a){var l=e[a];if(void 0!==l)return l.exports;var r=e[a]={exports:{}};return t[a].call(r.exports,r,r.exports,n),r.exports}n.m=t,function(){var t=[];n.O=function(e,a,l,r){if(!a){var u=1/0;for(c=0;c<t.length;c++){a=t[c][0],l=t[c][1],r=t[c][2];for(var o=!0,i=0;i<a.length;i++)(!1&r||u>=r)&&Object.keys(n.O).every((function(t){return n.O[t](a[i])}))?a.splice(i--,1):(o=!1,r<u&&(u=r));if(o){t.splice(c--,1);var s=l();void 0!==s&&(e=s)}}return e}r=r||0;for(var c=t.length;c>0&&t[c-1][2]>r;c--)t[c]=t[c-1];t[c]=[a,l,r]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,a){var l,r,u=a[0],o=a[1],i=a[2],s=0;if(u.some((function(e){return 0!==t[e]}))){for(l in o)n.o(o,l)&&(n.m[l]=o[l]);if(i)var c=i(n)}for(e&&e(a);s<u.length;s++)r=u[s],n.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return n.O(c)},a=self["webpackChunkbeocraft_website"]=self["webpackChunkbeocraft_website"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(1685)}));a=n.O(a)})();
//# sourceMappingURL=app.bfb2c2e3.js.map