(this["webpackJsonpgrid-secret"]=this["webpackJsonpgrid-secret"]||[]).push([[0],{13:function(e,t,r){},15:function(e,t,r){},16:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(5),o=r.n(c),s=(r(13),r(2)),l=r.n(s),i=r(6),u=r(1),m=r(3),p=r(7),d=r.n(p);r(15);function f(e){var t,r=e.story,c=Object(n.useState)(!1),o=Object(m.a)(c,2),s=o[0],l=o[1],i=r.by,p=r.score,f=r.id,h=r.gridColumnStart,E=r.gridRowStart,b=r.url,g=r.title,k={gridColumnStart:"".concat(h),gridColumnEnd:"".concat(h+2),gridRowStart:"".concat(E),gridRowEnd:"".concat(E+2)},w=d()((t={story:!0},Object(u.a)(t,"column-start-".concat(h),!0),Object(u.a)(t,"row-start-".concat(E),!0),Object(u.a)(t,"expand",s),t));return a.a.createElement("li",{onClick:function(){console.log("click"),l(!s)},key:f,className:w,style:s?k:{}},a.a.createElement("article",null,a.a.createElement("h5",null,g),a.a.createElement("small",null,"By ",i),a.a.createElement("p",null,a.a.createElement("strong",null,"Score ",p),a.a.createElement("a",{href:b,target:"_blank",rel:"noopener noreferrer"},"Read more"))))}function h(e){var t=e.stories;return 0===t.length?a.a.createElement("div",{className:"loading-block"},"Loading stories..."):a.a.createElement("div",{className:"story-list__wrapper"},a.a.createElement("h1",null,"HackerNews Top 500 stories"),a.a.createElement("ul",null,t.map((function(e){return a.a.createElement(f,{key:e.id,story:e})}))))}h.defaultProps={stories:[{}]};var E=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),r=t[0],c=t[1];return Object(n.useEffect)((function(){function e(){return(e=Object(i.a)(l.a.mark((function e(){var t,r,n,a,o,s,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty",e.prev=1,e.next=4,fetch("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty");case 4:if(!1!==(t=e.sent).ok){e.next=7;break}throw new Error("Response Error:"+t.text);case 7:return e.next=9,t.json();case 9:return r=e.sent,n=r.map((function(e){return fetch("https://hacker-news.firebaseio.com/v0/item/".concat(e,".json?print=pretty")).then((function(e){return e.json()}))})),e.next=13,Promise.all(n);case 13:a=e.sent,o=1,s=0,i=a.reduce((function(e,t){return 9===(s+=1)&&(o++,s=1),t.gridRowStart=o,t.gridColumnStart=s,e.push(t),e}),[]),console.log(i),c(i),e.next=24;break;case 21:e.prev=21,e.t0=e.catch(1),console.error(e.t0);case 24:case"end":return e.stop()}}),e,null,[[1,21]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement("div",null,"Hacker News feed")),a.a.createElement("main",null,a.a.createElement(h,{stories:r})))};o.a.render(a.a.createElement(E,null),document.getElementById("root"))},8:function(e,t,r){e.exports=r(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.c1e2adf3.chunk.js.map