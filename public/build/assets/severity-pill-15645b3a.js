import{s as a,E as e,d as i}from"./app-51ffe495.js";const l=a("span")(({theme:o,ownerState:r})=>{const n=o.palette[r.color].alpha12,t=o.palette.mode==="dark"?o.palette[r.color].main:o.palette[r.color].dark;return{alignItems:"center",backgroundColor:n,borderRadius:12,color:t,cursor:"default",display:"inline-flex",flexGrow:0,flexShrink:0,fontFamily:o.typography.fontFamily,fontSize:o.typography.pxToRem(12),lineHeight:2,fontWeight:600,justifyContent:"center",letterSpacing:.5,minWidth:20,paddingLeft:o.spacing(1),paddingRight:o.spacing(1),textTransform:"uppercase",whiteSpace:"nowrap"}}),p=o=>{const{color:r="primary",children:n,...t}=o;return i(l,{ownerState:{color:r},...t,children:n})};p.propTypes={children:e.node,color:e.oneOf(["primary","secondary","error","info","warning","success"])};export{p as S};
