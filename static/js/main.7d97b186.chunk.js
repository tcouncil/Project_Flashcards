(this["webpackJsonpproject-flashcards"]=this["webpackJsonpproject-flashcards"]||[]).push([[0],{20:function(e,t,a){e.exports=a(32)},31:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),s=a.n(c),u=a(5),l=a(1),o=a.n(l),i=a(2),d=a(3),m=a(19),f=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).API_BASE_URL||"http://localhost:5000",b=new Headers;function p(e){e.cards;return Object(m.a)(e,["cards"])}function E(e,t){return h.apply(this,arguments)}function h(){return(h=Object(i.a)(o.a.mark((function e(t,a){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t,a);case 3:if(!((n=e.sent).status<200||n.status>399)){e.next=6;break}throw new Error("".concat(n.status," - ").concat(n.statusText));case 6:return e.next=8,n.json();case 8:return e.abrupt("return",e.sent);case 11:if(e.prev=11,e.t0=e.catch(0),"AbortError"===e.t0.name){e.next=15;break}throw e.t0;case 15:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}function v(e){return k.apply(this,arguments)}function k(){return(k=Object(i.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(f,"/decks?_embed=cards"),e.next=3,E(a,{signal:t});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(){return(x=Object(i.a)(o.a.mark((function e(t,a){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(f,"/decks"),r={method:"POST",headers:b,body:JSON.stringify(p(t)),signal:a},e.next=4,E(n,r);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e,t){return N.apply(this,arguments)}function N(){return(N=Object(i.a)(o.a.mark((function e(t,a){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(f,"/decks/").concat(t,"?_embed=cards"),e.next=3,E(n,{signal:a});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(){return(w=Object(i.a)(o.a.mark((function e(t,a){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(f,"/decks/").concat(t.id,"?_embed=cards"),r={method:"PUT",headers:b,body:JSON.stringify(p(t)),signal:a},e.next=4,E(n,r);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(e,t){return g.apply(this,arguments)}function g(){return(g=Object(i.a)(o.a.mark((function e(t,a){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(f,"/decks/").concat(t),r={method:"DELETE",signal:a},e.next=4,E(n,r);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(){return(y=Object(i.a)(o.a.mark((function e(t,a,n){var r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(f,"/cards"),a.deckId=Number(t),c={method:"POST",headers:b,body:JSON.stringify(a),signal:n},e.next=5,E(r,c);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e,t){return C.apply(this,arguments)}function C(){return(C=Object(i.a)(o.a.mark((function e(t,a){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(f,"/cards/").concat(t),e.next=3,E(n,{signal:a});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(){return(D=Object(i.a)(o.a.mark((function e(t,a){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(f,"/cards/").concat(t.id),r={method:"PUT",headers:b,body:JSON.stringify(t)},e.next=4,E(n,r);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(e,t){return I.apply(this,arguments)}function I(){return(I=Object(i.a)(o.a.mark((function e(t,a){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(f,"/cards/").concat(t),r={method:"DELETE",signal:a},e.next=4,E(n,r);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}b.append("Content-Type","application/json");var T=function(){return r.a.createElement("header",{className:"jumbotron mb-2"},r.a.createElement("div",{className:"container text-white"},r.a.createElement("h1",{className:"display-4"},"Flashcard-o-matic"),r.a.createElement("p",{className:"lead ml-3"},"Discover The Flashcard Difference.")))},A=a(4);var B=function(e){var t=e.deck,a=void 0===t?{}:t,n=e.index,c=e.setDecks,s=function(){var e=Object(i.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Delete this deck?")){e.next=8;break}if(null!==t.target.getAttribute("data-index")){e.next=6;break}return e.next=4,O(t.target.parentNode.getAttribute("data-index"));case 4:e.next=8;break;case 6:return e.next=8,O(t.target.getAttribute("data-index"));case 8:(function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=c,e.next=3,v();case 3:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()();case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{key:n,className:"row text-center d-flex justify-content-center mt-2 mb-2"},r.a.createElement("div",{className:"card w-100"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"d-flex justify-content-between"},r.a.createElement("h5",{className:"card-title"},a.name),r.a.createElement(A.b,{to:"/decks/".concat(a.id)},r.a.createElement("h6",{className:"text-info"},a.cards.length," cards"))),r.a.createElement("p",{className:"card-text"},a.description),r.a.createElement("div",{className:"d-flex justify-content-between"},r.a.createElement("div",null,r.a.createElement(A.b,{to:"decks/".concat(a.id)},r.a.createElement("button",{className:"btn btn-secondary mr-1","aria-label":"Left Align"},r.a.createElement("i",{class:"bi bi-eye"})," View")),r.a.createElement(A.b,{to:"decks/".concat(a.id,"/study")},r.a.createElement("button",{className:"btn btn-primary"},r.a.createElement("i",{class:"bi bi-book"})," Study"))),r.a.createElement("button",{"data-index":a.id,className:"btn btn-danger",onClick:s},r.a.createElement("i",{"data-index":a.id,class:"bi bi-trash-fill"})," Delete")))))};var _=function(e){var t=e.decks,a=void 0===t?[]:t,n=e.setDecks,c=e.cards,s=(e.setCards,a.map((function(e,t){return r.a.createElement(B,{deck:e,cards:c,index:t,setDecks:n})})));return r.a.createElement(r.a.Fragment,null,s)};var L=function(e){var t=e.decks,a=e.setDecks,c=e.cards,s=e.setCards;return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=a,e.next=3,v();case 3:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[a]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row"},r.a.createElement(A.b,{to:"/decks/new"},r.a.createElement("button",{className:"btn btn-secondary"},r.a.createElement("i",{class:"bi bi-plus"})," Create Deck"))),r.a.createElement(_,{decks:t,cards:c,setDecks:a,setCards:s}))};var P=function(e){var t=e.card,a=void 0===t?{front:"front",back:"back"}:t,n=e.index,c=e.handleDeleteCard;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{key:n,className:"row text-center d-flex justify-content-center mt-2 mb-2"},r.a.createElement("div",{className:"card w-100"},r.a.createElement("div",{className:"card-body row"},r.a.createElement("p",{className:"card-text col-6"},a.front),r.a.createElement("p",{className:"card-text col-6"},a.back)),r.a.createElement("div",{className:"d-flex justify-content-end"},r.a.createElement("div",null,r.a.createElement(A.b,{to:"/decks/".concat(a.deckId,"/cards/").concat(a.id,"/edit")},r.a.createElement("button",{className:"btn btn-secondary mr-1"},r.a.createElement("i",{class:"bi bi-pencil-square"})," Edit")),r.a.createElement("button",{"data-index":a.id,className:"btn btn-danger",onClick:c},r.a.createElement("i",{"data-index":a.id,class:"bi bi-trash-fill"})," Delete"))))))};var q=function(){var e=Object(u.g)().deckId,t=Object(u.f)(),a=[""],c=Object(n.useState)({}),s=Object(d.a)(c,2),l=s[0],m=s[1];Object(n.useEffect)((function(){var t=new AbortController;return function(){var a=Object(i.a)(o.a.mark((function a(){return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.t0=m,a.next=3,j(e,t.signal);case 3:return a.t1=a.sent,a.abrupt("return",(0,a.t0)(a.t1));case 5:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}()(),function(){return t.abort()}}),[e]);var f=function(){var a=Object(i.a)(o.a.mark((function a(n){return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!window.confirm("Delete this card?")){a.next=10;break}if(null===n.target.getAttribute("data-index")){a.next=6;break}return a.next=4,F(n.target.getAttribute("data-index"));case 4:a.next=8;break;case 6:window.confirm("something went wrong."),t.push("/");case 8:(function(){var t=Object(i.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=m,t.next=3,j(e);case 3:return t.t1=t.sent,t.abrupt("return",(0,t.t0)(t.t1));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()();case 10:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return l.id&&(a=l.cards.map((function(e,t){return r.a.createElement(P,{card:e,index:t,handleDeleteCard:f})}))),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row mt-3"},r.a.createElement("h3",null,"Cards")),l.cards?a:null)};var J=function(e){var t=e.pageName,a=void 0===t?"Page Name":t,n=e.link,c=void 0===n?"":n,s=e.linkName,u=void 0===s?"":s;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row"},r.a.createElement(A.b,{className:"m-1",to:"/"},r.a.createElement("i",{class:"bi bi-house m-1"}),"Home"),""!==c?r.a.createElement("p",{className:"m-1 text-info"},"/"):"",r.a.createElement(A.b,{className:""!==c?"m-1":"",to:c},u),r.a.createElement("p",{className:"m-1 text-info"},"/ ",a)))};var V=function(e){var t=e.deck,a=e.deckId,n=e.handleDeleteDeck;return r.a.createElement(r.a.Fragment,null,r.a.createElement(J,{pageName:t.name}),r.a.createElement("div",{className:"row text-center d-flex justify-content-center mt-1"},r.a.createElement("div",{className:"w-100"},r.a.createElement("div",null,r.a.createElement("div",{className:"d-flex justify-content-between"},r.a.createElement("h4",null,t.name)),r.a.createElement("p",{className:"card-text"},t.description),r.a.createElement("div",{className:"d-flex justify-content-between"},r.a.createElement("div",null,r.a.createElement(A.b,{to:"/decks/".concat(a,"/edit")},r.a.createElement("button",{className:"btn btn-secondary mr-1"},r.a.createElement("i",{class:"bi bi-pencil-square"})," Edit")),r.a.createElement(A.b,{to:"/decks/".concat(a,"/study")},r.a.createElement("button",{className:"btn btn-primary mr-1"},r.a.createElement("i",{class:"bi bi-book"})," Study")),r.a.createElement(A.b,{to:"/decks/".concat(a,"/cards/new")},r.a.createElement("button",{className:"btn btn-primary"},r.a.createElement("i",{class:"bi bi-plus"})," Add Card"))),r.a.createElement("button",{"data-index":a,className:"btn btn-danger",onClick:n},r.a.createElement("i",{class:"bi bi-trash-fill"})," Delete"))))))};var U=function(e){var t=e.next;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"nextBtn",className:"justify-content-center mt-1 btn btn-primary ml-2 mb-3",onClick:t},"Next"))};var H=function(e){var t=e.reset;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"resetBtn",className:"justify-content-center mt-1 btn btn-primary ml-2 mb-3",onClick:t},"Reset"))};var R=function(e){var t=e.cardText,a=e.onBack,n=e.onEnd,c=e.cardNum,s=e.cardTotal,u=e.next,l=e.flip,o=e.reset;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row d-flex justify-content-center mt-1 w-100"},r.a.createElement("div",{id:"flashCard",className:"card m-1 p-5"},r.a.createElement("div",{className:"card-body row text-center"},r.a.createElement("h3",{className:"card-text col-12"},t))),r.a.createElement("div",{className:"col-12"},r.a.createElement("h6",{className:"card-text d-flex justify-content-center mb-3"},"Card ".concat(c," of ").concat(s))),r.a.createElement("div",{id:"flipBtn",className:"d-flex justify-content-center mt-1 btn btn-secondary mb-3",onClick:l},"Flip"),a?r.a.createElement(U,{next:u}):null,n?r.a.createElement(H,{reset:o}):null))};function K(e){var t=e.cardLength,a=void 0===t?0:t;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,"Not Enough Cards."),r.a.createElement("p",null,"You need at least 3 cards to study. There are ".concat(a," cards in this deck.")))}var W=function(){var e=Object(u.g)().deckId,t=Object(n.useState)(1),a=Object(d.a)(t,2),c=a[0],s=a[1],l=Object(n.useState)("front"),m=Object(d.a)(l,2),f=m[0],b=m[1],p=Object(n.useState)(0),E=Object(d.a)(p,2),h=E[0],v=E[1],k=Object(n.useState)(!1),x=Object(d.a)(k,2),N=x[0],w=x[1],O=Object(n.useState)(!1),g=Object(d.a)(O,2),y=g[0],S=g[1],C=Object(n.useState)([{}]),D=Object(d.a)(C,2),F=D[0],I=D[1];return Object(n.useEffect)((function(){var t=new AbortController;return function(){var a=Object(i.a)(o.a.mark((function a(){return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.t0=I,a.next=3,j(e,t.signal);case 3:return a.t1=a.sent,a.abrupt("return",(0,a.t0)(a.t1));case 5:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}()(),function(){return t.abort()}}),[e]),Object(n.useEffect)((function(){F.cards&&(v(F.cards.length),F.cards[c-1]?b(F.cards[c-1].front):b(""))}),[F,c]),void 0!==F.cards?r.a.createElement(r.a.Fragment,null,r.a.createElement(J,{link:"/decks/".concat(e),linkName:F.name,pageName:"Study"}),r.a.createElement("div",{className:"row"},r.a.createElement("h2",null,"Study: ",F.name)),h>2?r.a.createElement(R,{cardText:f,onBack:N,onEnd:y,cardNum:c,setCardNum:s,cardTotal:h,next:function(e){F.cards&&(b((function(e){return F.cards[c].front})),s((function(e){return e<F.cards.length?e+1:e+0})),w((function(e){return!1})))},flip:function(e){F.cards&&(f===F.cards[c-1].front?(b((function(e){return F.cards[c-1].back})),c!==h?w((function(e){return!0})):S((function(e){return!0}))):b((function(e){return F.cards[c-1].front})))},reset:function(e){F.cards&&(b((function(e){return F.cards[0].front})),s((function(e){return 1})),w((function(e){return!1})),S((function(e){return!1})))}}):r.a.createElement(K,{cardLength:h})):null};function M(e){var t=e.onSubmit,a=e.handleFrontChange,c=e.handleBackChange,s=Object(u.g)(),l=s.deckId,m=s.cardId,f=Object(n.useState)({}),b=Object(d.a)(f,2),p=b[0],E=b[1];return Object(n.useEffect)((function(){m&&function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=E,e.next=3,S(m);case 3:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[m,l]),r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:"row",onSubmit:t},r.a.createElement("div",{className:"form-group w-100"},r.a.createElement("label",{className:"font-weight-bold",htmlFor:"deck-description"},"Front"),r.a.createElement("textarea",{type:"text",required:!0,className:"form-control",onChange:a,defaultValue:p.front?p.front:"",placeholder:"Front side of card"})),r.a.createElement("div",{className:"form-group w-100"},r.a.createElement("label",{className:"font-weight-bold",htmlFor:"deck-description"},"Back"),r.a.createElement("textarea",{type:"text",required:!0,className:"form-control",onChange:c,defaultValue:p.back?p.back:"",placeholder:"Back side of card"})),r.a.createElement(A.b,{to:"/decks/".concat(l)},r.a.createElement("button",{className:"btn btn-secondary mr-2"},"Done")),r.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Save")))}var Y=function(){var e=Object(u.g)(),t=e.deckId,a=e.cardId,c=Object(n.useState)(""),s=Object(d.a)(c,2),l=s[0],m=s[1],f=Object(n.useState)(""),b=Object(d.a)(f,2),p=b[0],E=b[1],h=Object(n.useState)(""),v=Object(d.a)(h,2),k=v[0],x=v[1],N=Object(u.f)();return Object(n.useEffect)((function(){var e=new AbortController;return function(){var a=Object(i.a)(o.a.mark((function a(){return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.t0=m,a.next=3,j(t,e.signal);case 3:return a.t1=a.sent,a.abrupt("return",(0,a.t0)(a.t1));case 5:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}()(),function(){return e.abort()}}),[t,N]),r.a.createElement(r.a.Fragment,null,r.a.createElement(J,{link:"/decks/".concat(l.id),linkName:l.name,pageName:"Add Card"}),r.a.createElement("div",{className:"row d-flex"},r.a.createElement("h3",{className:"mr-1"},l.name,":"),r.a.createElement("h3",null,"Add Card")),r.a.createElement(M,{onSubmit:function(e){e.preventDefault(),function(e,t,a){y.apply(this,arguments)}(t,{front:p,back:k,deckId:t,id:a}),function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=m,e.next=3,j(t);case 3:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),N.push("/decks/".concat(t))},handleFrontChange:function(e){return E(e.target.value)},handleBackChange:function(e){return x(e.target.value)}}))};var z=function(){var e=Object(u.g)().deckId,t=Object(n.useState)(""),a=Object(d.a)(t,2),c=a[0],s=a[1],l=Object(n.useState)(""),m=Object(d.a)(l,2),f=m[0],b=m[1],p=Object(n.useState)(""),E=Object(d.a)(p,2),h=E[0],v=E[1],k=Object(n.useState)(!1),x=Object(d.a)(k,2),N=x[0],O=x[1],g=Object(u.f)();Object(n.useEffect)((function(){(function(){var t=Object(i.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=s,t.next=3,j(e);case 3:return t.t1=t.sent,t.abrupt("return",(0,t.t0)(t.t1));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e]);var y=function(e){b(e.target.value),O((function(e){return!0}))},S=function(e){v(e.target.value),O((function(e){return!0}))};return r.a.createElement(r.a.Fragment,null,r.a.createElement(J,{link:"/decks/".concat(c.id),linkName:c.name,pageName:"Edit Deck"}),r.a.createElement("div",{className:"row"},r.a.createElement("h2",null,"Edit Deck")),r.a.createElement("form",{className:"row",onSubmit:function(t){(t.preventDefault(),N)&&(!function(e,t){w.apply(this,arguments)}({name:f,description:h,id:e}),O((function(e){return!1})));g.push("/decks/".concat(e))}},r.a.createElement("div",{className:"form-group w-100"},r.a.createElement("label",{htmlFor:"deck-name"},"Name"),r.a.createElement("input",{type:"text",required:!0,className:"form-control",defaultValue:c.name,onLoad:y,onChange:y})),r.a.createElement("div",{className:"form-group w-100"},r.a.createElement("label",{htmlFor:"deck-description"},"Description"),r.a.createElement("textarea",{type:"text",required:!0,className:"form-control",defaultValue:c.description,onLoad:S,onChange:S})),r.a.createElement(A.b,{to:"/decks/".concat(e)},r.a.createElement("button",{className:"btn btn-secondary mr-2"},"Cancel")),r.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Submit")))};var G=function(){var e=Object(u.g)().deckId,t=Object(u.f)(),a=Object(n.useState)([{}]),c=Object(d.a)(a,2),s=c[0],l=c[1],m=function(){var e=Object(i.a)(o.a.mark((function e(a){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Delete this deck?")){e.next=4;break}return e.next=3,O(a.target.getAttribute("data-index"));case 3:t.push("/");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){var t=new AbortController;return function(){var a=Object(i.a)(o.a.mark((function a(){return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.t0=l,a.next=3,j(e,t.signal);case 3:return a.t1=a.sent,a.abrupt("return",(0,a.t0)(a.t1));case 5:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}()(),function(){return t.abort()}}),[e]),r.a.createElement(r.a.Fragment,null,r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/decks/:deckId/cards/new"},r.a.createElement(Y,null)),r.a.createElement(u.a,{path:"/decks/:deckId/study"},r.a.createElement(W,null)),r.a.createElement(u.a,{path:"/decks/:deckId/edit"},r.a.createElement(z,null)),r.a.createElement(u.a,{path:"/decks/:deckId"},r.a.createElement(V,{deck:s,deckId:e,handleDeleteDeck:m}),r.a.createElement(q,{deckId:e}))))};var Q=function(e){var t=e.decks,a=Object(n.useState)(""),c=Object(d.a)(a,2),s=c[0],l=c[1],o=Object(n.useState)(""),i=Object(d.a)(o,2),m=i[0],f=i[1],b=Object(u.f)();return r.a.createElement(r.a.Fragment,null,r.a.createElement(J,{pageName:"Create Deck"}),r.a.createElement("div",{className:"row"},r.a.createElement("h2",null,"Create Deck")),r.a.createElement("form",{className:"row",onSubmit:function(e){e.preventDefault(),function(e,t){x.apply(this,arguments)}({id:0===t.length?1:t[t.length-1].id+1,name:s,description:m}),b.push("/decks/".concat(0===t.length?1:t[t.length-1].id+1))}},r.a.createElement("div",{className:"form-group w-100"},r.a.createElement("label",{htmlFor:"deck-name"},"Name"),r.a.createElement("input",{type:"text",required:!0,className:"form-control",onChange:function(e){return l(e.target.value)},placeholder:"Deck Name"})),r.a.createElement("div",{className:"form-group w-100"},r.a.createElement("label",{htmlFor:"deck-description"},"Description"),r.a.createElement("textarea",{required:!0,className:"form-control",onChange:function(e){return f(e.target.value)},placeholder:"Brief description of the deck"})),r.a.createElement(A.b,{to:"/"},r.a.createElement("button",{className:"btn btn-secondary mr-2"},"Cancel")),r.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Submit")))};var X=function(){var e=Object(u.g)(),t=e.deckId,a=e.cardId,c=Object(n.useState)([]),s=Object(d.a)(c,2),l=s[0],m=s[1],f=Object(n.useState)([]),b=Object(d.a)(f,2),p=b[0],E=b[1],h=Object(n.useState)(!1),v=Object(d.a)(h,2),k=v[0],x=v[1],N=Object(u.f)();Object(n.useEffect)((function(){(function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=E,e.next=3,j(t);case 3:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()(),function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=m,e.next=3,S(a);case 3:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[a,t]);var w=Object(n.useState)(l.front),O=Object(d.a)(w,2),g=O[0],y=O[1],C=Object(n.useState)(l.back),F=Object(d.a)(C,2),I=F[0],T=F[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(J,{link:"/decks/".concat(p.id),linkName:p.name,pageName:"Edit Card"}),r.a.createElement("div",{className:"row"},r.a.createElement("h3",null,"Edit Card")),r.a.createElement(M,{onSubmit:function(e){(e.preventDefault(),k)&&(!function(e,t){D.apply(this,arguments)}({front:g,back:I,deckId:t,id:a}),x((function(e){return!1})));N.push("/decks/".concat(t))},handleFrontChange:function(e){y(e.target.value),x((function(e){return!0}))},handleBackChange:function(e){T(e.target.value),x((function(e){return!0}))}}))};var Z=function(){return r.a.createElement("div",{className:"NotFound"},r.a.createElement("h1",null,"Not Found"))};var $=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=c,e.next=3,v();case 3:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(T,null),r.a.createElement("div",{className:"container"},r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/",exact:!0},r.a.createElement(L,{decks:a,setDecks:c})),r.a.createElement(u.a,{path:"/decks/:deckId/cards/:cardId/edit"},r.a.createElement(X,null)),r.a.createElement(u.a,{path:"/decks/new"},r.a.createElement(Q,{decks:a,setDecks:c})),r.a.createElement(u.a,{path:"/decks/:deckId"},r.a.createElement(G,{decks:a})),r.a.createElement(u.a,null," ",r.a.createElement(Z,null)))))};a(31);var ee=function(){return r.a.createElement("div",{className:"app-routes"},r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/"},r.a.createElement($,null))))};s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(A.a,null,r.a.createElement(ee,null))),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.7d97b186.chunk.js.map