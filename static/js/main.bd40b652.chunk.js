(this.webpackJsonpcovid=this.webpackJsonpcovid||[]).push([[0],[,,,,function(e,t,a){e.exports=a(11)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(3),r=a.n(c),s=(a(9),a(10),a(1)),u=function(e){var t=e.active,a=e.cases,c=e.country,r=e.critical,u=e.deaths,i=(e.recovered,e.todayCases),o=e.todayDeaths,m=e.index,E=Object(n.useState)("#"),d=Object(s.a)(E,2),h=d[0],v=d[1];return Object(n.useEffect)((function(){fetch("https://restcountries.eu/rest/v2/name/".concat("UK"===c?"GB":c)).then((function(e){return e.json()})).then((function(e){return e[0]&&v(e[0].flag)}))}),[c]),l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"title"},l.a.createElement("div",null,m),l.a.createElement("div",{className:"flagHolder"},l.a.createElement("div",{className:"flag"},"#"!==h?l.a.createElement("img",{width:"30",height:"25",alt:c,src:h}):null),l.a.createElement("div",null,c))),l.a.createElement("div",{className:"body"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("span",null,"Active: "),l.a.createElement("span",null,t)),l.a.createElement("li",null,l.a.createElement("span",null,"Cases: "),l.a.createElement("span",null,a)),l.a.createElement("li",null,l.a.createElement("span",null,"Critical: "),l.a.createElement("span",null,r)),l.a.createElement("li",null,l.a.createElement("span",null,"Deaths: "),l.a.createElement("span",null,u)),l.a.createElement("li",null,l.a.createElement("span",null,"TodayCases:"),l.a.createElement("span",null,i)),l.a.createElement("li",null,l.a.createElement("span",null,"TodayDeaths:"),l.a.createElement("span",null,o)))))},i=function(e){var t=e.onChangeSearch,a=e.search,n=e.options,c=e.sort,r=e.onChangeSort;return console.log("sort",c),l.a.createElement("div",{className:"header"},l.a.createElement("div",{className:"main-title"},l.a.createElement("div",null,"Covid-19 Live Dashboard"),l.a.createElement("div",{className:"sub-title"},"by Nudelman Alex")),l.a.createElement("div",{className:"tools"},l.a.createElement("div",{className:"search"},l.a.createElement("label",{for:"search"},"Search"),l.a.createElement("input",{placeholder:"...",id:"search",name:"search",onChange:function(e){e.preventDefault(),t(e.target.value)},value:a})),l.a.createElement("div",{className:"sort"},l.a.createElement("label",{for:"sort"},"Sort"),l.a.createElement("select",{id:"sort",onChange:function(e){return r(e.target.value)}},n.map((function(e){return l.a.createElement("option",{key:e,value:e},"string"!==typeof(t=e)?"":t.charAt(0).toUpperCase()+t.slice(1));var t}))))))},o=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),o=Object(s.a)(r,2),m=o[0],E=o[1],d=Object(n.useState)("active"),h=Object(s.a)(d,2),v=h[0],f=h[1],p=function(e){var t=Object(n.useState)(0),a=Object(s.a)(t,2),l=a[0],c=a[1];return Object(n.useEffect)((function(){var t=setTimeout((function(){c(l+1)}),e);return function(){return clearTimeout(t)}}),[e,l]),l}(144e5);Object(n.useEffect)((function(){fetch("https://coronavirus-19-api.herokuapp.com/countries/").then((function(e){return e.json()})).then((function(e){return c(e.sort((function(e,t){return e.active>t.active})))}))}),[p]);var b=m.length?a.filter((function(e){return e.country.match(new RegExp(m,"i"))})):a;return l.a.createElement("div",null,l.a.createElement(i,{onChangeSearch:E,search:m,sort:v,onChangeSort:f,options:["active","cases","critical","deaths","todayCases","todayDeaths"]}),b.sort((function(e,t){return e[v]>t[v]?-1:t[v]>e[v]?1:0})).map((function(e,t){return l.a.createElement(u,Object.assign({key:e.country},e,{index:t+1}))})))};var m=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement(o,null)))};r.a.render(l.a.createElement(m,null),document.getElementById("root"))}],[[4,1,2]]]);
//# sourceMappingURL=main.bd40b652.chunk.js.map