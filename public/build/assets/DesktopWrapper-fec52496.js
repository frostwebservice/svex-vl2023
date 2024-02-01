import{ae as N,af as X,G as M,aF as Q,ar as V,K as u,ao as Y,r as t,a5 as g,_ as $,d as P,bP as q,j as _,ag as J,ac as Z,a6 as A,aQ as ee}from"./app-d2e90dc3.js";import{k as ne,l as oe,W as te}from"./PureDateInput-4b675efc.js";function re(n){return N("MuiPickersPopper",n)}X("MuiPickersPopper",["root","paper"]);const se=["onClick","onTouchStart"],ce=n=>{const{classes:o}=n;return J({root:["root"],paper:["paper"]},re,o)},ae=M(Q,{name:"MuiPickersPopper",slot:"Root",overridesResolver:(n,o)=>o.root})(({theme:n})=>({zIndex:n.zIndex.modal})),ie=M(V,{name:"MuiPickersPopper",slot:"Paper",overridesResolver:(n,o)=>o.paper})(({ownerState:n})=>u({transformOrigin:"top center",outline:0},n.placement==="top"&&{transformOrigin:"bottom center"}));function ue(n,o){return o.documentElement.clientWidth<n.clientX||o.documentElement.clientHeight<n.clientY}function le(n,o){const c=t.useRef(!1),l=t.useRef(!1),r=t.useRef(null),d=t.useRef(!1);t.useEffect(()=>{if(!n)return;function e(){d.current=!0}return document.addEventListener("mousedown",e,!0),document.addEventListener("touchstart",e,!0),()=>{document.removeEventListener("mousedown",e,!0),document.removeEventListener("touchstart",e,!0),d.current=!1}},[n]);const s=Z(e=>{if(!d.current)return;const p=l.current;l.current=!1;const h=A(r.current);if(!r.current||"clientX"in e&&ue(e,h))return;if(c.current){c.current=!1;return}let f;e.composedPath?f=e.composedPath().indexOf(r.current)>-1:f=!h.documentElement.contains(e.target)||r.current.contains(e.target),!f&&!p&&o(e)}),a=()=>{l.current=!0};return t.useEffect(()=>{if(n){const e=A(r.current),p=()=>{c.current=!0};return e.addEventListener("touchstart",s),e.addEventListener("touchmove",p),()=>{e.removeEventListener("touchstart",s),e.removeEventListener("touchmove",p)}}},[n,s]),t.useEffect(()=>{if(n){const e=A(r.current);return e.addEventListener("click",s),()=>{e.removeEventListener("click",s),l.current=!1}}},[n,s]),[r,a,a]}function pe(n){var o;const c=Y({props:n,name:"MuiPickersPopper"}),{anchorEl:l,children:r,containerRef:d=null,onBlur:s,onClose:a,onClear:e,onAccept:p,onCancel:h,onSetToday:f,open:i,PopperProps:L,role:E,TransitionComponent:R=ee,TrapFocusProps:w,PaperProps:S={},components:y,componentsProps:v}=c;t.useEffect(()=>{function m(T){i&&(T.key==="Escape"||T.key==="Esc")&&a()}return document.addEventListener("keydown",m),()=>{document.removeEventListener("keydown",m)}},[a,i]);const k=t.useRef(null);t.useEffect(()=>{E!=="tooltip"&&(i?k.current=ne(document):k.current&&k.current instanceof HTMLElement&&setTimeout(()=>{k.current instanceof HTMLElement&&k.current.focus()}))},[i,E]);const[B,I,K]=le(i,s??a),W=t.useRef(null),j=g(W,d),O=g(j,B),b=c,x=ce(b),{onClick:D,onTouchStart:F}=S,U=$(S,se),H=m=>{m.key==="Escape"&&(m.stopPropagation(),a())},z=(o=y==null?void 0:y.ActionBar)!=null?o:oe,G=(y==null?void 0:y.PaperContent)||t.Fragment;return P(ae,u({transition:!0,role:E,open:i,anchorEl:l,onKeyDown:H,className:x.root},L,{children:({TransitionProps:m,placement:T})=>P(q,u({open:i,disableAutoFocus:!0,disableRestoreFocus:!0,disableEnforceFocus:E==="tooltip",isEnabled:()=>!0},w,{children:P(R,u({},m,{children:P(ie,u({tabIndex:-1,elevation:8,ref:O,onClick:C=>{I(C),D&&D(C)},onTouchStart:C=>{K(C),F&&F(C)},ownerState:u({},b,{placement:T}),className:x.paper},U,{children:_(G,u({},v==null?void 0:v.paperContent,{children:[r,P(z,u({onAccept:p,onClear:e,onCancel:h,onSetToday:f,actions:[]},v==null?void 0:v.actionBar))]}))}))}))}))}))}function me(n){const{children:o,DateInputProps:c,KeyboardDateInputComponent:l,onClear:r,onDismiss:d,onCancel:s,onAccept:a,onSetToday:e,open:p,PopperProps:h,PaperProps:f,TransitionComponent:i,components:L,componentsProps:E}=n,R=t.useRef(null),w=g(c.inputRef,R);return _(te.Provider,{value:"desktop",children:[P(l,u({},c,{inputRef:w})),P(pe,{role:"dialog",open:p,anchorEl:R.current,TransitionComponent:i,PopperProps:h,PaperProps:f,onClose:d,onCancel:s,onClear:r,onAccept:a,onSetToday:e,components:L,componentsProps:E,children:o})]})}export{me as D};
