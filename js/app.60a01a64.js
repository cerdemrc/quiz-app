(function(t){function e(e){for(var n,r,u=e[0],c=e[1],a=e[2],g=0,p=[];g<u.length;g++)r=u[g],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&p.push(i[r][0]),i[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(p.length)p.shift()();return o.push.apply(o,a||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],n=!0,u=1;u<s.length;u++){var c=s[u];0!==i[c]&&(n=!1)}n&&(o.splice(e--,1),t=r(r.s=s[0]))}return t}var n={},i={app:0},o=[];function r(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=n,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(s,n,function(e){return t[e]}.bind(null,n));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/quiz-app/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var a=0;a<u.length;a++)e(u[a]);var l=c;o.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"0d97":function(t,e,s){"use strict";s("460f")},"460f":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("Question")],1)},o=[],r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-app"},[s("div",{staticClass:"container-quiz"},[t._m(0),t._l(t.questions.slice(t.a,t.b),(function(e,n){return s("div",{directives:[{name:"show",rawName:"v-show",value:t.quiz,expression:"quiz"}],key:n,staticClass:"quiz-main"},[s("div",{staticClass:"box-question"},[s("h2",[t._v("Soru "+t._s(t.b)+"/"+t._s(t.questions.length))]),s("p",[t._v(t._s(e.question))])]),s("div",{staticClass:"box-suggestions"},[s("ul",t._l(e.suggestions,(function(e,n){return s("li",{key:n,class:t.select?t.check(e):"",on:{click:function(s){return t.selectResponse(e)}}},[t._v(" "+t._s(e.suggestion)+" ")])})),0)])])})),t.score_show?s("div",{staticClass:"box-score"},[s("h2",[t._v("Score")]),s("h2",[t._v(t._s(t.score)+" / "+t._s(t.questions.length))]),s("div",{staticClass:"btn-restart"},[s("button",{on:{click:t.restartQuiz}},[t._v(" Yeniden "),s("i",{staticClass:"fas fa-sync-alt"})])])]):t._e(),s("div",{staticClass:"quiz-footer"},[s("div",{staticClass:"box-button"},[s("button",{style:t.next?"":"background-color:rgb(106,128,202)",on:{click:t.skipQuestion}},[t._v(" Geç ")]),s("button",{style:t.next?"background-color:rgb(106,128,202)":"",on:{click:t.nextQuestion}},[t._v(" Devam ")])])])],2)])},u=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"quiz-header"},[s("h1",[t._v("Quiz App")])])}],c={data:function(){return{questions:[{question:"JS kodu hangi etiketler içine yazılır ?",suggestions:[{suggestion:"<script>",correct:!0},{suggestion:"<js>"},{suggestion:"<javascript>"},{suggestion:"<scripting>"}]},{question:"Hangisi bir değişken olamaz ?",suggestions:[{suggestion:"vue2020"},{suggestion:"data"},{suggestion:"2020vue",correct:!0},{suggestion:"JavaScript"}]},{question:"Hangisi bir dizinin ilk indeksine ekleme yapar ?",suggestions:[{suggestion:"concat()"},{suggestion:"unshift()",correct:!0},{suggestion:"push()"},{suggestion:"shut()"}]},{question:"Hangisi false çıktısı verir ?",suggestions:[{suggestion:"3 == '3'"},{suggestion:"5 === '5'",correct:!0},{suggestion:"'test' === 'test'"},{suggestion:"false === false"}]},{question:"Vue componentlerine veri aktarmak için hangisi kullanılır ?",suggestions:[{suggestion:"setState"},{suggestion:"props",correct:!0},{suggestion:"render"},{suggestion:"PropTypes"}]}],a:0,b:1,select:!1,score:0,quiz:!0,score_show:!1,next:!1}},methods:{selectResponse:function(t){this.select=!0,this.next=!0,t.correct&&this.score++},check:function(t){return t.correct?"correct":"incorrect"},nextQuestion:function(){this.next&&(this.questions.length-1==this.a?(this.score_show=!0,this.quiz=!1):(this.a++,this.b++,this.select=!1,this.next=!1))},skipQuestion:function(){this.next||(this.questions.length-1==this.a?(this.score_show=!0,this.quiz=!1):(this.a++,this.b++))},restartQuiz:function(){Object.assign(this.$data,this.$options.data())}}},a=c,l=(s("0d97"),s("2877")),g=Object(l["a"])(a,r,u,!1,null,"163832c8",null),p=g.exports,f={name:"App",components:{Question:p}},h=f,d=(s("5c0b"),Object(l["a"])(h,i,o,!1,null,null,null)),v=d.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(v)}}).$mount("#app")},"5c0b":function(t,e,s){"use strict";s("9c0c")},"9c0c":function(t,e,s){}});
//# sourceMappingURL=app.60a01a64.js.map