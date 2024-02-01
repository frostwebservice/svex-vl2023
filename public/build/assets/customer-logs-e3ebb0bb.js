import{P as o,j as a,C as u,d as e,B as p,e as T,l as w,k as y,r as v,T as $,q as M,aO as R,bb as b,u as k,aZ as D,au as L,R as q,p as z,bF as W,D as j}from"./app-d2e90dc3.js";import{P as S,a as d}from"./property-list-item-f3437f5e.js";import{C as m}from"./CardHeader-8256efbe.js";import{C as A}from"./CardActions-5435657d.js";import{c as U}from"./index-1206632e.js";import{T as g,b as h,c as r,a as C}from"./TableRow-5d8cde28.js";import{T as P}from"./TableHead-75b16b60.js";import{M as E}from"./more-menu-7734cc08.js";import{S as I}from"./severity-pill-772ace92.js";import{T as B}from"./TablePagination-a3981b5c.js";const F=n=>{const{address1:l,address2:s,country:t,email:i,isVerified:c,phone:H,state:f,...O}=n;return a(u,{...O,children:[e(m,{title:"Basic Details"}),a(S,{children:[e(d,{divider:!0,label:"Email",value:i}),e(d,{divider:!0,label:"Phone",value:H}),e(d,{divider:!0,label:"Country",value:t}),e(d,{divider:!0,label:"State/Region",value:f}),e(d,{divider:!0,label:"Address 1",value:f}),e(d,{divider:!0,label:"Address 2",value:s})]}),e(A,{children:e(p,{color:"inherit",size:"small",children:"Reset Password"})})]})};F.propTypes={address1:o.string,address2:o.string,country:o.string,email:o.string.isRequired,isVerified:o.bool.isRequired,phone:o.string,state:o.string};const ae=n=>a(u,{...n,children:[e(m,{title:"Data Management"}),a(T,{sx:{pt:0},children:[e(p,{color:"error",variant:"outlined",children:"Delete Account"}),e(w,{sx:{mt:1},children:e(y,{color:"text.secondary",variant:"body2",children:"Remove this customer’s chart if he requested that, if not please be aware that what has been deleted can never brought back"})})]})]}),x=["Resend last invoice","Send password reset","Send verification"],G=()=>{const n=k(),[l,s]=v.useState([]),t=v.useCallback(async()=>{try{const i=await U.getEmails();n()&&s(i)}catch(i){console.error(i)}},[n]);return v.useEffect(()=>{t()},[]),l},ie=n=>{const[l,s]=v.useState(x[0]),t=G();return a(u,{...n,children:[e(m,{title:"Emails"}),a(T,{sx:{pt:0},children:[e($,{name:"option",onChange:i=>s(i.target.value),select:!0,SelectProps:{native:!0},sx:{width:320,maxWidth:"100%"},variant:"outlined",value:l,children:x.map(i=>e("option",{value:i,children:i},i))}),e(w,{sx:{mt:2},children:e(p,{endIcon:e(M,{children:e(R,{})}),variant:"contained",children:"Send email"})})]}),a(g,{children:[e(P,{children:a(h,{children:[e(r,{children:"Mail Type"}),e(r,{children:"Date"})]})}),e(C,{children:t.map(i=>{const c=b(i.createdAt,"dd/MM/yyyy | HH:mm");return a(h,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e(r,{children:e(y,{variant:"subtitle2",children:i.description})}),e(r,{children:c})]},i.id)})})]})]})},V=n=>{const{invoices:l=[],...s}=n;return a(u,{...s,children:[e(m,{action:e(E,{}),title:"Recent Invoices"}),e(D,{children:a(g,{sx:{minWidth:600},children:[e(P,{children:a(h,{children:[e(r,{children:"ID"}),e(r,{children:"Date"}),e(r,{children:"Total"}),e(r,{children:"Status"}),e(r,{align:"right",children:"Actions"})]})}),e(C,{children:l.map(t=>{const i=b(t.issueDate,"MMM dd,yyyy"),c=t.status==="paid"?"success":"error";return a(h,{children:[a(r,{children:["#",t.id]}),e(r,{children:i}),e(r,{children:t.amount}),e(r,{children:e(I,{color:c,children:t.status})}),e(r,{align:"right",children:e(L,{component:q,href:z.dashboard.invoices.details,children:e(M,{children:e(R,{})})})})]},t.id)})})]})}),e(B,{component:"div",count:l.length,onPageChange:()=>{},onRowsPerPageChange:()=>{},page:0,rowsPerPage:5,rowsPerPageOptions:[5,10,25]})]})};V.propTypes={invoices:o.array};const se=n=>{const s=W(t=>t.breakpoints.up("md"))?"horizontal":"vertical";return a(u,{...n,children:[e(m,{title:"Payment"}),a(S,{children:[e(d,{align:s,divider:!0,label:"Credit Card",value:"**** **** **** **** 4142"}),e(d,{align:s,divider:!0,label:"Paid",value:"2 ($50.00)"}),e(d,{align:s,divider:!0,label:"Draft",value:"1 ($5.00)"}),e(d,{align:s,divider:!0,label:"State/Region",value:"2 ($50.00)"}),e(d,{align:s,divider:!0,label:"Unpaid/Due",value:"1 ($12.00)"}),e(d,{align:s,divider:!0,label:"Refunded",value:"0 ($0.00)"}),e(d,{align:s,label:"Gross Income",value:"$1,200.00"})]}),e(j,{}),a(A,{sx:{flexWrap:"wrap"},children:[e(p,{size:"small",variant:"outlined",children:"Create Invoice"}),e(p,{size:"small",children:"Resend Due Invoices"})]})]})},Q=n=>{const{logs:l=[],...s}=n;return a(u,{...s,children:[e(m,{action:e(E,{}),title:"Recent Logs"}),e(D,{children:a(g,{sx:{minWidth:700},children:[e(P,{children:a(h,{children:[e(r,{children:"Method"}),e(r,{children:"Status"}),e(r,{children:"Path"}),e(r,{children:"Event"}),e(r,{children:"Ip"}),e(r,{children:"Date"})]})}),e(C,{children:l.map(t=>{const i=t.status>=200&&t.status<300?"success":"error",c=b(t.createdAt,"yyyy/MM/dd HH:mm:ss");return a(h,{children:[e(r,{width:"100",children:e(y,{color:"text.secondary",variant:"caption",children:t.method})}),e(r,{width:"64",children:e(I,{color:i,children:t.status})}),e(r,{children:t.route}),e(r,{children:t.description}),e(r,{children:t.ip}),e(r,{children:c})]},t.id)})})]})}),e(B,{component:"div",count:l.length,onPageChange:()=>{},onRowsPerPageChange:()=>{},page:0,rowsPerPage:10,rowsPerPageOptions:[5,10,25]})]})};Q.propTypes={logs:o.array};export{F as C,se as a,ie as b,ae as c,V as d,Q as e};
