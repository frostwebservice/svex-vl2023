import{P as U}from"./Plus-b86fbfa1.js";import{E as c,d as e,C as p,j as t,f as l,O as x,J as b,k as n,l as s,aK as f,W as L,ay as o,aM as D,aN as P,aO as W,aF as E,c as j,F as z,S as F,ax as H,B as M}from"./app-51ffe495.js";import{A as N}from"./AlertCircle-cdaf45f3.js";import{A as Y}from"./AlertTriangle-a3521886.js";import{C as J}from"./Clock-de3787cf.js";import{C as O}from"./chart-57cb1d5f.js";import{C}from"./CardHeader-dbda5e40.js";import{T as K}from"./Truck02-f39b34f1.js";import{S as $}from"./severity-pill-15645b3a.js";import{T as Q,b as R,c as d,a as X}from"./TableRow-49926fa7.js";import{T as Z}from"./TableHead-d5eeae27.js";import{L as _}from"./LinearProgress-ad5c8f88.js";const S=i=>{const{amount:r}=i;return e(p,{children:t(l,{spacing:1,sx:{p:3},children:[t(l,{alignItems:"center",direction:"row",spacing:2,children:[e(x,{variant:"rounded",sx:{backgroundColor:"warning.alpha12",color:"warning.main"},children:e(b,{children:e(N,{})})}),e(n,{variant:"h5",children:r})]}),e(n,{color:"text.secondary",variant:"body2",children:"Vehicles deviated from route"})]})})};S.propTypes={amount:c.number.isRequired};const T=i=>{const{amount:r}=i;return e(p,{children:t(l,{spacing:1,sx:{p:3},children:[t(l,{alignItems:"center",direction:"row",spacing:2,children:[e(x,{variant:"rounded",sx:{backgroundColor:"error.alpha12",color:"error.main"},children:e(b,{children:e(Y,{})})}),e(n,{variant:"h5",children:r})]}),e(n,{color:"text.secondary",variant:"body2",children:"Vehicles with errors"})]})})};T.propTypes={amount:c.number.isRequired};const V=i=>{const{amount:r}=i;return e(p,{children:t(l,{spacing:1,sx:{p:3},children:[t(l,{alignItems:"center",direction:"row",spacing:2,children:[e(x,{variant:"rounded",sx:{backgroundColor:"primary.alpha12",color:"primary.main"},children:e(b,{children:e(J,{})})}),e(n,{variant:"h5",children:r})]}),e(n,{color:"text.secondary",variant:"body2",children:"Late vehicles"})]})})};V.propTypes={amount:c.number.isRequired};const k=i=>{const{amount:r}=i;return e(p,{children:t(l,{spacing:1,sx:{p:3},children:[t(l,{alignItems:"center",direction:"row",spacing:2,children:[e(x,{sx:{backgroundColor:"transparent"},children:e(s,{sx:{animation:"pulse ease 750ms infinite",borderRadius:"50%",p:.5,"@keyframes pulse":{"0%":{boxShadow:"none"},"100%":{boxShadow:a=>`0px 0px 0px 6px ${f(a.palette.error.main,.1)}`}}},children:e(s,{sx:{backgroundColor:"error.main",borderRadius:"50%",height:18,width:18}})})}),e(n,{variant:"h5",children:r})]}),e(n,{color:"text.secondary",variant:"body2",children:"On route vehicles"})]})})};k.propTypes={amount:c.number.isRequired};const ee=[{id:"excellent",title:"Very good",description:"Excellent"},{id:"good",title:"Good",description:"Good condition"},{id:"bad",title:"Bad",description:"Needs attention"}],re=(i,r)=>({chart:{background:"transparent"},colors:[r],labels:["Health"],plotOptions:{radialBar:{dataLabels:{name:{show:!0,color:i.palette.text.secondary,fontSize:"12px",fontWeight:400,offsetY:20},value:{color:i.palette.text.primary,fontSize:"18px",fontWeight:600,offsetY:-20}},hollow:{size:"50%"},track:{background:f(r,.12)}}},states:{active:{filter:{type:"none"}},hover:{filter:{type:"none"}}},theme:{mode:i.palette.mode}}),A=i=>{const{bad:r,excellent:a,good:y}=i,u=L(),m=a+y+r,h={excellent:u.palette.primary.main,good:u.palette.warning.main,bad:u.palette.error.main};return t(p,{children:[e(C,{title:"Vehicles Condition"}),e(s,{sx:{p:1},children:e(o,{container:!0,spacing:3,children:ee.map(g=>{const v=h[g.id],q=re(u,v),w=i[g.id]||0,B=[Math.round(w/m*100)];return e(o,{xs:12,md:4,children:t(s,{sx:{alignItems:"center",backgroundColor:f(v,.04),borderRadius:3,display:"flex",flexDirection:"column",p:2},children:[e(n,{sx:{color:v},variant:"h6",children:g.title}),e(O,{height:200,options:q,series:B,type:"radialBar"}),e(n,{variant:"h6",children:w}),e(n,{color:"text.secondary",variant:"body2",children:g.description})]})},g.title)})})})]})};A.propTypes={bad:c.number.isRequired,excellent:c.number.isRequired,good:c.number.isRequired};const G=i=>{const{vehicles:r}=i;return t(p,{children:[e(C,{title:"On Route Vehicles",subheader:"Condition and temperature"}),e(D,{children:e(s,{sx:{minWidth:1200},children:t(Q,{children:[e(Z,{children:t(R,{children:[e(d,{children:"Location"}),e(d,{children:"Ending Route"}),e(d,{children:"Starting Route"}),e(d,{children:"Warnings"}),e(d,{children:"Refrigerator Temperature"})]})}),e(X,{children:r.map(a=>t(R,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e(d,{children:t(s,{sx:{alignItems:"center",display:"flex"},children:[e(x,{sx:{mr:2},children:e(b,{children:e(K,{})})}),e(n,{variant:"subtitle2",children:a.id})]})}),e(d,{children:e(n,{variant:"body2",children:a.endingRoute})}),e(d,{children:e(n,{variant:"body2",children:a.startingRoute})}),e(d,{children:e($,{color:a.status,children:a.warning||"No warnings"})}),t(d,{children:[e(_,{value:a.temperature,variant:"determinate"}),t(s,{sx:{alignItems:"center",display:"flex",mt:2},children:[e(n,{color:"inherit",variant:"inherit",children:a.temperatureLabel}),e(s,{sx:{flexGrow:1}}),t(n,{color:"text.secondary",variant:"inherit",children:[a.temperature,"°C"]})]})]})]},a.id))})]})})})]})};G.propTypes={vehicles:c.array.isRequired};const te=i=>{const r=L();return{chart:{background:"transparent"},colors:[r.palette.primary.main,r.palette.warning.main,r.palette.info.main],labels:i,plotOptions:{radialBar:{track:{background:r.palette.mode==="dark"?r.palette.neutral[800]:r.palette.neutral[100]},dataLabels:{name:{color:r.palette.text.primary},value:{color:r.palette.text.primary}}}},states:{active:{filter:{type:"none"}},hover:{filter:{type:"none"}}},theme:{mode:r.palette.mode}}},I=i=>{const{chartSeries:r,labels:a}=i,y=te(a),u=r.reduce((m,h)=>m+=h,0);return t(p,{children:[e(C,{title:"Vehicles Overview"}),e(s,{sx:{p:3},children:t(o,{alignItems:"center",container:!0,spacing:3,children:[e(o,{xs:12,md:6,children:e(O,{height:300,options:y,series:r,type:"radialBar"})}),e(o,{xs:12,md:6,children:t(l,{spacing:3,children:[t("div",{children:[e(n,{color:"text.secondary",variant:"body2",children:"Total"}),e(n,{variant:"h5",children:u})]}),e(P,{disablePadding:!0,children:r.map((m,h)=>t(W,{disableGutters:!0,sx:{display:"flex"},children:[e(s,{sx:{backgroundColor:y.colors[h],borderRadius:"4px",height:16,mr:1,width:16}}),e(n,{color:"text.secondary",variant:"body2",children:a[h]}),e(s,{sx:{flexGrow:1}}),e(n,{variant:"subtitle2",children:m})]},h))})]})})]})})]})};I.propTypes={chartSeries:c.array.isRequired,labels:c.array.isRequired};const xe=()=>{const i=E();return j(),t(z,{children:[e(F,{title:"Dashboard: Logistics Dashboard"}),e(s,{component:"main",sx:{flexGrow:1,py:8},children:e(H,{maxWidth:i.stretch?!1:"xl",children:t(o,{container:!0,spacing:{xs:3,lg:4},children:[e(o,{xs:12,children:t(l,{direction:"row",justifyContent:"space-between",spacing:4,children:[e("div",{children:e(n,{variant:"h4",children:"Logistics"})}),e("div",{children:e(l,{direction:"row",spacing:4,children:e(M,{startIcon:e(b,{children:e(U,{})}),variant:"contained",children:"Add Vehicle"})})})]})}),e(o,{xs:12,md:3,children:e(k,{amount:38})}),e(o,{xs:12,md:3,children:e(T,{amount:2})}),e(o,{xs:12,md:3,children:e(S,{amount:1})}),e(o,{xs:12,md:3,children:e(V,{amount:2})}),e(o,{xs:12,lg:6,children:e(I,{chartSeries:[38,50,12],labels:["Available","Out of service","On route"]})}),e(o,{xs:12,lg:6,children:e(A,{bad:12,excellent:181,good:24})}),e(o,{xs:12,children:e(G,{vehicles:[{id:"VOL-653CD1",endingRoute:"Cleveland, Ohio, USA",startingRoute:"Cleveland, Ohio, USA",status:"success",temperature:8,temperatureLabel:"Very Good"},{id:"VOL-653CD2",endingRoute:"Cleveland, Ohio, USA",startingRoute:"Cleveland, Ohio, USA",status:"warning",temperature:8,temperatureLabel:"Very Good",warning:"Temperature not optimal"},{id:"VOL-653CD3",endingRoute:"Cleveland, Ohio, USA",startingRoute:"Cleveland, Ohio, USA",status:"error",temperature:8,temperatureLabel:"Very Good",warning:"ECU not responding"},{id:"VOL-653CD4",endingRoute:"Cleveland, Ohio, USA",startingRoute:"Cleveland, Ohio, USA",status:"success",temperature:8,temperatureLabel:"Very Good"}]})})]})})})]})};export{xe as default};
