(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{20:function(e,t,n){e.exports=n(32)},29:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(5),c=n.n(o),i=n(9),s=n(3),l=n(18),u=(n(29),n(19));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(30);var h=n(6),d=n(7),p=n(10),b=n(8),m=n(11),E=function(e){var t=e.name,n=e.email,r=e.id;return a.a.createElement("div",{className:"tc bg-light-purple dib br3 pa3 ma2 grow bw2 shadow-5"},a.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(r,"?200x200")}),a.a.createElement("div",null,a.a.createElement("h2",null,t),a.a.createElement("p",null,n)))},f=function(e){return e.robots.map((function(e){return a.a.createElement(E,{name:e.name,email:e.email,key:e.id,id:e.id})}))},g=function(e){var t=e.handleChange;return a.a.createElement("div",null,a.a.createElement("input",{className:"bg-light-blue ba b--red ma2 pa2 ",placeholder:"Search Friends",type:"search",onChange:t}))},O=(n(31),function(e){return a.a.createElement("div",{style:{overflow:"scroll",border:"2px solid red",height:"600px",margin:"10px",padding:"10px"}},e.children)}),v=function(e){function t(e){var n;return Object(h.a)(this,t),(n=Object(p.a)(this,Object(b.a)(t).call(this,e))).state={hasError:!1},n}return Object(m.a)(t,e),Object(d.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?a.a.createElement("h1",null,"Oops . There was an error"):this.props.children}}]),t}(a.a.Component),R=function(e){function t(){return Object(h.a)(this,t),Object(p.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,r=e.robots,o=e.pending,c=r.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return o?a.a.createElement("h1",{className:"tc"},"Loading..."):a.a.createElement("div",{className:"tc"},a.a.createElement("h1",{className:"f1"},"Robo Friends"),a.a.createElement(g,{handleChange:n}),a.a.createElement(O,null,a.a.createElement(v,null,a.a.createElement(f,{robots:c}))))}}]),t}(a.a.Component),S=Object(i.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,pending:e.requestRobots.pending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestRobots:function(){return e((function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})})).catch((function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})}))}))}}}))(R),y=n(4),j={searchField:""},C={robots:[],pending:!1,error:""},w=Object(l.createLogger)(),_=Object(s.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object(y.a)({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object(y.a)({},e,{pending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object(y.a)({},e,{robots:t.payload,pending:!1});case"REQUEST_ROBOTS_FAILED":return Object(y.a)({},e,{error:t.payload,pending:!1});default:return e}}}),T=Object(s.d)(_,Object(s.a)(u.a,w));c.a.render(a.a.createElement(i.a,{store:T},a.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[20,1,2]]]);
//# sourceMappingURL=main.296167f8.chunk.js.map