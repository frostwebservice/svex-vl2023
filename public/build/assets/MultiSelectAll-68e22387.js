import{M as B,r as O,d,F as W,B as G,j as q,av as D,m as H,T as K}from"./app-d2e90dc3.js";import{_ as P,a as z,i as U,b as M,c as X}from"./isEqual-d2ebe4c3.js";import{A as Y,c as J}from"./Autocomplete-34cef6c2.js";import{G as E}from"./Grid-963b0e38.js";var Q=P,V=function(){return Q.Date.now()},Z=V,w=/\s/;function ee(e){for(var a=e.length;a--&&w.test(e.charAt(a)););return a}var te=ee,ne=te,re=/^\s+/;function le(e){return e&&e.slice(0,ne(e)+1).replace(re,"")}var ae=le,ie=z,se=U,ce="[object Symbol]";function oe(e){return typeof e=="symbol"||se(e)&&ie(e)==ce}var ue=oe,fe=ae,$=M,de=ue,F=0/0,me=/^[-+]0x[0-9a-f]+$/i,be=/^0b[01]+$/i,he=/^0o[0-7]+$/i,ge=parseInt;function ve(e){if(typeof e=="number")return e;if(de(e))return F;if($(e)){var a=typeof e.valueOf=="function"?e.valueOf():e;e=$(a)?a+"":a}if(typeof e!="string")return e===0?e:+e;e=fe(e);var u=be.test(e);return u||he.test(e)?ge(e.slice(2),u?2:8):me.test(e)?F:+e}var pe=ve,xe=M,N=Z,L=pe,Te="Expected a function",Se=Math.max,ye=Math.min;function ke(e,a,u){var h,s,o,l,c,b,v=0,y=!1,g=!1,p=!0;if(typeof e!="function")throw new TypeError(Te);a=L(a)||0,xe(u)&&(y=!!u.leading,g="maxWait"in u,o=g?Se(L(u.maxWait)||0,a):o,p="trailing"in u?!!u.trailing:p);function T(r){var m=h,n=s;return h=s=void 0,v=r,l=e.apply(n,m),l}function _(r){return v=r,c=setTimeout(x,a),y?T(r):l}function k(r){var m=r-b,n=r-v,t=a-m;return g?ye(t,o-n):t}function C(r){var m=r-b,n=r-v;return b===void 0||m>=a||m<0||g&&n>=o}function x(){var r=N();if(C(r))return I(r);c=setTimeout(x,k(r))}function I(r){return c=void 0,p&&h?T(r):(h=s=void 0,l)}function j(){c!==void 0&&clearTimeout(c),v=0,h=b=s=c=void 0}function A(){return c===void 0?l:I(N())}function S(){var r=N(),m=C(r);if(h=arguments,s=this,b=r,m){if(c===void 0)return _(b);if(g)return clearTimeout(c),c=setTimeout(x,a),T(b)}return c===void 0&&(c=setTimeout(x,a)),l}return S.cancel=j,S.flush=A,S}var Ce=ke;const Ie=B(Ce);const Ae=({items:e,selectAllLabel:a,onChange:u,value:h})=>{const[s,o]=O.useState(h),[l,c]=O.useState(null),b=O.useRef(null);O.useEffect(()=>{u(s)},[s]);const v=n=>o(n),y=()=>o([]),g=n=>`${n.label}`,p=()=>{if((l==null?void 0:l.length)!==e.length){const t=l==null?void 0:l.filter(i=>!s.find(f=>f.label===i.label));return!((t==null?void 0:t.length)>0)}return e.length>0&&e.length===s.length},T=n=>{n.length>0?o(s.filter(t=>!n.find(i=>i.label===t.label))):o([])},_=n=>{let t=[];(l==null?void 0:l.length)>0&&l.length!==e.length&&(t=e.filter(i=>l.find(f=>f.label===i.label))),n?t.length>0?o([...s,...t]):o(e):T(t)},k=()=>{_(!p())},C=(n,t,i)=>{i==="clear"?y():(i==="selectOption"||i==="removeOption")&&(t.find(f=>f.value==="select-all")?(k(),e.filter(f=>f.value!=="select-all")):v(t))},x=()=>{console.log("ok"),document.getElementsByClassName("MuiAutocomplete-popupIndicator")[0].click()},I=(n,t)=>{if(t.value==="select-all")k();else if(n.target.checked){const i=[...s,t];o(i)}else{const i=s.filter(f=>f.value!==t.value);o(i)}},j=(n,t,{selected:i})=>{const f=t.value==="select-all"?{checked:p()}:{};return t.value==="OK"?d(E,{container:!0,children:d(E,{item:!0,xs:12,sx:{pl:1,pr:1},children:d("div",{className:"justify-content-end",children:d(G,{className:"text-center mx-8  multiselect-ok",variant:"contained",onClick:x,type:"submit",children:q("span",{className:"ml-2",children:[" ",t.value," "]})})})})},t.label):d(E,{container:!0,children:d(E,{item:!0,xs:12,sx:{pl:1,pr:1},children:d(D,{control:d(H,{checked:i,onChange:R=>I(R,t),...f,sx:{mr:1}},t.label),label:g(t)},t.label)})},t.label)},A=Ie(n=>{n&&!X(n,l)&&c(n)},1e3),S=n=>{A(n)},r=n=>d(K,{...n,label:"Category/Niche"}),m=J();return d(W,{children:d(Y,{ref:b,sx:{maxHeight:"120px",overflowY:"auto",p:2},multiple:!0,size:"small",options:e,value:s,disableCloseOnSelect:!0,getOptionLabel:g,isOptionEqualToValue:(n,t)=>n.value===t.value,filterOptions:(n,t)=>{const i=m(n,t);return S(i),[{label:a,value:"select-all"},...i]},onChange:C,renderOption:j,renderInput:r})})};export{Ae as M};
