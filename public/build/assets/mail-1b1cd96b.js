import{j as i,_ as j,d as e,E as d,r as u,cM as Se,cN as Ae,P as je,l as b,k as y,I as g,J as m,bW as K,bt as _,D as L,f as v,G as k,B as T,cO as P,O as S,s as Q,F as R,T as Le,cd as Te,bA as W,a_ as Y,R as J,K as Re,b9 as X,ba as ee,bb as te,b6 as ae,L as $,cy as q,cA as D,p as I,m as ne,a$ as G,cr as ze,aO as Ee,bh as Pe,aZ as We,cP as qe,a as De,aN as Oe,cf as U,c as Be,S as Fe}from"./app-0b1a94df.js";import{u as Ve}from"./use-search-params-95bae2a5.js";import{A as O}from"./Attachment01-fe5ed94f.js";import{E as He}from"./Expand01-b6b29f1d.js";import{I as re}from"./Image01-acec4b39.js";import{Q as _e}from"./quill-editor-cecf191b.js";import{d as E}from"./deep-copy-ee95be26.js";import{D as $e}from"./Download01-d6311162.js";import{R as Ge}from"./react-markdown-d528564b.js";import{F as Ue}from"./FaceSmile-9f0ce186.js";import{L as Ze}from"./Link01-48b87bbb.js";import{C as ie}from"./ChevronLeft-2217ff83.js";import{D as se}from"./DotsHorizontal-4356fad9.js";import{T as oe}from"./Trash02-fab6519c.js";import{r as le,i as ce,a as de}from"./jsx-runtime_commonjs-proxy-0f1abb61.js";import{g as ue}from"./get-initials-d1c6cec7.js";import{R as Ne}from"./RefreshCcw02-c50758b7.js";import{S as he}from"./Star01-da915b95.js";import{P as Ke}from"./Plus-f9a973d9.js";import{A as Qe}from"./AlertCircle-4ac1ea2f.js";import{S as Ye}from"./Send01-7de185c0.js";import{L as Je}from"./ListSubheader-4e35e05e.js";var Xe=function(a){return i("svg",j({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none"},a,{children:[e("path",{fill:"#fff",fillOpacity:.01,d:"M4 14h6v6m10-10h-6V4"}),e("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 14h6m0 0v6m0-6-7 7m17-11h-6m0 0V4m0 6 7-7"})]}))};const me=t=>{const{maximize:a=!1,message:n="",onClose:r,onMaximize:o,onMessageChange:s,onMinimize:l,onSubjectChange:c,onToChange:h,open:f=!1,subject:x="",to:C=""}=t,M=u.useCallback(p=>{c==null||c(p.target.value)},[c]),w=u.useCallback(p=>{h==null||h(p.target.value)},[h]);return f?i(Se,{children:[e(Ae,{open:a}),i(je,{sx:{bottom:0,display:"flex",flexDirection:"column",margin:3,maxHeight:p=>`calc(100% - ${p.spacing(6)})`,maxWidth:p=>`calc(100% - ${p.spacing(6)})`,minHeight:500,outline:"none",position:"fixed",right:0,width:600,zIndex:1400,overflow:"hidden",...a&&{borderRadius:0,height:"100%",margin:0,maxHeight:"100%",maxWidth:"100%",width:"100%"}},elevation:12,children:[i(b,{sx:{alignItems:"center",display:"flex",px:2,py:1},children:[e(y,{variant:"h6",children:"New Message"}),e(b,{sx:{flexGrow:1}}),a?e(g,{onClick:l,children:e(m,{children:e(Xe,{})})}):e(g,{onClick:o,children:e(m,{children:e(He,{})})}),e(g,{onClick:r,children:e(m,{children:e(K,{})})})]}),e(_,{disableUnderline:!0,fullWidth:!0,onChange:w,placeholder:"To",sx:{p:1,borderBottom:1,borderColor:"divider"},value:C}),e(_,{disableUnderline:!0,fullWidth:!0,onChange:M,placeholder:"Subject",sx:{p:1,borderBottom:1,borderColor:"divider"},value:x}),e(_e,{onChange:s,placeholder:"Leave a message",sx:{border:"none",flexGrow:1},value:n}),e(L,{}),i(v,{alignItems:"center",direction:"row",justifyContent:"space-between",spacing:3,sx:{p:2},children:[i(v,{alignItems:"center",direction:"row",spacing:1,children:[e(k,{title:"Attach image",children:e(g,{size:"small",children:e(m,{children:e(re,{})})})}),e(k,{title:"Attach file",children:e(g,{size:"small",children:e(m,{children:e(O,{})})})})]}),e("div",{children:e(T,{variant:"contained",children:"Send"})})]})]})]}):null};me.propTypes={maximize:d.bool,message:d.string,onClose:d.func,onMaximize:d.func,onMessageChange:d.func,onMinimize:d.func,onSubjectChange:d.func,onToChange:d.func,open:d.bool,subject:d.string,to:d.string};const A=new Date,Z=[{id:"all",name:"All Mail",type:"system"},{id:"inbox",name:"Inbox",totalCount:0,type:"system",unreadCount:1},{id:"sent",name:"Sent",totalCount:0,type:"system",unreadCount:0},{id:"drafts",name:"Drafts",totalCount:0,type:"system",unreadCount:0},{id:"trash",name:"Trash",totalCount:1,type:"system",unreadCount:0},{id:"spam",name:"Spam",totalCount:0,type:"system",unreadCount:0},{id:"important",name:"Important",totalCount:1,type:"system",unreadCount:0},{id:"starred",name:"Starred",totalCount:1,type:"system",unreadCount:1},{id:"work",color:"#43A048",name:"Work",totalCount:1,type:"custom",unreadCount:0},{id:"business",color:"#1E88E5",name:"Business",totalCount:2,type:"custom",unreadCount:1},{id:"personal",color:"#FB8A00",name:"Personal",totalCount:1,type:"custom",unreadCount:0}],N=[{id:"5e86bcc3e1b53b6365d71638",attachments:[{id:"945d887e97f480359d3f591f",name:"working-sketch.png",size:"128.5Kb",type:"image",url:"/assets/covers/abstract-1-4x4-small.png"},{id:"09223c93e60f815fdce487af",name:"summer-customers.pdf",size:"782.3Kb",type:"file",url:"#"},{id:"165adb24c7b6a2e9aebba766",name:"desktop-coffee.png",size:"568.2Kb",type:"image",url:"/assets/covers/minimal-1-4x4-small.png"}],createdAt:A.getTime(),folder:"inbox",from:{avatar:"/assets/avatars/avatar-marcus-finn.png",email:"marcus.finn@devias.io",name:"Marcus Finn"},isImportant:!0,isStarred:!1,isUnread:!0,labelIds:["work","business"],message:`
Hi Matt, I saw your work on instagram and would be interested in getting a quote for Logo and slider

Integer velit massa, pharetra sed lacus eu, pulvinar faucibus ex. Ut pretium ex id turpis elementum, aliquam accumsan enim sollicitudin. Sed nec consectetur lorem, ac ullamcorper augue. Suspendisse tempus ligula suscipit finibus vehicula. Morbi viverra finibus lectus, egestas dictum mi mollis nec. Proin eget vehicula eros, sit amet molestie ipsum. Morbi feugiat, elit non placerat fringilla, leo risus tristique felis, sollicitudin tristique nibh arcu nec arcu. Maecenas vel turpis nibh. Etiam in lectus quis felis facilisis dictum. Morbi id vehicula lectus, vel imperdiet dolor. Phasellus consequat tempor tellus, quis placerat quam posuere eget. Mauris blandit, nisl eu sollicitudin tincidunt, tellus diam accumsan arcu, vel pharetra lectus est nec nisi. In sem dolor, mollis sed risus eu, mattis dictum lectus. Suspendisse urna est, finibus et urna non, tincidunt placerat eros.

Donec viverra ipsum id auctor rutrum. Morbi consequat a nunc non interdum. Nulla accumsan eget felis a dictum. Cras rhoncus tortor eget velit fringilla suscipit. Donec quis arcu eu nibh aliquet auctor eget fringilla felis. Sed commodo efficitur massa. Proin maximus elit in suscipit laoreet. Integer pretium arcu ac mauris ullamcorper auctor. Vivamus tincidunt lacus eget purus feugiat tincidunt. Etiam feugiat gravida ullamcorper. Pellentesque cursus vehicula lectus et consectetur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam ligula risus, congue eu pellentesque id, volutpat aliquam arcu. Donec efficitur ipsum id neque rhoncus viverra. Vestibulum hendrerit et eros eu bibendum.


Kind regards,

Marcus Finn
    `,subject:"Website redesign. Interested in collaboration",to:[{avatar:"/assets/avatars/avatar-anika-visser.png",email:"anika.visser@devias.io",name:"Anika Visser"}]},{id:"5e86bcbd8406cd3055f2b6c8",createdAt:A.getTime(),folder:"spam",from:{avatar:"/assets/avatars/avatar-miron-vitold.png",email:"miron.vitold@devias.io",name:"Miron Vitold"},isImportant:!1,isStarred:!0,isUnread:!1,labelIds:[],message:`
Hey, nice projects! I really liked the one in react. What's your quote on kinda similar project?
    `,subject:"Amazing work",to:[{avatar:"/assets/avatars/avatar-anika-visser.png",email:"anika.visser@devias.io",name:"Anika Visser"}]},{id:"5e86bcb9fee1ec12453fa13b",createdAt:A.getTime(),folder:"inbox",from:{avatar:"/assets/avatars/avatar-penjani-inyene.png",email:"penjani.inyene@devias.io",name:"Penjani Inyene"},isImportant:!1,isStarred:!1,isUnread:!1,labelIds:["business"],message:`
Dear Anika, Your flight is coming up soon. Please don’t forget to check in for your scheduled flight.
    `,subject:"Flight reminder",to:[{avatar:"/assets/avatars/avatar-anika-visser.png",email:"anika.visser@devias.io",name:"Anika Visser"}]},{id:"5e86bcb5575181a5e527e24f",createdAt:A.getTime(),folder:"trash",from:{avatar:"/assets/avatars/avatar-carson-darrin.png",email:"carson.darrin@devias.io",name:"Carson Darrin"},isImportant:!1,isStarred:!1,isUnread:!0,labelIds:["personal"],message:`
My market leading client has another fantastic opportunity for an experienced Software Developer to join them on a heavily remote basis
    `,subject:"Possible candidates for the position",to:[{avatar:"/assets/avatars/avatar-anika-visser.png",email:"anika.visser@devias.io",name:"Anika Visser"}]}];class et{getLabels(a){return Promise.resolve(E(Z))}getEmails(a){const{label:n}=a;return new Promise((r,o)=>{try{const s=E(N);let l=[];const c=Z.reduce((h,f)=>(f.type==="custom"&&h.push(f.id),h),[]);if(n&&c.includes(n))l=s.filter(h=>h.labelIds.includes(n));else switch(n){case void 0:case"inbox":l=s.filter(h=>h.folder==="inbox");break;case"all":l=[...s];break;case"sent":case"trash":l=s.filter(h=>h.folder===n);break;case"starred":l=s.filter(h=>h.isStarred);break;case"important":l=s.filter(h=>h.isImportant);break;default:}r(l)}catch(s){console.error("[Mail Api]: ",s),o(new Error("Internal server error"))}})}getEmail(a){const{emailId:n}=a;return new Promise((r,o)=>{try{const l=E(N).find(c=>c.id===n);if(!l){o(new Error("Email not found"));return}r(l)}catch(s){console.error("[Mail Api]: ",s),o(new Error("Internal server error"))}})}}const B=new et,tt=()=>async t=>{const a=await B.getLabels();t(P.actions.getLabels(a))},at=t=>async a=>{const n=await B.getEmails(t);a(P.actions.getEmails(n))},nt=t=>async a=>{const n=await B.getEmail(t);a(P.actions.getEmail(n))},F={getEmail:nt,getEmails:at,getLabels:tt},pe=t=>{const{attachments:a=[]}=t,n=a.length;return i(v,{spacing:2,children:[i(y,{variant:"h6",children:[n," Attachments"]}),e(v,{alignItems:"flex-start",direction:"row",spacing:2,flexWrap:"wrap",children:a.map(r=>i(v,{alignItems:"center",direction:"row",spacing:1,sx:{alignItems:"center",cursor:"pointer",display:"flex"},children:[r.type==="image"&&e(S,{src:r.url,variant:"rounded"}),r.type==="file"&&e(S,{variant:"rounded",sx:{backgroundColor:"primary.light"},children:e(y,{variant:"overline",children:"PDF"})}),i("div",{children:[e(y,{noWrap:!0,variant:"subtitle2",children:r.name}),e(y,{color:"text.secondary",variant:"body2",children:r.size})]})]},r.id))}),e("div",{children:e(T,{color:"inherit",startIcon:e(m,{children:e($e,{})}),size:"small",children:"Download all"})})]})};pe.propTypes={attachments:d.array};const rt=Q("div")(({theme:t})=>({color:t.palette.text.primary,fontFamily:t.typography.body1.fontFamily,"& > p":{fontSize:t.typography.body1.fontSize,lineHeight:t.typography.body1.lineHeight,marginBottom:t.spacing(2)}})),ge=t=>{const{message:a=""}=t;return e(rt,{children:e(Ge,{children:a})})};ge.propTypes={message:d.string};const it=t=>{const a=Te(),n=u.useRef(null),[r,o]=u.useState(""),s=u.useCallback(c=>{o(c.target.value)},[]),l=u.useCallback(()=>{var c;(c=n.current)==null||c.click()},[]);return i(R,{children:[e(b,{sx:{p:3},...t,children:i(v,{alignItems:"flex-start",direction:"row",spacing:2,children:[e(S,{src:a.avatar}),i(b,{sx:{flexGrow:1},children:[e(Le,{fullWidth:!0,maxRows:7,minRows:3,multiline:!0,onChange:s,placeholder:"Leave a message",value:r,variant:"outlined"}),i(v,{alignItems:"center",direction:"row",justifyContent:"space-between",spacing:3,sx:{mt:2},children:[i(v,{alignItems:"center",direction:"row",spacing:1,children:[e(k,{title:"Attach image",children:e(g,{onClick:l,size:"small",children:e(m,{children:e(re,{})})})}),e(k,{title:"Attach file",children:e(g,{onClick:l,size:"small",children:e(m,{children:e(O,{})})})}),e(g,{children:e(m,{children:e(Ze,{})})}),e(g,{children:e(m,{children:e(Ue,{})})})]}),e("div",{children:e(T,{variant:"contained",children:"Reply"})})]})]})]})}),e("input",{hidden:!0,ref:n,type:"file"})]})};var V={},st=ce;Object.defineProperty(V,"__esModule",{value:!0});var fe=V.default=void 0,ot=st(le()),lt=de,ct=(0,ot.default)((0,lt.jsx)("path",{d:"M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"}),"Reply");fe=V.default=ct;var H={},dt=ce;Object.defineProperty(H,"__esModule",{value:!0});var be=H.default=void 0,ut=dt(le()),ht=de,mt=(0,ut.default)((0,ht.jsx)("path",{d:"M7 8V5l-7 7 7 7v-3l-4-4 4-4zm6 1V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"}),"ReplyAll");be=H.default=mt;const ve=t=>{const{backHref:a,createdAt:n,from:r,to:o}=t,s=W(c=>c.breakpoints.up("md")),l=Y(n,"MMMM d yyyy, h:mm:ss a");return i("div",{children:[i(v,{alignItems:"center",direction:"row",justifyContent:"space-between",spacing:2,sx:{p:2},children:[e("div",{children:e(k,{title:"Back",children:e(g,{component:J,href:a,children:e(m,{children:e(Re,{})})})})}),i(v,{alignItems:"center",direction:"row",spacing:1,children:[e(X,{fullWidth:!0,placeholder:"Search message",size:"small",startAdornment:e(ee,{position:"start",children:e(m,{children:e(te,{})})}),sx:{width:200}}),e(k,{title:"Previous email",children:e(g,{children:e(m,{children:e(ie,{})})})}),e(k,{title:"Next email",children:e(g,{children:e(m,{children:e(ae,{})})})})]})]}),e(L,{}),i(v,{alignItems:"center",direction:"row",justifyContent:"space-between",spacing:2,sx:{p:3},children:[i(v,{alignItems:"center",direction:"row",spacing:2,children:[e(S,{src:r.avatar||void 0,sx:{height:48,width:48},children:ue(r.name)}),i("div",{children:[e(y,{component:"span",variant:"subtitle2",children:r.name})," ",e($,{color:"text.secondary",component:"span",variant:"body2",children:r.email}),i(y,{color:"text.secondary",variant:"subtitle2",children:["To:"," ",o.map(c=>e($,{color:"inherit",children:c.email},c.email))]}),l&&e(y,{color:"text.secondary",noWrap:!0,variant:"caption",children:l})]})]}),i(v,{alignItems:"center",direction:"row",spacing:1,children:[s&&i(R,{children:[e(k,{title:"Reply",children:e(g,{children:e(m,{children:e(fe,{})})})}),e(k,{title:"Reply all",children:e(g,{children:e(m,{children:e(be,{})})})}),e(k,{title:"Delete",children:e(g,{children:e(m,{children:e(oe,{})})})})]}),e(k,{title:"More options",children:e(g,{children:e(m,{children:e(se,{})})})})]})]})]})};ve.propTypes={backHref:d.string.isRequired,createdAt:d.number.isRequired,from:d.object.isRequired,to:d.array.isRequired};const pt=t=>{const a=q(),n=D(r=>r.mail.emails.byId[t]);return u.useEffect(()=>{a(F.getEmail({emailId:t}))},[t]),n},xe=t=>{const{emailId:a,currentLabelId:n}=t,r=pt(a);if(!r)return null;const o=n&&n!=="inbox"?I.dashboard.mail+`?label=${n}`:I.dashboard.mail,s=!!r.message,l=r.attachments&&r.attachments.length>0;return i(v,{sx:{flexGrow:1,height:"100%",overflowY:"auto"},children:[e(ve,{backHref:o,createdAt:r.createdAt,from:r.from,to:r.to}),i(b,{sx:{flexGrow:1,px:3,py:6},children:[e(y,{variant:"h3",children:r.subject}),i(v,{sx:{mt:2},spacing:6,children:[s&&e(ge,{message:r.message}),l&&e(pe,{attachments:r.attachments})]})]}),e(it,{})]})};xe.propTypes={emailId:d.string.isRequired,currentLabelId:d.string};const gt=Q("div",{shouldForwardProp:t=>t!=="open"})(({theme:t,open:a})=>({flexGrow:1,overflow:"hidden",[t.breakpoints.up("md")]:{marginLeft:-280},transition:t.transitions.create("margin",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen}),...a&&{[t.breakpoints.up("md")]:{marginLeft:0},transition:t.transitions.create("margin",{easing:t.transitions.easing.easeOut,duration:t.transitions.duration.enteringScreen})}}));var ye=function(a){return e("svg",j({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none"},a,{children:e("path",{fill:"#fff",fillOpacity:.01,stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 7.8c0-1.6802 0-2.5202.327-3.162a3 3 0 0 1 1.311-1.311C7.2798 3 8.1198 3 9.8 3h4.4c1.6802 0 2.5202 0 3.162.327a2.9997 2.9997 0 0 1 1.311 1.311C19 5.2798 19 6.1198 19 7.8V21l-7-4-7 4V7.8Z"})}))};const Ce=t=>{const{email:a,onDeselect:n,onSelect:r,selected:o,href:s,...l}=t,c=u.useCallback(C=>{C.target.checked?r==null||r():n==null||n()},[r,n]),h=Y(a.createdAt,"dd MMM"),f=!!(a.attachments&&a.attachments.length>0),x=!!(a.attachments&&a.attachments.length>1);return i(b,{sx:{alignItems:"center",borderBottomWidth:1,borderBottomStyle:"solid",borderBottomColor:"divider",display:"flex",p:2,...!a.isUnread&&{position:"relative","&:before":{backgroundColor:"primary.main",content:'" "',height:"100%",left:0,position:"absolute",top:0,width:4},"& $name, & $subject":{fontWeight:600}},...o&&{backgroundColor:"primary.lightest"},...!o&&{"&:hover":{backgroundColor:"action.hover"}}},...l,children:[i(b,{sx:{alignItems:"center",display:{md:"flex",xs:"none"},mr:1},children:[e(ne,{checked:o,onChange:c}),e(k,{title:"Starred",children:e(g,{children:e(m,{sx:{...a.isStarred&&{color:"warning.main","& path":{fill:C=>C.palette.warning.main,fillOpacity:1}}},children:e(he,{})})})}),e(k,{title:"Important",children:e(g,{children:e(m,{sx:{...a.isImportant&&{color:"warning.main","& path":{fill:C=>C.palette.warning.main,fillOpacity:1}}},children:e(ye,{})})})})]}),i(b,{component:J,href:s,sx:{alignItems:"center",cursor:"pointer",display:"flex",flexGrow:1,flexWrap:{xs:"wrap",md:"nowrap"},minWidth:1,textDecoration:"none"},children:[i(b,{sx:{alignItems:"center",display:"flex"},children:[e(S,{src:a.from.avatar||void 0,children:ue(a.from.name)}),e(y,{color:"text.primary",sx:{width:120,ml:2,...!a.isUnread&&{fontWeight:600}},noWrap:!0,variant:"body2",children:a.from.name})]}),i(b,{sx:{flexGrow:1,ml:{xs:0,md:2},my:{xs:2,md:0},overflow:"hidden",width:{xs:"100%",md:"auto"}},children:[i(b,{sx:{alignItems:"center",display:"flex",maxWidth:800,width:"100%"},children:[e(y,{color:"text.primary",sx:{fontWeight:600,minWidth:100,maxWidth:400,mr:1},noWrap:!0,variant:"body2",children:a.subject}),i(y,{color:"text.secondary",noWrap:!0,variant:"body2",children:["—",a.message]})]}),f&&i(b,{sx:{mt:1},children:[e(G,{icon:e(m,{children:e(O,{})}),label:a.attachments[0].name,size:"small"}),x&&e(G,{label:"+1",size:"small",sx:{ml:1}})]})]}),e(y,{color:"text.secondary",variant:"caption",sx:{display:"block",textAlign:{xs:"left",md:"right"},whiteSpace:"nowrap",width:100},children:h})]})]})};Ce.propTypes={email:d.object.isRequired,href:d.string.isRequired,onDeselect:d.func,onSelect:d.func,selected:d.bool.isRequired};const ft=t=>{const a=q(),{emails:n}=D(r=>r.mail);return u.useEffect(()=>{a(F.getEmails({label:t}))},[t]),n},bt=t=>{const[a,n]=u.useState([]);u.useEffect(()=>{n([])},[t]);const r=u.useCallback(()=>{n([...t])},[t]),o=u.useCallback(c=>{n(h=>h.includes(c)?h:[...h,c])},[]),s=u.useCallback(()=>{n([])},[]),l=u.useCallback(c=>{n(h=>h.filter(f=>f!==c))},[]);return{handleDeselectAll:s,handleDeselectOne:l,handleSelectAll:r,handleSelectOne:o,selected:a}},ke=t=>{const{currentLabelId:a,onSidebarToggle:n,...r}=t,o=ft(a),{handleDeselectAll:s,handleDeselectOne:l,handleSelectAll:c,handleSelectOne:h,selected:f}=bt(o.allIds),x=u.useCallback(p=>{p.target.checked?c():s()},[c,s]),C=f.length===o.allIds.length,M=f.length>0&&f.length<o.allIds.length,w=o.allIds.length>0;return i(v,{sx:{height:"100%",overflow:"hidden"},...r,children:[i(v,{alignItems:"center",direction:"row",justifyContent:"space-between",spacing:2,sx:{p:2},children:[e("div",{children:e(g,{onClick:n,children:e(m,{children:e(ze,{})})})}),i(v,{alignItems:"center",direction:"row",spacing:1,children:[e(X,{fullWidth:!0,placeholder:"Search email",size:"small",startAdornment:e(ee,{position:"start",children:e(m,{children:e(te,{})})}),sx:{width:200}}),i(y,{color:"text.secondary",sx:{display:{xs:"none",md:"block"},mx:2,whiteSpace:"nowrap"},variant:"body2",children:["1 - ",o.allIds.length," of ",o.allIds.length]}),e(k,{title:"Next page",children:e(g,{children:e(m,{children:e(ie,{})})})}),e(k,{title:"Previous page",children:e(g,{children:e(m,{children:e(ae,{})})})}),e(k,{title:"Refresh",children:e(g,{children:e(m,{children:e(Ne,{})})})})]})]}),e(L,{}),w?i(R,{children:[i(b,{sx:{alignItems:"center",borderBottomColor:"divider",borderBottomStyle:"solid",borderBottomWidth:1,display:{xs:"none",md:"flex"},p:2},children:[e(ne,{checked:C,indeterminate:M,onChange:x}),e(y,{variant:"subtitle2",children:"Select all"}),e(b,{sx:{flexGrow:1}}),e(k,{title:"More options",children:e(g,{children:e(m,{children:e(se,{})})})})]}),e("div",{children:o.allIds.map(p=>{const z=f.includes(p),Ie=a&&a!=="inbox"?I.dashboard.mail+`?emailId=${p}&label=${a}`:I.dashboard.mail+`?emailId=${p}`;return e(Ce,{email:o.byId[p],href:Ie,onDeselect:()=>l(p),onSelect:()=>h(p),selected:z},p)})})]}):i(v,{alignItems:"center",justifyContent:"center",spacing:2,sx:{flexGrow:1,p:2},children:[e(b,{component:"img",src:"/assets/errors/error-404.png",sx:{height:"auto",maxWidth:120}}),e(y,{color:"text.secondary",variant:"h5",children:"There are no emails"})]})]})};ke.propTypes={currentLabelId:d.string,onSidebarToggle:d.func};var vt=function(a){return i("svg",j({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none"},a,{children:[e("path",{fill:"#fff",fillOpacity:.01,d:"M14.7301 4H9.2699c-.9692 0-1.4538 0-1.8816.1476a2.7 2.7 0 0 0-1.0088.6235c-.3234.3166-.54.75-.9735 1.617l-1.95 3.8998c-.17.3401-.255.5102-.315.6885a2.6993 2.6993 0 0 0-.115.4866C3 11.6493 3 11.8395 3 12.2198V14.08c0 1.5121 0 2.2682.2943 2.8458.2588.508.6719.9211 1.18 1.1799.5775.2943 1.3336.2943 2.8457.2943h9.36c1.5121 0 2.2682 0 2.8458-.2943a2.6996 2.6996 0 0 0 1.1799-1.1799C21 16.3482 21 15.5921 21 14.08v-1.8602c0-.3803 0-.5705-.0261-.7568a2.6918 2.6918 0 0 0-.1149-.4866c-.0599-.1783-.145-.3484-.3151-.6885L18.594 6.388c-.4334-.8668-.6501-1.3003-.9735-1.617a2.7 2.7 0 0 0-1.0088-.6234C16.1839 4 15.6993 4 14.7301 4Z"}),e("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3.45 11.2h3.0438a1.628 1.628 0 0 1 1.4562.9c.2758.5516.8396.9 1.4562.9h5.1876a1.628 1.628 0 0 0 1.4562-.9 1.628 1.628 0 0 1 1.4562-.9H20.55M9.27 4h5.46c.9692 0 1.4538 0 1.8816.1476a2.7 2.7 0 0 1 1.0088.6235c.3234.3166.5401.75.9735 1.617l1.9499 3.8998c.1701.3401.2552.5102.3151.6885.0533.1583.0918.3212.1149.4866.0261.1863.0261.3765.0261.7568V14.08c0 1.5121 0 2.2682-.2943 2.8458a2.6996 2.6996 0 0 1-1.1799 1.1799c-.5776.2943-1.3337.2943-2.8458.2943H7.32c-1.5121 0-2.2682 0-2.8458-.2943a2.6998 2.6998 0 0 1-1.18-1.1799C3 16.3482 3 15.5921 3 14.08v-1.8602c0-.3803 0-.5705.026-.7568a2.6993 2.6993 0 0 1 .115-.4866c.06-.1783.145-.3484.315-.6885l1.95-3.8999c.4334-.8668.6501-1.3003.9735-1.617a2.7 2.7 0 0 1 1.0088-.6234C7.8161 4 8.3007 4 9.2699 4Z"})]}))},xt=function(a){return i("svg",j({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none"},a,{children:[e("path",{fill:"#fff",fillOpacity:.01,d:"M2.9373 11.9373c-.346-.3459-.5189-.5189-.6426-.7207a2.0013 2.0013 0 0 1-.2394-.5781C2 10.4083 2 10.1637 2 9.6745V5.2c0-1.1201 0-1.6802.218-2.108a2 2 0 0 1 .874-.874C3.5198 2 4.08 2 5.2 2h4.4745c.4892 0 .7338 0 .964.0553.204.049.3991.1298.5781.2394.2018.1237.3748.2966.7207.6426l7.6686 7.6686c1.188 1.188 1.7821 1.7821 2.0046 2.467a2.9996 2.9996 0 0 1 0 1.8541c-.2225.685-.8166 1.2791-2.0046 2.4671l-2.2118 2.2118c-1.188 1.188-1.7821 1.7821-2.4671 2.0046a2.9996 2.9996 0 0 1-1.8541 0c-.6849-.2225-1.279-.8166-2.467-2.0046l-7.6686-7.6686Z"}),e("path",{fill:"#fff",fillOpacity:.01,d:"M8.5 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"}),e("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 8h.01M2 5.2v4.4745c0 .4892 0 .7338.0553.964.049.204.1298.3991.2394.5781.1237.2018.2966.3748.6426.7207l7.6686 7.6686c1.188 1.188 1.7821 1.7821 2.467 2.0046a2.9996 2.9996 0 0 0 1.8541 0c.685-.2225 1.2791-.8166 2.4671-2.0046l2.2118-2.2118c1.188-1.188 1.7821-1.7821 2.0046-2.4671a2.9996 2.9996 0 0 0 0-1.8541c-.2225-.6849-.8166-1.279-2.0046-2.467l-7.6686-7.6686c-.3459-.346-.5189-.5189-.7207-.6426a2.0013 2.0013 0 0 0-.5781-.2394C10.4083 2 10.1637 2 9.6745 2H5.2c-1.1201 0-1.6802 0-2.108.218a2 2 0 0 0-.874.874C2 3.5198 2 4.08 2 5.2ZM8.5 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"})]}))};const yt={all:e(We,{}),inbox:e(vt,{}),sent:e(Ye,{}),trash:e(oe,{}),drafts:e(qe,{}),spam:e(Qe,{}),starred:e(he,{}),important:e(ye,{})},Ct=t=>t.type==="system"?yt[t.id]:e(xt,{}),kt=t=>t.type==="custom"&&t.color||"inherit",we=t=>{const{active:a,label:n,...r}=t,o=Ct(n),s=kt(n),l=!!(n.unreadCount&&n.unreadCount>0);return e(Ee,{disableGutters:!0,disablePadding:!0,sx:{"& + &":{mt:1}},...r,children:i(Pe,{sx:{borderRadius:1,color:"text.secondary",flexGrow:1,fontSize:c=>c.typography.button.fontSize,fontWeight:c=>c.typography.button.fontWeight,justifyContent:"flex-start",lineHeight:c=>c.typography.button.lineHeight,py:1,px:2,textAlign:"left","&:hover":{backgroundColor:"action.hover"},...a&&{backgroundColor:"action.selected",color:"text.primary"}},children:[e(m,{sx:{color:s,mr:1},children:o}),e(b,{sx:{flexGrow:1},children:n.name}),l&&e(y,{color:"inherit",variant:"subtitle2",children:n.unreadCount})]})})};we.propTypes={active:d.bool,label:d.object.isRequired,onClick:d.func};const wt=t=>{const a={system:[],custom:[]};return t.forEach(n=>{n.type==="system"?a.system.push(n):a.custom.push(n)}),a},Me=t=>{const{currentLabelId:a="inbox",container:n,labels:r,onClose:o,onCompose:s,open:l,...c}=t,h=De(),f=W(w=>w.breakpoints.up("md")),x=u.useCallback(w=>{f||o==null||o();const p=w.id!=="inbox"?I.dashboard.mail+`?label=${w.id}`:I.dashboard.mail;h.push(p)},[h,f,o]),C=wt(r),M=i("div",{children:[i(v,{alignItems:"center",direction:"row",spacing:2,sx:{pt:2,px:2},children:[e(y,{variant:"h5",sx:{flexGrow:1},children:"Mailbox"}),!f&&e(g,{onClick:o,children:e(m,{children:e(K,{})})})]}),e(b,{sx:{p:2},children:e(T,{fullWidth:!0,onClick:s,startIcon:e(m,{children:e(Ke,{})}),sx:{mt:2},variant:"contained",children:"Compose"})}),e(b,{sx:{pb:2,px:2},children:Object.keys(C).map(w=>i(u.Fragment,{children:[w==="custom"&&e(Je,{disableSticky:!0,children:e(y,{color:"text.secondary",variant:"overline",children:"Labels"})}),e(Oe,{disablePadding:!0,children:C[w].map(p=>{const z=a===p.id;return e(we,{active:z,label:p,onClick:()=>x(p)},p.id)})})]},w))})]});return f?e(U,{anchor:"left",open:l,PaperProps:{sx:{position:"relative",width:280}},SlideProps:{container:n},variant:"persistent",...c,children:M}):e(U,{anchor:"left",hideBackdrop:!0,ModalProps:{container:n,sx:{pointerEvents:"none",position:"absolute"}},onClose:o,open:l,PaperProps:{sx:{maxWidth:"100%",width:280,pointerEvents:"auto",position:"absolute"}},SlideProps:{container:n},variant:"temporary",...c,children:M})};Me.propTypes={container:d.any,currentLabelId:d.string,labels:d.array.isRequired,onClose:d.func,onCompose:d.func,open:d.bool};const Mt=()=>{const t=q(),a=D(r=>r.mail.labels),n=u.useCallback(()=>{t(F.getLabels())},[t]);return u.useEffect(()=>{n()},[]),a},It=()=>{const t={isFullScreen:!1,isOpen:!1,message:"",subject:"",to:""},[a,n]=u.useState(t),r=u.useCallback(()=>{n(x=>({...x,isOpen:!0}))},[]),o=u.useCallback(()=>{n(t)},[]),s=u.useCallback(()=>{n(x=>({...x,isFullScreen:!0}))},[]),l=u.useCallback(()=>{n(x=>({...x,isFullScreen:!1}))},[]),c=u.useCallback(x=>{n(C=>({...C,message:x}))},[]),h=u.useCallback(x=>{n(C=>({...C,subject:x}))},[]),f=u.useCallback(x=>{n(C=>({...C,to:x}))},[]);return{...a,handleClose:o,handleMaximize:s,handleMessageChange:c,handleMinimize:l,handleOpen:r,handleSubjectChange:h,handleToChange:f}},St=()=>{const t=W(l=>l.breakpoints.up("md")),[a,n]=u.useState(t),r=u.useCallback(()=>{n(!!t)},[t]);u.useEffect(()=>{r()},[t]);const o=u.useCallback(()=>{n(l=>!l)},[]),s=u.useCallback(()=>{n(!1)},[]);return{handleToggle:o,handleClose:s,open:a}},Kt=()=>{const t=u.useRef(null),a=Ve(),n=a.get("emailId"),r=a.get("label")||void 0,o=Mt(),s=It(),l=St();Be();const c=n?"details":"list";return i(R,{children:[e(Fe,{title:"Dashboard: Mail"}),e(L,{}),e(b,{component:"main",sx:{backgroundColor:"background.paper",flex:"1 1 auto",overflow:"hidden",position:"relative"},children:i(b,{ref:t,sx:{bottom:0,display:"flex",left:0,position:"absolute",right:0,top:0},children:[e(Me,{container:t.current,currentLabelId:r,labels:o,onClose:l.handleClose,onCompose:s.handleOpen,open:l.open}),i(gt,{open:l.open,children:[c==="details"&&e(xe,{currentLabelId:r,emailId:n}),c==="list"&&e(ke,{currentLabelId:r,onSidebarToggle:l.handleToggle})]})]})}),e(me,{maximize:s.isFullScreen,message:s.message,onClose:s.handleClose,onMaximize:s.handleMaximize,onMessageChange:s.handleMessageChange,onMinimize:s.handleMinimize,onSubjectChange:s.handleSubjectChange,onToChange:s.handleToChange,open:s.isOpen,subject:s.subject,to:s.to})]})};export{Kt as default};
