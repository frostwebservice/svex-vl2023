import{aW as m,aX as A,E as T,r as s,j as r,f as P,d as e,J as D,bb as ee,bt as te,D as V,a$ as ae,l as I,F as z,k as S,cs as _,aM as re,aR as ne,I as G,aA as se,b6 as le,e as ie,T as M,aE as ce,ba as J,bd as oe,B,c as ue,S as de,ax as he,c2 as pe,c3 as ge,L as N,R as F,p as H,C as fe,u as me}from"./app-51ffe495.js";import{P as be}from"./Plus-b86fbfa1.js";import{a as ye}from"./apply-pagination-03aa54c3.js";import{d as ke}from"./deep-copy-ee95be26.js";import{M as U}from"./multi-select-bd7c030f.js";import{u as ve}from"./use-update-effect-96b608a9.js";import{D as Ce}from"./DotsHorizontal-120ed035.js";import{I as Se}from"./Image01-2eb3cb53.js";import{S as Pe}from"./severity-pill-15645b3a.js";import{T as we,b as K,c as h,a as xe}from"./TableRow-49926fa7.js";import{T as Ae}from"./TableHead-d5eeae27.js";import{L as Te}from"./LinearProgress-ad5c8f88.js";import{G as b}from"./Grid-c6cd7dbb.js";import{T as Ie}from"./TablePagination-e0c99a14.js";const g=new Date,Me=[{id:"5ece2c077e39da27658aa8a9",attributes:["Healthcare"],category:"healthcare",createdAt:m(g,1).getTime(),currency:"$",image:"/assets/products/product-1.png",inStock:!0,isAvailable:!0,isShippable:!1,name:"Healthcare Erbology",price:23.99,quantity:85,sku:"401_1BBXBK",status:"published",updatedAt:A(g,6).getTime(),variants:2},{id:"5ece2c0d16f70bff2cf86cd8",attributes:["Makeup"],category:"makeup",createdAt:m(g,3).getTime(),currency:"$",image:"/assets/products/product-2.png",inStock:!1,isAvailable:!1,isShippable:!0,name:"Makeup Lancome Rouge",price:95,quantity:0,sku:"978_UBFGJC",status:"published",updatedAt:m(A(g,8),2).getTime(),variants:1},{id:"5ece2c123fad30cbbff8d060",attributes:["Variety of styles"],category:"jewelry",createdAt:m(g,6).getTime(),currency:"$",image:null,inStock:!0,isAvailable:!0,isShippable:!1,name:"Layering Bracelets Collection",price:155,quantity:48,sku:"211_QFEXJO",status:"draft",updatedAt:m(A(g,2),1).getTime(),variants:5},{id:"5ece2c1be7996d1549d94e34",attributes:["Skincare"],category:"skincare",createdAt:m(g,12).getTime(),currency:"$",image:"/assets/products/product-4.png",inStock:!0,isAvailable:!1,isShippable:!0,name:"Skincare Necessaire",price:17.99,quantity:5,sku:"321_UWEAJT",status:"published",updatedAt:m(A(g,7),1).getTime(),variants:1},{id:"b393ce1b09c1254c3a92c827",attributes:["Skincare"],category:"skincare",createdAt:m(g,4).getTime(),currency:"$",image:"/assets/products/product-5.png",inStock:!0,isAvailable:!1,isShippable:!0,name:"Skincare Soja CO",price:65.99,quantity:10,sku:"592_LDKDI",status:"draft",updatedAt:m(A(g,1),1).getTime(),variants:1},{id:"a6ede15670da63f49f752c89",attributes:["Makeup"],category:"makeup",createdAt:m(g,6).getTime(),currency:"$",image:"/assets/products/product-6.png",inStock:!0,isAvailable:!1,isShippable:!0,name:"Makeup Lipstick",price:76.99,quantity:22,sku:"324_DKSEKD",status:"draft",updatedAt:m(A(g,3),3).getTime(),variants:1},{id:"bcad5524fe3a2f8f8620ceda",attributes:["Healthcare"],category:"healthcare",createdAt:m(g,7).getTime(),currency:"$",image:"/assets/products/product-7.png",inStock:!0,isAvailable:!1,isShippable:!0,name:"Healthcare Ritual",price:115.2,quantity:15,sku:"598_DOKEII",status:"published",updatedAt:m(A(g,5),6).getTime(),variants:1}];class De{getProducts(o={}){const{filters:c,page:y,rowsPerPage:k}=o;let i=ke(Me),l=i.length;return typeof c<"u"&&(i=i.filter(f=>!(typeof c.name<"u"&&c.name!==""&&!f.name.toLowerCase().includes(c.name.toLowerCase())||typeof c.category<"u"&&c.category.length>0&&!c.category.includes(f.category)||typeof c.status<"u"&&c.status.length>0&&!c.status.includes(f.status)||typeof c.inStock<"u"&&!(f.inStock===c.inStock))),l=i.length),typeof y<"u"&&typeof k<"u"&&(i=ye(i,y,k)),Promise.resolve({data:i,count:l})}}const Ve=new De,Q=[{label:"Healthcare",value:"healthcare"},{label:"Makeup",value:"makeup"},{label:"Dress",value:"dress"},{label:"Skincare",value:"skincare"},{label:"Jewelry",value:"jewelry"},{label:"Blouse",value:"blouse"}],X=[{label:"Published",value:"published"},{label:"Draft",value:"draft"}],Be=[{label:"All",value:"all"},{label:"Available",value:"available"},{label:"Out of Stock",value:"outOfStock"}],Y=u=>{const{onFiltersChange:o,...c}=u,y=s.useRef(null),[k,i]=s.useState(""),[l,f]=s.useState([]),v=s.useCallback(()=>{const t={name:void 0,category:[],status:[],inStock:void 0};l.forEach(n=>{switch(n.field){case"name":t.name=n.value;break;case"category":t.category.push(n.value);break;case"status":t.status.push(n.value);break;case"inStock":t.inStock=n.value==="available";break}}),o==null||o(t)},[l,o]);ve(()=>{v()},[l,v]);const R=s.useCallback(t=>{f(n=>n.filter(p=>!(t.field===p.field&&t.value===p.value)))},[]),L=s.useCallback(t=>{var n;t.preventDefault(),i(((n=y.current)==null?void 0:n.value)||"")},[]),O=s.useCallback(t=>{f(n=>{const p=[],w=n.filter(d=>{if(d.field!=="category")return!0;const C=t.includes(d.value);return C&&p.push(d.value),C});return t.length===p.length||t.forEach(d=>{if(!p.includes(d)){const C=Q.find(j=>j.value===d);w.push({label:"Category",field:"category",value:d,displayValue:C.label})}}),w})},[]),W=s.useCallback(t=>{f(n=>{const p=[],w=n.filter(d=>{if(d.field!=="status")return!0;const C=t.includes(d.value);return C&&p.push(d.value),C});return t.length===p.length||t.forEach(d=>{if(!p.includes(d)){const C=X.find(j=>j.value===d);w.push({label:"Status",field:"status",value:d,displayValue:C.label})}}),w})},[]),a=s.useCallback(t=>{f(n=>{const p=n.filter(d=>d.field!=="inStock");switch(t[t.length-1]){case"available":p.push({label:"Stock",field:"inStock",value:"available",displayValue:"Available"});break;case"outOfStock":p.push({label:"Stock",field:"inStock",value:"outOfStock",displayValue:"Out of Stock"});break}return p})},[]),x=s.useMemo(()=>l.filter(t=>t.field==="category").map(t=>t.value),[l]),q=s.useMemo(()=>l.filter(t=>t.field==="status").map(t=>t.value),[l]),E=s.useMemo(()=>{const t=l.filter(n=>n.field==="inStock").map(n=>n.value);return t.length===0&&t.unshift("all"),t},[l]),$=l.length>0;return r("div",{...c,children:[r(P,{alignItems:"center",component:"form",direction:"row",onSubmit:L,spacing:2,sx:{p:2},children:[e(D,{children:e(ee,{})}),e(te,{disableUnderline:!0,fullWidth:!0,inputProps:{ref:y},placeholder:"Search by product name",sx:{flexGrow:1},value:k})]}),e(V,{}),$?e(P,{alignItems:"center",direction:"row",flexWrap:"wrap",gap:1,sx:{p:2},children:l.map((t,n)=>e(ae,{label:e(I,{sx:{alignItems:"center",display:"flex","& span":{fontWeight:600}},children:r(z,{children:[e("span",{children:t.label}),":"," ",t.displayValue||t.value]})}),onDelete:()=>R(t),variant:"outlined"},n))}):e(I,{sx:{p:2.5},children:e(S,{color:"text.secondary",variant:"subtitle2",children:"No filters applied"})}),e(V,{}),r(P,{alignItems:"center",direction:"row",flexWrap:"wrap",spacing:1,sx:{p:1},children:[e(U,{label:"Category",onChange:O,options:Q,value:x}),e(U,{label:"Status",onChange:W,options:X,value:q}),e(U,{label:"Stock",onChange:a,options:Be,value:E})]})]})};Y.propTypes={onFiltersChange:T.func};const Re=[{label:"Healthcare",value:"healthcare"},{label:"Makeup",value:"makeup"},{label:"Dress",value:"dress"},{label:"Skincare",value:"skincare"},{label:"Jewelry",value:"jewelry"},{label:"Blouse",value:"blouse"}],Z=u=>{const{count:o=0,items:c=[],onPageChange:y=()=>{},onRowsPerPageChange:k,page:i=0,rowsPerPage:l=0}=u,[f,v]=s.useState(null),R=s.useCallback(a=>{v(x=>x===a?null:a)},[]),L=s.useCallback(()=>{v(null)},[]),O=s.useCallback(()=>{v(null),_.success("Product updated")},[]),W=s.useCallback(()=>{_.error("Product cannot be deleted")},[]);return r("div",{children:[e(re,{children:r(we,{sx:{minWidth:1200},children:[e(Ae,{children:r(K,{children:[e(h,{}),e(h,{width:"25%",children:"Name"}),e(h,{width:"25%",children:"Stock"}),e(h,{children:"Price"}),e(h,{children:"sku"}),e(h,{children:"Status"}),e(h,{align:"right",children:"Actions"})]})}),e(xe,{children:c.map(a=>{const x=a.id===f,q=ne(a.price).format(`${a.currency}0,0.00`),E=a.quantity>=10?"success":"error",$=a.status==="published"?"success":"info",t=a.variants>1;return r(s.Fragment,{children:[r(K,{hover:!0,children:[e(h,{padding:"checkbox",sx:{...x&&{position:"relative","&:after":{position:"absolute",content:'" "',top:0,left:0,backgroundColor:"primary.main",width:3,height:"calc(100% + 1px)"}}},width:"25%",children:e(G,{onClick:()=>R(a.id),children:e(D,{children:x?e(se,{}):e(le,{})})})}),e(h,{width:"25%",children:r(I,{sx:{alignItems:"center",display:"flex"},children:[a.image?e(I,{sx:{alignItems:"center",backgroundColor:"neutral.50",backgroundImage:`url(${a.image})`,backgroundPosition:"center",backgroundSize:"cover",borderRadius:1,display:"flex",height:80,justifyContent:"center",overflow:"hidden",width:80}}):e(I,{sx:{alignItems:"center",backgroundColor:"neutral.50",borderRadius:1,display:"flex",height:80,justifyContent:"center",width:80},children:e(D,{children:e(Se,{})})}),r(I,{sx:{cursor:"pointer",ml:2},children:[e(S,{variant:"subtitle2",children:a.name}),r(S,{color:"text.secondary",variant:"body2",children:["in ",a.category]})]})]})}),r(h,{width:"25%",children:[e(Te,{value:a.quantity,variant:"determinate",color:E,sx:{height:8,width:36}}),r(S,{color:"text.secondary",variant:"body2",children:[a.quantity," ","in stock",t&&` in ${a.variants} variants`]})]}),e(h,{children:q}),e(h,{children:a.sku}),e(h,{children:e(Pe,{color:$,children:a.status})}),e(h,{align:"right",children:e(G,{children:e(D,{children:e(Ce,{})})})})]},a.id),x&&e(K,{children:r(h,{colSpan:7,sx:{p:0,position:"relative","&:after":{position:"absolute",content:'" "',top:0,left:0,backgroundColor:"primary.main",width:3,height:"calc(100% + 1px)"}},children:[e(ie,{children:r(b,{container:!0,spacing:3,children:[r(b,{item:!0,md:6,xs:12,children:[e(S,{variant:"h6",children:"Basic details"}),e(V,{sx:{my:2}}),r(b,{container:!0,spacing:3,children:[e(b,{item:!0,md:6,xs:12,children:e(M,{defaultValue:a.name,fullWidth:!0,label:"Product name",name:"name"})}),e(b,{item:!0,md:6,xs:12,children:e(M,{defaultValue:a.sku,disabled:!0,fullWidth:!0,label:"SKU",name:"sku"})}),e(b,{item:!0,md:6,xs:12,children:e(M,{defaultValue:a.category,fullWidth:!0,label:"Category",select:!0,children:Re.map(n=>e(ce,{value:n.value,children:n.label},n.value))})}),e(b,{item:!0,md:6,xs:12,children:e(M,{defaultValue:a.id,disabled:!0,fullWidth:!0,label:"Barcode",name:"barcode"})})]})]}),r(b,{item:!0,md:6,xs:12,children:[e(S,{variant:"h6",children:"Pricing and stocks"}),e(V,{sx:{my:2}}),r(b,{container:!0,spacing:3,children:[e(b,{item:!0,md:6,xs:12,children:e(M,{defaultValue:a.price,fullWidth:!0,label:"Old price",name:"old-price",InputProps:{startAdornment:e(J,{position:"start",children:a.currency})},type:"number"})}),e(b,{item:!0,md:6,xs:12,children:e(M,{defaultValue:a.price,fullWidth:!0,label:"New price",name:"new-price",InputProps:{startAdornment:e(J,{position:"start",children:"$"})},type:"number"})}),r(b,{item:!0,md:6,xs:12,sx:{alignItems:"center",display:"flex"},children:[e(oe,{}),e(S,{variant:"subtitle2",children:"Keep selling when stock is empty"})]})]})]})]})}),e(V,{}),r(P,{alignItems:"center",direction:"row",justifyContent:"space-between",sx:{p:2},children:[r(P,{alignItems:"center",direction:"row",spacing:2,children:[e(B,{onClick:O,type:"submit",variant:"contained",children:"Update"}),e(B,{color:"inherit",onClick:L,children:"Cancel"})]}),e("div",{children:e(B,{onClick:W,color:"error",children:"Delete product"})})]})]})})]},a.id)})})]})}),e(Ie,{component:"div",count:o,onPageChange:y,onRowsPerPageChange:k,page:i,rowsPerPage:l,rowsPerPageOptions:[5,10,25]})]})};Z.propTypes={count:T.number,items:T.array,onPageChange:T.func,onRowsPerPageChange:T.func,page:T.number,rowsPerPage:T.number};const Le=()=>{const[u,o]=s.useState({filters:{name:void 0,category:[],status:[],inStock:void 0},page:0,rowsPerPage:5}),c=s.useCallback(i=>{o(l=>({...l,filters:i}))},[]),y=s.useCallback((i,l)=>{o(f=>({...f,page:l}))},[]),k=s.useCallback(i=>{o(l=>({...l,rowsPerPage:parseInt(i.target.value,10)}))},[]);return{handleFiltersChange:c,handlePageChange:y,handleRowsPerPageChange:k,state:u}},Oe=u=>{const o=me(),[c,y]=s.useState({products:[],productsCount:0}),k=s.useCallback(async()=>{try{const i=await Ve.getProducts(u);o()&&y({products:i.data,productsCount:i.count})}catch(i){console.error(i)}},[u,o]);return s.useEffect(()=>{k()},[u]),{...c}},Xe=()=>{const u=Le(),o=Oe(u.state);return ue(),r(z,{children:[e(de,{title:"Dashboard: Product List"}),e(I,{component:"main",sx:{flexGrow:1,py:8},children:e(he,{maxWidth:"xl",children:r(P,{spacing:4,children:[r(P,{direction:"row",justifyContent:"space-between",spacing:4,children:[r(P,{spacing:1,children:[e(S,{variant:"h4",children:"Products"}),r(pe,{separator:e(ge,{}),children:[e(N,{color:"text.primary",component:F,href:H.dashboard.index,variant:"subtitle2",children:"Dashboard"}),e(N,{color:"text.primary",component:F,href:H.dashboard.products.index,variant:"subtitle2",children:"Products"}),e(S,{color:"text.secondary",variant:"subtitle2",children:"List"})]})]}),e(P,{alignItems:"center",direction:"row",spacing:3,children:e(B,{component:F,href:H.dashboard.products.create,startIcon:e(D,{children:e(be,{})}),variant:"contained",children:"Add"})})]}),r(fe,{children:[e(Y,{onFiltersChange:u.handleFiltersChange}),e(Z,{onPageChange:u.handlePageChange,onRowsPerPageChange:u.handleRowsPerPageChange,page:u.state.page,items:o.products,count:o.productsCount,rowsPerPage:u.state.rowsPerPage})]})]})})})]})};export{Xe as default};
