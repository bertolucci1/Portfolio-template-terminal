(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a(18)},16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(9),l=a.n(r),c=(a(16),a(10)),o=a(7),s=a(1),p=a(2),u=a(4),d=a(3),m=a(5),h=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).state={id:a.props.line.id,value:a.props.line.value,displayInput:a.props.line.displayInput},a.focusInput=function(e){e&&e.focus()},a.handleChange=function(e){a.setState({value:e.target.value})},a.handelEnter=function(e){"Enter"===e.key&&a.props.handelWhatever(e.target.value,a.state.id)},a}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("p",{className:this.badgeChange()},this.props.displayInput&&i.a.createElement("input",{type:"text",className:"here",ref:this.focusInput,value:this.state.value,onChange:this.handleChange,onKeyDown:this.handelEnter,autoFocus:!0}),this.state.value))}},{key:"badgeChange",value:function(){var e="prompt ";return e+=this.props.displayInput?"output new-output":""}}]),t}(n.Component),b=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).state={type:a.props.line.type,value:a.props.line.value},a.style={listStyleType:"none"},a}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("p",{className:"prompt"}," ",this.props.line.type," "),i.a.createElement("ul",{style:this.style},this.props.subDir.map(function(e){return i.a.createElement("li",{key:e.id,className:"result"},e.type)})))}}]),t}(n.Component),y=a(6),g=a.n(y),v=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={type:a.props.line.type,value:a.props.line.value},a.style={align:"middle"},a.information={about:"Mi nombre es Elias Costilla, tengo 24 a\xf1os, soy un desarrollador web junior y me recib\xed de T\xe9cnico Electromec\xe1nico en 2018, mi pasi\xf3n es la m\xfasica y el deporte competitivo, me dedico a dar soporte t\xe9cnico y en mis tiempo libres hago reparaciones de hardware en mi taller.",education:"Estudi\xe9 en la Escuela T\xe9cnica N\xb0 1 de la localidad de La Uni\xf3n en la provincia de Buenos Aires, Argentina. Me recib\xed de T\xe9cnico Electromec\xe1nico en 2018. Actualmente estoy estudiando la carrera de Tecnicatura Universitaria en Programaci\xf3n en la Universidad Nacional de Almirante Brown, Argentina. Soy T\xe9cnico en dipositivos electr\xf3nicos inteligentes, me recibi en 2018 en el CFP N\xb0 402 Ing. Franco Speranza de la Localidad de Spegazzini, Provincia de Buenos Aires, Argentina.",projects:[{projectName:"Generador de ciudades en blender",liveDemo:"https://github.com/bertolucci1/template-generador-de-ciudades-blender",linkToGithub:"https://github.com/bertolucci1/template-generador-de-ciudades-blender"},{projectName:"Sistema Dinamico de Parkour",liveDemo:"https://github.com/bertolucci1/Dynamic-Parkour-System",linkToGithub:"https://github.com/bertolucci1/Dynamic-Parkour-System"}],social:[{platform:"Github",link:"https://github.com/bertolucci1"},{platform:"Linkedin",link:"https://ar.linkedin.com/in/eliascostillacovey"}]},a.handelCd=function(){var e=a.state.value.split(" ")[1];if(!e)return i.a.createElement("p",{className:"result"},"La opcion ingresada es invalida");var t=e.toLowerCase();return"about"===t?i.a.createElement("p",{className:"result"},a.information.about):"education"===t?i.a.createElement("p",{className:"result"},a.information.education):"education"!==t?"projects"===t||"project"===t?i.a.createElement(i.a.Fragment,null,a.information.projects.map(function(e){return i.a.createElement("p",{className:"result"},e.projectName,i.a.createElement("a",{href:e.liveDemo,target:"_blank"},"Live Link"),i.a.createElement("a",{href:e.linkToGithub,target:"_blank"},i.a.createElement("img",{src:g.a,alt:"GithubLink to Code"})))})):"socials"===t||"social"===t||"contacto"===t||"contact"===t||"contacta"===t?i.a.createElement(i.a.Fragment,null,a.information.social.map(function(e){return i.a.createElement("p",{className:"result"},i.a.createElement("a",{href:e.link,target:"_blank"},e.platform),i.a.createElement("a",{href:"https://github.com/bertolucci1",target:"_blank"},i.a.createElement("img",{src:g.a,alt:"GithubLink to Code"})))})):i.a.createElement("p",{className:"result"},"La opcion ingresada es invalida"):void 0},a}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("p",{className:"prompt"}," ",this.props.line.value," "),this.handelCd())}}]),t}(n.Component),E=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).state={numberOfLine:0,displayEverything:[{value:"",id:0,displayInput:!0,type:"line"}]},a.information={name:"El\xedas Costilla",commands:[{id:10,type:"ls"},{id:11,type:"cat"},{id:12,type:"clear"},{id:13,type:"cmd"}],subDir:[{id:14,type:"About.txt"},{id:15,type:"Education.txt"},{id:16,type:"Projects.txt"},{id:17,type:"Socials.txt"},{id:18,type:"Contact.txt"}]},a.handelWhatever=function(e,t){var n=e.split(" ");"clear"===n[0]?a.setState({numberOfLine:0,displayEverything:[{value:"",id:0,displayInput:!0,type:"line"}]}):a.setState({displayEverything:[].concat(Object(o.a)(a.state.displayEverything.filter(function(e){return e.id!==t})),[Object(c.a)({},a.state.displayEverything.find(function(e){return e.id===t}),{value:e,type:n[0]})])},function(){return a.handleClick()})},a.handleClick=function(e){var t=a.state.displayEverything.length+1;a.setState({numberOfLine:a.state.numberOfLine+1,displayEverything:[].concat(Object(o.a)(a.state.displayEverything),[{value:"",id:t,displayInput:!0,type:"line"}])})},a}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"terminal"},i.a.createElement("p",{className:"prompt"},"Portfolio interactivo de ",this.information.name,'. Para ver los comandos disponibles, escribe "cmd". Para acceder al contenido escribe "cat" y luego el nombre del archivo, ejemplo: "cat About.txt".'),this.state.displayEverything.map(function(t){return"line"===t.type?i.a.createElement(h,{key:t.id,handelWhatever:e.handelWhatever,line:t,displayInput:t.displayInput}):"ls"===t.type?i.a.createElement(b,{key:t.id,line:t,subDir:e.information.subDir}):"cmd"===t.type?i.a.createElement(b,{key:t.id,line:t,subDir:e.information.commands}):"cat"===t.type?i.a.createElement(v,{key:t.id,line:t}):void 0})))}}]),t}(n.Component);l.a.render(i.a.createElement(E,null),document.getElementById("root"))},6:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RERCMUIwOUY4NkNFMTFFM0FBNTJFRTMzNTJEMUJDNDYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RERCMUIwOUU4NkNFMTFFM0FBNTJFRTMzNTJEMUJDNDYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTJBOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTJCOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+jUqS1wAAApVJREFUeNq0l89rE1EQx3e3gVJoSPzZeNEWPKgHoa0HBak0iHiy/4C3WvDmoZ56qJ7txVsPQu8qlqqHIhRKJZceesmhioQEfxTEtsoSpdJg1u/ABJ7Pmc1m8zLwgWTmzcw3L+/te+tHUeQltONgCkyCi2AEDHLsJ6iBMlgHL8FeoqokoA2j4CloRMmtwTmj7erHBXPgCWhG6a3JNXKdCiDl1cidVbXZkJoXQRi5t5BrxwoY71FzU8S4JuAIqFkJ2+BFSlEh525b/hr3+k/AklDkNsf6wTT4yv46KIMNpsy+iMdMc47HNWxbsgVcUn7FmLAzzoFAWDsBx+wVP6bUpp5ewI+DOeUx0Wd9D8F70BTGNjkWtqnhmT1JQAHcUgZd8Lo3rQb1LAT8eJVUfgGvHQigGp+V2Z0iAUUl8QH47kAA1XioxIo+bRN8OG8F/oBjwv+Z1nJgX5jpdzQDw0LCjsPmrcW7I/iHScCAEDj03FtD8A0EyuChHgg4KTlJQF3wZ7WELppnBX+dBFSVpJsOBWi1qiRgSwnOgoyD5hmuJdkWCVhTgnTvW3AgYIFrSbZGh0UW/Io5Vp+DQoK7o80pztWMemZbgxeNwCNwDbw1fIfgGZjhU6xPaJgBV8BdsMw5cbZoHsenwYFxkZzl83xTSKTiviCAfCsJLysH3POfC8m8NegyGAGfLP/VmGmfSChgXroR0RSWjEFv2J/nG84cuKFMf4sTCZqXuJd4KaXFVjEG3+tw4eXbNK/YC9oXXs3O8NY8y99L4BXY5cvLY/Bb2VZ58EOJVcB18DHJq9lRsKr8inyKGVjlmh29mtHs3AHfuhCwy1vXT/Nu2GKQt+UHsGdctyX6eQyNvc+5sfX9Dl7Pe2J/BRgAl2CpwmrsHR0AAAAASUVORK5CYII="}},[[11,2,1]]]);
//# sourceMappingURL=main.09cfbf2f.chunk.js.map