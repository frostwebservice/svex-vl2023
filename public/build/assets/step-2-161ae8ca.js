import{c as g,a as r}from"./index.esm-35eaacc5.js";import{u as v}from"./formik.esm-9eb0d759.js";import{c as N,r as o,j as n,F as C,d as a,S as x,C as T,f as t,L as w,R as B,p as s,e as S,k as W,T as l,B as i}from"./app-0b1a94df.js";import{u as q}from"./use-search-params-95bae2a5.js";import{S as L}from"./Svexlogo-6ed84c03.js";import{C as k}from"./CardHeader-b4d725f1.js";const R=()=>{N();const m=g({firstname:r().max(255).required("Name is required"),lastname:r().max(255).required("Name is required"),phonenumber:r().max(255).required("Name is required"),companywebsite:r().max(255).required("Name is required"),companylocation:r().max(255).required("Name is required"),companyname:r().max(255).required("Name is required")}),[c,u]=o.useState("Save changes and NEXT"),[d,h]=o.useState(!1),p=q().get("returnTo"),[f,F]=o.useState({firstname:"Your First Name",lastname:"Your Last Name",phonenumber:"Your Phone Number",companywebsite:"Your Company Website",companylocation:"Your Company Location",companyname:"Your Company Name",policy:!1,submit:null}),e=v({initialValues:f,validationSchema:m,onSubmit:b=>{h(!0),u("")}}),y=b=>{window.location.href=p||s.auth.jwt.login};return n(C,{children:[" ",a(x,{title:"Business Info"})," ",n(T,{elevation:16,sx:{background:"transparent",boxShadow:"none"},children:[a(k,{component:"div",subheader:a(t,{children:a(w,{component:B,href:s.index,variant:"subtitle2",children:a(L,{})})}),sx:{textAlign:"center"}}),a(S,{className:"container",children:n("form",{noValidate:"noValidate",onSubmit:e.handleSubmit,className:"row",children:[a(W,{color:"black",className:"title largesize mb-2",children:"General Business Information"}),n(t,{spacing:0,className:"col-md-6 col-12",children:[a("div",{className:"p-1 ",children:a(l,{label:"First name",className:"title-inter ",name:"firstname",variant:"filled",fullWidth:"fullWidth",style:{marginTop:11},error:!!(e.touched.firstname&&e.errors.firstname),helperText:e.touched.firstname&&e.errors.firstname,onBlur:e.handleBlur,onChange:e.handleChange,value:e.values.firstname})}),a("div",{className:"p-1 ",children:a(l,{variant:"filled",className:"title-inter ",style:{marginTop:11},error:!!(e.touched.phonenumber&&e.errors.phonenumber),helperText:e.touched.phonenumber&&e.errors.phonenumber,label:"Phone Number",name:"phonenumber",fullWidth:"fullWidth",onBlur:e.handleBlur,onChange:e.handleChange,value:e.values.phonenumber})}),a("div",{className:"p-1",children:a(l,{variant:"filled",className:"title-inter ",style:{marginTop:11},error:!!(e.touched.companywebsite&&e.errors.companywebsite),helperText:e.touched.companywebsite&&e.errors.companywebsite,label:"Company Website",name:"companywebsite",fullWidth:"fullWidth",onBlur:e.handleBlur,onChange:e.handleChange,value:e.values.companywebsite})})]}),n(t,{spacing:0,className:"col-md-6 col-12 ",children:[a("div",{className:"p-1  ",children:a(l,{label:"Last name",className:"title-inter",name:"lastname",variant:"filled",fullWidth:"fullWidth",style:{marginTop:11},error:!!(e.touched.lastname&&e.errors.lastname),helperText:e.touched.lastname&&e.errors.lastname,onBlur:e.handleBlur,onChange:e.handleChange,value:e.values.lastname})}),a("div",{className:"p-1 ",children:a(l,{variant:"filled",className:"title-inter ",style:{marginTop:11},error:!!(e.touched.companyname&&e.errors.companyname),helperText:e.touched.companyname&&e.errors.companyname,label:"Company Name",name:"companyname",fullWidth:"fullWidth",onBlur:e.handleBlur,onChange:e.handleChange,value:e.values.companyname})}),a("div",{className:"p-1",children:a(l,{variant:"filled",className:"title-inter ",style:{marginTop:11},error:!!(e.touched.companylocation&&e.errors.companylocation),helperText:e.touched.companylocation&&e.errors.companylocation,label:"Company Location",name:"companylocation",fullWidth:"fullWidth",onBlur:e.handleBlur,onChange:e.handleChange,value:e.values.companylocation})})]}),n("div",{className:"row d-flex justify-content-end pt-4 px-1 title-inter ",children:[a(i,{onClick:y,children:"Cancel"}),n(i,{sx:{pb:0,width:200,fontsize:20,fontWeight:"bold"},type:"submit",children:[a("span",{className:"ml-2",children:c}),d?a(CircularProgress,{color:"inherit",size:"2rem"}):a("span",{})]})]})]})})]})]})};export{R as default};
