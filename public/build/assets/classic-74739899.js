import{c as i,a as t}from"./index.esm-0abc412e.js";import{u as d}from"./formik.esm-a22de33f.js";import{j as o,F as n,d as e,S as s,l,L as c,R as m,p as u,q as h,A as p,k as x,C as f,e as b,g as C,h as F,i as g,B as v}from"./app-d2e90dc3.js";import{X as y}from"./mui-one-time-password-input.es-097158c4.js";import{C as S}from"./CardHeader-8256efbe.js";const k={code:""},V=i({code:t().min(6).max(6).required("Code is required")}),T=()=>{const r=d({initialValues:k,validationSchema:V,onSubmit:()=>{}});return o(n,{children:[e(s,{title:"Verify Code"}),o("div",{children:[e(l,{sx:{mb:4},children:o(c,{color:"text.primary",component:m,href:u.dashboard.index,sx:{alignItems:"center",display:"inline-flex"},underline:"hover",children:[e(h,{sx:{mr:1},children:e(p,{})}),e(x,{variant:"subtitle2",children:"Dashboard"})]})}),o(f,{elevation:16,children:[e(S,{sx:{pb:0},title:"Verify code"}),e(b,{children:o("form",{noValidate:!0,onSubmit:r.handleSubmit,children:[o(C,{error:!!(r.touched.code&&r.errors.code),children:[e(F,{sx:{display:"block",mb:2},children:"Code"}),e(y,{length:6,onBlur:()=>r.handleBlur("code"),onChange:a=>r.setFieldValue("code",a),onFocus:()=>r.setFieldTouched("code"),sx:{"& .MuiFilledInput-input":{p:"14px"}},value:r.values.code}),!!(r.touched.code&&r.errors.code)&&e(g,{children:r.errors.code})]}),e(v,{fullWidth:!0,size:"large",sx:{mt:2},type:"submit",variant:"contained",children:"Verify"})]})})]})]})]})};export{T as default};
