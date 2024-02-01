import{c as h,a as n}from"./index.esm-d9506663.js";import{u as f}from"./formik.esm-cf666fb2.js";import{X as b}from"./mui-one-time-password-input.es-f12c9b2d.js";import{u as p,a as g,b as x,c as C,j as a,F,d as r,S,C as v,e as y,f as B,T as u,g as V,h as P,i as d,B as T,p as k}from"./app-51ffe495.js";import{u as q}from"./use-search-params-3696ab0e.js";import{C as E}from"./CardHeader-dbda5e40.js";const M=i=>({code:"",email:i||"",submit:null}),R=h({code:n().min(6).max(6).required("Code is required"),email:n().email("Must be a valid email").max(255).required("Email is required")}),$=()=>{const i=p(),m=g(),s=q().get("username")||void 0,{confirmSignUp:c}=x(),e=f({enableReinitialize:!0,initialValues:M(s),validationSchema:R,onSubmit:async(t,o)=>{try{await c(t.email,t.code),i()&&m.push(k.auth.amplify.login)}catch(l){console.error(l),i()&&(o.setStatus({success:!1}),o.setErrors({submit:l.message}),o.setSubmitting(!1))}}});return C(),a(F,{children:[r(S,{title:"Confirm Register"}),r("div",{children:a(v,{elevation:16,children:[r(E,{sx:{pb:0},title:"Confirm Register"}),r(y,{children:a("form",{noValidate:!0,onSubmit:e.handleSubmit,children:[a(B,{spacing:3,children:[s?r(u,{disabled:!0,fullWidth:!0,label:"Email",value:s}):r(u,{autoFocus:!0,error:!!(e.touched.email&&e.errors.email),fullWidth:!0,helperText:e.touched.email&&e.errors.email,label:"Email Address",name:"email",onBlur:e.handleBlur,onChange:e.handleChange,type:"email",value:e.values.email}),a(V,{error:!!(e.touched.code&&e.errors.code),children:[r(P,{sx:{display:"block",mb:2},children:"Verification code"}),r(b,{length:6,onBlur:()=>e.handleBlur("code"),onChange:t=>e.setFieldValue("code",t),onFocus:()=>e.setFieldTouched("code"),sx:{"& .MuiFilledInput-input":{p:"14px"}},value:e.values.code}),!!(e.touched.code&&e.errors.code)&&r(d,{children:e.errors.code})]})]}),e.errors.submit&&r(d,{error:!0,sx:{mt:3},children:e.errors.submit}),r(T,{disabled:e.isSubmitting,fullWidth:!0,size:"large",sx:{mt:3},type:"submit",variant:"contained",children:"Confirm"})]})})]})})]})};export{$ as default};
