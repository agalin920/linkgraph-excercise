(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{31:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n(0),s=n(4),a=n.n(s),i=(n(31),n(8)),u=n(6),o=n.n(u);var j=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],s=t[1];return Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:"QUESTION 1"}),Object(r.jsx)("label",{htmlFor:"name",children:"Name"}),Object(r.jsx)("input",{name:"name",type:"text",placeholder:"Hi Developer Enter your Name Here",onChange:function(e){return s(e.target.value)}}),Object(r.jsx)("button",{onClick:function(){o.a.post("http://mockbin.org/bin/08e5560b-befa-41f3-9397-9a774b8397a9",{position:"reactJS",devName:n})},children:"Save"})]})},d=n(7),O=n(25);var b=function(e){var t,n=e.center;return Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).MAPS_API_KEY&&(t=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).MAPS_API_KEY),Object(r.jsx)("div",{style:{height:"300px",width:"300px"},children:Object(r.jsx)(O.a,{bootstrapURLKeys:{key:t},defaultCenter:n,defaultZoom:2})})};var l=Object(d.b)((function(e){return{users:e.users}}),(function(e){return{setUsersData:function(t){return e({type:"SET_USER_DATA",payload:t})}}}))((function(e){var t=e.users,n=e.setUsersData;return Object(c.useEffect)((function(){o.a.get("https://jsonplaceholder.typicode.com/users").then((function(e){n(e.data)}))}),[]),Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:"QUESTION 2"}),t.map((function(e){return Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{children:e.name}),Object(r.jsx)("div",{children:e.address.street}),Object(r.jsx)("div",{children:e.address.suite}),Object(r.jsx)(b,{center:{lat:+e.address.geo.lat,lng:+e.address.geo.lng}})]})}))]})}));var h=Object(d.b)((function(e){return{users:e.users}}),(function(e){return{setUsersData:function(t){return e({type:"SET_USER_DATA",payload:t})}}}))((function(e){var t=e.users,n=e.setUsersData,s=Object(c.useState)([]),a=Object(i.a)(s,2),u=a[0],j=a[1],d=Object(c.useState)(""),O=Object(i.a)(d,2),b=O[0],l=O[1];return Object(c.useEffect)((function(){o.a.get("https://jsonplaceholder.typicode.com/users").then((function(e){n(e.data)}))}),[]),Object(c.useEffect)((function(){if(b.length>0){var e=new RegExp("^".concat(b),"i");j(t.sort().filter((function(t){return e.test(t.name)})).map((function(e){return e.name})))}else j([])}),[b]),Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:"QUESTION 3"}),Object(r.jsx)("input",{type:"text",onChange:function(e){return l(e.target.value)},value:b,placeholder:"Enter a user's name"}),Object(r.jsx)("ul",{children:u.map((function(e){return Object(r.jsx)("li",{onClick:function(){return l(e)},children:e})}))})]})}));var f=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(j,{}),Object(r.jsx)(h,{}),Object(r.jsx)(l,{})]})},p=n(9),v=n(14);var S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{users:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_DATA":return Object(v.a)(Object(v.a)({},e),{},{users:t.payload});default:return e}},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,56)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),s(e),a(e)}))},x=Object(p.b)(S);a.a.render(Object(r.jsx)(d.a,{store:x,children:Object(r.jsx)(f,{})}),document.getElementById("root")),E()}},[[55,1,2]]]);
//# sourceMappingURL=main.09f709b9.chunk.js.map