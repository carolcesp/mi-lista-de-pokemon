(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n.n(s),r=n(7),o=n.n(r),i=(n(14),n(1)),p=n(2),m=n(4),u=n(3),l=n(5),c=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props.item;return a.a.createElement("div",{className:"PokeList"},a.a.createElement("div",{className:"image__pokemon"},a.a.createElement("img",{className:"image__pokemon--style",src:e.url,alt:"image pokemon"})),a.a.createElement("div",{className:"content_name-types"},a.a.createElement("h2",{className:"name"},e.name),a.a.createElement("ul",{className:"pokemon__list--types"},e.types.map(function(e,t){return a.a.createElement("li",{className:"pokemon__list--li--types",key:t},e)}))))}}]),t}(s.Component),h=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props.pokemon;return a.a.createElement(a.a.Fragment,null,a.a.createElement("ul",{className:"pokemon__list"},e.map(function(e,t){return a.a.createElement("li",{className:"pokemon__list--li",key:t},a.a.createElement(c,{item:e}))})))}}]),t}(s.Component),k=(n(16),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={pokemon:[{id:1,name:"bulbasaur",types:["poison","grass"],evolution:null,url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"},{id:2,name:"ivysaur",types:["poison","grass"],evolution:"bulbasaur",url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"},{id:3,name:"venusaur",types:["poison","grass"],evolution:"ivysaur",url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"},{id:4,name:"charmander",types:["fire"],evolution:null,url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"},{id:5,name:"charmeleon",types:["fire"],evolution:"charmander",url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"},{id:6,name:"charizard",types:["flying","fire"],evolution:"charmeleon",url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"},{id:7,name:"squirtle",types:["water"],evolution:null,url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"},{id:8,name:"wartortle",types:["water"],evolution:"squirtle",url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png"},{id:9,name:"blastoise",types:["water"],evolution:"wartortle",url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"},{id:10,name:"caterpie",types:["bug"],evolution:null,url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png"}]},n}return Object(l.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.state.pokemon;return a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"Mi lista de pokemon"),a.a.createElement(h,{pokemon:e}))}}]),t}(s.Component));o.a.render(a.a.createElement(k,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(18)}},[[8,2,1]]]);
//# sourceMappingURL=main.9c4cdb49.chunk.js.map