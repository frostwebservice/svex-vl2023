import{c,a as n}from"./index.esm-d9506663.js";import{u as h}from"./formik.esm-cf666fb2.js";import{u as p,b,c as g,j as a,F as f,d as r,S as w,C as x,k as v,L as S,R as C,p as l,e as y,f as P,T as d,i as T,B as k}from"./app-51ffe495.js";import{u as B}from"./use-search-params-3696ab0e.js";import{SvexAuthCard as F}from"./register-3e9624b0.js";import{C as L}from"./CardHeader-dbda5e40.js";import"./jsx-runtime_commonjs-proxy-8db62e38.js";import"./createTheme-051259ec.js";const j={email:"demo@devias.io",password:"Password123!",submit:null},q=c({email:n().email("Must be a valid email").max(255).required("Email is required"),password:n().max(255).required("Password is required")}),z=()=>{const t=p(),u=B().get("returnTo"),{signIn:m}=b(),e=h({initialValues:j,validationSchema:q,onSubmit:async(o,s)=>{try{await m(o.email,o.password),t()&&(window.location.href=u||l.dashboard.index)}catch(i){console.error(i),t()&&(s.setStatus({success:!1}),s.setErrors({submit:i.message}),s.setSubmitting(!1))}}});return g(),a(f,{children:[r(w,{title:"Login"}),r(F,{children:a(x,{elevation:16,children:[r(L,{subheader:a(v,{color:"text.secondary",variant:"body2",children:["Don't have an account?  ",r(S,{component:C,href:l.auth.jwt.register,underline:"hover",variant:"subtitle2",children:"Register"})]}),sx:{pb:0},title:"Log in"}),r(y,{children:a("form",{noValidate:!0,onSubmit:e.handleSubmit,children:[a(P,{spacing:3,children:[r(d,{autoFocus:!0,error:!!(e.touched.email&&e.errors.email),fullWidth:!0,helperText:e.touched.email&&e.errors.email,label:"Email Address",name:"email",onBlur:e.handleBlur,onChange:e.handleChange,type:"email",value:e.values.email}),r(d,{error:!!(e.touched.password&&e.errors.password),fullWidth:!0,helperText:e.touched.password&&e.errors.password,label:"Password",name:"password",onBlur:e.handleBlur,onChange:e.handleChange,type:"password",value:e.values.password})]}),e.errors.submit&&r(T,{error:!0,sx:{mt:3},children:e.errors.submit}),r(k,{disabled:e.isSubmitting,fullWidth:!0,size:"large",sx:{mt:2},type:"submit",variant:"contained",children:"Log In"})]})})]})})]})};export{z as default};
