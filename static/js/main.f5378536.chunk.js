(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e){e.exports=[{id:1,name:"Rachel Green",image:"http://images5.fanpop.com/image/photos/29900000/Rachel-rachel-green-29922108-200-200.jpg",count:0},{id:2,name:"Gunther",image:"https://img.sharetv.com/shows/characters/thumbnails/friends.gunther.jpg",count:0},{id:3,name:"Ross Geller",image:"https://vignette.wikia.nocookie.net/friends/images/8/89/Square_Ross.jpg/revision/latest/scale-to-width-down/200?cb=20111216200027",count:0},{id:4,name:"Janice Goralnik",image:"https://static.jeanmarcmorandini.com/sites/jeanmarcmorandini.com/files/styles/facebook/public/janicefriends.jpg?itok=4py_9lNF",count:0},{id:5,name:"Chandler Bing",image:"https://gl-images.condecdn.net/image/yvPZrZ5AYpY/crop/200/square/f/S1_Chandler_3f874dc7_P.jpg",count:0},{id:6,name:"Susan Bunch",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV75tyE-O190Xn9ks5h_MDUC_sEU6OcTi_9yMGAi3m0M-JM_Rn",count:0},{id:7,name:"Phoebe Buffay",image:"https://i.pinimg.com/236x/5b/ef/82/5bef82986de31e70eb2dafcbfa9ccdd5--phoebe-buffay-icons.jpg",count:0},{id:8,name:"Mr. Heckles",image:"https://i.pinimg.com/originals/b4/4b/4a/b44b4a91a34b294ca7e2b51b2bc9a3e1.jpg",count:0},{id:9,name:"Monica Geller",image:"http://images4.fanpop.com/image/photos/22500000/Monica-friends-22554243-200-200.jpg",count:0},{id:10,name:"Marcel",image:"http://images2.fanpop.com/images/polls/136000/136086_1225623424381_full.jpg?v=1225623284",count:0},{id:11,name:"Joey Tribbiani",image:"http://images4.fanpop.com/image/photos/22500000/Joey-friends-22529019-200-200.jpg",count:0},{id:12,name:"Carol Willick",image:"https://www.celebritynooz.com/img/JaneSibbett-then.jpg",count:0}]},26:function(e,a,t){e.exports=t(59)},32:function(e,a,t){},58:function(e,a,t){},59:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),i=t(11),o=t.n(i),r=(t(32),t(23)),s=t(20),l=t(21),m=t(24),d=t(22),g=t(25),h=t(5),u=t.n(h);var p=function(e){return c.a.createElement("div",null,c.a.createElement(u.a,{bg:"dark",variant:"dark"},c.a.createElement(u.a.Brand,{href:"#home"},"Clicky Game"),c.a.createElement(u.a.Toggle,null),c.a.createElement(u.a.Collapse,{className:"justify-content-center"},c.a.createElement(u.a.Text,null,"Score: ",e.score," | High Score: ",e.highScore))))};var f=function(e){return c.a.createElement("div",{className:"jumbotron jumbotron-fluid text-center text-black bg-black"},c.a.createElement("div",{className:"container"},c.a.createElement("img",{src:"https://data.whicdn.com/images/101741280/large.png"}),c.a.createElement("p",{className:"lead"},"Click on a Friend image below to start earing points! Clicking on a Friend more than once will restart the game. Good luck!")))};t(58);var b=function(e){return c.a.createElement("div",{className:"cards",onClick:function(){return e.count(e.id)}},c.a.createElement("div",{className:"img-container"},c.a.createElement("img",{alt:e.name,src:e.image})))};var v=function(e){return c.a.createElement("div",{className:"wrapper"},e.children)},k=t(12),w=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(t=Object(m.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(c)))).state={cards:k,score:0,highScore:0,clicked:[]},t.count=function(e){if(-1===t.state.clicked.indexOf(e)){var a=[].concat(Object(r.a)(t.state.clicked),[e]);t.handleScore(),t.setState({clicked:a})}else t.handleReset()},t.handleScore=function(){var e=t.state.score+1;t.setState({score:e}),e>t.state.highScore&&t.setState({highScore:e}),t.randomImage()},t.handleReset=function(){t.setState({score:0,highScore:t.state.highScore,clicked:[]}),t.randomImage()},t.randomImage=function(){var e=function(e){for(var a=e.length-1;a>0;a--){var t=Math.floor(Math.random()*(a+1)),n=[e[t],e[a]];e[a]=n[0],e[t]=n[1]}return e};e=e(k),t.setState({cards:e})},t}return Object(g.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this;return console.log(this.state.clicked),c.a.createElement(v,null,c.a.createElement("div",null,c.a.createElement(p,{score:this.state.score,highScore:this.state.highScore}),c.a.createElement(f,null),this.state.cards.map(function(a){return c.a.createElement(b,{key:a.id,count:e.count,handleScore:e.handleScore,handleReset:e.handleReset,randomImage:e.randomImage,id:a.id,image:a.image})})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,1,2]]]);
//# sourceMappingURL=main.f5378536.chunk.js.map