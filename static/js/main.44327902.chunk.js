(this["webpackJsonpreact-cv"]=this["webpackJsonpreact-cv"]||[]).push([[0],{35:function(e,t,s){},36:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s.n(c),n=s(16),i=s.n(n),l=s(7),r=s(2),o=s(9),j=s(0),d=function(){return Object(j.jsxs)("div",{className:"navigation",children:[Object(j.jsx)("div",{className:"navigation-nav",children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsxs)(l.b,{exact:!0,to:"/",activeClassName:"navActive",children:[Object(j.jsx)("i",{className:"fas fa-home"}),Object(j.jsx)("span",{children:"Accueil"})]})}),Object(j.jsx)("li",{children:Object(j.jsxs)(l.b,{exact:!0,to:"/competences",activeClassName:"navActive",children:[Object(j.jsx)("i",{className:"fas fa-mountain"}),Object(j.jsx)("span",{children:"Competences"})]})}),Object(j.jsx)("li",{children:Object(j.jsxs)(l.b,{exact:!0,to:"/contact",activeClassName:"navActive",children:[Object(j.jsx)("i",{className:"fas fa-address-book"}),Object(j.jsx)("span",{children:"Contact"})]})})]})}),Object(j.jsx)("div",{className:"social-network",children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"https://www.linkedin.com/in/thibaultbardinetlanglois/",target:"_blank",rel:"noopener noreferrer",children:Object(j.jsx)("i",{className:"fab fa-linkedin"})})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"https://github.com/ThibaultBardinetLanglois",target:"_blank",rel:"noopener noreferrer",children:Object(j.jsx)("i",{className:"fab fa-github"})})})]})})]})},u=function(){var e=Object(c.useState)(null),t=Object(o.a)(e,2),s=t[0],a=t[1],n=Object(c.useState)(null),i=Object(o.a)(n,2),l=i[0],r=i[1];Object(c.useEffect)((function(){a(document.querySelector("#zoom")),r(document.querySelector(".lightbox"))}),[]),console.log(s),console.log(l);return Object(j.jsxs)("div",{className:"home container",children:[Object(j.jsx)(d,{}),Object(j.jsx)("div",{className:"home-content page-content",children:Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Thibault Bardinet-Langlois"}),Object(j.jsx)("h2",{children:"D\xe9veloppeur Full-stack"}),Object(j.jsx)("a",{href:"./media/Bardinet-Langlois-Thibault-Curriculum-Vitae.pdf",target:"_blank",children:"T\xe9l\xe9charger CV"}),Object(j.jsx)("div",{className:"cv-png-container",children:Object(j.jsx)("img",{id:"zoom",src:"./media/CV-DESIGN.png",alt:"cv-png",onClick:function(){for(;l.firstChild;)l.removeChild(l.firstChild);l.classList.add("appear");var e=document.createElement("img");e.src=s.src,l.appendChild(e);var t=window.matchMedia("(max-width: 960px)"),c=window.matchMedia("(max-width: 700px)");return window.matchMedia("(max-width: 550px)").matches?(e.style.width="95%",void(e.style.margin="5.6rem 2%")):c.matches?(e.style.width="80%",void(e.style.margin="5.6rem 10%")):t.matches?(e.style.width="70%",void(e.style.margin="4.8rem 15%")):(e.style.width="50%",e.style.backgroundRepeat="no-repeat",void(e.style.margin="4.8rem 25%"))}})})]})}),Object(j.jsx)("div",{className:"lightbox",onClick:function(e){e.target==e.currentTarget&&l.classList.remove("appear")}})]})},m=s(11),b=s(19),h=s(21),x=s(20),O=function(e){return console.log(e),Object(j.jsxs)("div",{className:e.className,children:[Object(j.jsx)("h3",{children:e.title}),Object(j.jsxs)("div",{className:"years",children:[Object(j.jsx)("span",{children:"Ann\xe9es d'exp\xe9rience"}),Object(j.jsx)("span",{children:"1 an"}),Object(j.jsx)("span",{children:"1.5 ans"})]}),Object(j.jsx)("div",{children:e.languages.map((function(e){var t=e.xp/1.5*100+"%";return Object(j.jsxs)("div",{className:"item-list",children:[Object(j.jsx)("li",{children:e.value}),Object(j.jsx)("div",{className:"progress-bar",style:{width:t}})]},e.id)}))})]})},p=function(e){Object(h.a)(s,e);var t=Object(x.a)(s);function s(){var e;Object(m.a)(this,s);for(var c=arguments.length,a=new Array(c),n=0;n<c;n++)a[n]=arguments[n];return(e=t.call.apply(t,[this].concat(a))).state={languages:[{id:1,value:"Javascript",xp:.6},{id:2,value:"Php",xp:.6},{id:3,value:"HTML5",xp:1.2},{id:4,value:"CSS3",xp:1.2}],frameworks:[{id:1,value:"Symfony",xp:.4},{id:2,value:"React",xp:.2},{id:3,value:"Express",xp:.1},{id:4,value:"Sass",xp:.7}]},e}return Object(b.a)(s,[{key:"render",value:function(){var e=this.state,t=e.languages,s=e.frameworks;return Object(j.jsxs)("div",{className:"languages-frameworks-block",children:[Object(j.jsx)(O,{className:"languagesDisplay",languages:t,title:"Languages"}),Object(j.jsx)(O,{className:"frameworksDisplay",languages:s,title:"Frameworks & biblioth\xe8ques"})]})}}]),s}(c.Component),v=p,g=function(){return Object(j.jsxs)("div",{className:"experience-block",children:[Object(j.jsx)("h3",{children:"Experience"}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h4",{children:"Formation d\xe9veloppeur web et mobile \xe0 la Wild Code School de Tours"}),Object(j.jsx)("h5",{children:"Depuis le 01/03/2021"}),Object(j.jsx)("p",{children:"Formation ax\xe9e sur le travail d'\xe9quipe (utilisation de git et github), le pattern-design Model Vue Controller, le syt\xe8me de gestion de base de donn\xe9es Mysql, javascript pour le frontend et Symfony pour le backend, les commandes du terminal et la r\xe9alisation d'un site dynamique pour la coop\xe9rative Ingescop."})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h4",{children:"Formation gratuite avec Openclassrooms"}),Object(j.jsx)("h5",{children:"En 2020"}),Object(j.jsx)("p",{children:"Apprentissage en autodidacte du HTML5, CSS3 pour l'int\xe9gration web, du javascript, du php et des bases de python."})]}),Object(j.jsxs)("div",{className:"second-experience",children:[Object(j.jsx)("h4",{children:"Formation d'anglais avec Lingoda"}),Object(j.jsx)("h5",{children:"En 2020"}),Object(j.jsx)("p",{children:"Immersion dans la langue en pratiquant tous les jours pendant 3 mois avec des natifs."})]}),Object(j.jsxs)("div",{className:"second-experience",children:[Object(j.jsx)("h4",{children:"Formation Musicale au Concervatoire"}),Object(j.jsx)("h5",{children:"De 2008 \xe0 2019"}),Object(j.jsx)("p",{children:"Formation \xe0 plusieurs dipl\xf4mes d'\xe9tudes musicales(classique, musiques actuelles, jazz) \xe0 Villejuif, Orsay et Brest"})]})]})},f=function(){return Object(j.jsxs)("div",{className:"other-skills-block",children:[Object(j.jsx)("h3",{children:"Autres comp\xe9tences"}),Object(j.jsx)("div",{className:"list",children:Object(j.jsxs)("ul",{children:[Object(j.jsxs)("li",{children:[Object(j.jsx)("i",{className:"fas fa-globe-europe"}),"Anglais B1+"]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("i",{className:"fab fa-git-alt"}),"Git"]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("i",{className:"fab fa-figma"}),"Figma"]})]})})]})},y=function(){return Object(j.jsxs)("div",{className:"hobbies-block",children:[Object(j.jsx)("h3",{children:"Centre d'int\xe9r\xeat et Loisirs"}),Object(j.jsxs)("ul",{children:[Object(j.jsxs)("li",{children:[Object(j.jsx)("i",{className:"fas fa-running"}),"Course \xe0 pied"]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("i",{className:"fas fa-music"}),"Piano, guitare(blues, rock, jazz)"]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("i",{className:"fas fa-palette"}),"Digital painting, peinture sur figurines"]})]})]})},N=function(){return Object(j.jsxs)("div",{className:"knowledges container",children:[Object(j.jsx)(d,{}),Object(j.jsxs)("div",{className:"knowledges-content page-content",children:[Object(j.jsx)(v,{}),Object(j.jsx)(g,{}),Object(j.jsxs)("div",{className:"others-skills-hobbies-block",children:[Object(j.jsx)(f,{}),Object(j.jsx)(y,{})]})]})]})},C=s(15);C.a.init("user_GsgGPgJ1chMQQ9tzSMDNj");var k=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),s=t[0],a=t[1],n=Object(c.useState)(""),i=Object(o.a)(n,2),l=i[0],r=i[1],u=Object(c.useState)(""),m=Object(o.a)(u,2),b=m[0],h=m[1];return Object(j.jsxs)("div",{className:"contact container",children:[Object(j.jsx)(d,{}),Object(j.jsx)("div",{className:"contact-content page-content",children:Object(j.jsxs)("form",{className:"contact-form",children:[Object(j.jsx)("h2",{children:"Contactez-moi"}),Object(j.jsxs)("div",{className:"form-content",children:[Object(j.jsx)("input",{type:"text",id:"name",name:"name",onChange:function(e){return a(e.target.value)},placeholder:"nom *",value:s,autoComplete:"off"}),Object(j.jsxs)("div",{className:"email-content",children:[Object(j.jsx)("label",{id:"not-mail",children:"Email non valide"}),Object(j.jsx)("input",{type:"mail",id:"email",name:"email",onChange:function(e){return r(e.target.value)},placeholder:"email *",value:l,autoComplete:"off"})]}),Object(j.jsx)("textarea",{id:"message",name:"message",onChange:function(e){return h(e.target.value)},placeholder:"message *",value:b})]}),Object(j.jsx)("input",{className:"button",type:"button",value:"Envoyer",onClick:function(e){e.preventDefault();var t={name:s,email:l,message:b};s&&function(){var e=document.getElementById("not-mail");return l.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)?(e.style.display="none",!0):(e.style.display="block",e.style.animation="dongle 1s",setTimeout((function(){e.style.animation="none"}),1e3),!1)}()&&b?C.a.send("service_yefcw6t","template_z82sz69",t).then((function(e){!function(){var e=document.querySelector(".form-message");e.classList.remove("red"),e.classList.add("green"),e.innerHTML="Message envoy\xe9! Je vous recontacte bient\xf4t",e.style.opacity="1",document.querySelector("#name").classList.remove("error"),document.querySelector("#email").classList.remove("error"),document.querySelector("#message").classList.remove("error"),setTimeout((function(){e.style.opacity="0"}),5e3)}(),a(""),r(""),h("")})):(console.log("error"),function(){var e=document.querySelector(".form-message");e.classList.remove("green"),e.classList.add("red"),e.innerHTML="Veuillez remplir les champs",e.style.opacity="1",s||document.querySelector("#name").classList.add("error"),l||document.querySelector("#email").classList.add("error"),b||document.querySelector("#message").classList.add("error")}())}}),Object(j.jsx)("div",{className:"form-message"})]})})]})},w=function(){return Object(j.jsxs)("div",{className:"not-found-content",children:[Object(j.jsx)("h2",{children:"CONTENU NON TROUV\xc9"}),Object(j.jsx)("p",{children:"Vous pouvez vous rediriger \xe0 la page d'accueil en cliquant sur l'ic\xf4ne ci-dessous"}),Object(j.jsx)(l.b,{exact:!0,to:"/",children:Object(j.jsx)("i",{className:"fas fa-home"})})]})},S=function(){return Object(j.jsx)("div",{className:"app",children:Object(j.jsx)(l.a,{children:Object(j.jsxs)(r.c,{children:[Object(j.jsx)(r.a,{path:"/",exact:!0,component:u}),Object(j.jsx)(r.a,{path:"/competences",exact:!0,component:N}),Object(j.jsx)(r.a,{path:"/contact",exact:!0,component:k}),Object(j.jsx)(r.a,{component:w})]})})})},L=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,37)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;s(e),c(e),a(e),n(e),i(e)}))};s(35);i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(S,{})}),document.getElementById("root")),L()}},[[36,1,2]]]);
//# sourceMappingURL=main.44327902.chunk.js.map