(this["webpackJsonpicome-user"]=this["webpackJsonpicome-user"]||[]).push([[0],{61:function(e,a,t){},62:function(e,a,t){"use strict";t.r(a);var i=t(2),c=t.n(i),n=t(23),o=t.n(n),s=t(5),r=t(6),l=t.n(r),A=t(14),d=t(11),j=t(41),g=t.p+"static/media/logo.8fa4af35.png",m=t(33);m.a.initializeApp({apiKey:"AIzaSyBr0H5fa83YncVy01C6qT_ZAiZcZ9hSqsw",authDomain:"idecom-report.firebaseapp.com",projectId:"idecom-report",storageBucket:"idecom-report.appspot.com",messagingSenderId:"867915011110",appId:"1:867915011110:web:c4af4848308a9aa19e42e7"});var u=m.a.firestore(),b=m.a.auth(),h=t(29),O=t(3),f=new h.a;var x=function(){var e=Object(j.a)(),a=e.register,t=e.handleSubmit,c=Object(i.useState)(""),n=Object(d.a)(c,2),o=n[0],r=n[1],m=Object(i.useState)(""),h=Object(d.a)(m,2),x=h[0],p=h[1],v=Object(i.useState)(""),w=Object(d.a)(v,2),C=w[0],E=w[1],B=function(){var e=Object(A.a)(l.a.mark((function e(){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=!1,e.next=3,u.collection("empleados").where("correo","==",o).get().then((function(e){e.forEach((function(e){a=!!e.data().entra}))}));case 3:return e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(A.a)(l.a.mark((function e(a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,B();case 3:e.sent?b.signInWithEmailAndPassword(o,x).then((function(){console.log("Succeed"),f.set("email",o,{path:"/"}),f.set("password",x,{path:"/"})})).then((function(){window.location.href="./home"})).catch((function(e){console.log(e),E(k(e.code))})):E("No tienes permisos para entrar");case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();function k(e){console.log(e);var a="";switch(e){case"auth/wrong-password":a="Contrase\xf1a Incorrecta";break;case"auth/user-not-found":a="Usuario no encontrado";break;case"auth/too-many-requests":a="Se ha bloqueado temporalmente, demasiadas peticiones";break;default:a="Hubo un error"}return a}return Object(i.useEffect)((function(){f.get("email")&&(window.location.href="./home")}),[]),Object(O.jsx)("div",{className:"login-background",children:Object(O.jsx)("form",{onChange:t((function(e){r(e.email),p(e.password),E("")})),children:Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("img",{src:g,alt:"logo de la empresa"}),Object(O.jsx)("span",{children:"Ingresar"}),Object(O.jsx)("span",{className:"subtitle",children:"Introduce tus credenciales"}),Object(O.jsx)("br",{}),Object(O.jsx)("input",Object(s.a)({type:"email",className:"form__input",id:"name",placeholder:"Correo"},a("email"))),Object(O.jsx)("input",Object(s.a)({type:"password",className:"form__input",id:"name",placeholder:"Contrase\xf1a"},a("password"))),Object(O.jsx)("span",{className:"warning",children:C}),Object(O.jsx)("button",{onClick:D,children:"Entrar"})]})})})},p=t(21),v=t(26),w="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAEAQAAABQ8GUWAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAAAGAAAABgAPBrQs8AAAAHdElNRQflCQ4DKTV3IdBCAAACpUlEQVR42u2bvS4EURzF/7PxEApKiUaiQCe+KlaIhGwoRLBTie9GIQiNRKH0Dho6z+AdRDErEhFWYgS77lHcZsedyJo19+xyT7e79+Oc3/4ns3PvXhGygGwWKBRgXUEADA97fABBINLSwpk9CDJsAFy1ttYBAN8XKRRYs9MvAdsCgMrXdVABXDkAbANsOQBsA2w5AGwDbDkAbANsOQC1dIZqamIHoAAAPA84OBAvDKGurqA6OthBrAo4Po4uLpydsT1V7z2qnw+gjo7M1ZXTU3YwKwCAw0Mz/P090N7ODpY6AGB/3wz/+AjV1cUOlToAYG/PDF8sQnV3swOlDgDY2YkP39PDDpM6AKjNTSO7en6G6u1lB0kdALC+HhsefX3sEKkDAFZXzbIPQ6C/nx0gdQDAykp8+IEBtvnUAUDl84BS0SYvL8DQENt46gCgFhfN8K+vwMgI23SaADz9pu+LnJyIeBUbJeWyyOysyMUF2/T3KhY9r/pfdGbZY2YG+PhAw+rhAZiYSFwBwO2tSHMz+3usTTc3nlfdDvPXCsiIlEps+7UreYaMyNKSvt4bVdfXgny+piGgJieBUil6dZTLwPQ0O95v65vb4NRUPIRcjm3aCgD9YS6nQ1fq/R0YH2cbtwJAN5ibM2+Lb2/A2BjbvBUAutH8fCwENTrKDmAFgG64sBBfCdksO4QVACJ/8+HoRwA0hOVlE0IYAoOD7DBWAOhOf2eBJBEA3XFtzWDQgEtkiQHozltbZiU8PQGdnexgVgDoAba3TQjn5+xg1gDoQXZ3o8P8k73B6EAbG8DdHXB5CdXWxg6WFID7rzDbEFsOANsAWw4A2wBbDgDbAFsOANsAWw4A2wBbdAC2zw5/nZ/+MMQ9O1wHFcBVXRyeZp0dDgIR3/8Eafwa++fP6voAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDktMTRUMDM6NDE6NTMrMDA6MDANuXigAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTA5LTE0VDAzOjQxOjUzKzAwOjAwfOTAHAAAAABJRU5ErkJggg==";var C=function(){return Object(O.jsxs)("div",{className:"lds-roller",children:[Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{})]})},E="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAABuwAAAbsBOuzj4gAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAANcSURBVHic7ZtJbhNBFIa/H0EShjMgJNjBFcKQkcyBhC2XQGLBLVjCFRICiZ05YQjHAPYcgDFBPBblWMGqtqPuruqynCf1xqV+5e97z1K1q0tmRt6QNAg8A24AL4HnZnaYO2EFobwCJJ0DvgDXTnxcAxa7ScK5Avfe5H94gBlgWVJfgbxRo0gHCPgEXPcM14GFbuiE3B1gztwT4I9neBpY6YpOMLNCF7AAHAHmuepAf9E5Ql7lJIGHbSSspyyhvEROwmGGhI1UJZSbDB50m4TyE8J8GwmbqUkIk7SzhIGqwYMKaEiYayNhKxUJRVaCbcPMVoHFhoTWGAdWJQ2Emv+0EUwAgJmtAY/wSxgjAQlBBUBTQlYnjAFrVUoILgDAzGq4FaNPwihOwsUY36U1oggAMLM6CUqIJgCaEo5XjK0xAtRiS4gqAMDM1nErxt+e4WEiS4guAMDMNnCdkCWhLulSjO9SiQBoSsjqhCFcJwSXUJkAADPbxC2bsyQE74RKBQCY2RZOwi/P8D1gPaSEygVARwl3CSghCQEAZraNe4DKkrAh6XLZ8yYjAMDMdsiWcAfXCaVKSEoANCXMki2h1E5ITgCAme3iJPz0DN+mRAlJCoBTSdiUdKXoPMkKADCzPdx2m0/CIK4TCklIWgCAme3TXsKLIvlz7w3GDklDuN3n1vXAEXDVzL7myZt8B4SOrhAgaRi3z+hbDS7lrT50wU+gAV8DfP8RfAQmzexb3vxJd4CkEQLCQ8ICJI0Ca/jhD4CJovAA54smCBEn4H1/lx/gKv+9jLmS6wBJY2TDf6BEeEhMQAN+lWz4qTLhISEBksbJhn9PyZU/jiQESLoPvCEbfsrMfoSYu3IBHeDfERAeKhYgaQIH3+8ZfgtMh4SHCgVImgRekw0/ExoeKhLQgF/BD79PhMofR3QBkqbIrvw+rvK+Z/8gEVWApGlc5X2v0O4RGR4iCmjAv8IPvwvMxoaHSAIkzZAgPEQQIGkWWMYPv4OD9+0BRImgAhrwS2TDz1UJDwEFSJoju/LbJAAPgQRImsdV/oJneAuYTwEeOHtZumz43n1dnl4+MEEvH5mhlw9N4d7maAffVzVgp+vs4GSBe2/hh6/RJfBwdni60NHZv8Bj3MruM/CULoMH+AdqWvS61QBGOQAAAABJRU5ErkJggg==";var B=function(e){return Object(O.jsxs)("div",{className:"User-CardContainer",onClick:e.onClick,children:[Object(O.jsx)("img",{alt:"user icon",src:"data:image/png;base64,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",width:"27px",height:"27px",className:"user-icon"}),Object(O.jsx)("span",{id:"name",children:e.name}),Object(O.jsx)("img",{alt:"arrow icon",src:E,width:"20px",height:"20px",className:"user-icon-arrow"})]})},D=new h.a;var k=function(){var e=Object(i.useState)(),a=Object(d.a)(e,2),t=a[0],c=a[1];return Object(i.useEffect)((function(){D.get("email")||(window.location.href="./"),c([]);var e=[];u.collection("empleados").onSnapshot((function(a){a.docChanges().forEach((function(a){"added"===a.type&&e.push({name:a.doc.data().nombre,email:a.doc.data().correo})})),c(e),console.log(t)}))}),[]),Object(O.jsxs)("div",{children:[Object(O.jsx)(p.a,{bg:"dark",variant:"dark",children:Object(O.jsxs)(v.a,{children:[Object(O.jsx)("img",{alt:"",id:"logout",src:w,width:"27px",height:"27px",className:"d-inline-block align-top ",onClick:function(e){e.preventDefault(),b.signOut().then((function(){D.remove("email",{path:"/"}),D.remove("password",{path:"/"}),window.location.href="./"})).catch((function(e){console.log(e)}))}}),Object(O.jsx)(p.a.Brand,{className:"mx-auto",children:"Empleados"})]})}),Object(O.jsx)("div",{className:"grid",children:Object(O.jsx)("div",{className:"foils",children:t?t.map((function(e,a){return Object(O.jsx)(B,{name:e.name,onClick:function(){return a=e.name,void(window.location.href="./foils/".concat(a));var a}},a)})):Object(O.jsx)(C,{})})})]})},N=t(42),I=t(10),R=(t(55),t.p+"static/media/noImg.12f0f14f.png");var S=function(e){return e.image?Object(O.jsxs)("div",{className:"CardDetailContainer",children:[Object(O.jsx)("div",{className:"DetailTitle",style:{backgroundColor:e.color},children:e.title}),"null"!==e.image?Object(O.jsxs)("div",{children:[Object(O.jsx)("img",{alt:"",className:"base64Image",src:"data:image/png;base64, "+e.image})," ",Object(O.jsx)("div",{className:"Download",children:Object(O.jsx)("a",{href:"data:image/png;base64, "+e.image,download:"".concat(e.title),children:"Descargar"})})]}):Object(O.jsx)("img",{alt:"",className:"NoImage",src:R})]}):Object(O.jsxs)("div",{className:"CardDetailContainer",children:[Object(O.jsx)("div",{className:"DetailTitle",children:e.title}),Object(O.jsx)("img",{alt:"",className:"NoImage",src:R})]})};var M=function(){var e=Object(i.useState)(),a=Object(d.a)(e,2),t=a[0],c=a[1],n=window.location.href,o=n.substring(n.lastIndexOf("/")+1);return Object(i.useEffect)((function(){var e=[];u.collection("folios").where("folio","==",o).onSnapshot((function(a){a.docChanges().forEach((function(a){"added"===a.type&&a.doc.data().folio===o&&e.push({card1:a.doc.data().carta,card2:a.doc.data().carta2,croquis:a.doc.data().croquis,materiales:a.doc.data().materiales,imagen1:a.doc.data().img1,imagen2:a.doc.data().img2,imagen3:a.doc.data().img3,imagen4:a.doc.data().img4,imagen5:a.doc.data().img5,imagen6:a.doc.data().img6,imagen7:a.doc.data().img7,imagen8:a.doc.data().img8,imagen9:a.doc.data().img9,imagen10:a.doc.data().img010,imagen11:a.doc.data().img011,imagen12:a.doc.data().img012,imagen13:a.doc.data().img013,imagen14:a.doc.data().img014,imagen15:a.doc.data().img015}),c(e)}))}))}),[]),Object(O.jsxs)("div",{children:[Object(O.jsx)(p.a,{bg:"dark",variant:"dark",children:Object(O.jsx)(v.a,{children:Object(O.jsxs)(p.a.Brand,{className:"mx-auto",children:["Folio ",o]})})}),Object(O.jsx)("div",{className:"gridDetail",children:Object(O.jsx)("div",{className:"foils",children:t?Object(O.jsxs)("div",{children:[Object(O.jsx)(S,{image:t[0].card1,title:"Carta 1",color:"#7dcea0"}),Object(O.jsx)(S,{image:t[0].card2,title:"Carta 2",color:"#7dcea0"}),Object(O.jsx)(S,{image:t[0].croquis,title:"Croquis",color:"#f1948a"}),Object(O.jsx)(S,{image:t[0].materiales,title:"Materiales",color:"#85c1e9"}),Object(O.jsx)(S,{image:t[0].imagen1,title:"Evidencia 1",color:"#f9e79f"}),Object(O.jsx)(S,{image:t[0].imagen2,title:"Evidencia 2",color:"#f9e79f"}),Object(O.jsx)(S,{image:t[0].imagen3,title:"Evidencia 3",color:"#f9e79f"}),Object(O.jsx)(S,{image:t[0].imagen4,title:"Evidencia 4",color:"#f9e79f"}),Object(O.jsx)(S,{image:t[0].imagen5,title:"Evidencia 5",color:"#f9e79f"}),Object(O.jsx)(S,{image:t[0].imagen6,title:"Evidencia 6",color:"#f9e79f"}),Object(O.jsx)(S,{image:t[0].imagen7,title:"Evidencia 7",color:"#f9e79f"}),Object(O.jsx)(S,{image:t[0].imagen8,title:"Evidencia 8",color:"#f9e79f"}),Object(O.jsx)(S,{image:t[0].imagen9,title:"Evidencia 9",color:"#f9e79f"}),Object(O.jsx)(S,{image:t[0].imagen10,title:"Evidencia 10",color:"#f9e79f"}),Object(O.jsx)(S,{image:t[0].imagen11,title:"Evidencia 11",color:"#f9e79f"}),Object(O.jsx)(S,{image:t[0].imagen12,title:"Evidencia 12",color:"#f9e79f"}),Object(O.jsx)(S,{image:t[0].imagen13,title:"Evidencia 13",color:"#f9e79f"}),Object(O.jsx)(S,{image:t[0].imagen14,title:"Evidencia 14",color:"#f9e79f"}),Object(O.jsx)(S,{image:t[0].imagen15,title:"Evidencia 15",color:"#f9e79f"})]}):Object(O.jsx)(C,{})})})]})};var Q=function(e){return Object(O.jsxs)("div",{className:"CardContainer",onClick:e.onClick,children:[Object(O.jsx)("span",{id:"name",children:e.name}),Object(O.jsxs)("span",{id:"foil",children:["Folio ",e.foil]}),Object(O.jsx)("img",{alt:"",src:E,width:"20px",height:"20px"})]})},J=new h.a;var U=function(){var e=Object(i.useState)(),a=Object(d.a)(e,2),t=a[0],c=a[1],n=Object(i.useState)(""),o=Object(d.a)(n,2),s=o[0],r=o[1],j=window.location.href,g=j.substring(j.lastIndexOf("/")+1),m=function(e){e.preventDefault(),b.signOut().then((function(){J.remove("email",{path:"/"}),J.remove("password",{path:"/"}),window.location.href="/"})).catch((function(e){console.log(e)}))},h=function(){var e=Object(A.a)(l.a.mark((function e(){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=[],e.next=3,u.collection("folios").where("nombre","==",g).get().then((function(e){e.forEach((function(e){a.push({foil:e.data().folio})})),c(a)})).catch((function(e){r(e)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){J.get("email")||(window.location.href="/"),console.log(h()),console.log(t)}),[]),s?Object(O.jsxs)("div",{children:[Object(O.jsx)(p.a,{bg:"dark",variant:"dark",children:Object(O.jsxs)(v.a,{children:[Object(O.jsx)("img",{alt:"",id:"logout",src:w,width:"27px",height:"27px",className:"d-inline-block align-top ",onClick:m}),Object(O.jsx)(p.a.Brand,{className:"mx-auto",children:"Mis Folios"})]})}),Object(O.jsx)("div",{className:"grid",children:"Ha ocurrido un error. Intentalo m\xe1s tarde."})]}):Object(O.jsxs)("div",{children:[Object(O.jsx)(p.a,{bg:"dark",variant:"dark",children:Object(O.jsxs)(v.a,{children:[Object(O.jsx)("img",{alt:"",id:"logout",src:w,width:"27px",height:"27px",className:"d-inline-block align-top ",onClick:m}),Object(O.jsx)(p.a.Brand,{className:"mx-auto",children:"Mis Folios"})]})}),Object(O.jsx)("div",{className:"grid",children:Object(O.jsx)("div",{className:"foils",children:t?t.map((function(e,a){return Object(O.jsx)(Q,{foil:e.foil,name:g,onClick:function(){return a=e.foil,void(window.location.href="/detail/".concat(a));var a}},a)})):Object(O.jsx)(C,{})})})]})};var Y=function(){return Object(O.jsx)(N.a,{basename:".",children:Object(O.jsxs)(I.c,{children:[Object(O.jsx)(I.a,{exact:!0,path:"/",children:Object(O.jsx)(x,{})}),Object(O.jsx)(I.a,{path:"/home",children:Object(O.jsx)(k,{})}),Object(O.jsx)(I.a,{path:"/foils/:id",children:Object(O.jsx)(U,{})}),Object(O.jsx)(I.a,{path:"/detail/:id",children:Object(O.jsx)(M,{})})]})})},P=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,64)).then((function(a){var t=a.getCLS,i=a.getFID,c=a.getFCP,n=a.getLCP,o=a.getTTFB;t(e),i(e),c(e),n(e),o(e)}))};t(61);o.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(Y,{})}),document.getElementById("root")),P()}},[[62,1,2]]]);
//# sourceMappingURL=main.925d6ea8.chunk.js.map