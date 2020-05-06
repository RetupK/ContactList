(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,t,a){},40:function(e,t,a){e.exports=a(54)},49:function(e,t,a){},50:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(24),s=a.n(l),i=a(26),c=a(18),o=(a(49),a(8)),u=a(9),d=a(10),m=a(12),h=a(6),f=a(7),p=(a(50),a(39)),v=a(15),E=a(17);function b(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var a,r=Object(h.a)(e);if(t){var n=Object(h.a)(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return Object(m.a)(this,a)}}var O=function(e){Object(d.a)(a,e);var t=b(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props,t=e.removePerson,a=e.name,r=e.showModal,l=e.toggle,s=e.id,i=r?n.a.createElement("div",{className:"".concat(r?"modal-visible":"modal-non-visible")},n.a.createElement("div",{className:"modal-question-container"},n.a.createElement("p",null,"Are you sure to remove ",a,"?")),n.a.createElement("div",{className:"modal-buttons-container"},n.a.createElement(v.a,{variant:"danger",onClick:function(){t(s),l()}},"Remove"),n.a.createElement(v.a,{variant:"warning",onClick:l},"Cancel"))):null;return n.a.createElement(n.a.Fragment,null,i)}}]),a}(n.a.Component),y=function(e){Object(d.a)(a,e);var t=b(a);function a(e){var r;return Object(o.a)(this,a),(r=t.call(this,e)).handleToggleModal=function(e,t){r.setState({showModal:!r.state.showModal,id:e,name:t})},r.renderSortOrder=function(e){return 1===e?"A-Z":-1===e?"Z-A":""},r.changeSortOrder=function(){1===r.state.sortOrder?(r.setState({sortOrder:-1}),r.props.changeSortOrder(-1)):(r.setState({sortOrder:1}),r.props.changeSortOrder(1))},r.state={sortOrder:null,showModal:!1,id:null,name:null},r.handleToggleModal=r.handleToggleModal.bind(Object(f.a)(r)),r}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.removePerson,r=t.users,l=r.map(function(t){return n.a.createElement("tr",{key:t.id},n.a.createElement("td",null,t.id),n.a.createElement("td",null,t.name),n.a.createElement("td",null,t.username),n.a.createElement("td",null,t.email),n.a.createElement("td",null,t&&t.address&&t.address.city),n.a.createElement("td",null,(a=t.id,n.a.createElement(E.b,{to:"/update-person/".concat(a)},n.a.createElement(v.a,{variant:"warning"},"Edit")))),n.a.createElement("td",null,n.a.createElement(v.a,{variant:"danger",onClick:function(){return e.handleToggleModal(t.id,t.name)}},"Delete")));var a}),s=n.a.createElement(E.b,{to:"/add-person",className:"table-header-buttonAdd"},n.a.createElement(v.a,{variant:"primary"},"Add User"));return n.a.createElement(n.a.Fragment,null,n.a.createElement(O,{removePerson:a,toggle:this.handleToggleModal,showModal:this.state.showModal,id:this.state.id,name:this.state.name}),n.a.createElement("div",{className:"table-main-container"},n.a.createElement("h1",{className:"table-main-h1"},"Dashboard"),n.a.createElement("div",{className:"table-header-container"},n.a.createElement("p",{className:"table-header-text"},"Users List"),s),n.a.createElement(p.a,{responsive:"lg md sm",striped:!0,bordered:!0,hover:!0,variant:"dark"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Id"),n.a.createElement("th",null,"Name"),n.a.createElement("th",{className:"clickable",onClick:this.changeSortOrder},"UserName ",this.renderSortOrder(this.state.sortOrder)),n.a.createElement("th",null,"Email"),n.a.createElement("th",null,"City"),n.a.createElement("th",null,"Edit"),n.a.createElement("th",null,"Delete"))),n.a.createElement("tbody",null,l))))}}]),a}(n.a.Component);function g(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var a,r=Object(h.a)(e);if(t){var n=Object(h.a)(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return Object(m.a)(this,a)}}var j=function(e){Object(d.a)(a,e);var t=g(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props,t=e.loading,a=e.users,r=e.error;return t?n.a.createElement("span",null,"loading..."):r?n.a.createElement("span",null,"error!"):n.a.createElement("div",null,n.a.createElement(y,{users:a,removePerson:this.props.onRemovePerson,changeSortOrder:this.props.onChangeSortOrder}))}}]),a}(r.Component),S=Object(c.b)(function(e){return{users:e.data,loading:e.loading,error:e.error}},function(e){return{onRemovePerson:function(t){return e({type:"REMOVE_PERSON",personId:t})},onChangeSortOrder:function(t){return e({type:"CHANGE_SORT_ORDER",order:t})}}})(j),C=a(19),R=a(21),A=(a(34),a(5));function N(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var a,r=Object(h.a)(e);if(t){var n=Object(h.a)(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return Object(m.a)(this,a)}}var F=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,D=function(e){Object(d.a)(a,e);var t=N(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={name:"",emailAddress:"",firstNameError:"",emailAddressError:"",isFormSubmitted:!1},e.handleChange=e.handleChange.bind(Object(f.a)(e)),e.handleBlur=e.handleBlur.bind(Object(f.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(f.a)(e)),e.validateFirstName=e.validateFirstName.bind(Object(f.a)(e)),e.validateEmailAddress=e.validateEmailAddress.bind(Object(f.a)(e)),e.validateField=e.validateField.bind(Object(f.a)(e)),e}return Object(u.a)(a,[{key:"handleChange",value:function(e){var t=e.target,a=t.name,r=t.value;this.setState(Object(R.a)({},a,r))}},{key:"handleBlur",value:function(e){var t=e.target.name;this.validateField(t)}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a=!0;return["name","emailAddress"].forEach(function(e){a=t.validateField(e)&&a}),a?this.setState({isFormSubmitted:!0}):this.setState({isFormSubmitted:!1}),this.state.isFormSubmitted}},{key:"validateField",value:function(e){var t=!1;return"name"===e?t=this.validateFirstName():"emailAddress"===e&&(t=this.validateEmailAddress()),t}},{key:"validateFirstName",value:function(){var e="";return""===this.state.name.trim()&&(e="First Name is required"),this.setState({firstNameError:e}),""===e}},{key:"validateEmailAddress",value:function(){var e="",t=this.state.emailAddress;return""===t.trim?e="Email Address is required":F.test(t)||(e="Email is not valid"),this.setState({emailAddressError:e}),""===e}},{key:"render",value:function(){var e=this,t=""==(this.state.emailAddress&&this.state.name);return n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",{className:"userForm-main-h1"},"Dashboard"),n.a.createElement("div",{className:"userForm-main-container"},n.a.createElement("div",{className:"userForm-header-container"},n.a.createElement("h3",null,"Add User")),n.a.createElement(A.a,{className:"userForm-form-container",onSubmit:this.handleSubmit},n.a.createElement(A.a.Group,{controlId:"formGroupEmail"},n.a.createElement(A.a.Label,null,"Name"),n.a.createElement(A.a.Control,{type:"text",placeholder:"First Name",name:"name",value:this.state.name,onChange:this.handleChange,onBlur:this.handleBlur,autoComplete:"off"})),this.state.firstNameError&&n.a.createElement("div",{className:"errorMsg"},this.state.firstNameError),n.a.createElement(A.a.Group,{controlId:"formGroupPassword"},n.a.createElement(A.a.Label,null,"Email"),n.a.createElement(A.a.Control,{type:"email",placeholder:"Email Address",name:"emailAddress",value:this.state.emailAddress,onChange:this.handleChange,onBlur:this.handleBlur,autoComplete:"off"})),this.state.emailAddressError&&n.a.createElement("div",{className:"errorMsg"},this.state.emailAddressError),n.a.createElement("div",{className:"userForm-add-cancel-buttons"},n.a.createElement(E.c,{className:"userForm-cancel-button",to:"/ContactList"},n.a.createElement(v.a,{variant:"warning"},"Cancel")),n.a.createElement(E.c,{to:"/ContactList"},n.a.createElement(v.a,{className:"userForm-addUser-button",variant:"primary",disabled:t,onClick:function(){return e.props.personAdded(e.state.name,e.state.emailAddress)}},"Add User"))))))}}]),a}(r.Component);function k(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var a,r=Object(h.a)(e);if(t){var n=Object(h.a)(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return Object(m.a)(this,a)}}var P=function(e){Object(d.a)(a,e);var t=k(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(D,{personAdded:this.props.onAddedPerson}))}}]),a}(r.Component),U=Object(c.b)(function(e){return{}},function(e){return{onAddedPerson:function(t,a){return e({type:"ADD_PERSON",userData:{name:t,email:a}})}}})(P);function L(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var a,r=Object(h.a)(e);if(t){var n=Object(h.a)(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return Object(m.a)(this,a)}}var M=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,_=function(e){Object(d.a)(a,e);var t=L(a);function a(e){var r;Object(o.a)(this,a),r=t.call(this,e);var n=e.person;return r.state={id:n.id,name:n.name||"",city:n.address&&n.address.city||"",username:n.username||"",emailAddress:n.email||"",firstNameError:"",emailAddressError:"",isFormSubmitted:!1},r.handleChange=r.handleChange.bind(Object(f.a)(r)),r.handleBlur=r.handleBlur.bind(Object(f.a)(r)),r.validateFirstName=r.validateFirstName.bind(Object(f.a)(r)),r.validateEmailAddress=r.validateEmailAddress.bind(Object(f.a)(r)),r.validateField=r.validateField.bind(Object(f.a)(r)),r}return Object(u.a)(a,[{key:"handleChange",value:function(e){var t=e.target,a=t.name,r=t.value;this.setState(Object(R.a)({},a,r))}},{key:"handleBlur",value:function(e){var t=e.target.name;this.validateField(t)}},{key:"validateField",value:function(e){var t=!1;return"name"===e?t=this.validateFirstName():"emailAddress"===e&&(t=this.validateEmailAddress()),t}},{key:"validateFirstName",value:function(){var e="";return""===this.state.name.trim()&&(e="First Name is required"),this.setState({firstNameError:e}),""===e}},{key:"validateEmailAddress",value:function(){var e="",t=this.state.emailAddress;return""===t.trim?e="Email Address is required":M.test(t)||(e="Email is not valid"),this.setState({emailAddressError:e}),""===e}},{key:"render",value:function(){var e=this,t=""==(this.state.emailAddress&&this.state.name);return n.a.createElement("div",{className:"userForm-main-container"},n.a.createElement("div",{className:"userForm-header-container"},n.a.createElement("h3",null,"Update User")),n.a.createElement(A.a,{className:"userForm-form-container",onSubmit:this.handleSubmit},n.a.createElement(A.a.Group,null,n.a.createElement(A.a.Label,null,"Name"),n.a.createElement(A.a.Control,{type:"text",placeholder:"First Name",name:"name",value:this.state.name,onChange:this.handleChange,onBlur:this.handleBlur,autoComplete:"off"})),this.state.firstNameError&&n.a.createElement("div",{className:"errorMsg"},this.state.firstNameError),n.a.createElement(A.a.Group,{controlId:"formGroupEmail"},n.a.createElement(A.a.Label,null,"Email"),n.a.createElement(A.a.Control,{type:"email",placeholder:"Email Address",name:"emailAddress",value:this.state.emailAddress,onChange:this.handleChange,onBlur:this.handleBlur,autoComplete:"off"})),this.state.emailAddressError&&n.a.createElement("div",{className:"errorMsg"},this.state.emailAddressError),n.a.createElement(A.a.Group,null,n.a.createElement(A.a.Label,null,"userName"),n.a.createElement(A.a.Control,{type:"text",placeholder:"User Name",name:"username",value:this.state.username,onChange:this.handleChange,onBlur:this.handleBlur,autoComplete:"off"})),n.a.createElement(A.a.Group,null,n.a.createElement(A.a.Label,null,"City"),n.a.createElement(A.a.Control,{type:"text",placeholder:"city",name:"city",value:this.state.city,onChange:this.handleChange,onBlur:this.handleBlur,autoComplete:"off"})),n.a.createElement("div",{className:"userForm-add-cancel-buttons"},n.a.createElement(E.c,{to:"/",className:"userForm-cancel-button"},n.a.createElement(v.a,{variant:"warning"},"Cancel")),n.a.createElement(E.c,{to:"/"},n.a.createElement(v.a,{variant:"primary",disabled:t,onClick:function(){return e.props.onUpdatePerson({id:e.props.person.id,name:e.state.name,username:e.state.username,email:e.state.emailAddress,address:{city:e.state.city}})}},"Update Person")))))}}]),a}(r.Component);function B(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var a,r=Object(h.a)(e);if(t){var n=Object(h.a)(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return Object(m.a)(this,a)}}var w=function(e){Object(d.a)(a,e);var t=B(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.props.users.find(function(t){return t.id==e.props.match.params.id});return t?n.a.createElement("div",null,n.a.createElement(_,{person:t,onUpdatePerson:this.props.updatePerson})):n.a.createElement("div",null,"Loading...")}}]),a}(r.Component),x=Object(c.b)(function(e){return{users:e.data}},function(e){return{updatePerson:function(t){return e({type:"UPDATE_PERSON",person:t})}}})(w);function G(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var a,r=Object(h.a)(e);if(t){var n=Object(h.a)(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return Object(m.a)(this,a)}}var I=function(){return n.a.createElement("div",null,"Hello")},T=function(e){Object(d.a)(a,e);var t=G(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"componentDidMount",value:function(){(0,this.props.fetchUsers)()}},{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(E.a,{basename:"/"},n.a.createElement(C.a,{path:"/ContactList",exact:!0,component:S}),n.a.createElement(C.a,{path:"/ContactList/about",component:I}),n.a.createElement(C.a,{path:"/ContactList/add-person",component:U}),n.a.createElement(C.a,{path:"/ContactList/update-person/:id",component:x})))}}]),a}(r.Component),Z=Object(c.b)(function(e){return{}},function(e){return{fetchUsers:function(){return e({type:"LOADING_USERS"}),fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){e({type:"LOAD_USERS_SUCCESS",users:t})}).catch(function(t){e({type:"LOAD_USERS_ERROR",error:t})})}}})(T),q=a(20),z={loading:!1,data:[],error:null};var H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOADING_USERS":return Object(q.a)({},e,{loading:!0});case"LOAD_USERS_SUCCESS":return Object(q.a)({},e,{data:t.users,loading:!1});case"LOAD_USERS_ERROR":return Object(q.a)({},e,{error:t.error,loading:!1});case"ADD_PERSON":var a={id:Math.floor(1e3*Math.random())+10,name:t.userData.name,email:t.userData.email};return Object(q.a)({},e,{data:e.data.concat(a)});case"UPDATE_PERSON":var r=e.data.map(function(e){return e.id===t.person.id?t.person:e});return Object(q.a)({},e,{data:r});case"REMOVE_PERSON":return Object(q.a)({},e,{data:e.data.filter(function(e){return e.id!==t.personId})});case"CHANGE_SORT_ORDER":var n=t.order,l=e.data.sort(function(e,t){return n*e.username.localeCompare(t.username)});return Object(q.a)({},e,{data:l});default:return e}},J=(a(53),Object(i.b)(H)),V=document.getElementById("root");s.a.render(n.a.createElement(c.a,{store:J},n.a.createElement(Z,null)),V)}},[[40,1,2]]]);
//# sourceMappingURL=main.733f793e.chunk.js.map