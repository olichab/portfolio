(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[4],{607:function(e,t){},694:function(e,t,a){},698:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(51),l=a(553),s=a(554),o=a(555),i=a(593),m=a.n(i),u=a(604),p=a.n(u),f=a(695);function E(e){var t=e.images;return r.a.createElement(s.a,{className:"justify-content-center"},t.map((function(e){return r.a.createElement(o.a,{xs:"9",xl:"6",className:"p-1",key:p()()},r.a.createElement(f.a,{width:"100%",height:"320px",image:e.src,pitch:0,yaw:e.yaw,hfov:70,showControls:!1,disableKeyboardCtrl:!0,mouseZoom:!1,autoLoad:!0,autoRotate:2}))})))}E.defaultProps={images:[]};var h=a(696),d=a(40),g=a(629),b=a(697);function j(e){var t=e.images,a=Object(n.useState)(0),c=Object(d.a)(a,2),l=c[0],s=c[1],o=Object(n.useState)(!1),i=Object(d.a)(o,2),m=i[0],u=i[1],p=Object(n.useCallback)((function(e,t){var a=t.index;s(a),u(!0)}),[]),f=t.map((function(e){return{src:e.src,width:e.width,height:e.height}}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{photos:f,onClick:p}),r.a.createElement(b.b,null,m?r.a.createElement(b.a,{onClose:function(){s(0),u(!1)}},r.a.createElement(b.c,{currentIndex:l,views:f.map((function(e){return Object(h.a)({},e,{srcset:e.srcSet,caption:e.title})}))})):null))}j.defaultProps={images:[]};var N=a(57),w=a(62);function v(e){var t=e.currentId,a=w.a.filter((function(e){return e.id===Number(t+1)})),n=w.a.filter((function(e){return e.id===Number(t-1)}));return r.a.createElement("div",null,r.a.createElement(s.a,{className:"justify-content-center mt-5"},r.a.createElement(o.a,{xs:"auto"},a[0]&&r.a.createElement(N.Link,{to:"".concat(a[0].path),className:"link-switch-project hvr-sweep-to-left",smooth:"true"},"Projet",r.a.createElement("br",null),"pr\xe9c\xe9dent"),n[0]&&r.a.createElement(N.Link,{to:"".concat(n[0].path),className:"link-switch-project hvr-sweep-to-right",smooth:"true"},"Projet",r.a.createElement("br",null),"suivant"))))}v.defaultProps={currentId:0};a(694);function x(e){var t=e.projectDetails,a=Object(c.l)().pathname;Object(n.useLayoutEffect)((function(){window.scrollTo(0,0)}),[a]);var i=t.id,u=t.title,p=t.year,f=t.category,h=t.website,d=t.tags,g=t.description,b=t.type,N=t.images;return r.a.createElement(l.a,{className:"details-projet-container"},r.a.createElement(s.a,null,r.a.createElement(o.a,{xs:"auto"},r.a.createElement("h1",{className:"title-details-projet"},u))),r.a.createElement(s.a,{className:"text-details-projet justify-content-center"},r.a.createElement(o.a,{xs:"12",lg:"7"},m()(g)),r.a.createElement(o.a,{xs:"12",lg:"4",className:"offset-lg-1"},r.a.createElement(o.a,{xs:"12",className:"p-0"},r.a.createElement("p",null,"Ann\xe9e : ",p)),r.a.createElement(o.a,{xs:"12",className:"p-0"},r.a.createElement("p",null,"Cat\xe9gorie : ",f)),r.a.createElement(o.a,{xs:"12",className:"p-0"},r.a.createElement("a",{href:h.url,className:"link-unstyled"},h.name)),r.a.createElement(s.a,{className:"align-items-center mt-4"},d.length&&d.map((function(e){return r.a.createElement(o.a,{xs:"auto",className:"p-2",key:e},r.a.createElement("p",{className:"label-stack"},e))}))))),"pano"===b?r.a.createElement(E,{images:N}):r.a.createElement(j,{images:N}),r.a.createElement(v,{currentId:i}))}a.d(t,"default",(function(){return x})),x.defaultProps={projectDetails:[]}}}]);
//# sourceMappingURL=4.4dbd96b4.chunk.js.map