import{o as d,n as p,s as C,_ as a,r as g,x as u,y as f,d as m,z as A,A as x}from"./app-51ffe495.js";function S(s){return d("MuiCardActions",s)}p("MuiCardActions",["root","spacing"]);const y=["disableSpacing","className"],b=s=>{const{classes:t,disableSpacing:o}=s;return x({root:["root",!o&&"spacing"]},S,t)},w=C("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(s,t)=>{const{ownerState:o}=s;return[t.root,!o.disableSpacing&&t.spacing]}})(({ownerState:s})=>a({display:"flex",alignItems:"center",padding:8},!s.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})),M=g.forwardRef(function(t,o){const e=u({props:t,name:"MuiCardActions"}),{disableSpacing:r=!1,className:i}=e,c=f(e,y),n=a({},e,{disableSpacing:r}),l=b(n);return m(w,a({className:A(l.root,i),ownerState:n,ref:o},c))}),U=M;export{U as C};