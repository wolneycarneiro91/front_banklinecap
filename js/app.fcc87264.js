(function(t){function e(e){for(var n,s,c=e[0],i=e[1],l=e[2],p=0,d=[];p<c.length;p++)s=c[p],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);u&&u(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,c=1;c<a.length;c++){var i=a[c];0!==r[i]&&(n=!1)}n&&(o.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},r={app:0},o=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=i;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col s12"},[a("div",{staticClass:"card-panel #01579b light-blue darken-4"},[a("span",{staticClass:"white-text"},[t._v("BANKLINE CAP "),a("PageCliente"),a("br"),a("PageConta")],1)])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col s6"},[a("PageDeposito")],1),a("div",{staticClass:"col s6"},[a("PageSaque")],1)])])},o=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"right name_user"},[t._v("Olá "+t._s(t.cliente.nome))])},c=[],i=a("7338"),l=a.n(i),u=l.a.create({baseURL:"http://localhost:8000/api/"}),p={buscar:function(){return u.get("http://localhost:8000/api/clientes/1")}},d={data:function(){return{cliente:{nome:""},clientes:[]}},mounted:function(){this.buscar_clientes()},methods:{buscar_clientes:function(){var t=this;p.buscar().then((function(e){console.log("Cliente = ",e.data.nome),t.cliente.nome=e.data.nome}))}}},f=d,v=(a("85de"),a("2877")),_=Object(v["a"])(f,s,c,!1,null,"2b075e40",null),h=_.exports,m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[a("span",{staticClass:"left name_user"},[t._v("AG: "+t._s(t.conta.AG)+", ")]),a("span",{staticClass:"left name_user"},[t._v(" CC: "+t._s(t.conta.CC))]),a("span",{staticClass:"right name_user"},[t._v("Saldo: R$ "+t._s(t.conta.saldo))])])},g=[],b=(a("96cf"),a("1da1")),C={listar:function(){return u.get("http://localhost:8000/api/contas")},salvar:function(t){return u.post("http://localhost:8000/api/contas",t)},buscar:function(){var t=Object(b["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,u.get("http://localhost:8000/api/contas_cc/CC/"+e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),saldo:function(){return u.get("http://localhost:8000/api/contas/1")},atualizar:function(){var t=Object(b["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,u.put("http://localhost:8000/api/contas/1",e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},w={data:function(){return{conta:{AG:"",CC:"",saldo:""},contas:[]}},mounted:function(){this.buscar_saldo()},methods:{buscar_saldo:function(){var t=this;C.saldo().then((function(e){console.log("Cliente = ",e.data.saldo),t.conta.AG=e.data.AG,t.conta.CC=e.data.CC,t.conta.saldo=e.data.saldo}))}}},x=w,O=(a("addf"),Object(v["a"])(x,m,g,!1,null,"e111a4ae",null)),y=O.exports,q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.depositar(e)}}},[a("label",[t._v("Digite o numero da agência")]),a("input",{attrs:{type:"text",placeholder:"AG"}}),a("label",[t._v("Digite o numero da conta corrente")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.conta.CC,expression:"conta.CC"}],attrs:{type:"number",placeholder:"Digite: 5536789451"},domProps:{value:t.conta.CC},on:{input:function(e){e.target.composing||t.$set(t.conta,"CC",e.target.value)}}}),a("label",[t._v("Valor")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.deposito.valor_deposito,expression:"deposito.valor_deposito"}],attrs:{type:"text",placeholder:"Valor"},domProps:{value:t.deposito.valor_deposito},on:{input:function(e){e.target.composing||t.$set(t.deposito,"valor_deposito",e.target.value)}}}),t._m(0)]),a("table",[t._m(1),a("tbody",t._l(t.depositos,(function(e){return a("tr",{key:e.id},[a("td",[t._v(t._s(e.id))]),a("td",[t._v("R$"+t._s(e.valor_deposito))]),a("td",[t._v(t._s(t.formatar_data(e.created_at)))])])})),0)])])},R=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"waves-effect #waves-light btn-small "},[t._v(" Depositar"),a("i",{staticClass:"material-icons left"},[t._v("attach_money")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("COD")]),a("th",[t._v("Valor")]),a("th",[t._v("Data")])])])}],j=(a("a15b"),{listar:function(){return u.get("http://localhost:8000/api/depositos")},salvar:function(t){return u.post("http://localhost:8000/api/depositos",t)}}),P={data:function(){return{conta:{AG:"",CC:""},deposito:{conta_corrente_id:"",valor_deposito:""},depositos:[],contas:[]}},mounted:function(){this.listar_depositos()},methods:{listar_depositos:function(){var t=this;j.listar().then((function(e){t.depositos=e.data}))},localizar_conta:function(){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,C.buscar(t.conta.CC).then((function(e){t.contas=e.data[0]||e.data}));case 2:case"end":return e.stop()}}),e)})))()},atualizar_conta:function(t){return Object(b["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,C.atualizar(t).then((function(t){console.log(t)}));case 2:case"end":return e.stop()}}),e)})))()},depositar:function(){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.localizar_conta();case 2:if(console.log(t.contas),!Object.prototype.hasOwnProperty.call(t.contas,"id")){e.next=11;break}return t.contas.saldo=parseFloat(t.contas.saldo)+parseFloat(t.deposito.valor_deposito),e.next=7,t.atualizar_conta(t.contas);case 7:t.deposito.conta_corrente_id=t.contas.id,j.salvar(t.deposito).then((function(e){t.deposito={},alert("Salvo com sucesso \n Saldo atual: R$"+t.contas.saldo),console.log(e.data),document.location.reload(!0),t.listar_depositos()})),e.next=12;break;case 11:alert("Conta não localizada");case 12:case"end":return e.stop()}}),e)})))()},formatar_data:function(t){var e=["JAN","FEV","MAR","ABR","MAI","JUN","JUL","AGO","SET","OUT","NOV","DEZ"],a=new Date(t),n=a.getDate(),r=a.getMonth();r=e[r];var o=a.getFullYear();return[n,r,o].join(" ")}}},A=P,D=Object(v["a"])(A,q,R,!1,null,null,null),k=D.exports,$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.sacar(e)}}},[a("label",[t._v("Digite o numero da agência")]),a("input",{attrs:{type:"text",placeholder:"AG"}}),a("label",[t._v("Digite o numero da conta corrente")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.conta.CC,expression:"conta.CC"}],attrs:{type:"number",placeholder:"Digite: 5536789451"},domProps:{value:t.conta.CC},on:{input:function(e){e.target.composing||t.$set(t.conta,"CC",e.target.value)}}}),a("label",[t._v("Valor")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.saque.valor_saque,expression:"saque.valor_saque"}],attrs:{type:"text",placeholder:"Valor"},domProps:{value:t.saque.valor_saque},on:{input:function(e){e.target.composing||t.$set(t.saque,"valor_saque",e.target.value)}}}),t._m(0)]),a("table",[t._m(1),a("tbody",t._l(t.saques,(function(e){return a("tr",{key:e.id},[a("td",[t._v(t._s(e.id))]),a("td",[t._v("R$"+t._s(e.valor_saque))]),a("td",[t._v(t._s(t.formatar_data(e.created_at)))])])})),0)])])},E=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"waves-effect waves-light btn-small "},[t._v(" Sacar"),a("i",{staticClass:"material-icons left"},[t._v("get_app")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("COD")]),a("th",[t._v("Valor")]),a("th",[t._v("Data")])])])}],S={listar:function(){return u.get("http://localhost:8000/api/saques")},salvar:function(t){return u.post("http://localhost:8000/api/saques",t)}},z={data:function(){return{conta:{AG:"",CC:""},saque:{conta_corrente_id:"",valor_saque:""},saques:[],contas:[]}},mounted:function(){this.listar_saques()},methods:{listar_saques:function(){var t=this;S.listar().then((function(e){t.saques=e.data}))},localizar_conta:function(){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,C.buscar(t.conta.CC).then((function(e){t.contas=e.data[0]||e.data}));case 2:case"end":return e.stop()}}),e)})))()},atualizar_conta:function(t){return Object(b["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,C.atualizar(t).then((function(t){console.log(t)}));case 2:case"end":return e.stop()}}),e)})))()},sacar:function(){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.localizar_conta();case 2:if(!Object.prototype.hasOwnProperty.call(t.contas,"id")){e.next=14;break}if(t.saque.conta_corrente_id=t.contas.id,!(parseFloat(t.contas.saldo)>=parseFloat(t.saque.valor_saque))){e.next=11;break}return t.contas.saldo=parseFloat(t.contas.saldo)-parseFloat(t.saque.valor_saque),e.next=8,t.atualizar_conta(t.contas);case 8:S.salvar(t.saque).then((function(e){t.saque={},alert("Retire as notas \n Saldo: R$"+t.contas.saldo),console.log(e.data),document.location.reload(!0),t.listar_saques()})),e.next=12;break;case 11:alert("Saldo indisponivel");case 12:e.next=15;break;case 14:alert("Conta não localizada");case 15:case"end":return e.stop()}}),e)})))()},formatar_data:function(t){var e=["JAN","FEV","MAR","ABR","MAI","JUN","JUL","AGO","SET","OUT","NOV","DEZ"],a=new Date(t),n=a.getDate(),r=a.getMonth();r=e[r];var o=a.getFullYear();return[n,r,o].join(" ")}}},N=z,G=Object(v["a"])(N,$,E,!1,null,null,null),F=G.exports,M={components:{PageDeposito:k,PageSaque:F,PageCliente:h,PageConta:y}},V=M,J=Object(v["a"])(V,r,o,!1,null,null,null),T=J.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(T)}}).$mount("#app")},"735a":function(t,e,a){},"85de":function(t,e,a){"use strict";a("e487")},addf:function(t,e,a){"use strict";a("735a")},e487:function(t,e,a){}});
//# sourceMappingURL=app.fcc87264.js.map