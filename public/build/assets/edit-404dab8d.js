import{c as m,j as t,F as d,d as e,S as u,l as p,aM as h,f as s,L as g,R as f,p as x,q as C,A as w,k as a,E as v,aI as y,u as b,r as n}from"./app-d2e90dc3.js";import{c as I}from"./index-1206632e.js";import{C as k}from"./customer-edit-form-6ea3dba4.js";import{g as E}from"./get-initials-d1c6cec7.js";import"./apply-pagination-03aa54c3.js";import"./apply-sort-ec30f364.js";import"./deep-copy-ee95be26.js";import"./index-bf780c1b.js";import"./index.esm-0abc412e.js";import"./formik.esm-a22de33f.js";import"./CardHeader-8256efbe.js";const S=()=>{const r=b(),[o,c]=n.useState(null),l=n.useCallback(async()=>{try{const i=await I.getCustomer();r()&&c(i)}catch(i){console.error(i)}},[r]);return n.useEffect(()=>{l()},[]),o},D=()=>{const r=S();return m(),r?t(d,{children:[e(u,{title:"Dashboard: Customer Edit"}),e(p,{component:"main",sx:{flexGrow:1,py:8},children:e(h,{maxWidth:"lg",children:t(s,{spacing:4,children:[t(s,{spacing:4,children:[e("div",{children:t(g,{color:"text.primary",component:f,href:x.dashboard.customers.index,sx:{alignItems:"center",display:"inline-flex"},underline:"hover",children:[e(C,{sx:{mr:1},children:e(w,{})}),e(a,{variant:"subtitle2",children:"Customers"})]})}),e(s,{alignItems:"flex-start",direction:{xs:"column",md:"row"},justifyContent:"space-between",spacing:4,children:t(s,{alignItems:"center",direction:"row",spacing:2,children:[e(v,{src:r.avatar,sx:{height:64,width:64},children:E(r.name)}),t(s,{spacing:1,children:[e(a,{variant:"h4",children:r.email}),t(s,{alignItems:"center",direction:"row",spacing:1,children:[e(a,{variant:"subtitle2",children:"user_id:"}),e(y,{label:r.id,size:"small"})]})]})]})})]}),e(k,{customer:r})]})})})]}):null};export{D as default};
