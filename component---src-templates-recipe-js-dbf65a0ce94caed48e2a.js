(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"+VNo":function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},At4Z:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n);t.a=function(e){var t=e.children,a=e.title;return r.a.createElement("div",{class:"container h-100 pt-5"},r.a.createElement("div",{class:"pb-2"},r.a.createElement("h1",null,a)),r.a.createElement("div",{class:"bg-light h-100 border-top border-primary p-4"},t))}},"EU/P":function(e,t,a){var n=a("P8UN"),r=a("ap2Z"),l=a("96qb"),c=a("+VNo"),i="["+c+"]",s=RegExp("^"+i+i+"*"),o=RegExp(i+i+"*$"),u=function(e,t,a){var r={},i=l((function(){return!!c[e]()||"​"!="​"[e]()})),s=r[e]=i?t(f):c[e];a&&(r[a]=s),n(n.P+n.F*i,"String",r)},f=u.trim=function(e,t){return e=String(r(e)),1&t&&(e=e.replace(s,"")),2&t&&(e=e.replace(o,"")),e};e.exports=u},O8qb:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("Wbzz"),c=(a("q4sD"),function(e){return r.a.createElement("nav",{class:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement("a",{class:"navbar-brand",href:"/"},"DnD Crafting"),r.a.createElement("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{class:"navbar-toggler-icon"})),r.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{class:"navbar-nav mr-auto"},r.a.createElement("li",{class:"nav-item active"},r.a.createElement(l.a,{className:"nav-link",to:"/ingredients"},"Ingredients")),r.a.createElement("li",{class:"nav-item active"},r.a.createElement(l.a,{className:"nav-link",to:"/locations"},"Locations")),r.a.createElement("li",{class:"nav-item active"},r.a.createElement(l.a,{className:"nav-link",to:"/recipes"},"Recipes")),r.a.createElement("li",{class:"nav-item active"},r.a.createElement(l.a,{className:"nav-link",to:"/about"},"About")))))});t.a=function(e){var t=e.children;return r.a.createElement("div",{style:{height:"100%",width:"100%",position:"absolute",top:0,left:0,backgroundImage:"url(http://www.zingerbugimages.com/backgrounds/off_white_parchment_paper_wallpaper_texture_seamless.jpg)"}},r.a.createElement(c,null),t)}},Wbzz:function(e,t,a){"use strict";a("YBKJ");var n=a("q1tI"),r=a.n(n),l=a("+ZDr"),c=a.n(l);a.d(t,"a",(function(){return c.a}));a("lw3w"),a("emEt").default.enqueue,r.a.createContext({})},YBKJ:function(e,t,a){"use strict";var n=a("emib"),r=a("qDzq"),l=a("CCE/"),c=a("TUPI"),i=a("kxs/"),s=a("96qb"),o=a("chL8").f,u=a("Drra").f,f=a("rjfK").f,m=a("EU/P").trim,p=n.Number,v=p,g=p.prototype,d="Number"==l(a("nsRs")(g)),E="trim"in String.prototype,b=function(e){var t=i(e,!1);if("string"==typeof t&&t.length>2){var a,n,r,l=(t=E?t.trim():m(t,3)).charCodeAt(0);if(43===l||45===l){if(88===(a=t.charCodeAt(2))||120===a)return NaN}else if(48===l){switch(t.charCodeAt(1)){case 66:case 98:n=2,r=49;break;case 79:case 111:n=8,r=55;break;default:return+t}for(var c,s=t.slice(2),o=0,u=s.length;o<u;o++)if((c=s.charCodeAt(o))<48||c>r)return NaN;return parseInt(s,n)}}return+t};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(e){var t=arguments.length<1?0:e,a=this;return a instanceof p&&(d?s((function(){g.valueOf.call(a)})):"Number"!=l(a))?c(new v(b(t)),a,p):b(t)};for(var h,I=a("QPJK")?o(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;I.length>N;N++)r(v,h=I[N])&&!r(p,h)&&f(p,h,u(v,h));p.prototype=g,g.constructor=p,a("IYdN")(n,"Number",p)}},e4VM:function(e,t,a){a("sC2a"),e.exports={convertToSlug:function(e){return e.toLowerCase().replace(/ /g,"-").replace(/[^\w-]+/g,"")}}},eYZ9:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return o}));var n=a("q1tI"),r=a.n(n),l=a("9eSz"),c=a.n(l),i=a("O8qb"),s=a("At4Z"),o=(a("e4VM"),"2068117607");t.default=function(e){var t=e.data.recipesJson;return r.a.createElement(i.a,null,r.a.createElement(s.a,{title:t.title},r.a.createElement(c.a,{fluid:t.image.childImageSharp.fluid,alt:t.title,style:{float:"left",margin:"0rem 1rem 0rem 2rem",width:150}}),r.a.createElement("h4",null,"Effect: ",t.effect),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.description}}),r.a.createElement("div",{class:"w-100"},r.a.createElement("h2",null,"Ingredients"))))}},lw3w:function(e,t,a){var n;e.exports=(n=a("rzlk"))&&n.default||n},q4sD:function(e,t,a){},rzlk:function(e,t,a){"use strict";a.r(t);a("E5k/");var n=a("q1tI"),r=a.n(n),l=a("IOVJ");t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null}}}]);
//# sourceMappingURL=component---src-templates-recipe-js-dbf65a0ce94caed48e2a.js.map