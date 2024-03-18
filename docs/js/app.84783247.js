(function(){"use strict";var e={638:function(e,t,n){var o=n(5130),i=n(6768);function r(e,t,n,o,r,l){const m=(0,i.g2)("AppTitle"),u=(0,i.g2)("TodoApp");return(0,i.uX)(),(0,i.CE)(i.FK,null,[(0,i.bF)(m,{title:"Todo List"}),(0,i.bF)(u)],64)}var l=n(4232);function m(e,t,n,o,r,m){return(0,i.uX)(),(0,i.CE)("h1",null,(0,l.v_)(n.title),1)}var u={name:"AppTitle",props:{title:String}},s=n(1241);const a=(0,s.A)(u,[["render",m],["__scopeId","data-v-2c8c54da"]]);var d=a;const c={class:"container"},p={class:"row justify-content-md-center"},f={class:"col col-lg-4"};function b(e,t,n,o,r,l){const m=(0,i.g2)("AddItem"),u=(0,i.g2)("ItemsList");return(0,i.uX)(),(0,i.CE)("div",c,[(0,i.Lk)("div",p,[(0,i.Lk)("div",f,[(0,i.bF)(m,{onAddItem:l.addItem},null,8,["onAddItem"]),(0,i.bF)(u,{items:r.items,onDeleteItem:l.deleteItem,onToggleItem:l.toggleItem},null,8,["items","onDeleteItem","onToggleItem"])])])])}n(4114);const v=[{name:"Clean up my room",isCompleted:!1},{name:"Take out the trash",isCompleted:!1},{name:"Walk my dog",isCompleted:!1},{name:"Drink my coffee",isCompleted:!1}],g={class:"input-group mb-3"},h=(0,i.Lk)("input",{class:"btn btn-outline-secondary btn-primary button-add",type:"submit",value:"Add"},null,-1);function k(e,t,n,r,l,m){return(0,i.uX)(),(0,i.CE)("form",{onSubmit:t[1]||(t[1]=(...e)=>m.onSubmit&&m.onSubmit(...e)),class:"add-form"},[(0,i.Lk)("div",g,[(0,i.bo)((0,i.Lk)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>l.name=e),type:"text",class:"form-control",placeholder:"Enter new element"},null,512),[[o.Jo,l.name]]),h])],32)}var I={name:"AddItem",data(){return{name:""}},methods:{onSubmit(e){if(e.preventDefault(),!this.name)return;const t={name:this.name,isCompleted:!1};this.$emit("add-item",t),this.name=""}}};const y=(0,s.A)(I,[["render",k]]);var C=y;const A={class:"table table-striped"};function x(e,t,n,o,r,l){const m=(0,i.g2)("ItemRow");return(0,i.uX)(),(0,i.CE)("table",A,[(0,i.Lk)("tbody",null,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(n.items,((t,n)=>((0,i.uX)(),(0,i.Wv)(m,{key:n,index:n,item:t,onToggleItem:t=>e.$emit("toggle-item",n),onDeleteItem:t=>e.$emit("delete-item",n)},null,8,["index","item","onToggleItem","onDeleteItem"])))),128))])])}const L=["id"],T=["htmlFor"],w={class:"text-end"};function O(e,t,n,o,r,m){return(0,i.uX)(),(0,i.CE)("tr",null,[(0,i.Lk)("td",null,(0,l.v_)(n.index+1),1),(0,i.Lk)("td",null,[(0,i.Lk)("input",{class:"form-check-input",type:"checkbox",id:`checkboxitem-${n.index}`,onClick:t[0]||(t[0]=t=>e.$emit("toggle-item",n.index))},null,8,L)]),(0,i.Lk)("td",null,[(0,i.Lk)("label",{htmlFor:`checkboxitem-${n.index}`,class:(0,l.C4)([n.item?.isCompleted?"done":""])},(0,l.v_)(n.item.name),11,T)]),(0,i.Lk)("td",w,[(0,i.Lk)("button",{class:"btn btn-danger button-delete",type:"button",onClick:t[1]||(t[1]=t=>e.$emit("delete-item",n.index))}," X ")])])}var _={name:"ItemRow",props:{index:Number,item:Object}};const E=(0,s.A)(_,[["render",O]]);var F=E,X={name:"ItemsList",components:{ItemRow:F},props:{items:Array},emits:["delete-item","toggle-item"]};const j=(0,s.A)(X,[["render",x]]);var $=j,D={name:"TodoApp",components:{AddItem:C,ItemsList:$},data(){return{items:[...v]}},methods:{addItem(e){this.items.push(e)},deleteItem(e){this.items.splice(e,1)},toggleItem(e){this.items[e].isCompleted=!this.items[e].isCompleted}}};const S=(0,s.A)(D,[["render",b]]);var R=S,K={name:"App",components:{AppTitle:d,TodoApp:R}};const P=(0,s.A)(K,[["render",r]]);var W=P;(0,o.Ef)(W).mount("#app")}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={exports:{}};return e[o].call(r.exports,r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,o,i,r){if(!o){var l=1/0;for(a=0;a<e.length;a++){o=e[a][0],i=e[a][1],r=e[a][2];for(var m=!0,u=0;u<o.length;u++)(!1&r||l>=r)&&Object.keys(n.O).every((function(e){return n.O[e](o[u])}))?o.splice(u--,1):(m=!1,r<l&&(l=r));if(m){e.splice(a--,1);var s=i();void 0!==s&&(t=s)}}return t}r=r||0;for(var a=e.length;a>0&&e[a-1][2]>r;a--)e[a]=e[a-1];e[a]=[o,i,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var i,r,l=o[0],m=o[1],u=o[2],s=0;if(l.some((function(t){return 0!==e[t]}))){for(i in m)n.o(m,i)&&(n.m[i]=m[i]);if(u)var a=u(n)}for(t&&t(o);s<l.length;s++)r=l[s],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(a)},o=self["webpackChunktodo_app_vue"]=self["webpackChunktodo_app_vue"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[504],(function(){return n(638)}));o=n.O(o)})();
//# sourceMappingURL=app.84783247.js.map