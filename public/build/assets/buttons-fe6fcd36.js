import{d as e,l,j as r,f as s,B as n,J as d,az as w,r as i,aA as B,aB as k,aC as I,P as v,aD as D,aE as S,c as P,F as y,S as A,ax as z}from"./app-0b1a94df.js";import{P as R}from"./previewer-f7055d6f.js";import{T as j}from"./Trash02-fab6519c.js";import{B as E}from"./ButtonGroup-a9e99ad6.js";import{C as G}from"./ClickAwayListener-d38cb663.js";import"./CardHeader-b4d725f1.js";const M=()=>e(l,{sx:{p:3},children:r(s,{spacing:3,children:[r(s,{alignItems:"center",direction:"row",spacing:3,children:[e(n,{variant:"contained",children:"Default"}),e(n,{disabled:!0,variant:"contained",children:"Disabled"})]}),r(s,{alignItems:"center",direction:"row",spacing:3,children:[e(n,{variant:"outlined",children:"Default"}),e(n,{color:"primary",disabled:!0,variant:"outlined",children:"Disabled"})]}),r(s,{alignItems:"center",direction:"row",spacing:3,children:[e(n,{children:"Default"}),e(n,{disabled:!0,children:"Disabled"})]})]})}),T=()=>e(l,{sx:{p:3},children:r(s,{alignItems:"center",direction:"row",spacing:3,children:[e(n,{color:"error",size:"small",startIcon:e(d,{children:e(j,{})}),variant:"contained",children:"Delete Account"}),e(n,{endIcon:e(d,{children:e(w,{})}),size:"small",variant:"contained",children:"Next Page"})]})}),u=["Create a merge commit","Squash and merge","Rebase and merge"],F=()=>{const t=i.useRef(null),[p,c]=i.useState(!1),[h,g]=i.useState(1),f=i.useCallback(a=>{g(a),c(!1)},[]),C=i.useCallback(()=>{c(a=>!a)},[]),b=i.useCallback(a=>{t.current&&t.current.contains(a.target)||c(!1)},[]);return r(l,{sx:{p:3},children:[r(E,{ref:t,variant:"contained",children:[e(n,{children:u[h]}),e(n,{onClick:C,size:"small",sx:{backgroundColor:"primary.dark"},children:e(d,{children:e(B,{})})})]}),e(k,{anchorEl:t.current,open:p,transition:!0,children:({TransitionProps:a,placement:x})=>e(I,{...a,style:{transformOrigin:x==="bottom"?"center top":"center bottom"},children:e(v,{children:e(G,{onClickAway:b,children:e(D,{children:u.map((m,o)=>e(S,{disabled:o===2,onClick:()=>f(o),selected:o===h,children:m},m))})})})})})]})},L=[{element:e(M,{}),title:"Simple buttons"},{element:e(T,{}),title:"Buttons with text and icon"},{element:e(F,{}),title:"Button groups"}],H=()=>(P(),r(y,{children:[e(A,{title:"Components: Buttons"}),e(l,{component:"main",sx:{flexGrow:1,py:8},children:e(z,{maxWidth:"lg",children:e(s,{spacing:8,children:L.map(t=>e(R,{title:t.title,children:t.element},t.title))})})})]}));export{H as default};