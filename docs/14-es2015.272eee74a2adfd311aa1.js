(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{Y4VU:function(t,e,n){"use strict";n.r(e);var r=n("8Y7J");class i{}var s=n("pMnS"),o=n("oBZk"),a=n("ZZ/e");class l{constructor(){}}var h=r.ob({encapsulation:0,styles:[[""]],data:{}});function u(t){return r.Ib(0,[(t()(),r.qb(0,0,null,null,18,"ion-tabs",[],null,[[null,"ionTabButtonClick"]],(function(t,e,n){var i=!0;return"ionTabButtonClick"===e&&(i=!1!==r.Bb(t,1).select(n.detail.tab)&&i),i}),o.R,o.u)),r.pb(1,49152,null,1,a.wb,[a.Hb],null,null),r.Eb(335544320,1,{tabBar:0}),(t()(),r.qb(3,0,null,1,15,"ion-tab-bar",[["color","dark"],["slot","bottom"]],null,null,null,o.P,o.s)),r.pb(4,49152,[[1,4]],0,a.ub,[r.h,r.k,r.x],{color:[0,"color"]},null),(t()(),r.qb(5,0,null,0,6,"ion-tab-button",[["tab","tab1"]],null,null,null,o.Q,o.t)),r.pb(6,49152,null,0,a.vb,[r.h,r.k,r.x],{tab:[0,"tab"]},null),(t()(),r.qb(7,0,null,0,1,"ion-icon",[["name","clipboard"]],null,null,null,o.F,o.i)),r.pb(8,49152,null,0,a.C,[r.h,r.k,r.x],{name:[0,"name"]},null),(t()(),r.qb(9,0,null,0,2,"ion-label",[],null,null,null,o.L,o.o)),r.pb(10,49152,null,0,a.N,[r.h,r.k,r.x],null,null),(t()(),r.Gb(-1,0,["Pendientes"])),(t()(),r.qb(12,0,null,0,6,"ion-tab-button",[["tab","tab2"]],null,null,null,o.Q,o.t)),r.pb(13,49152,null,0,a.vb,[r.h,r.k,r.x],{tab:[0,"tab"]},null),(t()(),r.qb(14,0,null,0,1,"ion-icon",[["name","done-all"]],null,null,null,o.F,o.i)),r.pb(15,49152,null,0,a.C,[r.h,r.k,r.x],{name:[0,"name"]},null),(t()(),r.qb(16,0,null,0,2,"ion-label",[],null,null,null,o.L,o.o)),r.pb(17,49152,null,0,a.N,[r.h,r.k,r.x],null,null),(t()(),r.Gb(-1,0,["Terminados"]))],(function(t,e){t(e,4,0,"dark"),t(e,6,0,"tab1"),t(e,8,0,"clipboard"),t(e,13,0,"tab2"),t(e,15,0,"done-all")}),null)}function c(t){return r.Ib(0,[(t()(),r.qb(0,0,null,null,1,"app-tabs",[],null,null,null,u,h)),r.pb(1,49152,null,0,l,[],null,null)],null,null)}var d=r.mb("app-tabs",l,c,{},{},[]),p=n("SVse"),m=n("s7LF"),g=n("iInd");const _=()=>Promise.all([n.e(0),n.e(15)]).then(n.bind(null,"qI4B")).then(t=>t.Tab1PageModuleNgFactory),f=()=>Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"+MmU")).then(t=>t.AgregarPageModuleNgFactory),y=()=>Promise.all([n.e(0),n.e(16)]).then(n.bind(null,"55Gs")).then(t=>t.Tab2PageModuleNgFactory),v=()=>Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"+MmU")).then(t=>t.AgregarPageModuleNgFactory);class b{}n.d(e,"TabsPageModuleNgFactory",(function(){return C}));var C=r.nb(i,[],(function(t){return r.yb([r.zb(512,r.j,r.Y,[[8,[s.a,d]],[3,r.j],r.v]),r.zb(4608,p.k,p.j,[r.s,[2,p.q]]),r.zb(4608,a.b,a.b,[r.x,r.g]),r.zb(4608,a.Gb,a.Gb,[a.b,r.j,r.p]),r.zb(4608,a.Jb,a.Jb,[a.b,r.j,r.p]),r.zb(4608,m.g,m.g,[]),r.zb(1073742336,p.b,p.b,[]),r.zb(1073742336,a.Eb,a.Eb,[]),r.zb(1073742336,m.f,m.f,[]),r.zb(1073742336,m.a,m.a,[]),r.zb(1073742336,g.n,g.n,[[2,g.s],[2,g.m]]),r.zb(1073742336,b,b,[]),r.zb(1073742336,i,i,[]),r.zb(1024,g.k,(function(){return[[{path:"tabs",component:l,children:[{path:"tab1",children:[{path:"",loadChildren:_},{path:"agregar/:listaId",loadChildren:f}]},{path:"tab2",children:[{path:"",loadChildren:y},{path:"agregar/:listaId",loadChildren:v}]},{path:"",redirectTo:"/tabs/tab1",pathMatch:"full"}]},{path:"",redirectTo:"/tabs/tab1",pathMatch:"full"}]]}),[])])}))},s7LF:function(t,e,n){"use strict";var r=n("8Y7J"),i=n("cUpR"),s=n("HDdC"),o=n("DH7j"),a=n("lJxs"),l=n("XoHu"),h=n("Cfvw");function u(t,e){return new s.a(n=>{const r=t.length;if(0===r)return void n.complete();const i=new Array(r);let s=0,o=0;for(let a=0;a<r;a++){const l=Object(h.a)(t[a]);let u=!1;n.add(l.subscribe({next:t=>{u||(u=!0,o++),i[a]=t},error:t=>n.error(t),complete:()=>{++s!==r&&u||(o===r&&n.next(e?e.reduce((t,e,n)=>(t[e]=i[n],t),{}):i),n.complete())}}))}})}n.d(e,"f",(function(){return ht})),n.d(e,"g",(function(){return M})),n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return f})),n.d(e,"d",(function(){return v})),n.d(e,"e",(function(){return lt})),n.d(e,"a",(function(){return ut}));const c=new r.o("NgValueAccessor");let d=(()=>(class{constructor(t,e){this._renderer=t,this._elementRef=e,this.onChange=t=>{},this.onTouched=()=>{}}writeValue(t){this._renderer.setProperty(this._elementRef.nativeElement,"checked",t)}registerOnChange(t){this.onChange=t}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",t)}}))(),p=(()=>(class{constructor(t,e,n){this._renderer=t,this._elementRef=e,this._compositionMode=n,this.onChange=t=>{},this.onTouched=()=>{},this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function(){const t=Object(i.r)()?Object(i.r)().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}())}writeValue(t){this._renderer.setProperty(this._elementRef.nativeElement,"value",null==t?"":t)}registerOnChange(t){this.onChange=t}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",t)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}}))();class m{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}reset(t){this.control&&this.control.reset(t)}hasError(t,e){return!!this.control&&this.control.hasError(t,e)}getError(t,e){return this.control?this.control.getError(t,e):null}}class g extends m{get formDirective(){return null}get path(){return null}}function _(){throw new Error("unimplemented")}class f extends m{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null,this._rawValidators=[],this._rawAsyncValidators=[]}get validator(){return _()}get asyncValidator(){return _()}}class y{constructor(t){this._cd=t}get ngClassUntouched(){return!!this._cd.control&&this._cd.control.untouched}get ngClassTouched(){return!!this._cd.control&&this._cd.control.touched}get ngClassPristine(){return!!this._cd.control&&this._cd.control.pristine}get ngClassDirty(){return!!this._cd.control&&this._cd.control.dirty}get ngClassValid(){return!!this._cd.control&&this._cd.control.valid}get ngClassInvalid(){return!!this._cd.control&&this._cd.control.invalid}get ngClassPending(){return!!this._cd.control&&this._cd.control.pending}}let v=(()=>{class t extends y{constructor(t){super(t)}}return class extends y{constructor(t){super(t)}}})();function b(t){return null==t||0===t.length}const C=/^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/;class V{static min(t){return e=>{if(b(e.value)||b(t))return null;const n=parseFloat(e.value);return!isNaN(n)&&n<t?{min:{min:t,actual:e.value}}:null}}static max(t){return e=>{if(b(e.value)||b(t))return null;const n=parseFloat(e.value);return!isNaN(n)&&n>t?{max:{max:t,actual:e.value}}:null}}static required(t){return b(t.value)?{required:!0}:null}static requiredTrue(t){return!0===t.value?null:{required:!0}}static email(t){return b(t.value)?null:C.test(t.value)?null:{email:!0}}static minLength(t){return e=>{if(b(e.value))return null;const n=e.value?e.value.length:0;return n<t?{minlength:{requiredLength:t,actualLength:n}}:null}}static maxLength(t){return e=>{const n=e.value?e.value.length:0;return n>t?{maxlength:{requiredLength:t,actualLength:n}}:null}}static pattern(t){if(!t)return V.nullValidator;let e,n;return"string"==typeof t?(n="","^"!==t.charAt(0)&&(n+="^"),n+=t,"$"!==t.charAt(t.length-1)&&(n+="$"),e=new RegExp(n)):(n=t.toString(),e=t),t=>{if(b(t.value))return null;const r=t.value;return e.test(r)?null:{pattern:{requiredPattern:n,actualValue:r}}}}static nullValidator(t){return null}static compose(t){if(!t)return null;const e=t.filter(w);return 0==e.length?null:function(t){return O(function(t,e){return e.map(e=>e(t))}(t,e))}}static composeAsync(t){if(!t)return null;const e=t.filter(w);return 0==e.length?null:function(t){return function(...t){if(1===t.length){const e=t[0];if(Object(o.a)(e))return u(e,null);if(Object(l.a)(e)&&Object.getPrototypeOf(e)===Object.prototype){const t=Object.keys(e);return u(t.map(t=>e[t]),t)}}if("function"==typeof t[t.length-1]){const e=t.pop();return u(t=1===t.length&&Object(o.a)(t[0])?t[0]:t,null).pipe(Object(a.a)(t=>e(...t)))}return u(t,null)}(function(t,e){return e.map(e=>e(t))}(t,e).map(E)).pipe(Object(a.a)(O))}}}function w(t){return null!=t}function E(t){const e=Object(r.wb)(t)?Object(h.a)(t):t;if(!Object(r.vb)(e))throw new Error("Expected validator to return Promise or Observable.");return e}function O(t){const e=t.reduce((t,e)=>null!=e?Object.assign({},t,e):t,{});return 0===Object.keys(e).length?null:e}function A(t){return t.validate?e=>t.validate(e):t}function S(t){return t.validate?e=>t.validate(e):t}let k=(()=>(class{constructor(t,e){this._renderer=t,this._elementRef=e,this.onChange=t=>{},this.onTouched=()=>{}}writeValue(t){this._renderer.setProperty(this._elementRef.nativeElement,"value",null==t?"":t)}registerOnChange(t){this.onChange=e=>{t(""==e?null:parseFloat(e))}}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",t)}}))(),M=(()=>(class{constructor(){this._accessors=[]}add(t,e){this._accessors.push([t,e])}remove(t){for(let e=this._accessors.length-1;e>=0;--e)if(this._accessors[e][1]===t)return void this._accessors.splice(e,1)}select(t){this._accessors.forEach(e=>{this._isSameGroup(e,t)&&e[1]!==t&&e[1].fireUncheck(t.value)})}_isSameGroup(t,e){return!!t[0].control&&t[0]._parent===e._control._parent&&t[1].name===e.name}}))(),P=(()=>(class{constructor(t,e,n,r){this._renderer=t,this._elementRef=e,this._registry=n,this._injector=r,this.onChange=()=>{},this.onTouched=()=>{}}ngOnInit(){this._control=this._injector.get(f),this._checkName(),this._registry.add(this._control,this)}ngOnDestroy(){this._registry.remove(this)}writeValue(t){this._state=t===this.value,this._renderer.setProperty(this._elementRef.nativeElement,"checked",this._state)}registerOnChange(t){this._fn=t,this.onChange=()=>{t(this.value),this._registry.select(this)}}fireUncheck(t){this.writeValue(t)}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",t)}_checkName(){this.name&&this.formControlName&&this.name!==this.formControlName&&this._throwNameError(),!this.name&&this.formControlName&&(this.name=this.formControlName)}_throwNameError(){throw new Error('\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <input type="radio" formControlName="food" name="food">\n    ')}}))();const D={formControlName:'\n    <div [formGroup]="myGroup">\n      <input formControlName="firstName">\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       firstName: new FormControl()\n    });',formGroupName:'\n    <div [formGroup]="myGroup">\n       <div formGroupName="person">\n          <input formControlName="firstName">\n       </div>\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       person: new FormGroup({ firstName: new FormControl() })\n    });',formArrayName:'\n    <div [formGroup]="myGroup">\n      <div formArrayName="cities">\n        <div *ngFor="let city of cityArray.controls; index as i">\n          <input [formControlName]="i">\n        </div>\n      </div>\n    </div>\n\n    In your class:\n\n    this.cityArray = new FormArray([new FormControl(\'SF\')]);\n    this.myGroup = new FormGroup({\n      cities: this.cityArray\n    });',ngModelGroup:'\n    <form>\n       <div ngModelGroup="person">\n          <input [(ngModel)]="person.name" name="firstName">\n       </div>\n    </form>',ngModelWithFormGroup:'\n    <div [formGroup]="myGroup">\n       <input formControlName="firstName">\n       <input [(ngModel)]="showMoreControls" [ngModelOptions]="{standalone: true}">\n    </div>\n  '};function T(t,e){return[...e.path,t]}function N(t,e){t||G(e,"Cannot find control with"),e.valueAccessor||G(e,"No value accessor for form control with"),t.validator=V.compose([t.validator,e.validator]),t.asyncValidator=V.composeAsync([t.asyncValidator,e.asyncValidator]),e.valueAccessor.writeValue(t.value),function(t,e){e.valueAccessor.registerOnChange(n=>{t._pendingValue=n,t._pendingChange=!0,t._pendingDirty=!0,"change"===t.updateOn&&x(t,e)})}(t,e),function(t,e){t.registerOnChange((t,n)=>{e.valueAccessor.writeValue(t),n&&e.viewToModelUpdate(t)})}(t,e),function(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,"blur"===t.updateOn&&t._pendingChange&&x(t,e),"submit"!==t.updateOn&&t.markAsTouched()})}(t,e),e.valueAccessor.setDisabledState&&t.registerOnDisabledChange(t=>{e.valueAccessor.setDisabledState(t)}),e._rawValidators.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(()=>t.updateValueAndValidity())}),e._rawAsyncValidators.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(()=>t.updateValueAndValidity())})}function x(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function F(t,e){null==t&&G(e,"Cannot find control with"),t.validator=V.compose([t.validator,e.validator]),t.asyncValidator=V.composeAsync([t.asyncValidator,e.asyncValidator])}function G(t,e){let n;throw n=t.path.length>1?`path: '${t.path.join(" -> ")}'`:t.path[0]?`name: '${t.path}'`:"unspecified name attribute",new Error(`${e} ${n}`)}function U(t){return null!=t?V.compose(t.map(A)):null}function j(t){return null!=t?V.composeAsync(t.map(S)):null}function I(t,e){if(!t.hasOwnProperty("model"))return!1;const n=t.model;return!!n.isFirstChange()||!Object(r.xb)(e,n.currentValue)}const R=[d,(()=>(class{constructor(t,e){this._renderer=t,this._elementRef=e,this.onChange=t=>{},this.onTouched=()=>{}}writeValue(t){this._renderer.setProperty(this._elementRef.nativeElement,"value",parseFloat(t))}registerOnChange(t){this.onChange=e=>{t(""==e?null:parseFloat(e))}}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",t)}}))(),k,(()=>(class{constructor(t,e){this._renderer=t,this._elementRef=e,this._optionMap=new Map,this._idCounter=0,this.onChange=t=>{},this.onTouched=()=>{},this._compareWith=r.xb}set compareWith(t){if("function"!=typeof t)throw new Error(`compareWith must be a function, but received ${JSON.stringify(t)}`);this._compareWith=t}writeValue(t){this.value=t;const e=this._getOptionId(t);null==e&&this._renderer.setProperty(this._elementRef.nativeElement,"selectedIndex",-1);const n=function(t,e){return null==t?`${e}`:(e&&"object"==typeof e&&(e="Object"),`${t}: ${e}`.slice(0,50))}(e,t);this._renderer.setProperty(this._elementRef.nativeElement,"value",n)}registerOnChange(t){this.onChange=e=>{this.value=this._getOptionValue(e),t(this.value)}}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",t)}_registerOption(){return(this._idCounter++).toString()}_getOptionId(t){for(const e of Array.from(this._optionMap.keys()))if(this._compareWith(this._optionMap.get(e),t))return e;return null}_getOptionValue(t){const e=function(t){return t.split(":")[0]}(t);return this._optionMap.has(e)?this._optionMap.get(e):t}}))(),(()=>(class{constructor(t,e){this._renderer=t,this._elementRef=e,this._optionMap=new Map,this._idCounter=0,this.onChange=t=>{},this.onTouched=()=>{},this._compareWith=r.xb}set compareWith(t){if("function"!=typeof t)throw new Error(`compareWith must be a function, but received ${JSON.stringify(t)}`);this._compareWith=t}writeValue(t){let e;if(this.value=t,Array.isArray(t)){const n=t.map(t=>this._getOptionId(t));e=(t,e)=>{t._setSelected(n.indexOf(e.toString())>-1)}}else e=(t,e)=>{t._setSelected(!1)};this._optionMap.forEach(e)}registerOnChange(t){this.onChange=e=>{const n=[];if(e.hasOwnProperty("selectedOptions")){const t=e.selectedOptions;for(let e=0;e<t.length;e++){const r=t.item(e),i=this._getOptionValue(r.value);n.push(i)}}else{const t=e.options;for(let e=0;e<t.length;e++){const r=t.item(e);if(r.selected){const t=this._getOptionValue(r.value);n.push(t)}}}this.value=n,t(n)}}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",t)}_registerOption(t){const e=(this._idCounter++).toString();return this._optionMap.set(e,t),e}_getOptionId(t){for(const e of Array.from(this._optionMap.keys()))if(this._compareWith(this._optionMap.get(e)._value,t))return e;return null}_getOptionValue(t){const e=function(t){return t.split(":")[0]}(t);return this._optionMap.has(e)?this._optionMap.get(e)._value:t}}))(),P];function $(t,e){t._syncPendingControls(),e.forEach(t=>{const e=t.control;"submit"===e.updateOn&&e._pendingChange&&(t.viewToModelUpdate(e._pendingValue),e._pendingChange=!1)})}function z(t,e){if(!e)return null;Array.isArray(e)||G(t,"Value accessor was not provided as an array for form control with");let n=void 0,r=void 0,i=void 0;return e.forEach(e=>{e.constructor===p?n=e:function(t){return R.some(e=>t.constructor===e)}(e)?(r&&G(t,"More than one built-in value accessor matches form control with"),r=e):(i&&G(t,"More than one custom value accessor matches form control with"),i=e)}),i||r||n||(G(t,"No valid value accessor for form control with"),null)}function q(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}const L="VALID",W="INVALID",Z="PENDING",B="DISABLED";function J(t){const e=Y(t)?t.validators:t;return Array.isArray(e)?U(e):e||null}function H(t,e){const n=Y(e)?e.asyncValidators:t;return Array.isArray(n)?j(n):n||null}function Y(t){return null!=t&&!Array.isArray(t)&&"object"==typeof t}class Q{constructor(t,e){this.validator=t,this.asyncValidator=e,this._onCollectionChange=()=>{},this.pristine=!0,this.touched=!1,this._onDisabledChange=[]}get parent(){return this._parent}get valid(){return this.status===L}get invalid(){return this.status===W}get pending(){return this.status==Z}get disabled(){return this.status===B}get enabled(){return this.status!==B}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this.validator=J(t)}setAsyncValidators(t){this.asyncValidator=H(t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){this.touched=!0,this._parent&&!t.onlySelf&&this._parent.markAsTouched(t)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(t=>t.markAllAsTouched())}markAsUntouched(t={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(t=>{t.markAsUntouched({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}markAsDirty(t={}){this.pristine=!1,this._parent&&!t.onlySelf&&this._parent.markAsDirty(t)}markAsPristine(t={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(t=>{t.markAsPristine({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}markAsPending(t={}){this.status=Z,!1!==t.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!t.onlySelf&&this._parent.markAsPending(t)}disable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=B,this.errors=null,this._forEachChild(e=>{e.disable(Object.assign({},t,{onlySelf:!0}))}),this._updateValue(),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(Object.assign({},t,{skipPristineCheck:e})),this._onDisabledChange.forEach(t=>t(!0))}enable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=L,this._forEachChild(e=>{e.enable(Object.assign({},t,{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors(Object.assign({},t,{skipPristineCheck:e})),this._onDisabledChange.forEach(t=>t(!1))}_updateAncestors(t){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(t){this._parent=t}updateValueAndValidity(t={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),this.status!==L&&this.status!==Z||this._runAsyncValidator(t.emitEvent)),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(t)}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?B:L}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t){if(this.asyncValidator){this.status=Z;const e=E(this.asyncValidator(this));this._asyncValidationSubscription=e.subscribe(e=>this.setErrors(e,{emitEvent:t}))}}_cancelExistingSubscription(){this._asyncValidationSubscription&&this._asyncValidationSubscription.unsubscribe()}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(!1!==e.emitEvent)}get(t){return function(t,e,n){return null==e?null:(e instanceof Array||(e=e.split(".")),e instanceof Array&&0===e.length?null:e.reduce((t,e)=>t instanceof K?t.controls.hasOwnProperty(e)?t.controls[e]:null:t instanceof tt&&t.at(e)||null,t))}(this,t)}getError(t,e){const n=e?this.get(e):this;return n&&n.errors?n.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(t)}_initObservables(){this.valueChanges=new r.m,this.statusChanges=new r.m}_calculateStatus(){return this._allControlsDisabled()?B:this.errors?W:this._anyControlsHaveStatus(Z)?Z:this._anyControlsHaveStatus(W)?W:L}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t={}){this.pristine=!this._anyControlsDirty(),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}_updateTouched(t={}){this.touched=this._anyControlsTouched(),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}_isBoxedValue(t){return"object"==typeof t&&null!==t&&2===Object.keys(t).length&&"value"in t&&"disabled"in t}_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){Y(t)&&null!=t.updateOn&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&this._parent&&this._parent.dirty&&!this._parent._anyControlsDirty()}}class X extends Q{constructor(t=null,e,n){super(J(e),H(n,e)),this._onChange=[],this._applyFormState(t),this._setUpdateStrategy(e),this.updateValueAndValidity({onlySelf:!0,emitEvent:!1}),this._initObservables()}setValue(t,e={}){this.value=this._pendingValue=t,this._onChange.length&&!1!==e.emitModelToViewChange&&this._onChange.forEach(t=>t(this.value,!1!==e.emitViewToModelChange)),this.updateValueAndValidity(e)}patchValue(t,e={}){this.setValue(t,e)}reset(t=null,e={}){this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_clearChangeFns(){this._onChange=[],this._onDisabledChange=[],this._onCollectionChange=()=>{}}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_forEachChild(t){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(t){this._isBoxedValue(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}}class K extends Q{constructor(t,e,n){super(J(e),H(n,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!1})}registerControl(t,e){return this.controls[t]?this.controls[t]:(this.controls[t]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(t,e){this.registerControl(t,e),this.updateValueAndValidity(),this._onCollectionChange()}removeControl(t){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],this.updateValueAndValidity(),this._onCollectionChange()}setControl(t,e){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],e&&this.registerControl(t,e),this.updateValueAndValidity(),this._onCollectionChange()}contains(t){return this.controls.hasOwnProperty(t)&&this.controls[t].enabled}setValue(t,e={}){this._checkAllValuesPresent(t),Object.keys(t).forEach(n=>{this._throwIfControlMissing(n),this.controls[n].setValue(t[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){Object.keys(t).forEach(n=>{this.controls[n]&&this.controls[n].patchValue(t[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}reset(t={},e={}){this._forEachChild((n,r)=>{n.reset(t[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this._reduceChildren({},(t,e,n)=>(t[n]=e instanceof X?e.value:e.getRawValue(),t))}_syncPendingControls(){let t=this._reduceChildren(!1,(t,e)=>!!e._syncPendingControls()||t);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_throwIfControlMissing(t){if(!Object.keys(this.controls).length)throw new Error("\n        There are no form controls registered with this group yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");if(!this.controls[t])throw new Error(`Cannot find form control with name: ${t}.`)}_forEachChild(t){Object.keys(this.controls).forEach(e=>t(this.controls[e],e))}_setUpControls(){this._forEachChild(t=>{t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(t){let e=!1;return this._forEachChild((n,r)=>{e=e||this.contains(r)&&t(n)}),e}_reduceValue(){return this._reduceChildren({},(t,e,n)=>((e.enabled||this.disabled)&&(t[n]=e.value),t))}_reduceChildren(t,e){let n=t;return this._forEachChild((t,r)=>{n=e(n,t,r)}),n}_allControlsDisabled(){for(const t of Object.keys(this.controls))if(this.controls[t].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_checkAllValuesPresent(t){this._forEachChild((e,n)=>{if(void 0===t[n])throw new Error(`Must supply a value for form control with name: '${n}'.`)})}}class tt extends Q{constructor(t,e,n){super(J(e),H(n,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!1})}at(t){return this.controls[t]}push(t){this.controls.push(t),this._registerControl(t),this.updateValueAndValidity(),this._onCollectionChange()}insert(t,e){this.controls.splice(t,0,e),this._registerControl(e),this.updateValueAndValidity()}removeAt(t){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),this.updateValueAndValidity()}setControl(t,e){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),e&&(this.controls.splice(t,0,e),this._registerControl(e)),this.updateValueAndValidity(),this._onCollectionChange()}get length(){return this.controls.length}setValue(t,e={}){this._checkAllValuesPresent(t),t.forEach((t,n)=>{this._throwIfControlMissing(n),this.at(n).setValue(t,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){t.forEach((t,n)=>{this.at(n)&&this.at(n).patchValue(t,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}reset(t=[],e={}){this._forEachChild((n,r)=>{n.reset(t[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this.controls.map(t=>t instanceof X?t.value:t.getRawValue())}clear(){this.controls.length<1||(this._forEachChild(t=>t._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity())}_syncPendingControls(){let t=this.controls.reduce((t,e)=>!!e._syncPendingControls()||t,!1);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_throwIfControlMissing(t){if(!this.controls.length)throw new Error("\n        There are no form controls registered with this array yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");if(!this.at(t))throw new Error(`Cannot find form control at index ${t}`)}_forEachChild(t){this.controls.forEach((e,n)=>{t(e,n)})}_updateValue(){this.value=this.controls.filter(t=>t.enabled||this.disabled).map(t=>t.value)}_anyControls(t){return this.controls.some(e=>e.enabled&&t(e))}_setUpControls(){this._forEachChild(t=>this._registerControl(t))}_checkAllValuesPresent(t){this._forEachChild((e,n)=>{if(void 0===t[n])throw new Error(`Must supply a value for form control at index: ${n}.`)})}_allControlsDisabled(){for(const t of this.controls)if(t.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(t){t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)}}const et=(()=>Promise.resolve(null))();let nt=(()=>{class t extends g{constructor(t,e){super(),this.submitted=!1,this._directives=[],this.ngSubmit=new r.m,this.form=new K({},U(t),j(e))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(t){et.then(()=>{const e=this._findContainer(t.path);t.control=e.registerControl(t.name,t.control),N(t.control,t),t.control.updateValueAndValidity({emitEvent:!1}),this._directives.push(t)})}getControl(t){return this.form.get(t.path)}removeControl(t){et.then(()=>{const e=this._findContainer(t.path);e&&e.removeControl(t.name),q(this._directives,t)})}addFormGroup(t){et.then(()=>{const e=this._findContainer(t.path),n=new K({});F(n,t),e.registerControl(t.name,n),n.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(t){et.then(()=>{const e=this._findContainer(t.path);e&&e.removeControl(t.name)})}getFormGroup(t){return this.form.get(t.path)}updateModel(t,e){et.then(()=>{this.form.get(t.path).setValue(e)})}setValue(t){this.control.setValue(t)}onSubmit(t){return this.submitted=!0,$(this.form,this._directives),this.ngSubmit.emit(t),!1}onReset(){this.resetForm()}resetForm(t){this.form.reset(t),this.submitted=!1}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.form._updateOn=this.options.updateOn)}_findContainer(t){return t.pop(),t.length?this.form.get(t):this.form}}return class extends g{constructor(t,e){super(),this.submitted=!1,this._directives=[],this.ngSubmit=new r.m,this.form=new K({},U(t),j(e))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(t){et.then(()=>{const e=this._findContainer(t.path);t.control=e.registerControl(t.name,t.control),N(t.control,t),t.control.updateValueAndValidity({emitEvent:!1}),this._directives.push(t)})}getControl(t){return this.form.get(t.path)}removeControl(t){et.then(()=>{const e=this._findContainer(t.path);e&&e.removeControl(t.name),q(this._directives,t)})}addFormGroup(t){et.then(()=>{const e=this._findContainer(t.path),n=new K({});F(n,t),e.registerControl(t.name,n),n.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(t){et.then(()=>{const e=this._findContainer(t.path);e&&e.removeControl(t.name)})}getFormGroup(t){return this.form.get(t.path)}updateModel(t,e){et.then(()=>{this.form.get(t.path).setValue(e)})}setValue(t){this.control.setValue(t)}onSubmit(t){return this.submitted=!0,$(this.form,this._directives),this.ngSubmit.emit(t),!1}onReset(){this.resetForm()}resetForm(t){this.form.reset(t),this.submitted=!1}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.form._updateOn=this.options.updateOn)}_findContainer(t){return t.pop(),t.length?this.form.get(t):this.form}}})();class rt{static modelParentException(){throw new Error(`\n      ngModel cannot be used to register form controls with a parent formGroup directive.  Try using\n      formGroup's partner directive "formControlName" instead.  Example:\n\n      ${D.formControlName}\n\n      Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:\n\n      Example:\n\n      ${D.ngModelWithFormGroup}`)}static formGroupNameException(){throw new Error(`\n      ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.\n\n      Option 1: Use formControlName instead of ngModel (reactive strategy):\n\n      ${D.formGroupName}\n\n      Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):\n\n      ${D.ngModelGroup}`)}static missingNameException(){throw new Error('If ngModel is used within a form tag, either the name attribute must be set or the form\n      control must be defined as \'standalone\' in ngModelOptions.\n\n      Example 1: <input [(ngModel)]="person.firstName" name="first">\n      Example 2: <input [(ngModel)]="person.firstName" [ngModelOptions]="{standalone: true}">')}static modelGroupParentException(){throw new Error(`\n      ngModelGroup cannot be used with a parent formGroup directive.\n\n      Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):\n\n      ${D.formGroupName}\n\n      Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):\n\n      ${D.ngModelGroup}`)}static ngFormWarning(){console.warn("\n    It looks like you're using 'ngForm'.\n\n    Support for using the 'ngForm' element selector has been deprecated in Angular v6 and will be removed\n    in Angular v9.\n\n    Use 'ng-form' instead.\n\n    Before:\n    <ngForm #myForm=\"ngForm\">\n\n    After:\n    <ng-form #myForm=\"ngForm\">\n    ")}}const it=new r.o("NgFormSelectorWarning");class st extends g{ngOnInit(){this._checkParentType(),this.formDirective.addFormGroup(this)}ngOnDestroy(){this.formDirective&&this.formDirective.removeFormGroup(this)}get control(){return this.formDirective.getFormGroup(this)}get path(){return T(this.name,this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}get validator(){return U(this._validators)}get asyncValidator(){return j(this._asyncValidators)}_checkParentType(){}}let ot=(()=>{class t extends st{constructor(t,e,n){super(),this._parent=t,this._validators=e,this._asyncValidators=n}_checkParentType(){this._parent instanceof t||this._parent instanceof nt||rt.modelGroupParentException()}}return t})();const at=(()=>Promise.resolve(null))();let lt=(()=>{class t extends f{constructor(t,e,n,i){super(),this.control=new X,this._registered=!1,this.update=new r.m,this._parent=t,this._rawValidators=e||[],this._rawAsyncValidators=n||[],this.valueAccessor=z(this,i)}ngOnChanges(t){this._checkForErrors(),this._registered||this._setUpControl(),"isDisabled"in t&&this._updateDisabled(t),I(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._parent?T(this.name,this._parent):[this.name]}get formDirective(){return this._parent?this._parent.formDirective:null}get validator(){return U(this._rawValidators)}get asyncValidator(){return j(this._rawAsyncValidators)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!(!this.options||!this.options.standalone)}_setUpStandalone(){N(this.control,this),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){!(this._parent instanceof ot)&&this._parent instanceof st?rt.formGroupNameException():this._parent instanceof ot||this._parent instanceof nt||rt.modelParentException()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),this._isStandalone()||this.name||rt.missingNameException()}_updateValue(t){at.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1})})}_updateDisabled(t){const e=t.isDisabled.currentValue,n=""===e||e&&"false"!==e;at.then(()=>{n&&!this.control.disabled?this.control.disable():!n&&this.control.disabled&&this.control.enable()})}}return class extends f{constructor(t,e,n,i){super(),this.control=new X,this._registered=!1,this.update=new r.m,this._parent=t,this._rawValidators=e||[],this._rawAsyncValidators=n||[],this.valueAccessor=z(this,i)}ngOnChanges(t){this._checkForErrors(),this._registered||this._setUpControl(),"isDisabled"in t&&this._updateDisabled(t),I(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._parent?T(this.name,this._parent):[this.name]}get formDirective(){return this._parent?this._parent.formDirective:null}get validator(){return U(this._rawValidators)}get asyncValidator(){return j(this._rawAsyncValidators)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!(!this.options||!this.options.standalone)}_setUpStandalone(){N(this.control,this),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){!(this._parent instanceof ot)&&this._parent instanceof st?rt.formGroupNameException():this._parent instanceof ot||this._parent instanceof nt||rt.modelParentException()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),this._isStandalone()||this.name||rt.missingNameException()}_updateValue(t){at.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1})})}_updateDisabled(t){const e=t.isDisabled.currentValue,n=""===e||e&&"false"!==e;at.then(()=>{n&&!this.control.disabled?this.control.disable():!n&&this.control.disabled&&this.control.enable()})}}})(),ht=(()=>(class{}))(),ut=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:it,useValue:e.warnOnDeprecatedNgFormSelector}]}}}return t})()}}]);