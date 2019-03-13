(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{145:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(148),i=a(151),l=(a(155),a(147)),c=l.a.nav.withConfig({displayName:"styled__StyledNav",componentId:"fl3szm-0"})(["width:100%;position:fixed;font-size:16px;font-weight:500;color:var(--grey-5);background-color:white;z-index:1;&.scrolled{box-shadow:0 3px 2px -2px rgba(0,0,0,0.1);-webkit-box-shadow:0 3px 2px -2px rgba(0,0,0,0.1);}.container{display:flex;flex-direction:column;align-items:center;text-align:center;height:100%;@media (min-width:768px){height:80px;align-items:center;justify-content:space-between;flex-direction:row;}}"]);c.Left=l.a.div.withConfig({displayName:"styled__Left",componentId:"fl3szm-1"})(["display:grid;grid-gap:17px;grid-auto-flow:column;grid-template-columns:36px auto;align-items:center;padding:10px;img,header{vertical-align:middle;}h1,h2{font-size:16px;font-weight:400;}h2{color:var(--grey-3);}"]),c.Right=l.a.ul.withConfig({displayName:"styled__Right",componentId:"fl3szm-2"})(["display:grid;grid-gap:40px;grid-auto-flow:row;padding:10px;@media (min-width:768px){grid-auto-flow:column;}a{transition:all 400ms;}a.active,a:not(.active):hover{color:var(--grey-5);}a:not(.active){color:var(--grey-3);}"]);var s=[{href:"#home",name:"home",text:"Home"},{href:"#about",name:"about",text:"Sobre nosotros"},{href:"#events",name:"events",text:"Próximos encuentros"}],m=function(){var e=Object(r.useState)(!1),t=e[0],a=e[1],o=Object(r.useState)("home"),i=o[0],l=o[1];Object(r.useEffect)(function(){window.addEventListener("scroll",function(){return a(window.scrollY>=10)})},[]);var m=function(e){var t=e.target;return l(t.name)};return n.a.createElement(c,{className:t?"scrolled":""},n.a.createElement("div",{className:"container"},n.a.createElement(c.Left,null,n.a.createElement("img",{src:"https://res.cloudinary.com/dxm7p7ceq/image/upload/v1550495218/logo_rpgen2.png",alt:"freeCodeCampBA"}),n.a.createElement("header",null,n.a.createElement("h1",null,"freeCodeCamp"),n.a.createElement("h2",null,"Buenos Aires"))),n.a.createElement(c.Right,null,s.map(function(e){return n.a.createElement("li",{key:e.name},n.a.createElement("a",{href:e.href,name:e.name,onClick:m,className:e.name===i?"active":""},e.text))}))))},d=l.a.section.withConfig({displayName:"styled__Container",componentId:"jvqrr0-0"})(["height:70vh;position:relative;display:flex;justify-content:center;text-align:center;padding-top:240px;@media (min-width:768px){padding-top:180px;}"]),p=l.a.div.withConfig({displayName:"styled__Background",componentId:"jvqrr0-1"})(["position:absolute;top:0;left:0;width:100%;height:100%;transform:skewY(-2deg);background-color:var(--light-blue);transform-origin:0;z-index:-1;"]),u=l.a.article.withConfig({displayName:"styled__Content",componentId:"jvqrr0-2"})(["color:white;position:relative;width:100%;height:100%;margin:0 auto;max-width:996px;h3{font-size:28px;font-weight:500;margin-bottom:40px;}p{font-size:18px;max-width:600px;margin:0 auto;line-height:28px;}a{color:white;font-weight:600;}video{width:100%;height:100%;max-width:568px;max-height:320px;display:flex;justify-content:center;left:0;position:absolute;margin:0 auto;left:0;right:0;bottom:-140px;@media (min-width:768px){bottom:-80px;}@media (min-width:768px) and (max-height:800px){bottom:-120px;}}"]),h=function(){return n.a.createElement(d,{id:"home"},n.a.createElement(p,null),n.a.createElement(u,null,n.a.createElement("h3",null,"Somos la comunidad de"," ",n.a.createElement("a",{href:"https://www.freecodecamp.org",target:"_blank",rel:"noopener noreferrer"},"freeCodeCamp")," ","en"," ",n.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Buenos_Aires",target:"_blank",rel:"noopener noreferrer"},"Buenos Aires")),n.a.createElement("p",null,"Veni a conocernos para aprender sobre desarrollo web en comunidad!"),n.a.createElement("video",{controls:"controls",autoPlay:!0,loop:"loop"},n.a.createElement("source",{src:"https://res.cloudinary.com/dnbygvvyz/video/upload/v1552479645/video-fcc.mp4"}))))},g=l.a.section.withConfig({displayName:"styled__Container",componentId:"n1ar14-0"})(["min-height:100vh;position:relative;display:flex;justify-content:center;text-align:center;padding-top:180px;"]),f=l.a.article.withConfig({displayName:"styled__Content",componentId:"n1ar14-1"})(["color:var(--grey-5);width:100%;height:100%;margin:0 auto;max-width:996px;padding:0 10px;h3{font-size:28px;font-weight:500;margin-bottom:40px;}p{font-size:16px;max-width:600px;margin:0 auto;color:var(--grey-4);margin-bottom:40px;line-height:28px;text-align:left;}a{color:var(--light-blue);}figure{position:relative;}figure img{max-height:467px;box-shadow:0 2px 4px 0 rgba(0,0,0,0.1);}figcaption{position:absolute;bottom:24px;left:0;right:0;width:100%;margin:0 auto;}figcaption h4{margin-bottom:14px;}figcaption h5{text-transform:uppercase;}"]),x=function(){return n.a.createElement(g,{id:"about"},n.a.createElement(f,null,n.a.createElement("h3",null,"Sobre nosotros"),n.a.createElement("p",null,"Somos una comunidad de aprendizaje sobre desarrollo y tecnologías web. Promovemos una forma de aprendizaje autodidacta, experimental y colaborativa."),n.a.createElement("p",null,"Vas a tu propio ritmo, en un ambiente motivador y totalmente distendido. Creemos que la mejor forma de aprender a programar es... ¡programando!"),n.a.createElement("p",null,"Si querés saber más, te recomendamos leer nuestra"," ",n.a.createElement("a",{href:"https://github.com/FreeCodeCampBA/quick-start",target:"_blank",rel:"noopener noreferrer"},"guía rápida para empezar"),"."),n.a.createElement("figure",null,n.a.createElement("img",{alt:"Meetup de Mayo en Aerolab",src:"https://res.cloudinary.com/dxm7p7ceq/image/upload/v1550578493/mayo_c4r4nt.jpg"}),n.a.createElement("figcaption",null,n.a.createElement("h4",null,"Meetup de Mayo 2018"),n.a.createElement("h5",null,"Aerolab")))))},v=(a(172),a(174)),E=a.n(v),w=(a(156),a(176)),b=a.n(w),_=a(157),y=a.n(_),k=(a(177),l.a.section.withConfig({displayName:"styled__Container",componentId:"sc-1d8thh1-0"})(["height:80vh;position:relative;display:flex;justify-content:center;text-align:center;"])),C=l.a.div.withConfig({displayName:"styled__Background",componentId:"sc-1d8thh1-1"})(["position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--grey-5);transform:skewY(-2deg);transform-origin:0;z-index:-1;"]),N=l.a.div.withConfig({displayName:"styled__BackgroundFooter",componentId:"sc-1d8thh1-2"})(["position:absolute;bottom:0;left:0;width:100%;height:120px;background-color:var(--grey-5);z-index:-1;"]),z=l.a.article.withConfig({displayName:"styled__Content",componentId:"sc-1d8thh1-3"})(["color:white;position:relative;width:100%;height:100%;margin:0 auto;max-width:996px;display:flex;flex-direction:column;justify-content:center;h3{font-size:28px;font-weight:500;margin-bottom:40px;}p{font-size:18px;max-width:600px;margin:0 auto;line-height:28px;}a{color:white;font-weight:600;}.organizing{img{max-width:50%;margin-bottom:10px;}h4{font-weight:400;}}"]),j=l.a.div.withConfig({displayName:"styled__EventBox",componentId:"sc-1d8thh1-4"})(["display:grid;grid-template-columns:314px 1fr;max-width:560px;height:335px;border-radius:5px;margin:0 auto;background-color:var(--grey-4);"]);j.Left=l.a.div.withConfig({displayName:"styled__Left",componentId:"sc-1d8thh1-5"})(["border-radius:inherit;padding:30px 30px 0;text-align:left;background-color:var(--grey-2);border-top-right-radius:0;border-bottom-right-radius:0;height:100%;overflow:hidden;h4{color:var(--grey-4);}h4,.info{margin-bottom:20px;}.info h5{color:var(--grey-3);font-weight:400;text-transform:uppercase;}.info p{color:var(--grey-4);font-weight:400;font-size:16px;text-transform:capitalize;}a{color:white;background-color:var(--light-blue);border:1px solid #4ea0cc;box-shadow:0px 1px 2px rgba(0,0,0,0.15);border-radius:3px;font-size:14px;text-align:center;text-transform:uppercase;width:100%;padding:13px 0;display:block;}"]),j.Right=l.a.div.withConfig({displayName:"styled__Right",componentId:"sc-1d8thh1-6"})(["border-top-right-radius:inherit;border-bottom-right-radius:inherit;height:100%;overflow:hidden;iframe{height:100%;}"]),y.a.locale("es");var M=function(){var e=b()(E.a.mark(function e(){var t,a,r;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"https://wt-8a099f3e7c73b2d17f4e018b6cfd6131-0.sandbox.auth0-extend.com/freeCodeCampEvents",e.next=3,fetch("https://wt-8a099f3e7c73b2d17f4e018b6cfd6131-0.sandbox.auth0-extend.com/freeCodeCampEvents");case 3:return t=e.sent,e.next=6,t.json();case 6:return a=e.sent,r=a.data,e.abrupt("return",r);case 9:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(r.useState)(null),t=e[0],a=e[1],o=Object(r.useState)("loading"),i=o[0],l=o[1];return Object(r.useEffect)(function(){M().then(function(e){if(!e.length)return l("No events");a(e),l("success")}).catch(function(){return l("error")})},[]),n.a.createElement(k,{id:"events"},n.a.createElement(C,null),n.a.createElement(z,null,n.a.createElement("h3",null,"Próximos encuentros"),"loading"===i&&n.a.createElement("h4",null,"Cargando eventos..."),"No events"===i&&n.a.createElement("div",{className:"organizing"},n.a.createElement("img",{alt:"Estamos organizando futuros meetups",src:"https://res.cloudinary.com/dxm7p7ceq/image/upload/v1550623193/undraw_events_2p66_cwypdc.png"}),n.a.createElement("h4",null,"Estamos organizando futuros meetups")),"error"===i&&n.a.createElement("h4",null,"No pudimos cargar los futuros meetups"),"success"===i&&n.a.createElement(j,null,n.a.createElement(j.Left,null,n.a.createElement("h4",null,"freeCodeCampBA S02E01"),n.a.createElement("div",{className:"info"},n.a.createElement("h5",null,"Fecha:"),n.a.createElement("p",null,y()(t[0].time).format("dddd DD[/]MM[/]YY"))),n.a.createElement("div",{className:"info"},n.a.createElement("h5",null,"Horario:"),n.a.createElement("p",null,y()(t[0].time).format("hh:mmA"))),n.a.createElement("div",{className:"info"},n.a.createElement("h5",null,"Lugar:"),n.a.createElement("p",null,t[0].venue.name," (",t[0].venue.address_1,")")),n.a.createElement("a",{href:t[0].link,target:"_blank",rel:"noopener noreferrer"},"Inscribite")),n.a.createElement(j.Right,null,n.a.createElement("iframe",{src:"https://maps.google.com/maps?q="+t[0].venue.lat+","+t[0].venue.lon+"&hl=en&z=14&amp;&output=embed",width:"100%",height:"335",title:"map",frameBorder:"0",allowFullScreen:!0})))),n.a.createElement(N,null))},B=l.a.footer.withConfig({displayName:"styled__Container",componentId:"sc-1hdeivd-0"})(["min-height:394px;background-color:var(--grey-2);"]),q=l.a.div.withConfig({displayName:"styled__Content",componentId:"sc-1hdeivd-1"})(["width:100%;height:100%;margin:0 auto;max-width:996px;display:grid;grid-template-columns:1fr;grid-template-rows:auto auto auto;grid-gap:30px;padding:50px 10px 10px 10px;@media (min-width:768px){grid-gap:60px;grid-template-columns:1fr 1fr 1fr;}.footer__intro{p{color:var(--grey-4);}}.footer__logo{display:grid;grid-gap:17px;grid-auto-flow:column;grid-template-columns:36px auto;margin-bottom:20px;img,header{vertical-align:middle;}h1,h2{font-size:16px;font-weight:400;}h2{color:var(--grey-3);}}.footer__social h3{margin-bottom:24px;font-size:14px;letter-spacing:0.0714286em;text-transform:uppercase;font-weight:400;color:var(--grey-5);}.footer__social-networks{display:grid;grid-gap:18px;font-size:14px;}.footer__social-network{display:flex;align-items:center;:hover{cursor:pointer;.icon{fill:var(--light-blue);}a{color:var(--light-blue);}}.icon{width:18px;margin-right:14px;fill:var(--grey-3);}a{color:var(--grey-4);}}.footer__links h3{margin-bottom:24px;font-size:14px;letter-spacing:0.0714286em;text-transform:uppercase;font-weight:400;color:var(--grey-5);}.footer__social-links{display:grid;grid-gap:18px;font-size:14px;}.footer__social-link{display:flex;align-items:center;:hover{cursor:pointer;.icon{stroke:var(--light-blue);}a{color:var(--light-blue);}}.icon{width:24px;margin-right:14px;stroke:var(--grey-3);}a{color:var(--grey-4);}}"]),S=(a(33),function(e){return n.a.createElement("svg",Object.assign({viewBox:"0 0 24 24"},e),n.a.createElement("title",null,"Facebook icon"),n.a.createElement("path",{d:"M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0"}))}),I=function(e){return n.a.createElement("svg",Object.assign({viewBox:"0 0 24 24"},e),n.a.createElement("title",null,"Twitter icon"),n.a.createElement("path",{d:"M23.954 4.569a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.061a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.937 4.937 0 0 0 4.604 3.417 9.868 9.868 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 0 0 2.46-2.548l-.047-.02z"}))},L=function(e){return n.a.createElement("svg",Object.assign({viewBox:"0 0 24 24"},e),n.a.createElement("title",null,"Meetup icon"),n.a.createElement("path",{d:"M23.978 20.238c-.304-1.931-3.874-.444-4.096-2.559-.313-2.998 4.15-9.459 3.797-11.972-.313-2.255-1.841-2.73-3.165-2.756-1.284-.02-1.623.182-2.058.435-.253.146-.612.435-1.112-.041-.334-.318-.557-.536-.905-.819a1.915 1.915 0 0 0-.945-.395c-.476-.071-1.098 0-1.492.167-.395.172-.702.466-1.026.749-.323.283-1.147 1.198-1.911.859-.335-.145-1.458-.706-2.272-1.055-1.563-.677-3.822.42-4.636 1.866C2.944 6.866.557 15.32.193 16.432c-.809 2.502 1.032 4.54 3.509 4.424 1.052-.051 1.75-.43 2.412-1.638.384-.693 3.979-10.087 4.248-10.543.197-.323.844-.753 1.39-.475.551.283.662.869.581 1.421-.136.895-2.669 6.629-2.771 7.275-.162 1.103.359 1.714 1.507 1.774.784.041 1.567-.237 2.184-1.41.349-.652 4.349-8.666 4.702-9.202.39-.586.703-.779 1.103-.758.309.015.799.096.678 1.016-.122.905-3.343 6.78-3.676 8.221-.456 1.927.602 3.874 2.341 4.728 1.112.546 5.97 1.476 5.577-1.027z"}))},O=function(e){return n.a.createElement("svg",Object.assign({viewBox:"0 0 24 24"},e),n.a.createElement("title",null,"Slack icon"),n.a.createElement("path",{d:"M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zm-1.268 0a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zm0-1.268a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"}))},F=function(e){return n.a.createElement("svg",Object.assign({viewBox:"0 0 24 24"},e),n.a.createElement("title",null,"GitHub icon"),n.a.createElement("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"}))},H=function(e){return n.a.createElement("svg",Object.assign({viewBox:"0 0 24 24"},e),n.a.createElement("title",null,"Instagram icon"),n.a.createElement("path",{d:"M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913a5.885 5.885 0 0 0 1.384 2.126A5.868 5.868 0 0 0 4.14 23.37c.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558a5.898 5.898 0 0 0 2.126-1.384 5.86 5.86 0 0 0 1.384-2.126c.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913a5.89 5.89 0 0 0-1.384-2.126A5.847 5.847 0 0 0 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227a3.81 3.81 0 0 1-.899 1.382 3.744 3.744 0 0 1-1.38.896c-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421a3.716 3.716 0 0 1-1.379-.899 3.644 3.644 0 0 1-.9-1.38c-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 1 0 0-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 0 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"}))},R=function(e){return n.a.createElement("svg",Object.assign({width:24,height:24,fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"prefix__feather prefix__feather-message-square"},e),n.a.createElement("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}))},V=function(e){return n.a.createElement("svg",Object.assign({width:24,height:24,fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"prefix__feather prefix__feather-map"},e),n.a.createElement("path",{d:"M1 6v16l7-4 8 4 7-4V2l-7 4-8-4-7 4zM8 2v16M16 6v16"}))},P=function(e){return n.a.createElement("svg",Object.assign({width:24,height:24,fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"prefix__feather prefix__feather-users"},e),n.a.createElement("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),n.a.createElement("circle",{cx:9,cy:7,r:4}),n.a.createElement("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"}))},T=function(e){return n.a.createElement("svg",Object.assign({width:24,height:24,fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"prefix__feather prefix__feather-mic"},e),n.a.createElement("path",{d:"M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"}),n.a.createElement("path",{d:"M19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8"}))},W=function(e){return n.a.createElement("svg",Object.assign({width:24,height:24,fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"prefix__feather prefix__feather-mail"},e),n.a.createElement("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),n.a.createElement("path",{d:"M22 6l-10 7L2 6"}))},Y=function(){return n.a.createElement(B,null,n.a.createElement(q,null,n.a.createElement("div",{className:"footer__intro"},n.a.createElement("div",{className:"footer__logo"},n.a.createElement("img",{src:"https://res.cloudinary.com/dxm7p7ceq/image/upload/v1550495218/logo_rpgen2.png",alt:"freeCodeCampBA"}),n.a.createElement("header",null,n.a.createElement("h1",null,"freeCodeCamp"),n.a.createElement("h2",null,"Buenos Aires"))),n.a.createElement("p",null,"Aprendemos haciendo, enseñando y compartiendo lo que sabemos.")),n.a.createElement("div",{className:"footer__social"},n.a.createElement("h3",null,"Social"),n.a.createElement("ul",{className:"footer__social-networks"},n.a.createElement("li",{className:"footer__social-network"},n.a.createElement(S,{className:"icon"}),n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.facebook.com/groups/free.code.camp.buenos.aires"},"Seguinos en Facebook")),n.a.createElement("li",{className:"footer__social-network"},n.a.createElement(I,{className:"icon"}),n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://twitter.com/freecodecampba?lang=en"},"Seguinos en Twitter")),n.a.createElement("li",{className:"footer__social-network"},n.a.createElement(L,{className:"icon"}),n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.meetup.com/es/FreeCodeCampBA"},"Seguinos en Meetup")),n.a.createElement("li",{className:"footer__social-network"},n.a.createElement(O,{className:"icon"}),n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://freecodecampba.org/chat"},"Unite al chat de Slack")),n.a.createElement("li",{className:"footer__social-network"},n.a.createElement(F,{className:"icon"}),n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/FreeCodeCampBA"},"Seguinos en GitHub")),n.a.createElement("li",{className:"footer__social-network"},n.a.createElement(H,{className:"icon"}),n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.instagram.com/freecodecampba"},"Seguinos en Instagram")))),n.a.createElement("div",{className:"footer__links"},n.a.createElement("h3",null,"Links"),n.a.createElement("ul",{className:"footer__social-links"},n.a.createElement("li",{className:"footer__social-link"},n.a.createElement(R,{className:"icon"}),n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/FreeCodeCampBA/faq"},"Preguntas Frecuentes")),n.a.createElement("li",{className:"footer__social-link"},n.a.createElement(V,{className:"icon"}),n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/FreeCodeCampBA/quick-start"},"Guia Inicial del Grupo")),n.a.createElement("li",{className:"footer__social-link"},n.a.createElement(P,{className:"icon"}),n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/FreeCodeCampBA/codigo"},"Código de Conducta")),n.a.createElement("li",{className:"footer__social-link"},n.a.createElement(T,{className:"icon"}),n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/FreeCodeCampBA/charlas"},"Charlas")),n.a.createElement("li",{className:"footer__social-link"},n.a.createElement(W,{className:"icon"}),n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"mailto:freecodecampba@gmail.com"},"Contacto"))))))};t.default=function(){return n.a.createElement(o.a,null,n.a.createElement(i.a,{title:"Home",keywords:["gatsby","application","react"]}),n.a.createElement(m,null),n.a.createElement(h,null),n.a.createElement(x,null),n.a.createElement(A,null),n.a.createElement(Y,null))}},146:function(e,t,a){var r;e.exports=(r=a(150))&&r.default||r},148:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(4),i=a.n(o),l=(a(152),function(e){var t=e.children;return n.a.createElement("main",null,t)});l.propTypes={children:i.a.node.isRequired},t.a=l},149:function(e){e.exports={data:{site:{siteMetadata:{title:"freeCodeCampBA",description:"Somos la comunidad de freeCodeCamp en Buenos Aires.",author:"@freecodecampba"}}}}},150:function(e,t,a){"use strict";a.r(t);a(33);var r=a(0),n=a.n(r),o=a(4),i=a.n(o),l=a(55),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return n.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},151:function(e,t,a){"use strict";var r=a(149),n=a(0),o=a.n(n),i=a(4),l=a.n(i),c=a(153),s=a.n(c),m=(a(32),a(146),o.a.createContext({})),d=function(e){return o.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};function p(e){var t=e.description,a=e.lang,n=e.meta,i=e.keywords,l=e.title;return o.a.createElement(d,{query:u,render:function(e){var r=t||e.site.siteMetadata.description;return o.a.createElement(s.a,{htmlAttributes:{lang:a},title:l,titleTemplate:""+e.site.siteMetadata.title,meta:[{name:"description",content:r},{property:"og:title",content:l},{property:"og:description",content:r},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:r}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(n)})},data:r})}d.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func},p.defaultProps={lang:"en",meta:[],keywords:[]},p.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired};t.a=p;var u="1025518380"}}]);
//# sourceMappingURL=component---src-pages-index-js-f6399c91c81a6726aa0f.js.map