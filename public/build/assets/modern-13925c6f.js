import{c as d,a as l}from"./index.esm-35eaacc5.js";import{u}from"./formik.esm-9eb0d759.js";import{j as a,F as h,d as r,S as m,l as n,L as i,R as c,p,J as x,K as v,k as s,f as t,T as o,B as b}from"./app-0b1a94df.js";const g={email:"",password:"",submit:null},f=d({email:l().email("Must be a valid email").max(255).required("Email is required"),password:l().max(255).required("Password is required")}),B=()=>{const e=u({initialValues:g,validationSchema:f,onSubmit:()=>{}});return a(h,{children:[r(m,{title:"Login"}),a("div",{children:[r(n,{sx:{mb:4},children:a(i,{color:"text.primary",component:c,href:p.dashboard.index,sx:{alignItems:"center",display:"inline-flex"},underline:"hover",children:[r(x,{sx:{mr:1},children:r(v,{})}),r(s,{variant:"subtitle2",children:"Dashboard"})]})}),a(t,{sx:{mb:4},spacing:1,children:[r(s,{variant:"h5",children:"Log in"}),a(s,{color:"text.secondary",variant:"body2",children:["Don't have an account?  ",r(i,{href:"#",underline:"hover",variant:"subtitle2",children:"Register"})]})]}),a("form",{noValidate:!0,onSubmit:e.handleSubmit,children:[a(t,{spacing:3,children:[r(o,{autoFocus:!0,error:!!(e.touched.email&&e.errors.email),fullWidth:!0,helperText:e.touched.email&&e.errors.email,label:"Email Address",name:"email",onBlur:e.handleBlur,onChange:e.handleChange,type:"email",value:e.values.email}),r(o,{error:!!(e.touched.password&&e.errors.password),fullWidth:!0,helperText:e.touched.password&&e.errors.password,label:"Password",name:"password",onBlur:e.handleBlur,onChange:e.handleChange,type:"password",value:e.values.password})]}),r(b,{fullWidth:!0,sx:{mt:3},size:"large",type:"submit",variant:"contained",children:"Continue"}),r(n,{sx:{mt:3},children:r(i,{href:"#",underline:"hover",variant:"subtitle2",children:"Forgot password?"})})]})]})]})};export{B as default};
