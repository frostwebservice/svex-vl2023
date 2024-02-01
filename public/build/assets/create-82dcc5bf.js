import{a as W,r as u,ce as b,p as g,d as e,j as a,f as t,C as h,e as m,ay as n,k as i,T as o,l as y,i as D,bc as R,bd as j,aE as G,B as v,c as I,F as T,S as V,ax as E,c2 as L,c3 as $,L as x,R as C}from"./app-0b1a94df.js";import{c as N,a as s,e as q,f}from"./index.esm-35eaacc5.js";import{u as A}from"./formik.esm-9eb0d759.js";import{F as H}from"./file-dropzone-28548a2f.js";import{Q as J}from"./quill-editor-cecf191b.js";import"./tslib.es6-af7906ce.js";import"./Upload01-b6c3bdb4.js";import"./bytes-to-size-706bbf81.js";const K=[{label:"Healthcare",value:"healthcare"},{label:"Makeup",value:"makeup"},{label:"Dress",value:"dress"},{label:"Skincare",value:"skincare"},{label:"Jewelry",value:"jewelry"},{label:"Blouse",value:"blouse"}],M={barcode:"925487986526",category:"",description:"",images:[],name:"",newPrice:0,oldPrice:0,sku:"IYV-8745",submit:null},O=N({barcode:s().max(255),category:s().max(255),description:s().max(5e3),images:q(),name:s().max(255).required(),newPrice:f().min(0).required(),oldPrice:f().min(0),sku:s().max(255)}),Q=P=>{const k=W(),[B,p]=u.useState([]),r=A({initialValues:M,validationSchema:O,onSubmit:async(l,c)=>{try{b.success("Product created"),k.push(g.dashboard.products.index)}catch(d){console.error(d),b.error("Something went wrong!"),c.setStatus({success:!1}),c.setErrors({submit:d.message}),c.setSubmitting(!1)}}}),w=u.useCallback(l=>{p(c=>[...c,...l])},[]),S=u.useCallback(l=>{p(c=>c.filter(d=>d.path!==l.path))},[]),F=u.useCallback(()=>{p([])},[]);return e("form",{onSubmit:r.handleSubmit,...P,children:a(t,{spacing:4,children:[e(h,{children:e(m,{children:a(n,{container:!0,spacing:3,children:[e(n,{xs:12,md:4,children:e(i,{variant:"h6",children:"Basic details"})}),e(n,{xs:12,md:8,children:a(t,{spacing:3,children:[e(o,{error:!!(r.touched.name&&r.errors.name),fullWidth:!0,helperText:r.touched.name&&r.errors.name,label:"Product Name",name:"name",onBlur:r.handleBlur,onChange:r.handleChange,value:r.values.name}),a("div",{children:[e(i,{color:"text.secondary",sx:{mb:2},variant:"subtitle2",children:"Description"}),e(J,{onChange:l=>{r.setFieldValue("description",l)},placeholder:"Write something",sx:{height:400},value:r.values.description}),!!(r.touched.description&&r.errors.description)&&e(y,{sx:{mt:2},children:e(D,{error:!0,children:r.errors.description})})]})]})})]})})}),e(h,{children:e(m,{children:a(n,{container:!0,spacing:3,children:[e(n,{xs:12,md:4,children:a(t,{spacing:1,children:[e(i,{variant:"h6",children:"Images"}),e(i,{color:"text.secondary",variant:"body2",children:"Images will appear in the store front of your website."})]})}),e(n,{xs:12,md:8,children:e(H,{accept:{"image/*":[]},caption:"(SVG, JPG, PNG, or gif maximum 900x400)",files:B,onDrop:w,onRemove:S,onRemoveAll:F})})]})})}),e(h,{children:e(m,{children:a(n,{container:!0,spacing:3,children:[e(n,{xs:12,md:4,children:e(i,{variant:"h6",children:"Pricing"})}),e(n,{xs:12,md:8,children:a(t,{spacing:3,children:[e(o,{error:!!(r.touched.oldPrice&&r.errors.oldPrice),fullWidth:!0,label:"Old price",name:"oldPrice",onBlur:r.handleBlur,onChange:r.handleChange,type:"number",value:r.values.oldPrice}),e(o,{error:!!(r.touched.newPrice&&r.errors.newPrice),fullWidth:!0,label:"New Price",name:"newPrice",onBlur:r.handleBlur,onChange:r.handleChange,type:"number",value:r.values.newPrice}),e("div",{children:e(R,{control:e(j,{defaultChecked:!0}),label:"Keep selling when stock is empty"})})]})})]})})}),e(h,{children:e(m,{children:a(n,{container:!0,spacing:3,children:[e(n,{xs:12,md:4,children:e(i,{variant:"h6",children:"Category"})}),e(n,{xs:12,md:8,children:a(t,{spacing:3,children:[e(o,{error:!!(r.touched.category&&r.errors.category),fullWidth:!0,label:"Category",name:"category",onBlur:r.handleBlur,onChange:r.handleChange,select:!0,value:r.values.category,children:K.map(l=>e(G,{value:l.value,children:l.label},l.value))}),e(o,{disabled:!0,error:!!(r.touched.barcode&&r.errors.barcode),fullWidth:!0,label:"Barcode",name:"barcode",onBlur:r.handleBlur,onChange:r.handleChange,value:r.values.barcode}),e(o,{disabled:!0,error:!!(r.touched.sku&&r.errors.sku),fullWidth:!0,label:"SKU",name:"sku",onBlur:r.handleBlur,onChange:r.handleChange,value:r.values.sku})]})})]})})}),a(t,{alignItems:"center",direction:"row",justifyContent:"flex-end",spacing:1,children:[e(v,{color:"inherit",children:"Cancel"}),e(v,{type:"submit",variant:"contained",children:"Create"})]})]})})},ae=()=>(I(),a(T,{children:[e(V,{title:"Dashboard: Product Create"}),e(y,{component:"main",sx:{flexGrow:1,py:8},children:e(E,{maxWidth:"xl",children:a(t,{spacing:3,children:[a(t,{spacing:1,children:[e(i,{variant:"h4",children:"Create a new product"}),a(L,{separator:e($,{}),children:[e(x,{color:"text.primary",component:C,href:g.dashboard.index,variant:"subtitle2",children:"Dashboard"}),e(x,{color:"text.primary",component:C,href:g.dashboard.products.index,variant:"subtitle2",children:"Products"}),e(i,{color:"text.secondary",variant:"subtitle2",children:"Create"})]})]}),e(Q,{})]})})})]}));export{ae as default};