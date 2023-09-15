(function(){"use strict";var e={1707:function(e,t,n){var a=n(9242),l=n(3396),r=n(7139),i=n(4870);const o={class:"border-black"},s={class:"center"};var u=(0,l.aZ)({__name:"App",setup(e){const t=(new Date).getFullYear();return(e,n)=>{const a=(0,l.up)("router-link"),u=(0,l.up)("router-view");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("nav",null,[(0,l._)("div",o,[(0,l.Wm)(a,{to:"/"},{default:(0,l.w5)((()=>[(0,l.Uk)("Home")])),_:1}),(0,l.Uk)(" | "),(0,l.Wm)(a,{to:"/online"},{default:(0,l.w5)((()=>[(0,l.Uk)("Online Vanilla")])),_:1}),(0,l.Uk)(" | "),(0,l.Wm)(a,{to:"/modded"},{default:(0,l.w5)((()=>[(0,l.Uk)("Online Modded")])),_:1}),(0,l.Uk)(" | "),(0,l.Wm)(a,{to:"/about"},{default:(0,l.w5)((()=>[(0,l.Uk)("About")])),_:1}),(0,l.Uk)(" | "),(0,l.Wm)(a,{to:"/join"},{default:(0,l.w5)((()=>[(0,l.Uk)("Join Now")])),_:1})])]),(0,l.Wm)(u),(0,l._)("footer",s,[(0,l._)("p",null,"© "+(0,r.zw)((0,i.SU)(t))+" Beocraft - All rights reserved",1)])],64)}}}),c=n(89);const d=(0,c.Z)(u,[["__scopeId","data-v-2fdb6922"]]);var p=d,m=n(2483),v=n(4161);const h=v.Z.create({baseURL:"https://api.beocraft.net",headers:{Accept:"application/json"},validateStatus:function(e){return 200===e}});class f{static async retrieveAll(){return await h.get("/data")}static async retrieveByUuid(e){return await h.get("/data/uuid/"+e)}static async retrieveStats(){return await h.get("/data/stats")}static async retrieveStatus(e){return h.get("/status/"+e)}}n(7658);const w=["src"],_=["src"],g={class:"mobile-hidden"};var y=(0,l.aZ)({__name:"PlayerDisplay",props:{player:{}},setup(e){const t=e,n=(0,m.tv)();function a(e){n.push({path:"/details/"+e})}return(e,n)=>((0,l.wg)(),(0,l.iD)("article",{class:"flex flex-row flex-distribute card card-interactable table-element",onClick:n[0]||(n[0]=e=>a(t.player.uuid))},[(0,l._)("div",null,[(0,l._)("img",{src:t.player.avatar},null,8,w),(0,l._)("img",{src:`https://visage.surgeplay.com/face/32/${t.player.uuid}`},null,8,_)]),(0,l._)("span",null,(0,r.zw)(t.player.name),1),(0,l._)("span",g,(0,r.zw)(t.player.nickname),1)]))}});const k=y;var b=k;const D={class:"home"},x={key:0},H={key:1,class:"flex flex-column width-restricted center"},j={key:2,class:"pending dummy width-restricted center m-t-1"};var z=(0,l.aZ)({__name:"HomeView",setup(e){const t=(0,i.iH)(),n=(0,i.iH)();function a(){f.retrieveAll().then((e=>t.value=e.data)),f.retrieveStats().then((e=>n.value=e.data))}(0,l.wF)((()=>a()));const o=setInterval(a,15e3);return(0,l.Jd)((()=>clearInterval(o))),(e,a)=>((0,l.wg)(),(0,l.iD)("div",D,[n.value?((0,l.wg)(),(0,l.iD)("h3",x,"Displaying total of "+(0,r.zw)(n.value.count)+" players from "+(0,r.zw)(n.value.guilds.count)+" different guilds",1)):(0,l.kq)("",!0),t.value?((0,l.wg)(),(0,l.iD)("main",H,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(t.value,(e=>((0,l.wg)(),(0,l.j4)(b,{player:e},null,8,["player"])))),256))])):((0,l.wg)(),(0,l.iD)("div",j))]))}});const O=z;var S=O;const U={key:0,class:"online"},A=(0,l._)("h3",null,"Minecraft 1.20.1",-1),Z={key:0,class:"flex flex-column width-restricted center"},M={key:1,class:"pending dummy width-restricted center m-t-1"};var I=(0,l.aZ)({__name:"OnlineView",setup(e){const t=(0,i.iH)();function n(){f.retrieveStatus("play.beocraft.net").then((e=>t.value=e.data))}(0,l.wF)((()=>n()));const a=setInterval(n,15e3);return(0,l.Jd)((()=>clearInterval(a))),(e,n)=>t.value?((0,l.wg)(),(0,l.iD)("div",U,[A,(0,l._)("h3",null,"Currently "+(0,r.zw)(t.value.players.online)+" out of "+(0,r.zw)(t.value.players.max)+" players online",1),t.value.players.sample?((0,l.wg)(),(0,l.iD)("main",Z,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(t.value.players.sample,(e=>((0,l.wg)(),(0,l.j4)(b,{player:e},null,8,["player"])))),256))])):(0,l.kq)("",!0)])):((0,l.wg)(),(0,l.iD)("div",M))}});const B=I;var N=B;const P={class:"notfound"},F=(0,l._)("h1",null,"Not found",-1),V=(0,l._)("p",null,"Sorry seams like the page doesn't exist",-1),W=[F,V];function Y(e,t){return(0,l.wg)(),(0,l.iD)("div",P,W)}const $={},C=(0,c.Z)($,[["render",Y]]);var J=C;const q={class:"date"};var T=(0,l.aZ)({__name:"DateFormat",props:{date:String},setup(e){const t=e,{date:n}=(0,i.BK)(t);function a(e){const t=new Date(e);return`${o(t.getHours())}:${o(t.getMinutes())} ${o(t.getDate())}-${o(t.getMonth())}-${t.getFullYear()}`}function o(e){return String(e).padStart(2,"0")}return(e,t)=>((0,l.wg)(),(0,l.iD)("td",q,(0,r.zw)(a((0,i.SU)(n))),1))}});const E=T;var K=E;const L={class:"details center"},R=(0,l._)("h3",null,"Player details",-1),G={key:0,class:"card p-1 center"},Q=(0,l._)("th",null,"icon",-1),X=["src"],ee=["src"],te=(0,l._)("th",null,"name",-1),ne=(0,l._)("th",null,"uuid",-1),ae=(0,l._)("th",null,"discord_id",-1),le=(0,l._)("th",null,"tag",-1),re=(0,l._)("th",null,"nickanme",-1),ie=(0,l._)("th",null,"guild_id",-1),oe=(0,l._)("th",null,"skin",-1),se=["src"],ue=(0,l._)("th",null,"created_at",-1),ce=(0,l._)("th",null,"cached_at",-1),de={key:1,class:"pending dummy width-restricted center m-t-1"};var pe=(0,l.aZ)({__name:"DetailsView",setup(e){const t=(0,m.yj)(),n=t.params.uuid,a=(0,i.iH)();return f.retrieveByUuid(n).then((e=>{a.value=e.data})),(e,t)=>((0,l.wg)(),(0,l.iD)("div",L,[R,a.value?((0,l.wg)(),(0,l.iD)("table",G,[(0,l._)("tr",null,[Q,(0,l._)("td",null,[(0,l._)("img",{src:a.value.avatar},null,8,X),(0,l._)("img",{src:`https://visage.surgeplay.com/face/32/${a.value.uuid}`},null,8,ee)])]),(0,l._)("tr",null,[te,(0,l._)("td",null,(0,r.zw)(a.value.name),1)]),(0,l._)("tr",null,[ne,(0,l._)("td",null,(0,r.zw)(a.value.uuid),1)]),(0,l._)("tr",null,[ae,(0,l._)("td",null,(0,r.zw)(a.value.discordId),1)]),(0,l._)("tr",null,[le,(0,l._)("td",null,(0,r.zw)(a.value.tag),1)]),(0,l._)("tr",null,[re,(0,l._)("td",null,(0,r.zw)(a.value.nickname),1)]),(0,l._)("tr",null,[ie,(0,l._)("td",null,(0,r.zw)(a.value.guildId),1)]),(0,l._)("tr",null,[oe,(0,l._)("td",null,[(0,l._)("img",{src:`https://visage.surgeplay.com/bust/64/${a.value.uuid}`,class:"skin"},null,8,se)])]),(0,l._)("tr",null,[ue,(0,l.Wm)(K,{date:a.value.createdAt},null,8,["date"])]),(0,l._)("tr",null,[ce,(0,l.Wm)(K,{date:a.value.cachedAt},null,8,["date"])])])):((0,l.wg)(),(0,l.iD)("div",de))]))}});const me=pe;var ve=me;const he={class:"about"},fe=(0,l._)("h3",null,"Beocraft - The Vanilla SMP",-1),we={class:"card width-restricted center"},_e=(0,l._)("p",{class:"center"},"Here is a short list of server features:",-1),ge={class:"no-bullet"},ye={key:0},ke={key:1},be=(0,l.uE)("<li>No cheating, No griefing, No stealing</li><li>ONLY paid clients (no crack)</li><li>ONLY java edition (no crossplay)</li><li>Chunk claims (/chunk)</li><li>/tpa /home /spawn /back</li><li>Player nicknames (/nick)</li><li>Fast Leaf Decay</li><li>Dragon drops elytra</li><li>Phantoms don&#39;t spawn</li><li>No creaper, ghast and enderman grief</li><li>Bats drop membranes</li><li>Hosted 24/7 in Europe</li><li>Discord based authentication and webhooks</li>",13);var De=(0,l.aZ)({__name:"AboutView",setup(e){const t=(0,i.iH)();return f.retrieveStatus("play.beocraft.net").then((e=>t.value=e.data)),(e,n)=>{const a=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)("div",he,[fe,(0,l._)("main",we,[_e,(0,l._)("ul",ge,[t.value?((0,l.wg)(),(0,l.iD)("li",ye,"Version: "+(0,r.zw)(t.value.version.name),1)):(0,l.kq)("",!0),t.value?((0,l.wg)(),(0,l.iD)("li",ke,"Max slots: "+(0,r.zw)(t.value.players.max),1)):(0,l.kq)("",!0),be])]),(0,l._)("p",null,[(0,l.Wm)(a,{to:"/join"},{default:(0,l.w5)((()=>[(0,l.Uk)("Join our Discord server")])),_:1})])])}}});const xe=De;var He=xe;const je={class:"join"},ze=(0,l._)("h3",null,"You will be redirected to our Discord server",-1),Oe=(0,l._)("p",null,[(0,l.Uk)("If the redirect did not work please use "),(0,l._)("a",{href:"https://discord.gg/q3ZNyDeCcA"},"this link")],-1),Se=(0,l._)("iframe",{src:"https://discord.com/widget?id=1088934690385317928&theme=dark",width:"350",height:"500",allowtransparency:"true",frameborder:"0",sandbox:"allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts",class:"center"},null,-1),Ue=[ze,Oe,Se];var Ae=(0,l.aZ)({__name:"JoinView",setup(e){const t=setTimeout((()=>{window.location.href="https://discord.gg/q3ZNyDeCcA"}),5e3);return(0,l.Jd)((()=>clearTimeout(t))),(e,t)=>((0,l.wg)(),(0,l.iD)("div",je,Ue))}});const Ze=Ae;var Me=Ze;const Ie={key:0,class:"online"},Be=(0,l._)("h3",null,"All The Mods 8",-1),Ne={key:0,class:"flex flex-column width-restricted center"},Pe={key:1,class:"pending dummy width-restricted center m-t-1"};var Fe=(0,l.aZ)({__name:"ModdedView",setup(e){const t=(0,i.iH)();function n(){f.retrieveStatus("atm8.beocraft.net").then((e=>t.value=e.data))}(0,l.wF)((()=>n()));const a=setInterval(n,15e3);return(0,l.Jd)((()=>clearInterval(a))),(e,n)=>t.value?((0,l.wg)(),(0,l.iD)("div",Ie,[Be,(0,l._)("h3",null,"Currently "+(0,r.zw)(t.value.players.online)+" out of "+(0,r.zw)(t.value.players.max)+" players online",1),t.value.players.sample?((0,l.wg)(),(0,l.iD)("main",Ne,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(t.value.players.sample,(e=>((0,l.wg)(),(0,l.j4)(b,{player:e},null,8,["player"])))),256))])):(0,l.kq)("",!0)])):((0,l.wg)(),(0,l.iD)("div",Pe))}});const Ve=Fe;var We=Ve;const Ye=[{path:"/",name:"home",component:S,meta:{title:"Home",description:"Homepage of the Beocraft SMP minecraft server"}},{path:"/about",name:"about",component:He,meta:{title:"About",description:"Info about the Beocraft SMP minecraft server"}},{path:"/online",name:"online",component:N,meta:{title:"Online",description:"How many people are online at the moment?"}},{path:"/modded",name:"modded",component:We,meta:{title:"Modded",description:"How many people are online at the moment?"}},{path:"/join",name:"join",component:Me,meta:{title:"Join",description:"How and where to join the Beocraft SMP"}},{path:"/details/:uuid",name:"UserData",component:ve,meta:{title:"Details",description:"Details about the player"}},{path:"/status",redirect:"/online"},{path:"/home",redirect:"/"},{path:"/invite",redirect:"/join"},{path:"/:catchAll(.*)",name:"notfound",component:J,meta:{title:"Not Found",description:"This page does not exist"}}],$e=(0,m.p7)({history:(0,m.PO)("/"),routes:Ye});function Ce(e,t){const n=document.getElementById(e);n.content=t}$e.beforeEach(((e,t,n)=>{e.meta.title&&e.meta.description&&(document.title=`${e.meta.title} :: Beocraft`,Ce("meta-title",e.meta.title),Ce("meta-desc",e.meta.description)),n()}));var Je=$e;(0,a.ri)(p).use(Je).mount("#app")}},t={};function n(a){var l=t[a];if(void 0!==l)return l.exports;var r=t[a]={exports:{}};return e[a].call(r.exports,r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,a,l,r){if(!a){var i=1/0;for(c=0;c<e.length;c++){a=e[c][0],l=e[c][1],r=e[c][2];for(var o=!0,s=0;s<a.length;s++)(!1&r||i>=r)&&Object.keys(n.O).every((function(e){return n.O[e](a[s])}))?a.splice(s--,1):(o=!1,r<i&&(i=r));if(o){e.splice(c--,1);var u=l();void 0!==u&&(t=u)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[a,l,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var l,r,i=a[0],o=a[1],s=a[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(l in o)n.o(o,l)&&(n.m[l]=o[l]);if(s)var c=s(n)}for(t&&t(a);u<i.length;u++)r=i[u],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(c)},a=self["webpackChunkbeocraft_website"]=self["webpackChunkbeocraft_website"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(1707)}));a=n.O(a)})();
//# sourceMappingURL=app.2aee1b2e.js.map