(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{43:function(e,t,n){e.exports=n(74)},49:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(22),c=n.n(l),i=(n(48),n(49),n(2)),s=n(3),o=n(5),u=n(4),m=n(6),d=n(79),h=n(80),p=n(81),f=n(14),b=n.n(f),g=n(16),v=n(9),E=n(10),j=n.n(E),y=n(8),O=n(76),C=n(20),x=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={user:{name:"",email:""}},n.handleChange=function(e){var t=Object(C.a)({},n.state.user);t[e.target.name]=e.target.value,n.setState({user:t})},n.handleSubmit=function(e){e.preventDefault();var t=n.state.user;j.a.post("/api/users",t).then(function(e){n.props.getUsers(),n.props.toggleAddUserForm()})},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("span",{class:"badge badge-pill badge-primary"},r.a.createElement("h3",null,"Join and Help!")),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",null,r.a.createElement("input",{type:"text",placeholder:"name",name:"name",value:this.state.user.username,onChange:this.handleChange})),r.a.createElement("div",null,r.a.createElement("input",{type:"text",placeholder:"Email",value:this.state.user.email,onChange:this.handleChange,name:"email"})),r.a.createElement("button",null,"Submit")))}}]),t}(a.Component);function w(){var e=Object(v.a)(["\n    display:flex;\n    flex-direction:row;\n    justify-content:center;\n    align-items:center;\n    width: 45vw;\n    border:5px solid blue;\n    margin:10px;\n    padding:10px;\n"]);return w=function(){return e},e}function k(){var e=Object(v.a)(["\n    display:flex;\n    flex-direction:column;\n    justify-content:center;\n    text-align: center;\n    border: 5px solid blue;\n    width:100vw;\n    \n    \n"]);return k=function(){return e},e}function S(){var e=Object(v.a)(["\n    display:flex;\n    flex-direction:row;\n    text-align: center;\n"]);return S=function(){return e},e}var A=y.a.div(S()),F=y.a.div(k()),U=y.a.img(w()),D=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={users:[{}],addUserFormVisible:!1},n.getUsers=function(){j.a.get("/api/users/".concat(n.props.match.params.id,"/")).then(function(e){return n.setState({users:e.data})})},n.toggleAddUserForm=function(){n.setState({addUserFormVisible:!n.state.addUserFormVisible})},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getUsers()}},{key:"render",value:function(){return r.a.createElement(A,null,r.a.createElement(F,null,this.state.users.map(function(e,t){return r.a.createElement("div",{key:t},r.a.createElement(U,{src:e.img,alt:"..."}),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"card-title text-justify"},r.a.createElement("h5",null,e.name),r.a.createElement("h3",null,e.email))),r.a.createElement(O.a,{to:"/users/".concat(e._id),className:"btn btn-primary "},"Profile"))})),r.a.createElement("div",null,this.state.addUserFormVisible?r.a.createElement(x,{getUsers:this.getUsers,toggleAddUserForm:this.toggleAddUserForm}):null,r.a.createElement("button",{className:"btn btn-primary",onClick:this.toggleAddUserForm},"Create new user")))}}]),t}(a.Component),N=n(77),J=n(78),L=n(82),V=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(N.a,null,r.a.createElement(J.a,null,r.a.createElement(L.a,{href:"#"},"Home")),r.a.createElement(J.a,null,r.a.createElement(L.a,{href:"/api/centers"},"Centers")),r.a.createElement(J.a,null,r.a.createElement(L.a,{href:"/api/users"},"Profile"))))}}]),t}(a.Component);function B(){var e=Object(v.a)(["\n\ndisplay:flex;\nflex-direction:row;\njustify-content:center;\nalign-content:center;\nwidth: 25vw;\nheight:35vh;\nborder-radius: 5px;\nborder:5px solid #4286f4;\n"]);return B=function(){return e},e}y.a.div(B());var H=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={Center:{lists:{name:"",genre:"",itemCount:Number}}},n.getLists=Object(g.a)(b.a.mark(function e(){var t;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("/api/users/".concat(n.props.lists));case 2:t=e.sent,console.log(t.data),n.setState({lists:t.data}),console.log(n.state.lists);case 6:case"end":return e.stop()}},e)})),n.handleChange=function(e){var t=Object(C.a)({},n.state.lists);t[e.target.name]=e.target.value,n.setState({lists:t})},n.handleSubmit=function(e){e.preventDefault();var t=n.state.lists;j.a.post("/api/users/".concat(n.props.center.id),t).then(function(e){n.props.getLists(),n.props.toggleAddListsForm()})},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"form-group"},r.a.createElement("span",{className:"badge badge-pill badge-primary"},r.a.createElement("h3",null,"Center Donation List")),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",null,r.a.createElement("input",{type:"text",placeholder:"item",name:"name",value:this.state.lists.name,onChange:this.handleChange})),r.a.createElement("div",null,r.a.createElement("input",{type:"text",placeholder:"genre",value:this.state.lists.genre,onChange:this.handleChange,name:"genre"})),r.a.createElement("div",null,r.a.createElement("input",{type:"text",placeholder:"How many",value:this.state.lists.itemCount,onChange:this.handleChange,name:"itemcount"})),r.a.createElement("button",{type:"submit",onClick:this.handleSubmit},"Submit")))}}]),t}(a.Component);function M(){var e=Object(v.a)(["\ndisplay:flex;\nflex-direction:row;\njustify-content:left;\nborder: 5px solid #4286f4;\n"]);return M=function(){return e},e}function W(){var e=Object(v.a)(["\ndisplay: flex;\nflex-direction:row;\njustify-content:left;\nalign-content: center;\nwidth:100vw;\nheight:40vh;\nbackground-color:#55DBD9;\nborder: 5px solid #4286f4;\n"]);return W=function(){return e},e}function I(){var e=Object(v.a)(["\ndisplay:flex;\nflex-direction:row;\njustify-content:center;\nalign-items:center;\nwidth: 25vw;\nheight:35vh;\nborder:5px solid #4286f4;\n"]);return I=function(){return e},e}function P(){var e=Object(v.a)(["\n    text-align: center;\n"]);return P=function(){return e},e}var q=y.a.div(P()),R=(y.a.img(I()),y.a.div(W())),$=(y.a.div(M()),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={centers:[],addCenter:!1},n.getCenters=Object(g.a)(b.a.mark(function e(){var t;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("/api/centers/");case 2:t=e.sent,console.log(t.data),n.setState({centers:t.data});case 5:case"end":return e.stop()}},e)})),n.deleteCenter=function(e,t){e.preventDefault(),j.a.delete("/api/centers/".concat(t.id)).then(function(){n.getCenters()})},n.toggleAddCenterForm=function(){n.setState({addCenterForm:!n.state.addCenter})},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getCenters()}},{key:"render",value:function(){return r.a.createElement(q,null,r.a.createElement("centForm",null,r.a.createElement("h1",null,"Add Center"),r.a.createElement("button",{className:"badge badge-pill badge-primary center",onClick:this.toggleAddCenterForm},"Add Center"),r.a.createElement("button",{class:"badge badge-pill badge-primary center",onClick:this.deleteCenter},"Delete Center"),this.state.addCenter?r.a.createElement(H,{getCenters:this.getCenters,toggleAddRecordForm:this.toggleAddCenterForm,center:this.props.centers}):null),r.a.createElement("div",null,this.state.centers.map(function(e,t){return r.a.createElement("div",{key:t},r.a.createElement(R,null,r.a.createElement("h3",null,e.name),r.a.createElement("h3",null,e.location)))})))}}]),t}(a.Component)),_=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement($,null))}}]),t}(a.Component);function z(){var e=Object(v.a)(["\ndisplay:flex;\nflex-direction:flex-end;\nheight:20vh;\n\n"]);return z=function(){return e},e}function G(){var e=Object(v.a)(["\nbackground: linear-gradient(to left, #2193b0, #6dd5ed);\ncolor:white;\n\n"]);return G=function(){return e},e}function K(){var e=Object(v.a)(["\n            width: 200px;\n            height:200px;\n            align-items:right;\n"]);return K=function(){return e},e}var Q=y.a.img(K()),T=(y.a.div(G()),y.a.div(z())),X=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={users:[]},n.getCenters=Object(g.a)(b.a.mark(function e(){var t;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("/api/centers/");case 2:t=e.sent,console.log(t.data),n.setState({centers:t.data});case 5:case"end":return e.stop()}},e)})),n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getCenters()}},{key:"render",value:function(){var e=this.state.users.map(function(e,t){return r.a.createElement("div",{key:t},e.email,e.name)});return r.a.createElement("div",null,r.a.createElement(V,null),r.a.createElement(T,null,e,r.a.createElement(Q,{src:"",alt:"..."})),r.a.createElement(_,null))}}]),t}(a.Component),Y=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={user:{username:"",email:""}},n.handleChange=function(e){var t=Object(C.a)({},n.state.user);t[e.target.name]=e.target.value,n.setState({user:t})},n.handleSubmit=function(e){e.preventDefault();var t=n.state.user;j.a.post("/api/users",t).then(function(e){n.props.getUsers(),n.props.toggleAddUserForm()})},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("span",{class:"badge badge-pill badge-primary"},r.a.createElement("h3",null,"Join the Wrecker Squad")),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",null,r.a.createElement("input",{type:"text",placeholder:"Username",name:"username",value:this.state.user.username,onChange:this.handleChange})),r.a.createElement("div",null,r.a.createElement("input",{type:"text",placeholder:"Email",value:this.state.user.email,onChange:this.handleChange,name:"email"})),r.a.createElement("button",null,"Submit")))}}]),t}(a.Component),Z=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(d.a,null,r.a.createElement(h.a,null,r.a.createElement(p.a,{exact:!0,path:"/",component:X}),r.a.createElement(p.a,{exact:!0,path:"/users",component:D}),r.a.createElement(p.a,{exact:!0,path:"/users/:userId",component:Y}))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(Z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[43,1,2]]]);
//# sourceMappingURL=main.cd4f15c3.chunk.js.map