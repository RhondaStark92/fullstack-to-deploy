(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,n){e.exports=n(58)},33:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var a=n(27),o=n(0),r=n.n(o),l=n(22),c=n.n(l),i=(n(33),n(4)),u=n(5),s=n(7),d=n(6),p=n(8),h=n(23),m=n(3),f=n(10),E=n.n(f),y={firstName:"",lastName:"",idNumber:"",jobTitle:"",annualSalary:""},g=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state=y,n.getEmployees=function(){E.a.get("/employees").then(function(e){n.props.dispatch({type:"GET_EMPLOYEES",payload:e.data})}).catch(function(e){alert("Bad stuff happened")})},n.addEmployee=function(){E()({method:"POST",url:"/employees",data:n.state}).then(function(e){n.getEmployees()}).catch(function(e){alert("Error .. bad stuff")})},n.handleChange=function(e){n.setState(Object(h.a)({},e.target.name,e.target.value))},n.handleSubmit=function(e){e.preventDefault(),n.props.dispatch({type:"ADD_EMPLOYEE",payload:n.state}),n.clearEmployeeFields(),n.getEmployees()},n.clearEmployeeFields=function(){n.setState(y)},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{onChange:this.handleChange,placeholder:"First Name",value:this.state.firstName,name:"firstName"}),r.a.createElement("input",{onChange:this.handleChange,placeholder:"Last Name",value:this.state.lastName,name:"lastName"}),r.a.createElement("input",{onChange:this.handleChange,placeholder:"ID Number",value:this.state.idNumber,name:"idNumber"}),r.a.createElement("input",{onChange:this.handleChange,placeholder:"Job Title",value:this.state.jobTitle,name:"jobTitle"}),r.a.createElement("input",{onChange:this.handleChange,placeholder:"Annual Salary",value:this.state.annualSalary,name:"annualSalary"}),r.a.createElement("input",{type:"submit",value:"Submit"}))}}]),t}(o.Component),b=Object(m.b)()(g),v=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).getEmployees=function(){E.a.get("/employees").then(function(e){n.props.dispatch({type:"GET_EMPLOYEES",payload:e.data})}).catch(function(e){alert("Bad stuff happened")})},n.deleteEmployee=function(e){E()({method:"DELETE",url:"/employees/".concat(e)}).then(function(e){n.getEmployees()}).catch(function(e){alert("Bad stuff happened")})},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getEmployees()}},{key:"render",value:function(){var e=this;return r.a.createElement("ul",null,this.props.reduxState.employeeReducer.map(function(t){return r.a.createElement("li",{key:t.id},"".concat(t.firstname,"\n              ").concat(t.lastname,"\n              is the ").concat(t.jobtitle,"\n              and makes ").concat(t.annualsalary),r.a.createElement("button",{onClick:function(){e.props.dispatch({type:"DELETE_EMPLOYEE",payload:t})}},"Delete"))}))}}]),t}(o.Component),O=Object(m.b)(function(e){return{reduxState:e}})(v),j=function(e,t){return e+Number(t.annualsalary)},w=Object(m.b)(function(e){return{reduxState:e}})(function(e){var t=e.reduxState;return r.a.createElement("p",null,"Total Monthly Cost: ",t.employeeReducer.reduce(j,0)/12)}),S=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("section",null,r.a.createElement("h2",null,"Add Employee"),r.a.createElement(b,null)),r.a.createElement("section",null,r.a.createElement("h2",null,"Employees"),r.a.createElement(O,null),r.a.createElement(w,null)))}}]),t}(o.Component),C=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var N=n(9),T=n(26),L=n.n(T),D=Object(N.d)(Object(N.c)({employeeReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;if(console.log("In employee reducer..."),"GET_EMPLOYEES"===t.type)e=t.payload;else if("ADD_EMPLOYEE"===t.type)console.log("Handling add of employee!"),e=Object(a.a)(e).concat([t.payload]);else if("DELETE_EMPLOYEE"===t.type){console.log("Handling delete of employee",e,t.payload);var n=t.payload;e=e.filter(function(e){return e.idNumber!==n.idNumber})}return e}}),Object(N.a)(L.a));c.a.render(r.a.createElement(m.a,{store:D},r.a.createElement(S,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");C?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):k(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):k(e)})}}()}},[[28,2,1]]]);
//# sourceMappingURL=main.e7cbd0e5.chunk.js.map