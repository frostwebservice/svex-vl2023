import{j as r,_ as j,d as e,E as V,C as g,e as S,f as o,O as D,R as v,p as f,L,k as t,J as c,l as s,r as n,bb as M,bt as W,D as b,a$ as A,F as y,bc as T,m as R,c as O,S as P,ax as E,ay as m,B as F,I as x,b6 as B,u as G}from"./app-0b1a94df.js";import{C as J}from"./ChevronLeft-2217ff83.js";import{C as N,j as z}from"./company-jobs-06fb1a07.js";import{S as U}from"./Star01-da915b95.js";import{U as Z}from"./Users01-f353f729.js";import{g as _}from"./get-initials-d1c6cec7.js";import{M as h}from"./multi-select-bb2eff8b.js";import"./deep-copy-ee95be26.js";import"./index-067a778f.js";var $=function(a){return r("svg",j({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none"},a,{children:[e("path",{fill:"#fff",fillOpacity:.01,d:"M9.763 3.8239a3.449 3.449 0 0 1-1.9626.813C6.112 4.7715 4.7716 6.112 4.6368 7.8003a3.449 3.449 0 0 1-.813 1.9626c-1.0984 1.2891-1.0984 3.1849 0 4.474a3.449 3.449 0 0 1 .813 1.9626c.1348 1.6882 1.4753 3.0289 3.1636 3.1636a3.4488 3.4488 0 0 1 1.9626.8129c1.2891 1.0985 3.1849 1.0985 4.474 0a3.449 3.449 0 0 1 1.9626-.8129c1.6882-.1347 3.0289-1.4754 3.1636-3.1636a3.449 3.449 0 0 1 .8129-1.9626c1.0985-1.2891 1.0985-3.1849 0-4.474a3.4488 3.4488 0 0 1-.8129-1.9626c-.1347-1.6883-1.4754-3.0288-3.1636-3.1636a3.449 3.449 0 0 1-1.9626-.813c-1.2891-1.0984-3.1849-1.0984-4.474 0Z"}),e("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"m9.3 12 1.8 1.8 4.05-4.05M7.8004 4.6368a3.449 3.449 0 0 0 1.9626-.813c1.2891-1.0984 3.1849-1.0984 4.474 0a3.449 3.449 0 0 0 1.9626.813c1.6882.1348 3.0289 1.4753 3.1636 3.1636a3.4488 3.4488 0 0 0 .8129 1.9626c1.0985 1.2891 1.0985 3.1849 0 4.474a3.449 3.449 0 0 0-.8129 1.9626c-.1347 1.6882-1.4754 3.0289-3.1636 3.1636a3.449 3.449 0 0 0-1.9626.8129c-1.2891 1.0985-3.1849 1.0985-4.474 0a3.4488 3.4488 0 0 0-1.9626-.8129c-1.6883-.1347-3.0288-1.4754-3.1636-3.1636a3.449 3.449 0 0 0-.813-1.9626c-1.0984-1.2891-1.0984-3.1849 0-4.474a3.449 3.449 0 0 0 .813-1.9626c.1348-1.6883 1.4753-3.0288 3.1636-3.1636Z"})]}))};const w=i=>{const{company:a,...d}=i;return e(g,{...d,children:r(S,{children:[r(o,{alignItems:"flex-start",spacing:2,direction:{xs:"column",sm:"row"},children:[e(D,{component:v,href:f.dashboard.jobs.companies.details,src:a.logo,variant:"rounded",children:_(a.name)}),r("div",{children:[e(L,{color:"text.primary",component:v,href:f.dashboard.jobs.companies.details,variant:"h6",children:a.name}),e(t,{variant:"body2",children:a.shortDescription}),r(o,{alignItems:"center",direction:"row",flexWrap:"wrap",spacing:3,sx:{mt:1},children:[r(o,{alignItems:"center",spacing:1,direction:"row",children:[e(c,{color:"action",children:e(Z,{})}),e(t,{color:"text.secondary",noWrap:!0,variant:"overline",children:a.employees})]}),r(o,{alignItems:"center",spacing:1,direction:"row",children:[e(c,{color:"action",children:e(U,{})}),r(t,{color:"text.secondary",noWrap:!0,variant:"overline",children:[a.averageRating,"/5"]})]}),a.isVerified&&r(o,{alignItems:"center",direction:"row",spacing:.5,children:[e(c,{sx:{color:"background.paper","& path":{fill:p=>p.palette.success.main,fillOpacity:1}},children:e($,{})}),e(t,{color:"success",noWrap:!0,variant:"overline",children:"Verified"})]})]})]})]}),e(s,{sx:{mt:2},children:e(N,{jobs:a.jobs})})]})})};w.propTypes={company:V.object.isRequired};const q=[{label:"Freelance",value:"freelance"},{label:"Full Time",value:"fullTime"},{label:"Part Time",value:"partTime"},{label:"Internship",value:"internship"}],H=[{label:"Novice",value:"novice"},{label:"Expert",value:"expert"}],K=[{label:"Africa",value:"africa"},{label:"Asia",value:"asia"},{label:"Europe",value:"europe"},{label:"North America",value:"northAmerica"},{label:"South America",value:"southAmerica"}],Q=[{label:"Web Developer",value:"webDeveloper"},{label:"Android Developer",value:"androidDeveloper"},{label:"iOS Developer",value:"iosDeveloper"}],X=i=>{const a=n.useMemo(()=>[{label:"Type",field:"type",value:"freelance",displayValue:"Freelance"},{label:"Type",field:"type",value:"internship",displayValue:"Internship"},{label:"Level",field:"level",value:"novice",displayValue:"Novice"},{label:"Location",field:"location",value:"asia",displayValue:"Asia"},{label:"Role",field:"role",value:"webDeveloper",displayValue:"Web Developer"}],[]),d=n.useMemo(()=>a.filter(l=>l.field==="type").map(l=>l.value),[a]),p=n.useMemo(()=>a.filter(l=>l.field==="level").map(l=>l.value),[a]),u=n.useMemo(()=>a.filter(l=>l.field==="location").map(l=>l.value),[a]),C=n.useMemo(()=>a.filter(l=>l.field==="role").map(l=>l.value),[a]),I=a.length>0;return r(g,{...i,children:[r(o,{alignItems:"center",direction:"row",spacing:2,sx:{p:2},children:[e(c,{children:e(M,{})}),e(s,{sx:{flexGrow:1},children:e(W,{disableUnderline:!0,fullWidth:!0,placeholder:"Enter a keyword"})})]}),e(b,{}),I?e(o,{alignItems:"center",direction:"row",flexWrap:"wrap",gap:1,sx:{p:2},children:a.map((l,k)=>e(A,{label:e(s,{sx:{alignItems:"center",display:"flex","& span":{fontWeight:600}},children:r(y,{children:[e("span",{children:l.label}),":"," ",l.displayValue||l.value]})}),onDelete:()=>{},variant:"outlined"},k))}):e(s,{sx:{p:2.5},children:e(t,{color:"text.secondary",variant:"subtitle2",children:"No filters applied"})}),e(b,{}),r(o,{alignItems:"center",direction:"row",flexWrap:"wrap",spacing:2,sx:{p:1},children:[e(h,{label:"Type",options:q,value:d}),e(h,{label:"Level",options:H,value:p}),e(h,{label:"Location",options:K,value:u}),e(h,{label:"Role",options:Q,value:C}),e(s,{sx:{flexGrow:1}}),e(T,{control:e(R,{defaultChecked:!0}),label:"In network"})]})]})},Y=()=>{const i=G(),[a,d]=n.useState([]),p=n.useCallback(async()=>{try{const u=await z.getCompanies();i()&&d(u)}catch(u){console.error(u)}},[i]);return n.useEffect(()=>{p()},[]),a},ce=()=>{const i=Y();return O(),r(y,{children:[e(P,{title:"Dashboard: Job Browse"}),e(s,{component:"main",sx:{flexGrow:1,py:8},children:r(E,{maxWidth:"lg",children:[r(m,{alignItems:"center",container:!0,sx:{backgroundColor:"neutral.900",borderRadius:1,color:"common.white",px:4,py:8},children:[r(m,{xs:12,sm:7,children:[e(t,{color:"inherit",variant:"h3",children:"Reach 50k+ potential candidates."}),e(t,{color:"neutral.500",sx:{mt:2},variant:"body1",children:"Post your job today for free. Promotions start at $99."}),e(F,{color:"primary",component:v,href:f.dashboard.jobs.create,size:"large",sx:{mt:3},variant:"contained",children:"Post a job"})]}),e(m,{sm:5,sx:{display:{xs:"none",sm:"flex"},justifyContent:"center"},children:e("img",{src:"/assets/iconly/iconly-glass-shield.svg"})})]}),r(o,{spacing:4,sx:{mt:4},children:[e(X,{}),i.map(a=>e(w,{company:a},a.id)),r(o,{alignItems:"center",direction:"row",justifyContent:"flex-end",spacing:2,sx:{px:3,py:2},children:[e(x,{disabled:!0,children:e(c,{fontSize:"small",children:e(J,{})})}),e(x,{children:e(c,{fontSize:"small",children:e(B,{})})})]})]})]})})]})};export{ce as default};
