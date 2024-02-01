import{v as W,aT as L,r as s,w as D,o as O,cx as Q,c as A,j as i,F as d,d as t,S as H,l as p,aM as $,f as g,bs as K,E as U,k as h,B as c,q as k,R as S,p as _,c0 as I,bj as V,bk as J,D as X,u as v}from"./app-d2e90dc3.js";import{H as q}from"./Share07-da2f239a.js";import{s as w}from"./index-d7249f1a.js";import"./profile-95aecd12.js";import{I as Y}from"./inf-overview-942bea42.js";import{G as u}from"./Grid-963b0e38.js";import"./deep-copy-ee95be26.js";import"./social-post-card-c46a034f.js";import"./Clock-011ff842.js";import"./index-5b020bbf.js";import"./FaceSmile-e87a7e62.js";import"./Link01-a8d39428.js";import"./Attachment01-25f4d949.js";import"./Plus-7d0037ac.js";import"./Image01-f29d4db2.js";import"./use-mocked-user-2f7e8148.js";import"./get-initials-d1c6cec7.js";import"./CardHeader-8256efbe.js";import"./CardMedia-006affe5.js";import"./company-jobs-d5f4629f.js";import"./index-bf780c1b.js";import"./Users01-7fe15ca1.js";import"./overview-tips-ca65a83b.js";import"./CardActions-5435657d.js";import"./Calendar-cb67d698.js";import"./severity-pill-772ace92.js";import"./TableRow-5d8cde28.js";import"./chart-d202cb51.js";import"./index-2a0956c2.js";import"./index-9561e46a.js";import"./index-022bd9ab.js";const Z=[{label:"Overview",value:"infoverview"}],b=[{divider:1e18,suffix:"E"},{divider:1e15,suffix:"P"},{divider:1e12,suffix:"T"},{divider:1e9,suffix:"G"},{divider:1e6,suffix:"M"},{divider:1e3,suffix:"K"}],P=a=>{for(var r=0;r<b.length;r++)if(a>=b[r].divider)return Number(a/b[r].divider).toFixed(1).toString().replace(".0","")+b[r].suffix;return a.toString()},ee=()=>{const a=v(),[r,e]=s.useState(null),l=s.useCallback(async()=>{try{const o=await w.getProfile();a()&&e(o)}catch(o){console.error(o)}},[a]);return s.useEffect(()=>{l()},[]),r},te=()=>{const a=v(),[r,e]=s.useState([]),l=s.useCallback(async()=>{try{const o=await w.getPosts();a()&&e(o)}catch(o){console.error(o)}},[a]);return s.useEffect(()=>{l()},[]),r},se=(a="")=>{const[r,e]=s.useState([]),l=v(),o=s.useCallback(async()=>{const m=await w.getConnections();l()&&e(m)},[l]);return s.useEffect(()=>{o()},[a]),r.filter(m=>{var f;return(f=m.name)==null?void 0:f.toLowerCase().includes(a)})},ae=a=>{const r=L(),{socialinfo:e,userinfo:l}=a,o=ee(),[m,f]=s.useState("infoverview"),[ie,x]=s.useState("not_connected"),T=te(),[z,M]=s.useState("");se(z);const[G,y]=s.useState(!1),N=D();O(),s.useEffect(()=>{N(Q({infname:window.location.pathname.split("/")[4],socialtype:window.location.pathname.split("/")[3]}))},[N]);const C=s.useCallback(()=>{},[]),E=s.useCallback(()=>{y(!0)},[]),F=s.useCallback(()=>{y(!1)},[]);A(),s.useCallback(()=>{x("pending")},[]),s.useCallback(()=>{x("not_connected")},[]);const R=s.useCallback((n,B)=>{f(B)},[]);if(s.useCallback(n=>{M(n.target.value)},[]),!o)return null;const j=()=>{let n=window.location.pathname.split("/")[3];if(n=="instagram"||n=="twitter"||n=="pinterest")return e&&e.follower_count?P(e.follower_count):"0";if(n=="youtube"||n=="tiktok")return e&&e.subscribers?P(e.subscribers):"0"};return i(d,{children:[t(H,{title:"Dashboard: Social Profile"}),t(p,{component:"main",sx:{flexGrow:1,py:8},children:i($,{maxWidth:r.stretch?!1:"xl",children:[i("div",{children:[t(p,{style:{backgroundImage:`url(${o.cover})`},sx:{backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",borderRadius:1,height:421,position:"relative","&:hover":{"& button":{visibility:"visible"}}}}),i(g,{alignItems:"center",direction:"row",className:"custom-parent",spacing:2,sx:{mt:4},children:[i(g,{alignItems:"center",direction:"row",className:"custom-avatar",spacing:2,children:[t(p,{component:K,sx:{alignItems:"center",display:"flex",borderWidth:2,borderStyle:"solid",borderColor:"divider",height:140,width:140,borderRadius:"50%"},children:t(U,{src:e&&e.profile_pic_url_hd?e.profile_pic_url_hd:`https://ui-avatars.com/api/?name=${e&&e.full_name?e.full_name:""}&background=2970FF&color=fff&rounded=true`,sx:{height:130,width:130}})}),i("div",{className:"brand-info",children:[i(u,{container:!0,children:[i(u,{item:!0,sm:7,xs:7,children:[t(h,{color:"primary",variant:"h6",style:{fontSize:22,wordWrap:"break-word"},children:e?e.username:""}),t(h,{color:"text.secondary",className:"font-inter",variant:"subtitle2",style:{fontSize:12,fontWeight:600,marginTop:4},children:e?e.full_name:""})]}),t(u,{item:!0,sm:5,xs:5,children:t("div",{className:"custom-reach",children:i(u,{container:!0,children:[i(u,{item:!0,sx:{color:"#2970FF",fontSize:"11px",fontWeight:300,pl:1,pr:1,pt:.5,pb:.5},children:[t("div",{children:"Reach"}),t("div",{style:{fontSize:"16px",fontWeight:700},children:j()})]}),t(u,{item:!0,style:{display:"flex",alignItems:"center",margin:"0 auto"},children:t("div",{className:"reach-arrow"})})]})})})]}),t(h,{color:"text.secondary",className:"font-inter location-pointer",variant:"overline",style:{fontSize:12,marginTop:17}}),t(h,{color:"primary",variant:"overline",className:"font-inter",style:{fontSize:13},children:e?e.city+", "+e.Country:""})]})]}),t(p,{sx:{flexGrow:1}}),t(g,{alignItems:"center",direction:"row",spacing:2,className:"inf-button-bar",sx:{display:{md:"block"}},children:G?i(d,{children:[t(c,{onClick:F,className:"fav-btn=alone",startIcon:t(k,{sx:{transform:"scale(1.8)",color:"error.main","& path":{fill:n=>n.palette.error.main,fillOpacity:1}},children:t(q,{})})}),t(c,{className:"fav-btn-alone",startIcon:t("img",{src:"/assets/stats/users.png"})}),t(c,{onClick:C,size:"small",className:"fav-btn",startIcon:t(d,{children:t("img",{src:"/assets/icons/invite.svg"})}),variant:"outlined",children:"Invite To Project"}),t(c,{component:S,href:_.dashboard.chat,size:"small",className:"social-btn",startIcon:t(k,{children:t(I,{})}),variant:"contained",children:"Send Message"})]}):i(d,{children:[t(c,{onClick:E,className:"fav-btn-alone",startIcon:t(k,{sx:{transform:"scale(1.8)"},children:t(q,{})})}),t(c,{className:"fav-btn-alone",startIcon:t("img",{src:"/assets/stats/users.png"})}),t(c,{onClick:C,size:"small",className:"fav-btn",startIcon:t(d,{children:t("img",{src:"/assets/icons/invite.svg"})}),variant:"outlined",children:"Invite To Project"}),t(c,{component:S,href:_.dashboard.chat,size:"small",className:"social-btn",startIcon:t(k,{children:t(I,{})}),variant:"contained",children:"Send Message"})]})})]})]}),t("div",{className:"quick-link-bar",children:i("div",{className:"right-quick",children:[t("div",{className:"quick-font",children:"Quick links"}),i("div",{className:"quick-links",children:[e&&e.username?t("a",{className:"facebook-icon quick-link",href:"https://"+(e?e.username.split("/").length>1?e.username:"www.facebook.com/"+e.username:""),target:"_blank"}):t("a",{className:"facebook-icon quick-link",href:"https://www.facebook.com",target:"_blank"}),e&&e.username?t("a",{className:"instagram-icon quick-link",href:"https://"+(e?e.username.split("/").length>1?e.username:"www.instagram.com/"+e.username:""),target:"_blank"}):t("a",{className:"instagram-icon quick-link",href:"https://www.instagram.com",target:"_blank"}),e&&e.username?t("a",{className:"tiktok-icon quick-link",href:"https://"+(e?e.username.split("/").length>1?e.username:"www.tiktok.com/"+e.username:""),target:"_blank"}):t("a",{className:"tiktok-icon quick-link",href:"https://www.tiktok.com",target:"_blank"}),e&&e.username?t("a",{className:"youtube-icon quick-link",href:"https://"+(e?e.username.split("/").length>1?e.username:"www.youtube.com/@"+e.username:""),target:"_blank"}):t("a",{className:"youtube-icon quick-link",href:"https://www.youtube.com",target:"_blank"}),e&&e.username?t("a",{a:!0,className:"twitter-icon quick-link",href:"https://"+(e?e.username.split("/").length>1?e.username:"www.twitter.com/"+e.username:""),target:"_blank"}):t("a",{className:"twitter-icon quick-link",href:"https://www.twitter.com",target:"_blank"}),e&&e.username?t("a",{className:"pinterest-icon quick-link",href:"https://"+(e?e.username.split("/").length>1?e.username:"www.pinterest.com/"+e.username:""),target:"_blank"}):t("a",{className:"pinterest-icon quick-link",href:"https://www.pinterest",target:"_blank"})]})]})}),t(V,{indicatorColor:"primary",onChange:R,scrollButtons:"auto",sx:{mt:5},textColor:"primary",value:m,variant:"scrollable",className:"tab-panel",children:Z.map(n=>t(J,{className:"social-font",label:n.label,value:n.value},n.value))}),t(X,{}),t(p,{children:m==="infoverview"&&t(Y,{posts:T,profile:o,total:"ind"})})]})})]})},ne=a=>({socialinfo:a.profile.socialinfo,userinfo:a.profile.userinfo}),je=W(ne)(ae);export{je as default};
