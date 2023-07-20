(function(){"use strict";var e={9702:function(e,t,n){var a=n(9242),l=n(3396),r=n(7139),i=n(4870);const o={class:"border-black"},s={class:"center"};var u=(0,l.aZ)({__name:"App",setup(e){const t=(new Date).getFullYear();return(e,n)=>{const a=(0,l.up)("router-link"),u=(0,l.up)("router-view");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("nav",null,[(0,l._)("div",o,[(0,l.Wm)(a,{to:"/"},{default:(0,l.w5)((()=>[(0,l.Uk)("Home")])),_:1}),(0,l.Uk)(" | "),(0,l.Wm)(a,{to:"/online"},{default:(0,l.w5)((()=>[(0,l.Uk)("Online Vanilla")])),_:1}),(0,l.Uk)(" | "),(0,l.Wm)(a,{to:"/modded"},{default:(0,l.w5)((()=>[(0,l.Uk)("Online Modded")])),_:1}),(0,l.Uk)(" | "),(0,l.Wm)(a,{to:"/about"},{default:(0,l.w5)((()=>[(0,l.Uk)("About")])),_:1}),(0,l.Uk)(" | "),(0,l.Wm)(a,{to:"/join"},{default:(0,l.w5)((()=>[(0,l.Uk)("Join Now")])),_:1})])]),(0,l.Wm)(u),(0,l._)("footer",s,[(0,l._)("p",null,"© "+(0,r.zw)((0,i.SU)(t))+" Beocraft - All rights reserved",1)])],64)}}}),c=n(89);const d=(0,c.Z)(u,[["__scopeId","data-v-2fdb6922"]]);var p=d,m=n(2483),v=n(4161);const h=v.Z.create({baseURL:"https://api.pequla.com/guildcache",headers:{Accept:"application/json"},validateStatus:function(e){return 200===e}});class f{static async retrieveAll(){return await h.get("/data")}static async retrieveByUuid(e){return await h.get("/data/uuid/"+e)}static async retrieveStats(){return await h.get("/data/stats")}}n(7658);const w=["src"],g=["src"],_={class:"mobile-hidden"};var y=(0,l.aZ)({__name:"PlayerDisplay",props:{player:{}},setup(e){const t=e,n=(0,m.tv)();function a(e){n.push({path:"/details/"+e})}return(e,n)=>((0,l.wg)(),(0,l.iD)("article",{class:"flex flex-row flex-distribute card card-interactable table-element",onClick:n[0]||(n[0]=e=>a(t.player.uuid))},[(0,l._)("div",null,[(0,l._)("img",{src:t.player.avatar},null,8,w),(0,l._)("img",{src:`https://visage.surgeplay.com/face/32/${t.player.uuid}`},null,8,g)]),(0,l._)("span",null,(0,r.zw)(t.player.name),1),(0,l._)("span",_,(0,r.zw)(t.player.nickname),1)]))}});const k=y;var b=k;const D={class:"home"},j={key:0},x={key:1,class:"flex flex-column width-restricted center"},H={key:2,class:"pending dummy width-restricted center m-t-1"};var O=(0,l.aZ)({__name:"HomeView",setup(e){const t=(0,i.iH)(),n=(0,i.iH)();function a(){f.retrieveAll().then((e=>t.value=e.data)),f.retrieveStats().then((e=>n.value=e.data))}(0,l.wF)((()=>a()));const o=setInterval(a,15e3);return(0,l.Jd)((()=>clearInterval(o))),(e,a)=>((0,l.wg)(),(0,l.iD)("div",D,[n.value?((0,l.wg)(),(0,l.iD)("h3",j,"Displaying total of "+(0,r.zw)(n.value.count)+" players from "+(0,r.zw)(n.value.guilds.count)+" different guilds",1)):(0,l.kq)("",!0),t.value?((0,l.wg)(),(0,l.iD)("main",x,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(t.value,(e=>((0,l.wg)(),(0,l.j4)(b,{player:e},null,8,["player"])))),256))])):((0,l.wg)(),(0,l.iD)("div",H))]))}});const S=O;var U=S;const z=v.Z.create({headers:{Accept:"application/json"},validateStatus:function(e){return 200===e}});class Z{static async retrieveStatus(){return z.get("https://api.pequla.com/mcstatus")}static async retrieveModdedStatus(){return z.get("https://api.pequla.com/mcstatusmoded")}}const A={key:0,class:"online"},M=(0,l._)("h3",null,"Minecraft 1.20.1",-1),I={key:0,class:"flex flex-column width-restricted center"},B={key:1,class:"pending dummy width-restricted center m-t-1"};var N=(0,l.aZ)({__name:"OnlineView",setup(e){const t=(0,i.iH)();function n(){Z.retrieveStatus().then((e=>t.value=e.data))}(0,l.wF)((()=>n()));const a=setInterval(n,15e3);return(0,l.Jd)((()=>clearInterval(a))),(e,n)=>t.value?((0,l.wg)(),(0,l.iD)("div",A,[M,(0,l._)("h3",null,"Currently "+(0,r.zw)(t.value.players.online)+" out of "+(0,r.zw)(t.value.players.max)+" players online",1),t.value.players.sample?((0,l.wg)(),(0,l.iD)("main",I,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(t.value.players.sample,(e=>((0,l.wg)(),(0,l.j4)(b,{player:e},null,8,["player"])))),256))])):(0,l.kq)("",!0)])):((0,l.wg)(),(0,l.iD)("div",B))}});const P=N;var F=P;const J={class:"notfound"},W=(0,l._)("h1",null,"Not found",-1),Y=(0,l._)("p",null,"Sorry seams like the page doesn't exist",-1),$=[W,Y];function q(e,t){return(0,l.wg)(),(0,l.iD)("div",J,$)}const C={},T=(0,c.Z)(C,[["render",q]]);var V=T;const L={class:"date"};var E=(0,l.aZ)({__name:"DateFormat",props:{date:String},setup(e){const t=e,{date:n}=(0,i.BK)(t);function a(e){const t=new Date(e);return`${o(t.getHours())}:${o(t.getMinutes())} ${o(t.getDate())}-${o(t.getMonth())}-${t.getFullYear()}`}function o(e){return String(e).padStart(2,"0")}return(e,t)=>((0,l.wg)(),(0,l.iD)("td",L,(0,r.zw)(a((0,i.SU)(n))),1))}});const K=E;var R=K;const X={class:"details center"},G=(0,l._)("h3",null,"Player details",-1),Q={key:0,class:"card p-1 center"},ee=(0,l._)("th",null,"icon",-1),te=["src"],ne=["src"],ae=(0,l._)("th",null,"name",-1),le=(0,l._)("th",null,"uuid",-1),re=(0,l._)("th",null,"discord_id",-1),ie=(0,l._)("th",null,"tag",-1),oe=(0,l._)("th",null,"nickanme",-1),se=(0,l._)("th",null,"guild_id",-1),ue=(0,l._)("th",null,"skin",-1),ce=["src"],de=(0,l._)("th",null,"created_at",-1),pe=(0,l._)("th",null,"cached_at",-1),me={key:1,class:"pending dummy width-restricted center m-t-1"};var ve=(0,l.aZ)({__name:"DetailsView",setup(e){const t=(0,m.yj)(),n=t.params.uuid,a=(0,i.iH)();return f.retrieveByUuid(n).then((e=>{a.value=e.data})),(e,t)=>((0,l.wg)(),(0,l.iD)("div",X,[G,a.value?((0,l.wg)(),(0,l.iD)("table",Q,[(0,l._)("tr",null,[ee,(0,l._)("td",null,[(0,l._)("img",{src:a.value.avatar},null,8,te),(0,l._)("img",{src:`https://visage.surgeplay.com/face/32/${a.value.uuid}`},null,8,ne)])]),(0,l._)("tr",null,[ae,(0,l._)("td",null,(0,r.zw)(a.value.name),1)]),(0,l._)("tr",null,[le,(0,l._)("td",null,(0,r.zw)(a.value.uuid),1)]),(0,l._)("tr",null,[re,(0,l._)("td",null,(0,r.zw)(a.value.discordId),1)]),(0,l._)("tr",null,[ie,(0,l._)("td",null,(0,r.zw)(a.value.tag),1)]),(0,l._)("tr",null,[oe,(0,l._)("td",null,(0,r.zw)(a.value.nickname),1)]),(0,l._)("tr",null,[se,(0,l._)("td",null,(0,r.zw)(a.value.guildId),1)]),(0,l._)("tr",null,[ue,(0,l._)("td",null,[(0,l._)("img",{src:`https://visage.surgeplay.com/bust/64/${a.value.uuid}`,class:"skin"},null,8,ce)])]),(0,l._)("tr",null,[de,(0,l.Wm)(R,{date:a.value.createdAt},null,8,["date"])]),(0,l._)("tr",null,[pe,(0,l.Wm)(R,{date:a.value.cachedAt},null,8,["date"])])])):((0,l.wg)(),(0,l.iD)("div",me))]))}});const he=ve;var fe=he;const we={class:"about"},ge=(0,l.uE)('<h3>Beocraft - The Vanilla SMP</h3><main class="card width-restricted center"><p class="center">Here is a short list of server features:</p><ul class="no-bullet"><li>Java 1.20</li><li>No cheating, No griefing, No stealing</li><li>ONLY paid clients (no crack)</li><li>ONLY java edition (no crossplay)</li><li>Chunk claims (/chunk)</li><li>/tpa /home /spawn /back</li><li>Fast Leaf Decay</li><li>Dragon drops elytra</li><li>Phantoms don&#39;t spawn</li><li>No creaper, ghast and enderman grief</li><li>Bats drop membranes</li><li>Hosted 24/7 in London on Intel Xeon 1220Lv2</li><li>Discord based authentication and webhooks</li></ul></main>',2);function _e(e,t){const n=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)("div",we,[ge,(0,l._)("p",null,[(0,l.Wm)(n,{to:"/join"},{default:(0,l.w5)((()=>[(0,l.Uk)("Join our Discord server")])),_:1})])])}const ye={},ke=(0,c.Z)(ye,[["render",_e]]);var be=ke;const De={class:"join"},je=(0,l._)("h3",null,"You will be redirected to our Discord server",-1),xe=(0,l._)("p",null,[(0,l.Uk)("If the redirect did not work please use "),(0,l._)("a",{href:"https://discord.gg/q3ZNyDeCcA"},"this link")],-1),He=(0,l._)("iframe",{src:"https://discord.com/widget?id=1088934690385317928&theme=dark",width:"350",height:"500",allowtransparency:"true",frameborder:"0",sandbox:"allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts",class:"center"},null,-1),Oe=[je,xe,He];var Se=(0,l.aZ)({__name:"JoinView",setup(e){const t=setTimeout((()=>{window.location.href="https://discord.gg/q3ZNyDeCcA"}),5e3);return(0,l.Jd)((()=>clearTimeout(t))),(e,t)=>((0,l.wg)(),(0,l.iD)("div",De,Oe))}});const Ue=Se;var ze=Ue;const Ze={key:0,class:"online"},Ae=(0,l._)("h3",null,"All The Mods 8",-1),Me={key:0,class:"flex flex-column width-restricted center"},Ie={key:1,class:"pending dummy width-restricted center m-t-1"};var Be=(0,l.aZ)({__name:"ModdedView",setup(e){const t=(0,i.iH)();function n(){Z.retrieveModdedStatus().then((e=>t.value=e.data))}(0,l.wF)((()=>n()));const a=setInterval(n,15e3);return(0,l.Jd)((()=>clearInterval(a))),(e,n)=>t.value?((0,l.wg)(),(0,l.iD)("div",Ze,[Ae,(0,l._)("h3",null,"Currently "+(0,r.zw)(t.value.players.online)+" out of "+(0,r.zw)(t.value.players.max)+" players online",1),t.value.players.sample?((0,l.wg)(),(0,l.iD)("main",Me,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(t.value.players.sample,(e=>((0,l.wg)(),(0,l.j4)(b,{player:e},null,8,["player"])))),256))])):(0,l.kq)("",!0)])):((0,l.wg)(),(0,l.iD)("div",Ie))}});const Ne=Be;var Pe=Ne;const Fe=[{path:"/",name:"home",component:U,meta:{title:"Home",description:"Homepage of the Beocraft SMP minecraft server"}},{path:"/about",name:"about",component:be,meta:{title:"About",description:"Info about the Beocraft SMP minecraft server"}},{path:"/online",name:"online",component:F,meta:{title:"Online",description:"How many people are online at the moment?"}},{path:"/modded",name:"modded",component:Pe,meta:{title:"Modded",description:"How many people are online at the moment?"}},{path:"/join",name:"join",component:ze,meta:{title:"Join",description:"How and where to join the Beocraft SMP"}},{path:"/details/:uuid",name:"UserData",component:fe,meta:{title:"Details",description:"Details about the player"}},{path:"/status",redirect:"/online"},{path:"/home",redirect:"/"},{path:"/invite",redirect:"/join"},{path:"/:catchAll(.*)",name:"notfound",component:V,meta:{title:"Not Found",description:"This page does not exist"}}],Je=(0,m.p7)({history:(0,m.PO)("/"),routes:Fe});function We(e,t){const n=document.getElementById(e);n.content=t}Je.beforeEach(((e,t,n)=>{e.meta.title&&e.meta.description&&(document.title=`${e.meta.title} :: Beocraft`,We("meta-title",e.meta.title),We("meta-desc",e.meta.description)),n()}));var Ye=Je;(0,a.ri)(p).use(Ye).mount("#app")}},t={};function n(a){var l=t[a];if(void 0!==l)return l.exports;var r=t[a]={exports:{}};return e[a].call(r.exports,r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,a,l,r){if(!a){var i=1/0;for(c=0;c<e.length;c++){a=e[c][0],l=e[c][1],r=e[c][2];for(var o=!0,s=0;s<a.length;s++)(!1&r||i>=r)&&Object.keys(n.O).every((function(e){return n.O[e](a[s])}))?a.splice(s--,1):(o=!1,r<i&&(i=r));if(o){e.splice(c--,1);var u=l();void 0!==u&&(t=u)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[a,l,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var l,r,i=a[0],o=a[1],s=a[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(l in o)n.o(o,l)&&(n.m[l]=o[l]);if(s)var c=s(n)}for(t&&t(a);u<i.length;u++)r=i[u],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(c)},a=self["webpackChunkbeocraft_website"]=self["webpackChunkbeocraft_website"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(9702)}));a=n.O(a)})();
//# sourceMappingURL=app.2b9823b4.js.map