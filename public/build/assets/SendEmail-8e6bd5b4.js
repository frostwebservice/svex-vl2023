import{r as l,j as t,F as d,d as e,S as p,k as a,C as h,e as u,B as f,M as g}from"./app-0b1a94df.js";/* empty css             */import{u as x}from"./use-search-params-95bae2a5.js";import"./formik.esm-9eb0d759.js";function E(y){x().get("returnTo");const[o,s]=l.useState("Resend verification link"),[c,i]=l.useState(!1),n=JSON.parse(localStorage.getItem("Email")),m={email:n};return t(d,{children:[e(p,{title:"Email Verification"}),t("div",{className:"sendEmail-page",children:[e(a,{color:"primary",variant:"h4",sx:{pb:1,fontWeight:"bold",textAlign:"center"},children:"LOGO"}),e(h,{elevation:0,sx:{p:3,pb:0,borderRadius:5},className:"transparent",children:e(u,{children:t("form",{children:[e(a,{className:"title bigsize mb-3 text-center",children:"Confirm your email address"}),e(a,{color:"text.secondary",className:"title-inter smallsize",sx:{pt:2,textAlign:"center"},children:"please verify your email address by clicking the link sent to"}),e(a,{sx:{pb:4,textAlign:"center"},className:"title smallsize",children:n}),e("div",{className:"d-flex justify-content-center resend-button",children:t(f,{fullWidth:!0,size:"large",sx:{mt:2},type:"button",color:"primary",variant:"contained",className:"title-inter w-75 smallsize mainButton ",onClick:async v=>{i(!0),s("");try{axios.post("/api/resend-email",m).then(r=>{console.log(r)}),console.log("Verification email sent")}catch(r){console.error("Error sending verification email",r)}i(!1),s("Resend Verification link")},children:[t("span",{className:"ml-2",children:[" ",o," "]}),c?e(g,{color:"inherit",size:"1.4rem"}):e("span",{})]})})]})})})]})]})}export{E as default};
