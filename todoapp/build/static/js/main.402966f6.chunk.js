(this.webpackJsonptodoapp=this.webpackJsonptodoapp||[]).push([[0],{163:function(e,t,n){},166:function(e,t,n){},274:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(48),i=n.n(r),s=(n(163),n(2)),o=n.n(s),l=n(15),u=n(6),d=n(31),b=(n(166),n(146)),j=n(108),p=n(319),m=n(316),h=n(145),f=n(320),O=n(322),x=n(321),v=n(324),g=n(325),w=n(5);function y(){return Object(w.jsx)(x.a,{sx:{flexGrow:1},children:Object(w.jsx)(O.a,{position:"static",className:"navbar",children:Object(w.jsx)(v.a,{children:Object(w.jsx)(g.a,{variant:"h6",component:"div",sx:{flexGrow:1},className:"navbartext",children:"ToDo App"})})})})}var k=n(107),N=n.n(k),S=n(326);Object(h.a)({apiKey:"AIzaSyAT6J2QUlILZN8uQMwzWjcUSHt55i7Pq6E",authDomain:"todo-app-react-task.firebaseapp.com",projectId:"todo-app-react-task",storageBucket:"todo-app-react-task.appspot.com",messagingSenderId:"931158328108",appId:"1:931158328108:web:2a959dad61011859c6e289",measurementId:"G-9JHP2WFWBT"});var T=Object(d.e)();function D(e,t){return I.apply(this,arguments)}function I(){return(I=Object(u.a)(o.a.mark((function e(t,n){var a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.resetForm,console.log("values",t),e.prev=2,e.next=5,Object(d.a)(Object(d.b)(T,"ToDolist"),{item:t.item});case 5:c=e.sent,console.log("Document written with ID: ",c.id),a({}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.error("Error adding document: ",e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})))).apply(this,arguments)}var C=j.a({item:j.b("Enter your item").min(3,"item should be of minimum 3 characters length").required("item is required")});function E(){return(E=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.c)(Object(d.d)(Object(d.b)(T,"ToDolist"),t));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var F=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1];Object(a.useEffect)((function(){var e=Object(d.g)(Object(d.b)(T,"ToDolist")),t=Object(d.f)(e,(function(e){var t=[];e.forEach((function(e){var n=e.id,a=e.data();t.unshift({id:n,item:a.item})})),c(t)}));return function(){t(),console.log("unsub")}}),[]);var r=Object(b.a)({validationSchema:C,initialValues:{item:""},onSubmit:D});function i(){return i=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.forEach(function(){var e=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.c)(Object(d.d)(Object(d.b)(T,"ToDolist"),t.id));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}}),e)}))),i.apply(this,arguments)}return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(y,{}),Object(w.jsx)(S.a,{children:Object(w.jsx)("div",{className:"container",children:Object(w.jsxs)("div",{className:"main",children:[Object(w.jsxs)("form",{onSubmit:r.handleSubmit,children:[Object(w.jsx)(m.a,{id:"outlined-basic",name:"item",label:"item",className:"box",value:r.values.item,onChange:r.handleChange,error:r.touched.item&&Boolean(r.errors.item),helperText:r.touched.item&&r.errors.item,variant:"outlined"}),Object(w.jsxs)("div",{className:"btngroup",children:[Object(w.jsx)(p.a,{id:"btn",variant:"contained",color:"primary",type:"submit",children:"+"}),Object(w.jsx)(f.a,{"aria-label":"delete",type:"reset",id:"delbtt",size:"large",onClick:function(){return i.apply(this,arguments)},children:Object(w.jsx)(N.a,{id:"delallbtn"})})]})]}),Object(w.jsx)("div",{className:"item",children:n.map((function(e,t){return Object(w.jsxs)("div",{children:[Object(w.jsxs)("div",{id:"cont",children:[Object(w.jsx)("li",{children:e.item}),Object(w.jsx)(f.a,{"aria-label":"delete",className:"delbtn",size:"small",onClick:function(){!function(e){E.apply(this,arguments)}(e.id)},children:Object(w.jsx)(N.a,{className:"delicon"})})]}),Object(w.jsx)("br",{})]},t)}))})]})})})]})},B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,327)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};i.a.render(Object(w.jsx)(c.a.StrictMode,{children:Object(w.jsx)(F,{})}),document.getElementById("root")),B()}},[[274,1,2]]]);
//# sourceMappingURL=main.402966f6.chunk.js.map