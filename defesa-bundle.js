parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"YOwE":[function(require,module,exports) {
"use strict";var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,e=Object.prototype.propertyIsEnumerable;function n(r){if(null==r)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(r)}function o(){try{if(!Object.assign)return!1;var r=new String("abc");if(r[5]="de","5"===Object.getOwnPropertyNames(r)[0])return!1;for(var t={},e=0;e<10;e++)t["_"+String.fromCharCode(e)]=e;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(r){return t[r]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(r){n[r]=r}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}module.exports=o()?Object.assign:function(o,c){for(var a,i,s=n(o),f=1;f<arguments.length;f++){for(var u in a=Object(arguments[f]))t.call(a,u)&&(s[u]=a[u]);if(r){i=r(a);for(var b=0;b<i.length;b++)e.call(a,i[b])&&(s[i[b]]=a[i[b]])}}return s};
},{}],"pyFg":[function(require,module,exports) {
"use strict";var e=require("object-assign"),r="function"==typeof Symbol&&Symbol.for,t=r?Symbol.for("react.element"):60103,n=r?Symbol.for("react.portal"):60106,o=r?Symbol.for("react.fragment"):60107,u=r?Symbol.for("react.strict_mode"):60108,f=r?Symbol.for("react.profiler"):60114,l=r?Symbol.for("react.provider"):60109,c=r?Symbol.for("react.context"):60110,i=r?Symbol.for("react.forward_ref"):60112,a=r?Symbol.for("react.suspense"):60113;r&&Symbol.for("react.suspense_list");var s=r?Symbol.for("react.memo"):60115,p=r?Symbol.for("react.lazy"):60116;r&&Symbol.for("react.fundamental"),r&&Symbol.for("react.responder"),r&&Symbol.for("react.scope");var y="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v={};function h(e,r,t){this.props=e,this.context=r,this.refs=v,this.updater=t||m}function b(){}function S(e,r,t){this.props=e,this.context=r,this.refs=v,this.updater=t||m}h.prototype.isReactComponent={},h.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,r,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=h.prototype;var _=S.prototype=new b;_.constructor=S,e(_,h.prototype),_.isPureReactComponent=!0;var k={current:null},$={current:null},g=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function C(e,r,n){var o,u={},f=null,l=null;if(null!=r)for(o in void 0!==r.ref&&(l=r.ref),void 0!==r.key&&(f=""+r.key),r)g.call(r,o)&&!w.hasOwnProperty(o)&&(u[o]=r[o]);var c=arguments.length-2;if(1===c)u.children=n;else if(1<c){for(var i=Array(c),a=0;a<c;a++)i[a]=arguments[a+2];u.children=i}if(e&&e.defaultProps)for(o in c=e.defaultProps)void 0===u[o]&&(u[o]=c[o]);return{$$typeof:t,type:e,key:f,ref:l,props:u,_owner:$.current}}function E(e,r){return{$$typeof:t,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}function R(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}function x(e){var r={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return r[e]})}var P=/\/+/g,j=[];function O(e,r,t,n){if(j.length){var o=j.pop();return o.result=e,o.keyPrefix=r,o.func=t,o.context=n,o.count=0,o}return{result:e,keyPrefix:r,func:t,context:n,count:0}}function A(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>j.length&&j.push(e)}function I(e,r,o,u){var f=typeof e;"undefined"!==f&&"boolean"!==f||(e=null);var l=!1;if(null===e)l=!0;else switch(f){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case t:case n:l=!0}}if(l)return o(u,e,""===r?"."+q(e,0):r),1;if(l=0,r=""===r?".":r+":",Array.isArray(e))for(var c=0;c<e.length;c++){var i=r+q(f=e[c],c);l+=I(f,i,o,u)}else if(null===e||"object"!=typeof e?i=null:i="function"==typeof(i=y&&e[y]||e["@@iterator"])?i:null,"function"==typeof i)for(e=i.call(e),c=0;!(f=e.next()).done;)l+=I(f=f.value,i=r+q(f,c++),o,u);else if("object"===f)throw o=""+e,Error(d(31,"[object Object]"===o?"object with keys {"+Object.keys(e).join(", ")+"}":o,""));return l}function U(e,r,t){return null==e?0:I(e,"",r,t)}function q(e,r){return"object"==typeof e&&null!==e&&null!=e.key?x(e.key):r.toString(36)}function F(e,r){e.func.call(e.context,r,e.count++)}function L(e,r,t){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,r,e.count++),Array.isArray(e)?M(e,n,t,function(e){return e}):null!=e&&(R(e)&&(e=E(e,o+(!e.key||r&&r.key===e.key?"":(""+e.key).replace(P,"$&/")+"/")+t)),n.push(e))}function M(e,r,t,n,o){var u="";null!=t&&(u=(""+t).replace(P,"$&/")+"/"),U(e,L,r=O(r,u,n,o)),A(r)}function D(){var e=k.current;if(null===e)throw Error(d(321));return e}var V={Children:{map:function(e,r,t){if(null==e)return e;var n=[];return M(e,n,null,r,t),n},forEach:function(e,r,t){if(null==e)return e;U(e,F,r=O(null,null,r,t)),A(r)},count:function(e){return U(e,function(){return null},null)},toArray:function(e){var r=[];return M(e,r,null,function(e){return e}),r},only:function(e){if(!R(e))throw Error(d(143));return e}},createRef:function(){return{current:null}},Component:h,PureComponent:S,createContext:function(e,r){return void 0===r&&(r=null),(e={$$typeof:c,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:i,render:e}},lazy:function(e){return{$$typeof:p,_ctor:e,_status:-1,_result:null}},memo:function(e,r){return{$$typeof:s,type:e,compare:void 0===r?null:r}},useCallback:function(e,r){return D().useCallback(e,r)},useContext:function(e,r){return D().useContext(e,r)},useEffect:function(e,r){return D().useEffect(e,r)},useImperativeHandle:function(e,r,t){return D().useImperativeHandle(e,r,t)},useDebugValue:function(){},useLayoutEffect:function(e,r){return D().useLayoutEffect(e,r)},useMemo:function(e,r){return D().useMemo(e,r)},useReducer:function(e,r,t){return D().useReducer(e,r,t)},useRef:function(e){return D().useRef(e)},useState:function(e){return D().useState(e)},Fragment:o,Profiler:f,StrictMode:u,Suspense:a,createElement:C,cloneElement:function(r,n,o){if(null==r)throw Error(d(267,r));var u=e({},r.props),f=r.key,l=r.ref,c=r._owner;if(null!=n){if(void 0!==n.ref&&(l=n.ref,c=$.current),void 0!==n.key&&(f=""+n.key),r.type&&r.type.defaultProps)var i=r.type.defaultProps;for(a in n)g.call(n,a)&&!w.hasOwnProperty(a)&&(u[a]=void 0===n[a]&&void 0!==i?i[a]:n[a])}var a=arguments.length-2;if(1===a)u.children=o;else if(1<a){i=Array(a);for(var s=0;s<a;s++)i[s]=arguments[s+2];u.children=i}return{$$typeof:t,type:r.type,key:f,ref:l,props:u,_owner:c}},createFactory:function(e){var r=C.bind(null,e);return r.type=e,r},isValidElement:R,version:"16.12.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:k,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:$,IsSomeRendererActing:{current:!1},assign:e}},B={default:V},N=B&&V||B;module.exports=N.default||N;
},{"object-assign":"YOwE"}],"HdMw":[function(require,module,exports) {
"use strict";module.exports=require("./cjs/react.production.min.js");
},{"./cjs/react.production.min.js":"pyFg"}],"MkQ2":[function(require,module,exports) {
"use strict";function n(o){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(o)}function o(o){return o&&"object"==n(o)&&"default"in o?o.default:o}Object.defineProperty(exports,"__esModule",{value:!0});var t=o(require("react"));function e(n){return e.warnAboutHMRDisabled&&(e.warnAboutHMRDisabled=!0,console.error("React-Hot-Loader: misconfiguration detected, using production version in non-production environment."),console.error("React-Hot-Loader: Hot Module Replacement is not enabled.")),t.Children.only(n.children)}e.warnAboutHMRDisabled=!1;var r=function n(){return n.shouldWrapWithAppContainer?function(n){return function(o){return t.createElement(e,null,t.createElement(n,o))}}:function(n){return n}};r.shouldWrapWithAppContainer=!1;var u=function(n,o){return n===o},i=function(){},c=function(n){return n},a=function(){};exports.AppContainer=e,exports.hot=r,exports.areComponentsEqual=u,exports.setConfig=i,exports.cold=c,exports.configureComponent=a;
},{"react":"HdMw"}],"d3EK":[function(require,module,exports) {
"use strict";var r,e,t;module.exports=require("./dist/react-hot-loader.production.min.js");
},{"./dist/react-hot-loader.production.min.js":"MkQ2"}],"e6V6":[function(require,module,exports) {
"use strict";var o,e,i;Object.defineProperty(exports,"__esModule",{value:!0}),exports.FAKE_MS_DELAY=800,exports.isDevEnv=-1===(null===(i=null===(e=null===(o=window)||void 0===o?void 0:o.location)||void 0===e?void 0:e.protocol)||void 0===i?void 0:i.indexOf("https"));
},{}],"xl4t":[function(require,module,exports) {
"use strict";
},{}],"w0Qw":[function(require,module,exports) {
"use strict";var e=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,a){function i(e){try{s(r.next(e))}catch(t){a(t)}}function u(e){try{s(r.throw(e))}catch(t){a(t)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(i,u)}s((r=r.apply(e,t||[])).next())})},t=this&&this.__generator||function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(u){a=[6,u],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}};Object.defineProperty(exports,"__esModule",{value:!0});var n=require("../constants/constants");require("./types/googleApi");var r=function(e){return new Promise(function(t){setTimeout(function(){return t()},e)})};function o(o,a,i){var u=this;console.log("CREATE API FUN --\x3e ",o,a,i);return function(s){return e(u,void 0,void 0,function(){var e,u=this;return t(this,function(t){switch(t.label){case 0:return"undefined"!=typeof google?[3,2]:(console.log("fake hit"),[4,r(n.FAKE_MS_DELAY)]);case 1:return t.sent(),a?(e=globalThis.__FAKES__[a],i?[2,i(e)]:[2,e]):[2];case 2:return[2,new Promise(function(e,t){var n=google.script.run.withSuccessHandler(function(t){return e(i?i(t):t)}).withFailureHandler(function(e){return console.error("ERRO getCalendarEvents",e),t(e)}).withUserObject(u);console.log("callFunction -> ",o,n),n[o](s)})]}})})}}exports.getCalendarEvents=o("getCalendarEventsJSONString","fakeCalendarEvents"),exports.getInitialData=o("getInitialData","fakeInitial"),exports.getLastDis=o("getLastDis","fakeLastDis"),exports.addRecord=o("addRecord");
},{"../constants/constants":"e6V6","./types/googleApi":"xl4t"}],"dD23":[function(require,module,exports) {

},{}],"LZTl":[function(require,module,exports) {
"use strict";var e=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(a,o){function i(e){try{l(r.next(e))}catch(t){o(t)}}function c(e){try{l(r.throw(e))}catch(t){o(t)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(i,c)}l((r=r.apply(e,t||[])).next())})},t=this&&this.__generator||function(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=(a=i.trys).length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(c){o=[6,c],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}};Object.defineProperty(exports,"__esModule",{value:!0});var n=require("../../api/api");require("./calendario.scss");var r=function(e){return e.map(function(e){var t={title:e.title,start:moment(e.startTime),end:moment(e.endTime),valendo:moment(e.startTime).isBefore(moment())&&moment(e.endTime).isAfter(moment()),refStart:moment(e.startTime).diff(moment(),"days"),refEnd:moment(e.endTime).diff(moment(),"days")};return console.log(t.end.format("D"),moment().format("D"),t.refEnd),t})};exports.Calendario=function(){var o=[-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13].map(function(e){return 0===e?"HOJE":moment().add(e,"days").format("D")}),i=React.useState([]),c=i[0],l=i[1];return console.log("dias",o),React.useEffect(function(){e(void 0,void 0,void 0,function(){var e,a,o;return t(this,function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,n.getCalendarEvents()];case 1:return e=t.sent(),console.log(e),a=r(e),console.log(a),l(a),[3,3];case 2:return o=t.sent(),console.error(o),[3,3];case 3:return[2]}})})},[]),React.createElement("div",{className:"calendario-externa"},React.createElement("div",{className:"calendario-wrapper-fake"},React.createElement("div",{className:"calendario-today"})),React.createElement("div",{className:"calendario-wrapper-titulos"},o.map(function(e){return React.createElement("div",{key:e},e)})),React.createElement("div",{className:"calendario-wrapper"},c.filter(function(e){return e.valendo}).map(function(e,t){var n=e.refStart+2;n<1&&(n=1);var r=e.refEnd+3;return e.refEnd>16&&(r=16),console.log("> %d\t%d  | | %d \t %d \t (%s)",e.refStart,n,e.refEnd,r,e.title),React.createElement(a,{index:t,key:e.title,gridColumnStart:n,gridColumnEnd:r,backgroundColor:"#ffdd5738"},e.title)})))};var a=function(e){return React.createElement(React.Fragment,null,React.createElement("div",{className:"calendario-item",style:{gridColumnEnd:e.gridColumnEnd,gridColumnStart:e.gridColumnStart,backgroundColor:e.backgroundColor,gridRowStart:e.index+1,gridRowEnd:e.index+2}},e.children))};
},{"../../api/api":"w0Qw","./calendario.scss":"dD23"}],"p2QM":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getSubNucleoTotais=function(e,r){void 0===r&&(r=null);var o=e.records.filter(function(r){return r.idSubnucleo===e.nucleo}).filter(function(e){if(!r)return!0;var o=e.dataMovimento.isValid()?e.dataMovimento:e.created;return r.isBefore(o)}).reduce(function(e,r){var o=Object.assign({},e),t=void 0===e[r.idProcurador]?0:e[r.idProcurador];return o[r.idProcurador]=t+r.quantidade,o},{});return console.log(Object.values(o).reduce(function(e,r){return e+r},0),o),o};
},{}],"Ga6M":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../../data/subnucleo-periodo-totais");exports.PainelQuantidades=function(t){var a=e.getSubNucleoTotais({initialData:t.initialData,nucleo:t.nucleo,records:t.records},moment().subtract(365,"days")),c=Object.keys(a).map(function(e){return{procuradorId:e,qtd:a[e]}}).sort(function(e,t){return e.qtd<t.qtd?1:-1});return React.createElement("div",{className:" has-background-light",style:{marginBottom:"2em"}},React.createElement("div",{className:""},React.createElement("div",{className:"title is-4 has-text-centered has-background-grey-lighter has-text-grey-dark"},t.nucleo)),React.createElement("div",{className:"level"},c.length>1?c.map(function(e){return React.createElement("div",{key:e.procuradorId,className:"level-item has-text-centered"},React.createElement("div",null,React.createElement("p",{className:"title"},e.qtd),React.createElement("p",{className:"heading"},e.procuradorId)))}):React.createElement("div",{className:"level-item has-text-centered"},React.createElement("div",null,React.createElement("p",{className:"title"},"0"),React.createElement("p",{className:"heading"},"Processos")))))};
},{"../../data/subnucleo-periodo-totais":"p2QM"}],"F8ZJ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=function(t,i){return null===t||""===t||t===i},i=function(){function i(r){if(!Array.isArray(r))throw"Record is not array";if(10!==r.length)throw"Record with different number of elements than 10";if(this.id=r[0],"string"!=typeof this.id)throw"RECORD ID NOT STRING";if(this.id.length<10)throw"RECORD ID NOT VALID";if(this.emailUser=r[1],!this.emailUser.includes("@"))throw"INVALID E-MAIL FOR RECORD";if(this.created=moment(r[2],i._dateFormat),!this.created.isValid())throw"INVALID CREATED DATE FOR RECORD";if(this.idProcurador=r[3],this.idSubnucleo=r[4],this.quantidade=parseInt(r[5],10),this.dataMovimento=""===r[6]||null===r[6]?this.created:moment(r[6],i._dateFormat),!this.dataMovimento.isValid())throw"INVALID DATA_MOVIMENTO DATE FOR RECORD";if(this.descricao=r[7],!t(r[8],"M"))throw"INVALID FIELD FOR BOOLEAN 'M'";if(this.isMandado="M"===r[8].trim().toUpperCase(),!t(r[9],"F"))throw"INVALID FIELD FOR BOOLEAN 'F'";this.isFisico="F"===r[9].trim().toUpperCase()}return i.createArrayRecord=function(t){var r,e=moment();r=void 0===t.dataMovimento?e:moment(t.dataMovimento);var o=[e.format(i._dateFormat),t.idProcurador,t.idSubfluxo,t.quantidade,r.format(i._dateFormat),t.descricao?t.descricao:null,t.isMandado?"M":null,t.isFisico?"F":null];return console.log("Record",o),o},i._dateFormat="DD/MM/YYYY HH:mm:ss",i}();exports.RecordLog=i;
},{}],"FMXC":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=function(){function e(e){this._email=e["E-MAIL"],this._id=e.IDENTIFICADOR,this._localizacao_saj=e["LOCALIZAÇÃO (SAJ)"],this._nome=e.PROCURADOR,this._teletrabalho=e["TELETRABALHO?"].length>0}return Object.defineProperty(e.prototype,"id",{get:function(){return this._id},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"uiName",{get:function(){return""+this.id.replace("_"," ")},enumerable:!0,configurable:!0}),e}();exports.Procurador=e;
},{}],"JMhL":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=function(){function e(e){this._id=e.IDENTIFICADOR,this._nucleo=e.Núcleo,this._subdivisao=e.Subdivisão,this._subnucleo=e.Subnúcleo}return Object.defineProperty(e.prototype,"id",{get:function(){return this._id},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"nome",{get:function(){return this._subnucleo},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"UiName",{get:function(){return this._id.replace("_"," ")},enumerable:!0,configurable:!0}),e}();exports.SubNucleo=e;
},{}],"VIPl":[function(require,module,exports) {
"use strict";var t=this&&this.__awaiter||function(t,e,r,n){return new(r||(r=Promise))(function(o,i){function a(t){try{c(n.next(t))}catch(e){i(e)}}function u(t){try{c(n.throw(t))}catch(e){i(e)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r(function(t){t(e)})).then(a,u)}c((n=n.apply(t,e||[])).next())})},e=this&&this.__generator||function(t,e){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(u){i=[6,u],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},r=this&&this.__spreadArrays||function(){for(var t=0,e=0,r=arguments.length;e<r;e++)t+=arguments[e].length;var n=Array(t),o=0;for(e=0;e<r;e++)for(var i=arguments[e],a=0,u=i.length;a<u;a++,o++)n[o]=i[a];return n};Object.defineProperty(exports,"__esModule",{value:!0});var n=require("./Procurador"),o=require("./Nucleo"),i=require("../api/types/RecordLog"),a=require("../api/api"),u=function(){function u(){}return u._checkInitialData=function(){return t(this,void 0,void 0,function(){var t;return e(this,function(e){switch(e.label){case 0:return void 0!==u.initialData?[3,2]:(t=u,[4,a.getInitialData(void 0)]);case 1:t.initialData=e.sent(),e.label=2;case 2:return[2,u.initialData]}})})},u._checklastRecordData=function(){return t(this,void 0,void 0,function(){var t;return e(this,function(e){switch(e.label){case 0:return void 0!==u.lastRecordData?[3,2]:(t=u,[4,a.getLastDis(void 0)]);case 1:t.lastRecordData=e.sent(),e.label=2;case 2:return[2,u.lastRecordData]}})})},u._checkLastCalendarData=function(){return t(this,void 0,void 0,function(){var t;return e(this,function(e){switch(e.label){case 0:return void 0!==u.lastCalendarData?[3,2]:(t=u,[4,a.getCalendarEvents(void 0)]);case 1:t.lastCalendarData=e.sent(),e.label=2;case 2:return[2,u.lastCalendarData]}})})},Object.defineProperty(u.prototype,"procuradores",{get:function(){return t(this,void 0,void 0,function(){var t;return e(this,function(e){switch(e.label){case 0:return void 0!==this._procuradores?[3,2]:(t=this,[4,u._checkInitialData()]);case 1:t._procuradores=e.sent().dataProcuradores.map(function(t){return new n.Procurador(t)}),e.label=2;case 2:return[2,this._procuradores]}})})},enumerable:!0,configurable:!0}),Object.defineProperty(u.prototype,"subnucleos",{get:function(){return t(this,void 0,void 0,function(){var t;return e(this,function(e){switch(e.label){case 0:return void 0!==this._subnucleos?[3,2]:(t=this,[4,u._checkInitialData()]);case 1:t._subnucleos=e.sent().dataSubnucleos.map(function(t){return new o.SubNucleo(t)}),e.label=2;case 2:return[2,this._subnucleos]}})})},enumerable:!0,configurable:!0}),Object.defineProperty(u.prototype,"_procuradorXSubnucleo",{get:function(){return t(this,void 0,void 0,function(){var t;return e(this,function(e){switch(e.label){case 0:return void 0!==this.__dataProcuradorXSubNucleo?[3,2]:(t=this,[4,u._checkInitialData()]);case 1:t.__dataProcuradorXSubNucleo=e.sent().dataProcuradoresSubnucleos,e.label=2;case 2:return[2,this.__dataProcuradorXSubNucleo]}})})},enumerable:!0,configurable:!0}),Object.defineProperty(u.prototype,"lastRecordLog",{get:function(){return t(this,void 0,void 0,function(){var t;return e(this,function(e){switch(e.label){case 0:return void 0!==this._lastRecordLog?[3,2]:(t=this,[4,u._checklastRecordData()]);case 1:t._lastRecordLog=e.sent().map(function(t){return new i.RecordLog(t)}),e.label=2;case 2:return[2,this._lastRecordLog]}})})},enumerable:!0,configurable:!0}),u.prototype._testAndGetSubNucleIdString=function(r){return t(this,void 0,void 0,function(){var t;return e(this,function(e){switch(e.label){case 0:if(t=null,"string"==typeof r&&(t=r),r instanceof o.SubNucleo&&(t=r.id),null===t)throw"ARGUMENTO INVALIDO PARA subNucleo. Deve ser instância ou Id.";return[4,this.subnucleos];case 1:if(!e.sent().some(function(t){return t.id===r}))throw console.error("invalido: ",t),"ID DO SUBNUCLEO INVALIDO";return[2,t]}})})},u.prototype.procuradoresDoSubnucleo=function(n){return t(this,void 0,void 0,function(){var t,o,i;return e(this,function(e){switch(e.label){case 0:return[4,this._testAndGetSubNucleIdString(n)];case 1:return t=e.sent(),[4,this._procuradorXSubnucleo];case 2:return o=e.sent(),i=o.filter(function(e){return e["ID SUBNUCLEO"]===t}).map(function(t){return t["ID PROCURADOR"]}),[4,this.procuradores];case 3:return[2,r.apply(void 0,[e.sent().filter(function(t){return i.includes(t.id)})])]}})})},u.prototype.subNucleos=function(){return t(this,void 0,void 0,function(){return e(this,function(t){switch(t.label){case 0:return[4,this.subnucleos];case 1:return[2,r.apply(void 0,[t.sent()])]}})})},u.prototype.quantitativosSubNucleo=function(r,n){return void 0===n&&(n="essa-semana"),t(this,void 0,void 0,function(){var t;return e(this,function(e){switch(e.label){case 0:return[4,this._testAndGetSubNucleIdString(r)];case 1:return t=e.sent(),[4,this.lastRecordLog];case 2:return e.sent().filter(function(e){return e.idSubnucleo===t}),[2]}})})},u.prototype.lastRecords=function(){return t(this,void 0,void 0,function(){return e(this,function(t){switch(t.label){case 0:return[4,this.lastRecordLog];case 1:return[2,r.apply(void 0,[t.sent()])]}})})},u}();exports.Query=u;
},{"./Procurador":"FMXC","./Nucleo":"JMhL","../api/types/RecordLog":"F8ZJ","../api/api":"w0Qw"}],"I7wT":[function(require,module,exports) {
"use strict";var e=this&&this.__awaiter||function(e,t,a,c){return new(a||(a=Promise))(function(n,l){function r(e){try{i(c.next(e))}catch(t){l(t)}}function s(e){try{i(c.throw(e))}catch(t){l(t)}}function i(e){var t;e.done?n(e.value):(t=e.value,t instanceof a?t:new a(function(e){e(t)})).then(r,s)}i((c=c.apply(e,t||[])).next())})},t=this&&this.__generator||function(e,t){var a,c,n,l,r={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return l={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function s(l){return function(s){return function(l){if(a)throw new TypeError("Generator is already executing.");for(;r;)try{if(a=1,c&&(n=2&l[0]?c.return:l[0]?c.throw||((n=c.return)&&n.call(c),0):c.next)&&!(n=n.call(c,l[1])).done)return n;switch(c=0,n&&(l=[2&l[0],n.value]),l[0]){case 0:case 1:n=l;break;case 4:return r.label++,{value:l[1],done:!1};case 5:r.label++,c=l[1],l=[0];continue;case 7:l=r.ops.pop(),r.trys.pop();continue;default:if(!(n=(n=r.trys).length>0&&n[n.length-1])&&(6===l[0]||2===l[0])){r=0;continue}if(3===l[0]&&(!n||l[1]>n[0]&&l[1]<n[3])){r.label=l[1];break}if(6===l[0]&&r.label<n[1]){r.label=n[1],n=l;break}if(n&&r.label<n[2]){r.label=n[2],r.ops.push(l);break}n[2]&&r.ops.pop(),r.trys.pop();continue}l=t.call(e,r)}catch(s){l=[6,s],c=0}finally{a=n=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,s])}}};Object.defineProperty(exports,"__esModule",{value:!0});var a=require("../../api/types/RecordLog"),c=require("../../api/api");exports.FormularioContabilizacao=function(){var n=React.useState([]),l=n[0],r=n[1],s=React.useState(moment()),i=s[0],o=s[1],u=React.useState(""),m=u[0],d=u[1],R=React.useState([]),v=R[0],f=R[1],b=React.useState(""),h=b[0],E=b[1],p=React.useState(1),N=p[0],y=p[1],g=React.useState(!1),w=g[0],x=g[1],k=React.useState(!1),S=k[0],C=k[1],M=React.useState(!1),_=M[0],q=M[1],A=0!==N&&""!==h;return React.useEffect(function(){e(void 0,void 0,void 0,function(){var e;return t(this,function(t){switch(t.label){case 0:return console.log("init",m),[4,globalThis.query.subNucleos()];case 1:return e=t.sent(),r(e),d(e[0].id),[2]}})})},[]),React.useEffect(function(){e(void 0,void 0,void 0,function(){var e;return t(this,function(t){switch(t.label){case 0:return console.log("subnucleo",m),[4,globalThis.query.procuradoresDoSubnucleo(m)];case 1:return e=t.sent(),f(e),e.length>0&&E(e[0].id),[2]}})})},[m]),l&&""!==m?React.createElement("section",{className:"section has-background-light"},React.createElement("div",{className:"level has-text-centered"},React.createElement("div",{className:"level-item has-text-centered"},React.createElement("span",{className:"title is-2"},"Atualizar Quantitativo"))),React.createElement("div",{className:"columns"},React.createElement("div",{className:"column"},React.createElement("div",{className:"field"},React.createElement("label",{className:"label"},"SubNúcleo"),React.createElement("div",{className:"control is-expanded"},React.createElement("div",{className:"select is-fullwidth"},React.createElement("select",{onChange:function(e){return d(e.target.value)}},l.map(function(e){return React.createElement("option",{key:e.id},e.UiName)}))))),React.createElement("div",{className:"field"},React.createElement("label",{className:"label"},"Quantidade"),React.createElement("div",{className:"control is-expanded"},React.createElement("input",{type:"number",value:N,onChange:function(e){return y(parseInt(e.target.value))},className:"input is-fullwidth"}))),React.createElement("div",{className:"field"},React.createElement("label",{className:"label"},"Características"),React.createElement("div",{className:"columns"},React.createElement("div",{className:"column"},React.createElement("div",{className:"control"},React.createElement("label",{className:"checkbox"},React.createElement("input",{type:"checkbox",onChange:function(e){return C(e.target.checked)}}),React.createElement("span",null,"Processo Físico")))),React.createElement("div",{className:"column"},React.createElement("div",{className:"control"},React.createElement("label",{className:"checkbox"},React.createElement("input",{type:"checkbox",onChange:function(e){return x(e.target.checked)}}),React.createElement("span",null,"Mandado"))))))),React.createElement("div",{className:"column"},React.createElement("div",{className:"field"},React.createElement("label",{className:"label"},"Procurador"),React.createElement("div",{className:"control is-expanded"},React.createElement("div",{className:"select  is-fullwidth"},React.createElement("select",{onChange:function(e){return E(e.target.value)}},v.map(function(e){return React.createElement("option",{value:e.id,key:e.id},e.uiName)}))))),React.createElement("div",{className:"field"},React.createElement("label",{className:"label"},"Data da Distribuição"),React.createElement("div",{className:"level"},React.createElement("span",null,i.format("dddd, DD/MM/YY")),React.createElement("div",{className:"control is-expanded"},React.createElement("button",{style:{width:"4em"},className:"button is-small",onClick:function(){return o(moment(i).subtract(1,"day").set("hour",23).set("minute",0).set("second",0).set("millisecond",0))}},"-"),React.createElement("button",{onClick:function(){return o(moment(i).add(1,"day").set("hour",23).set("minute",0).set("second",0).set("millisecond",0))},style:{width:"4em"},className:"button is-small",disabled:!moment(i).set("hour",23).set("minute",0).set("second",0).set("millisecond",0).isBefore(moment())},"+")))))),React.createElement("div",{className:"level"},React.createElement("div",{className:"level-item level-right"},React.createElement("button",{onClick:function(){return e(void 0,void 0,void 0,function(){var e;return t(this,function(t){switch(t.label){case 0:return e=a.RecordLog.createArrayRecord({idProcurador:h,idSubfluxo:m,quantidade:N,dataMovimento:i,isFisico:S,isMandado:w,descricao:"teste incluir descrição"}),q(!0),[4,c.addRecord(e)];case 1:return t.sent(),q(!1),[2]}})})},className:"button is-medium is-link "+(_&&"is-loading"),disabled:!A&&!_},"ATUALIZAR")))):React.createElement("div",null,"...")};
},{"../../api/types/RecordLog":"F8ZJ","../../api/api":"w0Qw"}],"cjTR":[function(require,module,exports) {
"use strict";var e=this&&this.__awaiter||function(e,t,a,n){return new(a||(a=Promise))(function(r,i){function c(e){try{l(n.next(e))}catch(t){i(t)}}function o(e){try{l(n.throw(e))}catch(t){i(t)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof a?t:new a(function(e){e(t)})).then(c,o)}l((n=n.apply(e,t||[])).next())})},t=this&&this.__generator||function(e,t){var a,n,r,i,c={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function o(i){return function(o){return function(i){if(a)throw new TypeError("Generator is already executing.");for(;c;)try{if(a=1,n&&(r=2&i[0]?n.return:i[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,i[1])).done)return r;switch(n=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,n=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!(r=(r=c.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){c=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){c.label=i[1];break}if(6===i[0]&&c.label<r[1]){c.label=r[1],r=i;break}if(r&&c.label<r[2]){c.label=r[2],c.ops.push(i);break}r[2]&&c.ops.pop(),c.trys.pop();continue}i=t.call(e,c)}catch(o){i=[6,o],n=0}finally{a=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,o])}}};Object.defineProperty(exports,"__esModule",{value:!0});var a=require("react-hot-loader"),n=require("./sub/calendario"),r=require("./painel-quantidades/painel-quantidades"),i=require("../api/types/RecordLog");require("./App.scss");var c=require("../data/Query"),o=require("./formulario/formulario_contabilizacao"),l=function(){var a=React.useState(!0),l=a[0],u=a[1],s=React.useState(null),d=s[0],f=s[1],h=React.useState(null),p=h[0],R=h[1];return React.useEffect(function(){globalThis.query=new c.Query},[]),React.useEffect(function(){e(void 0,void 0,void 0,function(){var e,a;return t(this,function(t){switch(t.label){case 0:return[4,c.Query._checkInitialData()];case 1:return e=t.sent(),f(e),[4,c.Query._checklastRecordData()];case 2:return a=t.sent(),R(a),u(!1),[2]}})})},[]),l?React.createElement("div",{className:"container is-flex"},React.createElement("h1",{className:"title"},"Carregando Informações da Planilha")):React.createElement("div",{className:"container"},React.createElement(n.Calendario,null),React.createElement(r.PainelQuantidades,{nucleo:"NDC",initialData:d,records:p}),React.createElement(r.PainelQuantidades,{nucleo:"NDE",initialData:d,records:p}),React.createElement(r.PainelQuantidades,{nucleo:"Central Ordinária",initialData:d,records:p}),React.createElement(r.PainelQuantidades,{nucleo:"Central Especial",initialData:d,records:p}),React.createElement(r.PainelQuantidades,{nucleo:"NDE-FLUXO",initialData:d,records:p}),React.createElement(r.PainelQuantidades,{nucleo:"CE",initialData:d,records:p}),React.createElement(o.FormularioContabilizacao,null),React.createElement("button",{className:"button",onClick:function(){var e,t=i.RecordLog.createArrayRecord({dataMovimento:new Date,idProcurador:"GGHHHHGGF",idSubfluxo:"YYHHGTRFF",quantidade:22});console.log(t),null===(e=google)||void 0===e||e.script.run.withSuccessHandler(function(){console.log("criou")}).withFailureHandler(function(e){console.error("ERRO NA CRIACAO DO RECORD",e)}).addRecord(t)}},"criar"))};exports.default=a.hot(module)(l);
},{"react-hot-loader":"d3EK","./sub/calendario":"LZTl","./painel-quantidades/painel-quantidades":"Ga6M","../api/types/RecordLog":"F8ZJ","./App.scss":"dD23","../data/Query":"VIPl","./formulario/formulario_contabilizacao":"I7wT"}],"dgRt":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});
},{}],"zo2T":[function(require,module,exports) {
"use strict";var e=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var t=e(require("./components/App"));require("./global"),ReactDOM.render(React.createElement(t.default,null),document.getElementById("root"));
},{"./components/App":"cjTR","./global":"dgRt"}]},{},["zo2T"], null)