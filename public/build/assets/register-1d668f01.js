import{c as g,a as l,b as y}from"./index.esm-0abc412e.js";import{u as x}from"./formik.esm-a22de33f.js";import{u as v,a as w,b as C,c as S,j as a,F as k,d as r,S as T,C as B,k as n,L as d,R,p as u,e as A,f as F,T as c,l as m,m as q,i as h,B as L}from"./app-d2e90dc3.js";import{A as P}from"./auth-issuer-2b3939c6.js";import{C as j}from"./CardHeader-8256efbe.js";const E={email:"",password:"",policy:!0,submit:null},I=g({email:l().email("Must be a valid email").max(255).required("Email is required"),password:l().min(7).max(255).required("Password is required"),policy:y().oneOf([!0],"This field must be checked")}),z=()=>{const i=v(),p=w(),{issuer:f,signUp:b}=C(),e=x({initialValues:E,validationSchema:I,onSubmit:async(t,s)=>{try{await b(t.email,t.password),i()&&p.push(u.auth.amplify.confirmRegister)}catch(o){console.error(o),i()&&(s.setStatus({success:!1}),s.setErrors({submit:o.message}),s.setSubmitting(!1))}}});return S(),a(k,{children:[r(T,{title:"Register"}),a("div",{children:[a(B,{elevation:16,children:[r(j,{subheader:a(n,{color:"text.secondary",variant:"body2",children:["Already have an account?  ",r(d,{component:R,href:u.auth.amplify.login,underline:"hover",variant:"subtitle2",children:"Log in"})]}),sx:{pb:0},title:"Register"}),r(A,{children:a("form",{noValidate:!0,onSubmit:e.handleSubmit,children:[a(F,{spacing:3,children:[r(c,{error:!!(e.touched.email&&e.errors.email),fullWidth:!0,helperText:e.touched.email&&e.errors.email,label:"Email Address",name:"email",onBlur:e.handleBlur,onChange:e.handleChange,type:"email",value:e.values.email}),r(c,{error:!!(e.touched.password&&e.errors.password),fullWidth:!0,helperText:e.touched.password&&e.errors.password,label:"Password",name:"password",onBlur:e.handleBlur,onChange:e.handleChange,type:"password",value:e.values.password})]}),a(m,{sx:{alignItems:"center",display:"flex",ml:-1,mt:1},children:[r(q,{checked:e.values.policy,name:"policy",onChange:e.handleChange}),a(n,{color:"text.secondary",variant:"body2",children:["I have read the"," ",r(d,{component:"a",href:"#",children:"Terms and Conditions"})]})]}),!!(e.touched.policy&&e.errors.policy)&&r(h,{error:!0,children:e.errors.policy}),e.errors.submit&&r(h,{error:!0,sx:{mt:3},children:e.errors.submit}),r(L,{disabled:e.isSubmitting,fullWidth:!0,size:"large",sx:{mt:2},type:"submit",variant:"contained",children:"Register"})]})})]}),r(m,{sx:{mt:3},children:r(P,{issuer:f})})]})]})};export{z as default};
