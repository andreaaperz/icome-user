(this["webpackJsonpicome-user"]=this["webpackJsonpicome-user"]||[]).push([[0],{60:function(e,A,a){},61:function(e,A,a){"use strict";a.r(A);var t=a(2),n=a.n(t),o=a(21),c=a.n(o),i=a(5),s=a(17),r=a(41),l=a.p+"static/media/logo.8fa4af35.png",d=a(32);d.a.initializeApp({apiKey:"AIzaSyBr0H5fa83YncVy01C6qT_ZAiZcZ9hSqsw",authDomain:"idecom-report.firebaseapp.com",projectId:"idecom-report",storageBucket:"idecom-report.appspot.com",messagingSenderId:"867915011110",appId:"1:867915011110:web:c4af4848308a9aa19e42e7"});var h=d.a.firestore(),g=d.a.auth(),j=a(26),b=a(3),u=new j.a;var m=function(){var e=Object(r.a)(),A=e.register,a=e.handleSubmit,n=Object(t.useState)(""),o=Object(s.a)(n,2),c=o[0],d=o[1],h=Object(t.useState)(""),j=Object(s.a)(h,2),m=j[0],O=j[1],w=Object(t.useState)(""),f=Object(s.a)(w,2),B=f[0],p=f[1];return Object(t.useEffect)((function(){u.get("email")&&(window.location.href="./home")}),[]),Object(b.jsx)("div",{className:"login-background",children:Object(b.jsx)("form",{onChange:a((function(e){d(e.email),O(e.password),p("")})),children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("img",{src:l,alt:"logo de la empresa"}),Object(b.jsx)("span",{children:"Ingresar"}),Object(b.jsx)("span",{className:"subtitle",children:"Introduce tus credenciales"}),Object(b.jsx)("br",{}),Object(b.jsx)("input",Object(i.a)({type:"email",className:"form__input",id:"name",placeholder:"Correo"},A("email"))),Object(b.jsx)("input",Object(i.a)({type:"password",className:"form__input",id:"name",placeholder:"Contrase\xf1a"},A("password"))),Object(b.jsx)("span",{className:"warning",children:B}),Object(b.jsx)("button",{onClick:function(e){e.preventDefault(),g.signInWithEmailAndPassword(c,m).then((function(){console.log("Succeed"),u.set("email",c,{path:"/"}),u.set("password",m,{path:"/"})})).then((function(){window.location.href="./home"})).catch((function(e){console.log(e),p(function(e){console.log(e);var A="";switch(e){case"auth/wrong-password":A="Contrase\xf1a Incorrecta";break;case"auth/user-not-found":A="Usuario no encontrado";break;case"auth/too-many-requests":A="Se ha bloqueado temporalmente, demasiadas peticiones";break;default:A="Hubo un error"}return A}(e.code))}))},children:"Entrar"})]})})})},O=a(28),w=a(31);var f=function(e){return Object(b.jsxs)("div",{className:"CardContainer",onClick:e.onClick,children:[Object(b.jsx)("span",{id:"name",children:"Gustavo Nu\xf1ez Duque"}),Object(b.jsxs)("span",{id:"foil",children:["Folio No.",e.foil]}),Object(b.jsx)("img",{alt:"",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAABuwAAAbsBOuzj4gAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAANcSURBVHic7ZtJbhNBFIa/H0EShjMgJNjBFcKQkcyBhC2XQGLBLVjCFRICiZ05YQjHAPYcgDFBPBblWMGqtqPuruqynCf1xqV+5e97z1K1q0tmRt6QNAg8A24AL4HnZnaYO2EFobwCJJ0DvgDXTnxcAxa7ScK5Avfe5H94gBlgWVJfgbxRo0gHCPgEXPcM14GFbuiE3B1gztwT4I9neBpY6YpOMLNCF7AAHAHmuepAf9E5Ql7lJIGHbSSspyyhvEROwmGGhI1UJZSbDB50m4TyE8J8GwmbqUkIk7SzhIGqwYMKaEiYayNhKxUJRVaCbcPMVoHFhoTWGAdWJQ2Emv+0EUwAgJmtAY/wSxgjAQlBBUBTQlYnjAFrVUoILgDAzGq4FaNPwihOwsUY36U1oggAMLM6CUqIJgCaEo5XjK0xAtRiS4gqAMDM1nErxt+e4WEiS4guAMDMNnCdkCWhLulSjO9SiQBoSsjqhCFcJwSXUJkAADPbxC2bsyQE74RKBQCY2RZOwi/P8D1gPaSEygVARwl3CSghCQEAZraNe4DKkrAh6XLZ8yYjAMDMdsiWcAfXCaVKSEoANCXMki2h1E5ITgCAme3iJPz0DN+mRAlJCoBTSdiUdKXoPMkKADCzPdx2m0/CIK4TCklIWgCAme3TXsKLIvlz7w3GDklDuN3n1vXAEXDVzL7myZt8B4SOrhAgaRi3z+hbDS7lrT50wU+gAV8DfP8RfAQmzexb3vxJd4CkEQLCQ8ICJI0Ca/jhD4CJovAA54smCBEn4H1/lx/gKv+9jLmS6wBJY2TDf6BEeEhMQAN+lWz4qTLhISEBksbJhn9PyZU/jiQESLoPvCEbfsrMfoSYu3IBHeDfERAeKhYgaQIH3+8ZfgtMh4SHCgVImgRekw0/ExoeKhLQgF/BD79PhMofR3QBkqbIrvw+rvK+Z/8gEVWApGlc5X2v0O4RGR4iCmjAv8IPvwvMxoaHSAIkzZAgPEQQIGkWWMYPv4OD9+0BRImgAhrwS2TDz1UJDwEFSJoju/LbJAAPgQRImsdV/oJneAuYTwEeOHtZumz43n1dnl4+MEEvH5mhlw9N4d7maAffVzVgp+vs4GSBe2/hh6/RJfBwdni60NHZv8Bj3MruM/CULoMH+AdqWvS61QBGOQAAAABJRU5ErkJggg==",width:"20px",height:"20px"})]})},B=new j.a;var p=function(){var e=Object(t.useState)(),A=Object(s.a)(e,2),a=A[0],n=A[1];return Object(t.useEffect)((function(){B.get("email")||(window.location.href="./"),n([]);var e=[];h.collection("folios").where("correo","==",B.get("email")).onSnapshot((function(A){A.docChanges().forEach((function(A){"added"==A.type&&e.push({folio:A.doc.data().folio,email:A.doc.data().correo})})),n(e)}))}),[]),Object(b.jsxs)("div",{children:[Object(b.jsx)(O.a,{bg:"dark",variant:"dark",children:Object(b.jsxs)(w.a,{children:[Object(b.jsx)("img",{alt:"",id:"logout",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAEAQAAABQ8GUWAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAAAGAAAABgAPBrQs8AAAAHdElNRQflCQ4DKTV3IdBCAAACpUlEQVR42u2bvS4EURzF/7PxEApKiUaiQCe+KlaIhGwoRLBTie9GIQiNRKH0Dho6z+AdRDErEhFWYgS77lHcZsedyJo19+xyT7e79+Oc3/4ns3PvXhGygGwWKBRgXUEADA97fABBINLSwpk9CDJsAFy1ttYBAN8XKRRYs9MvAdsCgMrXdVABXDkAbANsOQBsA2w5AGwDbDkAbANsOQC1dIZqamIHoAAAPA84OBAvDKGurqA6OthBrAo4Po4uLpydsT1V7z2qnw+gjo7M1ZXTU3YwKwCAw0Mz/P090N7ODpY6AGB/3wz/+AjV1cUOlToAYG/PDF8sQnV3swOlDgDY2YkP39PDDpM6AKjNTSO7en6G6u1lB0kdALC+HhsefX3sEKkDAFZXzbIPQ6C/nx0gdQDAykp8+IEBtvnUAUDl84BS0SYvL8DQENt46gCgFhfN8K+vwMgI23SaADz9pu+LnJyIeBUbJeWyyOysyMUF2/T3KhY9r/pfdGbZY2YG+PhAw+rhAZiYSFwBwO2tSHMz+3usTTc3nlfdDvPXCsiIlEps+7UreYaMyNKSvt4bVdfXgny+piGgJieBUil6dZTLwPQ0O95v65vb4NRUPIRcjm3aCgD9YS6nQ1fq/R0YH2cbtwJAN5ibM2+Lb2/A2BjbvBUAutH8fCwENTrKDmAFgG64sBBfCdksO4QVACJ/8+HoRwA0hOVlE0IYAoOD7DBWAOhOf2eBJBEA3XFtzWDQgEtkiQHozltbZiU8PQGdnexgVgDoAba3TQjn5+xg1gDoQXZ3o8P8k73B6EAbG8DdHXB5CdXWxg6WFID7rzDbEFsOANsAWw4A2wBbDgDbAFsOANsAWw4A2wBbdAC2zw5/nZ/+MMQ9O1wHFcBVXRyeZp0dDgIR3/8Eafwa++fP6voAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDktMTRUMDM6NDE6NTMrMDA6MDANuXigAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTA5LTE0VDAzOjQxOjUzKzAwOjAwfOTAHAAAAABJRU5ErkJggg==",width:"27px",height:"27px",className:"d-inline-block align-top ",onClick:function(e){e.preventDefault(),g.signOut().then((function(){B.remove("email",{path:"/"}),B.remove("password",{path:"/"}),window.location.href="./"})).catch((function(e){console.log(e)}))}}),Object(b.jsx)(O.a.Brand,{className:"mx-auto",children:"Mis Folios"})]})}),Object(b.jsx)("div",{className:"grid",children:Object(b.jsx)("div",{className:"foils",children:a?a.map((function(e,A){return Object(b.jsx)(f,{foil:e.folio,email:e.email,onClick:function(){return A=e.folio,void(window.location.href="./detail?".concat("id="+A));var A}},A)})):"Cargando..."})})]})},C=a(37),D=a(10);a(54),new j.a;var E=function(){var e=window.location.search,A=new URLSearchParams(e).get("id");return Object(b.jsx)("div",{children:Object(b.jsx)(O.a,{bg:"dark",variant:"dark",children:Object(b.jsx)(w.a,{children:Object(b.jsxs)(O.a.Brand,{className:"mx-auto",children:["Folio No. ",A]})})})})};var x=function(){return Object(b.jsx)(C.a,{children:Object(b.jsxs)(D.c,{children:[Object(b.jsx)(D.a,{exact:!0,path:"/",children:Object(b.jsx)(m,{})}),Object(b.jsx)(D.a,{exact:!0,path:"/home",children:Object(b.jsx)(p,{})}),Object(b.jsx)(C.b,{to:"/detail?id=:foil",children:Object(b.jsx)(E,{})})]})})},v=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,63)).then((function(A){var a=A.getCLS,t=A.getFID,n=A.getFCP,o=A.getLCP,c=A.getTTFB;a(e),t(e),n(e),o(e),c(e)}))};a(60);c.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(x,{})}),document.getElementById("root")),v()}},[[61,1,2]]]);
//# sourceMappingURL=main.e307a46c.chunk.js.map